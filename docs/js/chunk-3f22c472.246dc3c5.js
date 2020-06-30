(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f22c472"],{"38b2":function(t,e,s){"use strict";var n=s("5fcf"),a=s.n(n);a.a},4045:function(t,e,s){t.exports=s.p+"img/loading.0fa0b936.svg"},5075:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Container"},[t.IsLoad?t._e():[n("div",{staticClass:"Pokemon"},[n("div",{directives:[{name:"observe",rawName:"v-observe",value:!!t.pokemon.id&&t.StatIsVisible,expression:"pokemon.id? StatIsVisible : false"}],staticClass:"aside_pokemon"},[n("img",{attrs:{src:t.pokemon.sprites.front_default}}),n("div",{staticClass:"stats_wrapper"},[n("transition-group",{attrs:{tag:"div",css:!1},on:{beforeEnter:t.beforeStatAnimate,enter:t.statAnimate}},t._l(t.pokemon.stats,(function(e,s){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.Visible,expression:"Visible"}],key:s,staticClass:"stats_wrapper-stat",attrs:{"data-index":s}},[n("span",[n("span",{class:t.pokemon.stats[s].stat.name},[t._v(t._s(t.pokemon.stats[s].stat.name))]),n("span",[t._v(t._s(t.pokemon.stats[s].base_stat))])]),n("div",{staticClass:"stats_stat"},[n("div",{attrs:{id:"stat_value"}})])])})),0)],1)]),n("div",{staticClass:"Pokemon-Information"},[n("header",{staticClass:"cart"},[n("h1",{staticClass:"name"},[t._v(" "+t._s(t.pokemon.name)+" "),n("span",{staticClass:"id"},[t._v("#"+t._s(("00"+t.pokemon.id).slice(-3)))])])]),n("p",{staticClass:"flavor_text"},[t._v(t._s(t.pokemon.species.flavor_text_entries[t.pokemon.species.flavor_text_entries.length-1].flavor_text))]),n("h2",[t._v("Characteristics")]),n("div",{staticClass:"characteristics"},[n("div",[n("span",[t._v("Height")]),n("span",[t._v(t._s(t.pokemon.height))])]),n("div",[n("span",[t._v("weight")]),n("span",[t._v(t._s(t.pokemon.weight))])]),n("div",[n("span",[t._v("Category")]),n("span",[t._v(t._s(t.pokemon.species.genera[t.pokemon.species.genera.length-1].genus.slice(0,t.pokemon.species.genera[t.pokemon.species.genera.length-1].genus.indexOf("Pokémon"))))])]),n("div",{staticClass:"abilities"},[n("span",[t._v("Abilities")]),t._l(t.pokemon.abilities,(function(e,s){return n("span",{key:s},[t._v(t._s(e.ability.name))])}))],2),t._m(0)]),n("h2",[t._v("Type")]),n("div",{staticClass:"types"},t._l(t.pokemon.types,(function(e){return n("span",{key:e.id,class:e.type.name},[t._v(t._s(e.type.name))])})),0),n("h2",[t._v("Weaknesses")]),n("div",{staticClass:"types"},t._l(t.pokemon.damage_rel,(function(e,s){return n("span",{key:s,class:e.name},[t._v(" "+t._s(e.name)+" "),4==e.multiple?n("span",[t._v("x4")]):t._e()])})),0)]),n("div",{staticClass:"Pokemon-Evolution"},[n("h1",[t._v("Evolution stages")]),0!=t.pokemon.evo_chain.length?n("div",{staticClass:"Pokemon-Evolution_wrapper"},[t.pokemon.evo_chain.length>1?n("div",{staticClass:"evolution-chain-arrow",style:t.ArrowStyle1},t._l(t.ArrowAmount1,(function(t){return n("div",{key:t})})),0):t._e(),t.pokemon.evo_chain.length>2?n("div",{staticClass:"evolution-chain-arrow",style:t.ArrowStyle2},t._l(t.ArrowAmount2,(function(t){return n("div",{key:t})})),0):t._e(),t._l(t.pokemon.evo_chain,(function(e,s){return n("evolution-chain",{key:s,staticClass:"evolution-chain",style:{order:s},attrs:{evo_item:e,name:t.name,"data-set":s}})}))],2):t._e()])])],n("div",{staticClass:"preloader"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.IsLoad,expression:"IsLoad"}],attrs:{src:s("4045"),alt:"preloader",decoding:"sync"}})])],2)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gender"},[n("span",[t._v("Gender")]),n("span",[n("img",{attrs:{src:s("8c6b"),alt:"male"}}),n("img",{attrs:{src:s("83b0"),alt:"female"}})])])}],i=(s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",style:t.EEVEE},t._l(t.evo_item,(function(e,n){return s("router-link",{key:n,staticClass:"evo",attrs:{to:{name:"Pokemon",params:{name:e.name}},target:"_blank","data-set":n}},[s("img",{staticClass:"evo-img",class:t.imgStyle(e.name),attrs:{src:e.sprites.front_default}}),s("div",{staticClass:"cart"},[s("span",{staticClass:"name"},[t._v(" "+t._s(e.name)+" "),s("span",{staticClass:"id"},[t._v("#"+t._s(("00"+e.id).slice(-3)))])])]),s("div",{staticClass:"types"},t._l(e.types,(function(e){return s("span",{key:e.id,class:e.type.name},[t._v(t._s(e.type.name))])})),0)])})),1)}),o=[],r={name:"evolution-chain",props:{evo_item:Array,name:String},computed:{EEVEE:function(){return this.evo_item.length>=3?{height:"auto",width:"90%",flex:"3 0 75%","flex-flow":"row wrap"}:{}}},methods:{imgStyle:function(t){return t==this.name?"evo-circle":{}}}},l=r,c=(s("5a98"),s("2877")),p=Object(c["a"])(l,i,o,!1,null,"59b463ba",null),m=p.exports,v={name:"CartOfPokemon",components:{"evolution-chain":m},props:["name"],data:function(){return{PokeUrl:"https://pokeapi.co/api/v2/pokemon/"+this.name,Visible:!1}},computed:{pokemon:function(){return this.$store.getters.GET_UNO_POKEMON},IsLoad:function(){return this.$store.getters.IsLoad},ArrowAmount1:function(){return 2==this.pokemon.evo_chain[1].length?2:1},ArrowAmount2:function(){return 2==this.pokemon.evo_chain[2].length?2:1},ArrowStyle1:function(){return 2==this.pokemon.evo_chain[1].length?{padding:"15% 0"}:{"align-items":"center",padding:"20% 0"}},ArrowStyle2:function(){return 2==this.pokemon.evo_chain[2].length?{padding:"15% 0"}:{"align-items":"center",padding:"20% 0"}}},methods:{StatIsVisible:function(t){this.Visible=t},beforeStatAnimate:function(t){t.style.left="-100%"},statAnimate:function(t){this.$velocity(t.lastChild.firstChild,{left:this.StatsOffset(this.pokemon.stats[t.dataset.index].base_stat)+"%"},{duration:2e3})},StatsOffset:function(t){return t<=200?-(100-t/2):0}},created:function(){this.$store.dispatch("get_uno_pokemon",this.PokeUrl)},beforeDestroy:function(){this.$store.commit("DESTROY_POKEMON")}},u=v,_=(s("38b2"),Object(c["a"])(u,n,a,!1,null,"34e4b8fb",null));e["default"]=_.exports},"5a98":function(t,e,s){"use strict";var n=s("f436"),a=s.n(n);a.a},"5fcf":function(t,e,s){},"83b0":function(t,e,s){t.exports=s.p+"img/female.7bb233a0.svg"},"8c6b":function(t,e,s){t.exports=s.p+"img/male.006e9248.svg"},f436:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3f22c472.246dc3c5.js.map