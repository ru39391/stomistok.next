import { API_URL, DATA_FETCHING_ERROR_MESS } from './constants';
import type { TResponseData } from './types';
import 'server-only';

const fetchData = async (value: string): Promise<TResponseData> => {
  let data = {} as TResponseData;

  try {
    const response = await fetch(`${API_URL}${value}`, { cache: 'force-cache' });

    if(!response.ok) {
      throw new Error(DATA_FETCHING_ERROR_MESS);
    }

    const res = await response.json();

    if(!res.success) {
      throw new Error(res.message || DATA_FETCHING_ERROR_MESS);
    }

    console.log(res.data);

    data = res.data;
  } catch (error) {
    console.error(error);
  }

  return data;
}

export {
  fetchData
}
