const User = require("../model/User");
const createUser = async (req, res) => {
  const { firstname, lastname } = req.body;
  const user = await User.create({ firstname, lastname });
  const result = user.toJSON();
  console.log(result);
  return res.json({ result });
};

const createMultipleUser = async (req, res) => {
  const result = await User.bulkCreate([
    { firstname: "Jack", lastname: "Sparrow" },
    { firstname: "Davy", lastname: " Jones" },
  ]);

  return res.json({ result });
};

const getUser = async (req, res) => {
  const { userId } = req.params;
  const result = await User.findByPk(userId);
  return res.json({ result });
};

//To select only some attributes, you can use the attributes option

const getUsersFirstName = async (req, res) => {
  const result = await User.findAll({ attributes: ["firstname"] });
  return res.json({ result });
};

// using the where clause

const getUserbyLastName = async (req, res) => {
  const { lastname } = req.params;
  User.findAll({
    where: {
      lastname,
    },
  });
  // SELECT * FROM post WHERE authorId = 2;
};

const getUsers = async (req, res) => {
  const result = await User.findAll();
  return res.json({ result });
};

const updateLastName = async (req, res) => {
  const { firstname } = req.params;
  try {
    const record = await User.findOne({ where: { firstname } });
    if (!record) {
      return res.json({ result: "No record found" });
    }
    console.log(record.toJSON());
    record.set({
      lastname: "k",
    });
    await record.save();
    return res.json({ result: record });
  } catch (error) {
    console.error(error);
  }
};

const deleteUserByFirstName = async (req, res) => {
  const { firstname } = req.params;

  try {
    const record = await User.findOne({ where: { firstname } });
    if (!record) {
      return res.json({ result: "No record found" });
    }
    console.log(record.toJSON());
    const result = record.destroy();
    return res.json({ result });
  } catch (error) {
    console.error(error);
  }

  return res.json({ result });
};
module.exports = {
  createUser,
  getUser,
  getUsers,
  updateLastName,
  getUsersFirstName,
  getUserbyLastName,
  deleteUserByFirstName,
  createMultipleUser,
};
