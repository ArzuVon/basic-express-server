const validator = (req, res, next) => {
    if (req.params['name']){
        next();
    } else{
        throw new Error('Message Alert!: name not found');
    }
};

module.exports={
    validator,
};
