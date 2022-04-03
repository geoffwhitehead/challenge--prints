### **Description**

Express server that exposes a single endpoint to query a paginated list of prints. Frontend is a CRA app client that displays a single route to render a paginated list of prints.

Queries are cached on the server using redis, keyed by page number (the pagination is static). React query is used in the front end to handle client caching.

Services

- Client (React)
- Server (Node Express)
- Server cache (Redis)

### **Requirements**

- Node 14
- Docker
- Yarn

### **Running the app**

1. Env variables: Once cloned, open `server/src/pre-start-env/.env.development.local` and add the `API_KEY` variable. This is used for the harvard art museum api (https://api.harvardartmuseums.org).
2. Run `yarn dev` in the root directory. This will run `docker-compose up` . The app will be available on `localhost:3000`

By default, the services run on these addresses:

- server: `localhost:8000`
- client: `localhost:3000`
- redis: `localhost:6379`
