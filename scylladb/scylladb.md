
## Pull the ScyllaDB image

```
sudo docker pull scylladb/scylla
```

## Create a Docker Volume

```
docker volume create scylla_data
```
## Run the ScyllaDB Docker Container with the Volume:

```
docker run -d --name my_scylla_container -v scylla_data:/var/lib/scylla -p 9042:9042 scylladb/scylla
```

**Notes:** ScyllaDB's data will be stored on the `scylla_data` Docker volume, ensuring data persistence even if you stop and start the container. 

## Run the ScyllaDB Docker Container

```
sudo docker run --name scylla-container -d scylladb/scylla
```
## Or With port mapping
```
sudo docker run -d --name scylla-container -p 9042:9042 scylladb/scylla
```

## Run cqlsh

```
sudo docker exec -it scylla-container cqlsh
```


![Alt text](image.png)


## Run container bash 

```
sudo docker exec -it scylla-container bash
```

![Alt text](image-1.png)


[Ref](https://chat.openai.com/share/ce2c68bb-54c2-4fb5-b910-f9c985fca1ab)