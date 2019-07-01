<template>
  <div class="about">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro reiciendis dolorum perspiciatis sunt praesentium odit soluta, aspernatur aperiam repellendus explicabo cumque totam eum laudantium obcaecati odio debitis ex assumenda doloribus hic? Unde accusamus incidunt aliquam magnam delectus laboriosam maxime, dolorem et tempore eum, doloribus sed ipsa, ea asperiores esse?
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  }
};
</script>
