<template>
<ul>
<template v-if="authenticated">

<a href="#" @click.prevent="signOut" > Logout </a>
  
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