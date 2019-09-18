import * as type from '../_redux/types';
const initialState = {
    data: [],
    isLoading: true
  }
  
export default function rentlist (state = initialState, action){
    switch (action.type) {
        case type.GET_RENTLIST_ID:
          return {
            ...state,
            data: 'data kosong',
            isLoading: true
          } 
          case type.GET_RENTLIST_ID_FULFILLED:
          return {
            ...state,
            data: action.payload.data,
            isLoading: false
          }  
          case type.GET_RENTLIST_ID_REJECTED:
          return {
            ...state,
            data: 'Data Gagal Dimuat',
            isLoading: false
          }

      default:
        return state;
    }
  }
  