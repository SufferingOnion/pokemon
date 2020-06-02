<template>
  <div>
    <template v-if="pokemon.name">
      <header class="cart">
        <h1>{{ pokemon.name }}</h1>
        <h2 class="id">#{{ ("00"+pokemon.id).slice(-3) }}</h2>
      </header>

      <div class="wrapper_pokemon">
        <img :src="pokemon.sprites.front_default" />
        <div class="characteristics">
          <div>
            <span>Height</span>
            <span>{{pokemon.height}}</span>
          </div>
          <div>
            <span>weight</span>
            <span>{{pokemon.weight}}</span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          <div>
            <span>Abilities</span>
            <span v-for="(slot, index) in pokemon.abilities" :key="index">{{ slot.ability.name }}</span>
          </div>
        </div>

        <div class="stats_wrapper" v-observe="StatIsVisible">
          <span>Stats</span>
          <transition-group tag="div" v-on:enter="statAnimate">
            <div
              v-show="Visible"
              class="stats_stat"
              v-for="(id, index) in pokemon.stats"
              :key="index"
              v-bind:data-index="index"
            >
              <div></div>
            </div>
          </transition-group>
        </div>

        <div class="types">
          <span
            v-for="type of pokemon.types"
            :key="type.id"
            :class="type.type.name"
          >{{ type.type.name}}</span>
        </div>
      </div>
    </template>

    <div class="preloader">
      <img v-show="!pokemon.name" src="../assets/loading.svg" alt="preloader" decoding="sync" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CartOfPokemon",
  props: ["name"],
  data() {
    return {
      Visible: false
    };
  },
  computed: {
    pokemon() {
      return this.$store.getters.GET_UNO_POKEMON;
    }
  },
  methods: {
    StatIsVisible(isVisible, entry) {
      this.Visible = isVisible;
      console.log(this.Visible, entry.target);
    },
    statAnimate(el) {
      this.$velocity(
        el.children,
        { top: 100 - this.pokemon.stats[el.dataset.index].base_stat / 2 + "%" },
        { duration: 2000 }
      );
    }
  },
  created() {
    this.$store.dispatch("get_uno_pokemon", this.name);
  },
  beforeDestroy() {
    this.$store.commit("DESTROY_POKEMON");
  }
};
</script>

<style scoped lang="scss">
.cart {
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  .id {
    font-family: "Flexo-Bold", arial, sans-serif;
    font-weight: 800;
    font-stretch: 100%;
    font-size: 12.8px;
    color: #919191;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
    font-family: "Flexo-Demi", arial, sans-serif;
    color: #313131;
  }
}
.types {
  display: flex;
  width: 60%;
  flex-flow: row nowrap;
  align-items: flex-start;
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
@keyframes preloader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.wrapper_pokemon {
  height: auto;
  width: 100%;
  padding: 0 10%;
  display: grid;
  justify-items: stretch;

  @media (min-width: 721px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 721) {
    grid-template-columns: 1fr;
  }
  img {
    width: 30vw;
    background-color: #f2f2f2;
  }
}
.characteristics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  div {
    padding: 20% 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    div > span {
      display: block;
    }
  }
}
.stats_wrapper > div {
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  overflow: hidden;
}
.stats_stat {
  position: relative;
  top: 0;
  height: 20vw;
  background: #bdb9b8;
}
.stats_stat > div {
  position: relative;
  top: 100%;
  height: 20vw;
  background: #0099ff;
}
.preloader {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 10vw;
  padding-bottom: 10vw;
  img {
    width: 5vw;
    animation: preloader 0.5s linear infinite;
  }
}
</style>
