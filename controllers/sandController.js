const sandController = (Sand) => {

  const get = (req, res) => {
    let query = {};
    if(req.query.gang){
      query.gang = req.query.gang;
    }
    Sand.find(query, (err, sands) => {
      if(err)
        res.status(500).send(err);
      else
        res.json(sands);
    })
  }

  const post =  (req, res) => {
    let sand = new Sand(req.body);
    sand.save();
    res.status(201).send(sand)
  }

  return {
    get:get,
    post:post
  }
}

module.exports = sandController;