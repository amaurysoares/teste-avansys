<template>
<ul>
<template v-if="authenticated">

  {{ user }}
    <li>
      <router-link :to="{ name: 'home' }"> Home </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'dashboard' }"> Dashboard </router-link>
    </li>  
    <li>
      <a href="#" @click.prevent="signOut"> Signout </a>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),

    signOut () {
      this.signOutAction().then(() => {
        this.$router.replace({
            name: 'signin'
        })
      })
    }
  }
  
}
</script>