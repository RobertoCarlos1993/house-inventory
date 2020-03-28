const tableNaming = require("../../src/constants/tableNames");

const shopping_names_types = [
  {
    name: "Alcampo",
    location: "MAD"
  },
  {
    name: "Carrefour",
    location: "MAD"
  },
  {
    name: "Ahorramas",
    location: "MAD"
  },
  {
    name: "Mercadona",
    location: "MAD"
  },
  {
    name: "Other",
    location: "MAD"
  }
];

exports.seed = function(knex, Promise) {
  return knex(tableNaming.shopping_center)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(tableNaming.shopping_center).insert(
        shopping_names_types.map((item, id) => {
          const { name, location } = item;
          return {
            name,
            location,
            id: id + 1
          };
        })
      );
    });
};
