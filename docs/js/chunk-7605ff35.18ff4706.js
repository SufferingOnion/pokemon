(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7605ff35"],{4045:function(e,t,o){e.exports=o.p+"img/loading.0fa0b936.svg"},"5de7":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"Pokedex"},[n("transition-group",{attrs:{name:"list",tag:"div",mode:"out-in"}},e._l(e.pokemones,(function(e){return n("pocecart",{key:e.id,attrs:{pokemon:e}})})),1)],1),n("div",{directives:[{name:"observe",rawName:"v-observe",value:e.scrollHandler,expression:"scrollHandler"}],staticClass:"preloader"},[e.isonScrolling&&e.pokemones.length?n("button",{on:{click:e.startInfiniteScroll}},[e._v("БОЛЬШЕ ПОКЕМОНОВ!!!")]):e._e(),n("img",{directives:[{name:"show",rawName:"v-show",value:e.IsLoaded,expression:"IsLoaded"}],attrs:{src:o("4045"),alt:"preloader"}})])])},s=[],r=(o("96cf"),o("1da1")),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("router-link",{attrs:{to:{name:"Pokemon",params:{name:e.pokemon.name}}}},[o("div",{staticClass:"cart"},[o("img",{attrs:{src:e.pokemon.sprites.front_default,decoding:"sync"},on:{load:function(t){e.cartLoaded=!e.cartLoaded}}}),o("span",{staticClass:"id"},[e._v("#"+e._s(("00"+e.pokemon.id).slice(-3)))]),o("h1",[e._v(e._s(e.pokemon.name[0].toUpperCase()+e.pokemon.name.slice(1)))]),o("div",{staticClass:"types"},e._l(e.pokemon.types,(function(t){return o("span",{key:t.id,class:t.type.name},[e._v(e._s(t.type.name[0].toUpperCase()+t.type.name.slice(1)))])})),0)])])],1)},i=[],c={name:"pocecart",props:["pokemon"],data:function(){return{cartLoaded:!1}},computed:{IsLoaded:function(){return this.$store.getters.IsLoaded}},methods:{}},d=c,f=(o("8328"),o("2877")),u=Object(f["a"])(d,a,i,!1,null,"66d92664",null),p=u.exports,l={name:"Pokedex",data:function(){return{offsetURL:8,isonScrolling:!1}},computed:{pokemones:function(){return this.$store.getters.pokemones},IsLoaded:function(){return this.$store.getters.IsLoaded}},components:{pocecart:p},methods:{offsetCounter:function(){return"?offset="+String(this.offsetURL)+"&limit=8"},dispatchPokemones:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("get_pokemones",e.offsetCounter());case 2:e.offsetURL<788?e.offsetURL=e.offsetURL+8:e.offsetURL=788;case 3:case"end":return t.stop()}}),t)})))()},scrollHandler:function(){this.IsLoaded||this.dispatchPokemones()}},created:function(){0==this.$store.getters.pokemones.length&&this.$store.dispatch("get_pokemones","?offset=0&limit=8")},beforeDestroy:function(){this.$store.commit("DESTROY"),this.offsetURL=12}},m=l,h=(o("7e1d"),Object(f["a"])(m,n,s,!1,null,"dca5df62",null));t["default"]=h.exports},"79fb":function(e,t,o){},"7e1d":function(e,t,o){"use strict";var n=o("e94f"),s=o.n(n);s.a},8328:function(e,t,o){"use strict";var n=o("79fb"),s=o.n(n);s.a},e94f:function(e,t,o){}}]);
//# sourceMappingURL=chunk-7605ff35.18ff4706.js.map