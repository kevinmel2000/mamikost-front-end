import * as type from '../_redux/types';
const initialState = {
    data: [],
    isLoading: true
  }
  
export default function rentlist (state = initialState, action){
    switch (action.type) {
      //1
      case type.GET_RENTLIST:
        return {
          ...state,
          data: 'data kosong',
          isLoading: true
        } 
        case type.GET_RENTLIST_FULFILLED:
        return {
          ...state,
          data: action.payload.data,
          isLoading: false
        }  
        case type.GET_RENTLIST_REJECTED:
        return {
          ...state,
          data: 'Data Gagal Dimuat',
          isLoading: false
        }  

        //2
        case type.GET_RENTLIST_TOWN:
          return {
            ...state,
            data: 'data kosong',
            isLoading: true
          } 
          case type.GET_RENTLIST_TOWN_FULFILLED:
          return {
            ...state,
            data: action.payload.data,
            isLoading: false
          }  
          case type.GET_RENTLIST_TOWN_REJECTED:
          return {
            ...state,
            data: 'Data Gagal Dimuat',
            isLoading: false
          }
      default:
        return state;
    }
  }
  