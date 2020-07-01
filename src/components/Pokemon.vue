<template>
  <div class="Container">
    <template v-if="!IsLoad">
      <div class="Pokemon">
        <div class="aside_pokemon" v-observe="pokemon.id? StatIsVisible : false">
          <img :src="pokemon.sprites.front_default" />
          <div class="stats_wrapper">
            <transition-group tag="div" :css="false" @beforeEnter="beforeStatAnimate" v-on:enter="statAnimate">
              <div
                v-show="Visible"
                class="stats_wrapper-stat"
                v-for="(statitem, index) in pokemon.stats"
                :key="index"
                v-bind:data-index="index"
              >
                <span>
                  <span :class="pokemon.stats[index].stat.name">{{ pokemon.stats[index].stat.name }}</span>
                  <span>{{ pokemon.stats[index].base_stat }}</span>
                </span>
                <div class="stats_stat">
                  <div id="stat_value"></div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
        <div class="Pokemon-Information">
          <header class="cart">
            <h1 class="name">
              {{ pokemon.name }}
              <span class="id">#{{ ("00"+pokemon.id).slice(-3) }}</span>
            </h1>
          </header>
          <p
            class="flavor_text"
          >{{ pokemon.species.flavor_text_entries[pokemon.species.flavor_text_entries.length - 1].flavor_text }}</p>
          <h2>Characteristics</h2>
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
              <span>Category</span>
              <span>{{ pokemon.species.genera[pokemon.species.genera.length - 1].genus.slice(0, pokemon.species.genera[pokemon.species.genera.length - 1].genus.indexOf("Pokémon")) }}</span>
            </div>
            <div class="abilities">
              <span>Abilities</span>
              <span v-for="(slot, index) in pokemon.abilities" :key="index">{{ slot.ability.name }}</span>
            </div>
            <div class="gender">
              <span>Gender</span>
              <span>
                <img src="../assets/icons/male.svg" alt="male" />
                <img src="../assets/icons/female.svg" alt="female" />
              </span>
            </div>
          </div>
          <h2>Type</h2>
          <div class="types">
            <span
              v-for="type of pokemon.types"
              :key="type.id"
              :class="type.type.name"
            >{{ type.type.name}}</span>
          </div>
          <h2>Weaknesses</h2>
          <div class="types">
            <span v-for="(type, index) of pokemon.damage_rel" :key="index" :class="type.name">
              {{ type.name}}
              <span v-if="type.multiple == 4">x4</span>
            </span>
          </div>
        </div>
        <div class="Pokemon-Evolution">
          <h1>Evolution stages</h1>
          <div class="Pokemon-Evolution_wrapper"  v-if="pokemon.evo_chain.length != 0">
            <div
              v-if="pokemon.evo_chain.length >1"
              :style="ArrowStyle1"
              class="evolution-chain-arrow"
            >
              <div v-for="item in ArrowAmount1" :key="item"></div>
            </div>
            <div
              v-if="pokemon.evo_chain.length >2"
              :style="ArrowStyle2"
              class="evolution-chain-arrow"
            >
              <div v-for="item in ArrowAmount2" :key="item"></div>
            </div>
            <evolution-chain
              class="evolution-chain"
              v-for="(item, index) in pokemon.evo_chain"
              :key="index"
              :evo_item="item"
              :name="name"
              :data-set="index"
              :style="{order: index}"
            ></evolution-chain>
          </div>
        </div>
      </div>
    </template>

    <div class="preloader">
      <img v-show="IsLoad" src="../assets/loading.svg" alt="preloader" decoding="sync" />
    </div>
  </div>
</template>

<script>
import evolution_chain from "./Evolution_chain.vue";
export default {
  name: "CartOfPokemon",
  components: {
    "evolution-chain": evolution_chain
  },
  props: ["name"],
  data() {
    return {
      PokeUrl: "https://pokeapi.co/api/v2/pokemon/" + this.name,
      Visible: false
    };
  },
  computed: {
    pokemon() {
      return this.$store.getters.GET_UNO_POKEMON;
    },
    IsLoad() {
      return this.$store.getters.IsLoad;
    },
    ArrowAmount1() {
      if (this.pokemon.evo_chain[1].length == 2) {
        return 2;
      } else {
        return 1;
      }
    },
    ArrowAmount2() {
      if (this.pokemon.evo_chain[2].length == 2) {
        return 2;
      } else {
        return 1;
      }
    },
    ArrowStyle1() {
      if (this.pokemon.evo_chain[1].length == 2) {
        return {
          padding: "15% 0"
        };
      } else {
        return {
          "align-items": "center",
          padding: "20% 0"
        };
      }
    },
    ArrowStyle2() {
      if (this.pokemon.evo_chain[2].length == 2) {
        return {
          padding: "15% 0"
        };
      } else {
        return {
          "align-items": "center",
          padding: "20% 0"
        };
      }
    }
  },
  methods: {
    StatIsVisible(isVisible) {
      this.Visible = isVisible;
    },
    beforeStatAnimate(el) {
      el.style.left = "-100%"
    },
    statAnimate(el) {
      this.$velocity(
        el.lastChild.firstChild,
        {
          left: this.StatsOffset(this.pokemon.stats[el.dataset.index].base_stat) + "%"
        },
        { duration: 2000 }
      );
    },
    StatsOffset(base_stat){
      return base_stat <= 200 ? -(100 - base_stat / 2) : 0
      
    }
  },
  created() {
    this.$store.dispatch("get_uno_pokemon", this.PokeUrl);
  },
  beforeDestroy() {
    this.$store.commit("DESTROY_POKEMON");
  }
};
</script>

<style scoped lang="scss">
.Container {
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    padding: 0 7%;
  }
  @media (max-width: 320px) {
    padding: 0 2%;
  }
}
span,
h1,
h2 {
  text-transform: capitalize;
}
* {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  white-space: nowrap;
  @media (max-width: 425) {
    white-space: wrap;
  }
}
h1 {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 45px;
  color: #25272e;
}
.Pokemon {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 24% auto;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  gap: 20px;
  > * {
    background: #ffffff;
    box-shadow: 0px 12px 27px rgba(24, 25, 28, 0.08);
    border-radius: 10px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  &-Information {
    height: auto;
    width: 100%;
    grid-column: 2;
    padding: 80px;
    padding-right: 8.8vw;
    @media (max-width: 1024px) {
      grid-column: 1;
      padding: 5%;
    }
    > * {
      margin: 25px 0;
    }
    .flavor_text {
      white-space: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      color: #25272e;
      opacity: 0.7;
    }
    .types {
      display: flex;
      width: 100%;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      left: 0;
      margin-bottom: 0;
      span {
        position: relative;
        display: block;
        text-align: center;
        flex: 0 0 12em;
        padding: 4px 2em;
        margin: 4px 4px 4px 0;
        border-radius: 5px;
        color: blanchedalmond;
        background: black;
        font-family: "Flexo-Medium", arial, sans-serif;
        font-size: 11px;
        span {
          margin: 0;
          padding: 4px 4px;
          border-radius: 50%;
          position: absolute;
          right: 0;
          top: 0;
        }
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
    .cart {
      margin-top: 0;
      width: 100%;
      height: auto;
      display: block;
      border-radius: 0;
      overflow: visible;
      box-shadow: 0;
      .id {
        position: static;
        top: 0;
        left: 0;
        font-size: 26px;
        line-height: 30px;
        color: #25272e;
        opacity: 0.3;
      }
      .name {
        margin-right: 10px;
      }
    }
    img {
      width: 30vw;
      background-color: #f2f2f2;
    }
    .characteristics {
      display: grid;
      grid-template-columns: auto;
      grid-auto-rows: 46px;
      gap: 10px;

      div {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(51, 51, 51, 0.15);
        div > span {
          display: block;
        }
        span:first-child {
          font-size: 22px;
          line-height: 26px;
          color: #25272e;
          opacity: 0.5;
          display: inline-block;
          width: 7em;
        }
        *:nth-child(n + 2) {
          margin-right: 10px;
          font-size: 22px;
          line-height: 26px;
          color: #25272e;
        }
      }
      .gender {
        span {
          display: flex;
          flex-flow: row nowrap;
          img {
            width: 1em;
            background: transparent;
          }
        }
      }
      @media (max-width: 425px) {
        grid-template-columns: auto auto;
        grid-auto-rows: min-content;
        .abilities {
          grid-column: 1;
          grid-row: 2;
        }
        div {
          flex-flow: column wrap;
          border-bottom: 0;
          span:first-child {
            display: block;
            width: auto;
            margin-bottom: 10px;
          }
          *:nth-child(n + 2) {
            margin-right: 0;
            font-size: 22px;
            line-height: 26px;
            margin-bottom: 5px;
            color: #25272e;
          }
        }
      }
    }
  }
  &-Evolution {
    height: auto;
    width: 100%;
    padding: 0 50px 80px 50px;
    grid-column: 2;
    grid-row: 2;
    > h1 {
      margin: 80px 0 40px 0;
    }
    @media (max-width: 1024px) {
      grid-column: 1;
      grid-row: 3;
      padding: 5%;
      padding-top: 0;
    }
    .Pokemon-Evolution_wrapper {
      width: 100%;
      height: auto;
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      justify-content: center;

      @media (max-width: 1024px) {
        height: auto;
        flex-flow: row wrap;
        align-items: stretch;
      }
      .evolution-chain {
        &-arrow {
          width: 10%;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          align-content: center;
          @media (max-width: 1024px) {
            
            transform: rotate(90deg);
            height: 80vw;
            width: min-content;
            flex-flow: row-reverse wrap;
            align-content: stretch;
          }
          @media (max-width: 425px) {
            box-sizing: content-box;
            transform: rotate(90deg);
            height: 60vw;
            width: min-content;
            flex-flow: row-reverse wrap;
            align-content: stretch;
          }
          @media (max-width: 320px) {
            box-sizing: content-box;
            transform: rotate(90deg);
            height: 80vw;
            width: min-content;
            flex-flow: row-reverse wrap;
            align-content: stretch;
          }
          > div {
            display: block;
            width: 42px;
            height: 42px;
            background: url("../assets/icons/evo_arrow.svg") no-repeat;
            background-size: cover;
            @media (max-width: 1024px) {
              
              width: 100px;
              height: 100px;
            }
            @media (max-width: 425px) {
              width: 70px;
              height: 70px;
            }
            &:nth-child(2) {
              @media (max-width: 1024px) {
                margin-top: auto;
              }
            }
          }
        }
        &-arrow:first-child {
          order: 1;
        }
        &-arrow:nth-child(2) {
          order: 2;
        }
      }
    }
  }
  .aside_pokemon {
    position: sticky;
    top: 0;
    height: min-content;
    padding: 40px;
    width: auto;
    @media (max-width: 1024px) {
      grid-column: 1;
      grid-row: 1;
      position: static;
    }

    img {
      width: 100%;
      margin-bottom: auto;
      image-rendering: pixelated;
      background: url("../assets/background.svg") no-repeat center center;
      background-size: cover;
    }
    .stats_wrapper {
      margin-top: 5px;
      height: min-content;
    }
    .stats_wrapper > div {
      display: flex;
      flex-flow: column;
      overflow: hidden;
      .stats_wrapper-stat {
        margin: 8px 0;
        height: auto;
        span {
          display: flex;
          margin: 8px 0;
          span:first-child {
            margin: 0;
            font-size: 18px;
            line-height: 18px;
            color: #25272e;
            opacity: 0.5;
            margin-right: 10px;
          }
          span:last-child {
            margin: 0;
            opacity: 1;
          }
          .hp {
            text-transform: uppercase;
          }
        }

        .stats_stat {
          overflow: hidden;
          position: relative;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(47, 128, 237, 0.2);
          border-radius: 20px;
        }
        .stats_stat > div {
          position: relative;
          left: -100%;
          width: 100%;
          height: 8px;
          background: rgba(47, 128, 237, 1);
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
