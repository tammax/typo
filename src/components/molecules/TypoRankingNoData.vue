<template lang="pug">
  v-layout(row align-space-around)
    v-flex(xs12 sm4 offset-sm4)
      v-card
        v-list(three-line)
          v-list-tile.box
            v-card-text
              div 現在ランキングデータがござません
</template>

<script>
export default {
  name: "TypoRankingNoData"
};
</script>
