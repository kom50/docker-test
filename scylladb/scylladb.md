
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


## ScyllaDB CRUD operation

## Create KeySpace in ScyllaDB 

```
CREATE KEYSPACE <KeySpace_name> WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
};
```

## Use keyspace 

```
use <KeySpace_name>;
```

## Create Table 

```
CREATE TABLE items ( 
   id uuid PRIMARY KEY,
   name text, 
   completed boolean
);
```
## Insert data

```
INSERT INTO items (id, name, completed) VALUES (uuid(), 'Todo 1', false);
```
## Show table data

```
 SELECT *FROM items;
```

## Update table data

```
UPDATE items  SET completed = true WHERE id = 3699e2ae-a28c-45a3-ae9a;
```

## Delete table data

```
DELETE FROM todos.items WHERE id = 3699e2ae-a28c-45a3-ae9a;
```

**Screenshort**

![Alt text](image-2.png)