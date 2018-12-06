- `docker ps` will show containers and their state

- `docker service ps [service] [service...]` will show the current and desired states of services.

- to read the *docker daemon logs*, issue `journalctl -u docker.service` on a ubuntu system. (otherwise, consult [the docs](https://docs.docker.com/config/daemon/#out-of-memory-exceptions-oome))

If `docker swarm leave` throws a `context deadline exceeded` error, the node will not be able to leave the swarm and join a swarm anew. A solution is presented here:
https://github.com/moby/moby/issues/25432j

- Stop the docker service: `service docker stop`
- Backup and delete `/var/lib/docker/swarm`: 
    - `cp -ar /var/lib/docker/swarm /tmp/swarm.bak`
    - `rm -rf /var/lib/docker/swarm`
- Restart docker: `service docker start`


Re-initializing the swarm can help if any of the services gets stuck in an `assigned` state: 
- `docker swarm leave --force`
- `docker swarm init`

`docker stats` can be used to view information about cpu and memory consumption.