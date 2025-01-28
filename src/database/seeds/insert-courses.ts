import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "HTML" },
        { name: "Typescript" },
        { name: "CSS" },
        { name: "Node" },
        { name: "React" },
        { name: "Git" },
        { name: "Github" },
        { name: "Express" },
        { name: "Banco de dados" },
    ]);
}
