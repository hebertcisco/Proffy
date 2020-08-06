import Knex from "knex";

const databaseNOW =
  process.env.DATABASE === "pg" ? "now()" : "CURRENT_TIMESTAMP";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("created_at")
      // .defaultTo('now()')
      .defaultTo(knex.raw(databaseNOW))
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
