/**
 * Create notes table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("note", (table) => {
    table.increments("id").primary().unsigned();
    table.string("note_name", 30).notNull();
    table.string("description", 2000).notNull();
  });
}

/**
 * Drop table notes
 *
 * @param {  Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("note");
}
