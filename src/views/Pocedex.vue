<template>
  <div>
    <div class="Pokedex">
      <template v-if="pokemones.length">
        
        <pocecart 
        v-for="pokemon in pokemones" 
        :key="pokemon.id" 
        :pokemon="pokemon"
        ></pocecart>
      </template>
    </div>
    <div class="preloader">
      <button v-if="isonScrolling&&pokemones.length" v-on:click="startInfiniteScroll">БОЛЬШЕ ПОКЕМОНОВ!!!</button>
      <img v-show="IsLoaded" src="../assets/loading.svg" alt="preloader" />
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
    startInfiniteScroll() {
      document.addEventListener("scroll", this.scrollHandler);
      this.isonScrolling = false;
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
}
@keyframes preloader {
from {transform: rotate(0deg)}
to {transform: rotate(360deg)}
}
.preloader {
display: flex;
flex-flow: column nowrap;
align-items: center;
padding-top: 10vw;
padding-bottom: 10vw;
  button {
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    background-color: #30a7d7;
    color: #fff;
    padding: 5px 20px;
    font-family: "Roboto",sans-serif;
    font-weight: bold;
  }
  img {
    width: 5vw;
    animation: preloader .5s linear infinite;
  }
}
</style>