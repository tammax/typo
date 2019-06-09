<template>
  <div>
    <p>{{ word }}</p>
  </div>
</template>

<script>

export default {
  name: 'TypoJpWord',
  props: {
    word: String,
  },
}

</script>

<style lang="scss" scoped>
p {
  color: #cccccc;
}
</style>
