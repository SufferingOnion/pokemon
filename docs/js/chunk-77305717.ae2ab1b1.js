(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77305717"],{"18cd":function(t,e,s){"use strict";var a=s("9fe0"),n=s.n(a);n.a},4045:function(t,e,s){t.exports=s.p+"img/loading.0fa0b936.svg"},5075:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Container"},[t.IsLoaded?t._e():[a("div",{staticClass:"Pokemon"},[a("div",{directives:[{name:"observe",rawName:"v-observe",value:!!t.pokemon.id&&t.StatIsVisible,expression:"pokemon.id? StatIsVisible : false"}],staticClass:"aside_pokemon"},[a("img",{attrs:{src:t.pokemon.sprites.front_default}}),a("div",{staticClass:"stats_wrapper"},[a("transition-group",{attrs:{tag:"div"},on:{enter:t.statAnimate}},t._l(t.pokemon.stats,(function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.Visible,expression:"Visible"}],key:s,staticClass:"stats_wrapper-stat",attrs:{"data-index":s}},[a("span",[a("span",{class:t.pokemon.stats[s].stat.name},[t._v(t._s(t.pokemon.stats[s].stat.name))]),a("span",[t._v(t._s(t.pokemon.stats[s].base_stat))])]),a("div",{staticClass:"stats_stat"},[a("div",{attrs:{id:"stat_value"}})])])})),0)],1)]),a("div",{staticClass:"Pokemon-Information"},[a("header",{staticClass:"cart"},[a("h1",{staticClass:"name"},[t._v(" "+t._s(t.pokemon.name)+" "),a("span",{staticClass:"id"},[t._v("#"+t._s(("00"+t.pokemon.id).slice(-3)))])])]),a("p",{staticClass:"flavor_text"},[t._v(t._s(t.pokemon.species.flavor_text_entries[t.pokemon.species.flavor_text_entries.length-1].flavor_text))]),a("h2",[t._v("Characteristics")]),a("div",{staticClass:"characteristics"},[a("div",[a("span",[t._v("Height")]),a("span",[t._v(t._s(t.pokemon.height))])]),a("div",[a("span",[t._v("weight")]),a("span",[t._v(t._s(t.pokemon.weight))])]),a("div",[a("span",[t._v("Category")]),a("span",[t._v(t._s(t.pokemon.species.genera[t.pokemon.species.genera.length-1].genus.slice(0,t.pokemon.species.genera[t.pokemon.species.genera.length-1].genus.indexOf("Pokémon"))))])]),a("div",{staticClass:"abilities"},[a("span",[t._v("Abilities")]),t._l(t.pokemon.abilities,(function(e,s){return a("span",{key:s},[t._v(t._s(e.ability.name))])}))],2),t._m(0)]),a("h2",[t._v("Type")]),a("div",{staticClass:"types"},t._l(t.pokemon.types,(function(e){return a("span",{key:e.id,class:e.type.name},[t._v(t._s(e.type.name))])})),0),a("h2",[t._v("Weaknesses")]),a("div",{staticClass:"types"},t._l(t.pokemon.damage_rel,(function(e,s){return a("span",{key:s,class:e.name},[t._v(" "+t._s(e.name)+" "),4==e.multiple?a("span",[t._v("x4")]):t._e()])})),0)]),a("div",{staticClass:"Pokemon-Evolution"},[a("h1",[t._v("Evolution stages")]),a("div",{staticClass:"Pokemon-Evolution_wrapper"},[t.pokemon.evo_chain.length>1?a("div",{staticClass:"evolution-chain-arrow",style:t.ArrowStyle1},t._l(t.ArrowAmount1,(function(t){return a("div",{key:t})})),0):t._e(),t.pokemon.evo_chain.length>2?a("div",{staticClass:"evolution-chain-arrow",style:t.ArrowStyle2},t._l(t.ArrowAmount2,(function(t){return a("div",{key:t})})),0):t._e(),t._l(t.pokemon.evo_chain,(function(e,s){return a("evolution-chain",{key:s,staticClass:"evolution-chain",style:{order:s},attrs:{evo_item:e,name:t.name,"data-set":s}})}))],2)])])],a("div",{staticClass:"preloader"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.IsLoaded,expression:"IsLoaded"}],attrs:{src:s("4045"),alt:"preloader",decoding:"sync"}})])],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gender"},[a("span",[t._v("Gender")]),a("span",[a("img",{attrs:{src:s("8c6b"),alt:"male"}}),a("img",{attrs:{src:s("83b0"),alt:"female"}})])])}],i=(s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",style:t.EEVEE},t._l(t.evo_item,(function(e,a){return s("router-link",{key:a,staticClass:"evo",attrs:{to:{name:"Pokemon",params:{name:e.name}},target:"_blank","data-set":a}},[s("img",{staticClass:"evo-img",class:t.imgStyle(e.name),attrs:{src:e.sprites.front_default}}),s("div",{staticClass:"cart"},[s("span",{staticClass:"name"},[t._v(" "+t._s(e.name)+" "),s("span",{staticClass:"id"},[t._v("#"+t._s(("00"+e.id).slice(-3)))])])]),s("div",{staticClass:"types"},t._l(e.types,(function(e){return s("span",{key:e.id,class:e.type.name},[t._v(t._s(e.type.name))])})),0)])})),1)}),o=[],r={name:"evolution-chain",props:{evo_item:Array,name:String},computed:{EEVEE:function(){return this.evo_item.length>=3?{height:"auto",width:"90%",flex:"3 0 75%","flex-flow":"row wrap"}:{}}},methods:{imgStyle:function(t){return t==this.name?"evo-circle":{}}}},l=r,c=(s("5a98"),s("2877")),p=Object(c["a"])(l,i,o,!1,null,"59b463ba",null),m=p.exports,v={name:"CartOfPokemon",components:{"evolution-chain":m},props:["name"],data:function(){return{PokeUrl:"https://pokeapi.co/api/v2/pokemon/"+this.name,Visible:!1}},computed:{pokemon:function(){return this.$store.getters.GET_UNO_POKEMON},IsLoaded:function(){return this.$store.getters.IsLoaded},ArrowAmount1:function(){return 2==this.pokemon.evo_chain[1].length?2:1},ArrowAmount2:function(){return 2==this.pokemon.evo_chain[2].length?2:1},ArrowStyle1:function(){return 2==this.pokemon.evo_chain[1].length?{padding:"15% 0"}:{"align-items":"center",padding:"20% 0"}},ArrowStyle2:function(){return 2==this.pokemon.evo_chain[2].length?{padding:"15% 0"}:{"align-items":"center",padding:"20% 0"}}},methods:{StatIsVisible:function(t){this.Visible=t},statAnimate:function(t){this.$velocity(t.lastChild.firstChild,{left:-(100-this.pokemon.stats[t.dataset.index].base_stat/2)+"%"},{duration:2e3})}},created:function(){this.$store.dispatch("get_uno_pokemon",this.PokeUrl)},beforeDestroy:function(){this.$store.commit("DESTROY_POKEMON")}},d=v,u=(s("18cd"),Object(c["a"])(d,a,n,!1,null,"4f28d706",null));e["default"]=u.exports},"5a98":function(t,e,s){"use strict";var a=s("f436"),n=s.n(a);n.a},"83b0":function(t,e,s){t.exports=s.p+"img/female.7bb233a0.svg"},"8c6b":function(t,e,s){t.exports=s.p+"img/male.006e9248.svg"},"9fe0":function(t,e,s){},f436:function(t,e,s){}}]);
//# sourceMappingURL=chunk-77305717.ae2ab1b1.js.map