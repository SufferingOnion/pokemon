<template>
  <div>
    <search></search>
    <div class="Pokedex">
      <transition-group
        name="list"
        tag="div"
        
      >
        <pocecart
          v-for="pokemon in pokemones"
          :key="pokemon.name"
          :pokemon="pokemon"
          :data-index="pokemon.id"
        ></pocecart>
      </transition-group>
    </div>
    <div class="Error" v-if="this.Error">
      <p>Ничего не найдено, попробуйте другие параметры поиска.</p>
    </div>
    <div
      v-observe="(!this.IsSearched&&!IsLoad) ? {
        callback: preloaderVisible,
        throttle: 500
      } : false"
      class="preloader"
    >
      <button v-if="this.IsSearched&&!IsLoad" v-on:click="startInfiniteScroll">БОЛЬШЕ ПОКЕМОНОВ!!!</button>
      <img v-show="IsLoad" src="../assets/loading.svg" alt="preloader" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pocecart from "@/components/pocecart.vue";
import search from "@/components/search.vue";
export default {
  name: "Pokedex",
  data() {
    return {
      offsetURL: 12,
      offsetAnimation: 1
    };
  },
  computed: {
    pokemones() {
      if (this.IsSearched == true) {
        return this.searched_pokemones;
      } else {
        return this.pokemones_list;
      }
    },
    searched_pokemones() {
      return this.$store.getters.searched_pokemones;
    },
    pokemones_list() {
      return this.$store.getters.pokemones;
    },
    request() {
      return this.$store.getters.request;
    },
    IsLoad() {
      return this.$store.getters.IsLoad;
    },
    IsSearched() {
      return this.$store.getters.IsSearched;
    },
    Error() {
      return (
        this.IsSearched &&
        this.searched_pokemones.length == 0 &&
        (this.request.pokemon != "" || this.request.type.length != 0)
      );
    }
  },
  components: {
    pocecart,
    search
  },
  methods: {
    offsetCounter() {
      return "?offset=" + String(this.offsetURL) + "&limit=12";
    },
    async dispatchPokemones() {
      await this.$store.dispatch("get_pokemones", this.offsetCounter());
      this.offsetURL < 788
        ? (this.offsetURL = this.offsetURL + 12)
        : (this.offsetURL = 788);
    },
    preloaderVisible(isVisible) {
      if (isVisible) {
        this.dispatchPokemones();
      }
    },
    startInfiniteScroll() {
      this.$store.commit("IS_SEARCHED", false);
    },
    beforeEnter(el) {
      this.$velocity(el, { opacity: 0, position: "relative", bottom: "75px" });
    },
    Enter(el, done) {
      var vm = this;
      var delay = this.animationOffset() * 150;
      setTimeout(function() {
        vm.$velocity(
          el,
          { opacity: 1, bottom: "0" },
          { duration: 1000 },
          { complete: done }
        );
      }, delay);
    },
    animationOffset() {
      if (this.offsetAnimation <= 12) {
        return this.offsetAnimation++;
      } else {
        this.offsetAnimation = 1;
        return this.offsetAnimation++;
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
.Error {
  padding: 0 7%;
  width: 100%;
  height: 10em;
  p{
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.list-enter-active {
  position: relative;
  transition: all 0.5s ease-in-out;
}
.list-enter{
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
.list-leave-active{
  transition: all 0.25s ease-in-out;
}
.list-leave-to{
  opacity: 0;
}

</style>