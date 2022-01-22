const db = require("../models");
const Province = db.province;
const Op = db.Sequelize.Op;

// Create and Save a new Province
exports.create = (req, res) => {

};

// Retrieve all Countries from the database.
exports.findAll = (req, res) => {
    Province.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving provinces."
            });
        });
};

exports.findbyCountryId = (req, res) => {
    const countryId = req.query.countryId;
    var condition = countryId ? { countryId: { [Op.like]: `%${countryId}%` } } : null;

    Province.findAll({ where: condition, order: [['name', 'ASC']] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving provinces."
            });
        });
};

// Find a single Province with an id
exports.findById = (req, res) => {
    const id = req.params.id;

    Province.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Province with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Province with id=" + id
            });
        });
};


exports.setupProvinces = (id) => {
    Province.create({ name: "Ontario", code: "ON", countryId: id});
    Province.create({ name: "Quebec", code: "QC", countryId: id});
    Province.create({ name: "Nova Scotia", code: "NS", countryId: id});
    Province.create({ name: "New Brunswick", code: "NB", countryId: id});
    Province.create({ name: "Manitoba", code: "MB", countryId: id});
    Province.create({ name: "British Columbia", code: "BC", countryId: id});
    Province.create({ name: "Prince Edward Island", code: "PE", countryId: id});
    Province.create({ name: "Saskatchewan", code: "SK", countryId: id});
    Province.create({ name: "Alberta", code: "AB", countryId: id});
    Province.create({ name: "Newfoundland and Labrador", code: "NL", countryId: id});
    Province.create({ name: "Northwest Territories", code: "NT", countryId: id});
    Province.create({ name: "Yukon", code: "YT", countryId: id});
    Province.create({ name: "Nunavut", code: "NU", countryId: id});
};

exports.setupStates = (id) => {
    Province.create({ name: "Alabama", code: "AL", countryId: id});
    Province.create({ name: "Alaska", code: "AK", countryId: id});
    Province.create({ name: "Arizona", code: "AZ", countryId: id});
    Province.create({ name: "Arkansas", code: "AR", countryId: id});
    Province.create({ name: "California", code: "CA", countryId: id});
    Province.create({ name: "Colorado", code: "CO", countryId: id});
    Province.create({ name: "Connecticut", code: "CT", countryId: id});
    Province.create({ name: "Delaware", code: "DE", countryId: id});
    Province.create({ name: "Florida", code: "FL", countryId: id});
    Province.create({ name: "Georgia", code: "GA", countryId: id});
    Province.create({ name: "Hawaii", code: "HI", countryId: id});
    Province.create({ name: "Idaho", code: "ID", countryId: id});
    Province.create({ name: "Illinois", code: "IL", countryId: id});
    Province.create({ name: "Indiana", code: "IN", countryId: id});
    Province.create({ name: "Iowa", code: "IA", countryId: id});
    Province.create({ name: "Kansas", code: "KS", countryId: id});
    Province.create({ name: "Kentucky", code: "KY", countryId: id});
    Province.create({ name: "Louisiana", code: "LA", countryId: id});
    Province.create({ name: "Maine", code: "ME", countryId: id});
    Province.create({ name: "Maryland", code: "MD", countryId: id});
    Province.create({ name: "Massachusetts", code: "MA", countryId: id});
    Province.create({ name: "Michigan", code: "MI", countryId: id});
    Province.create({ name: "Minnesota", code: "MN", countryId: id});
    Province.create({ name: "Mississippi", code: "MS", countryId: id});
    Province.create({ name: "Missouri", code: "MO", countryId: id});
    Province.create({ name: "Montana", code: "MT", countryId: id});
    Province.create({ name: "Nebraska", code: "NE", countryId: id});
    Province.create({ name: "Nevada", code: "NV", countryId: id});
    Province.create({ name: "New Hampshire", code: "NH", countryId: id});
    Province.create({ name: "New Jersey", code: "NJ", countryId: id});
    Province.create({ name: "New Mexico", code: "NM", countryId: id});
    Province.create({ name: "New York", code: "NY", countryId: id});
    Province.create({ name: "North Carolina", code: "NC", countryId: id});
    Province.create({ name: "North Dakota", code: "ND", countryId: id});
    Province.create({ name: "Ohio", code: "OH", countryId: id});
    Province.create({ name: "Oklahoma", code: "OK", countryId: id});
    Province.create({ name: "Oregon", code: "OR", countryId: id});
    Province.create({ name: "Pennsylvania[", code: "PA", countryId: id});
    Province.create({ name: "Rhode Island", code: "RI", countryId: id});
    Province.create({ name: "South Carolina", code: "SC", countryId: id});
    Province.create({ name: "South Dakota", code: "SD", countryId: id});
    Province.create({ name: "Tennessee", code: "TN", countryId: id});
    Province.create({ name: "Texas", code: "TX", countryId: id});
    Province.create({ name: "Utah", code: "UT", countryId: id});
    Province.create({ name: "Vermont", code: "VT", countryId: id});
    Province.create({ name: "Virginia", code: "VA", countryId: id});
    Province.create({ name: "Washington", code: "WA", countryId: id});
    Province.create({ name: "West Virginia", code: "WV", countryId: id});
    Province.create({ name: "Wisconsin", code: "WI", countryId: id});
    Province.create({ name: "Wyoming", code: "WY", countryId: id});
};
