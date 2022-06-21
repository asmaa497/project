import { act } from "react-dom/test-utils";

const Initial_State={
    page:1,
};
export default function pageReducer(state=Initial_State,action){
    switch(action.type){
        case "GET_NEXT_PAGE":
            return {
                ...state,
                page:state.page+1,
            };
            case "GET_PREV_PAGE":
            return {
                ...state,
                page:state.page>1?state.page-1:state.page,
            };
            default:
                return state;
    }
}