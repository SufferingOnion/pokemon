<template>
  <div>
    <template v-if="pokemon.name">
      <header class="cart">
        <h1>{{ pokemon.name }}</h1>
        <span class="id">#{{ ("00"+pokemon.id).slice(-3) }}</span>
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

        <div class="stats_wrapper" v-observe="pokemon.id? StatIsVisible : false">
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
  border-radius: 0;
  overflow: visible;
  box-shadow: 0;
  .id{
    position: static;
    top:0;
    left: 0;
    margin: 15px;
  }
}
.types {
    left: 0;
    margin-bottom: 0;
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
</style>
