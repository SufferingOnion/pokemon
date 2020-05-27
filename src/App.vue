<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/SomeContent">Some Content</router-link>
        </li>
        <li>
          <router-link to="/Pocedex">Pokedex</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body,html,*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
#app{
  width: 100vw;
  height: auto;
}

</style>

<script>
export default {
  data(){
    return {
      name: 'здурова',
      url: "privet",
    }
  },
  methods: {
  }
}
</script>