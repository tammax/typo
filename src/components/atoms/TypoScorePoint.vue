<template>
  <div>
    <div>{{ score }}</div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'TypoScorePoint',
  computed: {
    ...mapState([
      'score',
    ])
  }
}

</script>