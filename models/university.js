const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  faculties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }],
});

const UniversityModel = mongoose.model(
  "University",
  universitySchema,
  "universities"
);

const read = async () => {
  return await UniversityModel.find().populate("faculties");
};

const getSingle = async (id) => {
  return await UniversityModel.findOne({ _id: id });
};

const create = async (data) => {
  const newUniversity = new UniversityModel(data);
  return await newUniversity.save();
};

const update = async (_id, data) => {
  return await UniversityModel.updateOne({ _id }, data);
};

const remove = async (_id) => {
  return await UniversityModel.deleteOne({ _id });
};

module.exports = {
  read,
  getSingle,
  create,
  update,
  remove,
};
