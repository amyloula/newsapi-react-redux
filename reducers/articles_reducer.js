import {FETCH_SEARCH_RESULTS, FETCH_TOP_BY_COUNTRY} from "../actions";

export default function( state = [], action) {
    switch (action.type) {
        case FETCH_SEARCH_RESULTS:
            return [...action.payload.data.articles, ...state ];
        case FETCH_TOP_BY_COUNTRY:
            return [...action.payload.data.articles, ...state ];
    }
    return state;
}
