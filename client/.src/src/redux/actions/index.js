// import {GET_CHAR, GET_DET} from './actiontype';
import axios from 'axios';
import {SET_CHAR, SET_APP_LOADING, GET_CHARACTER, ADD_FAVORITE} from './actiontype';

export function getCharacters() { // asincronica
	return function (dispatch) {
		fetch('https://rickandmortyapi.com/api/character/')
			.then((response) => response.json())
			.then((json) => {
				dispatch({
					type: GET_CHARACTER,
					payload: json.results
				})
			})
	}
}

export function addFavorite(character) { // sincronica
	return {
		type: ADD_FAVORITE,
		payload: character
	}
}


/* ---------------------------------------- */

function setCharacters(payload) {
	return {
		type: SET_CHAR,
		payload
  	}
}

export function setAppLoading() { /* part of the progress bar efect */
	return {
		type: SET_APP_LOADING,
		payload
	}
}

export function getCharsFromApi() {
		return (dispatch) => {
			dispatch(setAppLoading(true));
			axios.get('https://rickandmortyapi.com/api/character/')
			  .then(response => {
				  const {data: {results}} = response;
				  dispatch(setCharacters(results));
				//   dispatch(setAppLoading(false));
			  });
	   	}
};

export function clearCharacters() {
	return (dispatch) => {
		dispatch(setCharacters([]));
	}
}

export const getCharId = id => { //
	return function (dispatch) {
		return fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then(response => {
				const {data: {results}} = response;
				dispatch(setCharacters(results));
			});
	};
};
