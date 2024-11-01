const UniversityModel = require("../models/University");

const getAllUniversities = async (req, res) => {
  try {
    const universities = await UniversityModel.read();
    return res.status(200).send(universities);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createUniversity = async (req, res) => {
  try {
    const data = req.body;
    const newUniversity = await UniversityModel.create(data);
    return res.status(201).send(newUniversity);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateUniversity = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUniversity = await UniversityModel.update(
      { _id: id },
      req.body
    );
    return res
      .status(200)
      .send("University updated successfully", updatedUniversity);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const removeUniversity = async (req, res) => {
  try {
    const universityId = req.params.id;
    const checkUniversity = await UniversityModel.getSingle(universityId);

    if (!checkUniversity) {
      return res.status(404).send("University not found!");
    }

    await UniversityModel.deleteOne({ _id: universityId });
    return res.status(200).send("University deleted successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getAllUniversities,
  createUniversity,
  updateUniversity,
  removeUniversity,
};
