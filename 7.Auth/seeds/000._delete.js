exports.seed = function(knex) {
  return knex('users_electives').del()
    .then(() => {
      return knex('users').del();
    });
};
