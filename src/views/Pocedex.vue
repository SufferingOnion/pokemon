<template>
  <div>
    <div class="Pokedex">
      <transition-group
        name="list"
        tag="div"
        appear
        :css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="Enter"
      >
        <pocecart
          v-for="pokemon in pokemones"
          :key="pokemon.id"
          :pokemon="pokemon"
          :data-index="pokemon.id"
        ></pocecart>
      </transition-group>
    </div>
    <div
      v-observe="(isonScrolling&&!IsLoaded) ? {
        callback: preloaderVisible,
        throttle: 500
      } : false"
      class="preloader"
    >
      <button v-if="!isonScrolling&&!IsLoaded" v-on:click="startInfiniteScroll">БОЛЬШЕ ПОКЕМОНОВ!!!</button>
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
      offsetURL: 12,
      offsetAnimation: 1,
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
      this.isonScrolling = true;
    },
    beforeEnter(el) {

      this.$velocity(el, { opacity: 0, position: "relative", bottom: "75px"});


    },
    Enter(el, done) {
      var vm = this;
      var delay = this.animationOffset() * 150;
      setTimeout(function() {
        vm.$velocity(el, { opacity: 1, bottom: "0" },{duration: 1000}, { complete: done });
      }, delay);
      
    },
    animationOffset() {
      if (this.offsetAnimation <= 12) {
        return (this.offsetAnimation++);
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
.list-enter-active {
  position: relative;
  transition: all 0.5s ease-in-out;
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