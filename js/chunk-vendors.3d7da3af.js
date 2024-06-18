(self["webpackChunknotes"]=self["webpackChunknotes"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return m},DV:function(){return M},GJ:function(){return A},L:function(){return l},LL:function(){return T},Pz:function(){return P},UI:function(){return $},US:function(){return c},Yr:function(){return w},ZR:function(){return I},b$:function(){return y},cI:function(){return x},dS:function(){return Y},eu:function(){return k},g5:function(){return o},gK:function(){return G},gQ:function(){return z},h$:function(){return u},hl:function(){return C},hu:function(){return i},m9:function(){return Z},ne:function(){return H},p$:function(){return d},pd:function(){return V},r3:function(){return L},ru:function(){return _},tV:function(){return h},uI:function(){return g},ug:function(){return J},vZ:function(){return j},w1:function(){return b},w9:function(){return N},xO:function(){return U},xb:function(){return D},z$:function(){return v},zd:function(){return q}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},l=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function _(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new I(r,s,n);return a}}function S(e,t){return e.replace(O,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=x(h(o[0])||""),n=x(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},N=function(e){const t=R(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(e){const t=R(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function j(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(F(n)&&F(o)){if(!j(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function V(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function H(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=W(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},J=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}},1001:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},9669:function(e,t,n){e.exports=n(1609)},5448:function(e,t,n){"use strict";var r=n(4867),i=n(6026),o=n(4372),s=n(5327),a=n(4097),c=n(4109),u=n(7985),l=n(7874),h=n(2648),d=n(644),f=n(205);e.exports=function(e){return new Promise((function(t,n){var p,m=e.data,v=e.headers,g=e.responseType;function _(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(m)&&r.isStandardBrowserEnv()&&delete v["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+w)}var C=a(e.baseURL,e.url);function k(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,o=g&&"text"!==g&&"json"!==g?y.response:y.responseText,s={data:o,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};i((function(e){t(e),_()}),(function(e){n(e),_()}),s),y=null}}if(y.open(e.method.toUpperCase(),s(C,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=k:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(k)},y.onabort=function(){y&&(n(new h("Request aborted",h.ECONNABORTED,e,y)),y=null)},y.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,y,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new h(t,r.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,y)),y=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||u(C))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;E&&(v[e.xsrfHeaderName]=E)}"setRequestHeader"in y&&r.forEach(v,(function(e,t){"undefined"===typeof m&&"content-type"===t.toLowerCase()?delete v[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),g&&"json"!==g&&(y.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){y&&(n(!e||e&&e.type?new d:e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null);var I=f(C);I&&-1===["http","https","file"].indexOf(I)?n(new h("Unsupported protocol "+I+":",h.ERR_BAD_REQUEST,e)):y.send(m)}))}},1609:function(e,t,n){"use strict";var r=n(4867),i=n(1849),o=n(321),s=n(7185),a=n(5546);function c(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n.create=function(t){return c(s(e,t))},n}var u=c(a);u.Axios=o,u.CanceledError=n(644),u.CancelToken=n(4972),u.isCancel=n(6502),u.VERSION=n(7288).version,u.toFormData=n(7675),u.AxiosError=n(2648),u.Cancel=u.CanceledError,u.all=function(e){return Promise.all(e)},u.spread=n(8713),u.isAxiosError=n(6268),e.exports=u,e.exports["default"]=u},4972:function(e,t,n){"use strict";var r=n(644);function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},644:function(e,t,n){"use strict";var r=n(2648),i=n(4867);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}i.inherits(o,r,{__CANCEL__:!0}),e.exports=o},6502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,n){"use strict";var r=n(4867),i=n(5327),o=n(782),s=n(3572),a=n(7185),c=n(4097),u=n(4875),l=u.validators;function h(e){this.defaults=e,this.interceptors={request:new o,response:new o}}h.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!i){var h=[s,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(c),o=Promise.resolve(t);while(h.length)o=o.then(h.shift(),h.shift());return o}var d=t;while(r.length){var f=r.shift(),p=r.shift();try{d=f(d)}catch(m){p(m);break}}try{o=s(d)}catch(m){return Promise.reject(m)}while(c.length)o=o.then(c.shift(),c.shift());return o},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=c(e.baseURL,e.url);return i(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h},2648:function(e,t,n){"use strict";var r=n(4867);function i(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(i,s),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=function(e,t,n,s,a,c){var u=Object.create(o);return r.toFlatObject(e,u,(function(e){return e!==Error.prototype})),i.call(u,e.message,t,n,s,a),u.name=e.name,c&&Object.assign(u,c),u},e.exports=i},782:function(e,t,n){"use strict";var r=n(4867);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},4097:function(e,t,n){"use strict";var r=n(1793),i=n(7303);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},3572:function(e,t,n){"use strict";var r=n(4867),i=n(8527),o=n(6502),s=n(5546),a=n(644);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7185:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},6026:function(e,t,n){"use strict";var r=n(2648);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},8527:function(e,t,n){"use strict";var r=n(4867),i=n(5546);e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},5546:function(e,t,n){"use strict";var r=n(4867),i=n(6016),o=n(2648),s=n(7874),a=n(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function l(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(5448)),e}function h(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var d={transitional:s,adapter:l(),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),s=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===s){var c=this.env&&this.env.FormData;return a(n?{"files[]":e}:e,c&&new c)}return o||"application/json"===s?(u(t,"application/json"),h(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw o.from(a,o.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){d.headers[e]=r.merge(c)})),e.exports=d},7874:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(e){e.exports={version:"0.27.2"}},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:function(e,t,n){"use strict";var r=n(4867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},7985:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},6016:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},1623:function(e){e.exports=null},4109:function(e,t,n){"use strict";var r=n(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},205:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:function(e,t,n){"use strict";var r=n(4867);function i(e,t){t=t||new FormData;var n=[];function i(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function o(e,s){if(r.isPlainObject(e)||r.isArray(e)){if(-1!==n.indexOf(e))throw Error("Circular reference detected in "+s);n.push(e),r.forEach(e,(function(e,n){if(!r.isUndefined(e)){var a,c=s?s+"."+n:n;if(e&&!s&&"object"===typeof e)if(r.endsWith(n,"{}"))e=JSON.stringify(e);else if(r.endsWith(n,"[]")&&(a=r.toArray(e)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(c,i(e))}));o(e,c)}})),n.pop()}else t.append(s,i(e))}return o(e),t}e.exports=i},4875:function(e,t,n){"use strict";var r=n(7288).version,i=n(2648),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};function a(e,t,n){if("object"!==typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);var r=Object.keys(e),o=r.length;while(o-- >0){var s=r[o],a=t[s];if(a){var c=e[s],u=void 0===c||a(c,s,e);if(!0!==u)throw new i("option "+s+" must be "+u,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+s,i.ERR_BAD_OPTION)}}o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new i(o(r," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:a,validators:o}},4867:function(e,t,n){"use strict";var r=n(1849),i=Object.prototype.toString,o=function(e){return function(t){var n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function s(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function a(e){return Array.isArray(e)}function c(e){return"undefined"===typeof e}function u(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var l=s("ArrayBuffer");function h(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer),t}function d(e){return"string"===typeof e}function f(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function m(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var v=s("Date"),g=s("File"),_=s("Blob"),y=s("FileList");function b(e){return"[object Function]"===i.call(e)}function w(e){return p(e)&&b(e.pipe)}function C(e){var t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||i.call(e)===t||b(e.toString)&&e.toString()===t)}var k=s("URLSearchParams");function E(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function I(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function T(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function S(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=S(e[n],t):m(t)?e[n]=S({},t):a(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)T(arguments[n],t);return e}function O(e,t,n){return T(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function x(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function P(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function R(e,t,n){var r,i,o,s={};t=t||{};do{r=Object.getOwnPropertyNames(e),i=r.length;while(i-- >0)o=r[i],s[o]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function N(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n}function A(e){if(!e)return null;var t=e.length;if(c(t))return null;var n=new Array(t);while(t-- >0)n[t]=e[t];return n}var L=function(e){return function(t){return e&&t instanceof e}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));e.exports={isArray:a,isArrayBuffer:l,isBuffer:u,isFormData:C,isArrayBufferView:h,isString:d,isNumber:f,isObject:p,isPlainObject:m,isUndefined:c,isDate:v,isFile:g,isBlob:_,isFunction:b,isStream:w,isURLSearchParams:k,isStandardBrowserEnv:I,forEach:T,merge:S,extend:O,trim:E,stripBOM:x,inherits:P,toFlatObject:R,kindOf:o,kindOfTest:s,endsWith:N,toArray:A,isTypedArray:L,isFileList:y}},9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,o,s=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",v=a.TypeError,g=a.WeakMap,_=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g),w=c(b.get),C=c(b.has),k=c(b.set);r=function(e,t){if(C(b,e))throw new v(m);return t.facade=e,k(b,e,t),t},i=function(e){return w(b,e)||{}},o=function(e){return C(b,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new v(m);return t.facade=e,l(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},o=function(e){return h(e,E)}}e.exports={set:r,get:i,has:o,enforce:_,getterFor:y}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&o(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),o=n(2788),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e){var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),s=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),v=n(1913);e.exports=function(e,t,n,g){var _="stackTraceLimit",y=g?2:1,b=e.split("."),w=b[b.length-1],C=r.apply(null,b);if(C){var k=C.prototype;if(!v&&i(k,"cause")&&delete k.cause,!n)return C;var E=r("Error"),I=t((function(e,t){var n=h(g?t:e,void 0),r=g?new C(e):new C;return void 0!==n&&o(r,"message",n),p&&o(r,"stack",f(r.stack,2)),this&&s(k,this)&&l(r,this,I),arguments.length>y&&d(r,arguments[y]),r}));if(I.prototype=k,"Error"!==w?a?a(I,E):c(I,E,{name:!0}):m&&_ in C&&(u(I,C,_),u(I,C,"prepareStackTrace")),c(I,C),!v)try{k.name!==w&&o(k,"name",w),k.constructor=I}catch(T){}return I}}},1703:function(e,t,n){var r=n(2109),i=n(7854),o=n(2104),s=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},5503:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(5816),i="firebase",o="9.9.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},65:function(e,t,n){"use strict";n.d(t,{Xb:function(){return ct},v0:function(){return lr},Aj:function(){return lt},e5:function(){return ut},w7:function(){return ht}});var r=n(4444),i=n(5816);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n(3333),a=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw v(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},A=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,i,o={}){return D(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw U(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r.ZR)throw o;f(e,"network-request-failed")}}async function $(e,t,n,r,i={}){const o=await M(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function j(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),A.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=W(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:z(B(o.auth_time)),issuedAtTime:z(B(o.iat)),expirationTime:z(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function W(e){var t;const[n,i,o]=e.split(".");if(void 0===n||void 0===i||void 0===o)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function K(e){const t=W(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,V(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Z(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function X(e){const t=(0,r.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await D(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=j(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return X(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:k}=t;g(y&&k,e,"internal-error");const E=re.fromJSON(this.name,k);g("string"===typeof y,e,"internal-error"),ie(l,e.name),ie(h,e.name),g("boolean"===typeof b,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(v,e.name),ie(_,e.name);const I=new oe({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:v,lastLoginAt:_});return C&&Array.isArray(C)&&(I.providerData=C.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ve(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function _e(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,r.z$)()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return _e(e)||me(e)||ge(e)||ve(e)||/windows phone/i.test(e)||pe(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Q(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Te(e){return(0,r.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return $(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ne(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Oe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ae(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return $(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="http://localhost";class De extends Oe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new De(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Me,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function je(e,t){return $(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Fe(e,t){const n=await $(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function qe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return $(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ue)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Oe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ve({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ve({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return je(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ve({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Be{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ze(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new Be(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Be.parseLink(t);return g(n,"argument-error"),Ae._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password",We.EMAIL_PASSWORD_SIGN_IN_METHOD="password",We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ye.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Ge{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch(t){return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com",Ze.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return $(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=tt(n),s=new et({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await G(e,rt(i,o,t,e),n);g(r.idToken,i,"internal-error");const s=W(r.idToken);g(s,i,"internal-error");const{sub:a}=s;return g(e.uid===a,i,"user-mismatch"),et._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const r="signIn",i=await rt(e,r,t),o=await et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function at(e,t){return st(Te(e),t)}async function ct(e,t,n){const r=Te(e),i=await Xe(r,{returnSecureToken:!0,email:t,password:n}),o=await et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ut(e,t,n){return at((0,r.m9)(e),We.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function ht(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function ft(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const pt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){const e=(0,r.z$)();return de(e)||_e(e)}const gt=1e3,_t=10;class yt extends mt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vt()&&Ce(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_t):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yt.type="LOCAL";const bt=yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends mt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wt.type="SESSION";const Ct=wt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await kt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=It("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function Ot(e){St().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return"undefined"!==typeof St()["WorkerGlobalScope"]&&"function"===typeof St()["importScripts"]}async function Pt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Rt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Nt(){return xt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebaseLocalStorageDb",Lt=1,Mt="firebaseLocalStorage",Dt="fbase_key";class $t{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function jt(e,t){return e.transaction([Mt],t?"readwrite":"readonly").objectStore(Mt)}function Ft(){const e=indexedDB.deleteDatabase(At);return new $t(e).toPromise()}function Ut(){const e=indexedDB.open(At,Lt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Mt,{keyPath:Dt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Mt)?t(n):(n.close(),await Ft(),t(await Ut()))}))}))}async function qt(e,t,n){const r=jt(e,!0).put({[Dt]:t,value:n});return new $t(r).toPromise()}async function Vt(e,t){const n=jt(e,!1).get(t),r=await new $t(n).toPromise();return void 0===r?null:r.value}function zt(e,t){const n=jt(e,!0).delete(t);return new $t(n).toPromise()}const Ht=800,Bt=3;class Wt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(Nt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Pt(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Rt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await qt(e,pt,"1"),await zt(e,pt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>qt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Vt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>zt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=jt(e,!1).getAll();return new $t(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wt.type="LOCAL";const Kt=Wt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Yt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Zt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Jt().appendChild(r)}))}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qt("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt="recaptcha";async function en(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===Xt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await dt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Gt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e){this.providerId=tn.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return en(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ve._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tn.credentialFromTaggedObject(t)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ve._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class rn extends Oe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return st(e.auth,new rn(e),e.bypassAuthState)}function sn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ot(n,new rn(e),e.bypassAuthState)}async function an(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new rn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new x(2e3,1e4);class ln extends cn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=It();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,un.get())};e()}}ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class fn extends cn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(e,t){const n=gn(t),r=vn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function mn(e,t){dn.set(e._key(),t)}function vn(e){return w(e._redirectPersistence)}function gn(e){return ce(hn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t,n=!1){const r=Te(e),i=nn(r,t),o=new fn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=6e5;class bn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!kn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Cn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(e))}saveEventToCache(e){this.cachedEventUids.add(wn(e)),this.lastProcessedEventTime=Date.now()}}function wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Cn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function kn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function Sn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await En(e);for(const r of t)try{if(On(r))return}catch(n){}f(e,"unauthorized-domain")}function On(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Tn.test(n))return!1;if(In.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new x(3e4,6e4);function Pn(){const e=St().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Rn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Pn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pn(),n(p(e,"network-request-failed"))},timeout:xn.get()})}if(null===(i=null===(r=St().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=St().gapi)||void 0===o?void 0:o.load)){const t=Qt("iframefcb");return St()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Zt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Nn=null,e}))}let Nn=null;function An(e){return Nn=Nn||Rn(e),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new x(5e3,15e3),Mn="__/auth/iframe",Dn="emulator/auth/iframe",$n={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,Dn):`https://${e.config.authDomain}/${Mn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=jn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Un(e){const t=await An(e),n=St().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Fn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$n,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=St().setTimeout((()=>{r(i)}),Ln.get());function s(){St().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,zn=600,Hn="_blank",Bn="http://localhost";class Wn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Kn(e,t,n,i=Vn,o=zn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},qn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=fe(l)?Hn:n),he(l)&&(t=t||Bn,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(l)&&"_self"!==c)return Gn(t||"",c),new Wn(null);const d=window.open(t||"",c,h);g(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Wn(d)}function Gn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="__/auth/handler",Jn="emulator/auth/handler";function Zn(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof Ke){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Qn(e)}?${(0,r.xO)(u).slice(1)}`}function Qn({config:e}){return e.emulator?P(e,Jn):`https://${e.authDomain}/${Yn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ct,this._completeRedirectFn=_n,this._overrideRedirectResult=mn}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zn(e,t,n,E(),r);return Kn(e,o,It())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ot(Zn(e,t,n,E(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Un(e),n=new bn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Xn,{type:Xn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Xn];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||_e()}}const tr=er;class nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rr(e)}_finalizeEnroll(e,t,n){return ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Yt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ir{constructor(){}static assertion(e){return rr._fromCredential(e)}}ir.FACTOR_ID="phone";var or="@firebase/auth",sr="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},a=new Ie(t,r,i);return k(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new ar(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(or,sr,cr(e)),(0,i.KN)(or,sr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():C(e,{popupRedirectResolver:tr,persistence:[Kt,bt,Ct]})}ur("Browser")},7663:function(e,t,n){"use strict";n.d(t,{N8:function(){return Xs},jM:function(){return Bs},VF:function(){return Us},iH:function(){return js},t8:function(){return qs}});var r=n(5816),i=n(8463),o=n(4444),s=n(3333);const a="@firebase/database",c="0.13.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(e){u=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),v=new s.Yd("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),_=function(e){const t=(0,o.dS)(e),n=new o.gQ;n.update(t);const r=n.digest();return o.US.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,o.Pz)(r):r,t+=" "}return t};let b=null,w=!0;const C=function(e,t){(0,o.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=s["in"].VERBOSE,b=v.log.bind(v),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},k=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const t=y.apply(null,e);b(t)}},E=function(e){return function(...t){k(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);v.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw v.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);v.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if((0,o.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",N="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===R||t===N)return-1;if(t===R||e===N)return 1;{const n=W(e),r=W(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.Pz)(t))},D=function(e){if("object"!==typeof e||null===e)return(0,o.Pz)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.Pz)(t[r]),n+=":",n+=D(e[t[r]]);return n+="}",n},$=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function j(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const F=function(e){(0,o.hu)(!x(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,u;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const z=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,B=2147483647,W=function(e){if(z.test(e)){const t=Number(e);if(t>=H&&t<=B)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",ue="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,o.hu)("string"===typeof t,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return j(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function ve(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",be="close",we="pLPCommand",Ce="pRTLPCB",ke="id",Ee="pw",Ie="ser",Te="cb",Se="seg",Oe="ts",xe="d",Pe="dframe",Re=1870,Ne=30,Ae=Re-Ne,Le=25e3,Me=3e4;class De{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=ve(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),P((()=>{if(this.isClosed_)return;this.scriptTagHolder=new $e(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=X,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!De.forceAllow_||!De.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.h$)(t),r=$(n,Ae);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[ke]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $e{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=$e.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){k("frame writing exception"),i.stack&&k(i.stack),k(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||k("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ke]=this.myID,e[Ee]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ne+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+r+"="+e.seg+"&"+Oe+r+"="+e.ts+"&"+xe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=16384,Fe=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class qe{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=ve(t),this.connURL=qe.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[ee]=X,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[ne]=re),t&&(s[te]=t),n&&(s[oe]=n),r&&(s[ae]=r),i&&(s[se]=i),de(e,ce,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${X}/${u}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Ue(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!qe.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=$(t,je);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Fe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=6e4,He=5e3,Be=10240,We=102400,Ke="t",Ge="d",Ye="s",Je="r",Ze="e",Qe="o",Xe="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>We?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Be?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Xe?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Ze?I("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,o.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function vt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);Tt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.ug)(t),Tt(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=(0,o.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ot}getInitialEvent(e){return(0,o.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1e3,Pt=3e5,Rt=3e4,Nt=1.3,At=3e4,Lt="server_kill",Mt=3;class Dt extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dt.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xt,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ot.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.Pz)(i)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];Dt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.r3)(e,"w")){const n=(0,o.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,o.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Dt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(e){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)}),i))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&S(I),c())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>D(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.uI)()?e["framework.cordova"]=1:(0,o.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0,Dt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $t(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new $t(R,e),r=new $t(R,t);return 0!==this.compare(n,r)}minPost(){return $t.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;class Ut extends jt{static get __EMPTY_NODE(){return Ft}static set __EMPTY_NODE(e){Ft=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $t.MIN}maxPost(){return new $t(N,Ft)}makePost(e,t){return(0,o.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new $t(e,Ft)}toString(){return".key"}}const qt=new Ut;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:zt.RED,this.left=null!=r?r:Bt.EMPTY_NODE,this.right=null!=i?i:Bt.EMPTY_NODE}copy(e,t,n,r,i){return new zt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Bt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0,zt.BLACK=!1;class Ht{copy(e,t,n,r,i){return this}insert(e,t,n){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,t=Bt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e,t){return A(e.name,t.name)}function Kt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Yt(e){Gt=e}Bt.EMPTY_NODE=new Ht;const Jt=function(e){return"number"===typeof e?"number:"+F(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.r3)(t,".sv"),"Priority must be a string or number.")}else(0,o.hu)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,o.hu)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qt,Xt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){Qt=e}static get __childrenNodeConstructor(){return Qt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?F(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:((0,o.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=tn.VALUE_TYPE_ORDER.indexOf(t),i=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(r>=0,"Unknown leaf type: "+t),(0,o.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Xt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends jt{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $t.MIN}maxPost(){return new $t(N,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Xt(e);return new $t(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const sn=new on,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new zt(a,s.node,zt.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new zt(a,s.node,zt.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new zt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,zt.BLACK):(a(r,zt.BLACK),a(r,zt.RED))}return o},s=new cn(e.length),a=o(s);return new Bt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.hu)(hn&&sn,"ChildrenNode.ts has not been loaded"),ln=ln||new dn({".priority":hn},{".priority":sn}),ln}get(e){const t=(0,o.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bt?t:null}hasIndex(e){return(0,o.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.hu)(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator($t.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?un(n,e.getCompare()):hn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=s,new dn(l,u)}addToIndexes(e,t){const n=(0,o.UI)(this.indexes_,((n,r)=>{const i=(0,o.DV)(this.indexSet_,r);if((0,o.hu)(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator($t.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),un(n,i.getCompare())}return hn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new $t(e.name,r))),i.insert(e,e.node)}}));return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.UI)(this.indexes_,(n=>{if(n===hn)return n;{const r=t.get(e.name);return r?n.remove(new $t(e.name,r)):n}}));return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new Bt(Kt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new $t(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?fn:this.priorityNode_;return new pn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,o.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(sn,((o,s)=>{t[o]=s.val(e),n++,i&&pn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(sn,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new $t(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $t(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $t(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,$t.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,$t.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(sn),n=t.getIterator(sn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends pn{constructor(){super(new Bt(Kt),pn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const vn=new mn;Object.defineProperties($t,{MIN:{value:new $t(R,pn.EMPTY_NODE)},MAX:{value:new $t(N,vn)}}),Ut.__EMPTY_NODE=pn.EMPTY_NODE,tn.__childrenNodeConstructor=pn,Yt(vn),rn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function _n(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,_n(t))}if(e instanceof Array||!gn){let n=pn.EMPTY_NODE;return j(e,((t,r)=>{if((0,o.r3)(e,t)&&"."!==t.substring(0,1)){const e=_n(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(_n(t))}{const n=[];let r=!1;const i=e;if(j(i,((e,t)=>{if("."!==e.substring(0,1)){const i=_n(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new $t(e,i)))}})),0===n.length)return pn.EMPTY_NODE;const o=un(n,Wt,(e=>e.name),Kt);if(r){const e=un(n,sn.getCompare());return new pn(o,_n(t),new dn({".priority":e},{".priority":sn}))}return new pn(o,_n(t),dn.Default)}}nn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends jt{constructor(e){super(),this.indexPath_=e,(0,o.hu)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}makePost(e,t){const n=_n(e),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new $t(t,r)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new $t(N,e)}toString(){return vt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends jt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $t.MIN}maxPost(){return $t.MAX}makePost(e,t){const n=_n(e);return new $t(t,n)}toString(){return".value"}}const wn=new bn,Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Cn.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Cn.charAt(t[i]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e){return{type:"value",snapshotNode:e}}function In(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function On(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Tn(t,a)):(0,o.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(In(t,n)):s.trackChildChange(Sn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(sn,((e,r)=>{t.hasChild(e)||n.trackChildChange(Tn(e,r))})),t.isLeafNode()||t.forEachChild(sn,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Sn(t,r,i))}else n.trackChildChange(In(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pn.getStartPost_(e),this.endPost_=Pn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new $t(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return t.forEachChild(sn,((e,t)=>{i.matches(new $t(e,t))||(r=r.updateImmediateChild(e,pn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.rangedFilter_=new Pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new $t(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.hu)(a.numChildren()===this.limit_,"");const c=new $t(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Sn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Tn(t,e));const n=a.updateImmediateChild(t,pn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(In(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(Tn(u.name,u.node)),i.trackChildChange(In(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,pn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const e=new Nn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new Rn(e):new Pn(e)}function Ln(e){const t={};if(e.isDefault())return t;let n;return e.index_===sn?n="$priority":e.index_===wn?n="$value":e.index_===qt?n="$key":((0,o.hu)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.Pz)(n),e.startSet_&&(t["startAt"]=(0,o.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,o.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,o.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,o.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Mn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==sn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Dn.getListenId_(e,n),a={};this.listens_[s]=a;const c=Ln(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.DV)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Dn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ln(e._queryParams),n=e._path.toString(),r=new o.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.xO)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.cI)(a.responseText)}catch(e){S("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return{value:null,children:new Map}}function Fn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,jn());const i=e.children.get(r);t=ft(t),Fn(i,t,n)}}function Un(e,t,n){null!==e.value?n(t,e.value):qn(e,((e,r)=>{const i=new ut(t.toString()+"/"+e);Un(r,i,n)}))}function qn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&j(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e4,Hn=3e4,Bn=3e5;class Wn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vn(e);const n=zn+(Hn-zn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;j(e,((e,r)=>{r>0&&(0,o.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn;function Gn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Kn||(Kn={}));class Zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Kn.ACK_USER_WRITE,this.source=Gn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new Zn(lt(),t,this.revert)}}return(0,o.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Zn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=Kn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Qn(this.source,lt()):new Qn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Kn.OVERWRITE}operationForChild(e){return yt(this.path)?new Xn(this.source,lt(),this.snap.getImmediateChild(e)):new Xn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Kn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new Xn(this.source,lt(),t.value):new er(this.source,lt(),t)}return(0,o.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new er(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rr(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(On(t.childName,t.snapshotNode))})),ir(e,i,"child_removed",t,r,n),ir(e,i,"child_added",t,r,n),ir(e,i,"child_moved",o,r,n),ir(e,i,"child_changed",t,r,n),ir(e,i,"value",t,r,n),i}function ir(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>sr(e,t,n))),s.forEach((n=>{const r=or(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function or(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function sr(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const r=new $t(t.childName,t.snapshotNode),i=new $t(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){return{eventCache:e,serverCache:t}}function cr(e,t,n,r){return ar(new tr(t,n,r),e.serverCache)}function ur(e,t,n,r){return ar(e.eventCache,new tr(t,n,r))}function lr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const fr=()=>(dr||(dr=new Bt(L)),dr);class pr{constructor(e,t=fr()){this.value=e,this.children=t}static fromObject(e){let t=new pr(null);return j(e,((e,n)=>{t=t.set(new ut(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=_t(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new pr(null)}}set(e,t){if(yt(e))return new pr(t,this.children);{const n=ht(e),r=this.children.get(n)||new pr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new pr(this.value,o)}}remove(e){if(yt(e))return this.children.isEmpty()?new pr(null):new pr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new pr(null):new pr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new pr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new pr(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(_t(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),_t(t,r),n):new pr(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(_t(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.writeTree_=e}static empty(){return new mr(new pr(null))}}function vr(e,t,n){if(yt(t))return new mr(new pr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=bt(i,t);return o=o.updateChild(s,n),new mr(e.writeTree_.set(i,o))}{const r=new pr(n),i=e.writeTree_.setTree(t,r);return new mr(i)}}}function gr(e,t,n){let r=e;return j(n,((e,n)=>{r=vr(r,_t(t,e),n)})),r}function _r(e,t){if(yt(t))return mr.empty();{const n=e.writeTree_.setTree(t,new pr(null));return new mr(n)}}function yr(e,t){return null!=br(e,t)}function br(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function wr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sn,((e,n)=>{t.push(new $t(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new $t(e,n.value))})),t}function Cr(e,t){if(yt(t))return e;{const n=br(e,t);return new mr(null!=n?new pr(n):e.writeTree_.subtree(t))}}function kr(e){return e.writeTree_.isEmpty()}function Er(e,t){return Ir(lt(),e.writeTree_,t)}function Ir(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ir(_t(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t){return Gr(t,e)}function Sr(e,t,n,r,i){(0,o.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=vr(e.visibleWrites,t,n)),e.lastWriteId=r}function Or(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function xr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Pr(t,r.path)?i=!1:Ct(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Rr(e),!0;if(r.snap)e.visibleWrites=_r(e.visibleWrites,r.path);else{const t=r.children;j(t,(t=>{e.visibleWrites=_r(e.visibleWrites,_t(r.path,t))}))}return!0}return!1}function Pr(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(_t(e.path,n),t))return!0;return!1}function Rr(e){e.visibleWrites=Ar(e.allWrites,Nr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Nr(e){return e.visible}function Ar(e,t,n){let r=mr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=bt(n,e),r=vr(r,t,s.snap)):Ct(e,n)&&(t=bt(e,n),r=vr(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(Ct(n,e))t=bt(n,e),r=gr(r,t,s.children);else if(Ct(e,n))if(t=bt(e,n),yt(t))r=gr(r,lt(),s.children);else{const e=(0,o.DV)(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=vr(r,lt(),n)}}}}}return r}function Lr(e,t,n,r,i){if(r||i){const o=Cr(e.visibleWrites,t);if(!i&&kr(o))return n;if(i||null!=n||yr(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},s=Ar(e.allWrites,o,t),a=n||pn.EMPTY_NODE;return Er(s,a)}return null}{const r=br(e.visibleWrites,t);if(null!=r)return r;{const r=Cr(e.visibleWrites,t);if(kr(r))return n;if(null!=n||yr(r,lt())){const e=n||pn.EMPTY_NODE;return Er(r,e)}return null}}}function Mr(e,t,n){let r=pn.EMPTY_NODE;const i=br(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(sn,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Cr(e.visibleWrites,t);return n.forEachChild(sn,((e,t)=>{const n=Er(Cr(i,new ut(e)),t);r=r.updateImmediateChild(e,n)})),wr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=Cr(e.visibleWrites,t);return wr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Dr(e,t,n,r,i){(0,o.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(yr(e.visibleWrites,s))return null;{const t=Cr(e.visibleWrites,s);return kr(t)?i.getChild(n):Er(t,i.getChild(n))}}function $r(e,t,n,r){const i=_t(t,n),o=br(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Cr(e.visibleWrites,i);return Er(t,r.getNode().getImmediateChild(n))}return null}function jr(e,t){return br(e.visibleWrites,t)}function Fr(e,t,n,r,i,o,s){let a;const c=Cr(e.visibleWrites,t),u=br(c,lt());if(null!=u)a=u;else{if(null==n)return[];a=Er(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Ur(){return{visibleWrites:mr.empty(),allWrites:[],lastWriteId:-1}}function qr(e,t,n,r){return Lr(e.writeTree,e.treePath,t,n,r)}function Vr(e,t){return Mr(e.writeTree,e.treePath,t)}function zr(e,t,n,r){return Dr(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return jr(e.writeTree,_t(e.treePath,t))}function Br(e,t,n,r,i,o){return Fr(e.writeTree,e.treePath,t,n,r,i,o)}function Wr(e,t,n){return $r(e.writeTree,e.treePath,t,n)}function Kr(e,t){return Gr(_t(e.treePath,t),e.writeTree)}function Gr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Sn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Tn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,In(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Sn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Zr=new Jr;class Qr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hr(this.viewCache_),i=Br(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){return{filter:e}}function ei(e,t){(0,o.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ti(e,t,n,r,i){const s=new Yr;let a,c;if(n.type===Kn.OVERWRITE){const u=n;u.source.fromUser?a=oi(e,t,u.path,u.snap,r,i,s):((0,o.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!yt(u.path),a=ii(e,t,u.path,u.snap,r,i,c,s))}else if(n.type===Kn.MERGE){const u=n;u.source.fromUser?a=ai(e,t,u.path,u.children,r,i,s):((0,o.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=ui(e,t,u.path,u.children,r,i,c,s))}else if(n.type===Kn.ACK_USER_WRITE){const o=n;a=o.revert?di(e,t,o.path,r,i,s):li(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Kn.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=hi(e,t,n.path,r,s)}const u=s.getChanges();return ni(t,a,u),{viewCache:a,changes:u}}function ni(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=lr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(En(lr(t)))}}function ri(e,t,n,r,i,s){const a=t.eventCache;if(null!=Hr(r,n))return t;{let c,u;if(yt(n))if((0,o.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=hr(t),i=n instanceof pn?n:pn.EMPTY_NODE,o=Vr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=qr(r,hr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ht(n);if(".priority"===l){(0,o.hu)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const s=zr(r,n,i,u);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=zr(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else h=Wr(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return cr(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ii(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(yt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,Zr,null)}const h=ur(t,u,c.isFullyInitialized()||yt(n),l.filtersNodes()),d=new Qr(i,h,o);return ri(e,h,n,i,d,a)}function oi(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new Qr(i,t,o);if(yt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=cr(t,u,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=cr(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(yt(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,r):pn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=cr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function si(e,t){return e.eventCache.isCompleteForChild(t)}function ai(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const u=_t(n,r);si(t,ht(u))&&(a=oi(e,a,u,c,i,o,s))})),r.foreach(((r,c)=>{const u=_t(n,r);si(t,ht(u))||(a=oi(e,a,u,c,i,o,s))})),a}function ci(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ui(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=yt(n)?r:new pr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=ci(e,c,r);u=ii(e,u,new ut(n),l,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=ci(e,c,r);u=ii(e,u,new ut(n),l,i,o,s,a)}})),u}function li(e,t,n,r,i,o,s){if(null!=Hr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ii(e,t,n,c.getNode().getChild(n),i,o,a,s);if(yt(n)){let r=new pr(null);return c.getNode().forEachChild(qt,((e,t)=>{r=r.set(new ut(e),t)})),ui(e,t,n,r,i,o,a,s)}return t}{let u=new pr(null);return r.foreach(((e,t)=>{const r=_t(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))})),ui(e,t,n,u,i,o,a,s)}}function hi(e,t,n,r,i){const o=t.serverCache,s=ur(t,o.getNode(),o.isFullyInitialized()||yt(n),o.isFiltered());return ri(e,s,n,r,Zr,i)}function di(e,t,n,r,i,s){let a;if(null!=Hr(r,n))return t;{const c=new Qr(r,t,i),u=t.eventCache.getNode();let l;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=qr(r,hr(t));else{const e=t.serverCache.getNode();(0,o.hu)(e instanceof pn,"serverChildren would be complete if leaf node"),n=Vr(r,e)}l=e.filter.updateFullNode(u,n,s)}else{const i=ht(n);let o=Wr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?e.filter.updateChild(u,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,pn.EMPTY_NODE,ft(n),c,s):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=qr(r,hr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Hr(r,lt()),cr(t,l,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new xn(n.getIndex()),i=An(n);this.processor_=Xr(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),u=new tr(a,o.isFullyInitialized(),r.filtersNodes()),l=new tr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ar(l,u),this.eventGenerator_=new nr(this.query_)}get query(){return this.query_}}function pi(e){return e.viewCache_.serverCache.getNode()}function mi(e,t){const n=hr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function vi(e){return 0===e.eventRegistrations_.length}function gi(e,t){e.eventRegistrations_.push(t)}function _i(e,t,n){const r=[];if(n){(0,o.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function yi(e,t,n,r){t.type===Kn.MERGE&&null!==t.source.queryId&&((0,o.hu)(hr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(lr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ti(e.processor_,i,t,n,r);return ei(e.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,wi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function bi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(sn,((e,t)=>{r.push(In(e,t))}))}return n.isFullyInitialized()&&r.push(En(n.getNode())),wi(e,r,n.getNode(),t)}function wi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return rr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci,ki;class Ei{constructor(){this.views=new Map}}function Ii(e){(0,o.hu)(!Ci,"__referenceConstructor has already been defined"),Ci=e}function Ti(){return(0,o.hu)(Ci,"Reference.ts has not been loaded"),Ci}function Si(e){return 0===e.views.size}function Oi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),yi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(yi(o,t,n,r));return i}}function xi(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=qr(n,i?r:null),o=!1;e?o=!0:r instanceof pn?(e=Vr(n,r),o=!1):(e=pn.EMPTY_NODE,o=!1);const s=ar(new tr(e,o,!1),new tr(r,i,!1));return new fi(t,s)}return s}function Pi(e,t,n,r,i,o){const s=xi(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),gi(s,n),bi(s,n)}function Ri(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Di(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(_i(u,n,r)),vi(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(_i(t,n,r)),vi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Di(e)&&o.push(new(Ti())(t._repo,t._path)),{removed:o,events:s}}function Ni(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ai(e,t){let n=null;for(const r of e.views.values())n=n||mi(r,t);return n}function Li(e,t){const n=t._queryParams;if(n.loadsAllData())return $i(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Mi(e,t){return null!=Li(e,t)}function Di(e){return null!=$i(e)}function $i(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e){(0,o.hu)(!ki,"__referenceConstructor has already been defined"),ki=e}function Fi(){return(0,o.hu)(ki,"Reference.ts has not been loaded"),ki}let Ui=1;class qi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pr(null),this.pendingWriteTree_=Ur(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vi(e,t,n,r,i){return Sr(e.pendingWriteTree_,t,n,r,i),i?Xi(e,new Xn(Gn(),t,n)):[]}function zi(e,t,n=!1){const r=Or(e.pendingWriteTree_,t),i=xr(e.pendingWriteTree_,t);if(i){let t=new pr(null);return null!=r.snap?t=t.set(lt(),!0):j(r.children,(e=>{t=t.set(new ut(e),!0)})),Xi(e,new Zn(r.path,t,n))}return[]}function Hi(e,t,n){return Xi(e,new Xn(Yn(),t,n))}function Bi(e,t,n){const r=pr.fromObject(n);return Xi(e,new er(Yn(),t,r))}function Wi(e,t){return Xi(e,new Qn(Yn(),t))}function Ki(e,t,n){const r=oo(e,n);if(r){const n=so(r),i=n.path,o=n.queryId,s=bt(i,t),a=new Qn(Jn(o),s);return ao(e,i,a)}return[]}function Gi(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Mi(s,t))){const c=Ri(s,t,n,r);Si(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const u=c.removed;if(a=c.events,!i){const n=-1!==u.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Di(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=co(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=no(e,r);e.listenProvider_.startListening(uo(i),ro(e,i),o.hashFn,o.onComplete)}}}if(!i&&u.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(uo(t),n)}else u.forEach((t=>{const n=e.queryToTagMap.get(io(t));e.listenProvider_.stopListening(uo(t),n)}))}lo(e,u)}return a}function Yi(e,t,n,r){const i=oo(e,r);if(null!=i){const r=so(i),o=r.path,s=r.queryId,a=bt(o,t),c=new Xn(Jn(s),a,n);return ao(e,o,c)}return[]}function Ji(e,t,n,r){const i=oo(e,r);if(i){const r=so(i),o=r.path,s=r.queryId,a=bt(o,t),c=pr.fromObject(n),u=new er(Jn(s),a,c);return ao(e,o,u)}return[]}function Zi(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=bt(e,i);s=s||Ai(t,n),a=a||Di(t)}));let c,u=e.syncPointTree_.get(i);if(u?(a=a||Di(u),s=s||Ai(u,lt())):(u=new Ei,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=s)c=!0;else{c=!1,s=pn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Ai(t,lt());n&&(s=s.updateImmediateChild(e,n))}))}const l=Mi(u,t);if(!l&&!t._queryParams.loadsAllData()){const n=io(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ho();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Tr(e.pendingWriteTree_,i);let d=Pi(u,t,n,h,s,c);if(!l&&!a&&!r){const n=Li(u,t);d=d.concat(fo(e,t,n))}return d}function Qi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=bt(e,t),i=Ai(n,r);if(i)return i}));return Lr(i,t,o,n,r)}function Xi(e,t){return eo(t,e.syncPointTree_,null,Tr(e.pendingWriteTree_,lt()))}function eo(e,t,n,r){if(yt(e.path))return to(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=Ai(i,lt()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Kr(r,s);o=o.concat(eo(a,c,e,t))}return i&&(o=o.concat(Oi(i,e,r,n))),o}}function to(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=Ai(i,lt()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Kr(r,t),c=e.operationForChild(t);c&&(o=o.concat(to(c,i,s,a)))})),i&&(o=o.concat(Oi(i,e,r,n))),o}function no(e,t){const n=t.query,r=ro(e,n);return{hashFn:()=>{const e=pi(t)||pn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Ki(e,n._path,r):Wi(e,n._path);{const r=V(t,n);return Gi(e,n,null,r)}}}}function ro(e,t){const n=io(t);return e.queryToTagMap.get(n)}function io(e){return e._path.toString()+"$"+e._queryIdentifier}function oo(e,t){return e.tagToQueryMap.get(t)}function so(e){const t=e.indexOf("$");return(0,o.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function ao(e,t,n){const r=e.syncPointTree_.get(t);(0,o.hu)(r,"Missing sync point for query tag that we're tracking");const i=Tr(e.pendingWriteTree_,t);return Oi(r,n,i,null)}function co(e){return e.fold(((e,t,n)=>{if(t&&Di(t)){const e=$i(t);return[e]}{let e=[];return t&&(e=Ni(t)),j(n,((t,n)=>{e=e.concat(n)})),e}}))}function uo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Fi())(e._repo,e._path):e}function lo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=io(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ho(){return Ui++}function fo(e,t,n){const r=t._path,i=ro(e,t),s=no(e,n),a=e.listenProvider_.startListening(uo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,o.hu)(!Di(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&Di(t))return[$i(t).query];{let e=[];return t&&(e=e.concat(Ni(t).map((e=>e.query)))),j(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(uo(r),ro(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new po(t)}node(){return this.node_}}class mo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new mo(this.syncTree_,t)}node(){return Qi(this.syncTree_,this.path_)}}const vo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},go=function(e,t,n){return e&&"object"===typeof e?((0,o.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?_o(e[".sv"],t,n):"object"===typeof e[".sv"]?yo(e[".sv"],t):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_o=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+e)}},yo=function(e,t,n){e.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},bo=function(e,t,n,r){return Co(t,new mo(n,e),r)},wo=function(e,t,n){return Co(e,new po(t),n)};function Co(e,t,n){const r=e.getPriority().val(),i=go(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=go(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new tn(o,_n(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new tn(i))),r.forEachChild(sn,((e,r)=>{const i=Co(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Eo(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=ht(n);while(null!==i){const e=(0,o.DV)(r.node.children,i)||{children:{},childCount:0};r=new ko(i,r,e),n=ft(n),i=ht(n)}return r}function Io(e){return e.node.value}function To(e,t){e.node.value=t,Ao(e)}function So(e){return e.node.childCount>0}function Oo(e){return void 0===Io(e)&&!So(e)}function xo(e,t){j(e.node.children,((n,r)=>{t(new ko(n,e,r))}))}function Po(e,t,n,r){n&&!r&&t(e),xo(e,(e=>{Po(e,t,!0,r)})),n&&r&&t(e)}function Ro(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function No(e){return new ut(null===e.parent?e.name:No(e.parent)+"/"+e.name)}function Ao(e){null!==e.parent&&Lo(e.parent,e.name,e)}function Lo(e,t,n){const r=Oo(n),i=(0,o.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ao(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ao(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=/[\[\].#$\/\u0000-\u001F\u007F]/,Do=/[\[\].#$\u0000-\u001F\u007F]/,$o=10485760,jo=function(e){return"string"===typeof e&&0!==e.length&&!Mo.test(e)},Fo=function(e){return"string"===typeof e&&0!==e.length&&!Do.test(e)},Uo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Fo(e)},qo=function(e,t,n,r){r&&void 0===t||Vo((0,o.gK)(e,"value"),t,n)},Vo=function(e,t,n){const r=n instanceof ut?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(r));if("function"===typeof t)throw new Error(e+"contains a function "+St(r)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+St(r));if("string"===typeof t&&t.length>$o/3&&(0,o.ug)(t)>$o)throw new Error(e+"contains a string greater than "+$o+" utf8 bytes "+St(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(j(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!jo(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(r,t),Vo(e,o,r),It(r)})),n&&i)throw new Error(e+' contains ".value" child '+St(r)+" in addition to actual children.")}},zo=function(e,t,n,r){if((!r||void 0!==n)&&!Fo(n))throw new Error((0,o.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ho=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zo(e,t,n,r)},Bo=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Wo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!jo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Uo(n))throw new Error((0,o.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Go(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Yo(e,t,n){Go(e,n),Zo(e,(e=>wt(e,t)))}function Jo(e,t,n){Go(e,n),Zo(e,(e=>Ct(e,t)||Ct(t,e)))}function Zo(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(Qo(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Qo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&k("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="repo_interrupt",es=25;class ts{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ko,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jn(),this.transactionQueueTree_=new ko,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ns(e,t,n){if(e.stats_=ve(e.repoInfo_),e.forceRestClient_||G())e.server_=new Dn(e.repoInfo_,((t,n,r,i)=>{os(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ss(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Pz)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Dt(e.repoInfo_,t,((t,n,r,i)=>{os(e,t,n,r,i)}),(t=>{ss(e,t)}),(t=>{as(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Wn(e.stats_,e.server_))),e.infoData_=new $n,e.infoSyncTree_=new qi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Hi(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),cs(e,"connected",!1),e.serverSyncTree_=new qi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);Jo(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function rs(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function is(e){return vo({timestamp:rs(e)})}function os(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.UI)(n,(e=>_n(e)));a=Ji(e.serverSyncTree_,s,t,i)}else{const t=_n(n);a=Yi(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.UI)(n,(e=>_n(e)));a=Bi(e.serverSyncTree_,s,t)}else{const t=_n(n);a=Hi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=bs(e,s)),Jo(e.eventQueue_,c,a)}function ss(e,t){cs(e,"connected",t),!1===t&&hs(e)}function as(e,t){j(t,((t,n)=>{cs(e,t,n)}))}function cs(e,t,n){const r=new ut("/.info/"+t),i=_n(n);e.infoData_.updateSnapshot(r,i);const o=Hi(e.infoSyncTree_,r,i);Jo(e.eventQueue_,r,o)}function us(e){return e.nextWriteId_++}function ls(e,t,n,r,i){ms(e,"set",{path:t.toString(),value:n,priority:r});const o=is(e),s=_n(n,r),a=Qi(e.serverSyncTree_,t),c=wo(s,a,o),u=us(e),l=Vi(e.serverSyncTree_,t,c,u,!0);Go(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||S("set at "+t+" failed: "+n);const s=zi(e.serverSyncTree_,u,!o);Jo(e.eventQueue_,t,s),vs(e,i,n,r)}));const h=Ts(e,t);bs(e,h),Jo(e.eventQueue_,h,[])}function hs(e){ms(e,"onDisconnectEvents");const t=is(e),n=jn();Un(e.onDisconnect_,lt(),((r,i)=>{const o=bo(r,i,e.serverSyncTree_,t);Fn(n,r,o)}));let r=[];Un(n,lt(),((t,n)=>{r=r.concat(Hi(e.serverSyncTree_,t,n));const i=Ts(e,t);bs(e,i)})),e.onDisconnect_=jn(),Jo(e.eventQueue_,lt(),r)}function ds(e,t,n){let r;r=".info"===ht(t._path)?Zi(e.infoSyncTree_,t,n):Zi(e.serverSyncTree_,t,n),Yo(e.eventQueue_,t._path,r)}function fs(e,t,n){let r;r=".info"===ht(t._path)?Gi(e.infoSyncTree_,t,n):Gi(e.serverSyncTree_,t,n),Yo(e.eventQueue_,t._path,r)}function ps(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Xo)}function ms(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),k(n,...t)}function vs(e,t,n,r){t&&K((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function gs(e,t,n){return Qi(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function _s(e,t=e.transactionQueueTree_){if(t||Is(e,t),Io(t)){const n=ks(e,t);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&ys(e,No(t),n)}else So(t)&&xo(t,(t=>{_s(e,t)}))}function ys(e,t,n){const r=n.map((e=>e.currentWriteId)),i=gs(e,t,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];(0,o.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),u=t;e.server_.put(u.toString(),c,(r=>{ms(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(zi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Is(e,Eo(e.transactionQueueTree_,t)),_s(e,e.transactionQueueTree_),Jo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)K(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}bs(e,t)}}),a)}function bs(e,t){const n=Cs(e,t),r=No(n),i=ks(e,n);return ws(e,i,r),r}function ws(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const s=t[c],u=bt(n,s.path);let l,h=!1;if((0,o.hu)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(zi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=es)h=!0,l="maxretry",i=i.concat(zi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=gs(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Vo("transaction failed: Data returned ",r,s.path);let t=_n(r);const c="object"===typeof r&&null!=r&&(0,o.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,l=is(e),h=wo(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=us(e),a.splice(a.indexOf(u),1),i=i.concat(Vi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(zi(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(zi(e.serverSyncTree_,s.currentWriteId,!0))}Jo(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(l),!1,null)))))}Is(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)K(r[o]);_s(e,e.transactionQueueTree_)}function Cs(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Io(r))r=Eo(r,n),t=ft(t),n=ht(t);return r}function ks(e,t){const n=[];return Es(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Es(e,t,n){const r=Io(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xo(t,(t=>{Es(e,t,n)}))}function Is(e,t){const n=Io(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,To(t,n.length>0?n:void 0)}xo(t,(t=>{Is(e,t)}))}function Ts(e,t){const n=No(Cs(e,t)),r=Eo(e.transactionQueueTree_,t);return Ro(r,(t=>{Ss(e,t)})),Ss(e,r),Po(r,(t=>{Ss(e,t)})),n}function Ss(e,t){const n=Io(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(zi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?To(t,void 0):n.length=s+1,Jo(e.eventQueue_,No(t),i);for(let e=0;e<r.length;e++)K(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function xs(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ps=function(e,t){const n=Rs(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ut(n.pathString)}},Rs=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=Os(e.substring(l,h)));const d=xs(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Pz)(this.snapshot.exportVal())}}class As{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Ds(this._repo,this._path)}get _queryIdentifier(){const e=Mn(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return Mn(this._queryParams)}isEqual(e){if(e=(0,o.m9)(e),!(e instanceof Ms))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Ds extends Ms{constructor(e,t){super(e,t,new Nn,!1)}get parent(){const e=gt(this._path);return null===e?null:new Ds(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class $s{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=Fs(this.ref,e);return new $s(this._node.getChild(t),n,sn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new $s(n,Fs(this.ref,t),sn))))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function js(e,t){return e=(0,o.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Fs(e._root,t):e._root}function Fs(e,t){return e=(0,o.m9)(e),null===ht(e._path)?Ho("child","path",t,!1):zo("child","path",t,!1),new Ds(e._repo,_t(e._path,t))}function Us(e,t){e=(0,o.m9)(e),Bo("push",e._path),qo("push",t,e._path,!0);const n=rs(e._repo),r=kn(n),i=Fs(e,r),s=Fs(e,r);let a;return a=null!=t?qs(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function qs(e,t){e=(0,o.m9)(e),Bo("set",e._path),qo("set",t,e._path,!1);const n=new o.BH;return ls(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Vs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ns("value",this,new $s(e.snapshotNode,new Ds(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new As(this,e,t):null}matches(e){return e instanceof Vs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class zs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new As(this,e,t):null}createEvent(e,t){(0,o.hu)(null!=e.childName,"Child events should have a childName.");const n=Fs(new Ds(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Ns(e.type,this,new $s(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Hs(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{fs(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ls(n,o||void 0),a="value"===t?new Vs(s):new zs(t,s);return ds(e._repo,e,a),()=>fs(e._repo,e,a)}function Bs(e,t,n,r){return Hs(e,"value",t,n,r)}Ii(Ds),ji(Ds);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ws="FIREBASE_DATABASE_EMULATOR_HOST",Ks={};let Gs=!1;function Ys(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=Ps(o,i),u=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[Ws]),a?(s=!0,o=`http://${a}?ns=${u.namespace}`,c=Ps(o,i),u=c.repoInfo):s=!c.repoInfo.secure;const l=i&&s?new Q(Q.OWNER):new Z(e.name,e.options,t);Wo("Invalid Firebase Database URL",c),yt(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Zs(u,e,l,new J(e.name,n));return new Qs(h,e)}function Js(e,t){const n=Ks[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ps(e),delete n[e.key]}function Zs(e,t,n,r){let i=Ks[t.name];i||(i={},Ks[t.name]=i);let o=i[e.toURLString()];return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ts(e,Gs,n,r),i[e.toURLString()]=o,o}class Qs{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ns(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ds(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Js(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function Xs(e=(0,r.Mq)(),t){return(0,r.qX)(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ea(e){l(r.Jn),(0,r.Xd)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Ys(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,e),(0,r.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Dt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ea()},1705:function(e,t,n){"use strict";n.d(t,{Z:function(){return ee}});var r=n(144),i=n(4101);function o(e,t={}){if(o.installed)return;o.installed=!0,r.ZP!==e&&(0,i.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},s=t.directives||{};for(const r in s){const t=s[r];e.directive(r,t)}(function t(n){if(n){for(const r in n){const i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var s={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const a={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:s},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var c=n(5352),u=n(9989);class l extends u.t{constructor(e,t){super();const n=(0,c.Ee)({},a),{userPreset:r}=t,{preset:o={},...s}=r;null!=o.preset&&(0,i.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=(0,c.Ee)((0,c.Ee)(n,o),s)}}l.property="presets";class h extends u.t{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce(((e,t)=>e+t),0)}}h.property="application";class d extends u.t{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:r}=e[d.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=r}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,o=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),s=n<this.thresholds.lg-this.scrollBarWidth&&!(o||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=o,this.lg=s,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(o||s||a),this.smAndUp=!r&&(i||o||s||a),this.mdOnly=o,this.mdAndDown=(r||i||o)&&!(s||a),this.mdAndUp=!(r||i)&&(o||s||a),this.lgOnly=s,this.lgAndDown=(r||i||o||s)&&!a,this.lgAndUp=!(r||i||o)&&(s||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case o:this.name="md";break;case s:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}d.property="breakpoint";var f=n(6421);const p={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var m=p;const v={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var g=v;const _={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var y=_;const b={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var w=b;const C={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var k=C;function E(e,t){const n={};for(const r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var I=E("font-awesome-icon",w),T=Object.freeze({mdiSvg:m,md:g,mdi:y,fa:w,fa4:k,faSvg:I});class S extends u.t{constructor(e){super();const{iconfont:t,values:n,component:r}=e[S.property];this.component=r,this.iconfont=t,this.values=(0,c.Ee)(T[t],n)}}S.property="icons";const O="$vuetify.",x=Symbol("Lang fallback");function P(e,t,n=!1,r){const o=t.replace(O,"");let s=(0,c.vO)(e,o,x);return s===x&&(n?((0,i.N6)(`Translation key "${o}" not found in fallback`),s=t):((0,i.Kd)(`Translation key "${o}" not found, falling back to default`),s=P(r,t,!0,r))),s}class R extends u.t{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:r}=e[R.property];this.current=t,this.locales=n,this.translator=r||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return P(t,e,!1,n)}t(e,...t){return e.startsWith(O)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n])))}}R.property="lang";var N=n(937);const A=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],L=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,M=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],D=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function $(e){const t=Array(3),n=L,r=A;for(let i=0;i<3;++i)t[i]=Math.round(255*(0,c.uZ)(n(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function j(e){const t=[0,0,0],n=D,r=M,i=n((e>>16&255)/255),o=n((e>>8&255)/255),s=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*o+r[a][2]*s;return t}const F=.20689655172413793,U=e=>e>F**3?Math.cbrt(e):e/(3*F**2)+4/29,q=e=>e>F?e**3:3*F**2*(e-4/29);function V(e){const t=U,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function z(e){const t=q,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function H(e,t=!1,n=!0){const{anchor:r,...i}=e,o=Object.keys(i),s={};for(let a=0;a<o.length;++a){const r=o[a],i=e[r];null!=i&&(n?t?("base"===r||r.startsWith("lighten")||r.startsWith("darken"))&&(s[r]=(0,N.hq)(i)):s[r]="object"===typeof i?H(i,!0,n):J(r,(0,N.jx)(i)):s[r]={base:(0,N.I4)((0,N.jx)(i))})}return t||(s.anchor=r||s.base||s.primary.base),s}const B=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,W=(e,t,n)=>{const[r,i]=t.split(/(\d)/,2);return`\n.v-application .${e}.${r}-${i} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${r}-${i} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},K=(e,t="base")=>`--v-${e}-${t}`,G=(e,t="base")=>`var(${K(e,t)})`;function Y(e,t=!1){const{anchor:n,...r}=e,i=Object.keys(r);if(!i.length)return"";let o="",s="";const a=t?G("anchor"):n;s+=`.v-application a { color: ${a}; }`,t&&(o+=`  ${K("anchor")}: ${n};\n`);for(let u=0;u<i.length;++u){const n=i[u],r=e[n];s+=B(n,t?G(n):r.base),t&&(o+=`  ${K(n)}: ${r.base};\n`);const a=(0,c.XP)(r);for(let e=0;e<a.length;++e){const i=a[e],c=r[i];"base"!==i&&(s+=W(n,i,t?G(n,i):c),t&&(o+=`  ${K(n,i)}: ${c};\n`))}}return t&&(o=`:root {\n${o}}\n\n`),o+s}function J(e,t){const n={base:(0,N.I4)(t)};for(let r=5;r>0;--r)n[`lighten${r}`]=(0,N.I4)(Z(t,r));for(let r=1;r<=4;++r)n[`darken${r}`]=(0,N.I4)(Q(t,r));return n}function Z(e,t){const n=V(j(e));return n[0]=n[0]+10*t,$(z(n))}function Q(e,t){const n=V(j(e));return n[0]=n[0]-10*t,$(z(n))}class X extends u.t{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:r,themes:i}=e[X.property];this.dark=Boolean(t),this.defaults=this.themes=i,this.options=r,n?this.disabled=!0:this.themes={dark:this.fillVariant(i.dark,!0),light:this.fillVariant(i.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick((()=>{this.applyVueMeta23()}));const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find((e=>"vuetify-theme-stylesheet"===e.id));return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(()=>{const t=r.ZP.observable({themes:this.themes});this.unwatch=e.$watch((()=>t.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=Y(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return H(this.currentTheme||{},void 0,(0,c.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}X.property="theme";class ee{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(l),this.use(h),this.use(d),this.use(f.A),this.use(S),this.use(R),this.use(X)}init(e,t){this.installed.forEach((n=>{const r=this.framework[n];r.framework=this.framework,r.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}ee.install=o,ee.installed=!1,ee.version="2.6.9",ee.config={silent:!1}},6421:function(e,t,n){"use strict";n.d(t,{A:function(){return k},Z:function(){return C}});var r={};n.r(r),n.d(r,{easeInCubic:function(){return u},easeInOutCubic:function(){return h},easeInOutQuad:function(){return c},easeInOutQuart:function(){return p},easeInOutQuint:function(){return g},easeInQuad:function(){return s},easeInQuart:function(){return d},easeInQuint:function(){return m},easeOutCubic:function(){return l},easeOutQuad:function(){return a},easeOutQuart:function(){return f},easeOutQuint:function(){return v},linear:function(){return o}});n(1703);var i=n(9989);const o=e=>e,s=e=>e**2,a=e=>e*(2-e),c=e=>e<.5?2*e**2:(4-2*e)*e-1,u=e=>e**3,l=e=>--e**3+1,h=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,d=e=>e**4,f=e=>1- --e**4,p=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,m=e=>e**5,v=e=>1+--e**5,g=e=>e<.5?16*e**5:1+16*--e**5;function _(e){if("number"===typeof e)return e;let t=w(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${b(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function y(e){const t=w(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${b(e)} instead.`)}function b(e){return null==e?e:e.constructor.name}function w(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function C(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},i=y(n.container);if(n.appOffset&&C.framework.application){const e=i.classList.contains("v-navigation-drawer"),t=i.classList.contains("v-navigation-drawer--clipped"),{bar:r,top:o}=C.framework.application;n.offset+=r,e&&!t||(n.offset+=o)}const o=performance.now();let s;s="number"===typeof e?_(e)-n.offset:_(e)-_(i)-n.offset;const a=i.scrollTop;if(s===a)return Promise.resolve(s);const c="function"===typeof n.easing?n.easing:r[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(r){const u=r-o,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);i.scrollTop=Math.floor(a+(s-a)*c(l));const h=i===document.body?document.documentElement.clientHeight:i.clientHeight,d=h+i.scrollTop>=i.scrollHeight;if(1===l||s>i.scrollTop&&d)return e(s);requestAnimationFrame(t)}))))}C.framework={},C.init=()=>{};class k extends i.t{constructor(){return super(),C}}k.property="goTo"},9989:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});class r{constructor(){this.framework={}}init(e,t){}}},937:function(e,t,n){"use strict";n.d(t,{I4:function(){return s},NA:function(){return i},hq:function(){return a},jx:function(){return o}});n(1703);var r=n(4101);function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function o(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function s(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return s(o(e))}},2638:function(e,t){"use strict";const n=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),r=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),i=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),o=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),s=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),a=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),c=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),u=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),l=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),h=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),d=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),f=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),p=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),m=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),v=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),g=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),_=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),y=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),b=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),w=Object.freeze({black:"#000000",white:"#ffffff",transparent:"transparent"});t["Z"]=Object.freeze({red:n,pink:r,purple:i,deepPurple:o,indigo:s,blue:a,lightBlue:c,cyan:u,teal:l,green:h,lightGreen:d,lime:f,yellow:p,amber:m,orange:v,deepOrange:g,brown:_,blueGrey:y,grey:b,shades:w})},4101:function(e,t,n){"use strict";n.d(t,{Jk:function(){return u},Kd:function(){return o},N6:function(){return s},Rn:function(){return a},fK:function(){return c}});var r=n(1705);function i(e,t,n){if(!r.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?f(t):"")}}function o(e,t,n){const r=i(e,t,n);null!=r&&console.warn(r)}function s(e,t,n){const r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){o(`[UPGRADE] '${e}' is deprecated, use '${t}' instead.`,n,r)}function c(e,t,n,r){s(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,r)}function u(e,t,n){o(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,n)}const l=/(?:^|[-_])(\w)/g,h=e=>e.replace(l,(e=>e.toUpperCase())).replace(/[-_]/g,"");function d(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=e&&e[1]}return(r?`<${h(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function f(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${d(e[0])}... (${e[1]} recursive calls)`:d(e)}`)).join("\n")}return`\n\n(found in ${d(e)})`}},5352:function(e,t,n){"use strict";n.d(t,{Do:function(){return p},Ee:function(){return E},GL:function(){return d},Ji:function(){return i},KK:function(){return u},RB:function(){return m},TI:function(){return b},XP:function(){return v},_A:function(){return _},iZ:function(){return I},jC:function(){return y},ji:function(){return l},kb:function(){return h},qw:function(){return s},sp:function(){return w},uZ:function(){return k},vO:function(){return c},vZ:function(){return a},z9:function(){return C}});var r=n(144);function i(e,t="div",n){return r.ZP.extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render(t,{data:n,props:r,children:i}){return n.staticClass=`${e} ${n.staticClass||""}`.trim(),t(r.tag,n,i)}})}let o=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(T){console.warn(T)}function s(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function a(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>a(e[n],t[n])))}function c(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),s(e,t.split("."),n)):n}function u(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||u(e.parentNode)}function l(e,t){const n={};for(let r=0;r<t.length;r++){const i=t[r];"undefined"!==typeof e[i]&&(n[i]=e[i])}return n}function h(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function d(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function f(e){return null!==e&&"object"===typeof e}const p=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function m(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,r=c(e,n,t);if("string"!==typeof r)return r;t=r}return null==n?t:{component:n,props:{icon:t}}}function v(e){return Object.keys(e)}const g=/-(\w)/g,_=e=>e.replace(g,((e,t)=>t?t.toUpperCase():""));function y(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e){return null!=e?Array.isArray(e)?e:[e]:[]}function w(e,t,n){return e.$slots.hasOwnProperty(t)&&e.$scopedSlots.hasOwnProperty(t)&&e.$scopedSlots[t].name?n?"v-slot":"scoped":e.$slots.hasOwnProperty(t)?"normal":e.$scopedSlots.hasOwnProperty(t)?"scoped":void 0}function C(e,t="default",n,r=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function k(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function E(e={},t={}){for(const n in t){const r=e[n],i=t[n];f(r)&&f(i)?e[n]=E(r,i):e[n]=i}return e}function I(e){if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}},8345:function(e,t){"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */function n(e,t){for(var n in t)e[n]=t[n];return e}var r=/[!'()*]/g,i=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,s=function(e){return encodeURIComponent(e).replace(r,i).replace(o,",")};function a(e){try{return decodeURIComponent(e)}catch(t){0}return e}function c(e,t,n){void 0===t&&(t={});var r,i=n||l;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(u):u(s)}return r}var u=function(e){return null==e||"object"===typeof e?e:String(e)};function l(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=a(n.shift()),i=n.length>0?a(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return s(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(s(t)):r.push(s(t)+"="+s(e)))})),r.join("&")}return s(t)+"="+s(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var d=/\/?$/;function f(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=p(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:g(t,i),matched:e?v(e):[]};return n&&(s.redirectedFrom=g(n,i)),Object.freeze(s)}function p(e){if(Array.isArray(e))return e.map(p);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=p(e[n]);return t}return e}var m=f(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function g(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||h;return(n||"/")+o(r)+i}function _(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(d,"")===t.path.replace(d,"")&&(n||e.hash===t.hash&&y(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&y(e.query,t.query)&&y(e.params,t.params))))}function y(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?y(o,a):String(o)===String(a)}))}function b(e,t){return 0===e.path.replace(d,"/").indexOf(t.path.replace(d,"/"))&&(!t.hash||e.hash===t.hash)&&w(e.query,t.query)}function w(e,t){for(var n in t)if(!(n in e))return!1;return!0}function C(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var k={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var r=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=r.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&E(m,s,p.route,p.configProps),a(m,s,i)):a()}var v=u.matched[h],g=v&&v.components[c];if(!v||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=v.instances[c];(t&&n!==e||!t&&n===e)&&(v.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){v.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==v.instances[c]&&(v.instances[c]=e.componentInstance),C(u)};var _=v.props&&v.props[c];return _&&(n(l[c],{route:u,configProps:_}),E(g,s,u,_)),a(g,s,i)}};function E(e,t,r,i){var o=t.props=I(r,i);if(o){o=t.props=n({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function I(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function T(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function S(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function O(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var x=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},P=Y,R=D,N=$,A=U,L=G,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],m=n[5],v=n[6],g=n[7];s&&(r.push(s),s="");var _=null!=d&&null!=h&&h!==d,y="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||a,C=p||m;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:y,partial:_,asterisk:!!g,pattern:C?V(C):g?".*":"[^"+q(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function $(e,t){return U(D(e,t),t)}function j(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function F(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",H(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?j:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function q(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function z(e,t){return e.keys=t,e}function H(e){return e&&e.sensitive?"":"i"}function B(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(e,t)}function W(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",H(n));return z(o,t)}function K(e,t,n){return G(D(e,n),t,n)}function G(e,t,n){x(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=q(a);else{var c=q(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=q(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,H(n)),t)}function Y(e,t,n){return x(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?B(e,t):x(e)?W(e,t,n):K(e,t,n)}P.parse=R,P.compile=N,P.tokensToFunction=A,P.tokensToRegExp=L;var J=Object.create(null);function Z(e,t,n){t=t||{};try{var r=J[e]||(J[e]=P.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Q(e,t,r,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=n({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=n({},s)),o}if(!o.path&&o.params&&t){o=n({},o),o._normalized=!0;var a=n(n({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var u=t.matched[t.matched.length-1].path;o.path=Z(u,a,"path "+t.path)}else 0;return o}var l=S(o.path||""),h=t&&t.path||"/",d=l.path?T(l.path,h,r||o.append):h,f=c(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var X,ee=[String,Object],te=[String,Array],ne=function(){},re={name:"RouterLink",props:{to:{type:ee,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:te,default:"click"}},render:function(e){var t=this,r=this.$router,i=this.$route,o=r.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=r.options.linkActiveClass,h=r.options.linkExactActiveClass,d=null==l?"router-link-active":l,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?p:this.exactActiveClass,g=a.redirectedFrom?f(null,Q(a.redirectedFrom),null,r):a;u[v]=_(i,g,this.exactPath),u[m]=this.exact||this.exactPath?u[v]:b(i,g);var y=u[v]?this.ariaCurrentValue:null,w=function(e){ie(e)&&(t.replace?r.replace(s,ne):r.push(s,ne))},C={click:ie};Array.isArray(this.event)?this.event.forEach((function(e){C[e]=w})):C[this.event]=w;var k={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[m],isExactActive:u[v]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)k.on=C,k.attrs={href:c,"aria-current":y};else{var I=oe(this.$slots.default);if(I){I.isStatic=!1;var T=I.data=n({},I.data);for(var S in T.on=T.on||{},T.on){var O=T.on[S];S in C&&(T.on[S]=Array.isArray(O)?O:[O])}for(var x in C)x in T.on?T.on[x].push(C[x]):T.on[x]=w;var P=I.data.attrs=n({},I.data.attrs);P.href=c,P["aria-current"]=y}else k.on=C}return e(this.tag,k,this.$slots.default)}};function ie(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function se(e){if(!se.installed||X!==e){se.installed=!0,X=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",k),e.component("RouterLink",re);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ae="undefined"!==typeof window;function ce(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){ue(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function ue(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=he(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:le(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?O(o+"/"+r.path):void 0;ue(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ue(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function le(e,t){var n=P(e,[],t);return n}function he(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:O(t.path+"/"+e)}function de(e,t){var n=ce(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ce(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ce([t||e],r,i,o,n),n&&n.alias.length&&ce(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=Q(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(fe(m.regex,a.path,a.params))return d(m,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(f(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,p=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,p=s.hasOwnProperty("params")?s.params:p,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:p},void 0,n)}if(c){var m=pe(c,e),v=Z(m,p,'redirect route with path "'+m+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Z(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):f(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function fe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?a(r[i]):r[i])}return!0}function pe(e,t){return T(e,t.parent?t.parent.path:"/",!0)}var me=ae&&window.performance&&window.performance.now?window.performance:Date;function ve(){return me.now().toFixed(3)}var ge=ve();function _e(){return ge}function ye(e){return ge=e}var be=Object.create(null);function we(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),r=n({},window.history.state);return r.key=_e(),window.history.replaceState(r,"",t),window.addEventListener("popstate",Ee),function(){window.removeEventListener("popstate",Ee)}}function Ce(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Ie(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Ne(e,o)})).catch((function(e){0})):Ne(s,o))}))}}function ke(){var e=_e();e&&(be[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ee(e){ke(),e.state&&e.state.key&&ye(e.state.key)}function Ie(){var e=_e();if(e)return be[e]}function Te(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Se(e){return Pe(e.x)||Pe(e.y)}function Oe(e){return{x:Pe(e.x)?e.x:window.pageXOffset,y:Pe(e.y)?e.y:window.pageYOffset}}function xe(e){return{x:Pe(e.x)?e.x:0,y:Pe(e.y)?e.y:0}}function Pe(e){return"number"===typeof e}var Re=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Re.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=xe(i),t=Te(r,i)}else Se(e)&&(t=Oe(e))}else n&&Se(e)&&(t=Oe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Ae=ae&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){ke();var r=window.history;try{if(t){var i=n({},r.state);i.key=_e(),r.replaceState(i,"",e)}else r.pushState({key:ye(ve())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Me(e){Le(e,!0)}function De(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var $e={redirected:2,aborted:4,cancelled:8,duplicated:16};function je(e,t){return Ve(e,t,$e.redirected,'Redirected when going from "'+e.fullPath+'" to "'+He(t)+'" via a navigation guard.')}function Fe(e,t){var n=Ve(e,t,$e.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ue(e,t){return Ve(e,t,$e.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function qe(e,t){return Ve(e,t,$e.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Ve(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function He(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function Be(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function We(e,t){return Be(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e){return function(t,n,r){var i=!1,o=0,s=null;Ge(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Qe((function(t){Ze(t)&&(t=t.default),e.resolved="function"===typeof t?t:X.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Qe((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=Be(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ge(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ze(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Qe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var Xe=function(e,t){this.router=e,this.base=et(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function et(e){if(!e)if(ae){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function tt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function nt(e,t,n,r){var i=Ge(e,(function(e,r,i,o){var s=rt(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Ye(r?i.reverse():i)}function rt(e,t){return"function"!==typeof e&&(e=X.extend(e)),e.options[t]}function it(e){return nt(e,"beforeRouteLeave",st,!0)}function ot(e){return nt(e,"beforeRouteUpdate",st)}function st(e,t){if(t)return function(){return e.apply(t,arguments)}}function at(e){return nt(e,"beforeRouteEnter",(function(e,t,n,r){return ct(e,n,r)}))}function ct(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}Xe.prototype.listen=function(e){this.cb=e},Xe.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Xe.prototype.onError=function(e){this.errorCbs.push(e)},Xe.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(We(e,$e.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},Xe.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!We(e)&&Be(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(_(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ce(this.router,i,e,!1),o(Fe(i,e));var c=tt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(it(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),Ke(h)),f=function(t,n){if(r.pending!==e)return o(Ue(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(qe(i,e))):Be(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(je(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};De(d,f,(function(){var n=at(h),s=n.concat(r.router.resolveHooks);De(s,f,(function(){if(r.pending!==e)return o(Ue(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){C(e)}))}))}))},Xe.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Xe.prototype.setupListeners=function(){},Xe.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var ut=function(e){function t(t,n){e.call(this,t,n),this._startLocation=lt(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Ae&&n;r&&this.listeners.push(we());var i=function(){var n=e.current,i=lt(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ce(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(O(r.base+e.fullPath)),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Me(O(r.base+e.fullPath)),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(lt(this.base)!==this.current.fullPath){var t=O(this.base+this.current.fullPath);e?Le(t):Me(t)}},t.prototype.getCurrentLocation=function(){return lt(this.base)},t}(Xe);function lt(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(O(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ht=function(e){function t(t,n,r){e.call(this,t,n),r&&dt(this.base)||ft()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Ae&&n;r&&this.listeners.push(we());var i=function(){var t=e.current;ft()&&e.transitionTo(pt(),(function(n){r&&Ce(e.router,n,t,!0),Ae||gt(n.fullPath)}))},o=Ae?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){vt(e.fullPath),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ce(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;pt()!==t&&(e?vt(t):gt(t))},t.prototype.getCurrentLocation=function(){return pt()},t}(Xe);function dt(e){var t=lt(e);if(!/^\/#/.test(t))return window.location.replace(O(e+"/#"+t)),!0}function ft(){var e=pt();return"/"===e.charAt(0)||(gt("/"+e),!1)}function pt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function mt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function vt(e){Ae?Le(mt(e)):window.location.hash=e}function gt(e){Ae?Me(mt(e)):window.location.replace(mt(e))}var _t=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){We(e,$e.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Xe),yt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=de(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Ae&&!1!==e.fallback,this.fallback&&(t="hash"),ae||(t="abstract"),this.mode=t,t){case"history":this.history=new ut(this,e.base);break;case"hash":this.history=new ht(this,e.base,this.fallback);break;case"abstract":this.history=new _t(this,e.base);break;default:0}},bt={currentRoute:{configurable:!0}};function wt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Ct(e,t,n){var r="hash"===n?"#"+t:t;return e?O(e+"/"+r):r}yt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},bt.currentRoute.get=function(){return this.history&&this.history.current},yt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof ut||n instanceof ht){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=Ae&&i;o&&"fullPath"in e&&Ce(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},yt.prototype.beforeEach=function(e){return wt(this.beforeHooks,e)},yt.prototype.beforeResolve=function(e){return wt(this.resolveHooks,e)},yt.prototype.afterEach=function(e){return wt(this.afterHooks,e)},yt.prototype.onReady=function(e,t){this.history.onReady(e,t)},yt.prototype.onError=function(e){this.history.onError(e)},yt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},yt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},yt.prototype.go=function(e){this.history.go(e)},yt.prototype.back=function(){this.go(-1)},yt.prototype.forward=function(){this.go(1)},yt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},yt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Q(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Ct(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},yt.prototype.getRoutes=function(){return this.matcher.getRoutes()},yt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},yt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(yt.prototype,bt),yt.install=se,yt.version="3.5.4",yt.isNavigationFailure=We,yt.NavigationFailureType=$e,yt.START_LOCATION=m,ae&&window.Vue&&window.Vue.use(yt),t["Z"]=yt},144:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Gr}});
/*!
 * Vue.js v2.7.9
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function v(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function g(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function _(e){var t=parseFloat(e);return isNaN(t)?e:t}function y(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}y("slot,component",!0);var b=y("key,ref,slot,slot-scope,is");function w(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var C=Object.prototype.hasOwnProperty;function k(e,t){return C.call(e,t)}function E(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var I=/-(\w)/g,T=E((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),S=E((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),O=/\B([A-Z])/g,x=E((function(e){return e.replace(O,"-$1").toLowerCase()}));function P(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function R(e,t){return e.bind(t)}var N=Function.prototype.bind?R:P;function A(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function L(e,t){for(var n in t)e[n]=t[n];return e}function M(e){for(var t={},n=0;n<e.length;n++)e[n]&&L(t,e[n]);return t}function D(e,t,n){}var $=function(e,t,n){return!1},j=function(e){return e};function F(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return F(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return F(e[n],t[n])}))}catch(c){return!1}}function U(e,t){for(var n=0;n<e.length;n++)if(F(e[n],t))return n;return-1}function q(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function V(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var z="data-server-rendered",H=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:D,parsePlatformTagName:j,mustUseProp:$,async:!0,_lifecycleHooks:B},K=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function Y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(K.source,".$_\\d]"));function Z(e){if(!J.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Q="__proto__"in{},X="undefined"!==typeof window,ee=X&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var oe,se=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(X)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Ys){}var le=function(){return void 0===oe&&(oe=!X&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},he=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ve(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ge=function(){function e(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),_e=function(e){void 0===e&&(e="");var t=new ge;return t.text=e,t.isComment=!0,t};function ye(e){return new ge(void 0,void 0,void 0,String(e))}function be(e){var t=new ge(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var we=0,Ce=function(){function e(){this.id=we++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){w(this.subs,e)},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.slice();for(var n=0,r=t.length;n<r;n++){t[n].update()}},e}();Ce.target=null;var ke=[];function Ee(e){ke.push(e),Ce.target=e}function Ie(){ke.pop(),Ce.target=ke[ke.length-1]}var Te=Array.prototype,Se=Object.create(Te),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach((function(e){var t=Te[e];Y(Se,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var xe=Object.getOwnPropertyNames(Se),Pe={},Re=!0;function Ne(e){Re=e}var Ae={notify:D,depend:D,addSub:D,removeSub:D},Le=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Ae:new Ce,this.vmCount=0,Y(e,"__ob__",this),i(e)){if(!n)if(Q)e.__proto__=Se;else for(var r=0,o=xe.length;r<o;r++){var s=xe[r];Y(e,s,Se[s])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){s=a[r];De(e,s,Pe,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Me(e[t],!1,this.mock)},e}();function Me(e,t,n){var r;if(!(!h(e)||ze(e)||e instanceof ge))return k(e,"__ob__")&&e.__ob__ instanceof Le?r=e.__ob__:!Re||!n&&le()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||(r=new Le(e,t,n)),r}function De(e,t,n,r,o,s){var a=new Ce,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Pe&&2!==arguments.length||(n=e[t]);var h=!o&&Me(n,!1,s);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Ce.target&&(a.depend(),h&&(h.dep.depend(),i(t)&&Fe(t))),ze(t)&&!o?t.value:t},set:function(t){var r=u?u.call(e):n;if(V(r,t)){if(l)l.call(e,t);else{if(u)return;if(!o&&ze(r)&&!ze(t))return void(r.value=t);n=t}h=!o&&Me(t,!1,s),a.notify()}}}),a}}function $e(e,t,n){if(!Ve(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&Me(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(De(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function je(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||Ve(e)||k(e,t)&&(delete e[t],n&&n.dep.notify())}}function Fe(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&Fe(t)}function Ue(e){return qe(e,!0),Y(e,"__v_isShallow",!0),e}function qe(e,t){if(!Ve(e)){Me(e,t,le());0}}function Ve(e){return!(!e||!e.__v_isReadonly)}function ze(e){return!(!e||!0!==e.__v_isRef)}function He(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(ze(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];ze(r)&&!ze(e)?r.value=e:t[n]=e}})}var Be="watcher";"".concat(Be," callback"),"".concat(Be," getter"),"".concat(Be," cleanup");var We;var Ke=function(){function e(e){void 0===e&&(e=!1),this.active=!0,this.effects=[],this.cleanups=[],!e&&We&&(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=We;try{return We=this,e()}finally{We=t}}else 0},e.prototype.on=function(){We=this},e.prototype.off=function(){We=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}},e}();function Ge(e,t){void 0===t&&(t=We),t&&t.active&&t.effects.push(e)}function Ye(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Je=E((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Ze(e,t){function n(){var e=n.fns;if(!i(e))return Kt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Kt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function Qe(e,t,n,r,i,s){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=Je(c),o(u)||(o(l)?(o(u.fns)&&(u=e[c]=Ze(u,s)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)o(e[c])&&(h=Je(c),r(h.name,t[c],h.capture))}function Xe(e,t,n){var r;e instanceof ge&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),w(r.fns,c)}o(i)?r=Ze([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Ze([i,c]),r.merged=!0,e[t]=r}function et(e,t,n){var r=t.options.props;if(!o(r)){var i={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in r){var l=x(u);tt(i,c,u,l,!0)||tt(i,a,u,l,!1)}return i}}function tt(e,t,n,r,i){if(s(t)){if(k(t,n))return e[n]=t[n],i||delete t[n],!0;if(k(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function nt(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function rt(e){return u(e)?[ye(e)]:i(e)?ot(e):void 0}function it(e){return s(e)&&s(e.text)&&c(e.isComment)}function ot(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ot(r,"".concat(t||"","_").concat(n)),it(r[0])&&it(l)&&(h[c]=ye(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?it(l)?h[c]=ye(l.text+r):""!==r&&h.push(ye(r)):it(r)&&it(l)?h[c]=ye(l.text+r.text):(a(e._isVList)&&s(r.tag)&&o(r.key)&&s(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function st(e,t){var n,r,o,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=t(e[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function at(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=L(L({},r),n)),i=o(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ct(e){return wr(this.$options,"filters",e,!0)||j}function ut(e,t){return i(e)?-1===e.indexOf(t):e!==t}function lt(e,t,n,r,i){var o=W.keyCodes[t]||n;return i&&r&&!W.keyCodes[t]?ut(i,r):o?ut(o,e):r?x(r)!==t:void 0===e}function ht(e,t,n,r,o){if(n)if(h(n)){i(n)&&(n=M(n));var s=void 0,a=function(i){if("class"===i||"style"===i||b(i))s=e;else{var a=e.attrs&&e.attrs.type;s=r||W.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=T(i),u=x(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function dt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),pt(r,"__static__".concat(e),!1)),r}function ft(e,t,n){return pt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function pt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&mt(e[r],"".concat(t,"_").concat(r),n);else mt(e,t,n)}function mt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function vt(e,t){if(t)if(f(t)){var n=e.on=e.on?L({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function gt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var s=e[o];i(s)?gt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function _t(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function yt(e,t){return"string"===typeof e?t+e:e}function bt(e){e._o=ft,e._n=_,e._s=g,e._l=st,e._t=at,e._q=F,e._i=U,e._m=dt,e._f=ct,e._k=lt,e._b=ht,e._v=ye,e._e=_e,e._u=gt,e._g=vt,e._d=_t,e._p=yt}function wt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Ct)&&delete n[u];return n}function Ct(e){return e.isComment&&!e.asyncFactory||" "===e.text}function kt(e){return e.isComment&&e.asyncFactory}function Et(e,t,n,i){var o,s=Object.keys(n).length>0,a=t?!!t.$stable:!s,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=It(e,n,u,t[u]))}else o={};for(var l in n)l in o||(o[l]=Tt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=o),Y(o,"$stable",a),Y(o,"$key",c),Y(o,"$hasNormal",s),o}function It(e,t,n,r){var o=function(){var t=me;ve(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:rt(n);var o=n&&n[0];return ve(t),n&&(!o||1===n.length&&o.isComment&&!kt(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Tt(e,t){return function(){return e[t]}}function St(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Ot(e);ve(e),Ee();var i=Kt(n,null,[e._props||Ue({}),r],e,"setup");if(Ie(),ve(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var s in i)"__sfc"!==s&&He(o,i,s)}else for(var s in i)G(s)||He(e,i,s);else 0}}function Ot(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Y(t,"_v_attr_proxy",!0),xt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};xt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Rt(e)},emit:N(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return He(e,t,n)}))}}}function xt(e,t,n,r,i){var o=!1;for(var s in t)s in e?t[s]!==n[s]&&(o=!0):(o=!0,Pt(e,s,r,i));for(var s in e)s in t||(o=!0,delete e[s]);return o}function Pt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Rt(e){return e._slotsProxy||Nt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Nt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function At(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=wt(t._renderChildren,i),e.$scopedSlots=n?Et(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Vt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Vt(e,t,n,r,i,!0)};var o=n&&n.data;De(e,"$attrs",o&&o.attrs||r,null,!0),De(e,"$listeners",t._parentListeners||r,null,!0)}var Lt=null;function Mt(e){bt(e.prototype),e.prototype.$nextTick=function(e){return sn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Et(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Nt(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{ve(t),Lt=t,e=r.call(t._renderProxy,t.$createElement)}catch(Ys){Wt(Ys,t,"render"),e=t._vnode}finally{Lt=null,ve()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ge||(e=_e()),e.parent=o,e}}function Dt(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function $t(e,t,n,r,i){var o=_e();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function jt(e,t){if(a(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=Lt;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=q((function(n){e.resolved=Dt(n,t),i?r.length=0:l(!0)})),f=q((function(t){s(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(v(p)?o(e.resolved)&&p.then(d,f):v(p.component)&&(p.component.then(d,f),s(p.error)&&(e.errorComp=Dt(p.error,t)),s(p.loading)&&(e.loadingComp=Dt(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function Ft(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||kt(n)))return n}}var Ut=1,qt=2;function Vt(e,t,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=qt),zt(e,t,n,r,o)}function zt(e,t,n,r,o){if(s(n)&&s(n.__ob__))return _e();if(s(n)&&s(n.is)&&(t=n.is),!t)return _e();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===qt?r=rt(r):o===Ut&&(r=nt(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||W.getTagNamespace(t),a=W.isReservedTag(t)?new ge(W.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(u=wr(e.$options,"components",t))?new ge(t,n,r,void 0,void 0,e):ir(u,n,e,r,t)}else a=ir(t,n,e,r);return i(a)?a:s(a)?(s(c)&&Ht(a,c),s(n)&&Bt(n),a):_e()}function Ht(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Ht(c,t,n)}}function Bt(e){h(e.style)&&hn(e.style),h(e.class)&&hn(e.class)}function Wt(e,t,n){Ee();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Ys){Gt(Ys,r,"errorCaptured hook")}}}Gt(e,t,n)}finally{Ie()}}function Kt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(e){return Wt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ys){Wt(Ys,r,i)}return o}function Gt(e,t,n){if(W.errorHandler)try{return W.errorHandler.call(null,e,t,n)}catch(Ys){Ys!==e&&Yt(Ys,null,"config.errorHandler")}Yt(e,t,n)}function Yt(e,t,n){if(!X||"undefined"===typeof console)throw e;console.error(e)}var Jt,Zt=!1,Qt=[],Xt=!1;function en(){Xt=!1;var e=Qt.slice(0);Qt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var tn=Promise.resolve();Jt=function(){tn.then(en),ie&&setTimeout(D)},Zt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Jt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(en)}:function(){setTimeout(en,0)};else{var nn=1,rn=new MutationObserver(en),on=document.createTextNode(String(nn));rn.observe(on,{characterData:!0}),Jt=function(){nn=(nn+1)%2,on.data=String(nn)},Zt=!0}function sn(e,t){var n;if(Qt.push((function(){if(e)try{e.call(t)}catch(Ys){Wt(Ys,t,"nextTick")}else n&&n(t)})),Xt||(Xt=!0,Jt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function an(e){return function(t,n){if(void 0===n&&(n=me),n)return cn(n,e,t)}}function cn(e,t,n){var r=e.$options;r[t]=fr(r[t],n)}an("beforeMount"),an("mounted"),an("beforeUpdate"),an("updated"),an("beforeDestroy"),an("destroyed"),an("activated"),an("deactivated"),an("serverPrefetch"),an("renderTracked"),an("renderTriggered"),an("errorCaptured");var un="2.7.9";var ln=new fe;function hn(e){return dn(e,ln),ln.clear(),e}function dn(e,t){var n,r,o=i(e);if(!(!o&&!h(e)||Object.isFrozen(e)||e instanceof ge)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(o){n=e.length;while(n--)dn(e[n],t)}else if(ze(e))dn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)dn(e[r[n]],t)}}}var fn,pn=0,mn=function(){function e(e,t,n,r,i){Ge(this,We&&!We._vm?We:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++pn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",l(t)?this.getter=t:(this.getter=Z(t),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Ee(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Ys){if(!this.user)throw Ys;Wt(Ys,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&hn(e),Ie(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Kt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function vn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&bn(e,t)}function gn(e,t){fn.$on(e,t)}function _n(e,t){fn.$off(e,t)}function yn(e,t){var n=fn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function bn(e,t,n){fn=e,Qe(t,n||{},gn,_n,yn,e),fn=void 0}function wn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,s=e.length;o<s;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var s,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?A(n):n;for(var r=A(arguments,1),i='event handler for "'.concat(e,'"'),o=0,s=n.length;o<s;o++)Kt(n[o],t,r,t,i)}return t}}var Cn=null;function kn(e){var t=Cn;return Cn=e,function(){Cn=t}}function En(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function In(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=kn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||w(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Tn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=_e),Rn(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Rn(e,"beforeUpdate")}};new mn(e,r,D,i,!0),n=!1;var o=e._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==e.$vnode&&(e._isMounted=!0,Rn(e,"mounted")),e}function Sn(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||r;e._attrsProxy&&xt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&xt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,bn(e,n,d),t&&e.$options.props){Ne(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var v=p[m],g=e.$options.props;f[v]=Cr(v,g,t,e)}Ne(!0),e.$options.propsData=t}u&&(e.$slots=wt(o,i.context),e.$forceUpdate())}function On(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function xn(e,t){if(t){if(e._directInactive=!1,On(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)xn(e.$children[n]);Rn(e,"activated")}}function Pn(e,t){if((!t||(e._directInactive=!0,!On(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);Rn(e,"deactivated")}}function Rn(e,t,n,r){void 0===r&&(r=!0),Ee();var i=me;r&&ve(e);var o=e.$options[t],s="".concat(t," hook");if(o)for(var a=0,c=o.length;a<c;a++)Kt(o[a],e,n||null,e,s);e._hasHookEvent&&e.$emit("hook:"+t),r&&ve(i),Ie()}var Nn=[],An=[],Ln={},Mn=!1,Dn=!1,$n=0;function jn(){$n=Nn.length=An.length=0,Ln={},Mn=Dn=!1}var Fn=0,Un=Date.now;if(X&&!te){var qn=window.performance;qn&&"function"===typeof qn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return qn.now()})}var Vn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function zn(){var e,t;for(Fn=Un(),Dn=!0,Nn.sort(Vn),$n=0;$n<Nn.length;$n++)e=Nn[$n],e.before&&e.before(),t=e.id,Ln[t]=null,e.run();var n=An.slice(),r=Nn.slice();jn(),Wn(n),Hn(r),he&&W.devtools&&he.emit("flush")}function Hn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function Bn(e){e._inactive=!1,An.push(e)}function Wn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,xn(e[t],!0)}function Kn(e){var t=e.id;if(null==Ln[t]&&(e!==Ce.target||!e.noRecurse)){if(Ln[t]=!0,Dn){var n=Nn.length-1;while(n>$n&&Nn[n].id>e.id)n--;Nn.splice(n+1,0,e)}else Nn.push(e);Mn||(Mn=!0,sn(zn))}}function Gn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Ye(e),i=pe?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Yn(e){var t=Jn(e.$options.inject,e);t&&(Ne(!1),Object.keys(t).forEach((function(n){De(e,n,t[n])})),Ne(!0))}function Jn(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from;if(s in t._provided)n[o]=t._provided[s];else if("default"in e[o]){var a=e[o].default;n[o]=l(a)?a.call(t):a}else 0}}return n}}function Zn(e,t,n,o,s){var c,u=this,l=s.options;k(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=Jn(l.inject,o),this.slots=function(){return u.$slots||Et(o,e.scopedSlots,u.$slots=wt(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Et(o,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Et(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var s=Vt(c,e,t,n,r,d);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(e,t,n,r){return Vt(c,e,t,n,r,d)}}function Qn(e,t,n,o,a){var c=e.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Cr(h,l,t||r);else s(n.attrs)&&er(u,n.attrs),s(n.props)&&er(u,n.props);var d=new Zn(n,u,a,o,e),f=c.render.call(null,d._c,d);if(f instanceof ge)return Xn(f,n,d.parent,c,d);if(i(f)){for(var p=rt(f)||[],m=new Array(p.length),v=0;v<p.length;v++)m[v]=Xn(p[v],n,d.parent,c,d);return m}}function Xn(e,t,n,r,i){var o=be(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function er(e,t){for(var n in t)e[T(n)]=t[n]}function tr(e){return e.name||e.__name||e._componentTag}bt(Zn.prototype);var nr={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;nr.prepatch(n,n)}else{var r=e.componentInstance=or(e,Cn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Sn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Bn(n):xn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Pn(t,!0):t.$destroy())}},rr=Object.keys(nr);function ir(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(o(e.cid)&&(u=e,e=jt(u,c),void 0===e))return $t(u,t,n,r,i);t=t||{},Wr(e),s(t.model)&&cr(e.options,t);var l=et(t,e,i);if(a(e.options.functional))return Qn(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}sr(t);var p=tr(e.options)||i,m=new ge("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function or(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function sr(e){for(var t=e.hook||(e.hook={}),n=0;n<rr.length;n++){var r=rr[n],i=t[r],o=nr[r];i===o||i&&i._merged||(t[r]=i?ar(o,i):o)}}function ar(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function cr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],c=t.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var ur=D,lr=W.optionMergeStrategies;function hr(e,t){if(!t)return e;for(var n,r,i,o=pe?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=e[n],i=t[n],k(e,n)?r!==i&&f(r)&&f(i)&&hr(r,i):$e(e,n,i));return e}function dr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?hr(r,i):i}:t?e?function(){return hr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function fr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?pr(n):n}function pr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function mr(e,t,n,r){var i=Object.create(e||null);return t?L(i,t):i}lr.data=function(e,t,n){return n?dr(e,t,n):t&&"function"!==typeof t?e:dr(e,t)},B.forEach((function(e){lr[e]=fr})),H.forEach((function(e){lr[e+"s"]=mr})),lr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var s in L(o,e),t){var a=o[s],c=t[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},lr.props=lr.methods=lr.inject=lr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return L(i,e),t&&L(i,t),i},lr.provide=dr;var vr=function(e,t){return void 0===t?e:t};function gr(e,t){var n=e.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=T(o),a[s]={type:null})}else if(f(n))for(var c in n)o=n[c],s=T(c),a[s]=f(o)?o:{type:o};else 0;e.props=a}}function _r(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var s in n){var a=n[s];r[s]=f(a)?L({from:s},a):{from:a}}else 0}}function yr(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function br(e,t,n){if(l(t)&&(t=t.options),gr(t,n),_r(t,n),yr(t),!t._base&&(t.extends&&(e=br(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=br(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)k(e,o)||a(o);function a(r){var i=lr[r]||vr;s[r]=i(e[r],t[r],n,r)}return s}function wr(e,t,n,r){if("string"===typeof n){var i=e[t];if(k(i,n))return i[n];var o=T(n);if(k(i,o))return i[o];var s=S(o);if(k(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Cr(e,t,n,r){var i=t[e],o=!k(n,e),s=n[e],a=Sr(Boolean,i.type);if(a>-1)if(o&&!k(i,"default"))s=!1;else if(""===s||s===x(e)){var c=Sr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=kr(r,i,e);var u=Re;Ne(!0),Me(s),Ne(u)}return s}function kr(e,t,n){if(k(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Ir(t.type)?r.call(e):r}}var Er=/^\s*function (\w+)/;function Ir(e){var t=e&&e.toString().match(Er);return t?t[1]:""}function Tr(e,t){return Ir(e)===Ir(t)}function Sr(e,t){if(!i(t))return Tr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Tr(t[n],e))return n;return-1}var Or={enumerable:!0,configurable:!0,get:D,set:D};function xr(e,t,n){Or.get=function(){return this[t][n]},Or.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Or)}function Pr(e){var t=e.$options;if(t.props&&Rr(e,t.props),St(e),t.methods&&Fr(e,t.methods),t.data)Nr(e);else{var n=Me(e._data={});n&&n.vmCount++}t.computed&&Mr(e,t.computed),t.watch&&t.watch!==ae&&Ur(e,t.watch)}function Rr(e,t){var n=e.$options.propsData||{},r=e._props=Ue({}),i=e.$options._propKeys=[],o=!e.$parent;o||Ne(!1);var s=function(o){i.push(o);var s=Cr(o,t,n,e);De(r,o,s),o in e||xr(e,"_props",o)};for(var a in t)s(a);Ne(!0)}function Nr(e){var t=e.$options.data;t=e._data=l(t)?Ar(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&k(r,o)||G(o)||xr(e,"_data",o)}var s=Me(t);s&&s.vmCount++}function Ar(e,t){Ee();try{return e.call(t,t)}catch(Ys){return Wt(Ys,t,"data()"),{}}finally{Ie()}}var Lr={lazy:!0};function Mr(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var o=t[i],s=l(o)?o:o.get;0,r||(n[i]=new mn(e,s||D,D,Lr)),i in e||Dr(e,i,o)}}function Dr(e,t,n){var r=!le();l(n)?(Or.get=r?$r(t):jr(n),Or.set=D):(Or.get=n.get?r&&!1!==n.cache?$r(t):jr(n.get):D,Or.set=n.set||D),Object.defineProperty(e,t,Or)}function $r(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Ce.target&&t.depend(),t.value}}function jr(e){return function(){return e.call(this,this)}}function Fr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?D:N(t[n],e)}function Ur(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)qr(e,n,r[o]);else qr(e,n,r)}}function qr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Vr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=$e,e.prototype.$delete=je,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return qr(r,e,t,n);n=n||{},n.user=!0;var i=new mn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ee(),Kt(t,r,[i.value],r,o),Ie()}return function(){i.teardown()}}}var zr=0;function Hr(e){e.prototype._init=function(e){var t=this;t._uid=zr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ke(!0),t._scope._vm=!0,e&&e._isComponent?Br(t,e):t.$options=br(Wr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,En(t),vn(t),At(t),Rn(t,"beforeCreate",void 0,!1),Yn(t),Pr(t),Gn(t),Rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Br(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Wr(e){var t=e.options;if(e.super){var n=Wr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Kr(e);i&&L(e.extendOptions,i),t=e.options=br(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Kr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Gr(e){this._init(e)}function Yr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Jr(e){e.mixin=function(e){return this.options=br(this.options,e),this}}function Zr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=tr(e)||tr(n.options);var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=br(n.options,e),s["super"]=n,s.options.props&&Qr(s),s.options.computed&&Xr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,H.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=L({},s.options),i[r]=s,s}}function Qr(e){var t=e.options.props;for(var n in t)xr(e.prototype,"_props",n)}function Xr(e){var t=e.options.computed;for(var n in t)Dr(e.prototype,n,t[n])}function ei(e){H.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ti(e){return e&&(tr(e.Ctor.options)||e.tag)}function ni(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function ri(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&ii(n,o,r,i)}}}function ii(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,w(n,t)}Hr(Gr),Vr(Gr),wn(Gr),In(Gr),Mt(Gr);var oi=[String,RegExp,Array],si={name:"keep-alive",abstract:!0,props:{include:oi,exclude:oi,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:ti(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ii(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ii(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){ri(e,(function(e){return ni(t,e)}))})),this.$watch("exclude",(function(t){ri(e,(function(e){return!ni(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Ft(e),n=t&&t.componentOptions;if(n){var r=ti(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ni(o,r))||s&&r&&ni(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ai={KeepAlive:si};function ci(e){var t={get:function(){return W}};Object.defineProperty(e,"config",t),e.util={warn:ur,extend:L,mergeOptions:br,defineReactive:De},e.set=$e,e.delete=je,e.nextTick=sn,e.observable=function(e){return Me(e),e},e.options=Object.create(null),H.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,L(e.options.components,ai),Yr(e),Jr(e),Zr(e),ei(e)}ci(Gr),Object.defineProperty(Gr.prototype,"$isServer",{get:le}),Object.defineProperty(Gr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Gr,"FunctionalRenderContext",{value:Zn}),Gr.version=un;var ui=y("style,class"),li=y("input,textarea,option,select,progress"),hi=function(e,t,n){return"value"===n&&li(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},di=y("contenteditable,draggable,spellcheck"),fi=y("events,caret,typing,plaintext-only"),pi=function(e,t){return yi(t)||"false"===t?"false":"contenteditable"===e&&fi(t)?t:"true"},mi=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),vi="http://www.w3.org/1999/xlink",gi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},_i=function(e){return gi(e)?e.slice(6,e.length):""},yi=function(e){return null==e||!1===e};function bi(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=wi(r.data,t));while(s(n=n.parent))n&&n.data&&(t=wi(t,n.data));return Ci(t.staticClass,t.class)}function wi(e,t){return{staticClass:ki(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Ci(e,t){return s(e)||s(t)?ki(e,Ei(t)):""}function ki(e,t){return e?t?e+" "+t:e:t||""}function Ei(e){return Array.isArray(e)?Ii(e):h(e)?Ti(e):"string"===typeof e?e:""}function Ii(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=Ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Ti(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Si={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Oi=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),xi=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(e){return Oi(e)||xi(e)};function Ri(e){return xi(e)?"svg":"math"===e?"math":void 0}var Ni=Object.create(null);function Ai(e){if(!X)return!0;if(Pi(e))return!1;if(e=e.toLowerCase(),null!=Ni[e])return Ni[e];var t=document.createElement(e);return e.indexOf("-")>-1?Ni[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Ni[e]=/HTMLUnknownElement/.test(t.toString())}var Li=y("text,number,password,search,email,tel,url");function Mi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Di(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(e,t){return document.createElementNS(Si[e],t)}function ji(e){return document.createTextNode(e)}function Fi(e){return document.createComment(e)}function Ui(e,t,n){e.insertBefore(t,n)}function qi(e,t){e.removeChild(t)}function Vi(e,t){e.appendChild(t)}function zi(e){return e.parentNode}function Hi(e){return e.nextSibling}function Bi(e){return e.tagName}function Wi(e,t){e.textContent=t}function Ki(e,t){e.setAttribute(t,"")}var Gi=Object.freeze({__proto__:null,createElement:Di,createElementNS:$i,createTextNode:ji,createComment:Fi,insertBefore:Ui,removeChild:qi,appendChild:Vi,parentNode:zi,nextSibling:Hi,tagName:Bi,setTextContent:Wi,setStyleScope:Ki}),Yi={create:function(e,t){Ji(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ji(e,!0),Ji(t))},destroy:function(e){Ji(e,!0)}};function Ji(e,t){var n=e.data.ref;if(s(n)){var r=e.context,o=e.componentInstance||e.elm,a=t?null:o,c=t?void 0:o;if(l(n))Kt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=ze(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&w(p,o):i(p)?p.includes(o)||p.push(o):h?(f[n]=[o],Zi(r,n,f[n])):n.value=[o]}else if(h){if(t&&f[n]!==o)return;f[n]=c,Zi(r,n,a)}else if(d){if(t&&n.value!==o)return;n.value=a}else 0}}}function Zi(e,t,n){var r=e._setupState;r&&k(r,t)&&(ze(r[t])?r[t].value=n:r[t]=n)}var Qi=new ge("",{},[]),Xi=["create","activate","update","remove","destroy"];function eo(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&to(e,t)||a(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function to(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||Li(r)&&Li(i)}function no(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function ro(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<Xi.length;++t)for(r[Xi[t]]=[],n=0;n<c.length;++n)s(c[n][Xi[t]])&&r[Xi[t]].push(c[n][Xi[t]]);function h(e){return new ge(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,o,c){if(s(e.elm)&&s(o)&&(e=o[c]=be(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),k(e),b(e,h,t),s(u)&&C(e,t),_(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),_(n,e.elm,r)):(e.elm=l.createTextNode(e.text),_(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(s(i)){var o=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return v(e,t),_(n,e.elm,r),a(o)&&g(e,t,n,r),!0}}function v(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(C(e,t),k(e)):(Ji(e),t.push(e))}function g(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](Qi,a);t.push(a);break}_(n,e.elm,i)}function _(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function b(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function C(e,n){for(var i=0;i<r.create.length;++i)r.create[i](Qi,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(Qi,e),s(t.insert)&&n.push(e))}function k(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}s(t=Cn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function E(e,t,n,r,i,o){for(;r<=i;++r)p(n[r],o,e,t,!1,n,r)}function I(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)I(e.children[n])}function T(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(S(r),I(r)):f(r.elm))}}function S(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=d(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&S(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else f(e.elm)}function O(e,t,n,r,i){var a,c,u,h,d=0,f=0,m=t.length-1,v=t[0],g=t[m],_=n.length-1,y=n[0],b=n[_],w=!i;while(d<=m&&f<=_)o(v)?v=t[++d]:o(g)?g=t[--m]:eo(v,y)?(P(v,y,r,n,f),v=t[++d],y=n[++f]):eo(g,b)?(P(g,b,r,n,_),g=t[--m],b=n[--_]):eo(v,b)?(P(v,b,r,n,_),w&&l.insertBefore(e,v.elm,l.nextSibling(g.elm)),v=t[++d],b=n[--_]):eo(g,y)?(P(g,y,r,n,f),w&&l.insertBefore(e,g.elm,v.elm),g=t[--m],y=n[++f]):(o(a)&&(a=no(t,d,m)),c=s(y.key)?a[y.key]:x(y,t,d,m),o(c)?p(y,r,e,v.elm,!1,n,f):(u=t[c],eo(u,y)?(P(u,y,r,n,f),t[c]=void 0,w&&l.insertBefore(e,u.elm,v.elm)):p(y,r,e,v.elm,!1,n,f)),y=n[++f]);d>m?(h=o(n[_+1])?null:n[_+1].elm,E(e,h,n,f,_,r)):f>_&&T(t,d,m)}function x(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&eo(e,o))return i}}function P(e,t,n,i,c,u){if(e!==t){s(t.elm)&&s(i)&&(t=i[c]=be(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?A(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(s(f)&&w(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);s(d=f.hook)&&s(d=d.update)&&d(e,t)}o(t.text)?s(p)&&s(m)?p!==m&&O(h,p,m,n,u):s(m)?(s(e.text)&&l.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):s(p)?T(p,0,p.length-1):s(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(e,t)}}}function R(e,t,n){if(a(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var N=y("attrs,class,staticClass,staticStyle,key");function A(e,t,n,r){var i,o=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return v(t,n),!0;if(s(o)){if(s(u))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!A(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(s(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,C(t,n);break}!f&&c["class"]&&hn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,u=[];if(o(e))c=!0,p(t,u);else{var d=s(e.nodeType);if(!d&&eo(e,t))P(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(z)&&(e.removeAttribute(z),n=!0),a(n)&&A(e,t,u))return R(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),s(t.parent)){var v=t.parent,g=w(t);while(v){for(var _=0;_<r.destroy.length;++_)r.destroy[_](v);if(v.elm=t.elm,g){for(var y=0;y<r.create.length;++y)r.create[y](Qi,v);var b=v.data.hook.insert;if(b.merged)for(var C=1;C<b.fns.length;C++)b.fns[C]()}else Ji(v);v=v.parent}}s(m)?T([e],0,0):s(e.tag)&&I(e)}}return R(t,u,c),t.elm}s(e)&&I(e)}}var io={create:oo,update:oo,destroy:function(e){oo(e,Qi)}};function oo(e,t){(e.data.directives||t.data.directives)&&so(e,t)}function so(e,t){var n,r,i,o=e===Qi,s=t===Qi,a=co(e.data.directives,e.context),c=co(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,lo(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(lo(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)lo(u[n],"inserted",t,e)};o?Xe(t,"insert",h):h()}if(l.length&&Xe(t,"postpatch",(function(){for(var n=0;n<l.length;n++)lo(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||lo(a[n],"unbind",e,e,s)}var ao=Object.create(null);function co(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=ao),i[uo(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||wr(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||wr(t.$options,"directives",r.name,!0)}return i}function uo(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function lo(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Ys){Wt(Ys,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var ho=[Yi,io];function fo(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&po(u,r,i,t.data.pre);for(r in(te||re)&&h.value!==l.value&&po(u,"value",h.value),l)o(h[r])&&(gi(r)?u.removeAttributeNS(vi,_i(r)):di(r)||u.removeAttribute(r))}}function po(e,t,n,r){r||e.tagName.indexOf("-")>-1?mo(e,t,n):mi(t)?yi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):di(t)?e.setAttribute(t,pi(t,n)):gi(t)?yi(n)?e.removeAttributeNS(vi,_i(t)):e.setAttributeNS(vi,t,n):mo(e,t,n)}function mo(e,t,n){if(yi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var vo={create:fo,update:fo};function go(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=bi(t),c=n._transitionClasses;s(c)&&(a=ki(a,Ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _o,yo={create:go,update:go},bo="__r",wo="__c";function Co(e){if(s(e[bo])){var t=te?"change":"input";e[t]=[].concat(e[bo],e[t]||[]),delete e[bo]}s(e[wo])&&(e.change=[].concat(e[wo],e.change||[]),delete e[wo])}function ko(e,t,n){var r=_o;return function i(){var o=t.apply(null,arguments);null!==o&&To(e,i,n,r)}}var Eo=Zt&&!(se&&Number(se[1])<=53);function Io(e,t,n,r){if(Eo){var i=Fn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}_o.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function To(e,t,n,r){(r||_o).removeEventListener(e,t._wrapper||t,n)}function So(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};_o=t.elm||e.elm,Co(n),Qe(n,r,Io,To,ko,t.context),_o=void 0}}var Oo,xo={create:So,update:So,destroy:function(e){return So(e,Qi)}};function Po(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Ro(i,l)&&(i.value=l)}else if("innerHTML"===n&&xi(i.tagName)&&o(i.innerHTML)){Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>".concat(r,"</svg>");var h=Oo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Ys){}}}}function Ro(e,t){return!e.composing&&("OPTION"===e.tagName||No(e,t)||Ao(e,t))}function No(e,t){var n=!0;try{n=document.activeElement!==e}catch(Ys){}return n&&e.value!==t}function Ao(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return _(n)!==_(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Lo={create:Po,update:Po},Mo=E((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function Do(e){var t=$o(e.style);return e.staticStyle?L(e.staticStyle,t):t}function $o(e){return Array.isArray(e)?M(e):"string"===typeof e?Mo(e):e}function jo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Do(i.data))&&L(r,n)}(n=Do(e.data))&&L(r,n);var o=e;while(o=o.parent)o.data&&(n=Do(o.data))&&L(r,n);return r}var Fo,Uo=/^--/,qo=/\s*!important$/,Vo=function(e,t,n){if(Uo.test(t))e.style.setProperty(t,n);else if(qo.test(n))e.style.setProperty(x(t),n.replace(qo,""),"important");else{var r=Ho(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},zo=["Webkit","Moz","ms"],Ho=E((function(e){if(Fo=Fo||document.createElement("div").style,e=T(e),"filter"!==e&&e in Fo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<zo.length;n++){var r=zo[n]+t;if(r in Fo)return r}}));function Bo(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=$o(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?L({},d):d;var f=jo(t,!0);for(a in h)o(f[a])&&Vo(c,a,"");for(a in f)i=f[a],i!==h[a]&&Vo(c,a,null==i?"":i)}}var Wo={create:Bo,update:Bo},Ko=/\s+/;function Go(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ko).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Yo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ko).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Jo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&L(t,Zo(e.name||"v")),L(t,e),t}return"string"===typeof e?Zo(e):void 0}}var Zo=E((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),Qo=X&&!ne,Xo="transition",es="animation",ts="transition",ns="transitionend",rs="animation",is="animationend";Qo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ts="WebkitTransition",ns="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(rs="WebkitAnimation",is="webkitAnimationEnd"));var os=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ss(e){os((function(){os(e)}))}function as(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Go(e,t))}function cs(e,t){e._transitionClasses&&w(e._transitionClasses,t),Yo(e,t)}function us(e,t,n){var r=hs(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Xo?ns:is,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var ls=/\b(transform|all)(,|$)/;function hs(e,t){var n,r=window.getComputedStyle(e),i=(r[ts+"Delay"]||"").split(", "),o=(r[ts+"Duration"]||"").split(", "),s=ds(i,o),a=(r[rs+"Delay"]||"").split(", "),c=(r[rs+"Duration"]||"").split(", "),u=ds(a,c),l=0,h=0;t===Xo?s>0&&(n=Xo,l=s,h=o.length):t===es?u>0&&(n=es,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?Xo:es:null,h=n?n===Xo?o.length:c.length:0);var d=n===Xo&&ls.test(r[ts+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function ds(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return fs(t)+fs(e[n])})))}function fs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ps(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Jo(e.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,v=r.beforeEnter,g=r.enter,y=r.afterEnter,b=r.enterCancelled,w=r.beforeAppear,C=r.appear,k=r.afterAppear,E=r.appearCancelled,I=r.duration,T=Cn,S=Cn.$vnode;while(S&&S.parent)T=S.context,S=S.parent;var O=!T._isMounted||!e.isRootInsert;if(!O||C||""===C){var x=O&&f?f:c,P=O&&m?m:d,R=O&&p?p:u,N=O&&w||v,A=O&&l(C)?C:g,L=O&&k||y,M=O&&E||b,D=_(h(I)?I.enter:I);0;var $=!1!==i&&!ne,j=gs(A),F=n._enterCb=q((function(){$&&(cs(n,R),cs(n,P)),F.cancelled?($&&cs(n,x),M&&M(n)):L&&L(n),n._enterCb=null}));e.data.show||Xe(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),A&&A(n,F)})),N&&N(n),$&&(as(n,x),as(n,P),ss((function(){cs(n,x),F.cancelled||(as(n,R),j||(vs(D)?setTimeout(F,D):us(n,a,F)))}))),e.data.show&&(t&&t(),A&&A(n,F)),$||j||F()}}}function ms(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Jo(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,g=r.duration,y=!1!==i&&!ne,b=gs(f),w=_(h(g)?g.leave:g);0;var C=n._leaveCb=q((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(cs(n,u),cs(n,l)),C.cancelled?(y&&cs(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(k):k()}function k(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(as(n,c),as(n,l),ss((function(){cs(n,c),C.cancelled||(as(n,u),b||(vs(w)?setTimeout(C,w):us(n,a,C)))}))),f&&f(n,C),y||b||C())}}function vs(e){return"number"===typeof e&&!isNaN(e)}function gs(e){if(o(e))return!1;var t=e.fns;return s(t)?gs(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function _s(e,t){!0!==t.data.show&&ps(t)}var ys=X?{create:_s,activate:_s,remove:function(e,t){!0!==e.data.show?ms(e,t):t()}}:{},bs=[vo,yo,xo,Lo,Wo,ys],ws=bs.concat(ho),Cs=ro({nodeOps:Gi,modules:ws});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Ps(e,"input")}));var ks={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Xe(n,"postpatch",(function(){ks.componentUpdated(e,t,n)})):Es(e,t,n.context),e._vOptions=[].map.call(e.options,Ss)):("textarea"===n.tag||Li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Os),e.addEventListener("compositionend",xs),e.addEventListener("change",xs),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Es(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ss);if(i.some((function(e,t){return!F(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return Ts(e,i)})):t.value!==t.oldValue&&Ts(t.value,i);o&&Ps(e,"change")}}}};function Es(e,t,n){Is(e,t,n),(te||re)&&setTimeout((function(){Is(e,t,n)}),0)}function Is(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=U(r,Ss(s))>-1,s.selected!==o&&(s.selected=o);else if(F(Ss(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Ts(e,t){return t.every((function(t){return!F(t,e)}))}function Ss(e){return"_value"in e?e._value:e.value}function Os(e){e.target.composing=!0}function xs(e){e.target.composing&&(e.target.composing=!1,Ps(e.target,"input"))}function Ps(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Rs(e){return!e.componentInstance||e.data&&e.data.transition?e:Rs(e.componentInstance._vnode)}var Ns={bind:function(e,t,n){var r=t.value;n=Rs(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,ps(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Rs(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ps(n,(function(){e.style.display=e.__vOriginalDisplay})):ms(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},As={model:ks,show:Ns},Ls={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ms(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Ms(Ft(t.children)):e}function Ds(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[T(r)]=i[r];return t}function $s(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function js(e){while(e=e.parent)if(e.data.transition)return!0}function Fs(e,t){return t.key===e.key&&t.tag===e.tag}var Us=function(e){return e.tag||kt(e)},qs=function(e){return"show"===e.name},Vs={name:"transition",props:Ls,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Us),n.length)){0;var r=this.mode;0;var i=n[0];if(js(this.$vnode))return i;var o=Ms(i);if(!o)return i;if(this._leaving)return $s(e,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Ds(this),c=this._vnode,l=Ms(c);if(o.data.directives&&o.data.directives.some(qs)&&(o.data.show=!0),l&&l.data&&!Fs(o,l)&&!kt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,Xe(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),$s(e,i);if("in-out"===r){if(kt(o))return c;var d,f=function(){d()};Xe(a,"afterEnter",f),Xe(a,"enterCancelled",f),Xe(h,"delayLeave",(function(e){d=e}))}}return i}}},zs=L({tag:String,moveClass:String},Ls);delete zs.mode;var Hs={props:zs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=kn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Ds(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Bs),e.forEach(Ws),e.forEach(Ks),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;as(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ns,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ns,e),n._moveCb=null,cs(n,t))})}})))},methods:{hasMove:function(e,t){if(!Qo)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Yo(n,e)})),Go(n,t),n.style.display="none",this.$el.appendChild(n);var r=hs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Bs(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ws(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ks(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Gs={Transition:Vs,TransitionGroup:Hs};Gr.config.mustUseProp=hi,Gr.config.isReservedTag=Pi,Gr.config.isReservedAttr=ui,Gr.config.getTagNamespace=Ri,Gr.config.isUnknownElement=Ai,L(Gr.options.directives,As),L(Gr.options.components,Gs),Gr.prototype.__patch__=X?Cs:D,Gr.prototype.$mount=function(e,t){return e=e&&X?Mi(e):void 0,Tn(this,e,t)},X&&setTimeout((function(){W.devtools&&he&&he.emit("init",Gr)}),0)},8620:function(e,t,n){"use strict";t.ZP=void 0;var r=n(2584),i=n(8413);function o(e){return u(e)||c(e)||a(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var m=function(){return null},v=function(e,t,n){return e.reduce((function(e,r){return e[n?n(r):r]=t(r),e}),{})};function g(e){return"function"===typeof e}function _(e){return null!==e&&("object"===p(e)||g(e))}function y(e){return _(e)&&g(e.then)}var b=function(e,t,n,r){if("function"===typeof n)return n.call(e,t,r);n=Array.isArray(n)?n:n.split(".");for(var i=0;i<n.length;i++){if(!t||"object"!==p(t))return r;t=t[n[i]]}return"undefined"===typeof t?r:t},w="__isVuelidateAsyncVm";function C(e,t){var n=new e({data:{p:!0,v:!1}});return t.then((function(e){n.p=!1,n.v=e}),(function(e){throw n.p=!1,n.v=!1,e})),n[w]=!0,n}var k={$invalid:function(){var e=this,t=this.proxy;return this.nestedKeys.some((function(t){return e.refProxy(t).$invalid}))||this.ruleKeys.some((function(e){return!t[e]}))},$dirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(t){return e.refProxy(t).$dirty}))},$anyDirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(t){return e.refProxy(t).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var e=this;return!!this.$error||this.nestedKeys.some((function(t){return e.refProxy(t).$anyError}))},$pending:function(){var e=this;return this.ruleKeys.some((function(t){return e.getRef(t).$pending}))||this.nestedKeys.some((function(t){return e.refProxy(t).$pending}))},$params:function(){var e=this,t=this.validations;return d(d({},v(this.nestedKeys,(function(e){return t[e]&&t[e].$params||null}))),v(this.ruleKeys,(function(t){return e.getRef(t).$params})))}};function E(e){this.dirty=e;var t=this.proxy,n=e?"$touch":"$reset";this.nestedKeys.forEach((function(e){t[e][n]()}))}var I={$touch:function(){E.call(this,!0)},$reset:function(){E.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var n in this.$params)if(this.isNested(n)){for(var r=e[n].$flattenParams(),i=0;i<r.length;i++)r[i].path.unshift(n);t=t.concat(r)}else t.push({path:[],name:n,params:this.$params[n]});return t}},T=Object.keys(k),S=Object.keys(I),O=null,x=function(e){if(O)return O;var t=e.extend({computed:{refs:function(){var e=this._vval;this._vval=this.children,(0,r.patchChildren)(e,this._vval);var t={};return this._vval.forEach((function(e){t[e.key]=e.vm})),t}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(e){var t=this.getModel();if(t)return t[e]},hasIter:function(){return!1}}}),n=t.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(t){var n=this.getModel();(0,i.pushParams)();var r=this.rule.call(this.rootModel,n,t),o=y(r)?C(e,r):r,s=(0,i.popParams)(),a=s&&s.$sub?s.$sub.length>1?s:s.$sub[0]:null;return{output:o,params:a}}},computed:{run:function(){var e=this,t=this.lazyParentModel(),n=Array.isArray(t)&&t.__ob__;if(n){var r=t.__ob__.dep;r.depend();var i=r.constructor.target;if(!this._indirectWatcher){var o=i.constructor;this._indirectWatcher=new o(this,(function(){return e.runRule(t)}),null,{lazy:!0})}var s=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===s)return this._indirectWatcher.depend(),i.value;this._lastModel=s,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e[w]?!!e.v:!!e},$pending:function(){var e=this.run.output;return!!e[w]&&e.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),s=t.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:d(d({},I),{},{refProxy:function(e){return this.getRef(e).proxy},getRef:function(e){return this.refs[e]},isNested:function(e){return"function"!==typeof this.validations[e]}}),computed:d(d({},k),{},{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter((function(t){return!e.isNested(t)}))},keys:function(){return Object.keys(this.validations).filter((function(e){return"$params"!==e}))},proxy:function(){var e=this,t=v(this.keys,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e.refProxy(t)}}})),n=v(T,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e[t]}}})),r=v(S,(function(t){return{enumerable:!1,configurable:!0,get:function(){return e[t]}}})),i=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},d({},t))}}:{};return Object.defineProperties({},d(d(d(d({},t),i),{},{$model:{enumerable:!0,get:function(){var t=e.lazyParentModel();return null!=t?t[e.prop]:null},set:function(t){var n=e.lazyParentModel();null!=n&&(n[e.prop]=t,e.$touch())}}},n),r))},children:function(){var e=this;return[].concat(o(this.nestedKeys.map((function(t){return u(e,t)}))),o(this.ruleKeys.map((function(t){return l(e,t)})))).filter(Boolean)}})}),a=s.extend({methods:{isNested:function(e){return"undefined"!==typeof this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}}}),c=s.extend({computed:{keys:function(){var e=this.getModel();return _(e)?Object.keys(e):[]},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(n){return"".concat(b(e.rootModel,e.getModelKey(n),t))}:function(e){return"".concat(e)}},getModelLazy:function(){var e=this;return function(){return e.getModel()}},children:function(){var e=this,t=this.validations,n=this.getModel(),i=d({},t);delete i["$trackBy"];var o={};return this.keys.map((function(t){var a=e.tracker(t);return o.hasOwnProperty(a)?null:(o[a]=!0,(0,r.h)(s,a,{validations:i,prop:t,lazyParentModel:e.getModelLazy,model:n[t],rootModel:e.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(e){return this.refs[this.tracker(e)]},hasIter:function(){return!0}}}),u=function(e,t){if("$each"===t)return(0,r.h)(c,t,{validations:e.validations[t],lazyParentModel:e.lazyParentModel,prop:t,lazyModel:e.getModel,rootModel:e.rootModel});var n=e.validations[t];if(Array.isArray(n)){var i=e.rootModel,o=v(n,(function(e){return function(){return b(i,i.$v,e)}}),(function(e){return Array.isArray(e)?e.join("."):e}));return(0,r.h)(a,t,{validations:o,lazyParentModel:m,prop:t,lazyModel:m,rootModel:i})}return(0,r.h)(s,t,{validations:n,lazyParentModel:e.getModel,prop:t,lazyModel:e.getModelKey,rootModel:e.rootModel})},l=function(e,t){return(0,r.h)(n,t,{rule:e.validations[t],lazyParentModel:e.lazyParentModel,lazyModel:e.getModel,rootModel:e.rootModel})};return O={VBase:t,Validation:s},O},P=null;function R(e){if(P)return P;var t=e.constructor;while(t.super)t=t.super;return P=t,t}var N=function(e,t){var n=R(e),i=x(n),o=i.Validation,s=i.VBase,a=new s({computed:{children:function(){var n="function"===typeof t?t.call(e):t;return[(0,r.h)(o,"$v",{validations:n,lazyParentModel:m,prop:"$v",model:e,rootModel:e})]}}});return a},A={data:function(){var e=this.$options.validations;return e&&(this._vuelidate=N(this,e)),{}},beforeCreate:function(){var e=this.$options,t=e.validations;t&&(e.computed||(e.computed={}),e.computed.$v||(e.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function L(e){e.mixin(A)}var M=L;t.ZP=M},8413:function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t._setTarget=void 0,t.popParams=l,t.pushParams=u,t.target=void 0,t.withParams=p;var s=[],a=null;t.target=a;var c=function(e){t.target=a=e};function u(){null!==a&&s.push(a),t.target=a={}}function l(){var e=a,n=t.target=a=s.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(e)),e}function h(e){if("object"!==o(e)||Array.isArray(e))throw new Error("params must be an object");t.target=a=r(r({},a),e)}function d(e,t){return f((function(n){return function(){n(e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t.apply(this,i)}}))}function f(e){var t=e(h);return function(){u();try{for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(this,n)}finally{l()}}}function p(e,t){return"object"===o(e)&&void 0!==t?d(e,t):f(e)}t._setTarget=c},2584:function(e,t){"use strict";function n(e){return null===e||void 0===e}function r(e){return null!==e&&void 0!==e}function i(e,t){return t.tag===e.tag&&t.key===e.key}function o(e){var t=e.tag;e.vm=new t({data:e.args})}function s(e){for(var t=Object.keys(e.args),n=0;n<t.length;n++)t.forEach((function(t){e.vm[t]=e.args[t]}))}function a(e,t,n){var i,o,s={};for(i=t;i<=n;++i)o=e[i].key,r(o)&&(s[o]=i);return s}function c(e,t){var s,c,d,f=0,p=0,m=e.length-1,v=e[0],g=e[m],_=t.length-1,y=t[0],b=t[_];while(f<=m&&p<=_)n(v)?v=e[++f]:n(g)?g=e[--m]:i(v,y)?(h(v,y),v=e[++f],y=t[++p]):i(g,b)?(h(g,b),g=e[--m],b=t[--_]):i(v,b)?(h(v,b),v=e[++f],b=t[--_]):i(g,y)?(h(g,y),g=e[--m],y=t[++p]):(n(s)&&(s=a(e,f,m)),c=r(y.key)?s[y.key]:null,n(c)?(o(y),y=t[++p]):(d=e[c],i(d,y)?(h(d,y),e[c]=void 0,y=t[++p]):(o(y),y=t[++p])));f>m?u(t,p,_):p>_&&l(e,f,m)}function u(e,t,n){for(;t<=n;++t)o(e[t])}function l(e,t,n){for(;t<=n;++t){var i=e[t];r(i)&&(i.vm.$destroy(),i.vm=null)}}function h(e,t){e!==t&&(t.vm=e.vm,s(t))}function d(e,t){r(e)&&r(t)?e!==t&&c(e,t):r(t)?u(t,0,t.length-1):r(e)&&l(e,0,e.length-1)}function f(e,t,n){return{tag:e,key:t,args:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.h=f,t.patchChildren=d},629:function(e,t,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}n.d(t,{Se:function(){return M},nv:function(){return D},rn:function(){return A}});var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var m=function(e){this.register([],e,!1)};function v(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;v(e.concat(r),t.getChild(r),n.modules[r])}}m.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},m.prototype.update=function(e){v([],this.root,e)},m.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var _=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;k(this,u,[],this._modules.root),C(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:g.config.devtools;l&&s(this)},y={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function w(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;k(e,n,[],e._modules.root,!0),C(e,n,t)}function C(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:o}),g.config.silent=s,e.strict&&x(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function k(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=P(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=E(e,s,n);r.forEachMutation((function(t,n){var r=s+n;T(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;S(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;O(e,r,t,u)})),r.forEachChild((function(r,o){k(e,t,n.concat(o),r,i)}))}function E(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return I(e,t)}},state:{get:function(){return P(e.state,n)}}}),i}function I(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function T(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function S(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function O(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function x(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function P(e,t){return t.reduce((function(e,t){return e[t]}),e)}function R(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function N(e){g&&e===g||(g=e,r(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(e){0},_.prototype.commit=function(e,t,n){var r=this,i=R(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},_.prototype.dispatch=function(e,t){var n=this,r=R(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},_.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},_.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},_.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},_.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},_.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),k(this,this.state,e,this._modules.get(e),n.preserveState),C(this,this.state)},_.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=P(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),w(this)},_.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},_.prototype.hotUpdate=function(e){this._modules.update(e),w(this,!0)},_.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(_.prototype,y);var A=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=q(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),L=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=q(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),M=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||q(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),D=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=q(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),$=function(e){return{mapState:A.bind(null,e),mapGetters:M.bind(null,e),mapMutations:L.bind(null,e),mapActions:D.bind(null,e)}};function j(e){return F(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function F(e){return Array.isArray(e)||l(e)}function U(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function q(e,t,n){var r=e._modulesNamespaceMap[n];return r}function V(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,o){var s=c(o);if(n(e,h,s)){var a=B(),u=i(e),d="mutation "+e.type+a;z(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=B(),i=s(e),a="action "+e.type+r;z(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function z(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function H(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function B(){var e=new Date;return" @ "+K(e.getHours(),2)+":"+K(e.getMinutes(),2)+":"+K(e.getSeconds(),2)+"."+K(e.getMilliseconds(),3)}function W(e,t){return new Array(t+1).join(e)}function K(e,t){return W("0",t-e.toString().length)+e}var G={Store:_,install:N,version:"3.6.2",mapState:A,mapMutations:L,mapGetters:M,mapActions:D,createNamespacedHelpers:$,createLogger:V};t["ZP"]=G},5816:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return le},Mq:function(){return ge},ZF:function(){return ve},KN:function(){return _e}});var r=n(8463),i=n(3333),o=n(4444);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(C(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let _={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){_=e(_)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(k(this),t),C(h.get(this))}:function(...t){return C(e.apply(k(this),t))}:function(t,...n){const r=e.call(k(this),t,...n);return f.set(r,t.sort?t.sort():[t]),C(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,_):e)}function C(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const k=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=C(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(C(s.result),e.oldVersion,e.newVersion,C(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],S=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return S.set(t,o),o}y((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",N="0.7.31",A=new i.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",D="@firebase/analytics",$="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",U="@firebase/auth-compat",q="@firebase/database",V="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",B="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",Z="@firebase/remote-config",Q="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.9.3",oe="[DEFAULT]",se={[R]:"fire-core",[L]:"fire-core-compat",[D]:"fire-analytics",[M]:"fire-analytics-compat",[j]:"fire-app-check",[$]:"fire-app-check-compat",[F]:"fire-auth",[U]:"fire-auth-compat",[q]:"fire-rtdb",[V]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[B]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[Z]:"fire-rc",[Q]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ve(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw fe.create("bad-app-name",{appName:String(i)});const s=ae.get(i);if(s){if((0,o.vZ)(e,s.options)&&(0,o.vZ)(n,s.config))return s;throw fe.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ce.values())a.addComponent(r);const c=new pe(e,n,a);return ae.set(i,c),c}function ge(e=oe){const t=ae.get(e);if(!t)throw fe.create("no-app",{appName:e});return t}function _e(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}le(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ce=null;function ke(){return Ce||(Ce=E(ye,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Ee(e){var t;try{const t=await ke();return t.transaction(we).objectStore(we).get(Te(e))}catch(n){if(n instanceof o.ZR)A.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});A.warn(e.message)}}}async function Ie(e,t){var n;try{const n=await ke(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Te(e)),r.done}catch(r){if(r instanceof o.ZR)A.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});A.warn(e.message)}}}function Te(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,Oe=2592e6;class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=Se){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ae(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ae(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ae(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){le(new r.wA("platform-logger",(e=>new x(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new xe(e)),"PRIVATE")),_e(R,N,e),_e(R,N,"esm2017"),_e("fire-js","")}Le("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.3d7da3af.js.map