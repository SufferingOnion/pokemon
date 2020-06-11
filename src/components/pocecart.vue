<template>
  <div>
    <template v-if="pokemon != undefined">
      <router-link :to="{name:'Pokemon', params:{name: pokemon.name}}">
        <div class="cart">
          <img :src="pokemon.sprites.front_default" />
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
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "pocecart",
  props: ["pokemon"],
  computed: {
    IsLoaded() {
      return this.$store.getters.IsLoaded;
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  position: relative;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 12px 27px rgba(24, 25, 28, 0.08);
  img {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
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
</style>
