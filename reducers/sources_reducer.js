import {FETCH_SOURCES_BY_CATEGORY} from "../actions";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SOURCES_BY_CATEGORY:
            return [...action.payload.data.sources, ...state];
    }
    return state;
}