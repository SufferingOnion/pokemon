<template>
  <div class="Pokedex">
    <template v-if="pokemones.length">
      <pocecart v-for="pokemon in pokemones" :pokemon="pokemon" :key="pokemon.id"></pocecart>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import pocecart from "@/components/pocecart.vue";

export default {
  name: "Pocedex",
  data() {
    return {
      offsetURL: 20
    };
  },
  computed: {
    pokemones() {
      return this.$store.getters.pokemones;
    },
    IsLoaded() {
      return this.$store.getters.IsLoaded;
    }
  },
  components: {
    pocecart
  },
  methods: {
    offsetCounter() {
      return "?offset=" + String(this.offsetURL) + "&limit=20";
    },
    async dispatchPokemones() {
      await this.$store.dispatch("get_pokemones", this.offsetCounter());
      this.offsetURL = this.offsetURL + 20;
    },
    async scrollHandler() {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = document.documentElement.clientHeight;
      const totalHeight = document.documentElement.offsetHeight;
      const atBottom = scrollTop + viewportHeight === totalHeight;

      if (atBottom && scrollTop > 50) {
        await this.dispatchPokemones();
      }
    }
  },
  created() {
    if (this.$store.getters.pokemones.length == 0) {
      this.$store.dispatch("get_pokemones", "/");
    }

    document.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    this.$store.commit("DESTROY");
    document.removeEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style lang="scss">
.Pokedex {
  display: grid;
  grid-auto-rows: minmax(300px, auto);
  @media (max-width: 1038px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 721px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-device-width: 461px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>