
exports.seed = function(knex) {

      return knex('users').select().then(users => {
        console.log(users);
        if (users.length >= 2) {

      return knex('users_electives').insert([
        {course_name: 'Python', user_id: users[0].id},
        {course_name: 'Android', user_id: users[0].id},
        {course_name: 'IOS', user_id: users[0].id},
        {course_name: 'PADC', user_id: users[0].id},
        {course_name: 'Python', user_id: users[1].id},
        {course_name: 'NodeJs', user_id: users[1].id},
        {course_name: 'Advanced Python', user_id: users[1].id},
        {course_name: 'C', user_id: users[1].id},
      ]);
        }
      });
};
