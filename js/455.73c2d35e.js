"use strict";(self["webpackChunknotes"]=self["webpackChunknotes"]||[]).push([[455],{7072:function(t,e,r){r.d(e,{Z:function(){return u}});var s=r(9582),i=r(4886),a=function(){var t=this,e=t._self._c;return e(s.Z,{staticClass:"movie-card secondary"},[e("router-link",{attrs:{to:{name:"moviePage",params:{id:t.movie.imdbID}}}},["N/A"===t.movie.Poster?e("img",{staticClass:"movie-card__no-img",attrs:{src:r(5688),alt:""}}):e("img",{staticClass:"movie-card__img",attrs:{src:t.movie.Poster}})]),e(i.EB,[t._v(t._s(t.movie.Title))]),e(i.ZB,[t._v(" Год: "+t._s(t.movie.Year)+" ")]),e("div",{staticClass:"movie-card__type secondary"},[t._v(t._s(t.movie.Type))])],1)},n=[],o={name:"MovieCard",props:{movie:{type:Object,required:!0,default:{}}}},l=o,c=r(1001),d=(0,c.Z)(l,a,n,!1,null,null,null),u=d.exports},1455:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var s=r(2118),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"favourites-page"},[e(s.Z,[t.favourites?e("div",{staticClass:"favourites-page__items"},t._l(t.favourites,(function(t){return e("movie-card",{key:t.imdbID,attrs:{movie:t}})})),1):e("div",{staticClass:"favourites-page__empty"},[t._v(" Похоже, Вы еще не добавили фильмов ")])])],1)},a=[],n=r(629),o=r(7072),l={components:{MovieCard:o.Z},computed:{...(0,n.rn)({favourites:t=>t.favourites.favourites})}},c=l,d=r(1001),u=(0,d.Z)(c,i,a,!1,null,null,null),h=u.exports},1884:function(){},9027:function(){},9582:function(t,e,r){r.d(e,{Z:function(){return o}});var s=r(3434),i=r(401),a=r(8860),n=r(7678),o=(0,n.Z)(i.Z,a.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const t={...s.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},4886:function(t,e,r){r.d(e,{EB:function(){return l},ZB:function(){return o}});var s=r(9582),i=r(5352);const a=(0,i.Ji)("v-card__actions"),n=(0,i.Ji)("v-card__subtitle"),o=(0,i.Ji)("v-card__text"),l=(0,i.Ji)("v-card__title");s.Z},2118:function(t,e,r){r.d(e,{Z:function(){return n}});r(9027),r(1884);var s=r(144);function i(t){return s.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:r,data:s,children:i}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:a}=s;if(a){s.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),e(r.tag,s,i)}})}var a=r(1767),n=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:r,children:s}){let i;const{attrs:n}=r;return n&&(r.attrs={},i=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,(0,a.ZP)(r,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},401:function(t,e,r){r.d(e,{Z:function(){return A}});var s=r(144),i=r(7394),a=r(6750),n=r(6878),o=r(4263),l=r(3457),c=r(6669),d=r(5352),u=r(7678);const h=(0,u.Z)(n.Z,(0,o.d)(["absolute","fixed","top","bottom"]),l.Z,c.Z);var g=h.extend({name:"v-progress-linear",directives:{intersect:a.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,d.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,d.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,d.kb)(this.normalizedValue,"%"),width:(0,d.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i.Z5:i.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,d.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,d.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,r){this.isVisible=r},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,d.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=g,A=s.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},3457:function(t,e,r){var s=r(144);function i(t="value",e="change"){return s.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const a=i();e["Z"]=a},5688:function(t){t.exports="data:image/webp;base64,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"}}]);
//# sourceMappingURL=455.73c2d35e.js.map