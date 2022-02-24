const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

// middleware
const { auth } = require("../middlewares/auth");

const userController = require("../controllers/userController");
const aboutController = require("../controllers/aboutController");
const educationController = require("../controllers/educationController");
const experienceController = require("../controllers/experienceController");
const skillController = require("../controllers/skillController");
const projectController = require("../controllers/projectController");
const certificateController = require("../controllers/certificateController");
const contactController = require("../controllers/contactController");

// auth / user ctrl / sign in
router.get("/admins", userController.getAll);
router.post("/signin", userController.signin);

// about
router
  .route("/about")
  .get(aboutController.getAboutContent)
  .post(auth, upload.single("profile"), aboutController.postAboutContent);

router.put(
  "/about/:id",
  auth,
  upload.single("profile"),
  aboutController.updateAboutContent
);
router.delete("/about/:id", auth, aboutController.deleteAboutContent);

// education
router.get("/education/:id", educationController.getOneEducationContent);
router
  .route("/education")
  .get(educationController.getEducationContent)
  .post(auth, educationController.postEducationContent);

router.put("/education/:id", auth, educationController.updateEducationContent);
router.delete(
  "/education/:id",
  auth,
  educationController.deleteEducationContent
);

// experience
router.get("/experience/:id", experienceController.getOneExperienceContent);
router
  .route("/experience")
  .get(experienceController.getExperienceContent)
  .post(auth, experienceController.postExperienceContent);

router.put(
  "/experience/:id",
  auth,
  experienceController.updateExperienceContent
);
router.delete(
  "/experience/:id",
  auth,
  experienceController.deleteExperienceContent
);

// skills
router.get("/skills/:id", skillController.getOneSkillContent);
router
  .route("/skills")
  .get(skillController.getSkillContent)
  .post(auth, skillController.postSkillContent);

router.put("/skills/:id", auth, skillController.updateSkillContent);
router.delete("/skills/:id", auth, skillController.deleteSkillContent);

// projects
router.get("/projects/:id", projectController.getOneProjectContent);
router
  .route("/projects")
  .get(projectController.getProjectContent)
  .post(auth, upload.single("image"), projectController.postProjectContent);

router.put(
  "/projects/:id",
  auth,
  upload.single("image"),
  projectController.updateProjectContent
);
router.delete("/projects/:id", auth, projectController.deleteProjectContent);

router.get("/certificate/:id", certificateController.getOneCertificateContent);
router
  .route("/certificate")
  .get(certificateController.getCertificateContent)
  .post(
    auth,
    upload.single("image"),
    certificateController.postCertificateContent
  );

router.put(
  "/certificate/:id",
  auth,
  upload.single("image"),
  certificateController.updateCertificateContent
);
router.delete(
  "/certificate/:id",
  auth,
  certificateController.deleteCertificateContent
);

router
  .route("/contact")
  .get(auth, contactController.getContacts)
  .post(contactController.createContact);
router.delete("/contact/:id", auth, contactController.deleteContact);

module.exports = router;
