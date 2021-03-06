import api from "./serverApi";

export const getProjectsApi = () => {
  return api.get("/projects");
};

export const createProjectApi = (project) => {
  return api.post("/projects", project, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/projects/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/projects/${projectId}`, project, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
