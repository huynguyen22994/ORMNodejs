var User = require('../models/Users');

module.exports.createUser = (user) => {
    var newUser = User.build({
        name: user.name,
        age: user.age,
        address: user.address
    });
    return newUser.save();
};

module.exports.updateUser = () => {
    
};

module.exports.getNameAndAge = (id) => {
    return User.findById(id, {attributes: ['name', 'age']});
};