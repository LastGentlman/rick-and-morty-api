// import {act} from 'react-dom/test-utils';
import {GET_CHAR, GET_DET} from '../actions/actiontype.js';
const initialState = {
	chars: [],
	charDet: {},
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CHAR:
			return {
				...state,
				chars: action.payload,
			};
		case GET_DET:
			return {
				...state,
				charDet: action.payload.results,
			};
		default:
			return state;
	}
}
