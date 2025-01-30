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

    return response.status(201).json();
});

app.get("/courses", async (request: Request, response: Response) => {
    const courses = await knex("courses").select("*").orderBy("name");

    /* ou usando raw
     const courses = await knex.raw("SELECT * FROM courses");
     */

    return response.json(courses);
});

app.put("/courses/:id", async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name } = request.body;

    await knex("courses").update({ name }).where({ id });

    return response.json();
});

app.delete("/courses/:id", async (request: Request, response: Response) => {
    const { id } = request.params;

    await knex("courses").delete().where({ id });

    return response.json();
});

app.post("/modules", async (request: Request, response: Response) => {
    const { name, course_id } = request.body;

    await knex("course_modules").insert({ name, course_id });

    return response.status(201).json();
});

app.get("/modules", async (request: Request, response: Response) => {
    const modules = await knex("course_modules").select();

    return response.json(modules);
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
