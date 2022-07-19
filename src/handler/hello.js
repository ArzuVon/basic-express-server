const hello = (req, res) => {
  //   console.log(Date.now(), req.url);
  res.status(200).send('Hello, World'); //this handle app.get invokes the hello as the / gets called and it sends back a 200 "okay" and then sends the hello world
};
//Sets server up (above)

module.exports ={
  hello,
};
