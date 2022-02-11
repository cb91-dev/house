import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "f5ab3ccc0bmsh48a8eec2e8cd6a9p1e0e3djsnc82898955780",
    },
  });
  return data;
};
