import knex from "knex";
import path from "path";

export const connections = {
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "database.sqlite"),
    },
    migrations: {
      directory: path.resolve(__dirname, "migrations"),
    },
    useNullAsDefault: true,
  },

  postgres: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "docker",
      password: "docker",
      database: "dockerdb",
    },
    migrations: {
      directory: path.resolve(__dirname, "migrations"),
    },
    useNullAsDefault: true,
  },
};

const db = knex(connections.sqlite);

export { db };
