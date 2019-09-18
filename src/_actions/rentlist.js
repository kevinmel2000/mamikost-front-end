import * as type from '../_redux/types'
import axios from 'axios'

export const get_rentlist = () => ({
      type: type.GET_RENTLIST,
      payload: axios.get('http://localhost:5000/api/v1/images')
})


export const get_rentlist_town = (town) => ({
      type: type.GET_RENTLIST_TOWN,
      payload: axios.get(`http://localhost:5000/api/v1/images/`+town)
})


export const get_rent_list_by_id = (id) => ({
      type: type.GET_RENTLIST_ID,
      payload: axios.get(`http://localhost:5000/api/v1/images/detail/`+id)
})
