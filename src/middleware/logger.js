const logger = (req, res, next) => {
  console.log(Date.now(), req.url);
  next();
};

module.exports = {
  logger,

};
