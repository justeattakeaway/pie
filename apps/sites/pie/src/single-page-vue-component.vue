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
        layout: "alternative-layout.html",
        title: "This is Page 3",
        homeLinkPath: "/",
        homeLinkText: "Home",
        singleVueText: "This is a Vue component"
    };
  },
  components: {}
}
</script>