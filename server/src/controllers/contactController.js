const ContactModel = require("../models/ContactModel");

const getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.json({
      code: 200,
      status: "success",
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = new ContactModel({
    name,
    email,
    subject,
    message,
  });

  try {
    await contact.save();
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Contact has been successfully added",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await ContactModel.findByIdAndDelete(id);
    res.status(200).json({
      code: 200,
      status: "success",
      message: "Contact has been successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

module.exports = {
  getContacts,
  createContact,
  deleteContact,
};
