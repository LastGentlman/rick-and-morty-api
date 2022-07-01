import {GET_CHAR, GET_DET} from './actiontype';

export const getChars = () => {
	return function (dispatch) {
		return fetch('https://rickandmortyapi.com/api/character')
			.then(response => response.json())
			.then(json => {
				
				dispatch({type: GET_CHAR, payload: json.results});
				
			});
	};
};

// obtener

export const getDet = id => {
	return function (dispatch) {
		return fetch('https://rickandmortyapi.com/api/character/' + id)
			.then(response => response.json())
			.then(json => {
				dispatch({type: GET_DET, payload: json.result});
			});
	};
};
