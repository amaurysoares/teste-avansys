<template>
  <!-- <form @submit.prevent="submit">
   
    <div>
      <label for="email"> Email </label>

      <input type="text" name="email" id="email" v-model="form.email" />
    </div>

    <div>
      <label for="password"> Password </label>
      <input type="password" name="password" id="password" v-model="form.password" />
    </div>

    <div>
      <button type="submit">Login</button>
    </div>
  </form> -->
  <div class="col-md-">
    <form
          @submit.prevent="submit"
    >
      <h3 class="text-center text-info">Login Painel Operadoras</h3>
      <div class="form-group">
        <label for="username" class="text-info">Email:</label><br />
        <input type="text" name="email" id="username" class="form-control"  v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password" class="text-info">Senha:</label><br />
        <input type="password" name="password" id="password" class="form-control" v-model="form.password" />
      </div>
      <div class="form-group">
        <input
          type="submit"
          name="submit"
          class="btn btn-info btn-md"
          value="submit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "signin",
  components: {
    //
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),

    submit() {
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: "dashboard",
        });
      });
    },
  },
};
</script>
