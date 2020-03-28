const tableNaming = require("../../src/constants/tableNames");
const { addDefaultColumns, basicTable, references } = require("../utils/index");

exports.up = async knex => {
  await Promise.all([
    knex.schema.createTable(tableNaming.user, table => {
      table.increments().notNullable();
      table
        .text("email")
        .notNullable()
        .unique();
      table.text("name").notNullable();
      table.text("password", 127).notNullable();
      table.datetime("last_login");
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNaming.item_type, table => {
      basicTable(table);
    }),
    knex.schema.createTable(tableNaming.item, table => {
      table.increments().notNullable();
      table.text("name").notNullable();
      table.integer("quantity").notNullable();
      table.float("price").notNullable();
      references(table, "item_type");
    }),
    knex.schema.createTable(tableNaming.item_image, table => {
      table.increments().notNullable();
      table.text("image_url").notNullable();
      references(table, "item");
    }),
    knex.schema.createTable(tableNaming.shopping_center, table => {
      basicTable(table);
      table.text("location").notNullable();
      references(table, "item");
    })
  ]);
};

exports.down = async knex => {
  // rollback
  await Promise.all(
    Object.values(tableNaming).map(tableName =>
      knex.schema.dropTable(tableName)
    )
  );
};
