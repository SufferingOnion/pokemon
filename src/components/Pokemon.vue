<template>
  <div class="Container">
    <template v-if="!IsLoaded">
      <div class="Pokemon">
        <div class="aside_pokemon" v-observe="pokemon.id? StatIsVisible : false">
          <img :src="pokemon.sprites.front_default" />
          <div class="stats_wrapper">
            <transition-group tag="div" v-on:enter="statAnimate">
              <div
                v-show="Visible"
                class="stats_wrapper-stat"
                v-for="(statitem, index) in pokemon.stats"
                :key="index"
                v-bind:data-index="index"
              >
                <span>
                  <span>{{ pokemon.stats[index].stat.name }}</span>
                  <span>{{ pokemon.stats[index].base_stat }}</span>
                </span>
                <div class="stats_stat">
                  <div id="stat_value"></div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
        <div class="Pokemon_wrapper">
          <header class="cart">
            <span class="name">{{ pokemon.name }}</span>
            <span class="id">#{{ ("00"+pokemon.id).slice(-3) }}</span>
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
              <span>{{ pokemon.species.genera[pokemon.species.genera.length - 1].genus }}</span>
            </div>
            <div>
              <span>Abilities</span>
              <span v-for="(slot, index) in pokemon.abilities" :key="index">{{ slot.ability.name }}</span>
            </div>
            <div class="gender">
              <span>Gender</span>
              <img src="../assets/icons/male.svg" alt="male" />
              <img src="../assets/icons/female.svg" alt="female" />
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
            <span
              v-for="(type, index) of pokemon.damage_rel"
              :key="index"
              :class="type.name"
            >{{ type.name}}
            <span v-if="type.multiple == 4">x4</span>
            </span>
          </div>
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
      PokeUrl: "https://pokeapi.co/api/v2/pokemon/" + this.name,
      Visible: false
    };
  },
  computed: {
    pokemon() {
      return this.$store.getters.GET_UNO_POKEMON;
    },
    IsLoaded() {
      return this.$store.getters.IsLoaded;
    }
  },
  methods: {
    StatIsVisible(isVisible, entry) {
      this.Visible = isVisible;
      console.log(this.Visible, entry.target);
    },
    statAnimate(el) {
      this.$velocity(
        el.lastChild.firstChild,
        {
          left:
            -(100 - this.pokemon.stats[el.dataset.index].base_stat / 2) + "%"
        },
        { duration: 2000 }
      );
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
}
*:first-letter {
  text-transform: capitalize;
}
* {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  white-space: nowrap;
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

  @keyframes preloader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &_wrapper {
    height: auto;
    width: 100%;
    grid-column: 2;
    padding: 80px;
    padding-right: 170px;
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
      width: 60%;
      flex-flow: row nowrap;
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
        margin-right: 4px;
        border-radius: 5px;
        color: blanchedalmond;
        background: black;
        font-family: "Flexo-Medium", arial, sans-serif;
        font-size: 11px;
        span{
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
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      border-radius: 0;
      overflow: visible;
      box-shadow: 0;
      font-size: 38px;
      line-height: 45px;
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
      grid-template-columns: 1fr;
      grid-auto-rows: 46px;

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
        img {
          width: 1em;
          background: transparent;
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
        margin: 5px 0;
        height: auto;
        span {
          span:first-child {
            font-size: 18px;
            line-height: 18px;
            color: #25272e;
            opacity: 0.5;
            margin-right: 10px;
          }
          span:last-child {
            opacity: 1;
          }
        }

        .stats_stat {
          position: relative;
          left: 0;
          width: 100%;
          height: 8px;
          background: #bdb9b8;
        }
        .stats_stat > div {
          position: relative;
          left: -100%;
          width: 100%;
          height: 8px;
          background: #0099ff;
        }
      }
    }
  }
}
</style>
