import axios from 'axios'

export default {

    list: () => {
        return axios.get('operators')
    },

    save: (operator) => {
        return axios.post('operators', operator)
    },

    update: (operator) => {
        return axios.patch('operators/' + operator.id, { 'name': operator.name, 'description': operator.description, 'active': operator.active })
        //
    },    

    destroy: (operator) => {
        return axios.delete('operators/' + operator.id, { operator })
        //
    }

}

