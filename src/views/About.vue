<template>
  <div class="about">
    <button type="button" @click="signIn">Sing in</button>
  </div>
</template>

<script>
export default {
  methods: {
    signIn() {
      console.log("here");
      this.$gAuth
        .getAuthCode()
        .then(authCode => console.log(authCode))
        .catch(err => console.error(err));
    }
  }
};
</script>
