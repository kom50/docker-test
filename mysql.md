
### Start MySQL using Docker

#### Create Network
```
docker network create todo-app
```

#### Pull MySQL version 8 image
```
docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:8.0
```
**Notes:-** You can update following details 
- MYSQL_ROOT_PASSWORD=`<your-password>` 
- MYSQL_DATABASE=`<your-database-name>`

# Run MySQL 
```
docker exec -it <mysql-container-id> mysql -u root -p
```

### Notes
- Use MySQL password - (`secret` or `<your added password>`) that is added in `docker run` command

[Ref](https://docs.docker.com/get-started/07_multi_container/)