const db = require("../models");
const JobFormFile = db.jobFormFile;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('Got body:', req.body);
    // Validate request
    if (!req.body.file || !req.body.fileType) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const jobFormFile = {
        file: req.body.file,
        fileType: req.body.fileType,
    };

    JobFormFile.create(jobFormFile)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                err.message || "Some error occurred while creating the JobFormFile"
          });
      });
};
