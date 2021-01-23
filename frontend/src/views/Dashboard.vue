<template>
  <div>
   Painel


   <div id="main-table">

 <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>

   </div>
  </div>
</template>

<script>
import Operator from '@/services/operators'

import store from '@/store'

let token = store.state.token

export default {
  name: 'dashboard',
  components: {
    //
  },

  mounted() {

    Operator.list().then(res => {
      console.log(res)
    })
    console.log(token)

  },

  
  
}
</script>
