import axios from "axios";

const api = axios.create({
  baseURL: "https://api.k8s.smarttbot.com/api-front-test/api/v1",
});

// export const getRobots = await api.get("/robot");

export const getRobots = async () => {
  const response = await api.get("/robot");
  return response.data.data;
};

export default api;
