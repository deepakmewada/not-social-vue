<template>
  <div class="hello">{{ user }}</div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  mounted: () => {
    axios.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios({
      url: "http://localhost:8080/api/replies/16",
      headers: {"Authorization":"Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMyIsIm5hbWUiOiJ1c2VyIiwicm9sZSI6IltdIiwiZXhwIjoxNTYxODkwNjM4fQ.WtT7923CzLyo-pcBTBHgnbcZ9uSc9hkIrYx2hJGfL4FkopbqhS6YYtnVHPgQGCABY17AXCl88W2K9x3usRsEIQ"}
    })
      .then(res => console.log(res.data))
      .catch(err => {
        if(err.response) {
          if(err.response.data.message === "JWT Token is missing") {
            //TODO: Relogin user
            console.log(err.response.data.message);
          }
        }
      })
      .finally();
  },
  methods: {
    setUser() {
      var payload = {
        user: {
          name: "aa",
          email: "asas"
        }
      };
      this.$store.dispatch("setUser", payload);
    }
  }
};
</script>
