import axios from 'axios'

export default {

    list: () => {
        return axios.get('operators')
    },

    save: (operator) => {
        return axios.post('operators', operator)
    },

    update: (operator) => {
        return axios.put('operators', operator)
        //
    },

    destroy: (operator) => {
        return axios.delete('operators', { data: operator })
        //
    }

}

