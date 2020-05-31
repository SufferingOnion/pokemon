<template>
  <div>
    <template v-if="pokemon.name">
      <header class="cart">
        <h1>{{ pokemon.name }}</h1>
        <h2 class="id">#{{ ("00"+pokemon.id).slice(-3) }}</h2>
      </header>
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
      <span
        v-for="type of pokemon.types"
        :key="type.id"
        :class="type.type.name"
      >{{ type.type.name}}</span>
      <div >
        <span>Stats</span>
        <div class="stats">
        <!--  <ul class="stats_stat" v-for="(id, index) in pokemon.stats" :key="index">
            <li v-for="(stat, index) in 15" :key="index"></li>
            </ul> -->
            <div class="stats_stat" 
            v-for="(id, index) in pokemon.stats" 
            :key="index" 
            style="background-image: linear-gradient(0deg, #3dc7ef 0%, #bdb9b8 100%), transition: background-image .5s ease-in-out 2s"
            :style="StatGrad(id.base_stat)"></div>
          
        </div>
      </div>
    </template>
    <div class="preloader">
      <img v-show="!pokemon.name" src="../assets/loading.svg" alt="preloader" decoding="sync"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartOfPokemon",
  props: ["name"],
  computed: {
    pokemon() {
      return this.$store.getters.GET_UNO_POKEMON;
    },
  },
  methods:{
    StatGrad(stat){
      return {
      
      'background-image': 'linear-gradient(0deg, #3dc7ef ' +stat+'%, #bdb9b8 ' +stat+'%)'}
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
.cart > * {
  margin-left: 0;
}
.cart {
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  img {
    width: 100%;
    height: 100%;
    margin-left: 0;
    background-color: #f2f2f2;
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
  .id {
    font-family: "Flexo-Bold", arial, sans-serif;
    font-weight: 800;
    font-stretch: 100%;
    padding-top: 2px;
    font-size: 12.8px;
    color: #919191;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0 4px 10px;
    font-family: "Flexo-Demi", arial, sans-serif;
    color: #313131;
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
.stats{
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  &_stat{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 20vw;
    background-image: linear-gradient(0deg, #3dc7ef 0%, #bdb9b8 100%);
    transition: all .5s ease-in-out 2s;
    li{
      margin-bottom: 3.5px;
      display: block;
      width: 100%;
      background:crimson;
      height: 7px;
    }
  }
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
