<template>
  <div class="Pokedex">
    <template v-if="pokemones.length">
      <pocecart v-for="pokemon in pokemones" :pokemon="pokemon" :key="pokemon.id"></pocecart>
    </template>
    <div>
      <button v-if="isonScroll" v-on:click="startInfiniteScroll">БОЛЬШЕ ПОКЕМОНОВ!!!</button>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pocecart from "@/components/pocecart.vue";

export default {
  name: "Pocedex",
  data() {
    return {
      offsetURL: 12,
      isonScrolling: true,
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
      return "?offset=" + String(this.offsetURL) + "&limit=12";
    },
    async dispatchPokemones() {
      await this.$store.dispatch("get_pokemones", this.offsetCounter());
      this.offsetURL = this.offsetURL + 12;
    },
    async scrollHandler() {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = document.documentElement.clientHeight;
      const totalHeight = document.documentElement.offsetHeight;
      const atBottom = scrollTop + viewportHeight === totalHeight;

      if (atBottom && scrollTop > 50) {
        await this.dispatchPokemones();
      }
    },
    startInfiniteScroll(){
      document.addEventListener("scroll", this.scrollHandler);
      this.isonScroll = false;
    }
  },
  created() {
    if (this.$store.getters.pokemones.length == 0) {
      this.$store.dispatch("get_pokemones", "?offset=0&limit=12");
    }

    
  },
  beforeDestroy() {
    this.$store.commit("DESTROY");
    document.removeEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style lang="scss">
.Pokedex {
  position: relative;
  padding: 0 7%;
  display: grid;
  grid-auto-rows: minmax(300px, auto);
  gap: 60px 20px;
  @media (max-width: 9999px) {
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
  button{
    position: absolute;
    bottom: 10px;
  }
}
</style>