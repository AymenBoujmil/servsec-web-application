import axios from "axios";

const api = "http://localhost:5000/CategorieList/";

export const postCategorie = (body) => {
  return axios
    .post(`${api}/post`, body)
    .then((res) => {
      if (res.status === 200) {
        return res.data || null;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const getCategories = () => {
  return axios
    .get(`${api}/`)
    .then((res) => {
      if (res.status === 200) {
        return res.data || null;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const getCategorieById = (id) => {
  return axios
    .get(`${api}/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.data || null;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
