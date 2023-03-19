(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="146",Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},go=0,_s=1,_o=2,Ba=1,xo=2,Mi=3,li=0,Ft=1,gt=2,pn=0,si=1,xs=2,vs=3,Ms=4,vo=5,ii=100,Mo=101,yo=102,ys=103,Ss=104,So=200,bo=201,wo=202,Eo=203,za=204,Ga=205,To=206,Ao=207,Lo=208,Co=209,Do=210,Ro=0,Po=1,Fo=2,Zr=3,Io=4,Uo=5,No=6,Oo=7,Va=0,Bo=1,zo=2,tn=0,Go=1,Vo=2,Ho=3,Wo=4,ko=5,Ha=300,ci=301,ui=302,$r=303,Kr=304,sr=306,Jr=1e3,zt=1001,Qr=1002,vt=1003,bs=1004,ws=1005,Ct=1006,Xo=1007,ar=1008,Dn=1009,qo=1010,Yo=1011,Wa=1012,jo=1013,En=1014,Tn=1015,wi=1016,Zo=1017,$o=1018,ai=1020,Ko=1021,Jo=1022,Gt=1023,Qo=1024,el=1025,Ln=1026,hi=1027,tl=1028,nl=1029,il=1030,rl=1031,sl=1033,pr=33776,mr=33777,gr=33778,_r=33779,Es=35840,Ts=35841,As=35842,Ls=35843,al=36196,Cs=37492,Ds=37496,Rs=37808,Ps=37809,Fs=37810,Is=37811,Us=37812,Ns=37813,Os=37814,Bs=37815,zs=37816,Gs=37817,Vs=37818,Hs=37819,Ws=37820,ks=37821,Xs=36492,Rn=3e3,Ke=3001,ol=3200,ll=3201,cl=0,ul=1,Jt="srgb",An="srgb-linear",xr=7680,hl=519,qs=35044,Ys="300 es",es=1035;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,js=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[s&255]+ht[s>>8&255]+ht[s>>16&255]+ht[s>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function fl(s,e){return(s%e+e)%e}function Mr(s,e,t){return(1-t)*s+t*e}function Zs(s){return(s&s-1)===0&&s!==0}function ts(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],v=n[8],p=i[0],u=i[3],_=i[6],L=i[1],b=i[4],S=i[7],E=i[2],R=i[5],O=i[8];return r[0]=o*p+a*L+c*E,r[3]=o*u+a*b+c*R,r[6]=o*_+a*S+c*O,r[1]=l*p+h*L+f*E,r[4]=l*u+h*b+f*R,r[7]=l*_+h*S+f*O,r[2]=d*p+m*L+v*E,r[5]=d*u+m*b+v*R,r[8]=d*_+m*S+v*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,m=l*r-o*c,v=t*f+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(i*l-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ka(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const yr={[Jt]:{[An]:Cn},[An]:{[Jt]:er}},It={legacyMode:!0,get workingColorSpace(){return An},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(yr[e]&&yr[e][t]!==void 0){const n=yr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Ut={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Sr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Fi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=An){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=An){if(e=fl(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sr(o,r,e+1/3),this.g=Sr(o,r,e),this.b=Sr(o,r,e-1/3)}return It.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,It.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,It.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jt){const n=Xa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return It.fromWorkingColorSpace(Fi(this,tt),e),Mt(tt.r*255,0,255)<<16^Mt(tt.g*255,0,255)<<8^Mt(tt.b*255,0,255)<<0}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=An){It.fromWorkingColorSpace(Fi(this,tt),t);const n=tt.r,i=tt.g,r=tt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=An){return It.fromWorkingColorSpace(Fi(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=Jt){return It.fromWorkingColorSpace(Fi(this,tt),e),e!==Jt?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(Pi);const n=Mr(Ut.h,Pi.h,t),i=Mr(Ut.s,Pi.s,t),r=Mr(Ut.l,Pi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ye.NAMES=Xa;let Hn;class qa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=rr("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ya{constructor(e=null){this.isSource=!0,this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(br(i[o].image)):r.push(br(i[o]))}else r=br(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function br(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dl=0;class Wt extends Nn{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=zt,i=zt,r=Ct,o=ar,a=Gt,c=Dn,l=1,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dl++}),this.uuid=Ai(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ha)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ha;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],v=c[9],p=c[2],u=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-p)<.01&&Math.abs(v-u)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+p)<.1&&Math.abs(v+u)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(m+1)/2,E=(_+1)/2,R=(h+d)/4,O=(f+p)/4,M=(v+u)/4;return b>S&&b>E?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=O/n):S>E?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=M/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=O/r,i=M/r),this.set(n,i,r,t),this}let L=Math.sqrt((u-v)*(u-v)+(f-p)*(f-p)+(d-h)*(d-h));return Math.abs(L)<.001&&(L=1),this.x=(u-v)/L,this.y=(f-p)/L,this.z=(d-h)/L,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pn extends Nn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pl extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const d=r[o+0],m=r[o+1],v=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(f!==p||c!==d||l!==m||h!==v){let u=1-a;const _=c*d+l*m+h*v+f*p,L=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const E=Math.sqrt(b),R=Math.atan2(E,_*L);u=Math.sin(u*R)/E,a=Math.sin(a*R)/E}const S=a*L;if(c=c*u+d*S,l=l*u+m*S,h=h*u+v*S,f=f*u+p*S,u===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=E,l*=E,h*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[o],d=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+h*f+c*m-l*d,e[t+1]=c*v+h*d+l*f-a*m,e[t+2]=l*v+h*m+a*d-c*f,e[t+3]=h*v-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(r/2),d=c(n/2),m=c(i/2),v=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*m*v,this._y=l*m*f-d*h*v,this._z=l*h*v+d*m*f,this._w=l*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+l*m*v,this._y=l*m*f-d*h*v,this._z=l*h*v-d*m*f,this._w=l*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-l*m*v,this._y=l*m*f+d*h*v,this._z=l*h*v+d*m*f,this._w=l*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-l*m*v,this._y=l*m*f+d*h*v,this._z=l*h*v-d*m*f,this._w=l*h*f+d*m*v;break;case"YZX":this._x=d*h*f+l*m*v,this._y=l*m*f+d*h*v,this._z=l*h*v-d*m*f,this._w=l*h*f-d*m*v;break;case"XZY":this._x=d*h*f-l*m*v,this._y=l*m*f-d*h*v,this._z=l*h*v+d*m*f,this._w=l*h*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($s.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($s.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,f=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-f*-o,this.y=h*c+d*-o+f*-r-l*-a,this.z=f*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new V,$s=new Fn;class Li{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],f=e[c+1],d=e[c+2];h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>r&&(r=h),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),f=e.getY(c),d=e.getZ(c);h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>r&&(r=h),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)vn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vn)}else n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox),Er.applyMatrix4(e.matrixWorld),this.union(Er);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Ii.subVectors(this.max,gi),Wn.subVectors(e.a,gi),kn.subVectors(e.b,gi),Xn.subVectors(e.c,gi),an.subVectors(kn,Wn),on.subVectors(Xn,kn),Mn.subVectors(Wn,Xn);let t=[0,-an.z,an.y,0,-on.z,on.y,0,-Mn.z,Mn.y,an.z,0,-an.x,on.z,0,-on.x,Mn.z,0,-Mn.x,-an.y,an.x,0,-on.y,on.x,0,-Mn.y,Mn.x,0];return!Tr(t,Wn,kn,Xn,Ii)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,Wn,kn,Xn,Ii))?!1:(Ui.crossVectors(an,on),t=[Ui.x,Ui.y,Ui.z],Tr(t,Wn,kn,Xn,Ii))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new V,new V,new V,new V,new V,new V,new V,new V],vn=new V,Er=new Li,Wn=new V,kn=new V,Xn=new V,an=new V,on=new V,Mn=new V,gi=new V,Ii=new V,Ui=new V,yn=new V;function Tr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yn.fromArray(s,r);const a=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ml=new Li,_i=new V,Ar=new V;class or{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ml.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Ar)),this.expandByPoint(_i.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new V,Lr=new V,Ni=new V,ln=new V,Cr=new V,Oi=new V,Dr=new V;class os{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lr.copy(e).add(t).multiplyScalar(.5),Ni.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ni),a=ln.dot(this.direction),c=-ln.dot(Ni),l=ln.lengthSq(),h=Math.abs(1-o*o);let f,d,m,v;if(h>0)if(f=o*c-a,d=o*a-c,v=r*h,f>=0)if(d>=-v)if(d<=v){const p=1/h;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ni).multiplyScalar(d).add(Lr),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),i=jt.dot(jt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,r){Cr.subVectors(t,e),Oi.subVectors(n,e),Dr.crossVectors(Cr,Oi);let o=this.direction.dot(Dr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,e);const c=a*this.direction.dot(Oi.crossVectors(ln,Oi));if(c<0)return null;const l=a*this.direction.dot(Cr.cross(ln));if(l<0||c+l>o)return null;const h=-a*ln.dot(Dr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,h,f,d,m,v,p,u){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=v,_[11]=p,_[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*f,v=a*h,p=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*f,v=l*h,p=l*f;t[0]=d+p*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*f,v=l*h,p=l*f;t[0]=d-p*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*f,v=a*h,p=a*f;t[0]=c*h,t[4]=v*l-m,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*h,t[4]=p-d*f,t[8]=v*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+v,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+p,t[5]=o*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*h,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gl,e,_l)}lookAt(e,t,n){const i=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),cn.crossVectors(n,Et),cn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),cn.crossVectors(n,Et)),cn.normalize(),Bi.crossVectors(Et,cn),i[0]=cn.x,i[4]=Bi.x,i[8]=Et.x,i[1]=cn.y,i[5]=Bi.y,i[9]=Et.y,i[2]=cn.z,i[6]=Bi.z,i[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],v=n[2],p=n[6],u=n[10],_=n[14],L=n[3],b=n[7],S=n[11],E=n[15],R=i[0],O=i[4],M=i[8],C=i[12],A=i[1],T=i[5],z=i[9],B=i[13],P=i[2],j=i[6],le=i[10],de=i[14],Z=i[3],N=i[7],G=i[11],ae=i[15];return r[0]=o*R+a*A+c*P+l*Z,r[4]=o*O+a*T+c*j+l*N,r[8]=o*M+a*z+c*le+l*G,r[12]=o*C+a*B+c*de+l*ae,r[1]=h*R+f*A+d*P+m*Z,r[5]=h*O+f*T+d*j+m*N,r[9]=h*M+f*z+d*le+m*G,r[13]=h*C+f*B+d*de+m*ae,r[2]=v*R+p*A+u*P+_*Z,r[6]=v*O+p*T+u*j+_*N,r[10]=v*M+p*z+u*le+_*G,r[14]=v*C+p*B+u*de+_*ae,r[3]=L*R+b*A+S*P+E*Z,r[7]=L*O+b*T+S*j+E*N,r[11]=L*M+b*z+S*le+E*G,r[15]=L*C+b*B+S*de+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],p=e[7],u=e[11],_=e[15];return v*(+r*c*f-i*l*f-r*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+u*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*h-n*l*h)+_*(-i*a*h-t*c*f+t*a*d+i*o*f-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],p=e[13],u=e[14],_=e[15],L=f*u*l-p*d*l+p*c*m-a*u*m-f*c*_+a*d*_,b=v*d*l-h*u*l-v*c*m+o*u*m+h*c*_-o*d*_,S=h*p*l-v*f*l+v*a*m-o*p*m-h*a*_+o*f*_,E=v*f*c-h*p*c-v*a*d+o*p*d+h*a*u-o*f*u,R=t*L+n*b+i*S+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=L*O,e[1]=(p*d*r-f*u*r-p*i*m+n*u*m+f*i*_-n*d*_)*O,e[2]=(a*u*r-p*c*r+p*i*l-n*u*l-a*i*_+n*c*_)*O,e[3]=(f*c*r-a*d*r-f*i*l+n*d*l+a*i*m-n*c*m)*O,e[4]=b*O,e[5]=(h*u*r-v*d*r+v*i*m-t*u*m-h*i*_+t*d*_)*O,e[6]=(v*c*r-o*u*r-v*i*l+t*u*l+o*i*_-t*c*_)*O,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*m+t*c*m)*O,e[8]=S*O,e[9]=(v*f*r-h*p*r-v*n*m+t*p*m+h*n*_-t*f*_)*O,e[10]=(o*p*r-v*a*r+v*n*l-t*p*l-o*n*_+t*a*_)*O,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*m-t*a*m)*O,e[12]=E*O,e[13]=(h*p*i-v*f*i+v*n*d-t*p*d-h*n*u+t*f*u)*O,e[14]=(v*a*i-o*p*i-v*n*c+t*p*c+o*n*u-t*a*u)*O,e[15]=(o*f*i-h*a*i+h*n*c-t*f*c-o*n*d+t*a*d)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,m=r*h,v=r*f,p=o*h,u=o*f,_=a*f,L=c*l,b=c*h,S=c*f,E=n.x,R=n.y,O=n.z;return i[0]=(1-(p+_))*E,i[1]=(m+S)*E,i[2]=(v-b)*E,i[3]=0,i[4]=(m-S)*R,i[5]=(1-(d+_))*R,i[6]=(u+L)*R,i[7]=0,i[8]=(v+b)*O,i[9]=(u-L)*O,i[10]=(1-(d+p))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qn.set(i[0],i[1],i[2]).length();const o=qn.set(i[4],i[5],i[6]).length(),a=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);const l=1/r,h=1/o,f=1/a;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=h,Nt.elements[5]*=h,Nt.elements[6]*=h,Nt.elements[8]*=f,Nt.elements[9]*=f,Nt.elements[10]*=f,t.setFromRotationMatrix(Nt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*l,m=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new V,Nt=new ot,gl=new V(0,0,0),_l=new V(1,1,1),cn=new V,Bi=new V,Et=new V,Ks=new ot,Js=new Fn;class Ci{constructor(e=0,t=0,n=0,i=Ci.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ks.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ks,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Js.setFromEuler(this),this.setFromQuaternion(Js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ci.DefaultOrder="XYZ";Ci.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xl=0;const Qs=new V,Yn=new Fn,Zt=new ot,zi=new V,xi=new V,vl=new V,Ml=new Fn,ea=new V(1,0,0),ta=new V(0,1,0),na=new V(0,0,1),yl={type:"added"},ia={type:"removed"};class nt extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new V,t=new Ci,n=new Fn,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Rt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DefaultMatrixWorldAutoUpdate,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(ea,e)}rotateY(e){return this.rotateOnAxis(ta,e)}rotateZ(e){return this.rotateOnAxis(na,e)}translateOnAxis(e,t){return Qs.copy(e).applyQuaternion(this.quaternion),this.position.add(Qs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ea,e)}translateY(e){return this.translateOnAxis(ta,e)}translateZ(e){return this.translateOnAxis(na,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zi.copy(e):zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(xi,zi,this.up):Zt.lookAt(zi,xi,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ia)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ia)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Ml,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new V(0,1,0);nt.DefaultMatrixAutoUpdate=!0;nt.DefaultMatrixWorldAutoUpdate=!0;const Ot=new V,$t=new V,Rr=new V,Kt=new V,jn=new V,Zn=new V,ra=new V,Pr=new V,Fr=new V,Ir=new V;class en{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ot.subVectors(i,t),$t.subVectors(n,t),Rr.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot($t),c=Ot.dot(Rr),l=$t.dot($t),h=$t.dot(Rr),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(l*c-a*h)*d,v=(o*h-a*c)*d;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Kt),c.set(0,0),c.addScaledVector(r,Kt.x),c.addScaledVector(o,Kt.y),c.addScaledVector(a,Kt.z),c}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),$t.subVectors(e,t),Ot.cross($t).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Ot.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return en.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;jn.subVectors(i,n),Zn.subVectors(r,n),Pr.subVectors(e,n);const c=jn.dot(Pr),l=Zn.dot(Pr);if(c<=0&&l<=0)return t.copy(n);Fr.subVectors(e,i);const h=jn.dot(Fr),f=Zn.dot(Fr);if(h>=0&&f<=h)return t.copy(i);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(jn,o);Ir.subVectors(e,r);const m=jn.dot(Ir),v=Zn.dot(Ir);if(v>=0&&m<=v)return t.copy(r);const p=m*l-c*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Zn,a);const u=h*v-m*f;if(u<=0&&f-h>=0&&m-v>=0)return ra.subVectors(r,i),a=(f-h)/(f-h+(m-v)),t.copy(i).addScaledVector(ra,a);const _=1/(u+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(jn,o).addScaledVector(Zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sl=0;class Di extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=si,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=za,this.blendDst=Ga,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qt extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new V,Gi=new Oe;class qt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Za extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $a extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bl=0;const Lt=new ot,Ur=new nt,$n=new V,Tt=new Li,vi=new Li,at=new V;class nn extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ka(e)?$a:Za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Tt.min,vi.min),Tt.expandByPoint(at),at.addVectors(Tt.max,vi.max),Tt.expandByPoint(at)):(Tt.expandByPoint(vi.min),Tt.expandByPoint(vi.max))}Tt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)at.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(at));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)at.fromBufferAttribute(a,l),c&&($n.fromBufferAttribute(e,l),at.add($n)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new V,h[A]=new V;const f=new V,d=new V,m=new V,v=new Oe,p=new Oe,u=new Oe,_=new V,L=new V;function b(A,T,z){f.fromArray(i,A*3),d.fromArray(i,T*3),m.fromArray(i,z*3),v.fromArray(o,A*2),p.fromArray(o,T*2),u.fromArray(o,z*2),d.sub(f),m.sub(f),p.sub(v),u.sub(v);const B=1/(p.x*u.y-u.x*p.y);!isFinite(B)||(_.copy(d).multiplyScalar(u.y).addScaledVector(m,-p.y).multiplyScalar(B),L.copy(m).multiplyScalar(p.x).addScaledVector(d,-u.x).multiplyScalar(B),l[A].add(_),l[T].add(_),l[z].add(_),h[A].add(L),h[T].add(L),h[z].add(L))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,T=S.length;A<T;++A){const z=S[A],B=z.start,P=z.count;for(let j=B,le=B+P;j<le;j+=3)b(n[j+0],n[j+1],n[j+2])}const E=new V,R=new V,O=new V,M=new V;function C(A){O.fromArray(r,A*3),M.copy(O);const T=l[A];E.copy(T),E.sub(O.multiplyScalar(O.dot(T))).normalize(),R.crossVectors(M,T);const B=R.dot(h[A])<0?-1:1;c[A*4]=E.x,c[A*4+1]=E.y,c[A*4+2]=E.z,c[A*4+3]=B}for(let A=0,T=S.length;A<T;++A){const z=S[A],B=z.start,P=z.count;for(let j=B,le=B+P;j<le;j+=3)C(n[j+0]),C(n[j+1]),C(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new V,r=new V,o=new V,a=new V,c=new V,l=new V,h=new V,f=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),p=e.getX(d+1),u=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,u),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,u),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h);let m=0,v=0;for(let p=0,u=c.length;p<u;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let _=0;_<h;_++)d[v++]=l[m++]}return new qt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sa=new ot,Kn=new os,Nr=new or,un=new V,hn=new V,fn=new V,Or=new V,Br=new V,zr=new V,Vi=new V,Hi=new V,Wi=new V,ki=new Oe,Xi=new Oe,qi=new Oe,Gr=new V,Yi=new V;class _t extends nt{constructor(e=new nn,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),e.ray.intersectsSphere(Nr)===!1)||(sa.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(sa),n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,v=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const _=m[p],L=i[_.materialIndex],b=Math.max(_.start,v.start),S=Math.min(a.count,Math.min(_.start+_.count,v.start+v.count));for(let E=b,R=S;E<R;E+=3){const O=a.getX(E),M=a.getX(E+1),C=a.getX(E+2);o=ji(this,L,e,Kn,c,l,h,f,d,O,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,v.start),u=Math.min(a.count,v.start+v.count);for(let _=p,L=u;_<L;_+=3){const b=a.getX(_),S=a.getX(_+1),E=a.getX(_+2);o=ji(this,i,e,Kn,c,l,h,f,d,b,S,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const _=m[p],L=i[_.materialIndex],b=Math.max(_.start,v.start),S=Math.min(c.count,Math.min(_.start+_.count,v.start+v.count));for(let E=b,R=S;E<R;E+=3){const O=E,M=E+1,C=E+2;o=ji(this,L,e,Kn,c,l,h,f,d,O,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,v.start),u=Math.min(c.count,v.start+v.count);for(let _=p,L=u;_<L;_+=3){const b=_,S=_+1,E=_+2;o=ji(this,i,e,Kn,c,l,h,f,d,b,S,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function wl(s,e,t,n,i,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==gt,a),c===null)return null;Yi.copy(a),Yi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Yi);return l<t.near||l>t.far?null:{distance:l,point:Yi.clone(),object:s}}function ji(s,e,t,n,i,r,o,a,c,l,h,f){un.fromBufferAttribute(i,l),hn.fromBufferAttribute(i,h),fn.fromBufferAttribute(i,f);const d=s.morphTargetInfluences;if(r&&d){Vi.set(0,0,0),Hi.set(0,0,0),Wi.set(0,0,0);for(let v=0,p=r.length;v<p;v++){const u=d[v],_=r[v];u!==0&&(Or.fromBufferAttribute(_,l),Br.fromBufferAttribute(_,h),zr.fromBufferAttribute(_,f),o?(Vi.addScaledVector(Or,u),Hi.addScaledVector(Br,u),Wi.addScaledVector(zr,u)):(Vi.addScaledVector(Or.sub(un),u),Hi.addScaledVector(Br.sub(hn),u),Wi.addScaledVector(zr.sub(fn),u)))}un.add(Vi),hn.add(Hi),fn.add(Wi)}s.isSkinnedMesh&&(s.boneTransform(l,un),s.boneTransform(h,hn),s.boneTransform(f,fn));const m=wl(s,e,t,n,un,hn,fn,Gr);if(m){a&&(ki.fromBufferAttribute(a,l),Xi.fromBufferAttribute(a,h),qi.fromBufferAttribute(a,f),m.uv=en.getUV(Gr,un,hn,fn,ki,Xi,qi,new Oe)),c&&(ki.fromBufferAttribute(c,l),Xi.fromBufferAttribute(c,h),qi.fromBufferAttribute(c,f),m.uv2=en.getUV(Gr,un,hn,fn,ki,Xi,qi,new Oe));const v={a:l,b:h,c:f,normal:new V,materialIndex:0};en.getNormal(un,hn,fn,v.normal),m.face=v}return m}class di extends nn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(f,2));function v(p,u,_,L,b,S,E,R,O,M,C){const A=S/O,T=E/M,z=S/2,B=E/2,P=R/2,j=O+1,le=M+1;let de=0,Z=0;const N=new V;for(let G=0;G<le;G++){const ae=G*T-B;for(let oe=0;oe<j;oe++){const W=oe*A-z;N[p]=W*L,N[u]=ae*b,N[_]=P,l.push(N.x,N.y,N.z),N[p]=0,N[u]=0,N[_]=R>0?1:-1,h.push(N.x,N.y,N.z),f.push(oe/O),f.push(1-G/M),de+=1}}for(let G=0;G<M;G++)for(let ae=0;ae<O;ae++){const oe=d+ae+j*G,W=d+ae+j*(G+1),X=d+(ae+1)+j*(G+1),K=d+(ae+1)+j*G;c.push(oe,W,K),c.push(W,X,K),Z+=6}a.addGroup(m,Z,C),m+=Z,d+=de}}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(s){const e={};for(let t=0;t<s.length;t++){const n=fi(s[t]);for(const i in n)e[i]=n[i]}return e}function El(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const Tl={clone:fi,merge:mt};var Al=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ll=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Al,this.fragmentShader=Ll,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=El(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ka extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Ka{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=90,Qn=1;class Cl extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(Jn,Qn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new V(1,0,0)),this.add(i);const r=new Dt(Jn,Qn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new V(-1,0,0)),this.add(r);const o=new Dt(Jn,Qn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new V(0,1,0)),this.add(o);const a=new Dt(Jn,Qn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new V(0,-1,0)),this.add(a);const c=new Dt(Jn,Qn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new V(0,0,1)),this.add(c);const l=new Dt(Jn,Qn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new V(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=tn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ja extends Wt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dl extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ja(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new di(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:pn});r.uniforms.tEquirect.value=t;const o=new _t(i,r),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=Ct),new Cl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Vr=new V,Rl=new V,Pl=new Rt;class Sn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vr.subVectors(n,t).cross(Rl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pl.getNormalMatrix(e),i=this.coplanarPoint(Vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new or,Zi=new V;class Qa{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],f=n[7],d=n[8],m=n[9],v=n[10],p=n[11],u=n[12],_=n[13],L=n[14],b=n[15];return t[0].setComponents(a-i,f-c,p-d,b-u).normalize(),t[1].setComponents(a+i,f+c,p+d,b+u).normalize(),t[2].setComponents(a+r,f+l,p+m,b+_).normalize(),t[3].setComponents(a-r,f-l,p-m,b-_).normalize(),t[4].setComponents(a-o,f-h,p-v,b-L).normalize(),t[5].setComponents(a+o,f+h,p+v,b+L).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zi.x=i.normal.x>0?e.max.x:e.min.x,Zi.y=i.normal.y>0?e.max.y:e.min.y,Zi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const f=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,f,d),l.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,f){const d=h.array,m=h.updateRange;s.bindBuffer(f,l),m.count===-1?s.bufferSubData(f,0,d):(t?s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,h)):f.version<l.version&&(r(f.buffer,l,h),f.version=l.version)}return{get:o,remove:a,update:c}}class lr extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=e/a,d=t/c,m=[],v=[],p=[],u=[];for(let _=0;_<h;_++){const L=_*d-o;for(let b=0;b<l;b++){const S=b*f-r;v.push(S,-L,0),p.push(0,0,1),u.push(b/a),u.push(1-_/c)}}for(let _=0;_<c;_++)for(let L=0;L<a;L++){const b=L+l*_,S=L+l*(_+1),E=L+1+l*(_+1),R=L+1+l*_;m.push(b,S,R),m.push(S,E,R)}this.setIndex(m),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(u,2))}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Il=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ul=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ol=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gl="vec3 transformed = vec3( position );",Vl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Wl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ql=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ec=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ic=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ac="gl_FragColor = linearToOutputTexel( gl_FragColor );",oc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_c=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Sc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,wc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ec=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Tc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ac=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Lc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Cc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ic=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Oc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,jc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$c=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Qc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ru=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,su=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,du=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,pu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,_u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Su=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,wu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Eu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Au=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Lu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Du=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ku=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ku=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,th=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ih=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ah=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ch=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,uh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:Il,alphamap_pars_fragment:Ul,alphatest_fragment:Nl,alphatest_pars_fragment:Ol,aomap_fragment:Bl,aomap_pars_fragment:zl,begin_vertex:Gl,beginnormal_vertex:Vl,bsdfs:Hl,iridescence_fragment:Wl,bumpmap_pars_fragment:kl,clipping_planes_fragment:Xl,clipping_planes_pars_fragment:ql,clipping_planes_pars_vertex:Yl,clipping_planes_vertex:jl,color_fragment:Zl,color_pars_fragment:$l,color_pars_vertex:Kl,color_vertex:Jl,common:Ql,cube_uv_reflection_fragment:ec,defaultnormal_vertex:tc,displacementmap_pars_vertex:nc,displacementmap_vertex:ic,emissivemap_fragment:rc,emissivemap_pars_fragment:sc,encodings_fragment:ac,encodings_pars_fragment:oc,envmap_fragment:lc,envmap_common_pars_fragment:cc,envmap_pars_fragment:uc,envmap_pars_vertex:hc,envmap_physical_pars_fragment:bc,envmap_vertex:fc,fog_vertex:dc,fog_pars_vertex:pc,fog_fragment:mc,fog_pars_fragment:gc,gradientmap_pars_fragment:_c,lightmap_fragment:xc,lightmap_pars_fragment:vc,lights_lambert_fragment:Mc,lights_lambert_pars_fragment:yc,lights_pars_begin:Sc,lights_toon_fragment:wc,lights_toon_pars_fragment:Ec,lights_phong_fragment:Tc,lights_phong_pars_fragment:Ac,lights_physical_fragment:Lc,lights_physical_pars_fragment:Cc,lights_fragment_begin:Dc,lights_fragment_maps:Rc,lights_fragment_end:Pc,logdepthbuf_fragment:Fc,logdepthbuf_pars_fragment:Ic,logdepthbuf_pars_vertex:Uc,logdepthbuf_vertex:Nc,map_fragment:Oc,map_pars_fragment:Bc,map_particle_fragment:zc,map_particle_pars_fragment:Gc,metalnessmap_fragment:Vc,metalnessmap_pars_fragment:Hc,morphcolor_vertex:Wc,morphnormal_vertex:kc,morphtarget_pars_vertex:Xc,morphtarget_vertex:qc,normal_fragment_begin:Yc,normal_fragment_maps:jc,normal_pars_fragment:Zc,normal_pars_vertex:$c,normal_vertex:Kc,normalmap_pars_fragment:Jc,clearcoat_normal_fragment_begin:Qc,clearcoat_normal_fragment_maps:eu,clearcoat_pars_fragment:tu,iridescence_pars_fragment:nu,output_fragment:iu,packing:ru,premultiplied_alpha_fragment:su,project_vertex:au,dithering_fragment:ou,dithering_pars_fragment:lu,roughnessmap_fragment:cu,roughnessmap_pars_fragment:uu,shadowmap_pars_fragment:hu,shadowmap_pars_vertex:fu,shadowmap_vertex:du,shadowmask_pars_fragment:pu,skinbase_vertex:mu,skinning_pars_vertex:gu,skinning_vertex:_u,skinnormal_vertex:xu,specularmap_fragment:vu,specularmap_pars_fragment:Mu,tonemapping_fragment:yu,tonemapping_pars_fragment:Su,transmission_fragment:bu,transmission_pars_fragment:wu,uv_pars_fragment:Eu,uv_pars_vertex:Tu,uv_vertex:Au,uv2_pars_fragment:Lu,uv2_pars_vertex:Cu,uv2_vertex:Du,worldpos_vertex:Ru,background_vert:Pu,background_frag:Fu,backgroundCube_vert:Iu,backgroundCube_frag:Uu,cube_vert:Nu,cube_frag:Ou,depth_vert:Bu,depth_frag:zu,distanceRGBA_vert:Gu,distanceRGBA_frag:Vu,equirect_vert:Hu,equirect_frag:Wu,linedashed_vert:ku,linedashed_frag:Xu,meshbasic_vert:qu,meshbasic_frag:Yu,meshlambert_vert:ju,meshlambert_frag:Zu,meshmatcap_vert:$u,meshmatcap_frag:Ku,meshnormal_vert:Ju,meshnormal_frag:Qu,meshphong_vert:eh,meshphong_frag:th,meshphysical_vert:nh,meshphysical_frag:ih,meshtoon_vert:rh,meshtoon_frag:sh,points_vert:ah,points_frag:oh,shadow_vert:lh,shadow_frag:ch,sprite_vert:uh,sprite_frag:hh},be={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rt},uv2Transform:{value:new Rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}}},Xt={basic:{uniforms:mt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:mt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:mt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:mt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:mt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:mt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:mt([be.points,be.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:mt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:mt([be.common,be.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:mt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:mt([be.sprite,be.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:mt([be.common,be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:mt([be.lights,be.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Xt.physical={uniforms:mt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function fh(s,e,t,n,i,r,o){const a=new Ye(0);let c=r===!0?0:1,l,h,f=null,d=0,m=null;function v(u,_){let L=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b));const S=s.xr,E=S.getSession&&S.getSession();E&&E.environmentBlendMode==="additive"&&(b=null),b===null?p(a,c):b&&b.isColor&&(p(b,1),L=!0),(s.autoClear||L)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===sr)?(h===void 0&&(h=new _t(new di(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:fi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,O,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(f!==b||d!==b.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,m=s.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new _t(new lr(2,2),new In({name:"BackgroundMaterial",uniforms:fi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,m=s.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null))}function p(u,_){n.buffers.color.setClear(u.r,u.g,u.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(u,_=1){a.set(u),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,p(a,c)},render:v}}function dh(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=u(null);let l=c,h=!1;function f(P,j,le,de,Z){let N=!1;if(o){const G=p(de,le,j);l!==G&&(l=G,m(l.object)),N=_(P,de,le,Z),N&&L(P,de,le,Z)}else{const G=j.wireframe===!0;(l.geometry!==de.id||l.program!==le.id||l.wireframe!==G)&&(l.geometry=de.id,l.program=le.id,l.wireframe=G,N=!0)}Z!==null&&t.update(Z,34963),(N||h)&&(h=!1,M(P,j,le,de),Z!==null&&s.bindBuffer(34963,t.get(Z).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function v(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function p(P,j,le){const de=le.wireframe===!0;let Z=a[P.id];Z===void 0&&(Z={},a[P.id]=Z);let N=Z[j.id];N===void 0&&(N={},Z[j.id]=N);let G=N[de];return G===void 0&&(G=u(d()),N[de]=G),G}function u(P){const j=[],le=[],de=[];for(let Z=0;Z<i;Z++)j[Z]=0,le[Z]=0,de[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:le,attributeDivisors:de,object:P,attributes:{},index:null}}function _(P,j,le,de){const Z=l.attributes,N=j.attributes;let G=0;const ae=le.getAttributes();for(const oe in ae)if(ae[oe].location>=0){const X=Z[oe];let K=N[oe];if(K===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),X===void 0||X.attribute!==K||K&&X.data!==K.data)return!0;G++}return l.attributesNum!==G||l.index!==de}function L(P,j,le,de){const Z={},N=j.attributes;let G=0;const ae=le.getAttributes();for(const oe in ae)if(ae[oe].location>=0){let X=N[oe];X===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const K={};K.attribute=X,X&&X.data&&(K.data=X.data),Z[oe]=K,G++}l.attributes=Z,l.attributesNum=G,l.index=de}function b(){const P=l.newAttributes;for(let j=0,le=P.length;j<le;j++)P[j]=0}function S(P){E(P,0)}function E(P,j){const le=l.newAttributes,de=l.enabledAttributes,Z=l.attributeDivisors;le[P]=1,de[P]===0&&(s.enableVertexAttribArray(P),de[P]=1),Z[P]!==j&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,j),Z[P]=j)}function R(){const P=l.newAttributes,j=l.enabledAttributes;for(let le=0,de=j.length;le<de;le++)j[le]!==P[le]&&(s.disableVertexAttribArray(le),j[le]=0)}function O(P,j,le,de,Z,N){n.isWebGL2===!0&&(le===5124||le===5125)?s.vertexAttribIPointer(P,j,le,Z,N):s.vertexAttribPointer(P,j,le,de,Z,N)}function M(P,j,le,de){if(n.isWebGL2===!1&&(P.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Z=de.attributes,N=le.getAttributes(),G=j.defaultAttributeValues;for(const ae in N){const oe=N[ae];if(oe.location>=0){let W=Z[ae];if(W===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const X=W.normalized,K=W.itemSize,U=t.get(W);if(U===void 0)continue;const xe=U.buffer,he=U.type,Se=U.bytesPerElement;if(W.isInterleavedBufferAttribute){const pe=W.data,ye=pe.stride,Me=W.offset;if(pe.isInstancedInterleavedBuffer){for(let ve=0;ve<oe.locationSize;ve++)E(oe.location+ve,pe.meshPerAttribute);P.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<oe.locationSize;ve++)S(oe.location+ve);s.bindBuffer(34962,xe);for(let ve=0;ve<oe.locationSize;ve++)O(oe.location+ve,K/oe.locationSize,he,X,ye*Se,(Me+K/oe.locationSize*ve)*Se)}else{if(W.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)E(oe.location+pe,W.meshPerAttribute);P.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pe=0;pe<oe.locationSize;pe++)S(oe.location+pe);s.bindBuffer(34962,xe);for(let pe=0;pe<oe.locationSize;pe++)O(oe.location+pe,K/oe.locationSize,he,X,K*Se,K/oe.locationSize*pe*Se)}}else if(G!==void 0){const X=G[ae];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(oe.location,X);break;case 3:s.vertexAttrib3fv(oe.location,X);break;case 4:s.vertexAttrib4fv(oe.location,X);break;default:s.vertexAttrib1fv(oe.location,X)}}}}R()}function C(){z();for(const P in a){const j=a[P];for(const le in j){const de=j[le];for(const Z in de)v(de[Z].object),delete de[Z];delete j[le]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const j=a[P.id];for(const le in j){const de=j[le];for(const Z in de)v(de[Z].object),delete de[Z];delete j[le]}delete a[P.id]}function T(P){for(const j in a){const le=a[j];if(le[P.id]===void 0)continue;const de=le[P.id];for(const Z in de)v(de[Z].object),delete de[Z];delete le[P.id]}}function z(){B(),h=!0,l!==c&&(l=c,m(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:z,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:S,disableUnusedAttributes:R}}function ph(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,f),t.update(h,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function mh(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),v=s.getParameter(34076),p=s.getParameter(34921),u=s.getParameter(36347),_=s.getParameter(36348),L=s.getParameter(36349),b=d>0,S=o||e.has("OES_texture_float"),E=b&&S,R=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:L,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:R}}function gh(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Sn,a=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const v=f.length!==0||d||n!==0||i;return i=d,t=h(f,m,0),n=f.length,v},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(f,d,m){const v=f.clippingPlanes,p=f.clipIntersection,u=f.clipShadows,_=s.get(f);if(!i||v===null||v.length===0||r&&!u)r?h(null):l();else{const L=r?0:n,b=L*4;let S=_.clippingState||null;c.value=S,S=h(v,d,b,m);for(let E=0;E!==b;++E)S[E]=t[E];_.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,v){const p=f!==null?f.length:0;let u=null;if(p!==0){if(u=c.value,v!==!0||u===null){const _=m+p*4,L=d.matrixWorldInverse;a.getNormalMatrix(L),(u===null||u.length<_)&&(u=new Float32Array(_));for(let b=0,S=m;b!==p;++b,S+=4)o.copy(f[b]).applyMatrix4(L,a),o.normal.toArray(u,S),u[S+3]=o.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function _h(s){let e=new WeakMap;function t(o,a){return a===$r?o.mapping=ci:a===Kr&&(o.mapping=ui),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===$r||a===Kr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Dl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xh extends Ka{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,aa=[.125,.215,.35,.446,.526,.582],wn=20,Hr=new xh,oa=new Ye;let Wr=null;const bn=(1+Math.sqrt(5))/2,ti=1/bn,la=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,bn,ti),new V(0,bn,-ti),new V(ti,0,bn),new V(-ti,0,bn),new V(bn,ti,0),new V(-bn,ti,0)];class ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr),e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:wi,format:Gt,encoding:Rn,depthBuffer:!1},i=ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vh(r)),this._blurMaterial=Mh(r,e,t)}return i}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(oa),h.toneMapping=tn,h.autoClear=!1;const m=new Qt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),v=new _t(new di,m);let p=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,p=!0):(m.color.copy(oa),p=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):L===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const b=this._cubeSize;$i(i,L*b,_>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ha());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;$i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=la[(i-1)%la.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new _t(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*wn-1),p=r/v,u=isFinite(r)?1+Math.floor(h*p):wn;u>wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${wn}`);const _=[];let L=0;for(let O=0;O<wn;++O){const M=O/p,C=Math.exp(-M*M/2);_.push(C),O===0?L+=C:O<u&&(L+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const S=this._sizeLods[i],E=3*S*(i>b-ri?i-b+ri:0),R=4*(this._cubeSize-S);$i(t,E,R,3*S,2*S),c.setRenderTarget(t),c.render(f,Hr)}}function vh(s){const e=[],t=[],n=[];let i=s;const r=s-ri+1+aa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ri?c=aa[o-s+ri-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,p=3,u=2,_=1,L=new Float32Array(p*v*m),b=new Float32Array(u*v*m),S=new Float32Array(_*v*m);for(let R=0;R<m;R++){const O=R%3*2/3-1,M=R>2?0:-1,C=[O,M,0,O+2/3,M,0,O+2/3,M+1,0,O,M,0,O+2/3,M+1,0,O,M+1,0];L.set(C,p*v*R),b.set(d,u*v*R);const A=[R,R,R,R,R,R];S.set(A,_*v*R)}const E=new nn;E.setAttribute("position",new qt(L,p)),E.setAttribute("uv",new qt(b,u)),E.setAttribute("faceIndex",new qt(S,_)),e.push(E),i>ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ua(s,e,t){const n=new Pn(s,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Mh(s,e,t){const n=new Float32Array(wn),i=new V(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ha(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function fa(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yh(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$r||c===Kr,h=c===ci||c===ui;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ca(s)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new ca(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bh(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let u=0,_=p.length;u<_;u++)e.update(p[u],34962)}}function l(f){const d=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const L=m.array;p=m.version;for(let b=0,S=L.length;b<S;b+=3){const E=L[b+0],R=L[b+1],O=L[b+2];d.push(E,R,R,O,O,E)}}else{const L=v.array;p=v.version;for(let b=0,S=L.length/3-1;b<S;b+=3){const E=b+0,R=b+1,O=b+2;d.push(E,R,R,O,O,E)}}const u=new(ka(d)?$a:Za)(d,1);u.version=p;const _=r.get(f);_&&e.remove(_),r.set(f,u)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function wh(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*c),t.update(m,r,1)}function f(d,m,v){if(v===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,m,a,d*c,v),t.update(m,r,v)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f}function Eh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Th(s,e){return s[0]-e[0]}function Ah(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Lh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=v!==void 0?v.length:0;let u=r.get(h);if(u===void 0||u.count!==p){let j=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",j)};u!==void 0&&u.texture.dispose();const b=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),S===!0&&(C=2),E===!0&&(C=3);let A=h.attributes.position.count*C,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const z=new Float32Array(A*T*4*p),B=new ja(z,A,T,p);B.type=Tn,B.needsUpdate=!0;const P=C*4;for(let le=0;le<p;le++){const de=R[le],Z=O[le],N=M[le],G=A*T*4*le;for(let ae=0;ae<de.count;ae++){const oe=ae*P;b===!0&&(o.fromBufferAttribute(de,ae),z[G+oe+0]=o.x,z[G+oe+1]=o.y,z[G+oe+2]=o.z,z[G+oe+3]=0),S===!0&&(o.fromBufferAttribute(Z,ae),z[G+oe+4]=o.x,z[G+oe+5]=o.y,z[G+oe+6]=o.z,z[G+oe+7]=0),E===!0&&(o.fromBufferAttribute(N,ae),z[G+oe+8]=o.x,z[G+oe+9]=o.y,z[G+oe+10]=o.z,z[G+oe+11]=N.itemSize===4?o.w:1)}}u={count:p,texture:B,size:new Oe(A,T)},r.set(h,u),h.addEventListener("dispose",j)}let _=0;for(let b=0;b<m.length;b++)_+=m[b];const L=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(s,"morphTargetBaseInfluence",L),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}else{const v=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==v){p=[];for(let S=0;S<v;S++)p[S]=[S,0];n[h.id]=p}for(let S=0;S<v;S++){const E=p[S];E[0]=S,E[1]=m[S]}p.sort(Ah);for(let S=0;S<8;S++)S<v&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Th);const u=h.morphAttributes.position,_=h.morphAttributes.normal;let L=0;for(let S=0;S<8;S++){const E=a[S],R=E[0],O=E[1];R!==Number.MAX_SAFE_INTEGER&&O?(u&&h.getAttribute("morphTarget"+S)!==u[R]&&h.setAttribute("morphTarget"+S,u[R]),_&&h.getAttribute("morphNormal"+S)!==_[R]&&h.setAttribute("morphNormal"+S,_[R]),i[S]=O,L+=O):(u&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),_&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const b=h.morphTargetsRelative?1:1-L;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Ch(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const to=new Wt,no=new ja,io=new pl,ro=new Ja,da=[],pa=[],ma=new Float32Array(16),ga=new Float32Array(9),_a=new Float32Array(4);function pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=da[i];if(r===void 0&&(r=new Float32Array(i),da[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function it(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cr(s,e){let t=pa[e];t===void 0&&(t=new Int32Array(e),pa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Dh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2fv(this.addr,e),rt(t,e)}}function Ph(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;s.uniform3fv(this.addr,e),rt(t,e)}}function Fh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4fv(this.addr,e),rt(t,e)}}function Ih(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;_a.set(n),s.uniformMatrix2fv(this.addr,!1,_a),rt(t,n)}}function Uh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;ga.set(n),s.uniformMatrix3fv(this.addr,!1,ga),rt(t,n)}}function Nh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;ma.set(n),s.uniformMatrix4fv(this.addr,!1,ma),rt(t,n)}}function Oh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2iv(this.addr,e),rt(t,e)}}function zh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;s.uniform3iv(this.addr,e),rt(t,e)}}function Gh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4iv(this.addr,e),rt(t,e)}}function Vh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2uiv(this.addr,e),rt(t,e)}}function Wh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;s.uniform3uiv(this.addr,e),rt(t,e)}}function kh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4uiv(this.addr,e),rt(t,e)}}function Xh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||to,i)}function qh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||io,i)}function Yh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ro,i)}function jh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||no,i)}function Zh(s){switch(s){case 5126:return Dh;case 35664:return Rh;case 35665:return Ph;case 35666:return Fh;case 35674:return Ih;case 35675:return Uh;case 35676:return Nh;case 5124:case 35670:return Oh;case 35667:case 35671:return Bh;case 35668:case 35672:return zh;case 35669:case 35673:return Gh;case 5125:return Vh;case 36294:return Hh;case 36295:return Wh;case 36296:return kh;case 35678:case 36198:case 36298:case 36306:case 35682:return Xh;case 35679:case 36299:case 36307:return qh;case 35680:case 36300:case 36308:case 36293:return Yh;case 36289:case 36303:case 36311:case 36292:return jh}}function $h(s,e){s.uniform1fv(this.addr,e)}function Kh(s,e){const t=pi(e,this.size,2);s.uniform2fv(this.addr,t)}function Jh(s,e){const t=pi(e,this.size,3);s.uniform3fv(this.addr,t)}function Qh(s,e){const t=pi(e,this.size,4);s.uniform4fv(this.addr,t)}function ef(s,e){const t=pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tf(s,e){const t=pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nf(s,e){const t=pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rf(s,e){s.uniform1iv(this.addr,e)}function sf(s,e){s.uniform2iv(this.addr,e)}function af(s,e){s.uniform3iv(this.addr,e)}function of(s,e){s.uniform4iv(this.addr,e)}function lf(s,e){s.uniform1uiv(this.addr,e)}function cf(s,e){s.uniform2uiv(this.addr,e)}function uf(s,e){s.uniform3uiv(this.addr,e)}function hf(s,e){s.uniform4uiv(this.addr,e)}function ff(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);it(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||to,r[o])}function df(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);it(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||io,r[o])}function pf(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);it(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ro,r[o])}function mf(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);it(n,r)||(s.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||no,r[o])}function gf(s){switch(s){case 5126:return $h;case 35664:return Kh;case 35665:return Jh;case 35666:return Qh;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return rf;case 35667:case 35671:return sf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return uf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}class _f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zh(t.type)}}class xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gf(t.type)}}class vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function xa(s,e){s.seq.push(e),s.map[e.id]=e}function Mf(s,e,t){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),o=kr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xa(t,l===void 0?new _f(a,s,e):new xf(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new vf(a),xa(t,f)),t=f}}}class tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Mf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function va(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let yf=0;function Sf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function bf(s){switch(s){case Rn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ma(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Sf(s.getShaderSource(e),o)}else return i}function wf(s,e){const t=bf(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ef(s,e){let t;switch(e){case Go:t="Linear";break;case Vo:t="Reinhard";break;case Ho:t="OptimizedCineon";break;case Wo:t="ACESFilmic";break;case ko:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tf(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yi).join(`
`)}function Af(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lf(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function yi(s){return s!==""}function ya(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sa(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(s){return s.replace(Cf,Df)}function Df(s,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ns(t)}const Rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(s){return s.replace(Rf,Pf)}function Pf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ff(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ba?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function If(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ci:case ui:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Nf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Va:e="ENVMAP_BLENDING_MULTIPLY";break;case Bo:e="ENVMAP_BLENDING_MIX";break;case zo:e="ENVMAP_BLENDING_ADD";break}return e}function Of(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ff(t),l=If(t),h=Uf(t),f=Nf(t),d=Of(t),m=t.isWebGL2?"":Tf(t),v=Af(r),p=i.createProgram();let u,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[v].filter(yi).join(`
`),u.length>0&&(u+=`
`),_=[m,v].filter(yi).join(`
`),_.length>0&&(_+=`
`)):(u=[wa(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),_=[m,wa(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==tn?Ef("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,wf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),o=ns(o),o=ya(o,t),o=Sa(o,t),a=ns(a),a=ya(a,t),a=Sa(a,t),o=ba(o),a=ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["#define varying in",t.glslVersion===Ys?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ys?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=L+u+o,S=L+_+a,E=va(i,35633,b),R=va(i,35632,S);if(i.attachShader(p,E),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),A=i.getShaderInfoLog(E).trim(),T=i.getShaderInfoLog(R).trim();let z=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){z=!1;const P=Ma(i,E,"vertex"),j=Ma(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+P+`
`+j)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(A===""||T==="")&&(B=!1);B&&(this.diagnostics={runnable:z,programLog:C,vertexShader:{log:A,prefix:u},fragmentShader:{log:T,prefix:_}})}i.deleteShader(E),i.deleteShader(R);let O;this.getUniforms=function(){return O===void 0&&(O=new tr(i,p)),O};let M;return this.getAttributes=function(){return M===void 0&&(M=Lf(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=R,this}let zf=0;class Gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vf(e),t.set(e,n)),n}}class Vf{constructor(e){this.id=zf++,this.code=e,this.usedTimes=0}}function Hf(s,e,t,n,i,r,o){const a=new ls,c=new Gf,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,C,A,T,z){const B=T.fog,P=z.geometry,j=M.isMeshStandardMaterial?T.environment:null,le=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),de=!!le&&le.mapping===sr?le.image.height:null,Z=v[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const N=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=N!==void 0?N.length:0;let ae=0;P.morphAttributes.position!==void 0&&(ae=1),P.morphAttributes.normal!==void 0&&(ae=2),P.morphAttributes.color!==void 0&&(ae=3);let oe,W,X,K;if(Z){const ye=Xt[Z];oe=ye.vertexShader,W=ye.fragmentShader}else oe=M.vertexShader,W=M.fragmentShader,c.update(M),X=c.getVertexShaderID(M),K=c.getFragmentShaderID(M);const U=s.getRenderTarget(),xe=M.alphaTest>0,he=M.clearcoat>0,Se=M.iridescence>0;return{isWebGL2:h,shaderID:Z,shaderName:M.type,vertexShader:oe,fragmentShader:W,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:d,outputEncoding:U===null?s.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Rn,map:!!M.map,matcap:!!M.matcap,envMap:!!le,envMapMode:le&&le.mapping,envMapCubeUVHeight:de,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===ul,tangentSpaceNormalMap:M.normalMapType===cl,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ke,clearcoat:he,clearcoatMap:he&&!!M.clearcoatMap,clearcoatRoughnessMap:he&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!M.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!M.iridescenceMap,iridescenceThicknessMap:Se&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===si,alphaMap:!!M.alphaMap,alphaTest:xe,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!P.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:tn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gt,flipSided:M.side===Ft,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)C.push(A),C.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(_(C,M),L(C,M),C.push(s.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function L(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),M.push(a.mask)}function b(M){const C=v[M.type];let A;if(C){const T=Xt[C];A=Tl.clone(T.uniforms)}else A=M.uniforms;return A}function S(M,C){let A;for(let T=0,z=l.length;T<z;T++){const B=l[T];if(B.cacheKey===C){A=B,++A.usedTimes;break}}return A===void 0&&(A=new Bf(s,C,M,r),l.push(A)),A}function E(M){if(--M.usedTimes===0){const C=l.indexOf(M);l[C]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:S,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:O}}function Wf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ea(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ta(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,v,p,u){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:u},s[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=p,_.group=u),e++,_}function a(f,d,m,v,p,u){const _=o(f,d,m,v,p,u);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,d,m,v,p,u){const _=o(f,d,m,v,p,u);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||kf),n.length>1&&n.sort(d||Ea),i.length>1&&i.sort(d||Ea)}function h(){for(let f=e,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Xf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ta,s.set(n,[o])):i>=r.length?(o=new Ta,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function qf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ye};break;case"SpotLight":t={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function Yf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jf=0;function Zf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $f(s,e){const t=new qf,n=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new V);const r=new V,o=new ot,a=new ot;function c(h,f){let d=0,m=0,v=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,u=0,_=0,L=0,b=0,S=0,E=0,R=0,O=0,M=0;h.sort(Zf);const C=f!==!0?Math.PI:1;for(let T=0,z=h.length;T<z;T++){const B=h[T],P=B.color,j=B.intensity,le=B.distance,de=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=P.r*j*C,m+=P.g*j*C,v+=P.b*j*C;else if(B.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(B.sh.coefficients[Z],j);else if(B.isDirectionalLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const N=B.shadow,G=n.get(B);G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=de,i.directionalShadowMatrix[p]=B.shadow.matrix,S++}i.directional[p]=Z,p++}else if(B.isSpotLight){const Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(P).multiplyScalar(j*C),Z.distance=le,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,i.spot[_]=Z;const N=B.shadow;if(B.map&&(i.spotLightMap[O]=B.map,O++,N.updateMatrices(B),B.castShadow&&M++),i.spotLightMatrix[_]=N.matrix,B.castShadow){const G=n.get(B);G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=de,R++}_++}else if(B.isRectAreaLight){const Z=t.get(B);Z.color.copy(P).multiplyScalar(j),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),i.rectArea[L]=Z,L++}else if(B.isPointLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const N=B.shadow,G=n.get(B);G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,G.shadowCameraNear=N.camera.near,G.shadowCameraFar=N.camera.far,i.pointShadow[u]=G,i.pointShadowMap[u]=de,i.pointShadowMatrix[u]=B.shadow.matrix,E++}i.point[u]=Z,u++}else if(B.isHemisphereLight){const Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(j*C),Z.groundColor.copy(B.groundColor).multiplyScalar(j*C),i.hemi[b]=Z,b++}}L>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=v;const A=i.hash;(A.directionalLength!==p||A.pointLength!==u||A.spotLength!==_||A.rectAreaLength!==L||A.hemiLength!==b||A.numDirectionalShadows!==S||A.numPointShadows!==E||A.numSpotShadows!==R||A.numSpotMaps!==O)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=L,i.point.length=u,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=R+O-M,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=M,A.directionalLength=p,A.pointLength=u,A.spotLength=_,A.rectAreaLength=L,A.hemiLength=b,A.numDirectionalShadows=S,A.numPointShadows=E,A.numSpotShadows=R,A.numSpotMaps=O,i.version=jf++)}function l(h,f){let d=0,m=0,v=0,p=0,u=0;const _=f.matrixWorldInverse;for(let L=0,b=h.length;L<b;L++){const S=h[L];if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),d++}else if(S.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),v++}else if(S.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(S.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const E=i.hemi[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(_),u++}}}return{setup:c,setupView:l,state:i}}function Aa(s,e){const t=new $f(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Kf(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Aa(s,e),t.set(r,[c])):o>=a.length?(c=new Aa(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jf extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ol,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ed=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,td=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nd(s,e,t){let n=new Qa;const i=new Oe,r=new Oe,o=new lt,a=new Jf({depthPacking:ll}),c=new Qf,l={},h=t.maxTextureSize,f={0:Ft,1:li,2:gt},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ed,fragmentShader:td}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new nn;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _t(v,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba,this.render=function(S,E,R){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;const O=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),A=s.state;A.setBlending(pn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let T=0,z=S.length;T<z;T++){const B=S[T],P=B.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const j=P.getFrameExtents();if(i.multiply(j),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,P.mapSize.y=r.y)),P.map===null){const de=this.type!==Mi?{minFilter:vt,magFilter:vt}:{};P.map=new Pn(i.x,i.y,de),P.map.texture.name=B.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const le=P.getViewportCount();for(let de=0;de<le;de++){const Z=P.getViewport(de);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),A.viewport(o),P.updateMatrices(B,de),n=P.getFrustum(),b(E,R,P.camera,B,this.type)}P.isPointLightShadow!==!0&&this.type===Mi&&_(P,R),P.needsUpdate=!1}u.needsUpdate=!1,s.setRenderTarget(O,M,C)};function _(S,E){const R=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,R,m,p,null)}function L(S,E,R,O,M,C){let A=null;const T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0?A=T:A=R.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const z=A.uuid,B=E.uuid;let P=l[z];P===void 0&&(P={},l[z]=P);let j=P[B];j===void 0&&(j=A.clone(),P[B]=j),A=j}return A.visible=E.visible,A.wireframe=E.wireframe,C===Mi?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:f[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,R.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(R.matrixWorld),A.nearDistance=O,A.farDistance=M),A}function b(S,E,R,O,M){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Mi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const T=e.update(S),z=S.material;if(Array.isArray(z)){const B=T.groups;for(let P=0,j=B.length;P<j;P++){const le=B[P],de=z[le.materialIndex];if(de&&de.visible){const Z=L(S,de,O,R.near,R.far,M);s.renderBufferDirect(R,null,T,Z,S,le)}}}else if(z.visible){const B=L(S,z,O,R.near,R.far,M);s.renderBufferDirect(R,null,T,B,S,null)}}const A=S.children;for(let T=0,z=A.length;T<z;T++)b(A[T],E,R,O,M)}}function id(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const ie=new lt;let me=null;const Ee=new lt(0,0,0,0);return{setMask:function(Le){me!==Le&&!I&&(s.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){I=Le},setClear:function(Le,Be,Ze,et,St){St===!0&&(Le*=et,Be*=et,Ze*=et),ie.set(Le,Be,Ze,et),Ee.equals(ie)===!1&&(s.clearColor(Le,Be,Ze,et),Ee.copy(ie))},reset:function(){I=!1,me=null,Ee.set(-1,0,0,0)}}}function r(){let I=!1,ie=null,me=null,Ee=null;return{setTest:function(Le){Le?xe(2929):he(2929)},setMask:function(Le){ie!==Le&&!I&&(s.depthMask(Le),ie=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case Ro:s.depthFunc(512);break;case Po:s.depthFunc(519);break;case Fo:s.depthFunc(513);break;case Zr:s.depthFunc(515);break;case Io:s.depthFunc(514);break;case Uo:s.depthFunc(518);break;case No:s.depthFunc(516);break;case Oo:s.depthFunc(517);break;default:s.depthFunc(515)}me=Le}},setLocked:function(Le){I=Le},setClear:function(Le){Ee!==Le&&(s.clearDepth(Le),Ee=Le)},reset:function(){I=!1,ie=null,me=null,Ee=null}}}function o(){let I=!1,ie=null,me=null,Ee=null,Le=null,Be=null,Ze=null,et=null,St=null;return{setTest:function(qe){I||(qe?xe(2960):he(2960))},setMask:function(qe){ie!==qe&&!I&&(s.stencilMask(qe),ie=qe)},setFunc:function(qe,dt,st){(me!==qe||Ee!==dt||Le!==st)&&(s.stencilFunc(qe,dt,st),me=qe,Ee=dt,Le=st)},setOp:function(qe,dt,st){(Be!==qe||Ze!==dt||et!==st)&&(s.stencilOp(qe,dt,st),Be=qe,Ze=dt,et=st)},setLocked:function(qe){I=qe},setClear:function(qe){St!==qe&&(s.clearStencil(qe),St=qe)},reset:function(){I=!1,ie=null,me=null,Ee=null,Le=null,Be=null,Ze=null,et=null,St=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,p=[],u=null,_=!1,L=null,b=null,S=null,E=null,R=null,O=null,M=null,C=!1,A=null,T=null,z=null,B=null,P=null;const j=s.getParameter(35661);let le=!1,de=0;const Z=s.getParameter(7938);Z.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Z)[1]),le=de>=1):Z.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),le=de>=2);let N=null,G={};const ae=s.getParameter(3088),oe=s.getParameter(2978),W=new lt().fromArray(ae),X=new lt().fromArray(oe);function K(I,ie,me){const Ee=new Uint8Array(4),Le=s.createTexture();s.bindTexture(I,Le),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Be=0;Be<me;Be++)s.texImage2D(ie+Be,0,6408,1,1,0,6408,5121,Ee);return Le}const U={};U[3553]=K(3553,3553,1),U[34067]=K(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xe(2929),c.setFunc(Zr),Ge(!1),J(_s),xe(2884),Re(pn);function xe(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function he(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Se(I,ie){return m[I]!==ie?(s.bindFramebuffer(I,ie),m[I]=ie,n&&(I===36009&&(m[36160]=ie),I===36160&&(m[36009]=ie)),!0):!1}function pe(I,ie){let me=p,Ee=!1;if(I)if(me=v.get(ie),me===void 0&&(me=[],v.set(ie,me)),I.isWebGLMultipleRenderTargets){const Le=I.texture;if(me.length!==Le.length||me[0]!==36064){for(let Be=0,Ze=Le.length;Be<Ze;Be++)me[Be]=36064+Be;me.length=Le.length,Ee=!0}}else me[0]!==36064&&(me[0]=36064,Ee=!0);else me[0]!==1029&&(me[0]=1029,Ee=!0);Ee&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ye(I){return u!==I?(s.useProgram(I),u=I,!0):!1}const Me={[ii]:32774,[Mo]:32778,[yo]:32779};if(n)Me[ys]=32775,Me[Ss]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Me[ys]=I.MIN_EXT,Me[Ss]=I.MAX_EXT)}const ve={[So]:0,[bo]:1,[wo]:768,[za]:770,[Do]:776,[Lo]:774,[To]:772,[Eo]:769,[Ga]:771,[Co]:775,[Ao]:773};function Re(I,ie,me,Ee,Le,Be,Ze,et){if(I===pn){_===!0&&(he(3042),_=!1);return}if(_===!1&&(xe(3042),_=!0),I!==vo){if(I!==L||et!==C){if((b!==ii||R!==ii)&&(s.blendEquation(32774),b=ii,R=ii),et)switch(I){case si:s.blendFuncSeparate(1,771,1,771);break;case xs:s.blendFunc(1,1);break;case vs:s.blendFuncSeparate(0,769,0,1);break;case Ms:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case si:s.blendFuncSeparate(770,771,1,771);break;case xs:s.blendFunc(770,1);break;case vs:s.blendFuncSeparate(0,769,0,1);break;case Ms:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,E=null,O=null,M=null,L=I,C=et}return}Le=Le||ie,Be=Be||me,Ze=Ze||Ee,(ie!==b||Le!==R)&&(s.blendEquationSeparate(Me[ie],Me[Le]),b=ie,R=Le),(me!==S||Ee!==E||Be!==O||Ze!==M)&&(s.blendFuncSeparate(ve[me],ve[Ee],ve[Be],ve[Ze]),S=me,E=Ee,O=Be,M=Ze),L=I,C=null}function Ve(I,ie){I.side===gt?he(2884):xe(2884);let me=I.side===Ft;ie&&(me=!me),Ge(me),I.blending===si&&I.transparent===!1?Re(pn):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ee=I.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xe(32926):he(32926)}function Ge(I){A!==I&&(I?s.frontFace(2304):s.frontFace(2305),A=I)}function J(I){I!==go?(xe(2884),I!==T&&(I===_s?s.cullFace(1029):I===_o?s.cullFace(1028):s.cullFace(1032))):he(2884),T=I}function Q(I){I!==z&&(le&&s.lineWidth(I),z=I)}function ne(I,ie,me){I?(xe(32823),(B!==ie||P!==me)&&(s.polygonOffset(ie,me),B=ie,P=me)):he(32823)}function fe(I){I?xe(3089):he(3089)}function ee(I){I===void 0&&(I=33984+j-1),N!==I&&(s.activeTexture(I),N=I)}function x(I,ie,me){me===void 0&&(N===null?me=33984+j-1:me=N);let Ee=G[me];Ee===void 0&&(Ee={type:void 0,texture:void 0},G[me]=Ee),(Ee.type!==I||Ee.texture!==ie)&&(N!==me&&(s.activeTexture(me),N=me),s.bindTexture(I,ie||U[I]),Ee.type=I,Ee.texture=ie)}function g(){const I=G[N];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function y(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){W.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function Te(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function De(I,ie){let me=f.get(ie);me===void 0&&(me=new WeakMap,f.set(ie,me));let Ee=me.get(I);Ee===void 0&&(Ee=s.getUniformBlockIndex(ie,I.name),me.set(I,Ee))}function Fe(I,ie){const Ee=f.get(ie).get(I);h.get(I)!==Ee&&(s.uniformBlockBinding(ie,Ee,I.__bindingPointIndex),h.set(I,Ee))}function He(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},N=null,G={},m={},v=new WeakMap,p=[],u=null,_=!1,L=null,b=null,S=null,E=null,R=null,O=null,M=null,C=!1,A=null,T=null,z=null,B=null,P=null,W.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:xe,disable:he,bindFramebuffer:Se,drawBuffers:pe,useProgram:ye,setBlending:Re,setMaterial:Ve,setFlipSided:Ge,setCullFace:J,setLineWidth:Q,setPolygonOffset:ne,setScissorTest:fe,activeTexture:ee,bindTexture:x,unbindTexture:g,compressedTexImage2D:F,compressedTexImage3D:Y,texImage2D:_e,texImage3D:ge,updateUBOMapping:De,uniformBlockBinding:Fe,texStorage2D:D,texStorage3D:te,texSubImage2D:ue,texSubImage3D:re,compressedTexSubImage2D:q,compressedTexSubImage3D:y,scissor:we,viewport:Te,reset:He}}function rd(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),v=new WeakMap;let p;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(x,g){return _?new OffscreenCanvas(x,g):rr("canvas")}function b(x,g,F,Y){let ue=1;if((x.width>Y||x.height>Y)&&(ue=Y/Math.max(x.width,x.height)),ue<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const re=g?ts:Math.floor,q=re(ue*x.width),y=re(ue*x.height);p===void 0&&(p=L(q,y));const D=F?L(q,y):p;return D.width=q,D.height=y,D.getContext("2d").drawImage(x,0,0,q,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+q+"x"+y+")."),D}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function S(x){return Zs(x.width)&&Zs(x.height)}function E(x){return a?!1:x.wrapS!==zt||x.wrapT!==zt||x.minFilter!==vt&&x.minFilter!==Ct}function R(x,g){return x.generateMipmaps&&g&&x.minFilter!==vt&&x.minFilter!==Ct}function O(x){s.generateMipmap(x)}function M(x,g,F,Y,ue=!1){if(a===!1)return g;if(x!==null){if(s[x]!==void 0)return s[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let re=g;return g===6403&&(F===5126&&(re=33326),F===5131&&(re=33325),F===5121&&(re=33321)),g===33319&&(F===5126&&(re=33328),F===5131&&(re=33327),F===5121&&(re=33323)),g===6408&&(F===5126&&(re=34836),F===5131&&(re=34842),F===5121&&(re=Y===Ke&&ue===!1?35907:32856),F===32819&&(re=32854),F===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function C(x,g,F){return R(x,F)===!0||x.isFramebufferTexture&&x.minFilter!==vt&&x.minFilter!==Ct?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function A(x){return x===vt||x===bs||x===ws?9728:9729}function T(x){const g=x.target;g.removeEventListener("dispose",T),B(g),g.isVideoTexture&&v.delete(g)}function z(x){const g=x.target;g.removeEventListener("dispose",z),j(g)}function B(x){const g=n.get(x);if(g.__webglInit===void 0)return;const F=x.source,Y=u.get(F);if(Y){const ue=Y[g.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&P(x),Object.keys(Y).length===0&&u.delete(F)}n.remove(x)}function P(x){const g=n.get(x);s.deleteTexture(g.__webglTexture);const F=x.source,Y=u.get(F);delete Y[g.__cacheKey],o.memory.textures--}function j(x){const g=x.texture,F=n.get(x),Y=n.get(g);if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)s.deleteFramebuffer(F.__webglFramebuffer[ue]),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[ue]);else{if(s.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ue=0;ue<F.__webglColorRenderbuffer.length;ue++)F.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[ue]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ue=0,re=g.length;ue<re;ue++){const q=n.get(g[ue]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(g[ue])}n.remove(g),n.remove(x)}let le=0;function de(){le=0}function Z(){const x=le;return x>=c&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+c),le+=1,x}function N(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.encoding),g.join()}function G(x,g){const F=n.get(x);if(x.isVideoTexture&&fe(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const Y=x.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,x,g);return}}t.bindTexture(3553,F.__webglTexture,33984+g)}function ae(x,g){const F=n.get(x);if(x.version>0&&F.__version!==x.version){he(F,x,g);return}t.bindTexture(35866,F.__webglTexture,33984+g)}function oe(x,g){const F=n.get(x);if(x.version>0&&F.__version!==x.version){he(F,x,g);return}t.bindTexture(32879,F.__webglTexture,33984+g)}function W(x,g){const F=n.get(x);if(x.version>0&&F.__version!==x.version){Se(F,x,g);return}t.bindTexture(34067,F.__webglTexture,33984+g)}const X={[Jr]:10497,[zt]:33071,[Qr]:33648},K={[vt]:9728,[bs]:9984,[ws]:9986,[Ct]:9729,[Xo]:9985,[ar]:9987};function U(x,g,F){if(F?(s.texParameteri(x,10242,X[g.wrapS]),s.texParameteri(x,10243,X[g.wrapT]),(x===32879||x===35866)&&s.texParameteri(x,32882,X[g.wrapR]),s.texParameteri(x,10240,K[g.magFilter]),s.texParameteri(x,10241,K[g.minFilter])):(s.texParameteri(x,10242,33071),s.texParameteri(x,10243,33071),(x===32879||x===35866)&&s.texParameteri(x,32882,33071),(g.wrapS!==zt||g.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(x,10240,A(g.magFilter)),s.texParameteri(x,10241,A(g.minFilter)),g.minFilter!==vt&&g.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(g.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(s.texParameterf(x,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function xe(x,g){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",T));const Y=g.source;let ue=u.get(Y);ue===void 0&&(ue={},u.set(Y,ue));const re=N(g);if(re!==x.__cacheKey){ue[re]===void 0&&(ue[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ue[re].usedTimes++;const q=ue[x.__cacheKey];q!==void 0&&(ue[x.__cacheKey].usedTimes--,q.usedTimes===0&&P(g)),x.__cacheKey=re,x.__webglTexture=ue[re].texture}return F}function he(x,g,F){let Y=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=35866),g.isData3DTexture&&(Y=32879);const ue=xe(x,g),re=g.source;t.bindTexture(Y,x.__webglTexture,33984+F);const q=n.get(re);if(re.version!==q.__version||ue===!0){t.activeTexture(33984+F),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const y=E(g)&&S(g.image)===!1;let D=b(g.image,y,!1,h);D=ee(g,D);const te=S(D)||a,_e=r.convert(g.format,g.encoding);let ge=r.convert(g.type),we=M(g.internalFormat,_e,ge,g.encoding,g.isVideoTexture);U(Y,g,te);let Te;const De=g.mipmaps,Fe=a&&g.isVideoTexture!==!0,He=q.__version===void 0||ue===!0,I=C(g,D,te);if(g.isDepthTexture)we=6402,a?g.type===Tn?we=36012:g.type===En?we=33190:g.type===ai?we=35056:we=33189:g.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Ln&&we===6402&&g.type!==Wa&&g.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=En,ge=r.convert(g.type)),g.format===hi&&we===6402&&(we=34041,g.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ai,ge=r.convert(g.type))),He&&(Fe?t.texStorage2D(3553,1,we,D.width,D.height):t.texImage2D(3553,0,we,D.width,D.height,0,_e,ge,null));else if(g.isDataTexture)if(De.length>0&&te){Fe&&He&&t.texStorage2D(3553,I,we,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)Te=De[ie],Fe?t.texSubImage2D(3553,ie,0,0,Te.width,Te.height,_e,ge,Te.data):t.texImage2D(3553,ie,we,Te.width,Te.height,0,_e,ge,Te.data);g.generateMipmaps=!1}else Fe?(He&&t.texStorage2D(3553,I,we,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,_e,ge,D.data)):t.texImage2D(3553,0,we,D.width,D.height,0,_e,ge,D.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&He&&t.texStorage3D(35866,I,we,De[0].width,De[0].height,D.depth);for(let ie=0,me=De.length;ie<me;ie++)Te=De[ie],g.format!==Gt?_e!==null?Fe?t.compressedTexSubImage3D(35866,ie,0,0,0,Te.width,Te.height,D.depth,_e,Te.data,0,0):t.compressedTexImage3D(35866,ie,we,Te.width,Te.height,D.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,ie,0,0,0,Te.width,Te.height,D.depth,_e,ge,Te.data):t.texImage3D(35866,ie,we,Te.width,Te.height,D.depth,0,_e,ge,Te.data)}else{Fe&&He&&t.texStorage2D(3553,I,we,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)Te=De[ie],g.format!==Gt?_e!==null?Fe?t.compressedTexSubImage2D(3553,ie,0,0,Te.width,Te.height,_e,Te.data):t.compressedTexImage2D(3553,ie,we,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,ie,0,0,Te.width,Te.height,_e,ge,Te.data):t.texImage2D(3553,ie,we,Te.width,Te.height,0,_e,ge,Te.data)}else if(g.isDataArrayTexture)Fe?(He&&t.texStorage3D(35866,I,we,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,_e,ge,D.data)):t.texImage3D(35866,0,we,D.width,D.height,D.depth,0,_e,ge,D.data);else if(g.isData3DTexture)Fe?(He&&t.texStorage3D(32879,I,we,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,_e,ge,D.data)):t.texImage3D(32879,0,we,D.width,D.height,D.depth,0,_e,ge,D.data);else if(g.isFramebufferTexture){if(He)if(Fe)t.texStorage2D(3553,I,we,D.width,D.height);else{let ie=D.width,me=D.height;for(let Ee=0;Ee<I;Ee++)t.texImage2D(3553,Ee,we,ie,me,0,_e,ge,null),ie>>=1,me>>=1}}else if(De.length>0&&te){Fe&&He&&t.texStorage2D(3553,I,we,De[0].width,De[0].height);for(let ie=0,me=De.length;ie<me;ie++)Te=De[ie],Fe?t.texSubImage2D(3553,ie,0,0,_e,ge,Te):t.texImage2D(3553,ie,we,_e,ge,Te);g.generateMipmaps=!1}else Fe?(He&&t.texStorage2D(3553,I,we,D.width,D.height),t.texSubImage2D(3553,0,0,0,_e,ge,D)):t.texImage2D(3553,0,we,_e,ge,D);R(g,te)&&O(Y),q.__version=re.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Se(x,g,F){if(g.image.length!==6)return;const Y=xe(x,g),ue=g.source;t.bindTexture(34067,x.__webglTexture,33984+F);const re=n.get(ue);if(ue.version!==re.__version||Y===!0){t.activeTexture(33984+F),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const q=g.isCompressedTexture||g.image[0].isCompressedTexture,y=g.image[0]&&g.image[0].isDataTexture,D=[];for(let ie=0;ie<6;ie++)!q&&!y?D[ie]=b(g.image[ie],!1,!0,l):D[ie]=y?g.image[ie].image:g.image[ie],D[ie]=ee(g,D[ie]);const te=D[0],_e=S(te)||a,ge=r.convert(g.format,g.encoding),we=r.convert(g.type),Te=M(g.internalFormat,ge,we,g.encoding),De=a&&g.isVideoTexture!==!0,Fe=re.__version===void 0||Y===!0;let He=C(g,te,_e);U(34067,g,_e);let I;if(q){De&&Fe&&t.texStorage2D(34067,He,Te,te.width,te.height);for(let ie=0;ie<6;ie++){I=D[ie].mipmaps;for(let me=0;me<I.length;me++){const Ee=I[me];g.format!==Gt?ge!==null?De?t.compressedTexSubImage2D(34069+ie,me,0,0,Ee.width,Ee.height,ge,Ee.data):t.compressedTexImage2D(34069+ie,me,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+ie,me,0,0,Ee.width,Ee.height,ge,we,Ee.data):t.texImage2D(34069+ie,me,Te,Ee.width,Ee.height,0,ge,we,Ee.data)}}}else{I=g.mipmaps,De&&Fe&&(I.length>0&&He++,t.texStorage2D(34067,He,Te,D[0].width,D[0].height));for(let ie=0;ie<6;ie++)if(y){De?t.texSubImage2D(34069+ie,0,0,0,D[ie].width,D[ie].height,ge,we,D[ie].data):t.texImage2D(34069+ie,0,Te,D[ie].width,D[ie].height,0,ge,we,D[ie].data);for(let me=0;me<I.length;me++){const Le=I[me].image[ie].image;De?t.texSubImage2D(34069+ie,me+1,0,0,Le.width,Le.height,ge,we,Le.data):t.texImage2D(34069+ie,me+1,Te,Le.width,Le.height,0,ge,we,Le.data)}}else{De?t.texSubImage2D(34069+ie,0,0,0,ge,we,D[ie]):t.texImage2D(34069+ie,0,Te,ge,we,D[ie]);for(let me=0;me<I.length;me++){const Ee=I[me];De?t.texSubImage2D(34069+ie,me+1,0,0,ge,we,Ee.image[ie]):t.texImage2D(34069+ie,me+1,Te,ge,we,Ee.image[ie])}}}R(g,_e)&&O(34067),re.__version=ue.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function pe(x,g,F,Y,ue){const re=r.convert(F.format,F.encoding),q=r.convert(F.type),y=M(F.internalFormat,re,q,F.encoding);n.get(g).__hasExternalTextures||(ue===32879||ue===35866?t.texImage3D(ue,0,y,g.width,g.height,g.depth,0,re,q,null):t.texImage2D(ue,0,y,g.width,g.height,0,re,q,null)),t.bindFramebuffer(36160,x),ne(g)?d.framebufferTexture2DMultisampleEXT(36160,Y,ue,n.get(F).__webglTexture,0,Q(g)):(ue===3553||ue>=34069&&ue<=34074)&&s.framebufferTexture2D(36160,Y,ue,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function ye(x,g,F){if(s.bindRenderbuffer(36161,x),g.depthBuffer&&!g.stencilBuffer){let Y=33189;if(F||ne(g)){const ue=g.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Tn?Y=36012:ue.type===En&&(Y=33190));const re=Q(g);ne(g)?d.renderbufferStorageMultisampleEXT(36161,re,Y,g.width,g.height):s.renderbufferStorageMultisample(36161,re,Y,g.width,g.height)}else s.renderbufferStorage(36161,Y,g.width,g.height);s.framebufferRenderbuffer(36160,36096,36161,x)}else if(g.depthBuffer&&g.stencilBuffer){const Y=Q(g);F&&ne(g)===!1?s.renderbufferStorageMultisample(36161,Y,35056,g.width,g.height):ne(g)?d.renderbufferStorageMultisampleEXT(36161,Y,35056,g.width,g.height):s.renderbufferStorage(36161,34041,g.width,g.height),s.framebufferRenderbuffer(36160,33306,36161,x)}else{const Y=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ue=0;ue<Y.length;ue++){const re=Y[ue],q=r.convert(re.format,re.encoding),y=r.convert(re.type),D=M(re.internalFormat,q,y,re.encoding),te=Q(g);F&&ne(g)===!1?s.renderbufferStorageMultisample(36161,te,D,g.width,g.height):ne(g)?d.renderbufferStorageMultisampleEXT(36161,te,D,g.width,g.height):s.renderbufferStorage(36161,D,g.width,g.height)}}s.bindRenderbuffer(36161,null)}function Me(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G(g.depthTexture,0);const Y=n.get(g.depthTexture).__webglTexture,ue=Q(g);if(g.depthTexture.format===Ln)ne(g)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,ue):s.framebufferTexture2D(36160,36096,3553,Y,0);else if(g.depthTexture.format===hi)ne(g)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,ue):s.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function ve(x){const g=n.get(x),F=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Me(g.__webglFramebuffer,x)}else if(F){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]=s.createRenderbuffer(),ye(g.__webglDepthbuffer[Y],x,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=s.createRenderbuffer(),ye(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function Re(x,g,F){const Y=n.get(x);g!==void 0&&pe(Y.__webglFramebuffer,x,x.texture,36064,3553),F!==void 0&&ve(x)}function Ve(x){const g=x.texture,F=n.get(x),Y=n.get(g);x.addEventListener("dispose",z),x.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=g.version,o.memory.textures++);const ue=x.isWebGLCubeRenderTarget===!0,re=x.isWebGLMultipleRenderTargets===!0,q=S(x)||a;if(ue){F.__webglFramebuffer=[];for(let y=0;y<6;y++)F.__webglFramebuffer[y]=s.createFramebuffer()}else{if(F.__webglFramebuffer=s.createFramebuffer(),re)if(i.drawBuffers){const y=x.texture;for(let D=0,te=y.length;D<te;D++){const _e=n.get(y[D]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&ne(x)===!1){const y=re?g:[g];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let D=0;D<y.length;D++){const te=y[D];F.__webglColorRenderbuffer[D]=s.createRenderbuffer(),s.bindRenderbuffer(36161,F.__webglColorRenderbuffer[D]);const _e=r.convert(te.format,te.encoding),ge=r.convert(te.type),we=M(te.internalFormat,_e,ge,te.encoding,x.isXRRenderTarget===!0),Te=Q(x);s.renderbufferStorageMultisample(36161,Te,we,x.width,x.height),s.framebufferRenderbuffer(36160,36064+D,36161,F.__webglColorRenderbuffer[D])}s.bindRenderbuffer(36161,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if(ue){t.bindTexture(34067,Y.__webglTexture),U(34067,g,q);for(let y=0;y<6;y++)pe(F.__webglFramebuffer[y],x,g,36064,34069+y);R(g,q)&&O(34067),t.unbindTexture()}else if(re){const y=x.texture;for(let D=0,te=y.length;D<te;D++){const _e=y[D],ge=n.get(_e);t.bindTexture(3553,ge.__webglTexture),U(3553,_e,q),pe(F.__webglFramebuffer,x,_e,36064+D,3553),R(_e,q)&&O(3553)}t.unbindTexture()}else{let y=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?y=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,Y.__webglTexture),U(y,g,q),pe(F.__webglFramebuffer,x,g,36064,y),R(g,q)&&O(y),t.unbindTexture()}x.depthBuffer&&ve(x)}function Ge(x){const g=S(x)||a,F=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Y=0,ue=F.length;Y<ue;Y++){const re=F[Y];if(R(re,g)){const q=x.isWebGLCubeRenderTarget?34067:3553,y=n.get(re).__webglTexture;t.bindTexture(q,y),O(q),t.unbindTexture()}}}function J(x){if(a&&x.samples>0&&ne(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],F=x.width,Y=x.height;let ue=16384;const re=[],q=x.stencilBuffer?33306:36096,y=n.get(x),D=x.isWebGLMultipleRenderTargets===!0;if(D)for(let te=0;te<g.length;te++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+te,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+te,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let te=0;te<g.length;te++){re.push(36064+te),x.depthBuffer&&re.push(q);const _e=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(_e===!1&&(x.depthBuffer&&(ue|=256),x.stencilBuffer&&(ue|=1024)),D&&s.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[te]),_e===!0&&(s.invalidateFramebuffer(36008,[q]),s.invalidateFramebuffer(36009,[q])),D){const ge=n.get(g[te]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ge,0)}s.blitFramebuffer(0,0,F,Y,0,0,F,Y,ue,9728),m&&s.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),D)for(let te=0;te<g.length;te++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+te,36161,y.__webglColorRenderbuffer[te]);const _e=n.get(g[te]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+te,3553,_e,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function Q(x){return Math.min(f,x.samples)}function ne(x){const g=n.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function fe(x){const g=o.render.frame;v.get(x)!==g&&(v.set(x,g),x.update())}function ee(x,g){const F=x.encoding,Y=x.format,ue=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===es||F!==Rn&&(F===Ke?a===!1?e.has("EXT_sRGB")===!0&&Y===Gt?(x.format=es,x.minFilter=Ct,x.generateMipmaps=!1):g=qa.sRGBToLinear(g):(Y!==Gt||ue!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),g}this.allocateTextureUnit=Z,this.resetTextureUnits=de,this.setTexture2D=G,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ne}function sd(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Dn)return 5121;if(r===Zo)return 32819;if(r===$o)return 32820;if(r===qo)return 5120;if(r===Yo)return 5122;if(r===Wa)return 5123;if(r===jo)return 5124;if(r===En)return 5125;if(r===Tn)return 5126;if(r===wi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ko)return 6406;if(r===Gt)return 6408;if(r===Qo)return 6409;if(r===el)return 6410;if(r===Ln)return 6402;if(r===hi)return 34041;if(r===tl)return 6403;if(r===Jo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===es)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===nl)return 36244;if(r===il)return 33319;if(r===rl)return 33320;if(r===sl)return 36249;if(r===pr||r===mr||r===gr||r===_r)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Es||r===Ts||r===As||r===Ls)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Es)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ts)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===As)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ls)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===al)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cs||r===Ds)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Cs)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ds)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rs||r===Ps||r===Fs||r===Is||r===Us||r===Ns||r===Os||r===Bs||r===zs||r===Gs||r===Vs||r===Hs||r===Ws||r===ks)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ps)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Is)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Us)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ns)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Os)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hs)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ws)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ks)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Xs)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ai?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class ad extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ki extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const u=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const L=new Ki;L.matrixAutoUpdate=!1,L.visible=!1,l.joints[p.jointName]=L,l.add(L)}const _=l.joints[p.jointName];u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=u.radius),_.visible=u!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(od)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class ld extends Wt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Ln,h!==Ln&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ln&&(n=En),n===void 0&&h===hi&&(n=ai),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1}}class cd extends Nn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,h=null,f=null,d=null,m=null;const v=t.getContextAttributes();let p=null,u=null;const _=[],L=[],b=new Dt;b.layers.enable(1),b.viewport=new lt;const S=new Dt;S.layers.enable(2),S.viewport=new lt;const E=[b,S],R=new ad;R.layers.enable(1),R.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=_[N];return G===void 0&&(G=new Xr,_[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=_[N];return G===void 0&&(G=new Xr,_[N]=G),G.getGripSpace()},this.getHand=function(N){let G=_[N];return G===void 0&&(G=new Xr,_[N]=G),G.getHandSpace()};function C(N){const G=L.indexOf(N.inputSource);if(G===-1)return;const ae=_[G];ae!==void 0&&ae.dispatchEvent({type:N.type,data:N.inputSource})}function A(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",T);for(let N=0;N<_.length;N++){const G=L[N];G!==null&&(L[N]=null,_[N].disconnect(G))}O=null,M=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,u=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",A),i.addEventListener("inputsourceschange",T),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:d}),u=new Pn(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:Dn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let G=null,ae=null,oe=null;v.depth&&(oe=v.stencil?35056:33190,G=v.stencil?hi:Ln,ae=v.stencil?ai:En);const W={colorFormat:32856,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(W),i.updateRenderState({layers:[f]}),u=new Pn(f.textureWidth,f.textureHeight,{format:Gt,type:Dn,depthTexture:new ld(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const X=e.properties.get(u);X.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function T(N){for(let G=0;G<N.removed.length;G++){const ae=N.removed[G],oe=L.indexOf(ae);oe>=0&&(L[oe]=null,_[oe].dispatchEvent({type:"disconnected",data:ae}))}for(let G=0;G<N.added.length;G++){const ae=N.added[G];let oe=L.indexOf(ae);if(oe===-1){for(let X=0;X<_.length;X++)if(X>=L.length){L.push(ae),oe=X;break}else if(L[X]===null){L[X]=ae,oe=X;break}if(oe===-1)break}const W=_[oe];W&&W.dispatchEvent({type:"connected",data:ae})}}const z=new V,B=new V;function P(N,G,ae){z.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);const oe=z.distanceTo(B),W=G.projectionMatrix.elements,X=ae.projectionMatrix.elements,K=W[14]/(W[10]-1),U=W[14]/(W[10]+1),xe=(W[9]+1)/W[5],he=(W[9]-1)/W[5],Se=(W[8]-1)/W[0],pe=(X[8]+1)/X[0],ye=K*Se,Me=K*pe,ve=oe/(-Se+pe),Re=ve*-Se;G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Re),N.translateZ(ve),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ve=K+ve,Ge=U+ve,J=ye-Re,Q=Me+(oe-Re),ne=xe*U/Ge*Ve,fe=he*U/Ge*Ve;N.projectionMatrix.makePerspective(J,Q,ne,fe,Ve,Ge)}function j(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;R.near=S.near=b.near=N.near,R.far=S.far=b.far=N.far,(O!==R.near||M!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,M=R.far);const G=N.parent,ae=R.cameras;j(R,G);for(let W=0;W<ae.length;W++)j(ae[W],G);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),N.matrix.copy(R.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const oe=N.children;for(let W=0,X=oe.length;W<X;W++)oe[W].updateMatrixWorld(!0);ae.length===2?P(R,b,S):R.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let le=null;function de(N,G){if(l=G.getViewerPose(c||o),m=G,l!==null){const ae=l.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let oe=!1;ae.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let W=0;W<ae.length;W++){const X=ae[W];let K=null;if(d!==null)K=d.getViewport(X);else{const xe=h.getViewSubImage(f,X);K=xe.viewport,W===0&&(e.setRenderTargetTextures(u,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(u))}let U=E[W];U===void 0&&(U=new Dt,U.layers.enable(W),U.viewport=new lt,E[W]=U),U.matrix.fromArray(X.transform.matrix),U.projectionMatrix.fromArray(X.projectionMatrix),U.viewport.set(K.x,K.y,K.width,K.height),W===0&&R.matrix.copy(U.matrix),oe===!0&&R.cameras.push(U)}}for(let ae=0;ae<_.length;ae++){const oe=L[ae],W=_[ae];oe!==null&&W!==void 0&&W.update(oe,G,c||o)}le&&le(N,G),m=null}const Z=new eo;Z.setAnimationLoop(de),this.setAnimationLoop=function(N){le=N},this.dispose=function(){}}}function ud(s,e){function t(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,L,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),h(p,u)):u.isMeshPhongMaterial?(i(p,u),l(p,u)):u.isMeshStandardMaterial?(i(p,u),f(p,u),u.isMeshPhysicalMaterial&&d(p,u,b)):u.isMeshMatcapMaterial?(i(p,u),m(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),v(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?a(p,u,_,L):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===Ft&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===Ft&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*S}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let L;u.map?L=u.map:u.specularMap?L=u.specularMap:u.displacementMap?L=u.displacementMap:u.normalMap?L=u.normalMap:u.bumpMap?L=u.bumpMap:u.roughnessMap?L=u.roughnessMap:u.metalnessMap?L=u.metalnessMap:u.alphaMap?L=u.alphaMap:u.emissiveMap?L=u.emissiveMap:u.clearcoatMap?L=u.clearcoatMap:u.clearcoatNormalMap?L=u.clearcoatNormalMap:u.clearcoatRoughnessMap?L=u.clearcoatRoughnessMap:u.iridescenceMap?L=u.iridescenceMap:u.iridescenceThicknessMap?L=u.iridescenceThicknessMap:u.specularIntensityMap?L=u.specularIntensityMap:u.specularColorMap?L=u.specularColorMap:u.transmissionMap?L=u.transmissionMap:u.thicknessMap?L=u.thicknessMap:u.sheenColorMap?L=u.sheenColorMap:u.sheenRoughnessMap&&(L=u.sheenRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uvTransform.value.copy(L.matrix));let b;u.aoMap?b=u.aoMap:u.lightMap&&(b=u.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function a(p,u,_,L){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=L*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b;u.map?b=u.map:u.alphaMap&&(b=u.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _;u.map?_=u.map:u.alphaMap&&(_=u.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function d(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===Ft&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function hd(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(L,b){const S=b.program;n.uniformBlockBinding(L,S)}function l(L,b){let S=i[L.id];S===void 0&&(v(L),S=h(L),i[L.id]=S,L.addEventListener("dispose",u));const E=b.program;n.updateUBOMapping(L,E);const R=e.render.frame;r[L.id]!==R&&(d(L),r[L.id]=R)}function h(L){const b=f();L.__bindingPointIndex=b;const S=s.createBuffer(),E=L.__size,R=L.usage;return s.bindBuffer(35345,S),s.bufferData(35345,E,R),s.bindBuffer(35345,null),s.bindBufferBase(35345,b,S),S}function f(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(L){const b=i[L.id],S=L.uniforms,E=L.__cache;s.bindBuffer(35345,b);for(let R=0,O=S.length;R<O;R++){const M=S[R];if(m(M,R,E)===!0){const C=M.value,A=M.__offset;typeof C=="number"?(M.__data[0]=C,s.bufferSubData(35345,A,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):C.toArray(M.__data),s.bufferSubData(35345,A,M.__data))}}s.bindBuffer(35345,null)}function m(L,b,S){const E=L.value;if(S[b]===void 0)return typeof E=="number"?S[b]=E:S[b]=E.clone(),!0;if(typeof E=="number"){if(S[b]!==E)return S[b]=E,!0}else{const R=S[b];if(R.equals(E)===!1)return R.copy(E),!0}return!1}function v(L){const b=L.uniforms;let S=0;const E=16;let R=0;for(let O=0,M=b.length;O<M;O++){const C=b[O],A=p(C);if(C.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,O>0){R=S%E;const T=E-R;R!==0&&T-A.boundary<0&&(S+=E-R,C.__offset=S)}S+=A.storage}return R=S%E,R>0&&(S+=E-R),L.__size=S,L.__cache={},this}function p(L){const b=L.value,S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function u(L){const b=L.target;b.removeEventListener("dispose",u);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const L in i)s.deleteBuffer(i[L]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function fd(){const s=rr("canvas");return s.style.display="block",s}function so(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:fd(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let f=null,d=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=tn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let u=!1,_=0,L=0,b=null,S=-1,E=null;const R=new lt,O=new lt;let M=null,C=e.width,A=e.height,T=1,z=null,B=null;const P=new lt(0,0,C,A),j=new lt(0,0,C,A);let le=!1;const de=new Qa;let Z=!1,N=!1,G=null;const ae=new ot,oe=new Oe,W=new V,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return b===null?T:1}let U=t;function xe(w,k){for(let se=0;se<w.length;se++){const H=w[se],ce=e.getContext(H,k);if(ce!==null)return ce}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${as}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",De,!1),U===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),U=xe(k,w),U===null)throw xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let he,Se,pe,ye,Me,ve,Re,Ve,Ge,J,Q,ne,fe,ee,x,g,F,Y,ue,re,q,y,D,te;function _e(){he=new Sh(U),Se=new mh(U,he,s),he.init(Se),y=new sd(U,he,Se),pe=new id(U,he,Se),ye=new Eh,Me=new Wf,ve=new rd(U,he,pe,Me,Se,y,ye),Re=new _h(p),Ve=new yh(p),Ge=new Fl(U,Se),D=new dh(U,he,Ge,Se),J=new bh(U,Ge,ye,D),Q=new Ch(U,J,Ge,ye),ue=new Lh(U,Se,ve),g=new gh(Me),ne=new Hf(p,Re,Ve,he,Se,D,g),fe=new ud(p,Me),ee=new Xf,x=new Kf(he,Se),Y=new fh(p,Re,Ve,pe,Q,h,o),F=new nd(p,Q,Se),te=new hd(U,ye,Se,pe),re=new ph(U,he,ye,Se),q=new wh(U,he,ye,Se),ye.programs=ne.programs,p.capabilities=Se,p.extensions=he,p.properties=Me,p.renderLists=ee,p.shadowMap=F,p.state=pe,p.info=ye}_e();const ge=new cd(p,U);this.xr=ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(w){w!==void 0&&(T=w,this.setSize(C,A,!1))},this.getSize=function(w){return w.set(C,A)},this.setSize=function(w,k,se){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=w,A=k,e.width=Math.floor(w*T),e.height=Math.floor(k*T),se!==!1&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(C*T,A*T).floor()},this.setDrawingBufferSize=function(w,k,se){C=w,A=k,T=se,e.width=Math.floor(w*se),e.height=Math.floor(k*se),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,k,se,H){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,k,se,H),pe.viewport(R.copy(P).multiplyScalar(T).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,k,se,H){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,k,se,H),pe.scissor(O.copy(j).multiplyScalar(T).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(w){pe.setScissorTest(le=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,k=!0,se=!0){let H=0;w&&(H|=16384),k&&(H|=256),se&&(H|=1024),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ee.dispose(),x.dispose(),Me.dispose(),Re.dispose(),Ve.dispose(),Q.dispose(),D.dispose(),te.dispose(),ne.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ee),ge.removeEventListener("sessionend",Le),G&&(G.dispose(),G=null),Be.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const w=ye.autoReset,k=F.enabled,se=F.autoUpdate,H=F.needsUpdate,ce=F.type;_e(),ye.autoReset=w,F.enabled=k,F.autoUpdate=se,F.needsUpdate=H,F.type=ce}function De(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const k=w.target;k.removeEventListener("dispose",Fe),He(k)}function He(w){I(w),Me.remove(w)}function I(w){const k=Me.get(w).programs;k!==void 0&&(k.forEach(function(se){ne.releaseProgram(se)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,se,H,ce,Ce){k===null&&(k=X);const Pe=ce.isMesh&&ce.matrixWorld.determinant()<0,Ne=ut(w,k,se,H,ce);pe.setMaterial(H,Pe);let Ie=se.index;const ke=se.attributes.position;if(Ie===null){if(ke===void 0||ke.count===0)return}else if(Ie.count===0)return;let ze=1;H.wireframe===!0&&(Ie=J.getWireframeAttribute(se),ze=2),D.setup(ce,H,Ne,se,Ie);let We,$e=re;Ie!==null&&(We=Ge.get(Ie),$e=q,$e.setIndex(We));const _n=Ie!==null?Ie.count:ke.count,On=se.drawRange.start*ze,Bn=se.drawRange.count*ze,kt=Ce!==null?Ce.start*ze:0,Xe=Ce!==null?Ce.count*ze:1/0,zn=Math.max(On,kt),Je=Math.min(_n,On+Bn,kt+Xe)-1,At=Math.max(0,Je-zn+1);if(At!==0){if(ce.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*K()),$e.setMode(1)):$e.setMode(4);else if(ce.isLine){let sn=H.linewidth;sn===void 0&&(sn=1),pe.setLineWidth(sn*K()),ce.isLineSegments?$e.setMode(1):ce.isLineLoop?$e.setMode(2):$e.setMode(3)}else ce.isPoints?$e.setMode(0):ce.isSprite&&$e.setMode(4);if(ce.isInstancedMesh)$e.renderInstances(zn,At,ce.count);else if(se.isInstancedBufferGeometry){const sn=Math.min(se.instanceCount,se._maxInstanceCount);$e.renderInstances(zn,At,sn)}else $e.render(zn,At)}},this.compile=function(w,k){function se(H,ce,Ce){H.transparent===!0&&H.side===gt?(H.side=Ft,H.needsUpdate=!0,st(H,ce,Ce),H.side=li,H.needsUpdate=!0,st(H,ce,Ce),H.side=gt):st(H,ce,Ce)}d=x.get(w),d.init(),v.push(d),w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(p.physicallyCorrectLights),w.traverse(function(H){const ce=H.material;if(ce)if(Array.isArray(ce))for(let Ce=0;Ce<ce.length;Ce++){const Pe=ce[Ce];se(Pe,w,H)}else se(ce,w,H)}),v.pop(),d=null};let ie=null;function me(w){ie&&ie(w)}function Ee(){Be.stop()}function Le(){Be.start()}const Be=new eo;Be.setAnimationLoop(me),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(w){ie=w,ge.setAnimationLoop(w),w===null?Be.stop():Be.start()},ge.addEventListener("sessionstart",Ee),ge.addEventListener("sessionend",Le),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(k),k=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,k,b),d=x.get(w,v.length),d.init(),v.push(d),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),de.setFromProjectionMatrix(ae),N=this.localClippingEnabled,Z=g.init(this.clippingPlanes,N,k),f=ee.get(w,m.length),f.init(),m.push(f),Ze(w,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(z,B),Z===!0&&g.beginShadows();const se=d.state.shadowsArray;if(F.render(se,w,k),Z===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(f,w),d.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const H=k.cameras;for(let ce=0,Ce=H.length;ce<Ce;ce++){const Pe=H[ce];et(f,w,Pe,Pe.viewport)}}else et(f,w,k);b!==null&&(ve.updateMultisampleRenderTarget(b),ve.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(p,w,k),D.resetDefaultState(),S=-1,E=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ze(w,k,se,H){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||de.intersectsSprite(w)){H&&W.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const Pe=Q.update(w),Ne=w.material;Ne.visible&&f.push(w,Pe,Ne,se,W.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==ye.render.frame&&(w.skeleton.update(),w.skeleton.frame=ye.render.frame),!w.frustumCulled||de.intersectsObject(w))){H&&W.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const Pe=Q.update(w),Ne=w.material;if(Array.isArray(Ne)){const Ie=Pe.groups;for(let ke=0,ze=Ie.length;ke<ze;ke++){const We=Ie[ke],$e=Ne[We.materialIndex];$e&&$e.visible&&f.push(w,Pe,$e,se,W.z,We)}}else Ne.visible&&f.push(w,Pe,Ne,se,W.z,null)}}const Ce=w.children;for(let Pe=0,Ne=Ce.length;Pe<Ne;Pe++)Ze(Ce[Pe],k,se,H)}function et(w,k,se,H){const ce=w.opaque,Ce=w.transmissive,Pe=w.transparent;d.setupLightsView(se),Ce.length>0&&St(ce,k,se),H&&pe.viewport(R.copy(H)),ce.length>0&&qe(ce,k,se),Ce.length>0&&qe(Ce,k,se),Pe.length>0&&qe(Pe,k,se),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function St(w,k,se){const H=Se.isWebGL2;G===null&&(G=new Pn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?wi:Dn,minFilter:ar,samples:H&&r===!0?4:0})),p.getDrawingBufferSize(oe),H?G.setSize(oe.x,oe.y):G.setSize(ts(oe.x),ts(oe.y));const ce=p.getRenderTarget();p.setRenderTarget(G),p.clear();const Ce=p.toneMapping;p.toneMapping=tn,qe(w,k,se),p.toneMapping=Ce,ve.updateMultisampleRenderTarget(G),ve.updateRenderTargetMipmap(G),p.setRenderTarget(ce)}function qe(w,k,se){const H=k.isScene===!0?k.overrideMaterial:null;for(let ce=0,Ce=w.length;ce<Ce;ce++){const Pe=w[ce],Ne=Pe.object,Ie=Pe.geometry,ke=H===null?Pe.material:H,ze=Pe.group;Ne.layers.test(se.layers)&&dt(Ne,k,se,Ie,ke,ze)}}function dt(w,k,se,H,ce,Ce){w.onBeforeRender(p,k,se,H,ce,Ce),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ce.onBeforeRender(p,k,se,H,w,Ce),ce.transparent===!0&&ce.side===gt?(ce.side=Ft,ce.needsUpdate=!0,p.renderBufferDirect(se,k,H,ce,w,Ce),ce.side=li,ce.needsUpdate=!0,p.renderBufferDirect(se,k,H,ce,w,Ce),ce.side=gt):p.renderBufferDirect(se,k,H,ce,w,Ce),w.onAfterRender(p,k,se,H,ce,Ce)}function st(w,k,se){k.isScene!==!0&&(k=X);const H=Me.get(w),ce=d.state.lights,Ce=d.state.shadowsArray,Pe=ce.state.version,Ne=ne.getParameters(w,ce.state,Ce,k,se),Ie=ne.getProgramCacheKey(Ne);let ke=H.programs;H.environment=w.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(w.isMeshStandardMaterial?Ve:Re).get(w.envMap||H.environment),ke===void 0&&(w.addEventListener("dispose",Fe),ke=new Map,H.programs=ke);let ze=ke.get(Ie);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Pe)return rn(w,Ne),ze}else Ne.uniforms=ne.getUniforms(w),w.onBuild(se,Ne,p),w.onBeforeCompile(Ne,p),ze=ne.acquireProgram(Ne,Ie),ke.set(Ie,ze),H.uniforms=Ne.uniforms;const We=H.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=g.uniform),rn(w,Ne),H.needsLights=gn(w),H.lightsStateVersion=Pe,H.needsLights&&(We.ambientLightColor.value=ce.state.ambient,We.lightProbe.value=ce.state.probe,We.directionalLights.value=ce.state.directional,We.directionalLightShadows.value=ce.state.directionalShadow,We.spotLights.value=ce.state.spot,We.spotLightShadows.value=ce.state.spotShadow,We.rectAreaLights.value=ce.state.rectArea,We.ltc_1.value=ce.state.rectAreaLTC1,We.ltc_2.value=ce.state.rectAreaLTC2,We.pointLights.value=ce.state.point,We.pointLightShadows.value=ce.state.pointShadow,We.hemisphereLights.value=ce.state.hemi,We.directionalShadowMap.value=ce.state.directionalShadowMap,We.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,We.spotShadowMap.value=ce.state.spotShadowMap,We.spotLightMatrix.value=ce.state.spotLightMatrix,We.spotLightMap.value=ce.state.spotLightMap,We.pointShadowMap.value=ce.state.pointShadowMap,We.pointShadowMatrix.value=ce.state.pointShadowMatrix);const $e=ze.getUniforms(),_n=tr.seqWithValue($e.seq,We);return H.currentProgram=ze,H.uniformsList=_n,ze}function rn(w,k){const se=Me.get(w);se.outputEncoding=k.outputEncoding,se.instancing=k.instancing,se.skinning=k.skinning,se.morphTargets=k.morphTargets,se.morphNormals=k.morphNormals,se.morphColors=k.morphColors,se.morphTargetsCount=k.morphTargetsCount,se.numClippingPlanes=k.numClippingPlanes,se.numIntersection=k.numClipIntersection,se.vertexAlphas=k.vertexAlphas,se.vertexTangents=k.vertexTangents,se.toneMapping=k.toneMapping}function ut(w,k,se,H,ce){k.isScene!==!0&&(k=X),ve.resetTextureUnits();const Ce=k.fog,Pe=H.isMeshStandardMaterial?k.environment:null,Ne=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Rn,Ie=(H.isMeshStandardMaterial?Ve:Re).get(H.envMap||Pe),ke=H.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ze=!!H.normalMap&&!!se.attributes.tangent,We=!!se.morphAttributes.position,$e=!!se.morphAttributes.normal,_n=!!se.morphAttributes.color,On=H.toneMapped?p.toneMapping:tn,Bn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,kt=Bn!==void 0?Bn.length:0,Xe=Me.get(H),zn=d.state.lights;if(Z===!0&&(N===!0||w!==E)){const bt=w===E&&H.id===S;g.setState(H,w,bt)}let Je=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==zn.state.version||Xe.outputEncoding!==Ne||ce.isInstancedMesh&&Xe.instancing===!1||!ce.isInstancedMesh&&Xe.instancing===!0||ce.isSkinnedMesh&&Xe.skinning===!1||!ce.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ie||H.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==g.numPlanes||Xe.numIntersection!==g.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==ze||Xe.morphTargets!==We||Xe.morphNormals!==$e||Xe.morphColors!==_n||Xe.toneMapping!==On||Se.isWebGL2===!0&&Xe.morphTargetsCount!==kt)&&(Je=!0):(Je=!0,Xe.__version=H.version);let At=Xe.currentProgram;Je===!0&&(At=st(H,k,ce));let sn=!1,mi=!1,hr=!1;const pt=At.getUniforms(),xn=Xe.uniforms;if(pe.useProgram(At.program)&&(sn=!0,mi=!0,hr=!0),H.id!==S&&(S=H.id,mi=!0),sn||E!==w){if(pt.setValue(U,"projectionMatrix",w.projectionMatrix),Se.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,mi=!0,hr=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const bt=pt.map.cameraPosition;bt!==void 0&&bt.setValue(U,W.setFromMatrixPosition(w.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ce.isSkinnedMesh)&&pt.setValue(U,"viewMatrix",w.matrixWorldInverse)}if(ce.isSkinnedMesh){pt.setOptional(U,ce,"bindMatrix"),pt.setOptional(U,ce,"bindMatrixInverse");const bt=ce.skeleton;bt&&(Se.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(U,"boneTexture",bt.boneTexture,ve),pt.setValue(U,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fr=se.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&Se.isWebGL2===!0)&&ue.update(ce,se,H,At),(mi||Xe.receiveShadow!==ce.receiveShadow)&&(Xe.receiveShadow=ce.receiveShadow,pt.setValue(U,"receiveShadow",ce.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(xn.envMap.value=Ie,xn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),mi&&(pt.setValue(U,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&mn(xn,hr),Ce&&H.fog===!0&&fe.refreshFogUniforms(xn,Ce),fe.refreshMaterialUniforms(xn,H,T,A,G),tr.upload(U,Xe.uniformsList,xn,ve)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tr.upload(U,Xe.uniformsList,xn,ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pt.setValue(U,"center",ce.center),pt.setValue(U,"modelViewMatrix",ce.modelViewMatrix),pt.setValue(U,"normalMatrix",ce.normalMatrix),pt.setValue(U,"modelMatrix",ce.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const bt=H.uniformsGroups;for(let dr=0,mo=bt.length;dr<mo;dr++)if(Se.isWebGL2){const gs=bt[dr];te.update(gs,At),te.bind(gs,At)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return At}function mn(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function gn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,k,se){Me.get(w.texture).__webglTexture=k,Me.get(w.depthTexture).__webglTexture=se;const H=Me.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=se===void 0,H.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const se=Me.get(w);se.__webglFramebuffer=k,se.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,se=0){b=w,_=k,L=se;let H=!0,ce=null,Ce=!1,Pe=!1;if(w){const Ie=Me.get(w);Ie.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),H=!1):Ie.__webglFramebuffer===void 0?ve.setupRenderTarget(w):Ie.__hasExternalTextures&&ve.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);const ze=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ce=ze[k],Ce=!0):Se.isWebGL2&&w.samples>0&&ve.useMultisampledRTT(w)===!1?ce=Me.get(w).__webglMultisampledFramebuffer:ce=ze,R.copy(w.viewport),O.copy(w.scissor),M=w.scissorTest}else R.copy(P).multiplyScalar(T).floor(),O.copy(j).multiplyScalar(T).floor(),M=le;if(pe.bindFramebuffer(36160,ce)&&Se.drawBuffers&&H&&pe.drawBuffers(w,ce),pe.viewport(R),pe.scissor(O),pe.setScissorTest(M),Ce){const Ie=Me.get(w.texture);U.framebufferTexture2D(36160,36064,34069+k,Ie.__webglTexture,se)}else if(Pe){const Ie=Me.get(w.texture),ke=k||0;U.framebufferTextureLayer(36160,36064,Ie.__webglTexture,se||0,ke)}S=-1},this.readRenderTargetPixels=function(w,k,se,H,ce,Ce,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){pe.bindFramebuffer(36160,Ne);try{const Ie=w.texture,ke=Ie.format,ze=Ie.type;if(ke!==Gt&&y.convert(ke)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=ze===wi&&(he.has("EXT_color_buffer_half_float")||Se.isWebGL2&&he.has("EXT_color_buffer_float"));if(ze!==Dn&&y.convert(ze)!==U.getParameter(35738)&&!(ze===Tn&&(Se.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-H&&se>=0&&se<=w.height-ce&&U.readPixels(k,se,H,ce,y.convert(ke),y.convert(ze),Ce)}finally{const Ie=b!==null?Me.get(b).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(w,k,se=0){const H=Math.pow(2,-se),ce=Math.floor(k.image.width*H),Ce=Math.floor(k.image.height*H);ve.setTexture2D(k,0),U.copyTexSubImage2D(3553,se,0,0,w.x,w.y,ce,Ce),pe.unbindTexture()},this.copyTextureToTexture=function(w,k,se,H=0){const ce=k.image.width,Ce=k.image.height,Pe=y.convert(se.format),Ne=y.convert(se.type);ve.setTexture2D(se,0),U.pixelStorei(37440,se.flipY),U.pixelStorei(37441,se.premultiplyAlpha),U.pixelStorei(3317,se.unpackAlignment),k.isDataTexture?U.texSubImage2D(3553,H,w.x,w.y,ce,Ce,Pe,Ne,k.image.data):k.isCompressedTexture?U.compressedTexSubImage2D(3553,H,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):U.texSubImage2D(3553,H,w.x,w.y,Pe,Ne,k.image),H===0&&se.generateMipmaps&&U.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(w,k,se,H,ce=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=w.max.x-w.min.x+1,Pe=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Ie=y.convert(H.format),ke=y.convert(H.type);let ze;if(H.isData3DTexture)ve.setTexture3D(H,0),ze=32879;else if(H.isDataArrayTexture)ve.setTexture2DArray(H,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,H.flipY),U.pixelStorei(37441,H.premultiplyAlpha),U.pixelStorei(3317,H.unpackAlignment);const We=U.getParameter(3314),$e=U.getParameter(32878),_n=U.getParameter(3316),On=U.getParameter(3315),Bn=U.getParameter(32877),kt=se.isCompressedTexture?se.mipmaps[0]:se.image;U.pixelStorei(3314,kt.width),U.pixelStorei(32878,kt.height),U.pixelStorei(3316,w.min.x),U.pixelStorei(3315,w.min.y),U.pixelStorei(32877,w.min.z),se.isDataTexture||se.isData3DTexture?U.texSubImage3D(ze,ce,k.x,k.y,k.z,Ce,Pe,Ne,Ie,ke,kt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ze,ce,k.x,k.y,k.z,Ce,Pe,Ne,Ie,kt.data)):U.texSubImage3D(ze,ce,k.x,k.y,k.z,Ce,Pe,Ne,Ie,ke,kt),U.pixelStorei(3314,We),U.pixelStorei(32878,$e),U.pixelStorei(3316,_n),U.pixelStorei(3315,On),U.pixelStorei(32877,Bn),ce===0&&H.generateMipmaps&&U.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){_=0,L=0,b=null,pe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class dd extends so{}dd.prototype.isWebGL1Renderer=!0;class pd extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ao extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new V,Ca=new V,Da=new ot,qr=new os,Ji=new or;class md extends nt{constructor(e=new nn,t=new ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)La.fromBufferAttribute(t,i-1),Ca.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=La.distanceTo(Ca);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(i),Ji.radius+=r,e.ray.intersectsSphere(Ji)===!1)return;Da.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Da);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new V,h=new V,f=new V,d=new V,m=this.isLineSegments?2:1,v=n.index,u=n.attributes.position;if(v!==null){const _=Math.max(0,o.start),L=Math.min(v.count,o.start+o.count);for(let b=_,S=L-1;b<S;b+=m){const E=v.getX(b),R=v.getX(b+1);if(l.fromBufferAttribute(u,E),h.fromBufferAttribute(u,R),qr.distanceSqToSegment(l,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),L=Math.min(u.count,o.start+o.count);for(let b=_,S=L-1;b<S;b+=m){if(l.fromBufferAttribute(u,b),h.fromBufferAttribute(u,b+1),qr.distanceSqToSegment(l,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ra=new V,Pa=new V;class gd extends md{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ra.fromBufferAttribute(t,i),Pa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ra.distanceTo(Pa);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d{constructor(e,t,n=0,i=1/0){this.ray=new os(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return is(e,this,n,t),n.sort(Fa),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)is(e[i],this,n,t);return n.sort(Fa),n}}function Fa(s,e){return s.distance-e.distance}function is(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)is(i[r],e,t,!0)}}class Ia{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xd extends gd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new nn;i.setAttribute("position",new Ht(t,3)),i.setAttribute("color",new Ht(n,3));const r=new ao({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Ye,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const Ua={type:"change"},Yr={type:"start"},Na={type:"end"};class vd extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ee),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ua),n.update(),r=i.NONE},this.update=function(){const y=new V,D=new Fn().setFromUnitVectors(e.up,new V(0,1,0)),te=D.clone().invert(),_e=new V,ge=new Fn,we=2*Math.PI;return function(){const De=n.object.position;y.copy(De).sub(n.target),y.applyQuaternion(D),a.setFromVector3(y),n.autoRotate&&r===i.NONE&&C(O()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Fe=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(Fe)&&isFinite(He)&&(Fe<-Math.PI?Fe+=we:Fe>Math.PI&&(Fe-=we),He<-Math.PI?He+=we:He>Math.PI&&(He-=we),Fe<=He?a.theta=Math.max(Fe,Math.min(He,a.theta)):a.theta=a.theta>(Fe+He)/2?Math.max(Fe,a.theta):Math.min(He,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),y.setFromSpherical(a),y.applyQuaternion(te),De.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,f||_e.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o?(n.dispatchEvent(Ua),_e.copy(n.object.position),ge.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Ge),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ee)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ia,c=new Ia;let l=1;const h=new V;let f=!1;const d=new Oe,m=new Oe,v=new Oe,p=new Oe,u=new Oe,_=new Oe,L=new Oe,b=new Oe,S=new Oe,E=[],R={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function C(y){c.theta-=y}function A(y){c.phi-=y}const T=function(){const y=new V;return function(te,_e){y.setFromMatrixColumn(_e,0),y.multiplyScalar(-te),h.add(y)}}(),z=function(){const y=new V;return function(te,_e){n.screenSpacePanning===!0?y.setFromMatrixColumn(_e,1):(y.setFromMatrixColumn(_e,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(te),h.add(y)}}(),B=function(){const y=new V;return function(te,_e){const ge=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;y.copy(we).sub(n.target);let Te=y.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),T(2*te*Te/ge.clientHeight,n.object.matrix),z(2*_e*Te/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(T(te*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),z(_e*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(y){n.object.isPerspectiveCamera?l/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(y){n.object.isPerspectiveCamera?l*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(y){d.set(y.clientX,y.clientY)}function de(y){L.set(y.clientX,y.clientY)}function Z(y){p.set(y.clientX,y.clientY)}function N(y){m.set(y.clientX,y.clientY),v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const D=n.domElement;C(2*Math.PI*v.x/D.clientHeight),A(2*Math.PI*v.y/D.clientHeight),d.copy(m),n.update()}function G(y){b.set(y.clientX,y.clientY),S.subVectors(b,L),S.y>0?P(M()):S.y<0&&j(M()),L.copy(b),n.update()}function ae(y){u.set(y.clientX,y.clientY),_.subVectors(u,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(u),n.update()}function oe(y){y.deltaY<0?j(M()):y.deltaY>0&&P(M()),n.update()}function W(y){let D=!1;switch(y.code){case n.keys.UP:B(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),D=!0;break}D&&(y.preventDefault(),n.update())}function X(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const y=.5*(E[0].pageX+E[1].pageX),D=.5*(E[0].pageY+E[1].pageY);d.set(y,D)}}function K(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const y=.5*(E[0].pageX+E[1].pageX),D=.5*(E[0].pageY+E[1].pageY);p.set(y,D)}}function U(){const y=E[0].pageX-E[1].pageX,D=E[0].pageY-E[1].pageY,te=Math.sqrt(y*y+D*D);L.set(0,te)}function xe(){n.enableZoom&&U(),n.enablePan&&K()}function he(){n.enableZoom&&U(),n.enableRotate&&X()}function Se(y){if(E.length==1)m.set(y.pageX,y.pageY);else{const te=q(y),_e=.5*(y.pageX+te.x),ge=.5*(y.pageY+te.y);m.set(_e,ge)}v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const D=n.domElement;C(2*Math.PI*v.x/D.clientHeight),A(2*Math.PI*v.y/D.clientHeight),d.copy(m)}function pe(y){if(E.length===1)u.set(y.pageX,y.pageY);else{const D=q(y),te=.5*(y.pageX+D.x),_e=.5*(y.pageY+D.y);u.set(te,_e)}_.subVectors(u,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(u)}function ye(y){const D=q(y),te=y.pageX-D.x,_e=y.pageY-D.y,ge=Math.sqrt(te*te+_e*_e);b.set(0,ge),S.set(0,Math.pow(b.y/L.y,n.zoomSpeed)),P(S.y),L.copy(b)}function Me(y){n.enableZoom&&ye(y),n.enablePan&&pe(y)}function ve(y){n.enableZoom&&ye(y),n.enableRotate&&Se(y)}function Re(y){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",Ge)),Y(y),y.pointerType==="touch"?x(y):Q(y))}function Ve(y){n.enabled!==!1&&(y.pointerType==="touch"?g(y):ne(y))}function Ge(y){ue(y),E.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Ge)),n.dispatchEvent(Na),r=i.NONE}function J(y){ue(y)}function Q(y){let D;switch(y.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Gn.DOLLY:if(n.enableZoom===!1)return;de(y),r=i.DOLLY;break;case Gn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;Z(y),r=i.PAN}else{if(n.enableRotate===!1)return;le(y),r=i.ROTATE}break;case Gn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;le(y),r=i.ROTATE}else{if(n.enablePan===!1)return;Z(y),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Yr)}function ne(y){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;N(y);break;case i.DOLLY:if(n.enableZoom===!1)return;G(y);break;case i.PAN:if(n.enablePan===!1)return;ae(y);break}}function fe(y){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(y.preventDefault(),n.dispatchEvent(Yr),oe(y),n.dispatchEvent(Na))}function ee(y){n.enabled===!1||n.enablePan===!1||W(y)}function x(y){switch(re(y),E.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;X(),r=i.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;K(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(),r=i.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Yr)}function g(y){switch(re(y),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pe(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(y),n.update();break;default:r=i.NONE}}function F(y){n.enabled!==!1&&y.preventDefault()}function Y(y){E.push(y)}function ue(y){delete R[y.pointerId];for(let D=0;D<E.length;D++)if(E[D].pointerId==y.pointerId){E.splice(D,1);return}}function re(y){let D=R[y.pointerId];D===void 0&&(D=new Oe,R[y.pointerId]=D),D.set(y.pageX,y.pageY)}function q(y){const D=y.pointerId===E[0].pointerId?E[1]:E[0];return R[D.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}let nr=new Map;await fetch("/RubiksSimulator/resources/edge-comms.txt").then(s=>s.text()).then(s=>{const e=s.split(/\r?\n/);for(let t in e){let n=e[t].split(" ");nr.set(n.slice(0,3).join(" "),n.slice(3,n.length).join(" "))}});function Md(s,e){let t=[];for(let r=1;r<Math.floor(e/2);r++){let o=e-1-r,a=e*r,c=e*e-1-e*r,l=e*(e-1)+r;var n={[o]:"a",[a]:"b",[c]:"c",[l]:"d"},i=new RegExp("("+Object.keys(n).join("|")+")\\b","gi");if(s.perm.perm["D"+(e-1-r)]!="D"+(e-1-r))if(s.perm.perm["D"+(e-1-r)]=="U"+(e-1-r)){let m="Da Ub "+s.perm.perm["D"+(e-1-r)].replace(i,function(p){return n[p]}),v=nr.get(m).replace(/n/g,r+1);rs(v),Oa(v,"[Solve Da] ["+m+"] ")}else{let m="Da Ua "+s.perm.perm["D"+(e-1-r)].replace(i,function(p){return n[p]}),v=nr.get(m).replace(/n/g,r+1);rs(v),Oa(v,"[Solve Da] ["+m+"] ")}let h=ir(e,r,s),f=oo(h),d=yd(f,r,e);return d.forEach((m,v)=>{t.push([d[v],nr.get(m).replace(/n/g,r+1)])}),console.log("Edge Solutions"),console.log(t),t}}function yd(s,e,t){let n=[],i=t-1-e,r=t*e,o=t*t-1-t*e,a=t*(t-1)+e;var c={[i]:"a",[r]:"b",[o]:"c",[a]:"d"},l=new RegExp("("+Object.keys(c).join("|")+")\\b","gi");for(let p in s)s[p].length>1&&n.push(s[p]);let h=[];for(let p in n){for(let _ in n[p]){let L=n[p][_].replace(l,function(b){return c[b]});h.push(["Da",L])}let u=n[p][0].replace(l,function(_){return c[_]});h.push(["Da",u])}let f=[];for(let p=0;p<h.length;p+=2)f.push(h[p],h[p+1]);let d=[];for(let p=0;p<=f.length-1;p+=2){let u={},_={};u[f[p][0]]=f[p][1],u[f[p][1]]=f[p][0],_[f[p+1][0]]=f[p+1][1],_[f[p+1][1]]=f[p+1][0];for(var m in _)m in u?u[u[m]]=_[[m]]:u[m]=_[m];d.push(u)}let v=[];for(let p=d.length-1;p>=0;p--){let u=Object.values(d[p]).reverse().join(" ");v.push(u)}return v}function Sd(s,e){return Array(e-s+1).fill().map((t,n)=>s+n)}function bd(s){var e={};for(var t in s)e[s[t]]=t;return e}function oo(s){for(var e=Object.keys(s),t=[];e.length>0;){let n=e.pop(),i=s[n],r=[n];for(;i!=n;){let o=e.indexOf(i);e.splice(o,1),r.push(i),i=s[i]}t.push(r)}return t}function bi(s){let e=oo(s),t=0;return e.forEach(n=>{t+=n.length-1}),t%2}class us{constructor(e){this.perm=e}mult(e){var t={};for(var n in this.perm)t[n]=e.perm[this.perm[n]];return new us(t)}cycle_decomposition(){console.log("cycle decomposition");for(var e=Object.keys(this.perm),t=[];e.length>0;){let n=e.pop(),i=this.perm[n],r=[n];for(;i!=n;){let o=e.indexOf(i);e.splice(o,1),r.push(i),i=this.perm[i]}t.push(r)}return t}parity(){let e=this.cycle_decomposition(),t=0;return e.forEach(n=>{t+=n.length-1}),console.log(t),t%2}}class je{constructor(e){this.position=e;const t=new Map,n=["U","F","R","B","L","D"];for(let i in n)for(let r in Sd(1,e*e)){let o=n[i]+r.toString();t[o]=o}this.perm=new us(t)}apply_state(e){this.perm=this.perm.mult(e.perm)}}var Ae={},Vt;function hs(s){var e=p("U",s),t=u("U",s),n=p("R",s),i=u("R",s),r=p("D",s),o=u("D",s),a=p("L",s),c=u("L",s),l=p("F",s),h=u("F",s),f=p("B",s),d=u("B",s);Ae={};let m=["U","F","R","B","L","D"],v=["D","B","L","F","R","U"];L(s),b(s),S(s),E(s),R(s),O(s),m.forEach((A,T)=>{M(String(A),s),C(A,s,T)}),m.forEach(A=>{var T=new je(s);T.apply_state(Ae[A]),T.apply_state(Ae[A]);var z=new je(s);z.apply_state(Ae[A]),z.apply_state(Ae[A]),z.apply_state(Ae[A]),Ae[A+"2"]=T,Ae[A+"3"]=z,Ae[A+"'"]=z}),console.log(Ae);function p(A,T){for(var z=[],B=0;B<T;B++){for(var P=[],j=0;j<T;j++)P.push(A+(B*T+j));z.push(P)}return z}function u(A,T){for(var z=[],B=0;B<T;B++){for(var P=[],j=0;j<T;j++)P.push(A+(j*T+B));z.push(P)}return z}function _(A,T,z){return T.forEach((B,P)=>{A.perm.perm[B]=z[P]}),A}function L(A){for(var T=1;T<=A;T++){var z=new je(A);z=_(z,e[A-T],i[T-1]),z=_(z,i[T-1],[...r[T-1]].reverse()),z=_(z,[...r[T-1]].reverse(),[...c[A-T]].reverse()),z=_(z,[...c[A-T]].reverse(),e[A-T]),Ae[T+"F"]=z;var B=new je(A);B.apply_state(Ae[T+"F"]),B.apply_state(Ae[T+"F"]);var P=new je(A);P.apply_state(Ae[T+"F"]),P.apply_state(Ae[T+"F"]),P.apply_state(Ae[T+"F"]),Ae[T+"F2"]=B,Ae[T+"F3"]=P,Ae[T+"F'"]=P}}function b(A){for(var T=1;T<=A;T++){var z=new je(A);z=_(z,l[T-1],a[T-1]),z=_(z,a[T-1],f[T-1]),z=_(z,f[T-1],n[T-1]),z=_(z,n[T-1],l[T-1]),Ae[T+"U"]=z;var B=new je(A);B.apply_state(Ae[T+"U"]),B.apply_state(Ae[T+"U"]);var P=new je(A);P.apply_state(Ae[T+"U"]),P.apply_state(Ae[T+"U"]),P.apply_state(Ae[T+"U"]),Ae[T+"U2"]=B,Ae[T+"U3"]=P,Ae[T+"U'"]=P}}function S(A){for(var T=1;T<=A;T++){var z=new je(A);z=_(z,h[A-T],t[A-T]),z=_(z,t[A-T],[...d[T-1]].reverse()),z=_(z,[...d[T-1]].reverse(),o[A-T]),z=_(z,o[A-T],h[A-T]),Ae[T+"R"]=z;var B=new je(A);B.apply_state(Ae[T+"R"]),B.apply_state(Ae[T+"R"]);var P=new je(A);P.apply_state(Ae[T+"R"]),P.apply_state(Ae[T+"R"]),P.apply_state(Ae[T+"R"]),Ae[T+"R2"]=B,Ae[T+"R3"]=P,Ae[T+"R'"]=P}}function E(A){for(var T=1;T<=A;T++){var z=new je(A);z=_(z,h[T-1],o[T-1]),z=_(z,o[T-1],[...d[A-T]].reverse()),z=_(z,[...d[A-T]].reverse(),t[T-1]),z=_(z,t[T-1],h[T-1]),Ae[T+"L"]=z;var B=new je(A);B.apply_state(Ae[T+"L"]),B.apply_state(Ae[T+"L"]);var P=new je(A);P.apply_state(Ae[T+"L"]),P.apply_state(Ae[T+"L"]),P.apply_state(Ae[T+"L"]),Ae[T+"L2"]=B,Ae[T+"L3"]=P,Ae[T+"L'"]=P}}function R(A){for(var T=1;T<=A;T++){var z=new je(A);z=_(z,e[T-1],[...c[T-1]].reverse()),z=_(z,[...c[T-1]].reverse(),[...r[A-T]].reverse()),z=_(z,[...r[A-T]].reverse(),i[A-T]),z=_(z,i[A-T],e[T-1]),Ae[T+"B"]=z;var B=new je(A);B.apply_state(Ae[T+"B"]),B.apply_state(Ae[T+"B"]);var P=new je(A);P.apply_state(Ae[T+"B"]),P.apply_state(Ae[T+"B"]),P.apply_state(Ae[T+"B"]),Ae[T+"B2"]=B,Ae[T+"B3"]=P,Ae[T+"B'"]=P}}function O(A){for(var T=1;T<=A;T++){var z=new je(A);z=_(z,l[A-T],n[A-T]),z=_(z,n[A-T],f[A-T]),z=_(z,f[A-T],a[A-T]),z=_(z,a[A-T],l[A-T]),Ae[T+"D"]=z;var B=new je(A);B.apply_state(Ae[T+"D"]),B.apply_state(Ae[T+"D"]);var P=new je(A);P.apply_state(Ae[T+"D"]),P.apply_state(Ae[T+"D"]),P.apply_state(Ae[T+"D"]),Ae[T+"D2"]=B,Ae[T+"D3"]=P,Ae[T+"D'"]=P}}function M(A,T){let z=p(A,T),B=u(A,T);const P=new je(T);for(var j=0;j<T;j++)for(var le=0;le<T;le++)P.perm.perm[z[j][le]]=B[T-1-j][le];P.apply_state(Ae["1"+A]),Ae[A]=P,Ae["1"+A]=P}function C(A,T,z){let B=v[z],P=p(B,T),j=u(B,T);const le=new je(T);for(var de=0;de<T;de++)for(var Z=0;Z<T;Z++)le.perm.perm[j[T-1-de][Z]]=P[de][Z];le.apply_state(Ae[T+A]),Ae[T+A]=le}}function lo(s,e){s=s.replace(/[\r\n]/g," "),console.log(s);const t=s.split(" ");Vt=new je(e);for(var n=0;n<t.length;n++)Vt.apply_state(Ae[t[n]]);return console.log(Vt.perm.perm),Vt.perm.perm,Vt}function rs(s,e){const t=s.split(" ");for(var n=0;n<t.length;n++)Vt.apply_state(Ae[t[n]]);return Vt}function wd(s,e){let t=lo(s,e),n=["U","R","F","D","L","B"],i="",r=Math.floor(e/2),o=bd(t.perm.perm);if(e%2==1){for(let a in n)i+=o[n[a]+0]+o[n[a]+r]+o[n[a]+2*r]+o[n[a]+r*e]+o[n[a]+(r*e+r)]+o[n[a]+(r*e+2*r)]+o[n[a]+e*r*2]+o[n[a]+(e*r*2+r)]+o[n[a]+(2*(r*e)+2*r)];i=i.replace(/[0-9]/g,"")}else{for(let a in n)i+=o[n[a]+0]+n[a]+o[n[a]+(e-1)]+n[a]+n[a]+n[a]+o[n[a]+e*(e-1)]+n[a]+o[n[a]+(e*e-1)];i=i.replace(/[0-9]/g,""),bi(Td(t,e))==1&&(i=i.substring(0,10)+"F"+i.substring(11,19)+"R"+i.substring(20))}return[i,Ad(t,e)]}function Ed(s,e){return bi(ir(s,e,Vt))==1?(console.log(e+1+"R"),[e+1+"R",bi(ir(s,e,Vt))]):[0,bi(ir(s,e,Vt))]}function Td(s,e){let t=s.perm.perm,n=[],i=["U","R","F","D","L","B"];for(let r in i)n[i[r]+0]=t[i[r]+0],n[i[r]+(e-1)]=t[i[r]+(e-1)],n[i[r]+e*(e-1)]=t[i[r]+e*(e-1)],n[i[r]+(e*e-1)]=t[i[r]+(e*e-1)];return n}function Ad(s,e){let t=[];t["U"+0]="UBL",t["L"+0]="UBL",t["B"+(e-1)]="UBL",t["U"+(e-1)]="URB",t["R"+(e-1)]="URB",t["B"+0]="URB",t["U"+(e-1)*e]="ULF",t["L"+(e-1)]="ULF",t["F"+0]="ULF",t["U"+(e*e-1)]="UFR",t["F"+(e-1)]="UFR",t["R"+0]="UFR",t["D"+0]="DFL",t["L"+(e*e-1)]="DFL",t["F"+(e-1)*e]="DFL",t["D"+(e-1)]="DRF",t["F"+(e*e-1)]="DRF",t["R"+(e-1)*e]="DRF",t["D"+(e-1)*e]="DLB",t["B"+(e*e-1)]="DLB",t["L"+(e-1)*e]="DLB",t["D"+(e*e-1)]="DBR",t["R"+(e*e-1)]="DBR",t["B"+(e-1)*e]="DBR";let n=[];for(let o in t)n[o]=t[s.perm.perm[o]];let i=[];i.UBL="U"+0,i.URB="U"+(e-1),i.ULF="U"+(e-1)*e,i.UFR="U"+(e*e-1),i.DFL="D"+0,i.DRF="D"+(e-1),i.DLB="D"+(e-1)*e,i.DBR="D"+(e*e-1);let r=[];for(let o in i)r[o]=n[i[o]];return bi(r)}function ir(s,e,t){let n=[],i=["U","R","F","D","L","B"],r=t.perm.perm;for(let o in i)n[i[o]+(s-1-e)]=r[i[o]+(s-1-e)],n[i[o]+s*e]=r[i[o]+s*e],n[i[o]+(s*s-1-s*e)]=r[i[o]+(s*s-1-s*e)],n[i[o]+(s*(s-1)+e)]=r[i[o]+(s*(s-1)+e)];return n}function Ld(s){return Md(Vt,s)}var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var uo={exports:{}},fs={exports:{}};(function(s){(function(){var e,t,n,i,r,o,a,c,l,h,f,d,m,v,p,u,_,L,b,S,E,R,O,M,C,A,T,z,B,P,j,le,de;[b,L,v,r,_,e]=[0,1,2,3,4,5],[T,O,C,E,l,f,a,m]=[0,1,2,3,4,5,6,7],[A,R,M,S,d,c,h,o,u,p,t,n]=[0,1,2,3,4,5,6,7,8,9,10,11],[B,j,de]=function(){var Z,N,G,ae,oe,W;return W=function(X){return X-1},oe=function(X){return W(9)+X},G=function(X){return oe(9)+X},N=function(X){return G(9)+X},ae=function(X){return N(9)+X},Z=function(X){return ae(9)+X},[[4,13,22,31,40,49],[[W(9),oe(1),G(3)],[W(7),G(1),ae(3)],[W(1),ae(1),Z(3)],[W(3),Z(1),oe(3)],[N(3),G(9),oe(7)],[N(1),ae(9),G(7)],[N(7),Z(9),ae(7)],[N(9),oe(9),Z(7)]],[[W(6),oe(2)],[W(8),G(2)],[W(4),ae(2)],[W(2),Z(2)],[N(6),oe(8)],[N(2),G(8)],[N(4),ae(8)],[N(8),Z(8)],[G(6),oe(4)],[G(4),ae(6)],[Z(6),ae(4)],[Z(4),oe(6)]]]}(),z=["U","R","F","D","L","B"],P=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],le=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],i=function(){var Z,N,G;class ae{constructor(W){W!=null?this.init(W):this.identity(),this.newCenter=function(){var X,K;for(K=[],X=0;X<=5;++X)K.push(0);return K}(),this.newCp=function(){var X,K;for(K=[],X=0;X<=7;++X)K.push(0);return K}(),this.newEp=function(){var X,K;for(K=[],X=0;X<=11;++X)K.push(0);return K}(),this.newCo=function(){var X,K;for(K=[],X=0;X<=7;++X)K.push(0);return K}(),this.newEo=function(){var X,K;for(K=[],X=0;X<=11;++X)K.push(0);return K}()}init(W){return this.center=W.center.slice(0),this.co=W.co.slice(0),this.ep=W.ep.slice(0),this.cp=W.cp.slice(0),this.eo=W.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=function(){var W,X;for(X=[],W=0;W<=7;++W)X.push(0);return X}(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=function(){var W,X;for(X=[],W=0;W<=11;++W)X.push(0);return X}()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var W,X,K,U,xe,he,Se,pe,ye,Me,ve;for(ve=[],K=U=0;U<=5;K=++U)ve[9*K+4]=z[this.center[K]];for(K=xe=0;xe<=7;K=++xe)for(W=this.cp[K],ye=this.co[K],Se=he=0;he<=2;Se=++he)ve[j[K][(Se+ye)%3]]=P[W][Se];for(K=pe=0;pe<=11;K=++pe)for(X=this.ep[K],ye=this.eo[K],Se=Me=0;Me<=1;Se=++Me)ve[de[K][(Se+ye)%2]]=le[X][Se];return ve.join("")}static fromString(W){var X,K,U,xe,he,Se,pe,ye,Me,ve,Re,Ve,Ge,J;for(U=new ae,xe=Se=0;Se<=5;xe=++Se)for(he=pe=0;pe<=5;he=++pe)W[9*xe+4]===z[he]&&(U.center[xe]=he);for(xe=ye=0;ye<=7;xe=++ye){for(ve=Me=0;Me<=2&&!((J=W[j[xe][ve]])==="U"||J==="D");ve=++Me);for(X=W[j[xe][(ve+1)%3]],K=W[j[xe][(ve+2)%3]],he=Re=0;Re<=7;he=++Re)X===P[he][1]&&K===P[he][2]&&(U.cp[xe]=he,U.co[xe]=ve%3)}for(xe=Ve=0;Ve<=11;xe=++Ve)for(he=Ge=0;Ge<=11;he=++Ge){if(W[de[xe][0]]===le[he][0]&&W[de[xe][1]]===le[he][1]){U.ep[xe]=he,U.eo[xe]=0;break}if(W[de[xe][0]]===le[he][1]&&W[de[xe][1]]===le[he][0]){U.ep[xe]=he,U.eo[xe]=1;break}}return U}clone(){return new ae(this.toJSON())}static random(){return new ae().randomize()}isSolved(){var W,X,K,U,xe,he,Se;for(K=this.clone(),K.move(K.upright()),X=xe=0;xe<=5;X=++xe)if(K.center[X]!==X)return!1;for(W=he=0;he<=7;W=++he)if(K.cp[W]!==W||K.co[W]!==0)return!1;for(U=Se=0;Se<=11;U=++Se)if(K.ep[U]!==U||K.eo[U]!==0)return!1;return!0}centerMultiply(W){var X,K,U;for(U=K=0;K<=5;U=++K)X=W.center[U],this.newCenter[U]=this.center[X];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(W){var X,K,U;for(U=K=0;K<=7;U=++K)X=W.cp[U],this.newCp[U]=this.cp[X],this.newCo[U]=(this.co[X]+W.co[U])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(W){var X,K,U;for(U=K=0;K<=11;U=++K)X=W.ep[U],this.newEp[U]=this.ep[X],this.newEo[U]=(this.eo[X]+W.eo[U])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(W){return this.centerMultiply(W),this.cornerMultiply(W),this.edgeMultiply(W),this}move(W){var X,K,U,xe,he,Se,pe,ye;for(pe=G(W),K=0,xe=pe.length;K<xe;K++)for(he=pe[K],X=he/3|0,Se=he%3,U=0,ye=Se;0<=ye?U<=ye:U>=ye;0<=ye?++U:--U)this.multiply(ae.moves[X]);return this}upright(){var W,X,K,U,xe,he;for(W=this.clone(),he=[],X=U=0;U<=5&&W.center[X]!==v;X=++U);switch(X){case r:he.push("x");break;case b:he.push("x'");break;case e:he.push("x2");break;case L:he.push("y");break;case _:he.push("y'")}for(he.length&&W.move(he[0]),K=xe=0;xe<=5&&W.center[K]!==b;K=++xe);switch(K){case _:he.push("z");break;case L:he.push("z'");break;case r:he.push("z2")}return he.join(" ")}static inverse(W){var X,K,U,xe,he,Se,pe;if(Se=function(){var ye,Me,ve,Re;for(ve=G(W),Re=[],ye=0,Me=ve.length;ye<Me;ye++)xe=ve[ye],X=xe/3|0,he=xe%3,Re.push(X*3+-(he-1)+1);return Re}(),Se.reverse(),typeof W=="string"){for(pe="",K=0,U=Se.length;K<U;K++)xe=Se[K],X=xe/3|0,he=xe%3,pe+=Z[X],he===1?pe+="2":he===2&&(pe+="'"),pe+=" ";return pe.substring(0,pe.length-1)}else return W.length!=null?Se:Se[0]}}return ae.prototype.randomize=function(){var oe,W,X,K,U,xe,he,Se,pe;return xe=function(ye,Me){return ye+Math.floor(Math.random()*(Me-ye+1))},pe=function(ye){var Me,ve;for(Me=ye.length;Me!==0;)ve=xe(0,Me-1),Me-=1,ye[Me],[ye[Me],ye[ve]]=[ye[ve],ye[Me]]},K=function(ye){var Me,ve,Re,Ve,Ge,J,Q;for(Ge=0,Q=function(){var ne,fe,ee;for(ee=[],ne=0,fe=ye.length-1;0<=fe?ne<=fe:ne>=fe;0<=fe?++ne:--ne)ee.push(!1);return ee}();;){for(Me=-1,Re=Ve=0,J=ye.length-1;0<=J?Ve<=J:Ve>=J;Re=0<=J?++Ve:--Ve)if(!Q[Re]){Me=Re;break}if(Me===-1)break;for(ve=0;!Q[Me];)Q[Me]=!0,ve++,Me=ye[Me];Ge+=ve+1}return Ge},oe=function(ye,Me){var ve;return ve=K(Me)+K(ye),ve%2===0},X=function(ye,Me){for(pe(Me),pe(ye);!oe(ye,Me);)pe(Me),pe(ye)},he=function(ye,Me){var ve,Re,Ve,Ge;for(Ve=0,ve=Re=0,Ge=ye.length-1;0<=Ge?Re<=Ge:Re>=Ge;ve=0<=Ge?++Re:--Re)Ve+=ye[ve]=xe(0,Me-1)},U=function(ye,Me){return ye.reduce(function(ve,Re){return ve+Re})%Me===0},W=function(ye,Me){for(he(ye,3);!U(ye,3);)he(ye,3);for(he(Me,2);!U(Me,2);)he(Me,2)},Se=function(){return X(this.cp,this.ep),W(this.co,this.eo),this},Se}(),ae.moves=[{center:[0,1,2,3,4,5],cp:[E,T,O,C,l,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[S,A,R,M,d,c,h,o,u,p,t,n],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[l,O,C,T,m,f,a,E],co:[2,0,0,1,1,0,0,2],ep:[u,R,M,S,n,c,h,o,d,p,t,A],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[O,f,C,E,T,l,a,m],co:[1,2,0,0,2,1,0,0],ep:[A,p,M,S,d,u,h,o,R,c,t,n],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[T,O,C,E,f,a,m,l],co:[0,0,0,0,0,0,0,0],ep:[A,R,M,S,c,h,o,d,u,p,t,n],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[T,C,a,E,l,O,f,m],co:[0,1,2,0,0,2,1,0],ep:[A,R,t,S,d,c,p,o,u,M,h,n],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[T,O,E,m,l,f,C,a],co:[0,0,1,2,0,0,2,1],ep:[A,R,M,n,d,c,h,t,u,p,S,o],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[b,v,_,r,e,L],cp:[T,O,C,E,l,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[A,R,M,S,d,c,h,o,p,t,n,u],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,L,b,v,_,r],cp:[T,O,C,E,l,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[A,S,M,o,d,R,h,c,u,p,t,n],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[_,b,v,L,r,e],cp:[T,O,C,E,l,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[M,R,h,S,A,c,d,o,u,p,t,n],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],N={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},Z={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},G=function(oe){var W,X,K,U,xe,he,Se;if(typeof oe=="string"){for(he=oe.split(/\s+/),Se=[],W=0,X=he.length;W<X;W++)if(U=he[W],U.length!==0){if(U.length>2)throw new Error(`Invalid move: ${U}`);if(K=N[U[0]],K===void 0)throw new Error(`Invalid move: ${U}`);if(U.length===1)xe=0;else if(U[1]==="2")xe=1;else if(U[1]==="'")xe=2;else throw new Error(`Invalid move: ${U}`);Se.push(K*3+xe)}return Se}else return oe.length!=null?oe:[oe]},ae.moves.push(new ae().move("R M' L'").toJSON()),ae.moves.push(new ae().move("U E' D'").toJSON()),ae.moves.push(new ae().move("F S B'").toJSON()),ae.moves.push(new ae().move("U E'").toJSON()),ae.moves.push(new ae().move("R M'").toJSON()),ae.moves.push(new ae().move("F S").toJSON()),ae.moves.push(new ae().move("D E").toJSON()),ae.moves.push(new ae().move("L M").toJSON()),ae.moves.push(new ae().move("B S'").toJSON()),ae}.call(this),s!==null?s.exports=i:this.Cube=i}).call(co)})(fs);(function(){var s,e,t,n,i,r,o,a,c,l,h,f,d,m,v,p,u,_,L,b,S,E,R,O,M,C,A,T,z,B,P,j,le,de,Z,N,G,ae,oe,W,X,K,U,xe,he,Se,pe,ye,Me,ve,Re,Ve,Ge=[].indexOf;n=this.Cube||fs.exports,[le,z,P,A,a,l,r,f]=[0,1,2,3,4,5,6,7],[j,T,B,C,h,o,c,i,m,d,s,e]=[0,1,2,3,4,5,6,7,8,9,10,11],t=function(J,Q){var ne,fe,ee;if(J<Q)return 0;for(Q>J/2&&(Q=J-Q),ee=1,ne=J,fe=1;ne!==J-Q;)ee*=ne,ee/=fe,ne--,fe++;return ee},W=function(J){var Q,ne,fe,ee;for(Q=1,ne=fe=2,ee=J;2<=ee?fe<=ee:fe>=ee;ne=2<=ee?++fe:--fe)Q*=ne;return Q},K=function(J,Q){return J>Q?J:Q},ve=function(J,Q,ne){var fe,ee,x,g,F;for(F=J[Q],fe=ee=x=Q,g=ne-1;x<=g?ee<=g:ee>=g;fe=x<=g?++ee:--ee)J[fe]=J[fe+1];return J[ne]=F},Re=function(J,Q,ne){var fe,ee,x,g,F;for(F=J[ne],fe=ee=x=ne,g=Q+1;x<=g?ee<=g:ee>=g;fe=x<=g?++ee:--ee)J[fe]=J[fe-1];return J[Q]=F},pe=function(J,Q,ne,fe=!1){var ee,x,g,F,Y,ue;return F=ne-Q,g=W(F+1),J==="corners"?(x=7,ue="cp"):(x=11,ue="ep"),Y=function(){var re,q,y;for(y=[],ee=re=0,q=F;0<=q?re<=q:re>=q;ee=0<=q?++re:--re)y.push(0);return y}(),function(re){var q,y,D,te,_e,ge,we,Te,De,Fe,He,I,ie,me,Ee,Le,Be,Ze,et,St,qe,dt,st,rn,ut,mn,gn;if(re!=null){for(ee=ge=0,He=F;0<=He?ge<=He:ge>=He;ee=0<=He?++ge:--ge)Y[ee]=ee+Q;for(y=re%g,q=re/g|0,De=this[ue],ee=we=0,I=x;0<=I?we<=I:we>=I;ee=0<=I?++we:--we)De[ee]=-1;for(te=Te=1,me=F;1<=me?Te<=me:Te>=me;te=1<=me?++Te:--Te)for(_e=y%(te+1),y=y/(te+1)|0;_e>0;)Re(Y,0,te),_e--;if(ut=F,fe)for(te=Fe=0,Ee=x;0<=Ee?Fe<=Ee:Fe>=Ee;te=0<=Ee?++Fe:--Fe)D=t(x-te,ut+1),q-D>=0&&(De[te]=Y[F-ut],q-=D,ut--);else for(te=dt=Le=x;Le<=0?dt<=0:dt>=0;te=Le<=0?++dt:--dt)D=t(te,ut+1),q-D>=0&&(De[te]=Y[ut],q-=D,ut--);return this}else{for(De=this[ue],ee=st=0,Be=F;0<=Be?st<=Be:st>=Be;ee=0<=Be?++st:--st)Y[ee]=-1;if(q=y=ut=0,fe)for(te=rn=Ze=x;Ze<=0?rn<=0:rn>=0;te=Ze<=0?++rn:--rn)Q<=(et=De[te])&&et<=ne&&(q+=t(x-te,ut+1),Y[F-ut]=De[te],ut++);else for(te=mn=0,St=x;0<=St?mn<=St:mn>=St;te=0<=St?++mn:--mn)Q<=(qe=De[te])&&qe<=ne&&(q+=t(te,ut+1),Y[ut]=De[te],ut++);for(te=gn=ie=F;ie<=0?gn<=0:gn>=0;te=ie<=0?++gn:--gn){for(_e=0;Y[te]!==Q+te;)ve(Y,0,te),_e++;y=(te+1)*y+_e}return q*g+y}}},v={twist:function(J){var Q,ne,fe,ee,x,g;if(J!=null){for(x=0,Q=ne=6;ne>=0;Q=--ne)ee=J%3,J=J/3|0,this.co[Q]=ee,x+=ee;return this.co[7]=(3-x%3)%3,this}else{for(g=0,Q=fe=0;fe<=6;Q=++fe)g=3*g+this.co[Q];return g}},flip:function(J){var Q,ne,fe,ee,x,g;if(J!=null){for(x=0,Q=ne=10;ne>=0;Q=--ne)ee=J%2,J=J/2|0,this.eo[Q]=ee,x+=ee;return this.eo[11]=(2-x%2)%2,this}else{for(g=0,Q=fe=0;fe<=10;Q=++fe)g=2*g+this.eo[Q];return g}},cornerParity:function(){var J,Q,ne,fe,ee,x,g,F,Y;for(Y=0,J=ne=ee=f,x=le+1;ee<=x?ne<=x:ne>=x;J=ee<=x?++ne:--ne)for(Q=fe=g=J-1,F=le;g<=F?fe<=F:fe>=F;Q=g<=F?++fe:--fe)this.cp[Q]>this.cp[J]&&Y++;return Y%2},edgeParity:function(){var J,Q,ne,fe,ee,x,g,F,Y;for(Y=0,J=ne=ee=e,x=j+1;ee<=x?ne<=x:ne>=x;J=ee<=x?++ne:--ne)for(Q=fe=g=J-1,F=j;g<=F?fe<=F:fe>=F;Q=g<=F?++fe:--fe)this.ep[Q]>this.ep[J]&&Y++;return Y%2},URFtoDLF:pe("corners",le,l),URtoUL:pe("edges",j,B),UBtoDF:pe("edges",C,o),URtoDF:pe("edges",j,o),FRtoBR:pe("edges",m,e,!0)};for(X in v)Ve=v[X],n.prototype[X]=Ve;N=function(J,Q,ne){var fe,ee,x,g,F,Y,ue,re,q,y,D;for(fe=J==="corners"?"cornerMultiply":"edgeMultiply",ee=new n,D=[],x=Y=0,y=ne-1;0<=y?Y<=y:Y>=y;x=0<=y?++Y:--Y){for(ee[Q](x),g=[],F=re=0;re<=5;F=++re){for(ue=n.moves[F],q=0;q<=2;++q)ee[fe](ue),g.push(ee[Q]());ee[fe](ue)}D.push(g)}return D},U=function(){var J,Q;return J=new n,Q=new n,function(ne,fe){var ee,x;for(J.URtoUL(ne),Q.UBtoDF(fe),ee=x=0;x<=7;ee=++x)if(J.ep[ee]!==-1){if(Q.ep[ee]!==-1)return-1;Q.ep[ee]=J.ep[ee]}return Q.URtoDF()}}(),S=2187,p=2048,_=2,u=11880,L=495,b=24,R=20160,O=20160,M=1320,E=1320,n.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},xe={twist:["corners",S],flip:["edges",p],FRtoBR:["edges",u],URFtoDLF:["corners",R],URtoDF:["edges",O],URtoUL:["edges",M],UBtoDF:["edges",E],mergeURtoDF:[]},n.computeMoveTables=function(...J){var Q,ne,fe,ee,x,g;for(J.length===0&&(J=function(){var F;F=[];for(fe in xe)F.push(fe);return F}()),ne=0,Q=J.length;ne<Q;ne++)g=J[ne],this.moveTables[g]===null&&(g==="mergeURtoDF"?this.moveTables.mergeURtoDF=function(){var F,Y,ue,re;for(re=[],Y=ue=0;ue<=335;Y=++ue)re.push(function(){var q,y;for(y=[],F=q=0;q<=335;F=++q)y.push(U(Y,F));return y}());return re}():([ee,x]=xe[g],this.moveTables[g]=N(ee,g,x)));return this},de=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],he=function(){var J,Q,ne,fe,ee,x,g,F;for(F=[],Q=ne=0;ne<=5;Q=++ne){for(fe=[],J=ee=0;ee<=5;J=++ee)if(J!==Q&&J!==Q-3)for(g=x=0;x<=2;g=++x)fe.push(J*3+g);F.push(fe)}return F}(),Z=[0,1,2,4,7,9,10,11,13,16],Se=function(){var J,Q,ne,fe,ee,x,g,F,Y,ue;for(ue=[],Q=fe=0;fe<=5;Q=++fe){for(ee=[],J=x=0;x<=5;J=++x)if(J!==Q&&J!==Q-3)for(Y=J===0||J===3?[0,1,2]:[1],g=0,ne=Y.length;g<ne;g++)F=Y[g],ee.push(J*3+F);ue.push(ee)}return ue}(),ye=function(J,Q,ne){var fe,ee,x;return fe=Q%8,x=Q>>3,ee=fe<<2,ne!=null?(J[x]&=~(15<<ee),J[x]|=ne<<ee,ne):(J[x]&15<<ee)>>>ee},G=function(J,Q,ne,fe){var ee,x,g,F,Y,ue,re,q,y,D,te,_e;for(_e=function(){var ge,we,Te;for(Te=[],ge=0,we=Math.ceil(Q/8)-1;0<=we?ge<=we:ge>=we;0<=we?++ge:--ge)Te.push(4294967295);return Te}(),J===1?q=de:q=Z,x=0,ye(_e,0,x),g=1;g!==Q;){for(F=ue=0,te=Q-1;0<=te?ue<=te:ue>=te;F=0<=te?++ue:--ue)if(ye(_e,F)===x)for(ee=ne(F),D=0,Y=q.length;D<Y;D++)re=q[D],y=fe(ee,re),ye(_e,y)===15&&(ye(_e,y,x+1),g++);x++}return _e},n.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},Me={sliceTwist:[1,L*S,function(J){return[J%L,J/L|0]},function(J,Q){var ne,fe,ee,x;return[ee,x]=J,ne=n.moveTables.FRtoBR[ee*24][Q]/24|0,fe=n.moveTables.twist[x][Q],fe*L+ne}],sliceFlip:[1,L*p,function(J){return[J%L,J/L|0]},function(J,Q){var ne,fe,ee,x;return[x,ne]=J,ee=n.moveTables.FRtoBR[x*24][Q]/24|0,fe=n.moveTables.flip[ne][Q],fe*L+ee}],sliceURFtoDLFParity:[2,b*R*_,function(J){return[J%2,(J/2|0)%b,(J/2|0)/b|0]},function(J,Q){var ne,fe,ee,x,g,F;return[g,F,ne]=J,fe=n.moveTables.parity[g][Q],ee=n.moveTables.FRtoBR[F][Q],x=n.moveTables.URFtoDLF[ne][Q],(x*b+ee)*2+fe}],sliceURtoDFParity:[2,b*O*_,function(J){return[J%2,(J/2|0)%b,(J/2|0)/b|0]},function(J,Q){var ne,fe,ee,x,g,F;return[g,F,ne]=J,fe=n.moveTables.parity[g][Q],ee=n.moveTables.FRtoBR[F][Q],x=n.moveTables.URtoDF[ne][Q],(x*b+ee)*2+fe}]},n.computePruningTables=function(...J){var Q,ne,fe,ee,x;for(J.length===0&&(J=function(){var g;g=[];for(fe in Me)g.push(fe);return g}()),ne=0,Q=J.length;ne<Q;ne++)x=J[ne],this.pruningTables[x]===null&&(ee=Me[x],this.pruningTables[x]=G(...ee));return this},n.initSolver=function(){return n.computeMoveTables(),n.computePruningTables()},n.prototype.solveUpright=function(J=22){var Q,ne,fe,ee,x,g,F,Y,ue;return fe=function(){var re,q,y,D,te,_e,ge;for(q=["U","R","F","D","L","B"],_e=["","2","'"],ge=[],re=y=0;y<=5;re=++y)for(te=D=0;D<=2;te=++D)ge.push(q[re]+_e[te]);return ge}(),Q=class{constructor(q){this.parent=null,this.lastMove=null,this.depth=0,q&&this.init(q)}init(q){return this.flip=q.flip(),this.twist=q.twist(),this.slice=q.FRtoBR()/b|0,this.parity=q.cornerParity(),this.URFtoDLF=q.URFtoDLF(),this.FRtoBR=q.FRtoBR(),this.URtoUL=q.URtoUL(),this.UBtoDF=q.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+fe[this.lastMove]+" ":""}move(q,y,D){return n.moveTables[q][y][D]}pruning(q,y){return ye(n.pruningTables[q],y)}moves1(){return this.lastMove!==null?he[this.lastMove/3|0]:de}minDist1(){var q,y;return q=this.pruning("sliceFlip",L*this.flip+this.slice),y=this.pruning("sliceTwist",L*this.twist+this.slice),K(q,y)}next1(q){var y;return y=ne.pop(),y.parent=this,y.lastMove=q,y.depth=this.depth+1,y.flip=this.move("flip",this.flip,q),y.twist=this.move("twist",this.twist,q),y.slice=this.move("FRtoBR",this.slice*24,q)/24|0,y}moves2(){return this.lastMove!==null?Se[this.lastMove/3|0]:Z}minDist2(){var q,y,D,te;return D=(b*this.URtoDF+this.FRtoBR)*_+this.parity,q=this.pruning("sliceURtoDFParity",D),te=(b*this.URFtoDLF+this.FRtoBR)*_+this.parity,y=this.pruning("sliceURFtoDLFParity",te),K(q,y)}init2(q=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),q))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(q){var y;return y=ne.pop(),y.parent=this,y.lastMove=q,y.depth=this.depth+1,y.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,q),y.FRtoBR=this.move("FRtoBR",this.FRtoBR,q),y.parity=this.move("parity",this.parity,q),y.URtoDF=this.move("URtoDF",this.URtoDF,q),y}},Y=null,x=function(re){var q,y,D,te;for(q=0,te=[],q=y=1,D=J;(1<=D?y<=D:y>=D)&&(ee(re,q),Y===null);q=1<=D?++y:--y)te.push(q++);return te},ee=function(re,q){var y,D,te,_e,ge,we,Te;if(q===0){if(re.minDist1()===0&&(re.lastMove===null||(ge=re.lastMove,Ge.call(Z,ge)<0)))return F(re)}else if(q>0&&re.minDist1()<=q){for(we=re.moves1(),Te=[],D=0,y=we.length;D<y&&(te=we[D],_e=re.next1(te),ee(_e,q-1),ne.push(_e),Y===null);D++)Te.push(void 0);return Te}},F=function(re){var q,y,D,te;for(re.init2(),te=[],q=y=1,D=J-re.depth;(1<=D?y<=D:y>=D)&&(g(re,q),Y===null);q=1<=D?++y:--y)te.push(q++);return te},g=function(re,q){var y,D,te,_e,ge,we;if(q===0){if(re.minDist2()===0)return Y=re.solution()}else if(q>0&&re.minDist2()<=q){for(ge=re.moves2(),we=[],D=0,y=ge.length;D<y&&(te=ge[D],_e=re.next2(te),g(_e,q-1),ne.push(_e),Y===null);D++)we.push(void 0);return we}},ne=function(){var re,q,y;for(y=[],re=0,q=J+1;0<=q?re<=q:re>=q;0<=q?++re:--re)y.push(new Q);return y}(),ue=ne.pop().init(this),x(ue),ne.push(ue),Y.length>0&&(Y=Y.substring(0,Y.length-1)),Y},oe={U:0,R:1,F:2,D:3,L:4,B:5},ae={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},n.prototype.solve=function(J=22){var Q,ne,fe,ee,x,g,F,Y,ue;for(Q=this.clone(),Y=Q.upright(),Q.move(Y),g=new n().move(Y).center,ue=Q.solveUpright(J),F=[],x=ue.split(" "),fe=0,ne=x.length;fe<ne;fe++)ee=x[fe],F.push(ae[g[oe[ee[0]]]]),ee.length>1&&(F[F.length-1]+=ee[1]);return F.join(" ")},n.scramble=function(){return n.inverse(n.random().solve())}}).call(co);(function(s){s.exports=fs.exports})(uo);const ds=Cd(uo.exports);new ds;ds.initSolver();function Dd(s){var e=ds.fromString(s);return e.solve()}const xt=new pd;xt.background=new Ye(7438450);let Si,ss;ss=new _d;Si=new Oe;let Bt=[],dn=[];var ho=document.getElementById("cubeDisplay");const Pt=new so({antialias:!0});Pt.setPixelRatio(window.devicePixelRatio);var Ei=ho.offsetWidth,Ti=ho.offsetHeight;Pt.setSize(Ei,Ti);const Un=new Dt(75,Ei/Ti,.1,1e3);Un.position.set(45,45,45);document.getElementById("cubeDisplay").appendChild(Pt.domElement);const Qi=new vd(Un,Pt.domElement);document.addEventListener("pointerdown",Od);window.addEventListener("resize",Pd);var ni=function(e){return e*Math.PI/180};function fo(){requestAnimationFrame(fo),Pt.render(xt,Un)}function Rd(){Pt.render(xt,Un)}function Pd(){Un.aspect=Ei/Ti,Un.updateProjectionMatrix(),Pt.setSize(Ei,Ti)}function Fd(s){var t=(s-1.55)*5.15;Qi.target=new V(t,t,t),Qi.minDistance=s*25,Qi.maxDistance=s*25;const e=new xd(100);var t=(s-1)*5.5;e.position.set(t,t,t),xt.add(e),Qi.update()}var oi=document.getElementById("InitialState");oi.addEventListener("input",Id);var ft=document.getElementById("Explanations"),yt=document.getElementById("SolutionState"),jr=200;oi.oninput=function(){ur()};function Oa(s,e){yt.value=yt.value+`
`+s,ft.value=ft.value+`
`+e+s}function Id(s){if(console.log(s.target.value),s.target.value=="")ps(ct),hs(ct),yt.value="",ft.value="";else try{Nd(s.target.value,ct),yt.value="",ft.value=""}catch{yt.value="",ft.value=""}}function ur(){yt.style.height="",yt.style.height=Math.min(yt.scrollHeight,jr)+"px",oi.style.height="",oi.style.height=Math.min(oi.scrollHeight,jr)+"px",ft.style.height="",ft.style.height=Math.min(ft.scrollHeight,jr)+"px"}var Ud=function(e){var t=this;this.createPieces=function(){for(var n=0;n<t.cubeSize;n++)for(var i=0;i<t.cubeSize;i++)for(var r=0;r<t.cubeSize;r++){var o=.1,a=new di(t.pieceSize,t.pieceSize,t.pieceSize),c=new lr(t.pieceSize*.85,t.pieceSize*.85),l=new Qt({color:15787074,side:gt}),h=new Qt({color:16777215,side:gt}),f=new Qt({color:13400487,side:gt}),d=new Qt({color:13983232,side:gt}),m=new Qt({color:5682409,side:gt}),v=new Qt({color:40563,side:gt}),p=new Qt({color:1118481,side:gt}),u=new _t(c,l),_=new _t(c,h),L=new _t(c,f),b=new _t(c,d),S=new _t(c,m),E=new _t(c,v),R=new _t(a,p);u.rotation.set(ni(90),0,0),_.rotation.set(ni(90),0,0),S.rotation.set(0,0,ni(90)),E.rotation.set(0,0,ni(90)),L.rotation.set(0,ni(90),0),b.rotation.set(0,ni(90),0);var O=n*this.pieceSize,M=i*this.pieceSize,C=r*this.pieceSize;u.position.set(O,M+(t.pieceSize/2+o),C),_.position.set(O,M-(t.pieceSize/2+o),C),E.position.set(O,M,C-(t.pieceSize/2+o)),S.position.set(O,M,C+(t.pieceSize/2+o)),L.position.set(O-(t.pieceSize/2+o),M,C),b.position.set(O+(t.pieceSize/2+o),M,C),R.position.set(O,M,C);var A=new nt;(n==0||i==0||r==0||n==t.cubeSize-1||i==t.cubeSize-1||r==t.cubeSize-1)&&(n==t.cubeSize-1&&(b.name="R"+(t.cubeSize*t.cubeSize-r-t.cubeSize*i-1),A.add(b),dn.push(b)),n==0&&(L.name="L"+(t.cubeSize*(t.cubeSize-1)+r-t.cubeSize*i),A.add(L),dn.push(L)),i==t.cubeSize-1&&(u.name="U"+(t.cubeSize*r+n),A.add(u),dn.push(u)),i==0&&(_.name="D"+(t.cubeSize*(t.cubeSize-r-1)+n),A.add(_),dn.push(_)),r==t.cubeSize-1&&(S.name="F"+(t.cubeSize*(t.cubeSize-i-1)+n),A.add(S),dn.push(S)),r==0&&(E.name="B"+(t.cubeSize*(t.cubeSize-i)-n-1),A.add(E),dn.push(E)),A.add(R),A.position.set(n,i,r),A.name=""+n+i+r,xt.add(A),Bt.push(A))}},this.pieceSize=10,this.cubeSize=e,this.createPieces()};function ps(s){Bt=[],dn=[],Pt.dispose(),xt.traverse(e=>{if(!!e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)e.material.dispose();else for(const t of e.material)t.dispose()}),xt.remove.apply(xt,xt.children),new Ud(s),Fd(s),fo()}function Nd(s,e){let t=lo(s,e);t=t.perm.perm;for(var n in t){let i=n.replace(/[0-9]/g,""),r=xt.getObjectByName(t[n]);switch(i){case"U":r.material.color.setHex("0xf0e442");break;case"D":r.material.color.setHex("0xffffff");break;case"L":r.material.color.setHex("0xcc79a7");break;case"R":r.material.color.setHex("0xd55e00");break;case"F":r.material.color.setHex("0x56b4e9");break;case"B":r.material.color.setHex("0x009e73");break}}}function ms(s,e){let t=rs(s);t=t.perm.perm;for(var n in t){let i=n.replace(/[0-9]/g,""),r=xt.getObjectByName(t[n]);switch(i){case"U":r.material.color.setHex("0xf0e442");break;case"D":r.material.color.setHex("0xffffff");break;case"L":r.material.color.setHex("0xcc79a7");break;case"R":r.material.color.setHex("0xd55e00");break;case"F":r.material.color.setHex("0x56b4e9");break;case"B":r.material.color.setHex("0x009e73");break}}}function Od(s){Si.x=(s.clientX-Pt.domElement.offsetLeft)/Pt.domElement.clientWidth*2-1,Si.y=-((s.clientY-Pt.domElement.offsetTop)/Pt.domElement.clientHeight)*2+1,Si.set(s.clientX/Ei*2-1,-(s.clientY/Ti)*2+1),ss.setFromCamera(Si,Un);const e=ss.intersectObjects(dn,!1);if(e.length>0){const t=e[0];console.log(t),console.log(t.object.name),t.object.material.color.setHex(po),Rd()}}$(".button").click(function(){po=$(this).attr("value"),$(".button").removeAttr("id"),$(this).attr("id","activeColor")});$(".dropdown-menu").on("click",".dropdown-item",function(s){var e=$(this).val();document.getElementById("dropdown-menu-value").innerHTML=e+"x"+e+"x"+e,ps(e),hs(e),ct=e,oi.value="",yt.value="",ft.value=""});$("#solveCornerPieceButton").click(function(){var s=document.getElementById("InitialState").value,e=wd(s,ct),t=Dd(e[0]);ms(t),yt.value=t,ft.value="[Solve Corner/ Edges with Kociemba] Parity of Corner and Center Edges: ["+e[1]+"]",ur()});$("#adjustInnerSliceButton").click(function(){let s=Math.floor(ct/2);for(let e=1;e<s;e++){let t=Ed(ct,e);t[0]==0?ft.value=ft.value+`
[No Adjustment Needed] Parity of Inner Slice `+e+" was "+t[1]:(ms(t[0]),yt.value=yt.value+`
`+t[0]+" Parity of Inner Slice "+e+" was 1 [Adjust Inner Slice "+e+" ]",ft.value=ft.value+`
Parity of Inner Slice `+e+" was [1]"),ur()}});$("#solveSliceButton").click(function(){let s=Ld(ct);console.log(s),s.forEach(e=>{yt.value=yt.value+`
`+e[1],ft.value=ft.value+`
`+e[0],ms(e[1])}),ur()});function Bd(s,e){console.log("Rotation");var t=new nt,n=[],i=(ct-1)*5.5;switch(t.position.set(i,i,i),t.rotation.set(0,0,0),s){case"U":Bt.forEach(function(o){o.position.y%10==ct-1-e&&n.push(o)});for(var r in n)t.attach(n[r]);t.rotation.y=-Math.PI/2;break;case"D":Bt.forEach(function(o){o.position.y%10==e&&n.push(o)});for(var r in n)t.attach(n[r]);t.rotation.y=Math.PI/2;break;case"F":Bt.forEach(function(o){o.position.z%10==ct-1-e&&n.push(o)});for(var r in n)t.attach(n[r]);t.rotation.z=-Math.PI/2;break;case"B":Bt.forEach(function(o){o.position.z%10==e&&n.push(o)});for(var r in n)t.attach(n[r]);t.rotation.z=Math.PI/2;break;case"R":Bt.forEach(function(o){o.position.x%10==ct-1-e&&n.push(o)});for(var r in n)t.attach(n[r]);t.rotation.x=-Math.PI/2;break;case"L":Bt.forEach(function(o){o.position.x%10==e&&n.push(o)});for(var r in n)t.attach(n[r]);t.rotation.x=Math.PI/2;break}t.updateMatrixWorld();for(var r in n)xt.attach(n[r]),n[r].position.copy(n[r].position.round())}$("#rotateButton4").click(function(){Bd("L",0)});$("#rotateButton").click(function(){console.log("rotateButton Pressed");var s=new nt,e=[],t=(ct-1)*5.5;s.position.set(t,t,t),s.rotation.set(0,0,0),Bt.forEach(function(i){i.position.y%10==0&&e.push(i)});for(var n in e)s.attach(e[n]);s.rotation.y=Math.PI/2,s.updateMatrixWorld();for(var n in e)xt.attach(e[n]),e[n].position.copy(e[n].position.round())});$("#rotateButton2").click(function(){console.log("rotateButton Pressed");var s=new nt,e=[],t=(ct-1)*5.5;s.position.set(t,t,t),s.rotation.set(0,0,0),Bt.forEach(function(i){i.position.x%10==0&&e.push(i)});for(var n in e)s.attach(e[n]);s.rotation.x=Math.PI/2,s.updateMatrixWorld();for(var n in e)xt.attach(e[n]),e[n].position.copy(e[n].position.round())});$("#rotateButton3").click(function(){console.log("rotateButton Pressed");var s=new nt,e=[],t=(ct-1)*5.5;s.position.set(t,t,t),s.rotation.set(0,0,0),Bt.forEach(function(i){i.position.z%10==4&&e.push(i)});for(var n in e)s.attach(e[n]);s.rotation.z=-Math.PI/2,s.updateMatrixWorld();for(var n in e)xt.attach(e[n]),e[n].position.copy(e[n].position.round())});var po=15787074,ct=5;ps(ct);hs(ct);
