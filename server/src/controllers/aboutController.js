const AboutModel = require("../models/AboutModel");
const { cloudinary } = require("../../config/cloudinary");
const fs = require("fs");

const getAboutContent = async (req, res) => {
  const about = await AboutModel.find({});

  res.json({
    code: 200,
    status: "success",
    data: about,
  });
};

const postAboutContent = async (req, res) => {
  const { content } = req.body;

  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

    const about = await AboutModel.create({
      profile: {
        url: cloudinaryUpload.secure_url,
        cloudinary_id: cloudinaryUpload.public_id,
      },
      content: content,
    });

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      code: 200,
      status: "success",
      message: "About content has been successfully added",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const deleteAboutContent = async (req, res) => {
  const { id } = req.params;

  try {
    const about = await AboutModel.findById(id);

    if (!about) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "About content not found",
      });
    }

    // Delete image from cloudinary
    await cloudinary.uploader.destroy(about.profile.cloudinary_id);
    // Delete about content
    await about.remove();

    res.status(200).json({
      code: 200,
      status: "success",
      message: "About content has been successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const updateAboutContent = async (req, res) => {
  const { id } = req.params;

  const { content } = req.body;

  try {
    const about = await AboutModel.findById(id);

    if (!about) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "About content not found",
      });
    }

    if (!req.file) {
      // Update about content
      await about.updateOne({
        profile: {
          url: about.profile.url,
          cloudinary_id: about.profile.cloudinary_id,
        },
        content: content,
      });

      const updatedAbout = {
        _id: id,
        profile: {
          url: about.profile.url,
          cloudinary_id: about.profile.cloudinary_id,
        },
        content: content,
      };

      res.status(200).json({
        code: 200,
        status: "success",
        message: "About content has been successfully updated",
        data: updatedAbout,
      });

      return;
    }

    // Delete image from cloudinary
    await cloudinary.uploader.destroy(about.profile.cloudinary_id);

    // Upload new image to cloudinary
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

    // Update about content
    await about.updateOne({
      profile: {
        url: cloudinaryUpload.secure_url,
        cloudinary_id: cloudinaryUpload.public_id,
      },
      content: content,
    });

    const updatedAbout = {
      _id: id,
      profile: {
        url: cloudinaryUpload.secure_url,
        cloudinary_id: cloudinaryUpload.public_id,
      },
      content: content,
    };

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      code: 200,
      status: "success",
      message: "About content has been successfully updated",
      data: updatedAbout,
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
  getAboutContent,
  postAboutContent,
  deleteAboutContent,
  updateAboutContent,
};
