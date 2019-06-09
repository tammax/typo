<template>
  <div>
    <p>{{ chainCount }}</p>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'TypoChainCount',
  computed: {
    ...mapState([
      'chainCount',
    ])
  }
}

</script>