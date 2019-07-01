<template>
    <div>
        <p>This is a pop-up .Style this</p>
        <p>You are not logged in. PLease Login to continue.</p>
        <button @click="gLogin">Google</button>
        <button @click="fLogin">Facebok</button>
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
    gLogin() {
      this.$store.dispatch("setLoading", true);
      console.log("here");
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          console.log(GoogleUser);
          var payload = {
            user: {
              name: GoogleUser.w3.ig,
              email: GoogleUser.w3.U3,
              uid: GoogleUser.w3.Eea,
              profilePic: GoogleUser.w3.Paa
            }
          };
          this.$store.dispatch("setUser", payload);
         this.$store.dispatch("setLoading", false);
        })
        .catch(err => {
            this.$store.dispatch("setLoading", false);
            console.error(err);
        });
    },
    fLogin(isLoading){
        alert("Coming soon");
    }
  }
}
</script>

<style scoped>
div {
    border: 2px solid grey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
}
</style>
