import {SET_CHAR} from '../actions/actiontype';

const initialState = [];

export default function characters(state = initialState, {type, payload}) {
    switch (type) {
        case SET_CHAR:
            return payload;
        default:
            return state;
    }
};