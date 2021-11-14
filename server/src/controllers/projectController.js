const ProjectModel = require("../models/ProjectModel");
const { cloudinary } = require("../../config/cloudinary");
const fs = require("fs");

const getOneProjectContent = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await ProjectModel.findById(id);
    res.status(200).json({
      code: 200,
      status: "success",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const getProjectContent = async (req, res) => {
  const project = await ProjectModel.find({}).sort({ _id: -1 });

  res.json({
    code: 200,
    status: "success",
    data: project,
  });
};

const postProjectContent = async (req, res) => {
  const { title, description, technologies, link, github } = req.body;

  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

    const project = await ProjectModel.create({
      image: {
        url: cloudinaryUpload.secure_url,
        cloudinary_id: cloudinaryUpload.public_id,
      },
      title,
      description,
      technologies,
      link,
      github,
    });

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      code: 200,
      status: "success",
      message: "Project content has been successfully added",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const deleteProjectContent = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Project content not found",
      });
    }

    // Delete image from cloudinary
    await cloudinary.uploader.destroy(project.image.cloudinary_id);
    // Delete Project content
    await project.remove();

    res.status(200).json({
      code: 200,
      status: "success",
      message: "Project content has been successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal server error",
    });
  }
};

const updateProjectContent = async (req, res) => {
  const { id } = req.params;

  const { title, description, technologies, link, github } = req.body;

  try {
    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "Project content not found",
      });
    }

    if (!req.file) {
      // Update Project content
      await project.updateOne({
        image: {
          url: project.image.url,
          cloudinary_id: project.image.cloudinary_id,
        },
        title,
        description,
        technologies,
        link,
        github,
      });

      const updatedProject = {
        _id: id,
        image: {
          url: project.image.url,
          cloudinary_id: project.image.cloudinary_id,
        },
        title,
        description,
        technologies,
        link,
        github,
      };

      res.status(200).json({
        code: 200,
        status: "success",
        message: "Project content has been successfully updated",
        data: updatedProject,
      });

      return;
    }

    // Delete image from cloudinary
    await cloudinary.uploader.destroy(project.image.cloudinary_id);

    // Upload new image to cloudinary
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);

    // Update Project content
    await project.updateOne({
      image: {
        url: cloudinaryUpload.secure_url,
        cloudinary_id: cloudinaryUpload.public_id,
      },
      title,
      description,
      technologies,
      link,
      github,
    });

    fs.unlinkSync(req.file.path);

    const updatedProject = {
      _id: id,
      image: {
        url: cloudinaryUpload.secure_url,
        cloudinary_id: cloudinaryUpload.public_id,
      },
      title,
      description,
      technologies,
      link,
      github,
    };

    res.status(200).json({
      code: 200,
      status: "success",
      message: "Project content has been successfully updated",
      data: updatedProject,
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
  getProjectContent,
  getOneProjectContent,
  postProjectContent,
  deleteProjectContent,
  updateProjectContent,
};
