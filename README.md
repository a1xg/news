## Deploy

#### Copy the repository
```git clone https://github.com/a1xg/news.git```
#### Go to the root of the project
```cd news```
#### Run docker-compose
```docker-compose up```

* The DRF-API server will be launched, accessible by http://localhost:8000/api/v1/news/list
* The front-end server will be launched at http://localhost:3000


## Postman API tests

* Create a new empty environment in Postman before running the collection
* Import the Postman collection from the [link](https://github.com/a1xg/news/blob/master/News.postman_collection.json)
