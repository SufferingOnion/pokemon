<template>
  <div class="wrapper" :style="EEVEE">
    <router-link
      :to="{name:'Pokemon', params:{name: evo_form.name}}"
      target="_blank"
      v-for="(evo_form, index) in evo_item"
      :key="index"
      :data-set="index"
      class="evo"
    >
      <img :src="evo_form.sprites.front_default" class="evo-img" :class="imgStyle(evo_form.name)" />

      <div class="cart">
        <span class="name">
          {{ evo_form.name }}
          <span class="id">#{{ ("00"+evo_form.id).slice(-3) }}</span>
        </span>
      </div>
      <div class="types">
        <span
          v-for="type of evo_form.types"
          :key="type.id"
          :class="type.type.name"
        >{{ type.type.name}}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "evolution-chain",
  props: {
    evo_item: Array,
    name: String
  },
  computed: {
    EEVEE() {
      if (this.evo_item.length >= 3) {
        return {
          height: "auto",
          width: "90%",
          flex: "3 0 75%",
          "flex-flow": "row wrap"
        };
      } else {
        return {};
      }
    }
  },
  methods: {
    imgStyle: function(name) {
      if (name == this.name) {
        return "evo-circle";
      } else {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  max-height: 90vh;
  height: auto;
  display: flex;
  flex-grow: 1;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  width: 23%;
  @media (max-width: 1024px) {
    width: 100%;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: stretch;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  .evo {
    margin: 0 20px 20px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    @media (max-width: 1024px) {
      width: 100%;
    }
    img {
      width: 69.85%;
    }
    &-circle {
      border: 5px solid #2f80ed;
      border-radius: 50%;
    }

    .cart {
      margin-right: 0;
      padding: 10px;
      display: flex;
      justify-content: center;
      .name {
        display: block;
        font-size: 20px;
        line-height: 23px;
        color: #25272e;
        text-transform: capitalize;
        .id {
          font-size: 20px;
          line-height: 23px;
          opacity: 0.54;
        }
      }
    }
  }
}
.types {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  span {
    position: relative;
    display: block;
    text-align: center;
    width: 49%;
    padding: 4px 0;
    border-radius: 5px;
    color: blanchedalmond;
    background: black;
    font-family: "Flexo-Medium", arial, sans-serif;
    font-size: 16px;
  }
  span:first-child {
    margin-right: 2%;
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
</style>