# Movie-manager
Movie manager is simple application that helps creating movie collection.
How application works:
* New movies in collection are pulled from imdb database
* Movie collection and movie details can be viewed in frontend application
* Adding comments is available in movie details
* All data is persisted and saved in elasticsearch

# How to run application?
```shell
# Clone repository
git clone https://github.com/Esemesek/movie-manager.git && cd movie-manager

# Create .env file with API_KEY to imdb
echo "API_KEY=${API_KEY}" > server/.env

# Run docker container in production
docker-compose -f production.yml up -d

# Initialize indexes in database
cd database && yarn && node index.js
```

Application should be available on localhost
