- `docker ps` will show containers and their state

- `docker service ps [service] [service...]` will show the current and desired states of services.

`docker stats` will show resource usage
`docker system info` shows various info about the current engine

- logs for a service can be obtained with `docker service logs --follow --timestamps`. This will greatly help in **debugging services which refuse to start**!

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

To keep a container running and open with a dummy command, use `tail -f /dev/null`

Missing network when starting containers: 
https://github.com/docker/compose/issues/5745#issuecomment-370031631
(basically, start with `--force-recreate`)

See what a `docker-compose.yml` looks like after variables have been substituted:
`docker-compose config`
