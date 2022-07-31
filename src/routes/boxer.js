const { Boxer } = require('../db');

const createBoxer = async (res,req) =>{
    const{ boxerName, fightStyle } = req.body;
    const boxer = Boxer.build({ boxerName, fightStyle });
    await boxer.save();
    res.status(200).send(boxer);
};

const listBoxers = async (req, res) =>{
    const boxers = await Boxer.findAll();
    res.status(200).send(boxers);
};

const getBoxer = async (req, res) => {
    const boxers = await Boxer.findAll({
        where:{
            id: req.params.id,
        },
    });
    if(boxer.length > 0) {
        res.status(200).send(boxers[0]);
    }else{
        res.status(400).send(`Could not find boxer with id ${req.params.id}`);
    }
};
