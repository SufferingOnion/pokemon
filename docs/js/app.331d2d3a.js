(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],p=0,l=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3f22c472":"246dc3c5","chunk-6d99338e":"126c126e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3f22c472":1,"chunk-6d99338e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3f22c472":"69a247cc","chunk-6d99338e":"62506424"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],p=s.getAttribute("data-href");if(p===r||p===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],m.parentNode.removeChild(m),n(u)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e);var l=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pokemon/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var m=p;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("div",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("div",[n("router-link",{attrs:{to:"/Pokedex"}},[e._v("Pokedex")])],1)]),n("router-view")],1)},a=[],u={data:function(){return{}},methods:{}},i=u,c=(n("5c0b"),n("2877")),s=Object(c["a"])(i,o,a,!1,null,null,null),p=s.exports,l=(n("fb6a"),n("b0c0"),n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Привет!")]),n("p",[e._v(" Это мой концептуальный проект, необходимый для демонстрации моих возможностей как программиста, а так же позволивший мне очень многому научиться. ")]),n("h2",[e._v("Этот сайт создавался с помощью:")]),e._m(0),n("h2",[e._v("Ключевые особенности с которыми я столкнулся в процессе разработки:")]),n("ul",[n("li",{attrs:{"data-id":"Intro"},on:{click:function(t){return e.GoTo(t.target)}}},[e._v("Введение")]),n("li",{attrs:{"data-id":"FetchPromise"},on:{click:function(t){return e.GoTo(t.target)}}},[e._v(" Работа с запросами и Promise | Работа с PokeAPI")]),n("li",{attrs:{"data-id":"VuexWork"},on:{click:function(t){return e.GoTo(t.target)}}},[e._v("Работа с Vuex и организация мутаций и действий")]),n("li",{attrs:{"data-id":"Reactivity"},on:{click:function(t){return e.GoTo(t.target)}}},[e._v("Особенности реактивности Vue")]),n("li",{attrs:{"data-id":"GitHub"},on:{click:function(t){return e.GoTo(t.target)}}},[e._v("GitHub pages и Vue Router")])]),n("h3",{attrs:{id:"Intro"}},[e._v("Введение")]),n("p",[e._v(" В начале я бы хотел уточнить, что в этом проекте я первый раз использовал все эти инструменты. Поэтому планирование и логика работы страдала, больше всего усилий пришлось приложить к реализации Evolution chain и Поиску, который в добавок ко всему еще и не предоставляется PokeAPI (поэтому было принято реешение реализовать его минимально). Но так же надо отметить, что все эти трудности дали мне бесценный опыт и понимание некоторых механизмов как по части Vue, так и JavaScript. Теперь я могу перейти к более развернутому описанию сложностей возникших у меня на пути. ")]),n("h3",{attrs:{id:"FetchPromise"}},[e._v("Работа с запросами и Promise")]),n("p",[e._v(" Разобраться в работе Fetch было легко, я намерено не стал использовать Axios и подобные, чтобы не утяжелять проект и заодно разобраться в нативных инструментах JS. Большим открытием для меня стал Promise и Promise.all а так же методы как .then() они оказались крайне удобными в применении, особенно с такой структурой ответа PokeAPI, где было необходимо делать много одинаковых запросов. В сочетании с различными методами (особенно map) удалось реализовать поток запросов, а благодаря Promise.all они приходят в нужном порядке ")]),n("h3",{attrs:{id:"VuexWork"}},[e._v("Работа с Vuex и организация мутаций и действий")]),n("p",[e._v(" Так как PokeAPI не предоставляет специальных методов поиска,() а поиск в подобном приложении очень хотелось бы) я решил просто делать запросы по заданным параметрам, после чего фильтровать их исключая лишнее. В целом тут все очевидно, но возникла одна проблема, карточки покемонов отрисовываются циклом v-for из массива, поэтому нужно либо отчищать массив либо создать отдельный для поиска. На этом варианте я и остановился. ")]),n("h3",{attrs:{id:"Reactivity"}},[e._v("Особенности реактивности Vue")]),n("p",[e._v(" Выводя результаты ассинхронных запросов из массива в store через v-for можно столкнуться с проблемой того, что vue не перерисовывает список и просто не замечает изменений в массиве. Чтобы решить эту проблему необходимо использовать методы изменяющие масив, в том числе для его отчистки испльзуя splice(). Так же полчать данные из vuex нужно используя геттеры и вычисляемые свойства в компоненте. ")]),n("h3",{attrs:{id:"Reactivity"}},[e._v("Особенности реактивности Vue")]),n("p",[e._v(" Выводя результаты ассинхронных запросов из массива в store через v-for можно столкнуться с проблемой того, что vue не перерисовывает список и просто не замечает изменений в массиве. Чтобы решить эту проблему необходимо использовать методы изменяющие масив, в том числе для его отчистки испльзуя splice(). Так же полчать данные из vuex нужно используя геттеры и вычисляемые свойства в компоненте. ")]),n("h3",{attrs:{id:"GitHub"}},[e._v("GitHub pages и Vue Router")]),n("p",[e._v(" Когда мне захотелось разместить проект на GitHub, чтобы все его могли посмотреть, я столкнулся с проблемой того что Router в режиме History mode нуждается в небольшой конфигурации сервера, что я не смог реализовать на GitHub, поэтому было принято решение оставить # который может и портит слегка вид ссылки, но зато все работает как надо. ")])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://pokeapi.co/",target:"_blank"}},[e._v("PokeAPI")])]),n("li",[n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[e._v("Vue")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank"}},[e._v("Vuex")])]),n("li",[n("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank"}},[e._v("Vue-Router")])]),n("li",[n("a",{attrs:{href:"http://velocityjs.org/",target:"_blank"}},[e._v("Velocity")])]),n("li",[n("a",{attrs:{href:"https://github.com/Akryum/vue-observe-visibility#readme",target:"_blank"}},[e._v("Intersection Observer")])])])}],h={name:"Home",methods:{GoTo:function(e){document.getElementById(e.dataset.id).scrollIntoView({block:"center",behavior:"smooth"})}}},d=h,_=(n("aae4"),Object(c["a"])(d,m,f,!1,null,"2f00e870",null)),v=_.exports;r["a"].use(l["a"]);var g=[{path:"/",name:"Home",component:v},{path:"/Pokedex",name:"Pokedex",component:function(){return n.e("chunk-6d99338e").then(n.bind(null,"5de7"))}},{path:"/Pokemon/:name",name:"Pokemon",meta:{title:"name"},component:function(){return n.e("chunk-3f22c472").then(n.bind(null,"5075"))},props:!0}],k=new l["a"]({routes:g});k.beforeEach((function(e,t,n){e.params.name?(document.title=e.params.name[0].toUpperCase()+e.params.name.slice(1),n()):(document.title=e.name,n())}));var y=k,E=n("2f62"),b=(n("4de4"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("07ac"),n("2532"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("1da1")),O={state:{IsLoad:!1,pokemones:[],pokemon:{},next:"",baseURL:"https://pokeapi.co/api/v2/pokemon"},mutations:{NEXT:function(e,t){e.next=t},ADD_POKEMONES:function(e,t){Array.prototype.push.apply(e.pokemones,t),e.IsLoad=!1},ADD_UNO_POKEMON:function(e,t){e.pokemon=t,e.pokemon.damage_rel=[],e.pokemon.evo_chain=[]},ADD_UNO_INFO_SPECIES:function(e,t){var n=t.flavor_text_entries.filter((function(e){return"en"==e.language.name}));t.flavor_text_entries.length=0,Array.prototype.push.apply(t.flavor_text_entries,n);var r=t.genera.filter((function(e){return"en"==e.language.name}));t.genera.length=0,Array.prototype.push.apply(t.genera,r),e.pokemon.species=t},ADD_UNO_INFO_TYPES:function(e,t){e.pokemon.types.forEach((function(e,n){e.types_relations={},e.types_relations.damage_from=[],Array.prototype.push.apply(e.types_relations.damage_from,t[n].damage_relations.double_damage_from.map((function(e){return e.multiple=2,e.ind=n,e}))),Array.prototype.push.apply(e.types_relations.damage_from,t[n].damage_relations.half_damage_from.map((function(e){return e.multiple=.5,e.ind=n,e}))),Array.prototype.push.apply(e.types_relations.damage_from,t[n].damage_relations.no_damage_from.map((function(e){return e.multiple=0,e.ind=n,e})))})),2==t.length?(e.pokemon.types[0].types_relations.damage_from.forEach((function(t){e.pokemon.types[1].types_relations.damage_from.forEach((function(n){t.name==n.name&&(t.multiple=t.multiple*n.multiple,n.multiple=t.multiple,4==t.multiple&&(e.pokemon.damage_rel.includes(t)||(t.from="FROM 4444",e.pokemon.damage_rel.push(t))))}))})),Array.prototype.push.apply(e.pokemon.damage_rel,e.pokemon.types[0].types_relations.damage_from.filter((function(t){return 2==t.multiple&&void 0==e.pokemon.damage_rel.find((function(e){return t.name==e.name}),t)}))),Array.prototype.push.apply(e.pokemon.damage_rel,e.pokemon.types[1].types_relations.damage_from.filter((function(t){return 2==t.multiple&&void 0==e.pokemon.damage_rel.find((function(e){return t.name==e.name}),t)})))):Array.prototype.push.apply(e.pokemon.damage_rel,e.pokemon.types[0].types_relations.damage_from.filter((function(e){return 2==e.multiple})))},ADD_UNO_INFO_EVOCHAINE:function(e,t){Array.prototype.push.apply(e.pokemon.evo_chain,t),e.IsLoad=!1},ISLOAD:function(e,t){e.IsLoad=t},DESTROY:function(e){e.pokemones.length=0},DESTROY_POKEMON:function(e){e.pokemon={}}},getters:{pokemones:function(e){return e.pokemones},IsLoad:function(e){return e.IsLoad},GET_UNO_POKEMON:function(e){return e.pokemon}},actions:{get_pokemones:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("ISLOAD",!0),fetch(t.state.baseURL+n,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return t.commit("NEXT",e.next),e})).then((function(e){t.dispatch("get_pokemones_deteils",e.results)}));case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),get_pokemones_deteils:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Promise.all(n.map((function(e){return fetch(e.url,{method:"GET"})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){return Promise.all(e.map((function(e){e.img=new Image,e.img.src=e.sprites.front_default}))),e})).then((function(e){return t.commit("ADD_POKEMONES",e)}));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),get_uno_pokemon:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("ISLOAD",!0),fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return t.commit("ADD_UNO_POKEMON",e),e})).then((function(e){return fetch(e.species.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return t.commit("ADD_UNO_INFO_SPECIES",e),e})).then((function(e){fetch(e.evolution_chain.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=[],n=function e(n){t.push(Object.values(n.species).slice(0,1)),1==n.evolves_to.length?e(n.evolves_to[0]):n.evolves_to.length>1&&(t.push(n.evolves_to.map((function(e){return e.species.name}))),0!=n.evolves_to[0].evolves_to.length&&t.push(n.evolves_to.map((function(e){return e.evolves_to[0].species.name}))))};return console.log(t),n(e.chain),t})).then((function(e){Promise.all(e.map((function(e){return Promise.all(e.map((function(e){return fetch("https://pokeapi.co/api/v2/pokemon/"+e+"/",{method:"GET"})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))}))}))).then((function(e){return t.commit("ADD_UNO_INFO_EVOCHAINE",e)}))}))})),e})).then((function(e){Promise.all(e.types.map((function(e){return fetch(e.type.url,{method:"GET"})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){return t.commit("ADD_UNO_INFO_TYPES",e)}))}));case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},P=(n("277d"),n("45fc"),n("a434"),n("4fad"),n("3835")),A={state:{IsSearched:!1,searched_pokemones:[],request:{},baseURL:"https://pokeapi.co/api/v2/"},mutations:{IS_SEARCHED:function(e,t){e.IsSearched=t},SET_SEARCHED_POKEMONES:function(e,t){Array.prototype.push.apply(e.searched_pokemones,t)},RESET_SEARCH:function(e){e.searched_pokemones.splice(0,e.searched_pokemones.length)},SET_REQUEST:function(e,t){e.request=t}},getters:{searched_pokemones:function(e){return e.searched_pokemones},IsSearched:function(e){return e.IsSearched},request:function(e){return e.request}},actions:{search_pokemones:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("ISLOAD",!0),Promise.all(Object.entries(t.state.request).map((function(e){var n=Object(P["a"])(e,2),r=n[0],o=n[1];return Array.isArray(o)?Promise.all(o.map((function(e){return fetch(t.state.baseURL+r+"/"+e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.pokemon}))}))):""!=o?{pokemon:{name:o,url:t.state.baseURL+r+"/"+o}}:o}))).then((function(e){var n=Object(P["a"])(e,2),r=n[0],o=n[1],a=[];console.log([r,o]),o.length>1?a=o[0].filter((function(e){return o[1].some((function(t){return t.pokemon.name==e.pokemon.name}))})):1==o.length?a=o[0]:a.length=0,0!=a.length&&""!=r?(a=a.filter((function(e){return e.pokemon.name==r.pokemon.name})),console.log(a)):""!=r&&a.push(r),a=a.map((function(e){return e.pokemon})),console.log(a),Promise.all(a.map((function(e){return fetch(e.url,{method:"GET"})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){return Promise.all(e.map((function(e){e.img=new Image,e.img.src=e.sprites.front_default}))),e})).then((function(e){t.commit("RESET_SEARCH"),t.commit("IS_SEARCHED",!0),t.commit("SET_SEARCHED_POKEMONES",e)})),t.commit("ISLOAD",!1)}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}};r["a"].use(E["a"]);var S=new E["a"].Store({state:{},modules:{pokedexStore:O,search:A}}),I=n("85fe"),T=n("bcc2");r["a"].prototype.$velocity=T["a"],r["a"].directive("observe",I["a"]),r["a"].config.productionTip=!1,new r["a"]({router:y,store:S,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},aae4:function(e,t,n){"use strict";var r=n("e446"),o=n.n(r);o.a},e446:function(e,t,n){}});
//# sourceMappingURL=app.331d2d3a.js.map