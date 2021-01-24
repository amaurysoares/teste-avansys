//import axios from 'axios'
import { http } from './config'

export default {

    list: () => {
        return http.get('operators')
    },

    save: (operator) => {
        return http.post('operators', operator)
    },

    edit: () => {
        //
    },

    destroy: () => {
        //
    }

}

