<template>
  <div>
    <TypoChainCount />
    <TypoScorePoint />
    <TypoTimeGage />
    <!--
    <TypoChainGage />
    -->
  </div>
</template>

<script>

import TypoChainCount from '@/components/atoms/TypoChainCount.vue';
import TypoScorePoint from '@/components/atoms/TypoScorePoint.vue';
import TypoTimeGage from '@/components/atoms/TypoTimeGage.vue';
import TypoChainGage from '@/components/atoms/TypoChainGage.vue';
// import TypoChainGage from '@/components/atoms/TypoChainGage.vue';

export default {
  name: 'TypoScoreBoard',
  components: {
    TypoScorePoint,
    TypoChainCount,
    TypoTimeGage,
    // TypoChainGage,
  }
}

</script>