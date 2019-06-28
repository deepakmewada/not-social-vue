<template>
  <div class="about">
    <button
      v-if="Object.entries(user).length == 0"
      type="button"
      @click="signIn"
    >
      Sign in
    </button>
    <div v-if="Object.entries(user).length > 0">
      <br />
      {{ user.uid }}
      <br />
      {{ user.name }}
      <br />
      {{ user.profilePic }}
      <br />
      {{ user.email }}
    </div>
    <div v-else>no user</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    signIn() {
      console.log("here");
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          console.log(GoogleUser);
          this.$store.state.user.uid = GoogleUser.w3.Eea;
          this.$store.state.user.name = GoogleUser.w3.ig;
          this.$store.state.user.profilePic = GoogleUser.w3.Paa;
          this.$store.state.user.email = GoogleUser.w3.U3;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>
