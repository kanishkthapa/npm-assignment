/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.raw(`create extension if not exists "uuid-ossp"`);
    return knex.schema.createTable("fav_pkg_backend", function(table){
        table.increments("id").primary();
        table.string("packageName",255).primary();
        table.text("description");
        table.primary(["id","packageName","uuid"]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("fav_pkg_backend");
};
