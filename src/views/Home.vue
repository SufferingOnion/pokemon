<template>
  <div class="home">
    <h1>Привет!</h1>
    <p>
      Это мой концептуальный проект, необходимый для демонстрации моих возможностей как программиста,
      а так же позволивший мне очень многому научиться.
    </p>

    <h2>Этот сайт создавался с помощью:</h2>
    <ul>
      <li><a href="https://pokeapi.co/" target="_blank">PokeAPI</a></li> 
      <li><a href="https://vuejs.org/" target="_blank">Vue</a></li>
      <li><a href="https://vuex.vuejs.org/" target="_blank">Vuex</a></li>
      <li><a href="https://router.vuejs.org/" target="_blank">Vue-Router</a></li>
      <li><a href="http://velocityjs.org/" target="_blank">Velocity</a></li>
      <li><a href="https://github.com/Akryum/vue-observe-visibility#readme" target="_blank">Intersection Observer</a></li>
    </ul>

    <h2>Ключевые особенности с которыми я столкнулся в процессе разработки:</h2>
    <ul>
      <li data-id="Intro" @click="GoTo($event.target)">Введение</li>
      <li data-id="FetchPromise" @click="GoTo($event.target)"> Работа с запросами и Promise | Работа с PokeAPI</li>
      <li data-id="VuexWork" @click="GoTo($event.target)">Работа с Vuex и организация мутаций и действий</li>
      <li data-id="Reactivity" @click="GoTo($event.target)">Особенности реактивности Vue</li>
      <li data-id="GitHub" @click="GoTo($event.target)">GitHub pages и Vue Router</li>
    </ul>
    <h3 id="Intro">Введение</h3>
    <p>
      В начале я бы хотел уточнить, что в этом проекте я первый раз использовал все эти инструменты. Поэтому
      планирование и логика работы страдала, больше всего усилий пришлось приложить к реализации Evolution chain и Поиску, 
      который в добавок ко всему еще и не предоставляется PokeAPI (поэтому было принято реешение реализовать его минимально).
      Но так же надо отметить, что все эти трудности дали мне бесценный опыт и понимание некоторых механизмов как по части 
      Vue, так и JavaScript.
      Теперь я могу перейти к более развернутому описанию сложностей возникших у меня на пути.
    </p>
    <h3 id="FetchPromise">Работа с запросами и Promise</h3>
    <p>
      Разобраться в работе Fetch было легко, я намерено не стал использовать Axios и подобные, чтобы не утяжелять проект и заодно разобраться
       в нативных инструментах JS. Большим открытием для меня стал Promise и Promise.all а так же методы как .then()
       они оказались крайне удобными в применении, особенно с такой структурой ответа PokeAPI, где было необходимо делать много
       одинаковых запросов. В сочетании с различными методами (особенно map) удалось реализовать поток запросов, а благодаря Promise.all 
       они приходят в нужном порядке
    </p>
    <h3 id="VuexWork">Работа с Vuex и организация мутаций и действий</h3>
    <p>
      Так как PokeAPI не предоставляет специальных методов поиска,() а поиск в подобном приложении очень хотелось бы)
      я решил просто делать запросы по заданным параметрам, после чего фильтровать их исключая лишнее. В целом тут все очевидно,
      но возникла одна проблема, карточки покемонов отрисовываются циклом v-for из массива, поэтому нужно либо отчищать массив
      либо создать отдельный для поиска. На этом варианте я и остановился.
    </p>
    <h3 id="Reactivity">Особенности реактивности Vue</h3>
    <p>
      Выводя результаты ассинхронных запросов из массива в store через v-for можно столкнуться с проблемой того, что 
      vue не перерисовывает список и просто не замечает изменений в массиве. Чтобы решить эту проблему необходимо использовать
      методы изменяющие масив, в том числе для его отчистки испльзуя splice(). Так же полчать данные из vuex нужно используя
      геттеры и вычисляемые свойства в компоненте.
    </p>
    <h3 id="Reactivity">Особенности реактивности Vue</h3>
    <p>
      Выводя результаты ассинхронных запросов из массива в store через v-for можно столкнуться с проблемой того, что 
      vue не перерисовывает список и просто не замечает изменений в массиве. Чтобы решить эту проблему необходимо использовать
      методы изменяющие масив, в том числе для его отчистки испльзуя splice(). Так же полчать данные из vuex нужно используя
      геттеры и вычисляемые свойства в компоненте.
    </p>
    <h3 id="GitHub">GitHub pages и Vue Router</h3>
    <p>
      Когда мне захотелось разместить проект на GitHub, чтобы все его могли посмотреть, я столкнулся с проблемой того что
      Router в режиме History mode нуждается в небольшой конфигурации сервера, что я не смог реализовать на GitHub,
      поэтому было принято решение оставить # который может и портит слегка вид ссылки, но зато все работает как надо.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    GoTo(el){

      document.getElementById(el.dataset.id).scrollIntoView({block: "center", behavior: 'smooth' });
    }
  }
};
</script>
<style lang="scss" scoped>
.home{
  padding: 5%;
}
li{
  cursor: pointer;
}

</style>
