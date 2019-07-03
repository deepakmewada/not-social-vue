<template>
  <div class="home">
    <HelloWorld />
    <v-container grid-list-lg pt-5 mt-5>
      <v-layout row wrap>
        <Posts v-for="i in 10" :key="`6${i}`" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Posts from "@/components/Posts.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Posts
  }
};
</script>
