import { after } from "node:test";

export default {
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    // Usando a pool para criar uma restrição de chave estrangeira
    pool: {
        afterCreate: (connection: any, done: any) => {
            connection.run("PRAGMA foreign_keys = ON");
            done();
        },
    },
    useNullAsDefault: true,

    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations",
    },

    seeds: {
        extensions: "ts",
        directory: "./src/database/seeds",
    },
};
