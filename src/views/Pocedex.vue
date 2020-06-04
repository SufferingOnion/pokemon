<template>
  <div>
    <div class="Pokedex">
      <template v-if="pokemones.length">
        <pocecart v-for="pokemon in pokemones" :key="pokemon.id" :pokemon="pokemon"></pocecart>
      </template>
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
  name: "Pocedex",
  data() {
    return {
      offsetURL: 12,
      isonScrolling: false
    };
  },
  computed: {
    pokemones() {
      return this.$store.getters.pokemones;
    },
    IsLoaded() {
      return this.$store.getters.IsLoaded;
    },
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
      this.offsetURL<788 ? (this.offsetURL = this.offsetURL + 12): (this.offsetURL = 788)
    },
    scrollHandler() {
      if (!this.IsLoaded) {
        this.dispatchPokemones();
      }
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
.types {
  display: flex;
  width: 60%;
  flex-flow: row nowrap;
  align-items: flex-start;
  position: relative;
  left: 10px;
  margin-bottom: 15px;
  span {
    display: block;
    text-align: center;
    flex: 0 0 65%;
    padding: 4px 2em;

    margin-right: 4px;
    border-radius: 5px;
    color: blanchedalmond;
    background: black;
    font-family: "Flexo-Medium", arial, sans-serif;
    font-size: 11px;
  }
  .poison {
    color: white;
    background: #b97fc9;
  }
  .grass {
    background-color: #9bcc50;
    color: #212121;
  }
  .fire {
    background-color: #fd7d24;
    color: #fff;
  }
  .flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121;
  }
  .water {
    background-color: #4592c4;
    color: #fff;
  }
  .bug {
    background-color: #729f3f;
    color: #fff;
  }
  .normal {
    background-color: #a4acaf;
    color: #212121;
  }
  .electric {
    background-color: #eed535;
    color: #212121;
  }
  .ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121;
  }
  .fairy {
    background-color: #fdb9e9;
    color: #212121;
  }
  .fighting {
    background-color: #d56723;
    color: #fff;
  }
  .dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
  }
  .ghost {
    background-color: #7b62a3;
    color: #fff;
  }
  .psychic {
    background-color: #f366b9;
    color: #fff;
  }
  .steel {
    background-color: #9eb7b8;
    color: #212121;
  }
  .dark {
    background-color: #707070;
    color: #fff;
  }
  .ice {
    background-color: #51c4e7;
    color: #212121;
  }
  .rock {
    background-color: #a38c21;
    color: #fff;
  }
}
a {
  text-decoration: none;
  color: black;
}
img {
  image-rendering: pixelated;
}

.id {
  position: absolute;
  font-family: "Flexo-Bold", arial, sans-serif;
  font-weight: 800;
  font-stretch: 100%;
  top: 10px;
  left: 10px;

  font-size: 12.8px;
  color: #919191;
}
h1 {
  position: relative;
  left: 10px;
  font-size: 18px;
  font-weight: 400;
  font-family: "Flexo-Demi", arial, sans-serif;
  color: #313131;
  margin: 15px 0;
}
</style>