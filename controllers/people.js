const Person = require('../models/person');

const findPeople = (req, res) => {
  const id = req.params.id;
  const filter = id && id.length ? { doc: id } : {};
  Person.find(filter, (err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

const createPerson = (req, res) => {
  const newPerson = new Person(req.body);
  newPerson.save((err, result) => {
    if (err) {
      return res.send({ error: err.toString() });
    } else {
      return res.send(result);
    }
  });
};

module.exports = { findPeople, createPerson };
