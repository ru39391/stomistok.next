import { helpers } from '../../utils';
import 'server-only';

const fetchHeaderData = async () => await helpers.fetchData('header');

export default fetchHeaderData;
