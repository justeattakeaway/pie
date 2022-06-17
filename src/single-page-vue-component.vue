<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ singleVueText }}</p>
    <a 
      :href=homeLinkPath>
      {{ homeLinkText }}
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
        layout: "default-layout.njk",
        title: "This is Page 3",
        homeLinkPath: "/",
        homeLinkText: "Home",
        singleVueText: "This is a Vue component"
    };
  },
  components: {}
}
</script>