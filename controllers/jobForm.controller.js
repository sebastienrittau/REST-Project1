const db = require("../models");
const JobForm = db.jobForm;
const Op = db.Sequelize.Op;

exports.findbyId = async (id) => {
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

    return await JobForm.findAll({ where: condition, raw : true });
};

// Find a single JobForm with an id
exports.findById = (req, res) => {
    const id = req.params.id;

    JobForm.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find JobForm with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving JobForm with id=" + id
            });
        });
};

exports.create = (req, res) => {
    console.log('Got body:', req.body);
    // Validate request
    if (!req.body.title || !req.body.countryId || !req.body.provinceId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Check lengths
    if (req.body.title.length > 125 || (req.body.additionalInfo != null && req.body.additionalInfo.length > 550)) {
        res.status(400).send({
            message: "Title or additional info is too long!"
        });
        return;
    }

    const jobForm = {
        title: req.body.title,
        additionalInfo: req.body.additionalInfo || null,
        countryId: req.body.countryId,
        provinceId: req.body.provinceId,
        jobFormFileId: req.body.jobFormFileId || null
    };

    console.log('Made Object:', jobForm);

    JobForm.create(jobForm)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          console.log(err);
          res.status(500).send({
              message:
                err.message || "Some error occurred while creating the JobForm."
          });
      });
};
