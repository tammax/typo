<template>
  <v-progress-linear v-model="chainCount"></v-progress-linear>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'TypoChainGage',
  computed: {
    ...mapState([
      'chainCount',
    ])
  }
}

</script>