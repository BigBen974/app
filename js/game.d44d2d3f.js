(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"1dde":function(t,e,s){var r=s("d039"),i=s("b622"),n=s("2d00"),a=i("species");t.exports=function(t){return n>=51||!r((function(){var e=[],s=e.constructor={};return s[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"568f":function(t,e,s){"use strict";s("c457")},"65f0":function(t,e,s){var r=s("861d"),i=s("e8b5"),n=s("b622"),a=n("species");t.exports=function(t,e){var s;return i(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?r(s)&&(s=s[a],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},"7d36":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game pa",attrs:{unselectable:"on",onselectstart:"return false;",onmousedown:"return false;"}},[s("div",{staticClass:"bars"},[s("div",{staticClass:"bar-vie-block"},[s("img",{staticClass:"coeur-vie",attrs:{src:"/img/heart"+t.vieInOff+".svg"}}),s("div",{class:"bar-vie"+t.vieInOff},[s("div",{style:{width:t.vie+"%"}})])]),s("div",{staticClass:"bar-time-block",staticStyle:{"margin-left":"5%"}},[s("img",{staticClass:"sablier-time",attrs:{src:"/img/hourglass"+t.timeInOff+".svg"}}),s("div",{class:"bar-time"+t.timeInOff},[s("div",{style:{width:t.temps+"%"}})])])]),t._l(t.carte,(function(e){return s("cartes",{key:e,attrs:{nom:e,size_carte:t.nbrCarte,carte:t.carteActive},on:{essai_carte:t.tryCarte}})}))],2)},i=[],n=(s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("img",{class:t.sizeCartes(t.size_carte),attrs:{src:t.imageUrl(null,t.carte),id:t.nom},on:{click:function(e){return t.tryCarte(t.nom,e)}}})}),a=[],o={name:"Cartes",props:["nom","size_carte","carte"],methods:{imageUrl:function(t,e){return t?"/img/fleches/"+t.substring(1,2)+".png":"/img/card-"+e+".png"},sizeCartes:function(t){return"size-carte-"+t},tryCarte:function(t,e){e&&(e.target.src=this.imageUrl(t,null),this.$emit("essai_carte",t))}}},c=o,u=(s("d647"),s("2877")),h=Object(u["a"])(c,n,a,!1,null,"4c97fd00",null),l=h.exports,m={name:"Game",components:{Cartes:l},computed:{niveau:function(){return this.$store.state.niveau},nbrCarte:function(){return this.$store.state.nbrCarte},carteActive:function(){return this.$store.state.carteActive},carte:function(){return this.$store.state.carte},vieInOff:function(){return this.$store.state.vieInOff},timeInOff:function(){return this.$store.state.timeInOff},essai1:function(){return this.$store.state.essai1},vie:function(){return this.$store.state.vie},temps:function(){return this.$store.state.temps},time:function(){return this.$store.state.time},stopTimer:function(){return this.$store.state.stopTimer},win:function(){return this.$store.state.win},bad:function(){return this.$store.state.bad},onGame:function(){return this.$store.state.onGame}},methods:{createCarte:function(t){this.$store.commit("addCartes",t),this.$store.commit("shuffleCartes",this.carte),this.$store.commit("setOnGame",!0);var e=this.niveau+"";switch(e=e.substring(e.length-1),e=parseInt(e,10),e){case 3:case 4:case 7:case 8:case 9:case 0:this.$store.commit("setVieInOff","");break;default:this.$store.commit("setVieInOff","-off")}switch(e){case 5:case 6:case 7:case 8:case 9:case 0:this.$store.commit("setTimeInOff","");var s=Date.now();s=Math.floor(s/1e3),this.$store.commit("setTime",s),this.minuteur();break;default:this.$store.commit("setTimeInOff","-off")}},tryCarte:function(t){var e=this.essai1;if(e)if(e.substring(1,2)!=t.substring(1,2))this.noneCarte(),setTimeout(function(){if(this.vieInOff)this.clearCarte(t),this.autoCarte();else{this.$store.commit("setBad",this.bad+1);var e=this.niveau+"";switch(e=e.substring(e.length-1),e=parseInt(e,10),e){case 0:case 9:this.$store.commit("setVie",this.vie-20);break;default:this.$store.commit("setVie",this.vie-10)}this.vie<=0?(this.clearAllInterval(),this.$store.commit("resetGame",!1),this.$router.push("/")):(this.clearCarte(t),this.autoCarte())}}.bind(this),400);else{this.noneCarte();var s=this.niveau+"";switch(s=s.substring(s.length-1),s=parseInt(s,10),s){case 1:case 3:case 5:case 7:setTimeout(function(){this.laisserCarte(t),this.autoCarte(),this.$store.commit("setWin",this.win+1),this.win==this.nbrCarte&&(this.$store.commit("resetGame",!0),this.clearAllInterval(),this.$router.push("/"))}.bind(this),400);break;default:setTimeout(function(){this.removeCarte(t),this.autoCarte(),this.$store.commit("setWin",this.win+1),this.carte.length<=0&&(this.clearAllInterval(),this.$store.commit("resetGame",!0),this.$router.push("/"))}.bind(this),400)}}else this.noneCarte(t),this.$store.commit("setEssai1",t)},autoCarte:function(t){if(t){var e=document.getElementById(t),s=e.src.substring(e.src.length-14);s=s.substring(8,0),"img/card"==s&&(e.style="pointer-events:auto")}else for(var r=0;r<this.carte.length;r++){var i=this.carte[r],n=document.getElementById(i),a=n.src.substring(n.src.length-14);a=a.substring(8,0),"img/card"==a&&(n.style="pointer-events:auto")}},laisserCarte:function(t){var e=document.getElementById(t),s=document.getElementById(this.essai1);e.style="pointer-events:none",s.style="pointer-events:none",this.$store.commit("setEssai1","")},removeCarte:function(t){var e=document.getElementById(t),s=document.getElementById(this.essai1);e.src="img/card-"+this.carteActive+".png",s.src="img/card-"+this.carteActive+".png";for(var r=0;r<this.carte.length;r++)this.carte[r]===t&&this.carte.splice(r,1);for(var i=0;i<this.carte.length;i++)this.carte[i]===this.essai1&&this.carte.splice(i,1);this.$store.commit("setEssai1","")},clearCarte:function(t){var e=document.getElementById(t),s=document.getElementById(this.essai1);e.src="img/card-"+this.carteActive+".png",s.src="img/card-"+this.carteActive+".png",this.$store.commit("setEssai1","")},clearAllInterval:function(){for(var t=window.setInterval("",9999),e=0;e<t;e++)clearInterval(e)},noneCarte:function(t){if(t){var e=document.getElementById(t);e.style="pointer-events:none"}else for(var s=0;s<this.carte.length;s++){var r=this.carte[s],i=document.getElementById(r);i.style="pointer-events:none"}},getTimer:function(){var t=null,e=30,s=this.niveau+"";switch(s=s.substring(s.length-1),s=parseInt(s,10),s){case 9:e=20;break;case 0:e=15;break;default:e=30}var r=Date.now();r=Math.floor(r/1e3);var i=this.time;if(0!=i){var n=r-i,a=e-n;t=a;var o=t/(e/100);this.$store.commit("setTemps",o),n>=e&&(this.$store.commit("setStopTimer",1),this.minuteur(!0),this.clearAllInterval(),this.$store.commit("resetGame",!1),this.$router.push("/"))}},minuteur:function(t){t||(this.t=setInterval(function(){this.getTimer()}.bind(this),1e3)),1==this.stopTimer&&(clearInterval(this.t),this.$store.commit("setStopTimer",0),this.clearAllInterval())}},beforeMount:function(){0==this.id?this.$router.push("/login"):(this.clearAllInterval(),this.$store.commit("resetGame",!1),this.createCarte(this.nbrCarte))}},f=m,v=(s("568f"),Object(u["a"])(f,r,i,!1,null,null,null));e["default"]=v.exports},8418:function(t,e,s){"use strict";var r=s("c04e"),i=s("9bf2"),n=s("5c6c");t.exports=function(t,e,s){var a=r(e);a in t?i.f(t,a,n(0,s)):t[a]=s}},a434:function(t,e,s){"use strict";var r=s("23e7"),i=s("23cb"),n=s("a691"),a=s("50c4"),o=s("7b0b"),c=s("65f0"),u=s("8418"),h=s("1dde"),l=s("ae40"),m=h("splice"),f=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,d=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var s,r,h,l,m,f,b=o(this),$=a(b.length),C=i(t,$),I=arguments.length;if(0===I?s=r=0:1===I?(s=0,r=$-C):(s=I-2,r=d(v(n(e),0),$-C)),$+s-r>g)throw TypeError(p);for(h=c(b,r),l=0;l<r;l++)m=C+l,m in b&&u(h,l,b[m]);if(h.length=r,s<r){for(l=C;l<$-r;l++)m=l+r,f=l+s,m in b?b[f]=b[m]:delete b[f];for(l=$;l>$-r+s;l--)delete b[l-1]}else if(s>r)for(l=$-r;l>C;l--)m=l+r-1,f=l+s-1,m in b?b[f]=b[m]:delete b[f];for(l=0;l<s;l++)b[l+C]=arguments[l+2];return b.length=$-r+s,h}})},ae40:function(t,e,s){var r=s("83ab"),i=s("d039"),n=s("5135"),a=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(n(o,t))return o[t];e||(e={});var s=[][t],u=!!n(e,"ACCESSORS")&&e.ACCESSORS,h=n(e,0)?e[0]:c,l=n(e,1)?e[1]:void 0;return o[t]=!!s&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,s.call(t,h,l)}))}},c457:function(t,e,s){},d647:function(t,e,s){"use strict";s("e0ad")},e0ad:function(t,e,s){},e8b5:function(t,e,s){var r=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=game.d44d2d3f.js.map