<template>
  <div>
    <div class="Pokedex">
      <transition-group name="list" tag="div" mode="out-in">
        <pocecart v-for="pokemon in pokemones" :key="pokemon.id" :pokemon="pokemon"></pocecart>
      </transition-group>
    </div>
    <div v-observe="scrollHandler" class="preloader">
      <button
        v-if="isonScrolling&&pokemones.length"
        v-on:click="startInfiniteScroll"
      >БОЛЬШЕ ПОКЕМОНОВ!!!</button>
      <img v-show="IsLoaded" src="../assets/loading.svg" alt="preloader" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pocecart from "@/components/pocecart.vue";

export default {
  name: "Pokedex",
  data() {
    return {
      offsetURL: 8,
      isonScrolling: false
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
      return "?offset=" + String(this.offsetURL) + "&limit=8";
    },
    async dispatchPokemones() {
      await this.$store.dispatch("get_pokemones", this.offsetCounter());
      this.offsetURL < 788
        ? (this.offsetURL = this.offsetURL + 8)
        : (this.offsetURL = 788);
    },
    scrollHandler() {
      if (!this.IsLoaded) {
        this.dispatchPokemones();
      }
    }
  },
  created() {
    if (this.$store.getters.pokemones.length == 0) {
      this.$store.dispatch("get_pokemones", "?offset=0&limit=8");
    }
  },
  beforeDestroy() {
    this.$store.commit("DESTROY");
    this.offsetURL = 12;
  }
};
</script>

<style lang="scss" scoped>
.Pokedex {
  > div {
    padding: 0 7%;
    width: 100%;
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
}
@keyframes preloader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  img {
    width: 5vw;
    animation: preloader 0.5s linear infinite;
  }
}
.list-enter-active {
  position: relative;
  transition: all .5s ease-in-out;
}
.list-enter {
  &:nth-child(4n) {
    transform: translateX(70px);
    opacity: 0;
  }
  &:nth-child(4n + 1) {
    transform: translateX(-70px);
    opacity: 0;
  }
  &:nth-child(4n + 2) {
    transform: translateY(70px);
    opacity: 0;
  }
  &:nth-child(4n + 3) {
    transform: translateY(-70px);
    opacity: 0;
  }

  &:nth-child(8n + 1) {
    transform: translateX(70px);
    opacity: 0;
  }

  &:nth-child(8n) {
    transform: translateX(-70px);
    opacity: 0;
  }

  &:nth-child(8n + 3) {
    transform: translateY(70px);
    opacity: 0;
  }

  &:nth-child(8n + 2) {
    transform: translateY(-70px);
    opacity: 0;
  }
}
</style>