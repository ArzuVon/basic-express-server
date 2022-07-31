//Below/(bottom) half allows you to use the server you set up "Okay Go"
const data = (req, res) => {
  res.status(200).send({
    name: 'Von',
    role: 'Developer',
    // where did,  get role() {
    //   return this._role;
    // },
    // set role(value) {
    //   this._role = value;
    // },
  });
};

module.exports = {
  data,
};

//same as person file just practice from class
