const tableNaming = require("../../src/constants/tableNames");

const item_types = [
  "Meat",
  "Veggies",
  "Fruit",
  "Spice",
  "Flour",
  "Nuts",
  "Herb",
  "House Cleaning Material",
  "Cosmetics"
];

exports.seed = function(knex, Promise) {
  return knex(tableNaming.item_type)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(tableNaming.item_type).insert(
        item_types.map((item, id) => {
          return {
            name: item,
            id: `${id + 1}`
          };
        })
      );
    });
};
