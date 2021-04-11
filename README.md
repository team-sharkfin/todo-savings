# todo-savings

## Running the Application

Install the following prerequisites:

- [Docker](https://docs.docker.com/get-started/#download-and-install-docker)
- [Docker Compose](https://docs.docker.com/compose/install/)

Clone this repo.

```bash
git clone git@github.com:team-sharkfin/todo-savings.git
```

Change to the freshly cloned repo, rename `.env.example` to `.env`, and edit the values as needed.

Finally, start the application.

```bash
docker-compose up -d
```

Refer to `.env` for the ports that the various services are listening on.
