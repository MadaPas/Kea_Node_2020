
exports.seed = function(knex) {
      return knex('users').insert([
        { username: 'admin', password: 'pass' },
        { username: 'second-user', password: 'another-pass'}
      ]);
};
