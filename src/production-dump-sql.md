# get a prod dump working locally

- ssh to prod server
- go to api container, run `python manage.py runscript dump_database`
- docker cp / scp onto local machine
- `perl -pi -e 's/rdsAdmin/resolvio/g' filename.sql`
- add this to the clear.sql file:

```sql
-- Drop schemas from non-dev environments
DROP SCHEMA metric_helpers CASCADE;
DROP SCHEMA user_management CASCADE;


--
-- We need these roles just for dumps of non-dev environments.
--
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_roles WHERE rolname = 'resolvio'
   ) THEN
      CREATE ROLE your_role_name;
   END IF;
END
$$;

DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_roles WHERE rolname = 'root'
   ) THEN
      CREATE ROLE your_role_name;
   END IF;
END
$$;


COMMIT;
```

- now, hopefully, everything will work as expected. If not, **please** adjust this file 😎
