import axios from 'axios';
import {
	baseURL
} from '../shared/cofing';

export const fetch = (path, params = {}) => {
	return axios.get(path.startsWith('http') ? path : (baseURL + path), params);
};

export const post = (path, params) => {
	return axios({
		method: 'POST',
		url: path.startsWith('http') ? path : (baseURL + path),
		headers: {
			'Content-Type': 'application/json',
		},
		data: params,
	});
};

export const update = (path, params) => {
	return axios({
		method: 'PUT',
		url: path.startsWith('http') ? path : (baseURL + path),
		headers: {
			'Content-Type': 'application/json',
		},
		data: params,
	});
};

export const del = (path, params) => {
	return axios({
		method: 'DELETE',
		url: path.startsWith('http') ? path : (baseURL + path),
		data: params,
	})
};