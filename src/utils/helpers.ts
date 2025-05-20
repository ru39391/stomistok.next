import { API_URL, DATA_FETCHING_ERROR_MESS } from './constants';

const fetchData = async (type: string) => {
  let data = [];

  try {
    const response = await fetch(`${API_URL}${type}`, {
      next: { revalidate: 60 }
    });

    if(!response.ok) {
      throw new Error(DATA_FETCHING_ERROR_MESS);
    }

    const res = await response.json();

    if(!res.success) {
      throw new Error(res.message || DATA_FETCHING_ERROR_MESS);
    }

    data = res.data;
  } catch (error) {
    console.error(error);
  }

  return data;
}

export {
  fetchData
}
