var Publisher = require('../models/Publisher');

module.exports.getPublishers = () => {
    return Publisher.all()
};

module.exports.insertPublisher = (publisher, callback) => {
    console.log(publisher);
    Publisher.create({
        name: publisher.name,
        address: publisher.address,
        phone: publisher.phone
    });
    callback();
};

module.exports.deletePublisher = (idPublisher) => {
    return Publisher.destroy({ 
        where : {
            idPub : idPublisher
        }
    });
};

module.exports.findOnePublisher = (idPub) => {
    return Publisher.findById(idPub);
};

module.exports.editPublisher = (publisher) => {
    return Publisher.update({name: publisher.name, address: publisher.address, phone: publisher.phone}, {where: {idPub: publisher.idPub}});
};