import WebApiService from "./WebApiService";

const Repository = WebApiService();

export default {
  getBanksInfo() {
    const config = {
      headers: {},
    };
    return Repository.get(`/catom/api/challenge/banks`, config);
  },
};
