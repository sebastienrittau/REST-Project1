const db = require("../models");
const Country = db.country;
const Op = db.Sequelize.Op;

// Retrieve all Countries from the database.
exports.findAll = (req, res) => {
    Country.findAll({order: [['name', 'ASC']]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving countries."
            });
        });
};

exports.findbyName = async (name) => {
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    return await Country.findAll({ where: condition, raw : true });
};

// Find a single Country with an id
exports.findById = (req, res) => {
    const id = req.params.id;

    Country.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Country with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Country with id=" + id
            });
        });
};


exports.setupTable = async () => {
    const canada = await Country.create({ name: "Canada", code: "CA"});
    const unitedStates = await Country.create({ name: "USA", code: "US"});
};
