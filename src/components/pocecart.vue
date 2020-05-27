<template>
  <div>
    <template v-if="pokemon != undefined">
      <a href>
        <div class="cart">
          <img :src="pokemon.sprites.front_default" />
          <span>№{{ pokemon.id }}</span>
          <h1>{{ pokemon.name}}</h1>
          <span v-for="type of pokemon.types" :key="type.id">{{ type.type.name }}</span>
        </div>
      </a>
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
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    img{
      width: 100%;
      height: 100%;
    }
  }

</style>
