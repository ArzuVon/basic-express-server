const person = (req,res) => {
    res.status(200).send({ name: req.query.name});

};

module.exports = {
    person,
};
