<template>
  <div id="app">
    <nav>

        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/SomeContent">Some Content</router-link>
        </div>
        <div>
          <router-link to="/Pokedex">Pokedex</router-link>
        </div>

    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
body,html{
  width: 100%;

  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  background-color: #E5E5E5;
}
#app{
  width: 100%;
  height: auto;
  nav{
    padding: .5em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    div{
      margin-right: 2em;
    }
  }
}
*{
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
@keyframes preloader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
img {
  image-rendering: pixelated;
}
.preloader {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 10vw;
  padding-bottom: 10vw;
  button {
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    background-color: #30a7d7;
    color: #fff;
    padding: 5px 20px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  img {
    width: 5vw;
    animation: preloader 0.5s linear infinite;
  }
}
</style>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>