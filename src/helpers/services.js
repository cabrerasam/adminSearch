const BASE_URL = 'http://localhost:1234/';

export const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Error fetching data');
    }
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export const fetchDataBy = async (endpoint, id) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}/${id}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Error fetching data');
    }
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export const itemData = async (id, idURL, nameItem) => {
  try {
    const items = await fetch(`${BASE_URL}${idURL}/${id}`);
    const data = await items.json();
    return data[0][`name_${nameItem}`];
  } catch (error) {
    console.error(`Error al obtener ${nameItem}:`, error);
    return `${nameItem} no encontrado`;
  }
}
