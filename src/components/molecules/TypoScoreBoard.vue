<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-space-around justify-center>
        <v-flex d-flex xs12 sm6 md2>
          <v-card>
            <v-card-text>
              <TypoTimeGage />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex xs12 align-self-center>
                  <v-card>
                    <v-card-text>
                      <TypoScorePoint />
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex d-flex xs12 align-self-center>
                  <v-card>
                    <v-card-text>
                      <TypoChainCount />
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TypoChainCount from "@/components/atoms/TypoChainCount.vue";
import TypoScorePoint from "@/components/atoms/TypoScorePoint.vue";
import TypoTimeGage from "@/components/atoms/TypoTimeGage.vue";

export default {
  name: "TypoScoreBoard",
  components: {
    TypoScorePoint,
    TypoChainCount,
    TypoTimeGage
  }
};
</script>