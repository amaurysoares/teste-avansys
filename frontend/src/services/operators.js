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
    updateStatus: (operator) => {
        if (operator.active == "0") {
            operator.active = "1"
        }
        else {
            operator.active = "0"
        }
        return axios.patch('operators/' + operator.id, { 'active': operator.active })
        //
    },     

    destroy: (operator) => {
        return axios.delete('operators/' + operator.id, { operator })
        //
    }

}

