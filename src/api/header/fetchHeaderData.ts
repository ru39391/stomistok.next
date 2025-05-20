import { fetchers } from '../../utils';
import 'server-only';

const fetchHeaderData = async () => await fetchers.fetchData('header');

export default fetchHeaderData;
