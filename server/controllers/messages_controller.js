const data = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    console.log(`~> Reached The Create End Point`);
    const { time, text } = req.body;
    const msg = { id, time, text };
    data.push(msg);
    id++;
    console.log(` :: Added The Message to Array`);
    res.status(200).send(data);
  },
  read: (req, res) => {
    console.log(`~> Reached The Read End Point`);
    let msgData = [...data];
    res.status(200).send(data);
  },
  update: (req, res) => {
    console.log(`~> Reached The Update End Point`);

    const { id } = req.params;
    const { time, text } = req.body;

    let index = data.findIndex((e) => e.id === parseInt(id));

    let updateRecord = {
      id: data[index].id,
      time: time || data[index].time,
      text: text || data[index].text,
    };

    data[index] = updateRecord;
    res.status(200).send(data);
  },
  delete: (req, res) => {
    console.log(`~> Reached The Delete End Point`);
    const { id } = req.params;
    let index = data.findIndex((e) => e.id === parseInt(id));
    if (index === -1) {
      res.status(404).send('Record not found');
      console.log(` :: Record #${id} not found`);
    } else {
      data.splice(index, 1);
      res.status(200).send(data);
      console.log(` :: Deleted Record ${id}`);
    }
  },
};
