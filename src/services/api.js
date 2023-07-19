import axios from "axios";

const api = axios.create({
  baseURL: "https://api.k8s.smarttbot.com/api-front-test/api/v1"
})

export const getRobots = async () => {
  const response = await api.get("/robot")
  return response.data.data
}

export const getRobotOverview = async () => {
    const response = await api.get("/robot/overview")
    return response.data.data
}

export const postRobot = async (newPost) => {
    try {
        const response = await api.post("/robot", newPost)
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}

export const getStrategy = async () => {
    const response = await api.get("/strategy")
    return response.data.data
}

export default api;
