import api from "src/api/axios";

const profileApi = {
  getLogo: async (userId: number) => {
    try {
      const response = await api.get(`get_logo/${userId}`);

      return response.data as { path: string };
    } catch (error) {
      throw error;
    }
  },
};

export default profileApi;