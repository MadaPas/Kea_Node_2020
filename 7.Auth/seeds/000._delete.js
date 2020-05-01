exports.seed = function(knex) {
  return knex('electives').del()
    .then(() => {
      return knex('users').del();
    });
};
