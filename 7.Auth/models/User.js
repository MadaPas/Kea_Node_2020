const {
    Model
} = require('objection');

const Elective = require('./Elective.js');
//extending model = inheritance
class User extends Model {
    static tableName = 'users';
    // static get tableName() {
    //     return 'users';        
    // }

    static relationMappings = {
        electives: {
            relation: Model.HasManyRelation,
            modelClass: Elective,
            join: {
                from: 'users.id',
                to: 'electives.userId'
            }
        }
    }
}

module.exports = User;