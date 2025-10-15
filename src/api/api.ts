import axios from "axios";

const API_URL = "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"; 

export const fetchEvents = async (page = 1, search = "", petsAllowed?: boolean) => {
  const { data } = await axios.get(API_URL);
  let filtered = data;

  if (search) {
    filtered = filtered.filter((event: any) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (petsAllowed !== undefined) {
    filtered = filtered.filter((event: any) => event.petsAllowed === petsAllowed);
  }

  const perPage = 2;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    data: filtered.slice(start, end),
    total: filtered.length,
  };
};

export const fetchEventById = async (id: number) => {
  const { data } = await axios.get(API_URL);
  return data.find((event: any) => event.id === id);
};
