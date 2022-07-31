const { Coder } = require('../db');

const createCoder = async (res,req) =>{
    const{ coderName, hobby } = req.body;
    const coder = Coder.build({ coderName, hobby });
    await coder.save();
    res.status(200).send(coder);
};

const listCoders = async (req, res) =>{
    const coders = await Coder.findAll();
    res.status(200).send(coders);
};

const getCoder = async (req, res) => {
    const coder = await Coder.findAll({
        where:{
            id: req.params.id,
        },
    });
    if(coder.length > 0) {
        res.status(200).send(coders[0]);
    }else{
        res.status(400).send(`Could not find coder with id ${req.params.id}`);
    }
};

const deleteCoder = async (req, res) => {
    const coders = await Coder.destroy({
        where: {
            id: req.params.id,
        },
    });
    if(coder.length > 0) {
        res.status(200).send('Error');
    } else{
        res.status(200).send('Coder Has Been Deleted');
    }
};

const updateCoder = async (req, res) => {
    await Coder.update({coderName: req.query.coderName, hobby: req.query.hobby},{
        where: {
            id: req.params.id,
        },
        returning: true,
    });
    res.status(200).send('Coder updated');
};

module.exports = {
    createCoder,
    listCoders,
    getCoder,
    deleteCoder,
    updateCoder,
};
