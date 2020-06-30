<template>
  <form class="search" name="search" @submit.prevent="getSearch(pokemon, type)">
    <div class="search_input">
      <input name="request" type="text" v-model="pokemon" />
      <label for="request">Name or ID</label>
      <button class="search_input-button" for="search">
        <img src="../assets/icons/search.svg" alt />
      </button>
    </div>
    <div class="search_extended">
      <transition
        name="ExSearch"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <div v-if="extededSearch" class="wrapper">
          <div class="wrapper_type" v-for="(poke_type, index) in types" :key="index">
            <input v-model="type" type="checkbox" :value="poke_type" :id="poke_type" />
            <label :class="poke_type" :data-text="poke_type" :for="poke_type">
              <span>{{ poke_type }}</span>
            </label>
          </div>
        </div>
      </transition>
      <div
        @click="FoldExtededSearch"
        class="search_extended-wrap"
      >{{ SearchVisibility }} расширенный поиск</div>
    </div>
  </form>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      pokemon: "",
      type: [],
      types: [
        "fire",
        "water",
        "poison",
        "grass",
        "flying",
        "bug",
        "normal",
        "electric",
        "ground",
        "fairy",
        "fighting",
        "dragon",
        "ghost",
        "psychic",
        "steel",
        "dark",
        "ice",
        "rock"
      ],
      extededSearch: false
    };
  },
  computed: {
    SearchVisibility() {
      return this.extededSearch ? "Скрыть" : "Показать";
    }
  },
  methods: {
    getSearch(pokemon, type) {
      this.$store.commit("SET_REQUEST", { pokemon, type });
      this.$store.dispatch("search_pokemones");
    },
    FoldExtededSearch() {
      this.extededSearch = !this.extededSearch;
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = "0%";
      el.style.paddingTop = "0%";
      el.style.paddingBottom = "0%";
      this.$velocity(
        el.children,
        { opacity: 0, height: "0" },
        { duration: 0 },
      );
      
    },
    enter: function(el, done) {
      this.$velocity(
        el,
        { opacity: 1, height: "40%", "padding-top": "5%", "padding-bottom": "5%", gap: "10px" },
        { duration: 500 },
        { complete: done }
      );
      this.$velocity(
        el.children,
        { opacity: 1, height: "2em" },
        { duration: 500 },
        [ 0.17, 0.67, 0.83, 0.67 ],
        { complete: done }
      );
    },
    leave: function(el, done) {
      this.$velocity(
        el,
        { opacity: 0, height: "0", "padding-top": "0%", "padding-bottom": "0%", gap: "0" },
        { duration: 500 },
        { complete: done }
      );
      this.$velocity(
        el.children,
        { opacity: 0, height: "0"},
        { duration: 500 },
        { complete: done }
      );
    }
  },
  watch: {
    type() {
      if (this.type.length > 2) {
        this.type.shift();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  padding: 0 7%;
  width: 100%;
  .search_input {
    height: 3em;
    width: 100%;
    padding: 2em 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input {
      flex: 1 0;
      width: auto;
      position: relative;
      margin: 0;
      padding: 5px 0;
      border: 0;
      font-size: 18px;
      color: rgba(49, 49, 49, 0.7);
      background: transparent;
      border-bottom: 2px solid #313131;
      outline: none;
    }
    input + label {
      position: absolute;
      transition: all 0.3s ease-in-out;
      opacity: 0.7;
    }
    input:focus + label {
      font-size: 12px;
      transform: translate3d(0, -150%, 0);
    }
    &-button {
      height: 43px;
      width: 43px;
      margin: 10px 10px 10px 5%;
      padding: 0;
      border: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      color: #fff;
      background-color: rgba(47, 128, 237, 0.7);
      img {
        width: 60%;
      }
    }
  }
}
.search_extended {
  width: 100%;
  margin: 5% 0 10% 0;
  background-color: #f2f2f2;
  overflow: hidden;
  border-radius: 5px;

  .wrapper {
    overflow: hidden;

    padding: 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row dense;
    gap: 10px;

    .wrapper_type {
      input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
      input:focus + label {
        box-shadow: 0 0 0 2px #212121;
      }
      input:checked + label {
        box-shadow: 0 0 0 2px #212121, inset 0 0 0 2px #ffffff;
      }
      input:checked:focus + label {
        box-shadow: 0 0 0 2px #212121, inset 0 0 0 2px #3b3b3bf2;
      }
      label {
        position: relative;
        display: block;
        overflow: hidden;
        text-align: center;
        padding: 1em 2em;
        margin-right: 4px;
        border-radius: 5px;
        color: blanchedalmond;
        background: black;
        font-family: "Flexo-Medium", arial, sans-serif;
        font-size: 11px;
      }
      label > span,
      label::after {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      label::after {
        content: attr(data-text);
        opacity: 0;
        color: #212121;
        transform: translate3d(0, 25%, 0);
      }
      label > span,
      label::after {
        transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
      }
      label > span {
        color: white;
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      label:hover > span {
        opacity: 0;
        transform: translate3d(0, -40%, 0);
      }
      label:hover::after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      .poison {
        background: #b97fc9;
      }
      .grass {
        background-color: #9bcc50;
      }
      .fire {
        background-color: #fd7d24;
      }
      .flying {
        background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
        background-color: #3dc7ef;
      }
      .water {
        background-color: #4592c4;
      }
      .bug {
        background-color: #729f3f;
      }
      .normal {
        background-color: #a4acaf;
      }
      .electric {
        background-color: #eed535;
      }
      .ground {
        background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
        background-color: #f7de3f;
      }
      .fairy {
        background-color: #fdb9e9;
      }
      .fighting {
        background-color: #d56723;
      }
      .dragon {
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
        background-color: #53a4cf;
      }
      .ghost {
        background-color: #7b62a3;
      }
      .psychic {
        background-color: #f366b9;
      }
      .steel {
        background-color: #9eb7b8;
      }
      .dark {
        background-color: #707070;
      }
      .ice {
        background-color: #51c4e7;
      }
      .rock {
        background-color: #a38c21;
      }
    }
  }
  &-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    padding: 4px;
    background-color: #707070;
    cursor: pointer;
  }
}
</style>