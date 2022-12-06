import Client from "./api";

export const createComment = async (data) => {
  try {
    const res = await Client.post("/comments");
    return res.data;
  } catch (error) {
    throw error;
  }
};
