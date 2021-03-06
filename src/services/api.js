const API = {
  baseURL: `https://jsonplaceholder.typicode.com`,
  getComments() {
    return fetch(this.baseURL + `/comments`)
      .then((response) => response.json());
  }
};

export default API;
