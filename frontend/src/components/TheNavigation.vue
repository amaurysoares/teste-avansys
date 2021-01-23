<template>
<ul>
<template v-if="authenticated">
    <li>
      <router-link :to="{ name: 'home' }"> Home </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'dashboard' }"> Dashboard </router-link>
    </li>
   
    
   
    <li>
      <a href="#"> Signout </a>
    </li>
</template>

<template v-else>
   <li>
      <router-link :to="{ name: 'signin' }"> Signin </router-link>
    </li>

</template>
</ul>
</template>
 


<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user'
    })
  }
  
}
</script>