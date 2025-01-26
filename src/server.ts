import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

app.post("/courses", async (request: Request, response: Response) => {
    const { name } = request.body;

    //Fazendo inserção de registros com knex e query builder
    await knex("courses").insert({ name });

    /* Outra maneira de fazer inserção através do método raw onde você consegue utilizar comandos sql ao invés das funções do knex e query builder
    
    await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);
    */

    response.status(201).json();
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
