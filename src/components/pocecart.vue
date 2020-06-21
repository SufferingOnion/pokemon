<template >
  <div class="pokecart">
    <router-link :to="{name:'Pokemon', params:{name: pokemon.name}}">
      <div class="cart">
        <div class="img">
          
          <img ref="img" @load="Enter" :src="pokemon.sprites.front_default" />
        </div>
        <div class="cart_info">
          <span class="id">#{{ ("00"+pokemon.id).slice(-3) }}</span>
          <h1>{{ pokemon.name[0].toUpperCase()+pokemon.name.slice(1) }}</h1>
          <div class="types">
            <span
              v-for="type of pokemon.types"
              :key="type.id"
              :class="type.type.name"
            >{{ type.type.name[0].toUpperCase()+type.type.name.slice(1)}}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "pocecart",
  props: ["pokemon"],
  data() {
    return {
      cartLoaded: false,
    };
  },
  computed: {
    IsLoaded() {
      return this.$store.getters.IsLoaded;
    }
  },
  methods: {
    Enter(){
      this.$velocity(this.$refs.img, { opacity: 1});
    },
  }
};
</script>

<style scoped lang="scss">
.pokecart {
  opacity: 0;
}
.cart {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-flow: column nowrap;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f2f2f2;
  box-shadow: 0px 12px 27px rgba(24, 25, 28, 0.08);
  .img { /* this circle for more comfortable UX */
    padding: 50%;
    background-color: transparent;
    border-radius: 50%;
    img {
      left:0;
      top: 0;
      position: absolute;
      width: 100%;
      opacity: 0;
      transition: opacity .5s ease;
    }
  }

  .cart_info {
    background: #ffffff;
  }
}
@keyframes hoverBounce {
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  50% {
    transform: matrix(1, 0, 0, 1, 0, -3.3);
  }
  to {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
}
.cart:hover {
  animation: hoverBounce 0.23s ease-in-out;
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
