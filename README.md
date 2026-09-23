# Interview

Express API backed by PostgreSQL through TypeORM.

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and set the database password.
3. Create the Postgres database named in `DB_NAME` (default `interview_db`). Postgres must be running on `DB_HOST` and `DB_PORT`.

## Run

Development (restarts on file changes):

```bash
npm run dev
```

Production:

```bash
npm run build
npm start
```

The server listens on `PORT` (default `3000`). Check it at [http://localhost:3000/health](http://localhost:3000/health). It exits if the database connection fails.

## Test

```bash
npm test
```