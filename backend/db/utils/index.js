function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime("deleted_at");
}

function basicTable(table) {
  table.increments().notNullable();
  table
    .text("name")
    .notNullable()
    .unique();
  addDefaultColumns(table);
}

function references(table, tableName) {
  table
    .integer(`${tableName}_id`)
    .unsigned()
    .references("id")
    .inTable(tableName)
    .onDelete("cascade");
}

module.exports = {
  addDefaultColumns,
  basicTable,
  references
};
