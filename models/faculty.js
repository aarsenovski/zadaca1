const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },
});

const FacultyModel = mongoose.model("Faculty", facultySchema, "faculties");

const read = async () => {
  return await FacultyModel.find().populate("university");
};

const getSingle = async (id) => {
  return await FacultyModel.findOne({ _id: id });
};

const create = async (data) => {
  const newFaculty = new FacultyModel(data);
  return await newFaculty.save();
};

const update = async (_id, data) => {
  return await FacultyModel.updateOne({ _id }, data);
};

const remove = async (_id) => {
  return await FacultyModel.deleteOne({ _id });
};

module.exports = {
  read,
  getSingle,
  create,
  update,
  remove,
};
