import { network } from '../network/network';

const API_BASE_URL = 'https://api.github.com';
const API_TOKEN = '7984f3e32aff693d46be1b200a5cc382c0815c54';

export const getUser = name => network.httpGet(`${API_BASE_URL}/users/${name}?access_token=${API_TOKEN}`);

export const getUserRepos = name => network.httpGet(`${API_BASE_URL}/users/${name}/repos?access_token=${API_TOKEN}`);
