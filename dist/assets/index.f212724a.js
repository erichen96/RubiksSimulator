(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="146",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,ro=1,Du=2,ic=1,Cu=2,wr=3,er=0,Qt=1,Dt=2,Bn=0,$i=1,so=2,ao=3,oo=4,Ru=5,qi=100,Iu=101,Pu=102,lo=103,co=104,zu=200,Nu=201,Fu=202,Ou=203,rc=204,sc=205,ku=206,Uu=207,Bu=208,Vu=209,Gu=210,Hu=0,Wu=1,qu=2,Sa=3,ju=4,Xu=5,Yu=6,$u=7,ac=0,Zu=1,Qu=2,Ln=0,Ku=1,Ju=2,eh=3,th=4,nh=5,oc=300,tr=301,nr=302,ba=303,Ta=304,Ts=306,Ea=1e3,an=1001,Aa=1002,It=1003,uo=1004,ho=1005,jt=1006,ih=1007,Es=1008,fi=1009,rh=1010,sh=1011,lc=1012,ah=1013,ri=1014,si=1015,Ar=1016,oh=1017,lh=1018,Zi=1020,ch=1021,uh=1022,on=1023,hh=1024,dh=1025,ci=1026,ir=1027,fh=1028,ph=1029,mh=1030,gh=1031,vh=1033,Us=33776,Bs=33777,Vs=33778,Gs=33779,fo=35840,po=35841,mo=35842,go=35843,xh=36196,vo=37492,xo=37496,_o=37808,wo=37809,yo=37810,Mo=37811,So=37812,bo=37813,To=37814,Eo=37815,Ao=37816,Lo=37817,Do=37818,Co=37819,Ro=37820,Io=37821,Po=36492,pi=3e3,rt=3001,_h=3200,wh=3201,yh=0,Mh=1,bn="srgb",ai="srgb-linear",Hs=7680,Sh=519,zo=35044,No="300 es",La=1035;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Fo=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function bh(n,e){return(n%e+e)%e}function qs(n,e,t){return(1-t)*n+t*e}function Oo(n){return(n&n-1)===0&&n!==0}function Da(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Br(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],m=i[5],v=i[8],p=r[0],f=r[3],y=r[6],A=r[1],T=r[4],S=r[7],E=r[2],C=r[5],F=r[8];return s[0]=o*p+a*A+c*E,s[3]=o*f+a*T+c*C,s[6]=o*y+a*S+c*F,s[1]=l*p+u*A+h*E,s[4]=l*f+u*T+h*C,s[7]=l*y+u*S+h*F,s[2]=d*p+m*A+v*E,s[5]=d*f+m*T+v*C,s[8]=d*y+m*S+v*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,v=t*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=h*p,e[1]=(r*l-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(u*t-r*c)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*c-l*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function cc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const js={[bn]:{[ai]:ui},[ai]:{[bn]:ds}},Jt={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(js[e]&&js[e][t]!==void 0){const i=js[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},en={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Gr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ai){return this.r=e,this.g=t,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ai){if(e=bh(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xs(o,s,e+1/3),this.g=Xs(o,s,e),this.b=Xs(o,s,e-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Jt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Jt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Jt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=bn){const i=uc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Jt.fromWorkingColorSpace(Gr(this,ut),e),Pt(ut.r*255,0,255)<<16^Pt(ut.g*255,0,255)<<8^Pt(ut.b*255,0,255)<<0}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ai){Jt.fromWorkingColorSpace(Gr(this,ut),t);const i=ut.r,r=ut.g,s=ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ai){return Jt.fromWorkingColorSpace(Gr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=bn){return Jt.fromWorkingColorSpace(Gr(this,ut),e),e!==bn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(en),en.h+=e,en.s+=t,en.l+=i,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(Vr);const i=qs(en.h,Vr.h,t),r=qs(en.s,Vr.s,t),s=qs(en.l,Vr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=uc;let Li;class hc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=vs("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dc{constructor(e=null){this.isSource=!0,this.uuid=Nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ys(r[o].image)):s.push(Ys(r[o]))}else s=Ys(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Th=0;class un extends yi{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=an,r=an,s=jt,o=Es,a=on,c=fi,l=1,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Nr(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=oc;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],v=c[9],p=c[2],f=c[6],y=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(m+1)/2,E=(y+1)/2,C=(u+d)/4,F=(h+p)/4,g=(v+f)/4;return T>S&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=F/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=g/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=F/s,r=g/s),this.set(i,r,s,t),this}let A=Math.sqrt((f-v)*(f-v)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(f-v)/A,this.y=(h-p)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends yi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fc extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eh extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==v){let f=1-a;const y=c*d+l*m+u*v+h*p,A=y>=0?1:-1,T=1-y*y;if(T>Number.EPSILON){const E=Math.sqrt(T),C=Math.atan2(E,y*A);f=Math.sin(f*C)/E,a=Math.sin(a*C)/E}const S=a*A;if(c=c*f+d*S,l=l*f+m*S,u=u*f+v*S,h=h*f+p*S,f===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*h+c*m-l*d,e[t+1]=c*v+u*d+l*h-a*m,e[t+2]=l*v+u*m+a*d-c*h,e[t+3]=u*v-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*v,this._y=l*m*h-d*u*v,this._z=l*u*v+d*m*h,this._w=l*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+l*m*v,this._y=l*m*h-d*u*v,this._z=l*u*v-d*m*h,this._w=l*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-l*m*v,this._y=l*m*h+d*u*v,this._z=l*u*v+d*m*h,this._w=l*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-l*m*v,this._y=l*m*h+d*u*v,this._z=l*u*v-d*m*h,this._w=l*u*h+d*m*v;break;case"YZX":this._x=d*u*h+l*m*v,this._y=l*m*h+d*u*v,this._z=l*u*v-d*m*h,this._w=l*u*h-d*m*v;break;case"XZY":this._x=d*u*h-l*m*v,this._y=l*m*h-d*u*v,this._z=l*u*v+d*m*h,this._w=l*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new V,ko=new gi;class Fr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)$n.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox),Zs.applyMatrix4(e.matrixWorld),this.union(Zs);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Hr.subVectors(this.max,pr),Di.subVectors(e.a,pr),Ci.subVectors(e.b,pr),Ri.subVectors(e.c,pr),In.subVectors(Ci,Di),Pn.subVectors(Ri,Ci),Zn.subVectors(Di,Ri);let t=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,In.z,0,-In.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!Qs(t,Di,Ci,Ri,Hr)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,Di,Ci,Ri,Hr))?!1:(Wr.crossVectors(In,Pn),t=[Wr.x,Wr.y,Wr.z],Qs(t,Di,Ci,Ri,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $n.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($n).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new V,new V,new V,new V,new V,new V,new V,new V],$n=new V,Zs=new Fr,Di=new V,Ci=new V,Ri=new V,In=new V,Pn=new V,Zn=new V,pr=new V,Hr=new V,Wr=new V,Qn=new V;function Qs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qn.fromArray(n,s);const a=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),u=i.dot(Qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ah=new Fr,mr=new V,Ks=new V;class qa{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ah.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ks)),this.expandByPoint(mr.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new V,Js=new V,qr=new V,zn=new V,ea=new V,jr=new V,ta=new V;class pc{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.direction).multiplyScalar(t).add(this.origin),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Js.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=zn.dot(this.direction),c=-zn.dot(qr),l=zn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,v;if(u>0)if(h=o*c-a,d=o*a-c,v=s*u,h>=0)if(d>=-v)if(d<=v){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(qr).multiplyScalar(d).add(Js),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,s){ea.subVectors(t,e),jr.subVectors(i,e),ta.crossVectors(ea,jr);let o=this.direction.dot(ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);const c=a*this.direction.dot(jr.crossVectors(zn,jr));if(c<0)return null;const l=a*this.direction.dot(ea.cross(zn));if(l<0||c+l>o)return null;const u=-a*zn.dot(ta);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,c,l,u,h,d,m,v,p,f){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=o,y[9]=a,y[13]=c,y[2]=l,y[6]=u,y[10]=h,y[14]=d,y[3]=m,y[7]=v,y[11]=p,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,v=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+v*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,v=l*u,p=l*h;t[0]=d+p*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,v=l*u,p=l*h;t[0]=d-p*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,v=a*u,p=a*h;t[0]=c*u,t[4]=v*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*u,t[4]=p-d*h,t[8]=v*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+v,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Dh)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Nn.crossVectors(i,Ut),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Nn.crossVectors(i,Ut)),Nn.normalize(),Xr.crossVectors(Ut,Nn),r[0]=Nn.x,r[4]=Xr.x,r[8]=Ut.x,r[1]=Nn.y,r[5]=Xr.y,r[9]=Ut.y,r[2]=Nn.z,r[6]=Xr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],m=i[13],v=i[2],p=i[6],f=i[10],y=i[14],A=i[3],T=i[7],S=i[11],E=i[15],C=r[0],F=r[4],g=r[8],x=r[12],L=r[1],q=r[5],Y=r[9],X=r[13],k=r[2],J=r[6],ue=r[10],me=r[14],Q=r[3],N=r[7],O=r[11],oe=r[15];return s[0]=o*C+a*L+c*k+l*Q,s[4]=o*F+a*q+c*J+l*N,s[8]=o*g+a*Y+c*ue+l*O,s[12]=o*x+a*X+c*me+l*oe,s[1]=u*C+h*L+d*k+m*Q,s[5]=u*F+h*q+d*J+m*N,s[9]=u*g+h*Y+d*ue+m*O,s[13]=u*x+h*X+d*me+m*oe,s[2]=v*C+p*L+f*k+y*Q,s[6]=v*F+p*q+f*J+y*N,s[10]=v*g+p*Y+f*ue+y*O,s[14]=v*x+p*X+f*me+y*oe,s[3]=A*C+T*L+S*k+E*Q,s[7]=A*F+T*q+S*J+E*N,s[11]=A*g+T*Y+S*ue+E*O,s[15]=A*x+T*X+S*me+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],v=e[3],p=e[7],f=e[11],y=e[15];return v*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*m-i*c*m)+p*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*u-s*c*u)+f*(+t*l*h-t*a*m-s*o*h+i*o*m+s*a*u-i*l*u)+y*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],v=e[12],p=e[13],f=e[14],y=e[15],A=h*f*l-p*d*l+p*c*m-a*f*m-h*c*y+a*d*y,T=v*d*l-u*f*l-v*c*m+o*f*m+u*c*y-o*d*y,S=u*p*l-v*h*l+v*a*m-o*p*m-u*a*y+o*h*y,E=v*h*c-u*p*c-v*a*d+o*p*d+u*a*f-o*h*f,C=t*A+i*T+r*S+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=A*F,e[1]=(p*d*s-h*f*s-p*r*m+i*f*m+h*r*y-i*d*y)*F,e[2]=(a*f*s-p*c*s+p*r*l-i*f*l-a*r*y+i*c*y)*F,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*m-i*c*m)*F,e[4]=T*F,e[5]=(u*f*s-v*d*s+v*r*m-t*f*m-u*r*y+t*d*y)*F,e[6]=(v*c*s-o*f*s-v*r*l+t*f*l+o*r*y-t*c*y)*F,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*m+t*c*m)*F,e[8]=S*F,e[9]=(v*h*s-u*p*s-v*i*m+t*p*m+u*i*y-t*h*y)*F,e[10]=(o*p*s-v*a*s+v*i*l-t*p*l-o*i*y+t*a*y)*F,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*m-t*a*m)*F,e[12]=E*F,e[13]=(u*p*r-v*h*r+v*i*d-t*p*d-u*i*f+t*h*f)*F,e[14]=(v*a*r-o*p*r-v*i*c+t*p*c+o*i*f-t*a*f)*F,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,v=s*h,p=o*u,f=o*h,y=a*h,A=c*l,T=c*u,S=c*h,E=i.x,C=i.y,F=i.z;return r[0]=(1-(p+y))*E,r[1]=(m+S)*E,r[2]=(v-T)*E,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+y))*C,r[6]=(f+A)*C,r[7]=0,r[8]=(v+T)*F,r[9]=(f-A)*F,r[10]=(1-(d+p))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),a=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const l=1/s,u=1/o,h=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,d=(i+r)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new V,tn=new wt,Lh=new V(0,0,0),Dh=new V(1,1,1),Nn=new V,Xr=new V,Ut=new V,Uo=new wt,Bo=new gi;class Or{constructor(e=0,t=0,i=0,r=Or.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Or.DefaultOrder="XYZ";Or.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const Vo=new V,Pi=new gi,yn=new wt,Yr=new V,gr=new V,Rh=new V,Ih=new gi,Go=new V(1,0,0),Ho=new V(0,1,0),Wo=new V(0,0,1),Ph={type:"added"},qo={type:"removed"};class vt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DefaultUp.clone();const e=new V,t=new Or,i=new gi,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new $t}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DefaultMatrixWorldAutoUpdate,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Vo.copy(e).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(gr,Yr,this.up):yn.lookAt(Yr,gr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(yn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(qo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DefaultUp=new V(0,1,0);vt.DefaultMatrixAutoUpdate=!0;vt.DefaultMatrixWorldAutoUpdate=!0;const nn=new V,Mn=new V,na=new V,Sn=new V,zi=new V,Ni=new V,jo=new V,ia=new V,ra=new V,sa=new V;class An{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Mn.subVectors(i,t),na.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Mn),c=nn.dot(na),l=Mn.dot(Mn),u=Mn.dot(na),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,v=(o*u-a*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sn),c.set(0,0),c.addScaledVector(s,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Mn.subVectors(e,t),nn.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return An.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;zi.subVectors(r,i),Ni.subVectors(s,i),ia.subVectors(e,i);const c=zi.dot(ia),l=Ni.dot(ia);if(c<=0&&l<=0)return t.copy(i);ra.subVectors(e,r);const u=zi.dot(ra),h=Ni.dot(ra);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(zi,o);sa.subVectors(e,s);const m=zi.dot(sa),v=Ni.dot(sa);if(v>=0&&m<=v)return t.copy(s);const p=m*l-c*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(Ni,a);const f=u*v-m*h;if(f<=0&&h-u>=0&&m-v>=0)return jo.subVectors(s,r),a=(h-u)/(h-u+(m-v)),t.copy(r).addScaledVector(jo,a);const y=1/(f+p+d);return o=p*y,a=d*y,t.copy(i).addScaledVector(zi,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zh=0;class As extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=$i,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=rc,this.blendDst=sc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tn extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new V,$r=new Ue;class mn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mc extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gc extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hi extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nh=0;const Ht=new wt,aa=new vt,Fi=new V,Bt=new Fr,vr=new Fr,pt=new V;class Mi extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cc(e)?gc:mc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Bt.min,vr.min),Bt.expandByPoint(pt),pt.addVectors(Bt.max,vr.max),Bt.expandByPoint(pt)):(Bt.expandByPoint(vr.min),Bt.expandByPoint(vr.max))}Bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)pt.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(e,l),pt.add(Fi)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<a;L++)l[L]=new V,u[L]=new V;const h=new V,d=new V,m=new V,v=new Ue,p=new Ue,f=new Ue,y=new V,A=new V;function T(L,q,Y){h.fromArray(r,L*3),d.fromArray(r,q*3),m.fromArray(r,Y*3),v.fromArray(o,L*2),p.fromArray(o,q*2),f.fromArray(o,Y*2),d.sub(h),m.sub(h),p.sub(v),f.sub(v);const X=1/(p.x*f.y-f.x*p.y);!isFinite(X)||(y.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(X),A.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(X),l[L].add(y),l[q].add(y),l[Y].add(y),u[L].add(A),u[q].add(A),u[Y].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let L=0,q=S.length;L<q;++L){const Y=S[L],X=Y.start,k=Y.count;for(let J=X,ue=X+k;J<ue;J+=3)T(i[J+0],i[J+1],i[J+2])}const E=new V,C=new V,F=new V,g=new V;function x(L){F.fromArray(s,L*3),g.copy(F);const q=l[L];E.copy(q),E.sub(F.multiplyScalar(F.dot(q))).normalize(),C.crossVectors(g,q);const X=C.dot(u[L])<0?-1:1;c[L*4]=E.x,c[L*4+1]=E.y,c[L*4+2]=E.z,c[L*4+3]=X}for(let L=0,q=S.length;L<q;++L){const Y=S[L],X=Y.start,k=Y.count;for(let J=X,ue=X+k;J<ue;J+=3)x(i[J+0]),x(i[J+1]),x(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,h=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),l.fromBufferAttribute(i,f),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,v=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let y=0;y<u;y++)d[v++]=l[m++]}return new mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new wt,Oi=new pc,oa=new qa,Fn=new V,On=new V,kn=new V,la=new V,ca=new V,ua=new V,Zr=new V,Qr=new V,Kr=new V,Jr=new Ue,es=new Ue,ts=new Ue,ha=new V,ns=new V;class Ct extends vt{constructor(e=new Mi,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),e.ray.intersectsSphere(oa)===!1)||(Xo.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Xo),i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,d=i.attributes.uv2,m=i.groups,v=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,f=m.length;p<f;p++){const y=m[p],A=r[y.materialIndex],T=Math.max(y.start,v.start),S=Math.min(a.count,Math.min(y.start+y.count,v.start+v.count));for(let E=T,C=S;E<C;E+=3){const F=a.getX(E),g=a.getX(E+1),x=a.getX(E+2);o=is(this,A,e,Oi,c,l,u,h,d,F,g,x),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const p=Math.max(0,v.start),f=Math.min(a.count,v.start+v.count);for(let y=p,A=f;y<A;y+=3){const T=a.getX(y),S=a.getX(y+1),E=a.getX(y+2);o=is(this,r,e,Oi,c,l,u,h,d,T,S,E),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,f=m.length;p<f;p++){const y=m[p],A=r[y.materialIndex],T=Math.max(y.start,v.start),S=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let E=T,C=S;E<C;E+=3){const F=E,g=E+1,x=E+2;o=is(this,A,e,Oi,c,l,u,h,d,F,g,x),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const p=Math.max(0,v.start),f=Math.min(c.count,v.start+v.count);for(let y=p,A=f;y<A;y+=3){const T=y,S=y+1,E=y+2;o=is(this,r,e,Oi,c,l,u,h,d,T,S,E),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Fh(n,e,t,i,r,s,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Dt,a),c===null)return null;ns.copy(a),ns.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ns);return l<t.near||l>t.far?null:{distance:l,point:ns.clone(),object:n}}function is(n,e,t,i,r,s,o,a,c,l,u,h){Fn.fromBufferAttribute(r,l),On.fromBufferAttribute(r,u),kn.fromBufferAttribute(r,h);const d=n.morphTargetInfluences;if(s&&d){Zr.set(0,0,0),Qr.set(0,0,0),Kr.set(0,0,0);for(let v=0,p=s.length;v<p;v++){const f=d[v],y=s[v];f!==0&&(la.fromBufferAttribute(y,l),ca.fromBufferAttribute(y,u),ua.fromBufferAttribute(y,h),o?(Zr.addScaledVector(la,f),Qr.addScaledVector(ca,f),Kr.addScaledVector(ua,f)):(Zr.addScaledVector(la.sub(Fn),f),Qr.addScaledVector(ca.sub(On),f),Kr.addScaledVector(ua.sub(kn),f)))}Fn.add(Zr),On.add(Qr),kn.add(Kr)}n.isSkinnedMesh&&(n.boneTransform(l,Fn),n.boneTransform(u,On),n.boneTransform(h,kn));const m=Fh(n,e,t,i,Fn,On,kn,ha);if(m){a&&(Jr.fromBufferAttribute(a,l),es.fromBufferAttribute(a,u),ts.fromBufferAttribute(a,h),m.uv=An.getUV(ha,Fn,On,kn,Jr,es,ts,new Ue)),c&&(Jr.fromBufferAttribute(c,l),es.fromBufferAttribute(c,u),ts.fromBufferAttribute(c,h),m.uv2=An.getUV(ha,Fn,On,kn,Jr,es,ts,new Ue));const v={a:l,b:u,c:h,normal:new V,materialIndex:0};An.getNormal(Fn,On,kn,v.normal),m.face=v}return m}class or extends Mi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new hi(l,3)),this.setAttribute("normal",new hi(u,3)),this.setAttribute("uv",new hi(h,2));function v(p,f,y,A,T,S,E,C,F,g,x){const L=S/F,q=E/g,Y=S/2,X=E/2,k=C/2,J=F+1,ue=g+1;let me=0,Q=0;const N=new V;for(let O=0;O<ue;O++){const oe=O*q-X;for(let le=0;le<J;le++){const B=le*L-Y;N[p]=B*A,N[f]=oe*T,N[y]=k,l.push(N.x,N.y,N.z),N[p]=0,N[f]=0,N[y]=C>0?1:-1,u.push(N.x,N.y,N.z),h.push(le/F),h.push(1-O/g),me+=1}}for(let O=0;O<g;O++)for(let oe=0;oe<F;oe++){const le=d+oe+J*O,B=d+oe+J*(O+1),H=d+(oe+1)+J*(O+1),Z=d+(oe+1)+J*O;c.push(le,B,Z),c.push(B,H,Z),Q+=6}a.addGroup(m,Q,x),m+=Q,d+=me}}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const r in i)e[r]=i[r]}return e}function Oh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const kh={clone:rr,merge:Lt};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends vc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=90,Ui=1;class Vh extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Xt(ki,Ui,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new V(1,0,0)),this.add(r);const s=new Xt(ki,Ui,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new V(-1,0,0)),this.add(s);const o=new Xt(ki,Ui,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new V(0,1,0)),this.add(o);const a=new Xt(ki,Ui,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new V(0,-1,0)),this.add(a);const c=new Xt(ki,Ui,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new V(0,0,1)),this.add(c);const l=new Xt(ki,Ui,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new V(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class xc extends un{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gh extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new or(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Bn});s.uniforms.tEquirect.value=t;const o=new Ct(r,s),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=jt),new Vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const da=new V,Hh=new V,Wh=new $t;class ei{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=da.subVectors(i,t).cross(Hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wh.getNormalMatrix(e),r=this.coplanarPoint(da).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new qa,rs=new V;class _c{constructor(e=new ei,t=new ei,i=new ei,r=new ei,s=new ei,o=new ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],m=i[9],v=i[10],p=i[11],f=i[12],y=i[13],A=i[14],T=i[15];return t[0].setComponents(a-r,h-c,p-d,T-f).normalize(),t[1].setComponents(a+r,h+c,p+d,T+f).normalize(),t[2].setComponents(a+s,h+l,p+m,T+y).normalize(),t[3].setComponents(a-s,h-l,p-m,T-y).normalize(),t[4].setComponents(a-o,h-u,p-v,T-A).normalize(),t[5].setComponents(a+o,h+u,p+v,T+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(rs.x=r.normal.x>0?e.max.x:e.min.x,rs.y=r.normal.y>0?e.max.y:e.min.y,rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,d),l.onUploadCallback();let v;if(h instanceof Float32Array)v=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(h instanceof Int16Array)v=5122;else if(h instanceof Uint32Array)v=5125;else if(h instanceof Int32Array)v=5124;else if(h instanceof Int8Array)v=5120;else if(h instanceof Uint8Array)v=5121;else if(h instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,m=u.updateRange;n.bindBuffer(h,l),m.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ls extends Mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,m=[],v=[],p=[],f=[];for(let y=0;y<u;y++){const A=y*d-o;for(let T=0;T<l;T++){const S=T*h-s;v.push(S,-A,0),p.push(0,0,1),f.push(T/a),f.push(1-y/c)}}for(let y=0;y<c;y++)for(let A=0;A<a;A++){const T=A+l*y,S=A+l*(y+1),E=A+1+l*(y+1),C=A+1+l*y;m.push(T,S,C),m.push(S,E,C)}this.setIndex(m),this.setAttribute("position",new hi(v,3)),this.setAttribute("normal",new hi(p,3)),this.setAttribute("uv",new hi(f,2))}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh="vec3 transformed = vec3( position );",Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,td=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
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
}`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,zd=`uniform bool receiveShadow;
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
#endif`,Nd=`#if defined( USE_ENVMAP )
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
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Bd=`PhysicalMaterial material;
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
#endif`,Vd=`struct PhysicalMaterial {
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
}`,Gd=`
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nf=`#ifdef USE_MORPHNORMALS
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
#endif`,rf=`#ifdef USE_MORPHTARGETS
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
#endif`,sf=`#ifdef USE_MORPHTARGETS
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
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,of=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
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
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Af=`float getShadowMask() {
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
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ff=`#ifdef USE_TRANSMISSION
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
#endif`,Of=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Uf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qf=`#include <common>
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
}`,Kf=`#if DEPTH_PACKING == 3200
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
}`,Jf=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,dp=`#define NORMAL
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
}`,fp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,vp=`#define TOON
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
}`,xp=`#define TOON
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
}`,_p=`uniform float size;
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
}`,wp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Mp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:jh,alphamap_pars_fragment:Xh,alphatest_fragment:Yh,alphatest_pars_fragment:$h,aomap_fragment:Zh,aomap_pars_fragment:Qh,begin_vertex:Kh,beginnormal_vertex:Jh,bsdfs:ed,iridescence_fragment:td,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:sd,clipping_planes_vertex:ad,color_fragment:od,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:ud,common:hd,cube_uv_reflection_fragment:dd,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,encodings_fragment:xd,encodings_pars_fragment:_d,envmap_fragment:wd,envmap_common_pars_fragment:yd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Nd,envmap_vertex:bd,fog_vertex:Td,fog_pars_vertex:Ed,fog_fragment:Ad,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_fragment:Cd,lightmap_pars_fragment:Rd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Pd,lights_pars_begin:zd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:kd,lights_phong_pars_fragment:Ud,lights_physical_fragment:Bd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Gd,lights_fragment_maps:Hd,lights_fragment_end:Wd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:Yd,map_fragment:$d,map_pars_fragment:Zd,map_particle_fragment:Qd,map_particle_pars_fragment:Kd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:ef,morphcolor_vertex:tf,morphnormal_vertex:nf,morphtarget_pars_vertex:rf,morphtarget_vertex:sf,normal_fragment_begin:af,normal_fragment_maps:of,normal_pars_fragment:lf,normal_pars_vertex:cf,normal_vertex:uf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:ff,clearcoat_pars_fragment:pf,iridescence_pars_fragment:mf,output_fragment:gf,packing:vf,premultiplied_alpha_fragment:xf,project_vertex:_f,dithering_fragment:wf,dithering_pars_fragment:yf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:Tf,shadowmap_vertex:Ef,shadowmask_pars_fragment:Af,skinbase_vertex:Lf,skinning_pars_vertex:Df,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:If,specularmap_pars_fragment:Pf,tonemapping_fragment:zf,tonemapping_pars_fragment:Nf,transmission_fragment:Ff,transmission_pars_fragment:Of,uv_pars_fragment:kf,uv_pars_vertex:Uf,uv_vertex:Bf,uv2_pars_fragment:Vf,uv2_pars_vertex:Gf,uv2_vertex:Hf,worldpos_vertex:Wf,background_vert:qf,background_frag:jf,backgroundCube_vert:Xf,backgroundCube_frag:Yf,cube_vert:$f,cube_frag:Zf,depth_vert:Qf,depth_frag:Kf,distanceRGBA_vert:Jf,distanceRGBA_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:rp,meshbasic_vert:sp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:up,meshnormal_vert:hp,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:vp,meshtoon_frag:xp,points_vert:_p,points_frag:wp,shadow_vert:yp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:bp},Te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new $t},uv2Transform:{value:new $t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $t}}},pn={basic:{uniforms:Lt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Lt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Lt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Lt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Lt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Lt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Lt([Te.points,Te.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Lt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Lt([Te.common,Te.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Lt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Lt([Te.sprite,Te.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Lt([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Lt([Te.lights,Te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};pn.physical={uniforms:Lt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function Tp(n,e,t,i,r,s,o){const a=new et(0);let c=s===!0?0:1,l,u,h=null,d=0,m=null;function v(f,y){let A=!1,T=y.isScene===!0?y.background:null;T&&T.isTexture&&(T=(y.backgroundBlurriness>0?t:e).get(T));const S=n.xr,E=S.getSession&&S.getSession();E&&E.environmentBlendMode==="additive"&&(T=null),T===null?p(a,c):T&&T.isColor&&(p(T,1),A=!0),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Ts)?(u===void 0&&(u=new Ct(new or(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:rr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,F,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,(h!==T||d!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,m=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ct(new Ls(2,2),new vi({name:"BackgroundMaterial",uniforms:rr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,m=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,y){i.buffers.color.setClear(f.r,f.g,f.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(f,y=1){a.set(f),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:v}}function Ep(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=f(null);let l=c,u=!1;function h(k,J,ue,me,Q){let N=!1;if(o){const O=p(me,ue,J);l!==O&&(l=O,m(l.object)),N=y(k,me,ue,Q),N&&A(k,me,ue,Q)}else{const O=J.wireframe===!0;(l.geometry!==me.id||l.program!==ue.id||l.wireframe!==O)&&(l.geometry=me.id,l.program=ue.id,l.wireframe=O,N=!0)}Q!==null&&t.update(Q,34963),(N||u)&&(u=!1,g(k,J,ue,me),Q!==null&&n.bindBuffer(34963,t.get(Q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function v(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function p(k,J,ue){const me=ue.wireframe===!0;let Q=a[k.id];Q===void 0&&(Q={},a[k.id]=Q);let N=Q[J.id];N===void 0&&(N={},Q[J.id]=N);let O=N[me];return O===void 0&&(O=f(d()),N[me]=O),O}function f(k){const J=[],ue=[],me=[];for(let Q=0;Q<r;Q++)J[Q]=0,ue[Q]=0,me[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ue,attributeDivisors:me,object:k,attributes:{},index:null}}function y(k,J,ue,me){const Q=l.attributes,N=J.attributes;let O=0;const oe=ue.getAttributes();for(const le in oe)if(oe[le].location>=0){const H=Q[le];let Z=N[le];if(Z===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;O++}return l.attributesNum!==O||l.index!==me}function A(k,J,ue,me){const Q={},N=J.attributes;let O=0;const oe=ue.getAttributes();for(const le in oe)if(oe[le].location>=0){let H=N[le];H===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(H=k.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),Q[le]=Z,O++}l.attributes=Q,l.attributesNum=O,l.index=me}function T(){const k=l.newAttributes;for(let J=0,ue=k.length;J<ue;J++)k[J]=0}function S(k){E(k,0)}function E(k,J){const ue=l.newAttributes,me=l.enabledAttributes,Q=l.attributeDivisors;ue[k]=1,me[k]===0&&(n.enableVertexAttribArray(k),me[k]=1),Q[k]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),Q[k]=J)}function C(){const k=l.newAttributes,J=l.enabledAttributes;for(let ue=0,me=J.length;ue<me;ue++)J[ue]!==k[ue]&&(n.disableVertexAttribArray(ue),J[ue]=0)}function F(k,J,ue,me,Q,N){i.isWebGL2===!0&&(ue===5124||ue===5125)?n.vertexAttribIPointer(k,J,ue,Q,N):n.vertexAttribPointer(k,J,ue,me,Q,N)}function g(k,J,ue,me){if(i.isWebGL2===!1&&(k.isInstancedMesh||me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const Q=me.attributes,N=ue.getAttributes(),O=J.defaultAttributeValues;for(const oe in N){const le=N[oe];if(le.location>=0){let B=Q[oe];if(B===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(B=k.instanceColor)),B!==void 0){const H=B.normalized,Z=B.itemSize,P=t.get(B);if(P===void 0)continue;const _e=P.buffer,de=P.type,Se=P.bytesPerElement;if(B.isInterleavedBufferAttribute){const pe=B.data,Me=pe.stride,ye=B.offset;if(pe.isInstancedInterleavedBuffer){for(let we=0;we<le.locationSize;we++)E(le.location+we,pe.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<le.locationSize;we++)S(le.location+we);n.bindBuffer(34962,_e);for(let we=0;we<le.locationSize;we++)F(le.location+we,Z/le.locationSize,de,H,Me*Se,(ye+Z/le.locationSize*we)*Se)}else{if(B.isInstancedBufferAttribute){for(let pe=0;pe<le.locationSize;pe++)E(le.location+pe,B.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let pe=0;pe<le.locationSize;pe++)S(le.location+pe);n.bindBuffer(34962,_e);for(let pe=0;pe<le.locationSize;pe++)F(le.location+pe,Z/le.locationSize,de,H,Z*Se,Z/le.locationSize*pe*Se)}}else if(O!==void 0){const H=O[oe];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(le.location,H);break;case 3:n.vertexAttrib3fv(le.location,H);break;case 4:n.vertexAttrib4fv(le.location,H);break;default:n.vertexAttrib1fv(le.location,H)}}}}C()}function x(){Y();for(const k in a){const J=a[k];for(const ue in J){const me=J[ue];for(const Q in me)v(me[Q].object),delete me[Q];delete J[ue]}delete a[k]}}function L(k){if(a[k.id]===void 0)return;const J=a[k.id];for(const ue in J){const me=J[ue];for(const Q in me)v(me[Q].object),delete me[Q];delete J[ue]}delete a[k.id]}function q(k){for(const J in a){const ue=a[J];if(ue[k.id]===void 0)continue;const me=ue[k.id];for(const Q in me)v(me[Q].object),delete me[Q];delete ue[k.id]}}function Y(){X(),u=!0,l!==c&&(l=c,m(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:X,dispose:x,releaseStatesOfGeometry:L,releaseStatesOfProgram:q,initAttributes:T,enableAttribute:S,disableUnusedAttributes:C}}function Ap(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Lp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),d=n.getParameter(35660),m=n.getParameter(3379),v=n.getParameter(34076),p=n.getParameter(34921),f=n.getParameter(36347),y=n.getParameter(36348),A=n.getParameter(36349),T=d>0,S=o||e.has("OES_texture_float"),E=T&&S,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:A,vertexTextures:T,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:C}}function Dp(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ei,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const v=h.length!==0||d||i!==0||r;return r=d,t=u(h,m,0),i=h.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,m){const v=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,y=n.get(h);if(!r||v===null||v.length===0||s&&!f)s?u(null):l();else{const A=s?0:i,T=A*4;let S=y.clippingState||null;c.value=S,S=u(v,d,T,m);for(let E=0;E!==T;++E)S[E]=t[E];y.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,v){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,v!==!0||f===null){const y=m+p*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(f===null||f.length<y)&&(f=new Float32Array(y));for(let T=0,S=m;T!==p;++T,S+=4)o.copy(h[T]).applyMatrix4(A,a),o.normal.toArray(f,S),f[S+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Cp(n){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=tr:a===Ta&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ba||a===Ta)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gh(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rp extends vc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Yo=[.125,.215,.35,.446,.526,.582],ii=20,fa=new Rp,$o=new et;let pa=null;const ti=(1+Math.sqrt(5))/2,Vi=1/ti,Zo=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,ti,Vi),new V(0,ti,-Vi),new V(Vi,0,ti),new V(-Vi,0,ti),new V(ti,Vi,0),new V(-ti,Vi,0)];class Qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ar,format:on,encoding:pi,depthBuffer:!1},r=Ko(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(s)),this._blurMaterial=Pp(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,r){const a=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($o),u.toneMapping=Ln,u.autoClear=!1;const m=new Tn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Ct(new or,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy($o),p=!0);for(let y=0;y<6;y++){const A=y%3;A===0?(a.up.set(0,c[y],0),a.lookAt(l[y],0,0)):A===1?(a.up.set(0,0,c[y]),a.lookAt(0,l[y],0)):(a.up.set(0,c[y],0),a.lookAt(0,0,l[y]));const T=this._cubeSize;ss(r,A*T,y>2?T:0,T,T),u.setRenderTarget(r),p&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===tr||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zo[(r-1)%Zo.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ct(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),p=s/v,f=isFinite(s)?1+Math.floor(u*p):ii;f>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ii}`);const y=[];let A=0;for(let F=0;F<ii;++F){const g=F/p,x=Math.exp(-g*g/2);y.push(x),F===0?A+=x:F<f&&(A+=2*x)}for(let F=0;F<y.length;F++)y[F]=y[F]/A;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=y,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-i;const S=this._sizeLods[r],E=3*S*(r>T-Yi?r-T+Yi:0),C=4*(this._cubeSize-S);ss(t,E,C,3*S,2*S),c.setRenderTarget(t),c.render(h,fa)}}function Ip(n){const e=[],t=[],i=[];let r=n;const s=n-Yi+1+Yo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Yi?c=Yo[o-n+Yi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,p=3,f=2,y=1,A=new Float32Array(p*v*m),T=new Float32Array(f*v*m),S=new Float32Array(y*v*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,g=C>2?0:-1,x=[F,g,0,F+2/3,g,0,F+2/3,g+1,0,F,g,0,F+2/3,g+1,0,F,g+1,0];A.set(x,p*v*C),T.set(d,f*v*C);const L=[C,C,C,C,C,C];S.set(L,y*v*C)}const E=new Mi;E.setAttribute("position",new mn(A,p)),E.setAttribute("uv",new mn(T,f)),E.setAttribute("faceIndex",new mn(S,y)),e.push(E),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ko(n,e,t){const i=new mi(n,e,t);return i.texture.mapping=Ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pp(n,e,t){const i=new Float32Array(ii),r=new V(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Jo(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function el(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function zp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ba||c===Ta,u=c===tr||c===nr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Qo(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Qo(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Np(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fp(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const v in d)e.update(d[v],34962);const m=h.morphAttributes;for(const v in m){const p=m[v];for(let f=0,y=p.length;f<y;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,v=h.attributes.position;let p=0;if(m!==null){const A=m.array;p=m.version;for(let T=0,S=A.length;T<S;T+=3){const E=A[T+0],C=A[T+1],F=A[T+2];d.push(E,C,C,F,F,E)}}else{const A=v.array;p=v.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const E=T+0,C=T+1,F=T+2;d.push(E,C,C,F,F,E)}}const f=new(cc(d)?gc:mc)(d,1);f.version=p;const y=s.get(h);y&&e.remove(y),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Op(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){n.drawElements(s,m,a,d*c),t.update(m,s,1)}function h(d,m,v){if(v===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,v),t.update(m,s,v)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function kp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Up(n,e){return n[0]-e[0]}function Bp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Vp(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=v!==void 0?v.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let J=function(){X.dispose(),s.delete(u),u.removeEventListener("dispose",J)};f!==void 0&&f.texture.dispose();const T=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],g=u.morphAttributes.color||[];let x=0;T===!0&&(x=1),S===!0&&(x=2),E===!0&&(x=3);let L=u.attributes.position.count*x,q=1;L>e.maxTextureSize&&(q=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const Y=new Float32Array(L*q*4*p),X=new fc(Y,L,q,p);X.type=si,X.needsUpdate=!0;const k=x*4;for(let ue=0;ue<p;ue++){const me=C[ue],Q=F[ue],N=g[ue],O=L*q*4*ue;for(let oe=0;oe<me.count;oe++){const le=oe*k;T===!0&&(o.fromBufferAttribute(me,oe),Y[O+le+0]=o.x,Y[O+le+1]=o.y,Y[O+le+2]=o.z,Y[O+le+3]=0),S===!0&&(o.fromBufferAttribute(Q,oe),Y[O+le+4]=o.x,Y[O+le+5]=o.y,Y[O+le+6]=o.z,Y[O+le+7]=0),E===!0&&(o.fromBufferAttribute(N,oe),Y[O+le+8]=o.x,Y[O+le+9]=o.y,Y[O+le+10]=o.z,Y[O+le+11]=N.itemSize===4?o.w:1)}}f={count:p,texture:X,size:new Ue(L,q)},s.set(u,f),u.addEventListener("dispose",J)}let y=0;for(let T=0;T<m.length;T++)y+=m[T];const A=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",m),d.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const v=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==v){p=[];for(let S=0;S<v;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<v;S++){const E=p[S];E[0]=S,E[1]=m[S]}p.sort(Bp);for(let S=0;S<8;S++)S<v&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Up);const f=u.morphAttributes.position,y=u.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const E=a[S],C=E[0],F=E[1];C!==Number.MAX_SAFE_INTEGER&&F?(f&&u.getAttribute("morphTarget"+S)!==f[C]&&u.setAttribute("morphTarget"+S,f[C]),y&&u.getAttribute("morphNormal"+S)!==y[C]&&u.setAttribute("morphNormal"+S,y[C]),r[S]=F,A+=F):(f&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),y&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const T=u.morphTargetsRelative?1:1-A;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Gp(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const yc=new un,Mc=new fc,Sc=new Eh,bc=new xc,tl=[],nl=[],il=new Float32Array(16),rl=new Float32Array(9),sl=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tl[r];if(s===void 0&&(s=new Float32Array(r),tl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ds(n,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function Xp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;sl.set(i),n.uniformMatrix2fv(this.addr,!1,sl),dt(t,i)}}function Yp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;rl.set(i),n.uniformMatrix3fv(this.addr,!1,rl),dt(t,i)}}function $p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;il.set(i),n.uniformMatrix4fv(this.addr,!1,il),dt(t,i)}}function Zp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function rm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||yc,r)}function sm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sc,r)}function am(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bc,r)}function om(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mc,r)}function lm(n){switch(n){case 5126:return Hp;case 35664:return Wp;case 35665:return qp;case 35666:return jp;case 35674:return Xp;case 35675:return Yp;case 35676:return $p;case 5124:case 35670:return Zp;case 35667:case 35671:return Qp;case 35668:case 35672:return Kp;case 35669:case 35673:return Jp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}function cm(n,e){n.uniform1fv(this.addr,e)}function um(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function hm(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function dm(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function fm(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pm(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mm(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gm(n,e){n.uniform1iv(this.addr,e)}function vm(n,e){n.uniform2iv(this.addr,e)}function xm(n,e){n.uniform3iv(this.addr,e)}function _m(n,e){n.uniform4iv(this.addr,e)}function wm(n,e){n.uniform1uiv(this.addr,e)}function ym(n,e){n.uniform2uiv(this.addr,e)}function Mm(n,e){n.uniform3uiv(this.addr,e)}function Sm(n,e){n.uniform4uiv(this.addr,e)}function bm(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yc,s[o])}function Tm(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sc,s[o])}function Em(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bc,s[o])}function Am(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mc,s[o])}function Lm(n){switch(n){case 5126:return cm;case 35664:return um;case 35665:return hm;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return _m;case 5125:return wm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Am}}class Dm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lm(t.type)}}class Cm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Lm(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function al(n,e){n.seq.push(e),n.map[e.id]=e}function Im(n,e,t){const i=n.name,r=i.length;for(ma.lastIndex=0;;){const s=ma.exec(i),o=ma.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){al(t,l===void 0?new Dm(a,n,e):new Cm(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Rm(a),al(t,h)),t=h}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Im(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ol(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Pm=0;function zm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Nm(n){switch(n){case pi:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function ll(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zm(n.getShaderSource(e),o)}else return r}function Fm(n,e){const t=Nm(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Om(n,e){let t;switch(e){case Ku:t="Linear";break;case Ju:t="Reinhard";break;case eh:t="OptimizedCineon";break;case th:t="ACESFilmic";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function km(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function Um(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bm(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yr(n){return n!==""}function cl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(n){return n.replace(Vm,Gm)}function Gm(n,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ca(t)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(n){return n.replace(Hm,Wm)}function Wm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function jm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case Ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ym(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function $m(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Zm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qm(t),l=jm(t),u=Xm(t),h=Ym(t),d=$m(t),m=t.isWebGL2?"":km(t),v=Um(s),p=r.createProgram();let f,y,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[v].filter(yr).join(`
`),f.length>0&&(f+=`
`),y=[m,v].filter(yr).join(`
`),y.length>0&&(y+=`
`)):(f=[dl(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),y=[m,dl(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Fm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=Ca(o),o=cl(o,t),o=ul(o,t),a=Ca(a),a=cl(a,t),a=ul(a,t),o=hl(o),a=hl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["#define varying in",t.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=A+f+o,S=A+y+a,E=ol(r,35633,T),C=ol(r,35632,S);if(r.attachShader(p,E),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const x=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(E).trim(),q=r.getShaderInfoLog(C).trim();let Y=!0,X=!0;if(r.getProgramParameter(p,35714)===!1){Y=!1;const k=ll(r,E,"vertex"),J=ll(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+x+`
`+k+`
`+J)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(L===""||q==="")&&(X=!1);X&&(this.diagnostics={runnable:Y,programLog:x,vertexShader:{log:L,prefix:f},fragmentShader:{log:q,prefix:y}})}r.deleteShader(E),r.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new fs(r,p)),F};let g;return this.getAttributes=function(){return g===void 0&&(g=Bm(r,p)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=C,this}let Qm=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jm(e),t.set(e,i)),i}}class Jm{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}}function eg(n,e,t,i,r,s,o){const a=new ja,c=new Km,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,x,L,q,Y){const X=q.fog,k=Y.geometry,J=g.isMeshStandardMaterial?q.environment:null,ue=(g.isMeshStandardMaterial?t:e).get(g.envMap||J),me=!!ue&&ue.mapping===Ts?ue.image.height:null,Q=v[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const N=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,O=N!==void 0?N.length:0;let oe=0;k.morphAttributes.position!==void 0&&(oe=1),k.morphAttributes.normal!==void 0&&(oe=2),k.morphAttributes.color!==void 0&&(oe=3);let le,B,H,Z;if(Q){const Me=pn[Q];le=Me.vertexShader,B=Me.fragmentShader}else le=g.vertexShader,B=g.fragmentShader,c.update(g),H=c.getVertexShaderID(g),Z=c.getFragmentShaderID(g);const P=n.getRenderTarget(),_e=g.alphaTest>0,de=g.clearcoat>0,Se=g.iridescence>0;return{isWebGL2:u,shaderID:Q,shaderName:g.type,vertexShader:le,fragmentShader:B,defines:g.defines,customVertexShaderID:H,customFragmentShaderID:Z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:P===null?n.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:pi,map:!!g.map,matcap:!!g.matcap,envMap:!!ue,envMapMode:ue&&ue.mapping,envMapCubeUVHeight:me,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Mh,tangentSpaceNormalMap:g.normalMapType===yh,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===rt,clearcoat:de,clearcoatMap:de&&!!g.clearcoatMap,clearcoatRoughnessMap:de&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!g.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!g.iridescenceMap,iridescenceThicknessMap:Se&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===$i,alphaMap:!!g.alphaMap,alphaTest:_e,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!k.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!X,useFog:g.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:g.toneMapped?n.toneMapping:Ln,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Dt,flipSided:g.side===Qt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function f(g){const x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)x.push(L),x.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(y(x,g),A(x,g),x.push(n.outputEncoding)),x.push(g.customProgramCacheKey),x.join()}function y(g,x){g.push(x.precision),g.push(x.outputEncoding),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.combine),g.push(x.vertexUvs),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function A(g,x){a.disableAll(),x.isWebGL2&&a.enable(0),x.supportsVertexTextures&&a.enable(1),x.instancing&&a.enable(2),x.instancingColor&&a.enable(3),x.map&&a.enable(4),x.matcap&&a.enable(5),x.envMap&&a.enable(6),x.lightMap&&a.enable(7),x.aoMap&&a.enable(8),x.emissiveMap&&a.enable(9),x.bumpMap&&a.enable(10),x.normalMap&&a.enable(11),x.objectSpaceNormalMap&&a.enable(12),x.tangentSpaceNormalMap&&a.enable(13),x.clearcoat&&a.enable(14),x.clearcoatMap&&a.enable(15),x.clearcoatRoughnessMap&&a.enable(16),x.clearcoatNormalMap&&a.enable(17),x.iridescence&&a.enable(18),x.iridescenceMap&&a.enable(19),x.iridescenceThicknessMap&&a.enable(20),x.displacementMap&&a.enable(21),x.specularMap&&a.enable(22),x.roughnessMap&&a.enable(23),x.metalnessMap&&a.enable(24),x.gradientMap&&a.enable(25),x.alphaMap&&a.enable(26),x.alphaTest&&a.enable(27),x.vertexColors&&a.enable(28),x.vertexAlphas&&a.enable(29),x.vertexUvs&&a.enable(30),x.vertexTangents&&a.enable(31),x.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.physicallyCorrectLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.specularIntensityMap&&a.enable(15),x.specularColorMap&&a.enable(16),x.transmission&&a.enable(17),x.transmissionMap&&a.enable(18),x.thicknessMap&&a.enable(19),x.sheen&&a.enable(20),x.sheenColorMap&&a.enable(21),x.sheenRoughnessMap&&a.enable(22),x.decodeVideoTexture&&a.enable(23),x.opaque&&a.enable(24),g.push(a.mask)}function T(g){const x=v[g.type];let L;if(x){const q=pn[x];L=kh.clone(q.uniforms)}else L=g.uniforms;return L}function S(g,x){let L;for(let q=0,Y=l.length;q<Y;q++){const X=l[q];if(X.cacheKey===x){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Zm(n,x,g,s),l.push(L)),L}function E(g){if(--g.usedTimes===0){const x=l.indexOf(g);l[x]=l[l.length-1],l.pop(),g.destroy()}}function C(g){c.remove(g)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:S,releaseProgram:E,releaseShaderCache:C,programs:l,dispose:F}}function tg(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ng(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,m,v,p,f){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:p,group:f},n[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=m,y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=p,y.group=f),e++,y}function a(h,d,m,v,p,f){const y=o(h,d,m,v,p,f);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(h,d,m,v,p,f){const y=o(h,d,m,v,p,f);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function l(h,d){t.length>1&&t.sort(h||ng),i.length>1&&i.sort(d||fl),r.length>1&&r.sort(d||fl)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ig(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new pl,n.set(i,[o])):r>=s.length?(o=new pl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function sg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ag=0;function og(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lg(n,e){const t=new rg,i=sg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,o=new wt,a=new wt;function c(u,h){let d=0,m=0,v=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let p=0,f=0,y=0,A=0,T=0,S=0,E=0,C=0,F=0,g=0;u.sort(og);const x=h!==!0?Math.PI:1;for(let q=0,Y=u.length;q<Y;q++){const X=u[q],k=X.color,J=X.intensity,ue=X.distance,me=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)d+=k.r*J*x,m+=k.g*J*x,v+=k.b*J*x;else if(X.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(X.sh.coefficients[Q],J);else if(X.isDirectionalLight){const Q=t.get(X);if(Q.color.copy(X.color).multiplyScalar(X.intensity*x),X.castShadow){const N=X.shadow,O=i.get(X);O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,r.directionalShadow[p]=O,r.directionalShadowMap[p]=me,r.directionalShadowMatrix[p]=X.shadow.matrix,S++}r.directional[p]=Q,p++}else if(X.isSpotLight){const Q=t.get(X);Q.position.setFromMatrixPosition(X.matrixWorld),Q.color.copy(k).multiplyScalar(J*x),Q.distance=ue,Q.coneCos=Math.cos(X.angle),Q.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),Q.decay=X.decay,r.spot[y]=Q;const N=X.shadow;if(X.map&&(r.spotLightMap[F]=X.map,F++,N.updateMatrices(X),X.castShadow&&g++),r.spotLightMatrix[y]=N.matrix,X.castShadow){const O=i.get(X);O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,r.spotShadow[y]=O,r.spotShadowMap[y]=me,C++}y++}else if(X.isRectAreaLight){const Q=t.get(X);Q.color.copy(k).multiplyScalar(J),Q.halfWidth.set(X.width*.5,0,0),Q.halfHeight.set(0,X.height*.5,0),r.rectArea[A]=Q,A++}else if(X.isPointLight){const Q=t.get(X);if(Q.color.copy(X.color).multiplyScalar(X.intensity*x),Q.distance=X.distance,Q.decay=X.decay,X.castShadow){const N=X.shadow,O=i.get(X);O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,r.pointShadow[f]=O,r.pointShadowMap[f]=me,r.pointShadowMatrix[f]=X.shadow.matrix,E++}r.point[f]=Q,f++}else if(X.isHemisphereLight){const Q=t.get(X);Q.skyColor.copy(X.color).multiplyScalar(J*x),Q.groundColor.copy(X.groundColor).multiplyScalar(J*x),r.hemi[T]=Q,T++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const L=r.hash;(L.directionalLength!==p||L.pointLength!==f||L.spotLength!==y||L.rectAreaLength!==A||L.hemiLength!==T||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==C||L.numSpotMaps!==F)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=A,r.point.length=f,r.hemi.length=T,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=C+F-g,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=g,L.directionalLength=p,L.pointLength=f,L.spotLength=y,L.rectAreaLength=A,L.hemiLength=T,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=C,L.numSpotMaps=F,r.version=ag++)}function l(u,h){let d=0,m=0,v=0,p=0,f=0;const y=h.matrixWorldInverse;for(let A=0,T=u.length;A<T;A++){const S=u[A];if(S.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(y),d++}else if(S.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(y),v++}else if(S.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(y),a.identity(),o.copy(S.matrixWorld),o.premultiply(y),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(y),m++}else if(S.isHemisphereLight){const E=r.hemi[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(y),f++}}}return{setup:c,setupView:l,state:r}}function ml(n,e){const t=new lg(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function cg(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new ml(n,e),t.set(s,[c])):o>=a.length?(c=new ml(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class ug extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hg extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function pg(n,e,t){let i=new _c;const r=new Ue,s=new Ue,o=new _t,a=new ug({depthPacking:wh}),c=new hg,l={},u=t.maxTextureSize,h={0:Qt,1:er,2:Dt},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Mi;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ct(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic,this.render=function(S,E,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const F=n.getRenderTarget(),g=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Bn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let q=0,Y=S.length;q<Y;q++){const X=S[q],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const J=k.getFrameExtents();if(r.multiply(J),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null){const me=this.type!==wr?{minFilter:It,magFilter:It}:{};k.map=new mi(r.x,r.y,me),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ue=k.getViewportCount();for(let me=0;me<ue;me++){const Q=k.getViewport(me);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),L.viewport(o),k.updateMatrices(X,me),i=k.getFrustum(),T(E,C,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===wr&&y(k,C),k.needsUpdate=!1}f.needsUpdate=!1,n.setRenderTarget(F,g,x)};function y(S,E){const C=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mi(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,C,m,p,null)}function A(S,E,C,F,g,x){let L=null;const q=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(q!==void 0?L=q:L=C.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const Y=L.uuid,X=E.uuid;let k=l[Y];k===void 0&&(k={},l[Y]=k);let J=k[X];J===void 0&&(J=L.clone(),k[X]=J),L=J}return L.visible=E.visible,L.wireframe=E.wireframe,x===wr?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:h[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaTest,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(C.matrixWorld),L.nearDistance=F,L.farDistance=g),L}function T(S,E,C,F,g){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&g===wr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const q=e.update(S),Y=S.material;if(Array.isArray(Y)){const X=q.groups;for(let k=0,J=X.length;k<J;k++){const ue=X[k],me=Y[ue.materialIndex];if(me&&me.visible){const Q=A(S,me,F,C.near,C.far,g);n.renderBufferDirect(C,null,q,Q,S,ue)}}}else if(Y.visible){const X=A(S,Y,F,C.near,C.far,g);n.renderBufferDirect(C,null,q,X,S,null)}}const L=S.children;for(let q=0,Y=L.length;q<Y;q++)T(L[q],E,C,F,g)}}function mg(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const re=new _t;let ge=null;const Ae=new _t(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!I&&(n.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){I=Ce},setClear:function(Ce,Be,nt,ct,Ft){Ft===!0&&(Ce*=ct,Be*=ct,nt*=ct),re.set(Ce,Be,nt,ct),Ae.equals(re)===!1&&(n.clearColor(Ce,Be,nt,ct),Ae.copy(re))},reset:function(){I=!1,ge=null,Ae.set(-1,0,0,0)}}}function s(){let I=!1,re=null,ge=null,Ae=null;return{setTest:function(Ce){Ce?_e(2929):de(2929)},setMask:function(Ce){re!==Ce&&!I&&(n.depthMask(Ce),re=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case Hu:n.depthFunc(512);break;case Wu:n.depthFunc(519);break;case qu:n.depthFunc(513);break;case Sa:n.depthFunc(515);break;case ju:n.depthFunc(514);break;case Xu:n.depthFunc(518);break;case Yu:n.depthFunc(516);break;case $u:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Ce}},setLocked:function(Ce){I=Ce},setClear:function(Ce){Ae!==Ce&&(n.clearDepth(Ce),Ae=Ce)},reset:function(){I=!1,re=null,ge=null,Ae=null}}}function o(){let I=!1,re=null,ge=null,Ae=null,Ce=null,Be=null,nt=null,ct=null,Ft=null;return{setTest:function($e){I||($e?_e(2960):de(2960))},setMask:function($e){re!==$e&&!I&&(n.stencilMask($e),re=$e)},setFunc:function($e,Et,ft){(ge!==$e||Ae!==Et||Ce!==ft)&&(n.stencilFunc($e,Et,ft),ge=$e,Ae=Et,Ce=ft)},setOp:function($e,Et,ft){(Be!==$e||nt!==Et||ct!==ft)&&(n.stencilOp($e,Et,ft),Be=$e,nt=Et,ct=ft)},setLocked:function($e){I=$e},setClear:function($e){Ft!==$e&&(n.clearStencil($e),Ft=$e)},reset:function(){I=!1,re=null,ge=null,Ae=null,Ce=null,Be=null,nt=null,ct=null,Ft=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},v=new WeakMap,p=[],f=null,y=!1,A=null,T=null,S=null,E=null,C=null,F=null,g=null,x=!1,L=null,q=null,Y=null,X=null,k=null;const J=n.getParameter(35661);let ue=!1,me=0;const Q=n.getParameter(7938);Q.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ue=me>=1):Q.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ue=me>=2);let N=null,O={};const oe=n.getParameter(3088),le=n.getParameter(2978),B=new _t().fromArray(oe),H=new _t().fromArray(le);function Z(I,re,ge){const Ae=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(I,Ce),n.texParameteri(I,10241,9728),n.texParameteri(I,10240,9728);for(let Be=0;Be<ge;Be++)n.texImage2D(re+Be,0,6408,1,1,0,6408,5121,Ae);return Ce}const P={};P[3553]=Z(3553,3553,1),P[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_e(2929),c.setFunc(Sa),Ge(!1),K(ro),_e(2884),Pe(Bn);function _e(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function de(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Se(I,re){return m[I]!==re?(n.bindFramebuffer(I,re),m[I]=re,i&&(I===36009&&(m[36160]=re),I===36160&&(m[36009]=re)),!0):!1}function pe(I,re){let ge=p,Ae=!1;if(I)if(ge=v.get(re),ge===void 0&&(ge=[],v.set(re,ge)),I.isWebGLMultipleRenderTargets){const Ce=I.texture;if(ge.length!==Ce.length||ge[0]!==36064){for(let Be=0,nt=Ce.length;Be<nt;Be++)ge[Be]=36064+Be;ge.length=Ce.length,Ae=!0}}else ge[0]!==36064&&(ge[0]=36064,Ae=!0);else ge[0]!==1029&&(ge[0]=1029,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Me(I){return f!==I?(n.useProgram(I),f=I,!0):!1}const ye={[qi]:32774,[Iu]:32778,[Pu]:32779};if(i)ye[lo]=32775,ye[co]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(ye[lo]=I.MIN_EXT,ye[co]=I.MAX_EXT)}const we={[zu]:0,[Nu]:1,[Fu]:768,[rc]:770,[Gu]:776,[Bu]:774,[ku]:772,[Ou]:769,[sc]:771,[Vu]:775,[Uu]:773};function Pe(I,re,ge,Ae,Ce,Be,nt,ct){if(I===Bn){y===!0&&(de(3042),y=!1);return}if(y===!1&&(_e(3042),y=!0),I!==Ru){if(I!==A||ct!==x){if((T!==qi||C!==qi)&&(n.blendEquation(32774),T=qi,C=qi),ct)switch(I){case $i:n.blendFuncSeparate(1,771,1,771);break;case so:n.blendFunc(1,1);break;case ao:n.blendFuncSeparate(0,769,0,1);break;case oo:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $i:n.blendFuncSeparate(770,771,1,771);break;case so:n.blendFunc(770,1);break;case ao:n.blendFuncSeparate(0,769,0,1);break;case oo:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,E=null,F=null,g=null,A=I,x=ct}return}Ce=Ce||re,Be=Be||ge,nt=nt||Ae,(re!==T||Ce!==C)&&(n.blendEquationSeparate(ye[re],ye[Ce]),T=re,C=Ce),(ge!==S||Ae!==E||Be!==F||nt!==g)&&(n.blendFuncSeparate(we[ge],we[Ae],we[Be],we[nt]),S=ge,E=Ae,F=Be,g=nt),A=I,x=null}function He(I,re){I.side===Dt?de(2884):_e(2884);let ge=I.side===Qt;re&&(ge=!ge),Ge(ge),I.blending===$i&&I.transparent===!1?Pe(Bn):Pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ae=I.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(32926):de(32926)}function Ge(I){L!==I&&(I?n.frontFace(2304):n.frontFace(2305),L=I)}function K(I){I!==Lu?(_e(2884),I!==q&&(I===ro?n.cullFace(1029):I===Du?n.cullFace(1028):n.cullFace(1032))):de(2884),q=I}function ee(I){I!==Y&&(ue&&n.lineWidth(I),Y=I)}function ie(I,re,ge){I?(_e(32823),(X!==re||k!==ge)&&(n.polygonOffset(re,ge),X=re,k=ge)):de(32823)}function fe(I){I?_e(3089):de(3089)}function te(I){I===void 0&&(I=33984+J-1),N!==I&&(n.activeTexture(I),N=I)}function w(I,re,ge){ge===void 0&&(N===null?ge=33984+J-1:ge=N);let Ae=O[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},O[ge]=Ae),(Ae.type!==I||Ae.texture!==re)&&(N!==ge&&(n.activeTexture(ge),N=ge),n.bindTexture(I,re||P[I]),Ae.type=I,Ae.texture=re)}function _(){const I=O[N];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function M(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){B.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),B.copy(I))}function Le(I){H.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),H.copy(I))}function Ie(I,re){let ge=h.get(re);ge===void 0&&(ge=new WeakMap,h.set(re,ge));let Ae=ge.get(I);Ae===void 0&&(Ae=n.getUniformBlockIndex(re,I.name),ge.set(I,Ae))}function Ne(I,re){const Ae=h.get(re).get(I);u.get(I)!==Ae&&(n.uniformBlockBinding(re,Ae,I.__bindingPointIndex),u.set(I,Ae))}function We(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},N=null,O={},m={},v=new WeakMap,p=[],f=null,y=!1,A=null,T=null,S=null,E=null,C=null,F=null,g=null,x=!1,L=null,q=null,Y=null,X=null,k=null,B.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:_e,disable:de,bindFramebuffer:Se,drawBuffers:pe,useProgram:Me,setBlending:Pe,setMaterial:He,setFlipSided:Ge,setCullFace:K,setLineWidth:ee,setPolygonOffset:ie,setScissorTest:fe,activeTexture:te,bindTexture:w,unbindTexture:_,compressedTexImage2D:R,compressedTexImage3D:j,texImage2D:xe,texImage3D:ve,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:D,texStorage3D:ne,texSubImage2D:he,texSubImage3D:se,compressedTexSubImage2D:W,compressedTexSubImage3D:M,scissor:Ee,viewport:Le,reset:We}}function gg(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),v=new WeakMap;let p;const f=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,_){return y?new OffscreenCanvas(w,_):vs("canvas")}function T(w,_,R,j){let he=1;if((w.width>j||w.height>j)&&(he=j/Math.max(w.width,w.height)),he<1||_===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const se=_?Da:Math.floor,W=se(he*w.width),M=se(he*w.height);p===void 0&&(p=A(W,M));const D=R?A(W,M):p;return D.width=W,D.height=M,D.getContext("2d").drawImage(w,0,0,W,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+W+"x"+M+")."),D}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return Oo(w.width)&&Oo(w.height)}function E(w){return a?!1:w.wrapS!==an||w.wrapT!==an||w.minFilter!==It&&w.minFilter!==jt}function C(w,_){return w.generateMipmaps&&_&&w.minFilter!==It&&w.minFilter!==jt}function F(w){n.generateMipmap(w)}function g(w,_,R,j,he=!1){if(a===!1)return _;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=_;return _===6403&&(R===5126&&(se=33326),R===5131&&(se=33325),R===5121&&(se=33321)),_===33319&&(R===5126&&(se=33328),R===5131&&(se=33327),R===5121&&(se=33323)),_===6408&&(R===5126&&(se=34836),R===5131&&(se=34842),R===5121&&(se=j===rt&&he===!1?35907:32856),R===32819&&(se=32854),R===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function x(w,_,R){return C(w,R)===!0||w.isFramebufferTexture&&w.minFilter!==It&&w.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function L(w){return w===It||w===uo||w===ho?9728:9729}function q(w){const _=w.target;_.removeEventListener("dispose",q),X(_),_.isVideoTexture&&v.delete(_)}function Y(w){const _=w.target;_.removeEventListener("dispose",Y),J(_)}function X(w){const _=i.get(w);if(_.__webglInit===void 0)return;const R=w.source,j=f.get(R);if(j){const he=j[_.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(w),Object.keys(j).length===0&&f.delete(R)}i.remove(w)}function k(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const R=w.source,j=f.get(R);delete j[_.__cacheKey],o.memory.textures--}function J(w){const _=w.texture,R=i.get(w),j=i.get(_);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)n.deleteFramebuffer(R.__webglFramebuffer[he]),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[he]);else{if(n.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let he=0;he<R.__webglColorRenderbuffer.length;he++)R.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[he]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let he=0,se=_.length;he<se;he++){const W=i.get(_[he]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(_[he])}i.remove(_),i.remove(w)}let ue=0;function me(){ue=0}function Q(){const w=ue;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),ue+=1,w}function N(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.encoding),_.join()}function O(w,_){const R=i.get(w);if(w.isVideoTexture&&fe(w),w.isRenderTargetTexture===!1&&w.version>0&&R.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(R,w,_);return}}t.bindTexture(3553,R.__webglTexture,33984+_)}function oe(w,_){const R=i.get(w);if(w.version>0&&R.__version!==w.version){de(R,w,_);return}t.bindTexture(35866,R.__webglTexture,33984+_)}function le(w,_){const R=i.get(w);if(w.version>0&&R.__version!==w.version){de(R,w,_);return}t.bindTexture(32879,R.__webglTexture,33984+_)}function B(w,_){const R=i.get(w);if(w.version>0&&R.__version!==w.version){Se(R,w,_);return}t.bindTexture(34067,R.__webglTexture,33984+_)}const H={[Ea]:10497,[an]:33071,[Aa]:33648},Z={[It]:9728,[uo]:9984,[ho]:9986,[jt]:9729,[ih]:9985,[Es]:9987};function P(w,_,R){if(R?(n.texParameteri(w,10242,H[_.wrapS]),n.texParameteri(w,10243,H[_.wrapT]),(w===32879||w===35866)&&n.texParameteri(w,32882,H[_.wrapR]),n.texParameteri(w,10240,Z[_.magFilter]),n.texParameteri(w,10241,Z[_.minFilter])):(n.texParameteri(w,10242,33071),n.texParameteri(w,10243,33071),(w===32879||w===35866)&&n.texParameteri(w,32882,33071),(_.wrapS!==an||_.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,10240,L(_.magFilter)),n.texParameteri(w,10241,L(_.minFilter)),_.minFilter!==It&&_.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(_.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function _e(w,_){let R=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",q));const j=_.source;let he=f.get(j);he===void 0&&(he={},f.set(j,he));const se=N(_);if(se!==w.__cacheKey){he[se]===void 0&&(he[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),he[se].usedTimes++;const W=he[w.__cacheKey];W!==void 0&&(he[w.__cacheKey].usedTimes--,W.usedTimes===0&&k(_)),w.__cacheKey=se,w.__webglTexture=he[se].texture}return R}function de(w,_,R){let j=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=35866),_.isData3DTexture&&(j=32879);const he=_e(w,_),se=_.source;t.bindTexture(j,w.__webglTexture,33984+R);const W=i.get(se);if(se.version!==W.__version||he===!0){t.activeTexture(33984+R),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const M=E(_)&&S(_.image)===!1;let D=T(_.image,M,!1,u);D=te(_,D);const ne=S(D)||a,xe=s.convert(_.format,_.encoding);let ve=s.convert(_.type),Ee=g(_.internalFormat,xe,ve,_.encoding,_.isVideoTexture);P(j,_,ne);let Le;const Ie=_.mipmaps,Ne=a&&_.isVideoTexture!==!0,We=W.__version===void 0||he===!0,I=x(_,D,ne);if(_.isDepthTexture)Ee=6402,a?_.type===si?Ee=36012:_.type===ri?Ee=33190:_.type===Zi?Ee=35056:Ee=33189:_.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ci&&Ee===6402&&_.type!==lc&&_.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ri,ve=s.convert(_.type)),_.format===ir&&Ee===6402&&(Ee=34041,_.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Zi,ve=s.convert(_.type))),We&&(Ne?t.texStorage2D(3553,1,Ee,D.width,D.height):t.texImage2D(3553,0,Ee,D.width,D.height,0,xe,ve,null));else if(_.isDataTexture)if(Ie.length>0&&ne){Ne&&We&&t.texStorage2D(3553,I,Ee,Ie[0].width,Ie[0].height);for(let re=0,ge=Ie.length;re<ge;re++)Le=Ie[re],Ne?t.texSubImage2D(3553,re,0,0,Le.width,Le.height,xe,ve,Le.data):t.texImage2D(3553,re,Ee,Le.width,Le.height,0,xe,ve,Le.data);_.generateMipmaps=!1}else Ne?(We&&t.texStorage2D(3553,I,Ee,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,xe,ve,D.data)):t.texImage2D(3553,0,Ee,D.width,D.height,0,xe,ve,D.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&We&&t.texStorage3D(35866,I,Ee,Ie[0].width,Ie[0].height,D.depth);for(let re=0,ge=Ie.length;re<ge;re++)Le=Ie[re],_.format!==on?xe!==null?Ne?t.compressedTexSubImage3D(35866,re,0,0,0,Le.width,Le.height,D.depth,xe,Le.data,0,0):t.compressedTexImage3D(35866,re,Ee,Le.width,Le.height,D.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,re,0,0,0,Le.width,Le.height,D.depth,xe,ve,Le.data):t.texImage3D(35866,re,Ee,Le.width,Le.height,D.depth,0,xe,ve,Le.data)}else{Ne&&We&&t.texStorage2D(3553,I,Ee,Ie[0].width,Ie[0].height);for(let re=0,ge=Ie.length;re<ge;re++)Le=Ie[re],_.format!==on?xe!==null?Ne?t.compressedTexSubImage2D(3553,re,0,0,Le.width,Le.height,xe,Le.data):t.compressedTexImage2D(3553,re,Ee,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,re,0,0,Le.width,Le.height,xe,ve,Le.data):t.texImage2D(3553,re,Ee,Le.width,Le.height,0,xe,ve,Le.data)}else if(_.isDataArrayTexture)Ne?(We&&t.texStorage3D(35866,I,Ee,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,xe,ve,D.data)):t.texImage3D(35866,0,Ee,D.width,D.height,D.depth,0,xe,ve,D.data);else if(_.isData3DTexture)Ne?(We&&t.texStorage3D(32879,I,Ee,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,xe,ve,D.data)):t.texImage3D(32879,0,Ee,D.width,D.height,D.depth,0,xe,ve,D.data);else if(_.isFramebufferTexture){if(We)if(Ne)t.texStorage2D(3553,I,Ee,D.width,D.height);else{let re=D.width,ge=D.height;for(let Ae=0;Ae<I;Ae++)t.texImage2D(3553,Ae,Ee,re,ge,0,xe,ve,null),re>>=1,ge>>=1}}else if(Ie.length>0&&ne){Ne&&We&&t.texStorage2D(3553,I,Ee,Ie[0].width,Ie[0].height);for(let re=0,ge=Ie.length;re<ge;re++)Le=Ie[re],Ne?t.texSubImage2D(3553,re,0,0,xe,ve,Le):t.texImage2D(3553,re,Ee,xe,ve,Le);_.generateMipmaps=!1}else Ne?(We&&t.texStorage2D(3553,I,Ee,D.width,D.height),t.texSubImage2D(3553,0,0,0,xe,ve,D)):t.texImage2D(3553,0,Ee,xe,ve,D);C(_,ne)&&F(j),W.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Se(w,_,R){if(_.image.length!==6)return;const j=_e(w,_),he=_.source;t.bindTexture(34067,w.__webglTexture,33984+R);const se=i.get(he);if(he.version!==se.__version||j===!0){t.activeTexture(33984+R),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const W=_.isCompressedTexture||_.image[0].isCompressedTexture,M=_.image[0]&&_.image[0].isDataTexture,D=[];for(let re=0;re<6;re++)!W&&!M?D[re]=T(_.image[re],!1,!0,l):D[re]=M?_.image[re].image:_.image[re],D[re]=te(_,D[re]);const ne=D[0],xe=S(ne)||a,ve=s.convert(_.format,_.encoding),Ee=s.convert(_.type),Le=g(_.internalFormat,ve,Ee,_.encoding),Ie=a&&_.isVideoTexture!==!0,Ne=se.__version===void 0||j===!0;let We=x(_,ne,xe);P(34067,_,xe);let I;if(W){Ie&&Ne&&t.texStorage2D(34067,We,Le,ne.width,ne.height);for(let re=0;re<6;re++){I=D[re].mipmaps;for(let ge=0;ge<I.length;ge++){const Ae=I[ge];_.format!==on?ve!==null?Ie?t.compressedTexSubImage2D(34069+re,ge,0,0,Ae.width,Ae.height,ve,Ae.data):t.compressedTexImage2D(34069+re,ge,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+re,ge,0,0,Ae.width,Ae.height,ve,Ee,Ae.data):t.texImage2D(34069+re,ge,Le,Ae.width,Ae.height,0,ve,Ee,Ae.data)}}}else{I=_.mipmaps,Ie&&Ne&&(I.length>0&&We++,t.texStorage2D(34067,We,Le,D[0].width,D[0].height));for(let re=0;re<6;re++)if(M){Ie?t.texSubImage2D(34069+re,0,0,0,D[re].width,D[re].height,ve,Ee,D[re].data):t.texImage2D(34069+re,0,Le,D[re].width,D[re].height,0,ve,Ee,D[re].data);for(let ge=0;ge<I.length;ge++){const Ce=I[ge].image[re].image;Ie?t.texSubImage2D(34069+re,ge+1,0,0,Ce.width,Ce.height,ve,Ee,Ce.data):t.texImage2D(34069+re,ge+1,Le,Ce.width,Ce.height,0,ve,Ee,Ce.data)}}else{Ie?t.texSubImage2D(34069+re,0,0,0,ve,Ee,D[re]):t.texImage2D(34069+re,0,Le,ve,Ee,D[re]);for(let ge=0;ge<I.length;ge++){const Ae=I[ge];Ie?t.texSubImage2D(34069+re,ge+1,0,0,ve,Ee,Ae.image[re]):t.texImage2D(34069+re,ge+1,Le,ve,Ee,Ae.image[re])}}}C(_,xe)&&F(34067),se.__version=he.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function pe(w,_,R,j,he){const se=s.convert(R.format,R.encoding),W=s.convert(R.type),M=g(R.internalFormat,se,W,R.encoding);i.get(_).__hasExternalTextures||(he===32879||he===35866?t.texImage3D(he,0,M,_.width,_.height,_.depth,0,se,W,null):t.texImage2D(he,0,M,_.width,_.height,0,se,W,null)),t.bindFramebuffer(36160,w),ie(_)?d.framebufferTexture2DMultisampleEXT(36160,j,he,i.get(R).__webglTexture,0,ee(_)):(he===3553||he>=34069&&he<=34074)&&n.framebufferTexture2D(36160,j,he,i.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(w,_,R){if(n.bindRenderbuffer(36161,w),_.depthBuffer&&!_.stencilBuffer){let j=33189;if(R||ie(_)){const he=_.depthTexture;he&&he.isDepthTexture&&(he.type===si?j=36012:he.type===ri&&(j=33190));const se=ee(_);ie(_)?d.renderbufferStorageMultisampleEXT(36161,se,j,_.width,_.height):n.renderbufferStorageMultisample(36161,se,j,_.width,_.height)}else n.renderbufferStorage(36161,j,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,w)}else if(_.depthBuffer&&_.stencilBuffer){const j=ee(_);R&&ie(_)===!1?n.renderbufferStorageMultisample(36161,j,35056,_.width,_.height):ie(_)?d.renderbufferStorageMultisampleEXT(36161,j,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,w)}else{const j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let he=0;he<j.length;he++){const se=j[he],W=s.convert(se.format,se.encoding),M=s.convert(se.type),D=g(se.internalFormat,W,M,se.encoding),ne=ee(_);R&&ie(_)===!1?n.renderbufferStorageMultisample(36161,ne,D,_.width,_.height):ie(_)?d.renderbufferStorageMultisampleEXT(36161,ne,D,_.width,_.height):n.renderbufferStorage(36161,D,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function ye(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O(_.depthTexture,0);const j=i.get(_.depthTexture).__webglTexture,he=ee(_);if(_.depthTexture.format===ci)ie(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,he):n.framebufferTexture2D(36160,36096,3553,j,0);else if(_.depthTexture.format===ir)ie(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,he):n.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function we(w){const _=i.get(w),R=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");ye(_.__webglFramebuffer,w)}else if(R){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=n.createRenderbuffer(),Me(_.__webglDepthbuffer[j],w,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Me(_.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Pe(w,_,R){const j=i.get(w);_!==void 0&&pe(j.__webglFramebuffer,w,w.texture,36064,3553),R!==void 0&&we(w)}function He(w){const _=w.texture,R=i.get(w),j=i.get(_);w.addEventListener("dispose",Y),w.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++);const he=w.isWebGLCubeRenderTarget===!0,se=w.isWebGLMultipleRenderTargets===!0,W=S(w)||a;if(he){R.__webglFramebuffer=[];for(let M=0;M<6;M++)R.__webglFramebuffer[M]=n.createFramebuffer()}else{if(R.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const M=w.texture;for(let D=0,ne=M.length;D<ne;D++){const xe=i.get(M[D]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ie(w)===!1){const M=se?_:[_];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let D=0;D<M.length;D++){const ne=M[D];R.__webglColorRenderbuffer[D]=n.createRenderbuffer(),n.bindRenderbuffer(36161,R.__webglColorRenderbuffer[D]);const xe=s.convert(ne.format,ne.encoding),ve=s.convert(ne.type),Ee=g(ne.internalFormat,xe,ve,ne.encoding,w.isXRRenderTarget===!0),Le=ee(w);n.renderbufferStorageMultisample(36161,Le,Ee,w.width,w.height),n.framebufferRenderbuffer(36160,36064+D,36161,R.__webglColorRenderbuffer[D])}n.bindRenderbuffer(36161,null),w.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(R.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(he){t.bindTexture(34067,j.__webglTexture),P(34067,_,W);for(let M=0;M<6;M++)pe(R.__webglFramebuffer[M],w,_,36064,34069+M);C(_,W)&&F(34067),t.unbindTexture()}else if(se){const M=w.texture;for(let D=0,ne=M.length;D<ne;D++){const xe=M[D],ve=i.get(xe);t.bindTexture(3553,ve.__webglTexture),P(3553,xe,W),pe(R.__webglFramebuffer,w,xe,36064+D,3553),C(xe,W)&&F(3553)}t.unbindTexture()}else{let M=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?M=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(M,j.__webglTexture),P(M,_,W),pe(R.__webglFramebuffer,w,_,36064,M),C(_,W)&&F(M),t.unbindTexture()}w.depthBuffer&&we(w)}function Ge(w){const _=S(w)||a,R=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let j=0,he=R.length;j<he;j++){const se=R[j];if(C(se,_)){const W=w.isWebGLCubeRenderTarget?34067:3553,M=i.get(se).__webglTexture;t.bindTexture(W,M),F(W),t.unbindTexture()}}}function K(w){if(a&&w.samples>0&&ie(w)===!1){const _=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],R=w.width,j=w.height;let he=16384;const se=[],W=w.stencilBuffer?33306:36096,M=i.get(w),D=w.isWebGLMultipleRenderTargets===!0;if(D)for(let ne=0;ne<_.length;ne++)t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ne,36161,null),t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ne,3553,null,0);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);for(let ne=0;ne<_.length;ne++){se.push(36064+ne),w.depthBuffer&&se.push(W);const xe=M.__ignoreDepthValues!==void 0?M.__ignoreDepthValues:!1;if(xe===!1&&(w.depthBuffer&&(he|=256),w.stencilBuffer&&(he|=1024)),D&&n.framebufferRenderbuffer(36008,36064,36161,M.__webglColorRenderbuffer[ne]),xe===!0&&(n.invalidateFramebuffer(36008,[W]),n.invalidateFramebuffer(36009,[W])),D){const ve=i.get(_[ne]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ve,0)}n.blitFramebuffer(0,0,R,j,0,0,R,j,he,9728),m&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),D)for(let ne=0;ne<_.length;ne++){t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ne,36161,M.__webglColorRenderbuffer[ne]);const xe=i.get(_[ne]).__webglTexture;t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ne,3553,xe,0)}t.bindFramebuffer(36009,M.__webglMultisampledFramebuffer)}}function ee(w){return Math.min(h,w.samples)}function ie(w){const _=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function fe(w){const _=o.render.frame;v.get(w)!==_&&(v.set(w,_),w.update())}function te(w,_){const R=w.encoding,j=w.format,he=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===La||R!==pi&&(R===rt?a===!1?e.has("EXT_sRGB")===!0&&j===on?(w.format=La,w.minFilter=jt,w.generateMipmaps=!1):_=hc.sRGBToLinear(_):(j!==on||he!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),_}this.allocateTextureUnit=Q,this.resetTextureUnits=me,this.setTexture2D=O,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Pe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ie}function vg(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===fi)return 5121;if(s===oh)return 32819;if(s===lh)return 32820;if(s===rh)return 5120;if(s===sh)return 5122;if(s===lc)return 5123;if(s===ah)return 5124;if(s===ri)return 5125;if(s===si)return 5126;if(s===Ar)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ch)return 6406;if(s===on)return 6408;if(s===hh)return 6409;if(s===dh)return 6410;if(s===ci)return 6402;if(s===ir)return 34041;if(s===fh)return 6403;if(s===uh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===La)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ph)return 36244;if(s===mh)return 33319;if(s===gh)return 33320;if(s===vh)return 36249;if(s===Us||s===Bs||s===Vs||s===Gs)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Us)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Us)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fo||s===po||s===mo||s===go)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===fo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===po)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===go)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vo||s===xo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vo)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_o||s===wo||s===yo||s===Mo||s===So||s===bo||s===To||s===Eo||s===Ao||s===Lo||s===Do||s===Co||s===Ro||s===Io)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_o)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===So)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===To)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ao)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Do)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Co)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ro)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Io)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Po)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Zi?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class xg extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(l.joints[p.jointName]===void 0){const A=new as;A.matrixAutoUpdate=!1,A.visible=!1,l.joints[p.jointName]=A,l.add(A)}const y=l.joints[p.jointName];f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=f.radius),y.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class wg extends un{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:ci,u!==ci&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ci&&(i=ri),i===void 0&&u===ir&&(i=Zi),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=c!==void 0?c:It,this.flipY=!1,this.generateMipmaps=!1}}class yg extends yi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,d=null,m=null;const v=t.getContextAttributes();let p=null,f=null;const y=[],A=[],T=new Xt;T.layers.enable(1),T.viewport=new _t;const S=new Xt;S.layers.enable(2),S.viewport=new _t;const E=[T,S],C=new xg;C.layers.enable(1),C.layers.enable(2);let F=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=y[N];return O===void 0&&(O=new ga,y[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=y[N];return O===void 0&&(O=new ga,y[N]=O),O.getGripSpace()},this.getHand=function(N){let O=y[N];return O===void 0&&(O=new ga,y[N]=O),O.getHandSpace()};function x(N){const O=A.indexOf(N.inputSource);if(O===-1)return;const oe=y[O];oe!==void 0&&oe.dispatchEvent({type:N.type,data:N.inputSource})}function L(){r.removeEventListener("select",x),r.removeEventListener("selectstart",x),r.removeEventListener("selectend",x),r.removeEventListener("squeeze",x),r.removeEventListener("squeezestart",x),r.removeEventListener("squeezeend",x),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",q);for(let N=0;N<y.length;N++){const O=A[N];O!==null&&(A[N]=null,y[N].disconnect(O))}F=null,g=null,e.setRenderTarget(p),d=null,h=null,u=null,r=null,f=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",x),r.addEventListener("selectstart",x),r.addEventListener("selectend",x),r.addEventListener("squeeze",x),r.addEventListener("squeezestart",x),r.addEventListener("squeezeend",x),r.addEventListener("end",L),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:d}),f=new mi(d.framebufferWidth,d.framebufferHeight,{format:on,type:fi,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let O=null,oe=null,le=null;v.depth&&(le=v.stencil?35056:33190,O=v.stencil?ir:ci,oe=v.stencil?Zi:ri);const B={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(B),r.updateRenderState({layers:[h]}),f=new mi(h.textureWidth,h.textureHeight,{format:on,type:fi,depthTexture:new wg(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const H=e.properties.get(f);H.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function q(N){for(let O=0;O<N.removed.length;O++){const oe=N.removed[O],le=A.indexOf(oe);le>=0&&(A[le]=null,y[le].dispatchEvent({type:"disconnected",data:oe}))}for(let O=0;O<N.added.length;O++){const oe=N.added[O];let le=A.indexOf(oe);if(le===-1){for(let H=0;H<y.length;H++)if(H>=A.length){A.push(oe),le=H;break}else if(A[H]===null){A[H]=oe,le=H;break}if(le===-1)break}const B=y[le];B&&B.dispatchEvent({type:"connected",data:oe})}}const Y=new V,X=new V;function k(N,O,oe){Y.setFromMatrixPosition(O.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const le=Y.distanceTo(X),B=O.projectionMatrix.elements,H=oe.projectionMatrix.elements,Z=B[14]/(B[10]-1),P=B[14]/(B[10]+1),_e=(B[9]+1)/B[5],de=(B[9]-1)/B[5],Se=(B[8]-1)/B[0],pe=(H[8]+1)/H[0],Me=Z*Se,ye=Z*pe,we=le/(-Se+pe),Pe=we*-Se;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Pe),N.translateZ(we),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const He=Z+we,Ge=P+we,K=Me-Pe,ee=ye+(le-Pe),ie=_e*P/Ge*He,fe=de*P/Ge*He;N.projectionMatrix.makePerspective(K,ee,ie,fe,He,Ge)}function J(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=S.near=T.near=N.near,C.far=S.far=T.far=N.far,(F!==C.near||g!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,g=C.far);const O=N.parent,oe=C.cameras;J(C,O);for(let B=0;B<oe.length;B++)J(oe[B],O);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.matrix.copy(C.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const le=N.children;for(let B=0,H=le.length;B<H;B++)le[B].updateMatrixWorld(!0);oe.length===2?k(C,T,S):C.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let ue=null;function me(N,O){if(l=O.getViewerPose(c||o),m=O,l!==null){const oe=l.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let le=!1;oe.length!==C.cameras.length&&(C.cameras.length=0,le=!0);for(let B=0;B<oe.length;B++){const H=oe[B];let Z=null;if(d!==null)Z=d.getViewport(H);else{const _e=u.getViewSubImage(h,H);Z=_e.viewport,B===0&&(e.setRenderTargetTextures(f,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(f))}let P=E[B];P===void 0&&(P=new Xt,P.layers.enable(B),P.viewport=new _t,E[B]=P),P.matrix.fromArray(H.transform.matrix),P.projectionMatrix.fromArray(H.projectionMatrix),P.viewport.set(Z.x,Z.y,Z.width,Z.height),B===0&&C.matrix.copy(P.matrix),le===!0&&C.cameras.push(P)}}for(let oe=0;oe<y.length;oe++){const le=A[oe],B=y[oe];le!==null&&B!==void 0&&B.update(le,O,c||o)}ue&&ue(N,O),m=null}const Q=new wc;Q.setAnimationLoop(me),this.setAnimationLoop=function(N){ue=N},this.dispose=function(){}}}function Mg(n,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,y,A,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),l(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,y,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Qt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Qt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*S}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let A;f.map?A=f.map:f.specularMap?A=f.specularMap:f.displacementMap?A=f.displacementMap:f.normalMap?A=f.normalMap:f.bumpMap?A=f.bumpMap:f.roughnessMap?A=f.roughnessMap:f.metalnessMap?A=f.metalnessMap:f.alphaMap?A=f.alphaMap:f.emissiveMap?A=f.emissiveMap:f.clearcoatMap?A=f.clearcoatMap:f.clearcoatNormalMap?A=f.clearcoatNormalMap:f.clearcoatRoughnessMap?A=f.clearcoatRoughnessMap:f.iridescenceMap?A=f.iridescenceMap:f.iridescenceThicknessMap?A=f.iridescenceThicknessMap:f.specularIntensityMap?A=f.specularIntensityMap:f.specularColorMap?A=f.specularColorMap:f.transmissionMap?A=f.transmissionMap:f.thicknessMap?A=f.thicknessMap:f.sheenColorMap?A=f.sheenColorMap:f.sheenRoughnessMap&&(A=f.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix));let T;f.aoMap?T=f.aoMap:f.lightMap&&(T=f.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,y,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=A*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let T;f.map?T=f.map:f.alphaMap&&(T=f.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Qt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Sg(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function c(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function l(A,T){let S=r[A.id];S===void 0&&(v(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",f));const E=T.program;i.updateUBOMapping(A,E);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const T=h();A.__bindingPointIndex=T;const S=n.createBuffer(),E=A.__size,C=A.usage;return n.bindBuffer(35345,S),n.bufferData(35345,E,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,T,S),S}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],S=A.uniforms,E=A.__cache;n.bindBuffer(35345,T);for(let C=0,F=S.length;C<F;C++){const g=S[C];if(m(g,C,E)===!0){const x=g.value,L=g.__offset;typeof x=="number"?(g.__data[0]=x,n.bufferSubData(35345,L,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):x.toArray(g.__data),n.bufferSubData(35345,L,g.__data))}}n.bindBuffer(35345,null)}function m(A,T,S){const E=A.value;if(S[T]===void 0)return typeof E=="number"?S[T]=E:S[T]=E.clone(),!0;if(typeof E=="number"){if(S[T]!==E)return S[T]=E,!0}else{const C=S[T];if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(A){const T=A.uniforms;let S=0;const E=16;let C=0;for(let F=0,g=T.length;F<g;F++){const x=T[F],L=p(x);if(x.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,F>0){C=S%E;const q=E-C;C!==0&&q-L.boundary<0&&(S+=E-C,x.__offset=S)}S+=L.storage}return C=S%E,C>0&&(S+=E-C),A.__size=S,A.__cache={},this}function p(A){const T=A.value,S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function f(A){const T=A.target;T.removeEventListener("dispose",f);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:y}}function bg(){const n=vs("canvas");return n.style.display="block",n}function Tc(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:bg(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,d=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,y=0,A=0,T=null,S=-1,E=null;const C=new _t,F=new _t;let g=null,x=e.width,L=e.height,q=1,Y=null,X=null;const k=new _t(0,0,x,L),J=new _t(0,0,x,L);let ue=!1;const me=new _c;let Q=!1,N=!1,O=null;const oe=new wt,le=new Ue,B=new V,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return T===null?q:1}let P=t;function _e(b,G){for(let ae=0;ae<b.length;ae++){const U=b[ae],ce=e.getContext(U,G);if(ce!==null)return ce}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),P===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),P=_e(G,b),P===null)throw _e(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,Se,pe,Me,ye,we,Pe,He,Ge,K,ee,ie,fe,te,w,_,R,j,he,se,W,M,D,ne;function xe(){de=new Np(P),Se=new Lp(P,de,n),de.init(Se),M=new vg(P,de,Se),pe=new mg(P,de,Se),Me=new kp,ye=new tg,we=new gg(P,de,pe,ye,Se,M,Me),Pe=new Cp(p),He=new zp(p),Ge=new qh(P,Se),D=new Ep(P,de,Ge,Se),K=new Fp(P,Ge,Me,D),ee=new Gp(P,K,Ge,Me),he=new Vp(P,Se,we),_=new Dp(ye),ie=new eg(p,Pe,He,de,Se,D,_),fe=new Mg(p,ye),te=new ig,w=new cg(de,Se),j=new Tp(p,Pe,He,pe,ee,u,o),R=new pg(p,ee,Se),ne=new Sg(P,Me,Se,pe),se=new Ap(P,de,Me,Se),W=new Op(P,de,Me,Se),Me.programs=ie.programs,p.capabilities=Se,p.extensions=de,p.properties=ye,p.renderLists=te,p.shadowMap=R,p.state=pe,p.info=Me}xe();const ve=new yg(p,P);this.xr=ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(x,L,!1))},this.getSize=function(b){return b.set(x,L)},this.setSize=function(b,G,ae){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}x=b,L=G,e.width=Math.floor(b*q),e.height=Math.floor(G*q),ae!==!1&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(x*q,L*q).floor()},this.setDrawingBufferSize=function(b,G,ae){x=b,L=G,q=ae,e.width=Math.floor(b*ae),e.height=Math.floor(G*ae),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,G,ae,U){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,G,ae,U),pe.viewport(C.copy(k).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,G,ae,U){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,G,ae,U),pe.scissor(F.copy(J).multiplyScalar(q).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(b){pe.setScissorTest(ue=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(b=!0,G=!0,ae=!0){let U=0;b&&(U|=16384),G&&(U|=256),ae&&(U|=1024),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),te.dispose(),w.dispose(),ye.dispose(),Pe.dispose(),He.dispose(),ee.dispose(),D.dispose(),ne.dispose(),ie.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ae),ve.removeEventListener("sessionend",Ce),O&&(O.dispose(),O=null),Be.stop()};function Ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Me.autoReset,G=R.enabled,ae=R.autoUpdate,U=R.needsUpdate,ce=R.type;xe(),Me.autoReset=b,R.enabled=G,R.autoUpdate=ae,R.needsUpdate=U,R.type=ce}function Ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const G=b.target;G.removeEventListener("dispose",Ne),We(G)}function We(b){I(b),ye.remove(b)}function I(b){const G=ye.get(b).programs;G!==void 0&&(G.forEach(function(ae){ie.releaseProgram(ae)}),b.isShaderMaterial&&ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,ae,U,ce,Re){G===null&&(G=H);const ze=ce.isMesh&&ce.matrixWorld.determinant()<0,ke=Mt(b,G,ae,U,ce);pe.setMaterial(U,ze);let Fe=ae.index;const Xe=ae.attributes.position;if(Fe===null){if(Xe===void 0||Xe.count===0)return}else if(Fe.count===0)return;let Ve=1;U.wireframe===!0&&(Fe=K.getWireframeAttribute(ae),Ve=2),D.setup(ce,U,ke,ae,Fe);let qe,it=se;Fe!==null&&(qe=Ge.get(Fe),it=W,it.setIndex(qe));const Xn=Fe!==null?Fe.count:Xe.count,Si=ae.drawRange.start*Ve,bi=ae.drawRange.count*Ve,fn=Re!==null?Re.start*Ve:0,Ye=Re!==null?Re.count*Ve:1/0,Ti=Math.max(Si,fn),st=Math.min(Xn,Si+bi,fn+Ye)-1,Gt=Math.max(0,st-Ti+1);if(Gt!==0){if(ce.isMesh)U.wireframe===!0?(pe.setLineWidth(U.wireframeLinewidth*Z()),it.setMode(1)):it.setMode(4);else if(ce.isLine){let Rn=U.linewidth;Rn===void 0&&(Rn=1),pe.setLineWidth(Rn*Z()),ce.isLineSegments?it.setMode(1):ce.isLineLoop?it.setMode(2):it.setMode(3)}else ce.isPoints?it.setMode(0):ce.isSprite&&it.setMode(4);if(ce.isInstancedMesh)it.renderInstances(Ti,Gt,ce.count);else if(ae.isInstancedBufferGeometry){const Rn=Math.min(ae.instanceCount,ae._maxInstanceCount);it.renderInstances(Ti,Gt,Rn)}else it.render(Ti,Gt)}},this.compile=function(b,G){function ae(U,ce,Re){U.transparent===!0&&U.side===Dt?(U.side=Qt,U.needsUpdate=!0,ft(U,ce,Re),U.side=er,U.needsUpdate=!0,ft(U,ce,Re),U.side=Dt):ft(U,ce,Re)}d=w.get(b),d.init(),v.push(d),b.traverseVisible(function(U){U.isLight&&U.layers.test(G.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(U){const ce=U.material;if(ce)if(Array.isArray(ce))for(let Re=0;Re<ce.length;Re++){const ze=ce[Re];ae(ze,b,U)}else ae(ce,b,U)}),v.pop(),d=null};let re=null;function ge(b){re&&re(b)}function Ae(){Be.stop()}function Ce(){Be.start()}const Be=new wc;Be.setAnimationLoop(ge),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(b){re=b,ve.setAnimationLoop(b),b===null?Be.stop():Be.start()},ve.addEventListener("sessionstart",Ae),ve.addEventListener("sessionend",Ce),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(G),G=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,G,T),d=w.get(b,v.length),d.init(),v.push(d),oe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),me.setFromProjectionMatrix(oe),N=this.localClippingEnabled,Q=_.init(this.clippingPlanes,N,G),h=te.get(b,m.length),h.init(),m.push(h),nt(b,G,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Y,X),Q===!0&&_.beginShadows();const ae=d.state.shadowsArray;if(R.render(ae,b,G),Q===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(h,b),d.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const U=G.cameras;for(let ce=0,Re=U.length;ce<Re;ce++){const ze=U[ce];ct(h,b,ze,ze.viewport)}}else ct(h,b,G);T!==null&&(we.updateMultisampleRenderTarget(T),we.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(p,b,G),D.resetDefaultState(),S=-1,E=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function nt(b,G,ae,U){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){U&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(oe);const ze=ee.update(b),ke=b.material;ke.visible&&h.push(b,ze,ke,ae,B.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Me.render.frame&&(b.skeleton.update(),b.skeleton.frame=Me.render.frame),!b.frustumCulled||me.intersectsObject(b))){U&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(oe);const ze=ee.update(b),ke=b.material;if(Array.isArray(ke)){const Fe=ze.groups;for(let Xe=0,Ve=Fe.length;Xe<Ve;Xe++){const qe=Fe[Xe],it=ke[qe.materialIndex];it&&it.visible&&h.push(b,ze,it,ae,B.z,qe)}}else ke.visible&&h.push(b,ze,ke,ae,B.z,null)}}const Re=b.children;for(let ze=0,ke=Re.length;ze<ke;ze++)nt(Re[ze],G,ae,U)}function ct(b,G,ae,U){const ce=b.opaque,Re=b.transmissive,ze=b.transparent;d.setupLightsView(ae),Re.length>0&&Ft(ce,G,ae),U&&pe.viewport(C.copy(U)),ce.length>0&&$e(ce,G,ae),Re.length>0&&$e(Re,G,ae),ze.length>0&&$e(ze,G,ae),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ft(b,G,ae){const U=Se.isWebGL2;O===null&&(O=new mi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ar:fi,minFilter:Es,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(le),U?O.setSize(le.x,le.y):O.setSize(Da(le.x),Da(le.y));const ce=p.getRenderTarget();p.setRenderTarget(O),p.clear();const Re=p.toneMapping;p.toneMapping=Ln,$e(b,G,ae),p.toneMapping=Re,we.updateMultisampleRenderTarget(O),we.updateRenderTargetMipmap(O),p.setRenderTarget(ce)}function $e(b,G,ae){const U=G.isScene===!0?G.overrideMaterial:null;for(let ce=0,Re=b.length;ce<Re;ce++){const ze=b[ce],ke=ze.object,Fe=ze.geometry,Xe=U===null?ze.material:U,Ve=ze.group;ke.layers.test(ae.layers)&&Et(ke,G,ae,Fe,Xe,Ve)}}function Et(b,G,ae,U,ce,Re){b.onBeforeRender(p,G,ae,U,ce,Re),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ce.onBeforeRender(p,G,ae,U,b,Re),ce.transparent===!0&&ce.side===Dt?(ce.side=Qt,ce.needsUpdate=!0,p.renderBufferDirect(ae,G,U,ce,b,Re),ce.side=er,ce.needsUpdate=!0,p.renderBufferDirect(ae,G,U,ce,b,Re),ce.side=Dt):p.renderBufferDirect(ae,G,U,ce,b,Re),b.onAfterRender(p,G,ae,U,ce,Re)}function ft(b,G,ae){G.isScene!==!0&&(G=H);const U=ye.get(b),ce=d.state.lights,Re=d.state.shadowsArray,ze=ce.state.version,ke=ie.getParameters(b,ce.state,Re,G,ae),Fe=ie.getProgramCacheKey(ke);let Xe=U.programs;U.environment=b.isMeshStandardMaterial?G.environment:null,U.fog=G.fog,U.envMap=(b.isMeshStandardMaterial?He:Pe).get(b.envMap||U.environment),Xe===void 0&&(b.addEventListener("dispose",Ne),Xe=new Map,U.programs=Xe);let Ve=Xe.get(Fe);if(Ve!==void 0){if(U.currentProgram===Ve&&U.lightsStateVersion===ze)return Cn(b,ke),Ve}else ke.uniforms=ie.getUniforms(b),b.onBuild(ae,ke,p),b.onBeforeCompile(ke,p),Ve=ie.acquireProgram(ke,Fe),Xe.set(Fe,Ve),U.uniforms=ke.uniforms;const qe=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=_.uniform),Cn(b,ke),U.needsLights=jn(b),U.lightsStateVersion=ze,U.needsLights&&(qe.ambientLightColor.value=ce.state.ambient,qe.lightProbe.value=ce.state.probe,qe.directionalLights.value=ce.state.directional,qe.directionalLightShadows.value=ce.state.directionalShadow,qe.spotLights.value=ce.state.spot,qe.spotLightShadows.value=ce.state.spotShadow,qe.rectAreaLights.value=ce.state.rectArea,qe.ltc_1.value=ce.state.rectAreaLTC1,qe.ltc_2.value=ce.state.rectAreaLTC2,qe.pointLights.value=ce.state.point,qe.pointLightShadows.value=ce.state.pointShadow,qe.hemisphereLights.value=ce.state.hemi,qe.directionalShadowMap.value=ce.state.directionalShadowMap,qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,qe.spotShadowMap.value=ce.state.spotShadowMap,qe.spotLightMatrix.value=ce.state.spotLightMatrix,qe.spotLightMap.value=ce.state.spotLightMap,qe.pointShadowMap.value=ce.state.pointShadowMap,qe.pointShadowMatrix.value=ce.state.pointShadowMatrix);const it=Ve.getUniforms(),Xn=fs.seqWithValue(it.seq,qe);return U.currentProgram=Ve,U.uniformsList=Xn,Ve}function Cn(b,G){const ae=ye.get(b);ae.outputEncoding=G.outputEncoding,ae.instancing=G.instancing,ae.skinning=G.skinning,ae.morphTargets=G.morphTargets,ae.morphNormals=G.morphNormals,ae.morphColors=G.morphColors,ae.morphTargetsCount=G.morphTargetsCount,ae.numClippingPlanes=G.numClippingPlanes,ae.numIntersection=G.numClipIntersection,ae.vertexAlphas=G.vertexAlphas,ae.vertexTangents=G.vertexTangents,ae.toneMapping=G.toneMapping}function Mt(b,G,ae,U,ce){G.isScene!==!0&&(G=H),we.resetTextureUnits();const Re=G.fog,ze=U.isMeshStandardMaterial?G.environment:null,ke=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:pi,Fe=(U.isMeshStandardMaterial?He:Pe).get(U.envMap||ze),Xe=U.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ve=!!U.normalMap&&!!ae.attributes.tangent,qe=!!ae.morphAttributes.position,it=!!ae.morphAttributes.normal,Xn=!!ae.morphAttributes.color,Si=U.toneMapped?p.toneMapping:Ln,bi=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,fn=bi!==void 0?bi.length:0,Ye=ye.get(U),Ti=d.state.lights;if(Q===!0&&(N===!0||b!==E)){const Ot=b===E&&U.id===S;_.setState(U,b,Ot)}let st=!1;U.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ti.state.version||Ye.outputEncoding!==ke||ce.isInstancedMesh&&Ye.instancing===!1||!ce.isInstancedMesh&&Ye.instancing===!0||ce.isSkinnedMesh&&Ye.skinning===!1||!ce.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Fe||U.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_.numPlanes||Ye.numIntersection!==_.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Ve||Ye.morphTargets!==qe||Ye.morphNormals!==it||Ye.morphColors!==Xn||Ye.toneMapping!==Si||Se.isWebGL2===!0&&Ye.morphTargetsCount!==fn)&&(st=!0):(st=!0,Ye.__version=U.version);let Gt=Ye.currentProgram;st===!0&&(Gt=ft(U,G,ce));let Rn=!1,fr=!1,Fs=!1;const At=Gt.getUniforms(),Yn=Ye.uniforms;if(pe.useProgram(Gt.program)&&(Rn=!0,fr=!0,Fs=!0),U.id!==S&&(S=U.id,fr=!0),Rn||E!==b){if(At.setValue(P,"projectionMatrix",b.projectionMatrix),Se.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),E!==b&&(E=b,fr=!0,Fs=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ot=At.map.cameraPosition;Ot!==void 0&&Ot.setValue(P,B.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&At.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||ce.isSkinnedMesh)&&At.setValue(P,"viewMatrix",b.matrixWorldInverse)}if(ce.isSkinnedMesh){At.setOptional(P,ce,"bindMatrix"),At.setOptional(P,ce,"bindMatrixInverse");const Ot=ce.skeleton;Ot&&(Se.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),At.setValue(P,"boneTexture",Ot.boneTexture,we),At.setValue(P,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Os=ae.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0&&Se.isWebGL2===!0)&&he.update(ce,ae,U,Gt),(fr||Ye.receiveShadow!==ce.receiveShadow)&&(Ye.receiveShadow=ce.receiveShadow,At.setValue(P,"receiveShadow",ce.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Yn.envMap.value=Fe,Yn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),fr&&(At.setValue(P,"toneMappingExposure",p.toneMappingExposure),Ye.needsLights&&qn(Yn,Fs),Re&&U.fog===!0&&fe.refreshFogUniforms(Yn,Re),fe.refreshMaterialUniforms(Yn,U,q,L,O),fs.upload(P,Ye.uniformsList,Yn,we)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(fs.upload(P,Ye.uniformsList,Yn,we),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&At.setValue(P,"center",ce.center),At.setValue(P,"modelViewMatrix",ce.modelViewMatrix),At.setValue(P,"normalMatrix",ce.normalMatrix),At.setValue(P,"modelMatrix",ce.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ot=U.uniformsGroups;for(let ks=0,Au=Ot.length;ks<Au;ks++)if(Se.isWebGL2){const io=Ot[ks];ne.update(io,Gt),ne.bind(io,Gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gt}function qn(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function jn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,G,ae){ye.get(b.texture).__webglTexture=G,ye.get(b.depthTexture).__webglTexture=ae;const U=ye.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=ae===void 0,U.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,G){const ae=ye.get(b);ae.__webglFramebuffer=G,ae.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,ae=0){T=b,y=G,A=ae;let U=!0,ce=null,Re=!1,ze=!1;if(b){const Fe=ye.get(b);Fe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),U=!1):Fe.__webglFramebuffer===void 0?we.setupRenderTarget(b):Fe.__hasExternalTextures&&we.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);const Ve=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ce=Ve[G],Re=!0):Se.isWebGL2&&b.samples>0&&we.useMultisampledRTT(b)===!1?ce=ye.get(b).__webglMultisampledFramebuffer:ce=Ve,C.copy(b.viewport),F.copy(b.scissor),g=b.scissorTest}else C.copy(k).multiplyScalar(q).floor(),F.copy(J).multiplyScalar(q).floor(),g=ue;if(pe.bindFramebuffer(36160,ce)&&Se.drawBuffers&&U&&pe.drawBuffers(b,ce),pe.viewport(C),pe.scissor(F),pe.setScissorTest(g),Re){const Fe=ye.get(b.texture);P.framebufferTexture2D(36160,36064,34069+G,Fe.__webglTexture,ae)}else if(ze){const Fe=ye.get(b.texture),Xe=G||0;P.framebufferTextureLayer(36160,36064,Fe.__webglTexture,ae||0,Xe)}S=-1},this.readRenderTargetPixels=function(b,G,ae,U,ce,Re,ze){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){pe.bindFramebuffer(36160,ke);try{const Fe=b.texture,Xe=Fe.format,Ve=Fe.type;if(Xe!==on&&M.convert(Xe)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ve===Ar&&(de.has("EXT_color_buffer_half_float")||Se.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ve!==fi&&M.convert(Ve)!==P.getParameter(35738)&&!(Ve===si&&(Se.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-U&&ae>=0&&ae<=b.height-ce&&P.readPixels(G,ae,U,ce,M.convert(Xe),M.convert(Ve),Re)}finally{const Fe=T!==null?ye.get(T).__webglFramebuffer:null;pe.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(b,G,ae=0){const U=Math.pow(2,-ae),ce=Math.floor(G.image.width*U),Re=Math.floor(G.image.height*U);we.setTexture2D(G,0),P.copyTexSubImage2D(3553,ae,0,0,b.x,b.y,ce,Re),pe.unbindTexture()},this.copyTextureToTexture=function(b,G,ae,U=0){const ce=G.image.width,Re=G.image.height,ze=M.convert(ae.format),ke=M.convert(ae.type);we.setTexture2D(ae,0),P.pixelStorei(37440,ae.flipY),P.pixelStorei(37441,ae.premultiplyAlpha),P.pixelStorei(3317,ae.unpackAlignment),G.isDataTexture?P.texSubImage2D(3553,U,b.x,b.y,ce,Re,ze,ke,G.image.data):G.isCompressedTexture?P.compressedTexSubImage2D(3553,U,b.x,b.y,G.mipmaps[0].width,G.mipmaps[0].height,ze,G.mipmaps[0].data):P.texSubImage2D(3553,U,b.x,b.y,ze,ke,G.image),U===0&&ae.generateMipmaps&&P.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,G,ae,U,ce=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=b.max.x-b.min.x+1,ze=b.max.y-b.min.y+1,ke=b.max.z-b.min.z+1,Fe=M.convert(U.format),Xe=M.convert(U.type);let Ve;if(U.isData3DTexture)we.setTexture3D(U,0),Ve=32879;else if(U.isDataArrayTexture)we.setTexture2DArray(U,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,U.flipY),P.pixelStorei(37441,U.premultiplyAlpha),P.pixelStorei(3317,U.unpackAlignment);const qe=P.getParameter(3314),it=P.getParameter(32878),Xn=P.getParameter(3316),Si=P.getParameter(3315),bi=P.getParameter(32877),fn=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;P.pixelStorei(3314,fn.width),P.pixelStorei(32878,fn.height),P.pixelStorei(3316,b.min.x),P.pixelStorei(3315,b.min.y),P.pixelStorei(32877,b.min.z),ae.isDataTexture||ae.isData3DTexture?P.texSubImage3D(Ve,ce,G.x,G.y,G.z,Re,ze,ke,Fe,Xe,fn.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ve,ce,G.x,G.y,G.z,Re,ze,ke,Fe,fn.data)):P.texSubImage3D(Ve,ce,G.x,G.y,G.z,Re,ze,ke,Fe,Xe,fn),P.pixelStorei(3314,qe),P.pixelStorei(32878,it),P.pixelStorei(3316,Xn),P.pixelStorei(3315,Si),P.pixelStorei(32877,bi),ce===0&&U.generateMipmaps&&P.generateMipmap(Ve),pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?we.setTextureCube(b,0):b.isData3DTexture?we.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?we.setTexture2DArray(b,0):we.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){y=0,A=0,T=null,pe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tg extends Tc{}Tg.prototype.isWebGL1Renderer=!0;class Eg extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ag{constructor(e,t,i=0,r=1/0){this.ray=new pc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ra(e,this,i,t),i.sort(gl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ra(e[r],this,i,t);return i.sort(gl),i}}function gl(n,e){return n.distance-e.distance}function Ra(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Ra(r[s],e,t,!0)}}class vl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const xl={type:"change"},va={type:"start"},_l={type:"end"};class Lg extends yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",te),this._domElementKeyEvents=M},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(xl),i.update(),s=r.NONE},this.update=function(){const M=new V,D=new gi().setFromUnitVectors(e.up,new V(0,1,0)),ne=D.clone().invert(),xe=new V,ve=new gi,Ee=2*Math.PI;return function(){const Ie=i.object.position;M.copy(Ie).sub(i.target),M.applyQuaternion(D),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&x(F()),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ne=i.minAzimuthAngle,We=i.maxAzimuthAngle;return isFinite(Ne)&&isFinite(We)&&(Ne<-Math.PI?Ne+=Ee:Ne>Math.PI&&(Ne-=Ee),We<-Math.PI?We+=Ee:We>Math.PI&&(We-=Ee),Ne<=We?a.theta=Math.max(Ne,Math.min(We,a.theta)):a.theta=a.theta>(Ne+We)/2?Math.max(Ne,a.theta):Math.min(We,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),M.setFromSpherical(a),M.applyQuaternion(ne),Ie.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||xe.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o?(i.dispatchEvent(xl),xe.copy(i.object.position),ve.copy(i.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",R),i.domElement.removeEventListener("pointerdown",Pe),i.domElement.removeEventListener("pointercancel",K),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",He),i.domElement.removeEventListener("pointerup",Ge),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",te)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new vl,c=new vl;let l=1;const u=new V;let h=!1;const d=new Ue,m=new Ue,v=new Ue,p=new Ue,f=new Ue,y=new Ue,A=new Ue,T=new Ue,S=new Ue,E=[],C={};function F(){return 2*Math.PI/60/60*i.autoRotateSpeed}function g(){return Math.pow(.95,i.zoomSpeed)}function x(M){c.theta-=M}function L(M){c.phi-=M}const q=function(){const M=new V;return function(ne,xe){M.setFromMatrixColumn(xe,0),M.multiplyScalar(-ne),u.add(M)}}(),Y=function(){const M=new V;return function(ne,xe){i.screenSpacePanning===!0?M.setFromMatrixColumn(xe,1):(M.setFromMatrixColumn(xe,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(ne),u.add(M)}}(),X=function(){const M=new V;return function(ne,xe){const ve=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;M.copy(Ee).sub(i.target);let Le=M.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),q(2*ne*Le/ve.clientHeight,i.object.matrix),Y(2*xe*Le/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(ne*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),Y(xe*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(M){i.object.isPerspectiveCamera?l/=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*M)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(M){i.object.isPerspectiveCamera?l*=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/M)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(M){d.set(M.clientX,M.clientY)}function me(M){A.set(M.clientX,M.clientY)}function Q(M){p.set(M.clientX,M.clientY)}function N(M){m.set(M.clientX,M.clientY),v.subVectors(m,d).multiplyScalar(i.rotateSpeed);const D=i.domElement;x(2*Math.PI*v.x/D.clientHeight),L(2*Math.PI*v.y/D.clientHeight),d.copy(m),i.update()}function O(M){T.set(M.clientX,M.clientY),S.subVectors(T,A),S.y>0?k(g()):S.y<0&&J(g()),A.copy(T),i.update()}function oe(M){f.set(M.clientX,M.clientY),y.subVectors(f,p).multiplyScalar(i.panSpeed),X(y.x,y.y),p.copy(f),i.update()}function le(M){M.deltaY<0?J(g()):M.deltaY>0&&k(g()),i.update()}function B(M){let D=!1;switch(M.code){case i.keys.UP:X(0,i.keyPanSpeed),D=!0;break;case i.keys.BOTTOM:X(0,-i.keyPanSpeed),D=!0;break;case i.keys.LEFT:X(i.keyPanSpeed,0),D=!0;break;case i.keys.RIGHT:X(-i.keyPanSpeed,0),D=!0;break}D&&(M.preventDefault(),i.update())}function H(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const M=.5*(E[0].pageX+E[1].pageX),D=.5*(E[0].pageY+E[1].pageY);d.set(M,D)}}function Z(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const M=.5*(E[0].pageX+E[1].pageX),D=.5*(E[0].pageY+E[1].pageY);p.set(M,D)}}function P(){const M=E[0].pageX-E[1].pageX,D=E[0].pageY-E[1].pageY,ne=Math.sqrt(M*M+D*D);A.set(0,ne)}function _e(){i.enableZoom&&P(),i.enablePan&&Z()}function de(){i.enableZoom&&P(),i.enableRotate&&H()}function Se(M){if(E.length==1)m.set(M.pageX,M.pageY);else{const ne=W(M),xe=.5*(M.pageX+ne.x),ve=.5*(M.pageY+ne.y);m.set(xe,ve)}v.subVectors(m,d).multiplyScalar(i.rotateSpeed);const D=i.domElement;x(2*Math.PI*v.x/D.clientHeight),L(2*Math.PI*v.y/D.clientHeight),d.copy(m)}function pe(M){if(E.length===1)f.set(M.pageX,M.pageY);else{const D=W(M),ne=.5*(M.pageX+D.x),xe=.5*(M.pageY+D.y);f.set(ne,xe)}y.subVectors(f,p).multiplyScalar(i.panSpeed),X(y.x,y.y),p.copy(f)}function Me(M){const D=W(M),ne=M.pageX-D.x,xe=M.pageY-D.y,ve=Math.sqrt(ne*ne+xe*xe);T.set(0,ve),S.set(0,Math.pow(T.y/A.y,i.zoomSpeed)),k(S.y),A.copy(T)}function ye(M){i.enableZoom&&Me(M),i.enablePan&&pe(M)}function we(M){i.enableZoom&&Me(M),i.enableRotate&&Se(M)}function Pe(M){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",He),i.domElement.addEventListener("pointerup",Ge)),j(M),M.pointerType==="touch"?w(M):ee(M))}function He(M){i.enabled!==!1&&(M.pointerType==="touch"?_(M):ie(M))}function Ge(M){he(M),E.length===0&&(i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",He),i.domElement.removeEventListener("pointerup",Ge)),i.dispatchEvent(_l),s=r.NONE}function K(M){he(M)}function ee(M){let D;switch(M.button){case 0:D=i.mouseButtons.LEFT;break;case 1:D=i.mouseButtons.MIDDLE;break;case 2:D=i.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Ei.DOLLY:if(i.enableZoom===!1)return;me(M),s=r.DOLLY;break;case Ei.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;Q(M),s=r.PAN}else{if(i.enableRotate===!1)return;ue(M),s=r.ROTATE}break;case Ei.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;ue(M),s=r.ROTATE}else{if(i.enablePan===!1)return;Q(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(va)}function ie(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;N(M);break;case r.DOLLY:if(i.enableZoom===!1)return;O(M);break;case r.PAN:if(i.enablePan===!1)return;oe(M);break}}function fe(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(va),le(M),i.dispatchEvent(_l))}function te(M){i.enabled===!1||i.enablePan===!1||B(M)}function w(M){switch(se(M),E.length){case 1:switch(i.touches.ONE){case Ai.ROTATE:if(i.enableRotate===!1)return;H(),s=r.TOUCH_ROTATE;break;case Ai.PAN:if(i.enablePan===!1)return;Z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ai.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(),s=r.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(va)}function _(M){switch(se(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(M),i.update();break;default:s=r.NONE}}function R(M){i.enabled!==!1&&M.preventDefault()}function j(M){E.push(M)}function he(M){delete C[M.pointerId];for(let D=0;D<E.length;D++)if(E[D].pointerId==M.pointerId){E.splice(D,1);return}}function se(M){let D=C[M.pointerId];D===void 0&&(D=new Ue,C[M.pointerId]=D),D.set(M.pageX,M.pageY)}function W(M){const D=M.pointerId===E[0].pointerId?E[1]:E[0];return C[D.pointerId]}i.domElement.addEventListener("contextmenu",R),i.domElement.addEventListener("pointerdown",Pe),i.domElement.addEventListener("pointercancel",K),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}function Dg(n,e){return n+Math.floor(Math.random()*(e-n+1))}let ps=new Map;const Cg=new URL("/RubiksSimulator/assets/edge-comms.59663995.txt",self.location).href;await fetch(Cg).then(n=>n.text()).then(n=>{const e=n.split(/\r?\n/);for(let t in e){let i=e[t].split(" ");ps.set(i.slice(0,3).join(" "),i.slice(3,i.length).join(" "))}});function Rg(n,e){let t=[];for(let s=1;s<Math.floor(e/2);s++){let o=e-1-s,a=e*s,c=e*e-1-e*s,l=e*(e-1)+s;var i={[o]:"a",[a]:"b",[c]:"c",[l]:"d"},r=new RegExp("("+Object.keys(i).join("|")+")\\b","gi");if(n.perm.perm["D"+o]!="D"+o)if(n.perm.perm["D"+o]=="U"+o){let m="Da Ub Ua",v=ps.get(m).replace(/n/g,s+1);Lr(v),bs(0,v,"[Solve Edge Da] at Slice ["+(s+1)+"] <br>"+m)}else{let m="Da Ua "+n.perm.perm["D"+o].replace(r,function(p){return i[p]}),v=ps.get(m).replace(/n/g,s+1);Lr(v),bs(0,v,"[Solve Edge Da] at Slice ["+(s+1)+"] <br>"+m)}let u=gs(e,s,n),h=Ya(u);for(let m in h)h[m].forEach((v,p)=>{h[m][p]=v.replace(r,function(f){return i[f]})});let d=Ec(h,"Da");d.forEach((m,v)=>{t.push([d[v],ps.get(m).replace(/n/g,s+1)])}),console.log(d)}return console.log(t),t}function Ec(n,e){let t=[];for(let c in n)n[c].length>1&&t.push(n[c]);let i=[];for(let c in t){for(let l in t[c])i.push([e,t[c][l]]);i.push([e,t[c][0]])}let r=[];for(let c=0;c<i.length;c+=2)r.push(i[c],i[c+1]);console.log(r);let s=[];for(let c=0;c<=r.length-1;c+=2){let l={},u={};l[r[c][0]]=r[c][1],l[r[c][1]]=r[c][0],u[r[c+1][0]]=r[c+1][1],u[r[c+1][1]]=r[c+1][0];for(var o in u)o in l?l[l[o]]=u[[o]]:l[o]=u[o];s.push(l)}let a=[];for(let c=s.length-1;c>=0;c--){let l=Object.values(s[c]).reverse().join(" ");a.push(l)}return a}let Ig=new Map;const Pg=new URL("/RubiksSimulator/assets/comm-xcenters.f28789d2.txt",self.location).href;await fetch(Pg).then(n=>n.text()).then(n=>{const e=n.split(/\r?\n/);for(let t in e){let i=e[t].split(" ");Ig.set(i.slice(0,3).join(" "),i.slice(3,i.length).join(" "))}});let ms=new Map;const zg=new URL("/RubiksSimulator/assets/comms-universal.314493c0.txt",self.location).href;await fetch(zg).then(n=>n.text()).then(n=>{const e=n.split(/\r?\n/);for(let t in e){let i=e[t].split(" ");ms.set(i.slice(0,3).join(" "),i.slice(3,i.length).join(" "))}});function Ng(n,e){let t=[];for(let s=1;s<Math.ceil(e/2);s++)for(let o=1;o<Math.floor(e/2);o++){let a=e+s+e*(o-1),c=e*(s+1)-1-o,l=(e-(s+1))*e+o,u=e*e-1-e*o-s;var i={[a]:"a",[c]:"b",[l]:"c",[u]:"d"},r=new RegExp("("+Object.keys(i).join("|")+")\\b","gi");if(n.perm.perm["U"+u]!="U"+u)if(n.perm.perm["U"+u]=="D"+a){let v="Ud Db Da",p=ms.get(v).replace(/m/g,s+1).replace(/n/g,o+1);Lr(p),bs(1,p,"[Solve Ud] at Position ["+(s+1)+"]["+(o+1)+"] <br>"+v)}else{let v="Ud Da "+n.perm.perm["U"+u].replace(r,function(f){return i[f]}),p=ms.get(v).replace(/m/g,s+1).replace(/n/g,o+1);Lr(p),bs(1,p,"[Solve Ud] at Position ["+(s+1)+"]["+(o+1)+"] <br>"+v)}let h=qg(e,s,o,n),d=Ya(h);for(let v in d)d[v].forEach((p,f)=>{d[v][f]=p.replace(r,function(y){return i[y]})});let m=Ec(d,"Ud");m.forEach((v,p)=>{let f=ms.get(v).replace(/m/g,s+1).replace(/n/g,o+1);t.push([m[p],f])})}return t}function Fg(n,e){return Array(e-n+1).fill().map((t,i)=>n+i)}function Og(n){var e={};for(var t in n)e[n[t]]=t;return e}function Ya(n){for(var e=Object.keys(n),t=[];e.length>0;){let i=e.pop(),r=n[i],s=[i];for(;r!=i;){let o=e.indexOf(r);e.splice(o,1),s.push(r),r=n[r]}t.push(s)}return t}function br(n){let e=Ya(n),t=0;return e.forEach(i=>{t+=i.length-1}),t%2}class $a{constructor(e){this.perm=e}mult(e){var t={};for(var i in this.perm)t[i]=e.perm[this.perm[i]];return new $a(t)}cycle_decomposition(){console.log("cycle decomposition");for(var e=Object.keys(this.perm),t=[];e.length>0;){let i=e.pop(),r=this.perm[i],s=[i];for(;r!=i;){let o=e.indexOf(r);e.splice(o,1),s.push(r),r=this.perm[r]}t.push(s)}return t}parity(){let e=this.cycle_decomposition(),t=0;return e.forEach(i=>{t+=i.length-1}),console.log(t),t%2}}class Je{constructor(e){this.position=e;const t=new Map,i=["U","F","R","B","L","D"];for(let r in i)for(let s in Fg(1,e*e)){let o=i[r]+s.toString();t[o]=o}this.perm=new $a(t)}apply_state(e){this.perm=this.perm.mult(e.perm)}}var be={},ln;function Cs(n){var e=v("U",n),t=p("U",n),i=v("R",n),r=p("R",n),s=v("D",n),o=p("D",n),a=v("L",n),c=p("L",n),l=v("F",n),u=p("F",n),h=v("B",n),d=p("B",n);be={};let m=["U","F","R","B","L","D"];y(n),A(n),T(n),S(n),E(n),C(n),m.forEach(g=>{F(String(g),n)}),m.forEach(g=>{var x=new Je(n);x.apply_state(be[g]),x.apply_state(be[g]);var L=new Je(n);L.apply_state(be[g]),L.apply_state(be[g]),L.apply_state(be[g]),be[g+"2"]=x,be[g+"3"]=L,be[g+"'"]=L}),console.log(be);function v(g,x){for(var L=[],q=0;q<x;q++){for(var Y=[],X=0;X<x;X++)Y.push(g+(q*x+X));L.push(Y)}return L}function p(g,x){for(var L=[],q=0;q<x;q++){for(var Y=[],X=0;X<x;X++)Y.push(g+(X*x+q));L.push(Y)}return L}function f(g,x,L){return x.forEach((q,Y)=>{g.perm.perm[q]=L[Y]}),g}function y(g){for(var x=1;x<=Math.ceil(g/2);x++){var L=new Je(g);L=f(L,e[g-x],r[x-1]),L=f(L,r[x-1],[...s[x-1]].reverse()),L=f(L,[...s[x-1]].reverse(),[...c[g-x]].reverse()),L=f(L,[...c[g-x]].reverse(),e[g-x]),be[x+"F"]=L;var q=new Je(g);q.apply_state(be[x+"F"]),q.apply_state(be[x+"F"]);var Y=new Je(g);Y.apply_state(be[x+"F"]),Y.apply_state(be[x+"F"]),Y.apply_state(be[x+"F"]),be[x+"F2"]=q,be[x+"F3"]=Y,be[x+"F'"]=Y}}function A(g){for(var x=1;x<=Math.ceil(g/2);x++){var L=new Je(g);L=f(L,l[x-1],a[x-1]),L=f(L,a[x-1],h[x-1]),L=f(L,h[x-1],i[x-1]),L=f(L,i[x-1],l[x-1]),be[x+"U"]=L;var q=new Je(g);q.apply_state(be[x+"U"]),q.apply_state(be[x+"U"]);var Y=new Je(g);Y.apply_state(be[x+"U"]),Y.apply_state(be[x+"U"]),Y.apply_state(be[x+"U"]),be[x+"U2"]=q,be[x+"U3"]=Y,be[x+"U'"]=Y}}function T(g){for(var x=1;x<=Math.ceil(g/2);x++){var L=new Je(g);L=f(L,u[g-x],t[g-x]),L=f(L,t[g-x],[...d[x-1]].reverse()),L=f(L,[...d[x-1]].reverse(),o[g-x]),L=f(L,o[g-x],u[g-x]),be[x+"R"]=L;var q=new Je(g);q.apply_state(be[x+"R"]),q.apply_state(be[x+"R"]);var Y=new Je(g);Y.apply_state(be[x+"R"]),Y.apply_state(be[x+"R"]),Y.apply_state(be[x+"R"]),be[x+"R2"]=q,be[x+"R3"]=Y,be[x+"R'"]=Y}}function S(g){for(var x=1;x<=Math.ceil(g/2);x++){var L=new Je(g);L=f(L,u[x-1],o[x-1]),L=f(L,o[x-1],[...d[g-x]].reverse()),L=f(L,[...d[g-x]].reverse(),t[x-1]),L=f(L,t[x-1],u[x-1]),be[x+"L"]=L;var q=new Je(g);q.apply_state(be[x+"L"]),q.apply_state(be[x+"L"]);var Y=new Je(g);Y.apply_state(be[x+"L"]),Y.apply_state(be[x+"L"]),Y.apply_state(be[x+"L"]),be[x+"L2"]=q,be[x+"L3"]=Y,be[x+"L'"]=Y}}function E(g){for(var x=1;x<=Math.ceil(g/2);x++){var L=new Je(g);L=f(L,e[x-1],[...c[x-1]].reverse()),L=f(L,[...c[x-1]].reverse(),[...s[g-x]].reverse()),L=f(L,[...s[g-x]].reverse(),r[g-x]),L=f(L,r[g-x],e[x-1]),be[x+"B"]=L;var q=new Je(g);q.apply_state(be[x+"B"]),q.apply_state(be[x+"B"]);var Y=new Je(g);Y.apply_state(be[x+"B"]),Y.apply_state(be[x+"B"]),Y.apply_state(be[x+"B"]),be[x+"B2"]=q,be[x+"B3"]=Y,be[x+"B'"]=Y}}function C(g){for(var x=1;x<=Math.ceil(g/2);x++){var L=new Je(g);L=f(L,l[g-x],i[g-x]),L=f(L,i[g-x],h[g-x]),L=f(L,h[g-x],a[g-x]),L=f(L,a[g-x],l[g-x]),be[x+"D"]=L;var q=new Je(g);q.apply_state(be[x+"D"]),q.apply_state(be[x+"D"]);var Y=new Je(g);Y.apply_state(be[x+"D"]),Y.apply_state(be[x+"D"]),Y.apply_state(be[x+"D"]),be[x+"D2"]=q,be[x+"D3"]=Y,be[x+"D'"]=Y}}function F(g,x){let L=v(g,x),q=p(g,x);const Y=new Je(x);for(var X=0;X<x;X++)for(var k=0;k<x;k++)Y.perm.perm[L[X][k]]=q[x-1-X][k];Y.apply_state(be["1"+g]),be[g]=Y,be["1"+g]=Y;const J=new Je(x);J.apply_state(be["1"+g]),J.apply_state(be["1"+g]),be["1"+g+"2"]=J;const ue=new Je(x);ue.apply_state(be["1"+g]),ue.apply_state(be["1"+g]),ue.apply_state(be["1"+g]),be["1"+g+"3"]=ue,be["1"+g+"'"]=ue}}function kg(n){let e=[];for(let t=0;t<3*(n*n);t++){let i=Dg(1,Object.keys(be).length-1);if(Object.keys(be)[i][0]==Math.floor(n/2)+1){t--;continue}e.push(Object.keys(be)[i])}return e.join(" ")}function Ac(n,e){n=n.replace(/[\r\n]/g," ");const t=n.split(" ");ln=new Je(e);for(var i=0;i<t.length;i++)ln.apply_state(be[t[i]]);return Hg(ln.perm.perm),ln}function Lr(n,e){const t=n.split(" ");for(var i=0;i<t.length;i++)ln.apply_state(be[t[i]]);return ln}function Ug(n,e){let t=Ac(n,e),i=["U","R","F","D","L","B"],r="",s=Math.floor(e/2),o=Og(t.perm.perm);if(e%2==1){for(let a in i)r+=o[i[a]+0]+o[i[a]+s]+o[i[a]+2*s]+o[i[a]+s*e]+o[i[a]+(s*e+s)]+o[i[a]+(s*e+2*s)]+o[i[a]+e*s*2]+o[i[a]+(e*s*2+s)]+o[i[a]+(2*(s*e)+2*s)];r=r.replace(/[0-9]/g,"")}else{for(let a in i)r+=o[i[a]+0]+i[a]+o[i[a]+(e-1)]+i[a]+i[a]+i[a]+o[i[a]+e*(e-1)]+i[a]+o[i[a]+(e*e-1)];r=r.replace(/[0-9]/g,""),br(Vg(t,e))==1&&(r=r.substring(0,10)+"F"+r.substring(11,19)+"R"+r.substring(20))}return[r,Gg(t,e)]}function Bg(n,e){return br(gs(n,e,ln))==1?[e+1+"R",br(gs(n,e,ln))]:[0,br(gs(n,e,ln))]}function Vg(n,e){let t=n.perm.perm,i=[],r=["U","R","F","D","L","B"];for(let s in r)i[r[s]+0]=t[r[s]+0],i[r[s]+(e-1)]=t[r[s]+(e-1)],i[r[s]+e*(e-1)]=t[r[s]+e*(e-1)],i[r[s]+(e*e-1)]=t[r[s]+(e*e-1)];return i}function Gg(n,e){let t=[];t["U"+0]="UBL",t["L"+0]="UBL",t["B"+(e-1)]="UBL",t["U"+(e-1)]="URB",t["R"+(e-1)]="URB",t["B"+0]="URB",t["U"+(e-1)*e]="ULF",t["L"+(e-1)]="ULF",t["F"+0]="ULF",t["U"+(e*e-1)]="UFR",t["F"+(e-1)]="UFR",t["R"+0]="UFR",t["D"+0]="DFL",t["L"+(e*e-1)]="DFL",t["F"+(e-1)*e]="DFL",t["D"+(e-1)]="DRF",t["F"+(e*e-1)]="DRF",t["R"+(e-1)*e]="DRF",t["D"+(e-1)*e]="DLB",t["B"+(e*e-1)]="DLB",t["L"+(e-1)*e]="DLB",t["D"+(e*e-1)]="DBR",t["R"+(e*e-1)]="DBR",t["B"+(e-1)*e]="DBR";let i=[];for(let o in t)i[o]=t[n.perm.perm[o]];let r=[];r.UBL="U"+0,r.URB="U"+(e-1),r.ULF="U"+(e-1)*e,r.UFR="U"+(e*e-1),r.DFL="D"+0,r.DRF="D"+(e-1),r.DLB="D"+(e-1)*e,r.DBR="D"+(e*e-1);let s=[];for(let o in r)s[o]=i[r[o]];return br(s)}function gs(n,e,t){let i=[],r=["U","R","F","D","L","B"],s=t.perm.perm;for(let o in r)i[r[o]+(n-1-e)]=s[r[o]+(n-1-e)],i[r[o]+n*e]=s[r[o]+n*e],i[r[o]+(n*n-1-n*e)]=s[r[o]+(n*n-1-n*e)],i[r[o]+(n*(n-1)+e)]=s[r[o]+(n*(n-1)+e)];return i}function Hg(n){document.getElementById("offcanvas-cubeState-String").innerHTML="";for(let e in n)document.getElementById("offcanvas-cubeState-String").innerHTML+="<li> "+e+" <span>&#8594;</span> "+n[e]+" </li>"}function Wg(n){return Rg(ln,parseInt(n))}function qg(n,e,t,i){let r=[],s=["U","R","F","D","L","B"],o=i.perm.perm;for(let a in s)r[s[a]+(n+e+n*(t-1))]=o[s[a]+(n+e+n*(t-1))],r[s[a]+(n*(e+1)-1-t)]=o[s[a]+(n*(e+1)-1-t)],r[s[a]+((n-(e+1))*n+t)]=o[s[a]+((n-(e+1))*n+t)],r[s[a]+(n*n-1-n*t-e)]=o[s[a]+(n*n-1-n*t-e)];return r}function jg(n){return Ng(ln,parseInt(n))}var Lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dc={exports:{}},Za={exports:{}};(function(n){(function(){var e,t,i,r,s,o,a,c,l,u,h,d,m,v,p,f,y,A,T,S,E,C,F,g,x,L,q,Y,X,k,J,ue,me;[T,A,v,s,y,e]=[0,1,2,3,4,5],[q,F,x,E,l,h,a,m]=[0,1,2,3,4,5,6,7],[L,C,g,S,d,c,u,o,f,p,t,i]=[0,1,2,3,4,5,6,7,8,9,10,11],[X,J,me]=function(){var Q,N,O,oe,le,B;return B=function(H){return H-1},le=function(H){return B(9)+H},O=function(H){return le(9)+H},N=function(H){return O(9)+H},oe=function(H){return N(9)+H},Q=function(H){return oe(9)+H},[[4,13,22,31,40,49],[[B(9),le(1),O(3)],[B(7),O(1),oe(3)],[B(1),oe(1),Q(3)],[B(3),Q(1),le(3)],[N(3),O(9),le(7)],[N(1),oe(9),O(7)],[N(7),Q(9),oe(7)],[N(9),le(9),Q(7)]],[[B(6),le(2)],[B(8),O(2)],[B(4),oe(2)],[B(2),Q(2)],[N(6),le(8)],[N(2),O(8)],[N(4),oe(8)],[N(8),Q(8)],[O(6),le(4)],[O(4),oe(6)],[Q(6),oe(4)],[Q(4),le(6)]]]}(),Y=["U","R","F","D","L","B"],k=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],ue=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],r=function(){var Q,N,O;class oe{constructor(B){B!=null?this.init(B):this.identity(),this.newCenter=function(){var H,Z;for(Z=[],H=0;H<=5;++H)Z.push(0);return Z}(),this.newCp=function(){var H,Z;for(Z=[],H=0;H<=7;++H)Z.push(0);return Z}(),this.newEp=function(){var H,Z;for(Z=[],H=0;H<=11;++H)Z.push(0);return Z}(),this.newCo=function(){var H,Z;for(Z=[],H=0;H<=7;++H)Z.push(0);return Z}(),this.newEo=function(){var H,Z;for(Z=[],H=0;H<=11;++H)Z.push(0);return Z}()}init(B){return this.center=B.center.slice(0),this.co=B.co.slice(0),this.ep=B.ep.slice(0),this.cp=B.cp.slice(0),this.eo=B.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=function(){var B,H;for(H=[],B=0;B<=7;++B)H.push(0);return H}(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=function(){var B,H;for(H=[],B=0;B<=11;++B)H.push(0);return H}()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var B,H,Z,P,_e,de,Se,pe,Me,ye,we;for(we=[],Z=P=0;P<=5;Z=++P)we[9*Z+4]=Y[this.center[Z]];for(Z=_e=0;_e<=7;Z=++_e)for(B=this.cp[Z],Me=this.co[Z],Se=de=0;de<=2;Se=++de)we[J[Z][(Se+Me)%3]]=k[B][Se];for(Z=pe=0;pe<=11;Z=++pe)for(H=this.ep[Z],Me=this.eo[Z],Se=ye=0;ye<=1;Se=++ye)we[me[Z][(Se+Me)%2]]=ue[H][Se];return we.join("")}static fromString(B){var H,Z,P,_e,de,Se,pe,Me,ye,we,Pe,He,Ge,K;for(P=new oe,_e=Se=0;Se<=5;_e=++Se)for(de=pe=0;pe<=5;de=++pe)B[9*_e+4]===Y[de]&&(P.center[_e]=de);for(_e=Me=0;Me<=7;_e=++Me){for(we=ye=0;ye<=2&&!((K=B[J[_e][we]])==="U"||K==="D");we=++ye);for(H=B[J[_e][(we+1)%3]],Z=B[J[_e][(we+2)%3]],de=Pe=0;Pe<=7;de=++Pe)H===k[de][1]&&Z===k[de][2]&&(P.cp[_e]=de,P.co[_e]=we%3)}for(_e=He=0;He<=11;_e=++He)for(de=Ge=0;Ge<=11;de=++Ge){if(B[me[_e][0]]===ue[de][0]&&B[me[_e][1]]===ue[de][1]){P.ep[_e]=de,P.eo[_e]=0;break}if(B[me[_e][0]]===ue[de][1]&&B[me[_e][1]]===ue[de][0]){P.ep[_e]=de,P.eo[_e]=1;break}}return P}clone(){return new oe(this.toJSON())}static random(){return new oe().randomize()}isSolved(){var B,H,Z,P,_e,de,Se;for(Z=this.clone(),Z.move(Z.upright()),H=_e=0;_e<=5;H=++_e)if(Z.center[H]!==H)return!1;for(B=de=0;de<=7;B=++de)if(Z.cp[B]!==B||Z.co[B]!==0)return!1;for(P=Se=0;Se<=11;P=++Se)if(Z.ep[P]!==P||Z.eo[P]!==0)return!1;return!0}centerMultiply(B){var H,Z,P;for(P=Z=0;Z<=5;P=++Z)H=B.center[P],this.newCenter[P]=this.center[H];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(B){var H,Z,P;for(P=Z=0;Z<=7;P=++Z)H=B.cp[P],this.newCp[P]=this.cp[H],this.newCo[P]=(this.co[H]+B.co[P])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(B){var H,Z,P;for(P=Z=0;Z<=11;P=++Z)H=B.ep[P],this.newEp[P]=this.ep[H],this.newEo[P]=(this.eo[H]+B.eo[P])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(B){return this.centerMultiply(B),this.cornerMultiply(B),this.edgeMultiply(B),this}move(B){var H,Z,P,_e,de,Se,pe,Me;for(pe=O(B),Z=0,_e=pe.length;Z<_e;Z++)for(de=pe[Z],H=de/3|0,Se=de%3,P=0,Me=Se;0<=Me?P<=Me:P>=Me;0<=Me?++P:--P)this.multiply(oe.moves[H]);return this}upright(){var B,H,Z,P,_e,de;for(B=this.clone(),de=[],H=P=0;P<=5&&B.center[H]!==v;H=++P);switch(H){case s:de.push("x");break;case T:de.push("x'");break;case e:de.push("x2");break;case A:de.push("y");break;case y:de.push("y'")}for(de.length&&B.move(de[0]),Z=_e=0;_e<=5&&B.center[Z]!==T;Z=++_e);switch(Z){case y:de.push("z");break;case A:de.push("z'");break;case s:de.push("z2")}return de.join(" ")}static inverse(B){var H,Z,P,_e,de,Se,pe;if(Se=function(){var Me,ye,we,Pe;for(we=O(B),Pe=[],Me=0,ye=we.length;Me<ye;Me++)_e=we[Me],H=_e/3|0,de=_e%3,Pe.push(H*3+-(de-1)+1);return Pe}(),Se.reverse(),typeof B=="string"){for(pe="",Z=0,P=Se.length;Z<P;Z++)_e=Se[Z],H=_e/3|0,de=_e%3,pe+=Q[H],de===1?pe+="2":de===2&&(pe+="'"),pe+=" ";return pe.substring(0,pe.length-1)}else return B.length!=null?Se:Se[0]}}return oe.prototype.randomize=function(){var le,B,H,Z,P,_e,de,Se,pe;return _e=function(Me,ye){return Me+Math.floor(Math.random()*(ye-Me+1))},pe=function(Me){var ye,we;for(ye=Me.length;ye!==0;)we=_e(0,ye-1),ye-=1,Me[ye],[Me[ye],Me[we]]=[Me[we],Me[ye]]},Z=function(Me){var ye,we,Pe,He,Ge,K,ee;for(Ge=0,ee=function(){var ie,fe,te;for(te=[],ie=0,fe=Me.length-1;0<=fe?ie<=fe:ie>=fe;0<=fe?++ie:--ie)te.push(!1);return te}();;){for(ye=-1,Pe=He=0,K=Me.length-1;0<=K?He<=K:He>=K;Pe=0<=K?++He:--He)if(!ee[Pe]){ye=Pe;break}if(ye===-1)break;for(we=0;!ee[ye];)ee[ye]=!0,we++,ye=Me[ye];Ge+=we+1}return Ge},le=function(Me,ye){var we;return we=Z(ye)+Z(Me),we%2===0},H=function(Me,ye){for(pe(ye),pe(Me);!le(Me,ye);)pe(ye),pe(Me)},de=function(Me,ye){var we,Pe,He,Ge;for(He=0,we=Pe=0,Ge=Me.length-1;0<=Ge?Pe<=Ge:Pe>=Ge;we=0<=Ge?++Pe:--Pe)He+=Me[we]=_e(0,ye-1)},P=function(Me,ye){return Me.reduce(function(we,Pe){return we+Pe})%ye===0},B=function(Me,ye){for(de(Me,3);!P(Me,3);)de(Me,3);for(de(ye,2);!P(ye,2);)de(ye,2)},Se=function(){return H(this.cp,this.ep),B(this.co,this.eo),this},Se}(),oe.moves=[{center:[0,1,2,3,4,5],cp:[E,q,F,x,l,h,a,m],co:[0,0,0,0,0,0,0,0],ep:[S,L,C,g,d,c,u,o,f,p,t,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[l,F,x,q,m,h,a,E],co:[2,0,0,1,1,0,0,2],ep:[f,C,g,S,i,c,u,o,d,p,t,L],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[F,h,x,E,q,l,a,m],co:[1,2,0,0,2,1,0,0],ep:[L,p,g,S,d,f,u,o,C,c,t,i],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[q,F,x,E,h,a,m,l],co:[0,0,0,0,0,0,0,0],ep:[L,C,g,S,c,u,o,d,f,p,t,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[q,x,a,E,l,F,h,m],co:[0,1,2,0,0,2,1,0],ep:[L,C,t,S,d,c,p,o,f,g,u,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[q,F,E,m,l,h,x,a],co:[0,0,1,2,0,0,2,1],ep:[L,C,g,i,d,c,u,t,f,p,S,o],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[T,v,y,s,e,A],cp:[q,F,x,E,l,h,a,m],co:[0,0,0,0,0,0,0,0],ep:[L,C,g,S,d,c,u,o,p,t,i,f],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,A,T,v,y,s],cp:[q,F,x,E,l,h,a,m],co:[0,0,0,0,0,0,0,0],ep:[L,S,g,o,d,C,u,c,f,p,t,i],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[y,T,v,A,s,e],cp:[q,F,x,E,l,h,a,m],co:[0,0,0,0,0,0,0,0],ep:[g,C,u,S,L,c,d,o,f,p,t,i],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],N={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},Q={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},O=function(le){var B,H,Z,P,_e,de,Se;if(typeof le=="string"){for(de=le.split(/\s+/),Se=[],B=0,H=de.length;B<H;B++)if(P=de[B],P.length!==0){if(P.length>2)throw new Error(`Invalid move: ${P}`);if(Z=N[P[0]],Z===void 0)throw new Error(`Invalid move: ${P}`);if(P.length===1)_e=0;else if(P[1]==="2")_e=1;else if(P[1]==="'")_e=2;else throw new Error(`Invalid move: ${P}`);Se.push(Z*3+_e)}return Se}else return le.length!=null?le:[le]},oe.moves.push(new oe().move("R M' L'").toJSON()),oe.moves.push(new oe().move("U E' D'").toJSON()),oe.moves.push(new oe().move("F S B'").toJSON()),oe.moves.push(new oe().move("U E'").toJSON()),oe.moves.push(new oe().move("R M'").toJSON()),oe.moves.push(new oe().move("F S").toJSON()),oe.moves.push(new oe().move("D E").toJSON()),oe.moves.push(new oe().move("L M").toJSON()),oe.moves.push(new oe().move("B S'").toJSON()),oe}.call(this),n!==null?n.exports=r:this.Cube=r}).call(Lc)})(Za);(function(){var n,e,t,i,r,s,o,a,c,l,u,h,d,m,v,p,f,y,A,T,S,E,C,F,g,x,L,q,Y,X,k,J,ue,me,Q,N,O,oe,le,B,H,Z,P,_e,de,Se,pe,Me,ye,we,Pe,He,Ge=[].indexOf;i=this.Cube||Za.exports,[ue,Y,k,L,a,l,s,h]=[0,1,2,3,4,5,6,7],[J,q,X,x,u,o,c,r,m,d,n,e]=[0,1,2,3,4,5,6,7,8,9,10,11],t=function(K,ee){var ie,fe,te;if(K<ee)return 0;for(ee>K/2&&(ee=K-ee),te=1,ie=K,fe=1;ie!==K-ee;)te*=ie,te/=fe,ie--,fe++;return te},B=function(K){var ee,ie,fe,te;for(ee=1,ie=fe=2,te=K;2<=te?fe<=te:fe>=te;ie=2<=te?++fe:--fe)ee*=ie;return ee},Z=function(K,ee){return K>ee?K:ee},we=function(K,ee,ie){var fe,te,w,_,R;for(R=K[ee],fe=te=w=ee,_=ie-1;w<=_?te<=_:te>=_;fe=w<=_?++te:--te)K[fe]=K[fe+1];return K[ie]=R},Pe=function(K,ee,ie){var fe,te,w,_,R;for(R=K[ie],fe=te=w=ie,_=ee+1;w<=_?te<=_:te>=_;fe=w<=_?++te:--te)K[fe]=K[fe-1];return K[ee]=R},pe=function(K,ee,ie,fe=!1){var te,w,_,R,j,he;return R=ie-ee,_=B(R+1),K==="corners"?(w=7,he="cp"):(w=11,he="ep"),j=function(){var se,W,M;for(M=[],te=se=0,W=R;0<=W?se<=W:se>=W;te=0<=W?++se:--se)M.push(0);return M}(),function(se){var W,M,D,ne,xe,ve,Ee,Le,Ie,Ne,We,I,re,ge,Ae,Ce,Be,nt,ct,Ft,$e,Et,ft,Cn,Mt,qn,jn;if(se!=null){for(te=ve=0,We=R;0<=We?ve<=We:ve>=We;te=0<=We?++ve:--ve)j[te]=te+ee;for(M=se%_,W=se/_|0,Ie=this[he],te=Ee=0,I=w;0<=I?Ee<=I:Ee>=I;te=0<=I?++Ee:--Ee)Ie[te]=-1;for(ne=Le=1,ge=R;1<=ge?Le<=ge:Le>=ge;ne=1<=ge?++Le:--Le)for(xe=M%(ne+1),M=M/(ne+1)|0;xe>0;)Pe(j,0,ne),xe--;if(Mt=R,fe)for(ne=Ne=0,Ae=w;0<=Ae?Ne<=Ae:Ne>=Ae;ne=0<=Ae?++Ne:--Ne)D=t(w-ne,Mt+1),W-D>=0&&(Ie[ne]=j[R-Mt],W-=D,Mt--);else for(ne=Et=Ce=w;Ce<=0?Et<=0:Et>=0;ne=Ce<=0?++Et:--Et)D=t(ne,Mt+1),W-D>=0&&(Ie[ne]=j[Mt],W-=D,Mt--);return this}else{for(Ie=this[he],te=ft=0,Be=R;0<=Be?ft<=Be:ft>=Be;te=0<=Be?++ft:--ft)j[te]=-1;if(W=M=Mt=0,fe)for(ne=Cn=nt=w;nt<=0?Cn<=0:Cn>=0;ne=nt<=0?++Cn:--Cn)ee<=(ct=Ie[ne])&&ct<=ie&&(W+=t(w-ne,Mt+1),j[R-Mt]=Ie[ne],Mt++);else for(ne=qn=0,Ft=w;0<=Ft?qn<=Ft:qn>=Ft;ne=0<=Ft?++qn:--qn)ee<=($e=Ie[ne])&&$e<=ie&&(W+=t(ne,Mt+1),j[Mt]=Ie[ne],Mt++);for(ne=jn=re=R;re<=0?jn<=0:jn>=0;ne=re<=0?++jn:--jn){for(xe=0;j[ne]!==ee+ne;)we(j,0,ne),xe++;M=(ne+1)*M+xe}return W*_+M}}},v={twist:function(K){var ee,ie,fe,te,w,_;if(K!=null){for(w=0,ee=ie=6;ie>=0;ee=--ie)te=K%3,K=K/3|0,this.co[ee]=te,w+=te;return this.co[7]=(3-w%3)%3,this}else{for(_=0,ee=fe=0;fe<=6;ee=++fe)_=3*_+this.co[ee];return _}},flip:function(K){var ee,ie,fe,te,w,_;if(K!=null){for(w=0,ee=ie=10;ie>=0;ee=--ie)te=K%2,K=K/2|0,this.eo[ee]=te,w+=te;return this.eo[11]=(2-w%2)%2,this}else{for(_=0,ee=fe=0;fe<=10;ee=++fe)_=2*_+this.eo[ee];return _}},cornerParity:function(){var K,ee,ie,fe,te,w,_,R,j;for(j=0,K=ie=te=h,w=ue+1;te<=w?ie<=w:ie>=w;K=te<=w?++ie:--ie)for(ee=fe=_=K-1,R=ue;_<=R?fe<=R:fe>=R;ee=_<=R?++fe:--fe)this.cp[ee]>this.cp[K]&&j++;return j%2},edgeParity:function(){var K,ee,ie,fe,te,w,_,R,j;for(j=0,K=ie=te=e,w=J+1;te<=w?ie<=w:ie>=w;K=te<=w?++ie:--ie)for(ee=fe=_=K-1,R=J;_<=R?fe<=R:fe>=R;ee=_<=R?++fe:--fe)this.ep[ee]>this.ep[K]&&j++;return j%2},URFtoDLF:pe("corners",ue,l),URtoUL:pe("edges",J,X),UBtoDF:pe("edges",x,o),URtoDF:pe("edges",J,o),FRtoBR:pe("edges",m,e,!0)};for(H in v)He=v[H],i.prototype[H]=He;N=function(K,ee,ie){var fe,te,w,_,R,j,he,se,W,M,D;for(fe=K==="corners"?"cornerMultiply":"edgeMultiply",te=new i,D=[],w=j=0,M=ie-1;0<=M?j<=M:j>=M;w=0<=M?++j:--j){for(te[ee](w),_=[],R=se=0;se<=5;R=++se){for(he=i.moves[R],W=0;W<=2;++W)te[fe](he),_.push(te[ee]());te[fe](he)}D.push(_)}return D},P=function(){var K,ee;return K=new i,ee=new i,function(ie,fe){var te,w;for(K.URtoUL(ie),ee.UBtoDF(fe),te=w=0;w<=7;te=++w)if(K.ep[te]!==-1){if(ee.ep[te]!==-1)return-1;ee.ep[te]=K.ep[te]}return ee.URtoDF()}}(),S=2187,p=2048,y=2,f=11880,A=495,T=24,C=20160,F=20160,g=1320,E=1320,i.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},_e={twist:["corners",S],flip:["edges",p],FRtoBR:["edges",f],URFtoDLF:["corners",C],URtoDF:["edges",F],URtoUL:["edges",g],UBtoDF:["edges",E],mergeURtoDF:[]},i.computeMoveTables=function(...K){var ee,ie,fe,te,w,_;for(K.length===0&&(K=function(){var R;R=[];for(fe in _e)R.push(fe);return R}()),ie=0,ee=K.length;ie<ee;ie++)_=K[ie],this.moveTables[_]===null&&(_==="mergeURtoDF"?this.moveTables.mergeURtoDF=function(){var R,j,he,se;for(se=[],j=he=0;he<=335;j=++he)se.push(function(){var W,M;for(M=[],R=W=0;W<=335;R=++W)M.push(P(j,R));return M}());return se}():([te,w]=_e[_],this.moveTables[_]=N(te,_,w)));return this},me=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],de=function(){var K,ee,ie,fe,te,w,_,R;for(R=[],ee=ie=0;ie<=5;ee=++ie){for(fe=[],K=te=0;te<=5;K=++te)if(K!==ee&&K!==ee-3)for(_=w=0;w<=2;_=++w)fe.push(K*3+_);R.push(fe)}return R}(),Q=[0,1,2,4,7,9,10,11,13,16],Se=function(){var K,ee,ie,fe,te,w,_,R,j,he;for(he=[],ee=fe=0;fe<=5;ee=++fe){for(te=[],K=w=0;w<=5;K=++w)if(K!==ee&&K!==ee-3)for(j=K===0||K===3?[0,1,2]:[1],_=0,ie=j.length;_<ie;_++)R=j[_],te.push(K*3+R);he.push(te)}return he}(),Me=function(K,ee,ie){var fe,te,w;return fe=ee%8,w=ee>>3,te=fe<<2,ie!=null?(K[w]&=~(15<<te),K[w]|=ie<<te,ie):(K[w]&15<<te)>>>te},O=function(K,ee,ie,fe){var te,w,_,R,j,he,se,W,M,D,ne,xe;for(xe=function(){var ve,Ee,Le;for(Le=[],ve=0,Ee=Math.ceil(ee/8)-1;0<=Ee?ve<=Ee:ve>=Ee;0<=Ee?++ve:--ve)Le.push(4294967295);return Le}(),K===1?W=me:W=Q,w=0,Me(xe,0,w),_=1;_!==ee;){for(R=he=0,ne=ee-1;0<=ne?he<=ne:he>=ne;R=0<=ne?++he:--he)if(Me(xe,R)===w)for(te=ie(R),D=0,j=W.length;D<j;D++)se=W[D],M=fe(te,se),Me(xe,M)===15&&(Me(xe,M,w+1),_++);w++}return xe},i.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},ye={sliceTwist:[1,A*S,function(K){return[K%A,K/A|0]},function(K,ee){var ie,fe,te,w;return[te,w]=K,ie=i.moveTables.FRtoBR[te*24][ee]/24|0,fe=i.moveTables.twist[w][ee],fe*A+ie}],sliceFlip:[1,A*p,function(K){return[K%A,K/A|0]},function(K,ee){var ie,fe,te,w;return[w,ie]=K,te=i.moveTables.FRtoBR[w*24][ee]/24|0,fe=i.moveTables.flip[ie][ee],fe*A+te}],sliceURFtoDLFParity:[2,T*C*y,function(K){return[K%2,(K/2|0)%T,(K/2|0)/T|0]},function(K,ee){var ie,fe,te,w,_,R;return[_,R,ie]=K,fe=i.moveTables.parity[_][ee],te=i.moveTables.FRtoBR[R][ee],w=i.moveTables.URFtoDLF[ie][ee],(w*T+te)*2+fe}],sliceURtoDFParity:[2,T*F*y,function(K){return[K%2,(K/2|0)%T,(K/2|0)/T|0]},function(K,ee){var ie,fe,te,w,_,R;return[_,R,ie]=K,fe=i.moveTables.parity[_][ee],te=i.moveTables.FRtoBR[R][ee],w=i.moveTables.URtoDF[ie][ee],(w*T+te)*2+fe}]},i.computePruningTables=function(...K){var ee,ie,fe,te,w;for(K.length===0&&(K=function(){var _;_=[];for(fe in ye)_.push(fe);return _}()),ie=0,ee=K.length;ie<ee;ie++)w=K[ie],this.pruningTables[w]===null&&(te=ye[w],this.pruningTables[w]=O(...te));return this},i.initSolver=function(){return i.computeMoveTables(),i.computePruningTables()},i.prototype.solveUpright=function(K=22){var ee,ie,fe,te,w,_,R,j,he;return fe=function(){var se,W,M,D,ne,xe,ve;for(W=["U","R","F","D","L","B"],xe=["","2","'"],ve=[],se=M=0;M<=5;se=++M)for(ne=D=0;D<=2;ne=++D)ve.push(W[se]+xe[ne]);return ve}(),ee=class{constructor(W){this.parent=null,this.lastMove=null,this.depth=0,W&&this.init(W)}init(W){return this.flip=W.flip(),this.twist=W.twist(),this.slice=W.FRtoBR()/T|0,this.parity=W.cornerParity(),this.URFtoDLF=W.URFtoDLF(),this.FRtoBR=W.FRtoBR(),this.URtoUL=W.URtoUL(),this.UBtoDF=W.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+fe[this.lastMove]+" ":""}move(W,M,D){return i.moveTables[W][M][D]}pruning(W,M){return Me(i.pruningTables[W],M)}moves1(){return this.lastMove!==null?de[this.lastMove/3|0]:me}minDist1(){var W,M;return W=this.pruning("sliceFlip",A*this.flip+this.slice),M=this.pruning("sliceTwist",A*this.twist+this.slice),Z(W,M)}next1(W){var M;return M=ie.pop(),M.parent=this,M.lastMove=W,M.depth=this.depth+1,M.flip=this.move("flip",this.flip,W),M.twist=this.move("twist",this.twist,W),M.slice=this.move("FRtoBR",this.slice*24,W)/24|0,M}moves2(){return this.lastMove!==null?Se[this.lastMove/3|0]:Q}minDist2(){var W,M,D,ne;return D=(T*this.URtoDF+this.FRtoBR)*y+this.parity,W=this.pruning("sliceURtoDFParity",D),ne=(T*this.URFtoDLF+this.FRtoBR)*y+this.parity,M=this.pruning("sliceURFtoDLFParity",ne),Z(W,M)}init2(W=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),W))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(W){var M;return M=ie.pop(),M.parent=this,M.lastMove=W,M.depth=this.depth+1,M.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,W),M.FRtoBR=this.move("FRtoBR",this.FRtoBR,W),M.parity=this.move("parity",this.parity,W),M.URtoDF=this.move("URtoDF",this.URtoDF,W),M}},j=null,w=function(se){var W,M,D,ne;for(W=0,ne=[],W=M=1,D=K;(1<=D?M<=D:M>=D)&&(te(se,W),j===null);W=1<=D?++M:--M)ne.push(W++);return ne},te=function(se,W){var M,D,ne,xe,ve,Ee,Le;if(W===0){if(se.minDist1()===0&&(se.lastMove===null||(ve=se.lastMove,Ge.call(Q,ve)<0)))return R(se)}else if(W>0&&se.minDist1()<=W){for(Ee=se.moves1(),Le=[],D=0,M=Ee.length;D<M&&(ne=Ee[D],xe=se.next1(ne),te(xe,W-1),ie.push(xe),j===null);D++)Le.push(void 0);return Le}},R=function(se){var W,M,D,ne;for(se.init2(),ne=[],W=M=1,D=K-se.depth;(1<=D?M<=D:M>=D)&&(_(se,W),j===null);W=1<=D?++M:--M)ne.push(W++);return ne},_=function(se,W){var M,D,ne,xe,ve,Ee;if(W===0){if(se.minDist2()===0)return j=se.solution()}else if(W>0&&se.minDist2()<=W){for(ve=se.moves2(),Ee=[],D=0,M=ve.length;D<M&&(ne=ve[D],xe=se.next2(ne),_(xe,W-1),ie.push(xe),j===null);D++)Ee.push(void 0);return Ee}},ie=function(){var se,W,M;for(M=[],se=0,W=K+1;0<=W?se<=W:se>=W;0<=W?++se:--se)M.push(new ee);return M}(),he=ie.pop().init(this),w(he),ie.push(he),j.length>0&&(j=j.substring(0,j.length-1)),j},le={U:0,R:1,F:2,D:3,L:4,B:5},oe={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},i.prototype.solve=function(K=22){var ee,ie,fe,te,w,_,R,j,he;for(ee=this.clone(),j=ee.upright(),ee.move(j),_=new i().move(j).center,he=ee.solveUpright(K),R=[],w=he.split(" "),fe=0,ie=w.length;fe<ie;fe++)te=w[fe],R.push(oe[_[le[te[0]]]]),te.length>1&&(R[R.length-1]+=te[1]);return R.join(" ")},i.scramble=function(){return i.inverse(i.random().solve())}}).call(Lc);(function(n){n.exports=Za.exports})(Dc);const Qa=Xg(Dc.exports);new Qa;Qa.initSolver();function Yg(n){var e=Qa.fromString(n);return e.solve()}const $g="modulepreload",Zg=function(n){return"/RubiksSimulator/"+n},wl={},tt=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Zg(s),s in wl)return;wl[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":$g,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};var Cc=class{is(n){return this instanceof n}as(n){return this instanceof n?this:null}},Gn=class extends Cc{constructor(){super()}get log(){return console.log.bind(console,this,this.toString())}};function Qg(n,e=!0){if(!e)return n;switch(n){case 1:return-1;case-1:return 1}}function Rc(n,e){return e===-1?Array.from(n).reverse():n}function Kg(n){return Array.from(n).reverse()}function*Jg(n,e){e===-1?yield*e0(n):yield*n}function*e0(n){for(const e of Array.from(n).reverse())yield e}var Ia=2147483647,Pa="2^31 - 1",t0=-2147483648,za=class{#e=[];push(n){this.#e.push(n)}experimentalPushAlg(n){for(const e of n.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return this.#e.length}toAlg(){return new De(this.#e)}reset(){this.#e=[]}},Vt=class extends Gn{#e;#t;constructor(n,e){super(),this.#e=Dr(n),this.#t=Dr(e)}get A(){return this.#e}get B(){return this.#t}isIdentical(n){const e=n.as(Vt);return!!(e?.A.isIdentical(this.A)&&e?.B.isIdentical(this.B))}invert(){return new Vt(this.#t,this.#e)}*experimentalExpand(n=1,e){e??(e=1/0),e===0?yield n===1?this:this.invert():n===1?(yield*this.A.experimentalExpand(1,e-1),yield*this.B.experimentalExpand(1,e-1),yield*this.A.experimentalExpand(-1,e-1),yield*this.B.experimentalExpand(-1,e-1)):(yield*this.B.experimentalExpand(1,e-1),yield*this.A.experimentalExpand(1,e-1),yield*this.B.experimentalExpand(-1,e-1),yield*this.A.experimentalExpand(-1,e-1))}toString(){return`[${this.#e.toString()}, ${this.#t.toString()}]`}},Rt=class extends Gn{#e;#t;constructor(n,e){super(),this.#e=Dr(n),this.#t=Dr(e)}get A(){return this.#e}get B(){return this.#t}isIdentical(n){const e=n.as(Rt);return!!(e?.A.isIdentical(this.A)&&e?.B.isIdentical(this.B))}invert(){return new Rt(this.#e,this.#t.invert())}*experimentalExpand(n,e){e??(e=1/0),e===0?yield n===1?this:this.invert():(yield*this.A.experimentalExpand(1,e-1),yield*this.B.experimentalExpand(n,e-1),yield*this.A.experimentalExpand(-1,e-1))}toString(){return`[${this.A}: ${this.B}]`}},cr=class extends Gn{#e;constructor(n){if(super(),n.includes(`
`)||n.includes("\r"))throw new Error("LineComment cannot contain newline");this.#e=n}get text(){return this.#e}isIdentical(n){const e=n;return n.is(cr)&&this.#e===e.#e}invert(){return this}*experimentalExpand(n=1,e=1/0){yield this}toString(){return`//${this.#e}`}},Vn=class extends Gn{toString(){return`
`}isIdentical(n){return n.is(Vn)}invert(){return this}*experimentalExpand(n=1,e=1/0){yield this}},Nt=class extends Gn{toString(){return"."}isIdentical(n){return n.is(Nt)}invert(){return this}*experimentalExpand(n=1,e=1/0){yield this}};function os(n,e){return n?parseInt(n):e}var yl=/^(\d+)?('?)/,n0=/^[_\dA-Za-z]/,i0=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)?/,r0=/^[^\n]*/,s0=/^(-?\d+), ?/,a0=/^(-?\d+)\)/;function Ic(n){return new Ka().parseAlg(n)}function o0(n){return new Ka().parseMove(n)}function l0(n){return new Ka().parseQuantumMove(n)}function bt(n,e,t){const i=n;return i.startCharIndex=e,i.endCharIndex=t,i}function c0(n,e){return"startCharIndex"in n&&(e.startCharIndex=n.startCharIndex),"endCharIndex"in n&&(e.endCharIndex=n.endCharIndex),e}var Ka=class{#e="";#t=0;#n=[];parseAlg(n){this.#e=n,this.#t=0;const e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();const t=Array.from(e.childAlgNodes());if(this.#n.length>0)for(const o of this.#n.reverse())t.push(o);const i=new De(t),{startCharIndex:r,endCharIndex:s}=e;return bt(i,r,s),i}parseMove(n){this.#e=n,this.#t=0;const e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(n){this.#e=n,this.#t=0;const e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(this.#t!==this.#e.length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(n){let e=this.#t,t=this.#t;const i=new za;let r=!1;const s=o=>{if(r)throw new Error(`Unexpected character at index ${o}. Are you missing a space?`)};e:for(;this.#t<this.#e.length;){const o=this.#t;if(n.includes(this.#e[this.#t]))return bt(i.toAlg(),e,t);if(this.tryConsumeNext(" ")){r=!1,i.experimentalNumAlgNodes()===0&&(e=this.#t);continue e}else if(n0.test(this.#e[this.#t])){s(o);const a=this.parseMoveImpl();i.push(a),r=!0,t=this.#t;continue e}else if(this.tryConsumeNext("(")){s(o);const a=this.tryRegex(s0);if(a){const c=a[1],l=this.#t,u=this.parseRegex(a0),h=bt(new z(new cn("U_SQ_"),parseInt(c)),o+1,o+1+c.length),d=bt(new z(new cn("D_SQ_"),parseInt(u[1])),l,this.#t-1),m=bt(new De([h,d]),o+1,this.#t-1);i.push(bt(new yt(m),o,this.#t)),r=!0,t=this.#t;continue e}else{const c=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");const l=this.parseAmount();i.push(bt(new yt(c,l),o,this.#t)),r=!0,t=this.#t;continue e}}else if(this.tryConsumeNext("^")){this.mustConsumeNext("(");const a=this.parseAlgWithStopping([")"]);this.popNext();const c=new yt(a,-1),l=new Nt;c.experimentalNISSPlaceholder=l,l.experimentalNISSGrouping=c,this.#n.push(c),i.push(l)}else if(this.tryConsumeNext("[")){s(o);const a=this.parseAlgWithStopping([",",":"]),c=this.popNext(),l=this.parseAlgWithStopping(["]"]);switch(this.mustConsumeNext("]"),c){case":":{i.push(bt(new Rt(a,l),o,this.#t)),r=!0,t=this.#t;continue e}case",":{i.push(bt(new Vt(a,l),o,this.#t)),r=!0,t=this.#t;continue e}default:throw new Error("unexpected parsing error")}}else if(this.tryConsumeNext(`
`)){i.push(bt(new Vn,o,this.#t)),r=!1,t=this.#t;continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){s(o);const[a]=this.parseRegex(r0);i.push(bt(new cr(a),o,this.#t)),r=!1,t=this.#t;continue e}else{i.push(bt(new z("_SLASH_"),o,this.#t)),r=!0,t=this.#t;continue e}else if(this.tryConsumeNext(".")){s(o),i.push(bt(new Nt,o,this.#t)),r=!0,t=this.#t;continue e}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(this.#t!==this.#e.length)throw new Error("did not finish parsing?");if(n.length>0)throw new Error("expected stopping");return bt(i.toAlg(),e,t)}parseQuantumMoveImpl(){const[,,,n,e,t]=this.parseRegex(i0);return new cn(t,os(e,void 0),os(n,void 0))}parseMoveImpl(){const n=this.#t;if(this.tryConsumeNext("/"))return bt(new z("_SLASH_"),n,this.#t);let e=this.parseQuantumMoveImpl(),[t,i]=this.parseAmountAndTrackEmptyAbsAmount();const r=this.parseMoveSuffix();if(r){if(t<0)throw new Error("uh-oh");if((r==="++"||r==="--")&&t!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((r==="++"||r==="--")&&!i)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((r==="+"||r==="-")&&i)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");r.startsWith("+")&&(e=e.modified({family:`${e.family}_${r==="+"?"PLUS":"PLUSPLUS"}_`})),r.startsWith("-")&&(e=e.modified({family:`${e.family}_${r==="-"?"PLUS":"PLUSPLUS"}_`}),t*=-1)}return bt(new z(e,t),n,this.#t)}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){const n=this.#t,[,e,t]=this.parseRegex(yl);if(e?.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${n}: An amount can only start with 0 if it's exactly the digit 0.`);return[os(e,1)*(t==="'"?-1:1),!e]}parseAmount(){const n=this.#t,[,e,t]=this.parseRegex(yl);if(e?.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${n}: An amount number can only start with 0 if it's exactly the digit 0.`);return os(e,1)*(t==="'"?-1:1)}parseRegex(n){const e=n.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return this.#t+=e[0].length,e}tryRegex(n){const e=n.exec(this.remaining());return e===null?null:(this.#t+=e[0].length,e)}remaining(){return this.#e.slice(this.#t)}popNext(){const n=this.#e[this.#t];return this.#t++,n}tryConsumeNext(n){return this.#e[this.#t]===n?(this.#t++,!0):!1}mustConsumeNext(n){const e=this.popNext();if(e!==n)throw new Error(`expected \`${n}\` while parsing, encountered ${e}`);return e}},Ml=new Set;function Pc(n){Ml.has(n)||(console.warn(n),Ml.add(n))}var Na=class{constructor(n,e=1){if(this.quantum=n,this.amount=e,!Number.isInteger(this.amount)||this.amount<t0||this.amount>Ia)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${Pa}.`)}suffix(){let n="";const e=Math.abs(this.amount);return e!==1&&(n+=e),this.amount<0&&(n+="'"),n}isIdentical(n){return this.quantum.isIdentical(n.quantum)&&this.amount===n.amount}*experimentalExpand(n,e){const t=Math.abs(this.amount),i=Qg(n,this.amount<0);for(let r=0;r<t;r++)yield*this.quantum.experimentalExpand(i,e)}},cn=class extends Cc{#e;#t;#n;constructor(n,e,t){if(super(),this.#e=n,this.#t=e??null,this.#n=t??null,Object.freeze(this),this.#t!==null&&(!Number.isInteger(this.#t)||this.#t<1||this.#t>Ia))throw new Error(`QuantumMove inner layer must be a positive integer below ${Pa}.`);if(this.#n!==null&&(!Number.isInteger(this.#n)||this.#n<1||this.#n>Ia))throw new Error(`QuantumMove outer layer must be a positive integer below ${Pa}.`);if(this.#n!==null&&this.#t!==null&&this.#t<=this.#n)throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(this.#n!==null&&this.#t===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(n){return l0(n)}modified(n){return new cn(n.family??this.#e,n.innerLayer??this.#t,n.outerLayer??this.#n)}isIdentical(n){const e=n;return n.is(cn)&&this.#e===e.#e&&this.#t===e.#t&&this.#n===e.#n}get family(){return this.#e}get outerLayer(){return this.#n}get innerLayer(){return this.#t}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(){let n=this.#e;return this.#t!==null&&(n=String(this.#t)+n,this.#n!==null&&(n=`${String(this.#n)}-${n}`)),n}},z=class extends Gn{#e;constructor(...n){if(super(),typeof n[0]=="string")if(n[1]??null){this.#e=new Na(cn.fromString(n[0]),n[1]);return}else return z.fromString(n[0]);this.#e=new Na(n[0],n[1])}isIdentical(n){const e=n.as(z);return!!e&&this.#e.isIdentical(e.#e)}invert(){return c0(this,new z(this.#e.quantum,-this.amount))}*experimentalExpand(n=1){n===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return this.#e.quantum}modified(n){return new z(this.#e.quantum.modified(n),n.amount??this.amount)}static fromString(n){return o0(n)}get amount(){return this.#e.amount}get type(){return Pc("deprecated: type"),"blockMove"}get family(){return this.#e.quantum.family??void 0}get outerLayer(){return this.#e.quantum.outerLayer??void 0}get innerLayer(){return this.#e.quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return this.#e.quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){const n=Math.abs(this.amount);return this.#e.quantum.toString().slice(0,-10)+(n===1?"":n)+(this.amount<0?"--":"++")}return this.#e.quantum.toString()+this.#e.suffix()}},u0=class{constructor(){this.quantumU_SQ_=null,this.quantumD_SQ_=null}format(n){if(n.amount!==1)return null;const e=this.tuple(n);return e?`(${e.map(t=>t.amount).join(", ")})`:null}tuple(n){if(n.amount!==1)return null;this.quantumU_SQ_||(this.quantumU_SQ_=new cn("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new cn("D_SQ_"));const e=n.alg;if(e.experimentalNumChildAlgNodes()===2){const[t,i]=e.childAlgNodes();if(t.as(z)?.quantum.isIdentical(this.quantumU_SQ_)&&i.as(z)?.quantum.isIdentical(this.quantumD_SQ_))return[t,i]}return null}},xa=new u0,yt=class extends Gn{constructor(n,e){super();const t=Dr(n);this.#e=new Na(t,e)}#e;isIdentical(n){const e=n;return n.is(yt)&&this.#e.isIdentical(e.#e)}get alg(){return this.#e.quantum}get amount(){return this.#e.amount}get experimentalRepetitionSuffix(){return this.#e.suffix()}invert(){const n=xa.tuple(this);if(n){const[e,t]=n;return new yt(new De([e.invert(),t.invert()]))}return new yt(this.#e.quantum,-this.#e.amount)}*experimentalExpand(n=1,e){e??(e=1/0),e===0?yield n===1?this:this.invert():yield*this.#e.experimentalExpand(n,e-1)}static fromString(){throw new Error("unimplemented")}toString(){return xa.format(this)??`(${this.#e.quantum.toString()})${this.#e.suffix()}`}experimentalAsSquare1Tuple(){return xa.tuple(this)}};function En(n,e){return n instanceof e}function h0(n){return En(n,yt)||En(n,cr)||En(n,Vt)||En(n,Rt)||En(n,z)||En(n,Vn)||En(n,Nt)}function zc(n,e,t){if(e.is(yt))return n.traverseGrouping(e,t);if(e.is(z))return n.traverseMove(e,t);if(e.is(Vt))return n.traverseCommutator(e,t);if(e.is(Rt))return n.traverseConjugate(e,t);if(e.is(Nt))return n.traversePause(e,t);if(e.is(Vn))return n.traverseNewline(e,t);if(e.is(cr))return n.traverseLineComment(e,t);throw new Error("unknown AlgNode")}function Nc(n){if(n.is(yt)||n.is(z)||n.is(Vt)||n.is(Rt)||n.is(Nt)||n.is(Vn)||n.is(cr))return n;throw new Error("internal error: expected AlgNode")}var ur=class{traverseAlgNode(n,e){return zc(this,n,e)}traverseIntoAlgNode(n,e){return Nc(this.traverseAlgNode(n,e))}},hr=class extends ur{traverseAlgNode(n){return zc(this,n,void 0)}traverseIntoAlgNode(n){return Nc(this.traverseAlgNode(n))}};function hn(n,e){const t=new n(...e??[]);return t.traverseAlg.bind(t)}var d0="any-direction",Fc=class{constructor(n={}){this.config=n}cancelQuantum(){const{cancel:n}=this.config;return n===!0?d0:n===!1?"none":n?.directional??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){const{cancel:n}=this.config;return n===!0||n===!1?"canonical-centered":n?.puzzleSpecificModWrap?n?.puzzleSpecificModWrap:n?.directional==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){return this.config.puzzleLoader?.puzzleSpecificSimplifyOptions??this.config.puzzleSpecificSimplifyOptions}};function f0(n,e){return n*Math.sign(e.amount)>=0}function p0(n,e,t){return((n-t)%e+e)%e+t}function Oc(n,e,t){const i=new Fc(t),r=Array.from(n.childAlgNodes());let s=[e];function o(){return new De([...r,...s])}function a(c){if(i.cancelPuzzleSpecificModWrap()==="none")return c;const l=i.puzzleSpecificSimplifyOptions()?.quantumMoveOrder;if(!l)return c;const u=l(e.quantum);let h;switch(i.cancelPuzzleSpecificModWrap()){case"gravity":{h=-Math.floor((u-(c.amount<0?0:1))/2);break}case"canonical-centered":{h=-Math.floor((u-1)/2);break}case"canonical-positive":{h=0;break}case"preserve-sign":{h=c.amount<0?1-u:0;break}default:throw new Error("Unknown mod wrap")}const d=p0(c.amount,u,h);return c.modified({amount:d})}if(i.cancelAny()){let c;const l=i.puzzleSpecificSimplifyOptions()?.axis;if(l)c=v=>l.areQuantumMovesSameAxis(e.quantum,v.quantum);else{const v=e.quantum.toString();c=p=>p.quantum.toString()===v}const u=i.cancelQuantum()==="same-direction",h=new Map;h.set(e.quantum.toString(),Math.sign(e.amount));let d;for(d=r.length-1;d>=0;d--){const v=r[d].as(z);if(!v||!c(v))break;const p=v.quantum.toString();if(u){const f=h.get(p);if(f&&!f0(f,v))break;h.set(p,Math.sign(v.amount))}}const m=[...r.splice(d+1),e];if(l)s=l.simplifySameAxisMoves(m,i.cancelPuzzleSpecificModWrap()!=="none");else{const v=m.reduce((p,f)=>p+f.amount,0);if(h.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new z(e.quantum,v)]}}return s=s.map(c=>a(c)).filter(c=>c.amount!==0),o()}function m0(n,e,t){const i=e.as(z);return i?Oc(n,i,t):new De([...n.childAlgNodes(),e])}var g0=class extends ur{#e;#t(){return this.#e??(this.#e=new Map)}#n(n){return{...n,depth:n.depth?n.depth-1:null}}*traverseAlg(n,e){if(e.depth===0){yield*n.childAlgNodes();return}let t=[];const i=this.#n(e);for(const r of n.childAlgNodes())for(const s of this.traverseAlgNode(r,i))t=Array.from(m0(new De(t),s,i).childAlgNodes());for(const r of t)yield r}*traverseGrouping(n,e){if(e.depth===0){yield n;return}if(n.amount===0)return;const t=new yt(this.traverseAlg(n.alg,this.#n(e)),n.amount);if(t.alg.experimentalIsEmpty())return;const i=this.#t().get(n);i&&(t.experimentalNISSPlaceholder=i,i.experimentalNISSGrouping=t),yield t}*traverseMove(n,e){yield n}#i(n,e,t){if(n.experimentalNumChildAlgNodes()===1&&e.experimentalNumChildAlgNodes()===1){const i=Array.from(n.childAlgNodes())[0]?.as(z),r=Array.from(e.childAlgNodes())[0]?.as(z);if(!(i&&r))return!1;if(r.quantum.isIdentical(i.quantum)||new Fc(t).puzzleSpecificSimplifyOptions()?.axis?.areQuantumMovesSameAxis(i.quantum,r.quantum))return!0}return!1}*traverseCommutator(n,e){if(e.depth===0){yield n;return}const t=this.#n(e),i=new Vt(this.traverseAlg(n.A,t),this.traverseAlg(n.B,t));i.A.experimentalIsEmpty()||i.B.experimentalIsEmpty()||i.A.isIdentical(i.B)||i.A.isIdentical(i.B.invert())||this.#i(i.A,i.B,e)||(yield i)}*traverseConjugate(n,e){if(e.depth===0){yield n;return}const t=this.#n(e),i=new Rt(this.traverseAlg(n.A,t),this.traverseAlg(n.B,t));if(!i.B.experimentalIsEmpty()){if(i.A.experimentalIsEmpty()||i.A.isIdentical(i.B)||i.A.isIdentical(i.B.invert())||this.#i(i.A,i.B,e)){yield*n.B.childAlgNodes();return}yield i}}*traversePause(n,e){if(n.experimentalNISSGrouping){const t=new Nt;this.#t().set(n.experimentalNISSGrouping,t),yield t}else yield n}*traverseNewline(n,e){yield n}*traverseLineComment(n,e){yield n}},v0=hn(g0);function Sl(n){if(!n)return[];if(En(n,De))return n.childAlgNodes();if(typeof n=="string")return Ic(n).childAlgNodes();const e=n;if(typeof e[Symbol.iterator]=="function")return e;throw new Error("Invalid AlgNode")}function Dr(n){return En(n,De)?n:new De(n)}var De=class extends Gn{#e;constructor(n){super(),this.#e=Array.from(Sl(n));for(const e of this.#e)if(!h0(e))throw new Error("An alg can only contain alg nodes.")}isIdentical(n){const e=n;if(!n.is(De))return!1;const t=Array.from(this.#e),i=Array.from(e.#e);if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(!t[r].isIdentical(i[r]))return!1;return!0}invert(){return new De(Kg(Array.from(this.#e).map(n=>n.invert())))}*experimentalExpand(n=1,e){e??(e=1/0);for(const t of Rc(this.#e,n))yield*t.experimentalExpand(n,e)}expand(n){return new De(this.experimentalExpand(1,n?.depth??1/0))}*experimentalLeafMoves(){for(const n of this.experimentalExpand())n.is(z)&&(yield n)}concat(n){return new De(Array.from(this.#e).concat(Array.from(Sl(n))))}experimentalIsEmpty(){for(const n of this.#e)return!1;return!0}static fromString(n){return Ic(n)}units(){return this.childAlgNodes()}*childAlgNodes(){for(const n of this.#e)yield n}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(this.#e).length}get type(){return Pc("deprecated: type"),"sequence"}toString(){let n="",e=null;for(const t of this.#e){e&&(n+=x0(e,t));const i=t.as(Nt)?.experimentalNISSGrouping;if(i){if(i.amount!==-1)throw new Error("Invalid NISS Grouping amount!");n+=`^(${i.alg.toString()})`}else t.as(yt)?.experimentalNISSPlaceholder||(n+=t.toString());e=t}return n}experimentalSimplify(n){return new De(v0(this,n??{}))}simplify(n){return this.experimentalSimplify(n)}};function x0(n,e){return n.is(Vn)||e.is(Vn)||e.as(yt)?.experimentalNISSPlaceholder?"":n.is(cr)&&!e.is(Vn)?`
`:" "}new De([new z("R",1),new z("U",1),new z("R",-1),new z("U",1),new z("R",1),new z("U",-2),new z("R",-1)]),new De([new z("R",1),new z("U",2),new z("R",-1),new z("U",-1),new z("R",1),new z("U",-1),new z("R",-1)]),new De([new Vt(new De([new z("R",1),new z("U",1),new z("R",-2)]),new De([new Rt(new De([new z("R",1)]),new De([new z("U",1)]))]))]),new De([new z("R",1),new z("U",-1),new z("L",-1),new z("U",1),new z("R",-1),new z("U",-1),new z("L",1),new z("U",1)]),new De([new z("x",-1),new Vt(new De([new Rt(new De([new z("R",1)]),new De([new z("U",-1)]))]),new De([new z("D",1)])),new Vt(new De([new Rt(new De([new z("R",1)]),new De([new z("U",1)]))]),new De([new z("D",1)])),new z("x",1)]),new De([new Rt(new De([new z("F",1)]),new De([new Vt(new De([new z("U",1)]),new De([new z("R",1)]))]))]),new De([new Rt(new De([new z("R",2)]),new De([new Vt(new De([new z("F",2)]),new De([new z("R",-1),new z("B",-1),new z("R",1)]))]))]),new De([new z("F",1),new z("U",1),new z("R",1),new z("U",-1),new z("R",-1),new z("F",-1)]),new De([new z("R",1),new z("U",1),new z("R",-1),new z("U",-1),new z("R",-1),new z("F",1),new z("R",2),new z("U",-1),new z("R",-1),new z("U",-1),new z("R",1),new z("U",1),new z("R",-1),new z("F",-1)]),new De([new Rt(new De([new z("F",1)]),new De([new yt(new De([new Vt(new De([new z("R",1)]),new De([new z("U",1)]))]),3)]))]),new De([new Nt,new Nt,new Nt]);new z("R"),new z("R'"),new z("B"),new z("B'"),new z("D"),new z("D'"),new z("L"),new z("L'"),new z("U"),new z("U'"),new z("F"),new z("F'"),new z("x'"),new z("l"),new z("l'"),new z("r"),new z("r'"),new z("d"),new z("d'"),new z("x"),new z("x"),new z("x'"),new z("y"),new z("y"),new z("y'"),new z("z"),new z("z'"),new z("M'"),new z("M'"),new Nt;function Fa(n,e,t){const i={};for(const r in n.orbits){const s=n.orbits[r],o=e[r],a=t[r];if(xs(s.numOrientations,a))i[r]=o;else if(xs(s.numOrientations,o))i[r]=a;else{const c=new Array(s.numPieces);if(s.numOrientations===1){for(let l=0;l<s.numPieces;l++)c[l]=o.permutation[a.permutation[l]];i[r]={permutation:c,orientation:o.orientation}}else{const l=new Array(s.numPieces);for(let u=0;u<s.numPieces;u++)l[u]=(o.orientation[a.permutation[u]]+a.orientation[u])%s.numOrientations,c[u]=o.permutation[a.permutation[u]];i[r]={permutation:c,orientation:l}}}}return i}function bl(n,e,t){const i={};for(const r in n.orbits){const s=n.orbits[r],o=e[r],a=t[r];if(xs(s.numOrientations,a))i[r]=o;else{const c=new Array(s.numPieces);if(s.numOrientations===1){for(let l=0;l<s.numPieces;l++)c[l]=o.pieces[a.permutation[l]];i[r]={pieces:c,orientation:o.orientation}}else{const l=new Array(s.numPieces);for(let u=0;u<s.numPieces;u++)l[u]=(o.orientation[a.permutation[u]]+a.orientation[u])%s.numOrientations,c[u]=o.pieces[a.permutation[u]];i[r]={pieces:c,orientation:l}}}}return i}var Tl=new Map;function _0(n){const e=Tl.get(n);if(e)return e;const t=new Array(n),i=new Array(n);for(let s=0;s<n;s++)t[s]=s,i[s]=0;const r={permutation:t,orientation:i};return Tl.set(n,r),r}function w0(n){const e={};for(const[t,i]of Object.entries(n.orbits))e[t]=_0(i.numPieces);return e}function y0(n,e){const t=e.quantum.toString();let i=n.definition.moves[t];if(!i){const o=n.definition.experimentalDerivedMoves?.[t];o&&(i=n.algToTransformation(o).transformationData)}if(i)return sr(n,i,e.amount);const r=n.definition.moves[e.toString()];if(r)return r;const s=n.definition.moves[e.invert().toString()];if(s)return sr(n,s,-1);throw new Error(`Invalid move for KPuzzle (${n.name()}): ${e}`)}var Qi=class{constructor(n,e){this.kpuzzle=n,this.stateData=e}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),stateData:this.stateData}}static fromTransformation(n){const e=bl(n.kpuzzle.definition,n.kpuzzle.definition.startStateData,n.transformationData);return new Qi(n.kpuzzle,e)}apply(n){return this.applyTransformation(this.kpuzzle.toTransformation(n))}applyTransformation(n){if(n.isIdentityTransformation())return new Qi(this.kpuzzle,this.stateData);const e=bl(this.kpuzzle.definition,this.stateData,n.transformationData);return new Qi(this.kpuzzle,e)}applyMove(n){return this.applyTransformation(this.kpuzzle.moveToTransformation(n))}applyAlg(n){return this.applyTransformation(this.kpuzzle.algToTransformation(n))}experimentalToTransformation(){if(!this.kpuzzle.canConvertStateToUniqueTransformation())return null;const n={};for(const[e,t]of Object.entries(this.stateData)){const i={permutation:t.pieces,orientation:t.orientation};n[e]=i}return new Yt(this.kpuzzle,n)}experimentalIsSolved(n){if(!this.kpuzzle.definition.experimentalIsStateSolved)throw new Error("`KState.experimentalIsSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsStateSolved(this,n)}},Yt=class{constructor(n,e){this.kpuzzle=n,this.transformationData=e}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new Yt(this.kpuzzle,kc(this.kpuzzle,this.transformationData))}#e;isIdentityTransformation(){return this.#e??(this.#e=this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(n){const e=new Yt(n,w0(n.definition));return e.#e=!0,e}isIdentical(n){return S0(this.kpuzzle,this.transformationData,n.transformationData)}apply(n){return this.applyTransformation(this.kpuzzle.toTransformation(n))}applyTransformation(n){if(this.kpuzzle!==n.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${n.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return this.#e?new Yt(this.kpuzzle,n.transformationData):n.#e?new Yt(this.kpuzzle,this.transformationData):new Yt(this.kpuzzle,Fa(this.kpuzzle.definition,this.transformationData,n.transformationData))}applyMove(n){return this.applyTransformation(this.kpuzzle.moveToTransformation(n))}applyAlg(n){return this.applyTransformation(this.kpuzzle.algToTransformation(n))}toKState(){return Qi.fromTransformation(this)}repetitionOrder(){return E0(this.kpuzzle.definition,this)}selfMultiply(n){return new Yt(this.kpuzzle,sr(this.kpuzzle,this.transformationData,n))}};function xs(n,e){const{permutation:t}=e,i=t.length;for(let r=0;r<i;r++)if(t[r]!==r)return!1;if(n>1){const{orientation:r}=e;for(let s=0;s<i;s++)if(r[s]!==0)return!1}return!0}function M0(n,e,t,i={}){for(let r=0;r<n.numPieces;r++)if(!i?.ignoreOrientation&&e.orientation[r]!==t.orientation[r]||!i?.ignorePermutation&&e.permutation[r]!==t.permutation[r])return!1;return!0}function S0(n,e,t){for(const[i,r]of Object.entries(n.definition.orbits))if(!M0(r,e[i],t[i]))return!1;return!0}function kc(n,e){const t={};for(const i in n.definition.orbits){const r=n.definition.orbits[i],s=e[i];if(xs(r.numOrientations,s))t[i]=s;else if(r.numOrientations===1){const o=new Array(r.numPieces);for(let a=0;a<r.numPieces;a++)o[s.permutation[a]]=a;t[i]={permutation:o,orientation:s.orientation}}else{const o=new Array(r.numPieces),a=new Array(r.numPieces);for(let c=0;c<r.numPieces;c++){const l=s.permutation[c];o[l]=c,a[l]=(r.numOrientations-s.orientation[c]+r.numOrientations)%r.numOrientations}t[i]={permutation:o,orientation:a}}}return t}function sr(n,e,t){if(t===1)return e;if(t<0)return sr(n,kc(n,e),-t);if(t===0){const{transformationData:s}=n.identityTransformation();return s}let i=e;t!==2&&(i=sr(n,e,Math.floor(t/2)));const r=Fa(n.definition,i,i);return t%2===0?r:Fa(n.definition,e,r)}var b0=class extends ur{traverseAlg(n,e){let t=null;for(const i of n.childAlgNodes())t?t=t.applyTransformation(this.traverseAlgNode(i,e)):t=this.traverseAlgNode(i,e);return t??e.identityTransformation()}traverseGrouping(n,e){const t=this.traverseAlg(n.alg,e);return new Yt(e,sr(e,t.transformationData,n.amount))}traverseMove(n,e){return e.moveToTransformation(n)}traverseCommutator(n,e){const t=this.traverseAlg(n.A,e),i=this.traverseAlg(n.B,e);return t.applyTransformation(i).applyTransformation(t.invert()).applyTransformation(i.invert())}traverseConjugate(n,e){const t=this.traverseAlg(n.A,e),i=this.traverseAlg(n.B,e);return t.applyTransformation(i).applyTransformation(t.invert())}traversePause(n,e){return e.identityTransformation()}traverseNewline(n,e){return e.identityTransformation()}traverseLineComment(n,e){return e.identityTransformation()}},T0=hn(b0);function Oa(n,e){return e?Oa(e,n%e):n}function E0(n,e){let t=1;for(const i in n.orbits){const r=n.orbits[i],s=e.transformationData[i],o=new Array(r.numPieces);for(let a=0;a<r.numPieces;a++)if(!o[a]){let c=a,l=0,u=0;for(;o[c]=!0,l=l+s.orientation[c],u=u+1,c=s.permutation[c],c!==a;);l!==0&&(u=u*r.numOrientations/Oa(r.numOrientations,Math.abs(l))),t=t*u/Oa(t,u)}}return t}var Hn=class{constructor(n,e){this.definition=n,this.#e=new Map,this.experimentalPGNotation=e?.experimentalPGNotation}name(){return this.definition.name}identityTransformation(){return Yt.experimentalConstructIdentity(this)}#e;moveToTransformation(n){typeof n=="string"&&(n=new z(n));const e=n.toString(),t=this.#e.get(e);if(t)return new Yt(this,t);if(this.experimentalPGNotation){const r=this.experimentalPGNotation.lookupMove(n);if(!r)throw new Error(`could not map to internal move: ${n}`);return this.#e.set(e,r),new Yt(this,r)}const i=y0(this,n);return this.#e.set(e,i),new Yt(this,i)}algToTransformation(n){return typeof n=="string"&&(n=new De(n)),T0(n,this)}toTransformation(n){return typeof n=="string"?this.algToTransformation(n):n?.is?.(De)?this.algToTransformation(n):n?.is?.(z)?this.moveToTransformation(n):n}startState(){return new Qi(this,this.definition.startStateData)}#t;canConvertStateToUniqueTransformation(){return this.#t??(this.#t=(()=>{for(const[n,e]of Object.entries(this.definition.orbits)){const t=new Array(e.numPieces).fill(!1);for(const i of this.definition.startStateData[n].pieces)t[i]=!0;for(const i of t)if(!i)return!1}return!0})())}};function Y_(n,e,t,i,r){const o=n.orbits[e].pieces[t];if(o===null)return Wt;const a=o.facelets?.[i];return a===null?Wt:typeof a=="string"?a:r?a.hintMask??a.mask:(console.log(a),a.mask)}var ni=class{constructor(n,e){this.stickerings=new Map;for(const[t,i]of Object.entries(n.definition.orbits))this.stickerings.set(t,new Array(i.numPieces).fill(e))}},Wt="regular",xt="ignored",Gi="oriented",xr="invisible",Kn="dim",A0={Regular:{facelets:[Wt,Wt,Wt,Wt,Wt]},Ignored:{facelets:[xt,xt,xt,xt,xt]},OrientationStickers:{facelets:[Gi,Gi,Gi,Gi,Gi]},IgnoreNonPrimary:{facelets:[Wt,xt,xt,xt,xt]},Invisible:{facelets:[xr,xr,xr,xr,xr]},PermuteNonPrimary:{facelets:[Kn,Wt,Wt,Wt,Wt]},Dim:{facelets:[Kn,Kn,Kn,Kn,Kn]},Ignoriented:{facelets:[Kn,xt,xt,xt,xt]},OrientationWithoutPermutation:{facelets:[Gi,xt,xt,xt,xt]}};function Uc(n){return A0[n]}var Bc=class extends ni{constructor(n){super(n,"Regular")}set(n,e){for(const[t,i]of this.stickerings.entries())for(let r=0;r<i.length;r++)n.stickerings.get(t)[r]&&(i[r]=e);return this}toStickeringMask(){const n={orbits:{}};for(const[e,t]of this.stickerings.entries()){const i=[],r={pieces:i};n.orbits[e]=r;for(const s of t)i.push(Uc(s))}return n}},Vc=class{constructor(n){this.kpuzzle=n}and(n){const e=new ni(this.kpuzzle,!1);for(const[t,i]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let r=0;r<i.numPieces;r++){e.stickerings.get(t)[r]=!0;for(const s of n)if(!s.stickerings.get(t)[r]){e.stickerings.get(t)[r]=!1;continue e}}}return e}or(n){const e=new ni(this.kpuzzle,!1);for(const[t,i]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let r=0;r<i.numPieces;r++){e.stickerings.get(t)[r]=!1;for(const s of n)if(s.stickerings.get(t)[r]){e.stickerings.get(t)[r]=!0;continue e}}}return e}not(n){const e=new ni(this.kpuzzle,!1);for(const[t,i]of Object.entries(this.kpuzzle.definition.orbits))for(let r=0;r<i.numPieces;r++)e.stickerings.get(t)[r]=!n.stickerings.get(t)[r];return e}all(){return this.and(this.moves([]))}move(n){const e=this.kpuzzle.moveToTransformation(n),t=new ni(this.kpuzzle,!1);for(const[i,r]of Object.entries(this.kpuzzle.definition.orbits))for(let s=0;s<r.numPieces;s++)(e.transformationData[i].permutation[s]!==s||e.transformationData[i].orientation[s]!==0)&&(t.stickerings.get(i)[s]=!0);return t}moves(n){return n.map(e=>this.move(e))}orbits(n){const e=new ni(this.kpuzzle,!1);for(const t of n)e.stickerings.get(t).fill(!0);return e}orbitPrefix(n){const e=new ni(this.kpuzzle,!1);for(const t in this.kpuzzle.definition.orbits)t.startsWith(n)&&e.stickerings.get(t).fill(!0);return e}},El="Last Layer",Al="Last Slot",rn={"3x3x3":El,megaminx:El},Hi={"3x3x3":Al,megaminx:Al},L0={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:rn},PLL:{groups:rn},LL:{groups:rn},EOLL:{groups:rn},COLL:{groups:rn},OCLL:{groups:rn},CPLL:{groups:rn},CLL:{groups:rn},EPLL:{groups:rn},ELL:{groups:rn},ZBLL:{groups:rn},LS:{groups:Hi},ELS:{groups:Hi},CLS:{groups:Hi},ZBLS:{groups:Hi},VLS:{groups:Hi},WVLS:{groups:Hi},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};async function Cr(n,e){const t=await n.kpuzzle(),i=new Bc(t),r=new Vc(t),s=()=>r.move("U"),o=()=>r.or(r.moves(["U","D"])),a=()=>r.or(r.moves(["L","R"])),c=()=>r.not(a()),l=()=>r.not(s()),u=()=>r.orbitPrefix("CENTER"),h=()=>r.orbitPrefix("EDGE"),d=()=>r.or([r.orbitPrefix("CORNER"),r.orbitPrefix("C4RNER"),r.orbitPrefix("C5RNER")]),m=()=>r.or([c(),r.and([s(),h()])]),v=()=>r.and([s(),u()]),p=()=>r.and([r.and(r.moves(["F","R"])),h()]),f=()=>r.and([r.and(r.moves(["F","R"])),d(),r.not(s())]),y=()=>r.or([f(),p()]);function A(){i.set(l(),"Dim")}function T(){i.set(s(),"PermuteNonPrimary"),i.set(v(),"Dim")}function S(){i.set(s(),"IgnoreNonPrimary"),i.set(v(),"Regular")}function E(){i.set(s(),"Ignoriented"),i.set(v(),"Dim")}switch(e){case"corner":{i.set(h(),"Ignored");break}case"edges":{i.set(d(),"Ignored");break}case"full":break;case"PLL":{A(),T();break}case"CLS":{A(),i.set(f(),"Regular"),i.set(s(),"Ignoriented"),i.set(r.and([s(),u()]),"Dim"),i.set(r.and([s(),d()]),"IgnoreNonPrimary");break}case"OLL":{A(),S();break}case"EOLL":{A(),S(),i.set(r.and([s(),d()]),"Ignored");break}case"COLL":{A(),i.set(r.and([s(),h()]),"Ignoriented"),i.set(r.and([s(),u()]),"Dim"),i.set(r.and([s(),d()]),"Regular");break}case"OCLL":{A(),E(),i.set(r.and([s(),d()]),"IgnoreNonPrimary");break}case"CPLL":{A(),i.set(r.and([d(),s()]),"PermuteNonPrimary"),i.set(r.and([r.not(d()),s()]),"Dim");break}case"CLL":{A(),i.set(r.not(r.and([d(),s()])),"Dim");break}case"EPLL":{A(),i.set(s(),"Dim"),i.set(r.and([s(),h()]),"PermuteNonPrimary");break}case"ELL":{A(),i.set(s(),"Dim"),i.set(r.and([s(),h()]),"Regular");break}case"ELS":{A(),S(),i.set(r.and([s(),d()]),"Ignored"),i.set(p(),"Regular"),i.set(f(),"Ignored");break}case"LL":{A();break}case"F2L":{i.set(s(),"Ignored");break}case"ZBLL":{A(),i.set(s(),"PermuteNonPrimary"),i.set(v(),"Dim"),i.set(r.and([s(),d()]),"Regular");break}case"ZBLS":{A(),i.set(y(),"Regular"),S(),i.set(r.and([s(),d()]),"Ignored");break}case"VLS":{A(),i.set(y(),"Regular"),S();break}case"WVLS":{A(),i.set(y(),"Regular"),i.set(r.and([s(),h()]),"Ignoriented"),i.set(r.and([s(),u()]),"Dim"),i.set(r.and([s(),d()]),"IgnoreNonPrimary");break}case"LS":{A(),i.set(y(),"Regular"),i.set(s(),"Ignored"),i.set(v(),"Dim");break}case"EO":{i.set(d(),"Ignored"),i.set(h(),"OrientationWithoutPermutation");break}case"EOline":{i.set(d(),"Ignored"),i.set(h(),"OrientationWithoutPermutation"),i.set(r.and(r.moves(["D","M"])),"Regular");break}case"EOcross":{i.set(h(),"OrientationWithoutPermutation"),i.set(r.move("D"),"Regular"),i.set(d(),"Ignored");break}case"CMLL":{i.set(l(),"Dim"),i.set(m(),"Ignored"),i.set(r.and([s(),d()]),"Regular");break}case"L10P":{i.set(r.not(m()),"Dim"),i.set(r.and([d(),s()]),"Regular");break}case"L6E":{i.set(r.not(m()),"Dim");break}case"L6EO":{i.set(r.not(m()),"Dim"),i.set(m(),"OrientationWithoutPermutation"),i.set(r.and([u(),o()]),"OrientationStickers");break}case"Daisy":{i.set(r.all(),"Ignored"),i.set(u(),"Dim"),i.set(r.and([r.move("D"),u()]),"Regular"),i.set(r.and([r.move("U"),h()]),"IgnoreNonPrimary");break}case"Cross":{i.set(r.all(),"Ignored"),i.set(u(),"Dim"),i.set(r.and([r.move("D"),u()]),"Regular"),i.set(r.and([r.move("D"),h()]),"Regular");break}case"2x2x2":{i.set(r.or(r.moves(["U","F","R"])),"Ignored"),i.set(r.and([r.or(r.moves(["U","F","R"])),u()]),"Dim");break}case"2x2x3":{i.set(r.all(),"Dim"),i.set(r.or(r.moves(["U","F","R"])),"Ignored"),i.set(r.and([r.or(r.moves(["U","F","R"])),u()]),"Dim"),i.set(r.and([r.move("F"),r.not(r.or(r.moves(["U","R"])))]),"Regular");break}case"L2C":{i.set(r.or(r.moves(["L","R","B","D"])),"Dim"),i.set(r.not(u()),"Ignored");break}case"PBL":{i.set(r.all(),"Ignored"),i.set(r.or(r.moves(["U","D"])),"PermuteNonPrimary");break}case"Void Cube":{i.set(u(),"Invisible");break}case"picture":case"invisible":{i.set(r.all(),"Invisible");break}case"centers-only":{i.set(r.not(u()),"Ignored");break}default:console.warn(`Unsupported stickering for ${n.id}: ${e}. Setting all pieces to dim.`),i.set(r.and(r.moves([])),"Dim")}return i.toStickeringMask()}async function Rs(n,e){const t=[],i=[];for(const[r,s]of Object.entries(L0))s.groups&&(n in s.groups?t.push(r):e?.use3x3x3Fallbacks&&"3x3x3"in s.groups&&i.push(r));return t.concat(i)}function lt(n){let e=null;return()=>e??(e=n())}var Tr=class extends Promise{constructor(n){super(e=>{e()}),this._executor=n}static from(n){return new Tr(e=>{e(n())})}static resolve(n){return new Tr(e=>{e(n)})}static reject(n){return new Tr((e,t)=>{t(n)})}then(n,e){return this._promise=this._promise||new Promise(this._executor),this._promise.then(n,e)}catch(n){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(n)}};function Ja(n){return new Tr(e=>{e(n())})}async function eo(n){return(await tt(()=>import("./index.b52b244e.js"),[])).getPuzzleGeometryByName(n,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function D0(n,e){const t=await n,i=t.getKPuzzleDefinition(!0);i.name=e;const r=await tt(()=>import("./index.b52b244e.js"),[]),s=new r.ExperimentalPGNotation(t,t.getOrbitsDef(!0));return new Hn(i,{experimentalPGNotation:s})}var di=class{constructor(n){this.puzzleSpecificSimplifyOptionsPromise=Gc(this.kpuzzle.bind(this)),this.pgId=n.pgID,this.id=n.id,this.fullName=n.fullName,this.inventedBy=n.inventedBy,this.inventionYear=n.inventionYear}#e;pg(){return this.#e??(this.#e=eo(this.pgId??this.id))}#t;kpuzzle(){return this.#t??(this.#t=D0(this.pg(),this.id))}#n;svg(){return this.#n??(this.#n=(async()=>(await this.pg()).generatesvg())())}},Mr=class extends di{constructor(){super(...arguments),this.stickerings=()=>Rs(this.id,{use3x3x3Fallbacks:!0})}stickeringMask(n){return Cr(this,n)}};function Gc(n){return new Tr(async e=>{const t=await n();e({quantumMoveOrder:i=>t.moveToTransformation(new z(i)).repetitionOrder()})})}var _s={name:"3x3x3",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3},CENTERS:{numPieces:6,numOrientations:4}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientation:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientation:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientation:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientation:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,1]}}},experimentalDerivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};async function C0(n){const e=await(n.puzzleSpecificSimplifyOptions??n.puzzleSpecificSimplifyOptionsPromise);return e?{puzzleLoader:{puzzleSpecificSimplifyOptions:e}}:{}}new Array(24);async function ws(n,e){return(await tt(()=>import("./index.b52b244e.js"),[])).getPuzzleGeometryByDesc(n,{allMoves:!0,orientCenters:!0,addRotations:!0,...e})}async function Hc(n,e){const t=await ws(n,e),i=t.getKPuzzleDefinition(!0);i.name=`description: ${n}`;const r=await tt(()=>import("./index.b52b244e.js"),[]),s=new r.ExperimentalPGNotation(t,t.getOrbitsDef(!0));return new Hn(i,{experimentalPGNotation:s})}var R0=1;function I0(n,e){const t=R0++;let i=null;const r=async()=>i??(i=Hc(n)),s={id:`custom-${t}`,fullName:e?.fullName??`Custom Puzzle (instance #${t})`,kpuzzle:r,svg:async()=>(await ws(n)).generatesvg(),pg:async()=>ws(n),puzzleSpecificSimplifyOptionsPromise:Gc(r)};return e?.inventedBy&&(s.inventedBy=e.inventedBy),e?.inventionYear&&(s.inventionYear=e.inventionYear),s}var Wc=new Hn(_s);_s.experimentalIsStateSolved=N0;function qc(n){const e=n.stateData.CENTERS.pieces[0],t=n.stateData.CENTERS.pieces[5],i=n.stateData.CENTERS.pieces[1];let r=i;return e<i&&r--,t<i&&r--,[e,r]}var Ll=new Array(6).fill(0).map(()=>new Array(6));function P0(){{const n=["","z","x","z'","x'","x2"].map(t=>De.fromString(t)),e=new De("y");for(const t of n){let i=Wc.algToTransformation(t);for(let r=0;r<4;r++){i=i.applyAlg(e);const[s,o]=qc(i.toKState());Ll[s][o]=i.invert()}}}return Ll}function z0(n){const[e,t]=qc(n),i=P0()[e][t];return n.applyTransformation(i)}function N0(n,e){return e.ignorePuzzleOrientation&&(n=z0(n)),e.ignoreCenterOrientation&&(n=new Qi(n.kpuzzle,{EDGES:n.stateData.EDGES,CORNERS:n.stateData.CORNERS,CENTERS:{pieces:n.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!n.experimentalToTransformation()?.isIdentityTransformation()}var Is=class{#e=0;#t=0;queue(n){return new Promise(async(e,t)=>{try{const i=++this.#e,r=await n;i>this.#t&&(this.#t=i,e(r))}catch(i){t(i)}})}},jc=0,Xc=class{constructor(){this.#e=new Set,this.lastSourceGeneration=0,this.#t=new Set,this.#i=!1,this.#r=new Map}canReuse(n,e){return n===e||this.canReuseValue(n,e)}canReuseValue(n,e){return!1}debugGetChildren(){return Array.from(this.#e.values())}#e;addChild(n){this.#e.add(n)}removeChild(n){this.#e.delete(n)}markStale(n){if(n.detail.generation!==jc)throw new Error("A TwistyProp was marked stale too late!");if(this.lastSourceGeneration!==n.detail.generation){this.lastSourceGeneration=n.detail.generation;for(const e of this.#e)e.markStale(n);this.#n()}}#t;addRawListener(n,e){this.#t.add(n),e?.initial&&n()}removeRawListener(n){this.#t.delete(n)}#n(){this.#i||(this.#i=!0,setTimeout(()=>this.#s(),0))}#i;#s(){if(!this.#i)throw new Error("Invalid dispatch state!");for(const n of this.#t)n();this.#i=!1}#r;addFreshListener(n){const e=new Is;let t=null;const i=async()=>{const r=await e.queue(this.get());t!==null&&this.canReuse(t,r)||(t=r,n(r))};this.#r.set(n,i),this.addRawListener(i,{initial:!0})}removeFreshListener(n){this.removeRawListener(this.#r.get(n)),this.#r.delete(n)}},Wn=class extends Xc{#e;constructor(n){super(),this.#e=Ja(()=>this.getDefaultValue()),n&&(this.#e=this.deriveFromPromiseOrValue(n,this.#e))}set(n){this.#e=this.deriveFromPromiseOrValue(n,this.#e);const e={sourceProp:this,value:this.#e,generation:++jc};this.markStale(new CustomEvent("stale",{detail:e}))}async get(){return this.#e}async deriveFromPromiseOrValue(n,e){return this.derive(await n,e)}},Ze=class extends Wn{derive(n){return n}},Rr=Symbol("no value"),Ke=class extends Xc{constructor(n,e){super(),this.userVisibleErrorTracker=e,this.#e=n;for(const t of Object.values(n))t.addChild(this)}#e;#t=null;#n=null;async get(){const n=this.lastSourceGeneration;if(this.#n?.generation===n)return this.#n.output;const e={generation:n,output:this.#s(this.#i(),n,this.#t)};return this.#n=e,this.userVisibleErrorTracker?.reset(),e.output}async#i(){const n={};for(const[t,i]of Object.entries(this.#e))n[t]=i.get();const e={};for(const t in this.#e)e[t]=await n[t];return e}async#s(n,e,t=null){const i=await n,r=o=>(this.#t={inputs:i,output:Promise.resolve(o),generation:e},o);if(!t)return r(await this.derive(i));const s=t.inputs;for(const o in this.#e)if(!this.#e[o].canReuse(i[o],s[o]))return r(await this.derive(i));return t.output}},kr=class{#e=[];addListener(n,e){let t=!1;const i=r=>{t||e(r)};n.addFreshListener(i),this.#e.push(()=>{n.removeFreshListener(i),t=!0})}addMultiListener3(n,e){this.addMultiListener(n,e)}addMultiListener(n,e){let t=!1,i=n.length-1;const r=async s=>{if(i>0){i--;return}if(t)return;const o=n.map(c=>c.get()),a=await Promise.all(o);e(a)};for(const s of n)s.addFreshListener(r);this.#e.push(()=>{for(const s of n)s.removeFreshListener(r);t=!0})}disconnect(){for(const n of this.#e)n()}},dr=class{constructor(n){this.callback=n,this.animFrameID=null,this.animFrame=this.animFrameWrapper.bind(this)}requestIsPending(){return!!this.animFrameID}requestAnimFrame(){this.animFrameID||(this.animFrameID=requestAnimationFrame(this.animFrame))}cancelAnimFrame(){this.animFrameID&&(cancelAnimationFrame(this.animFrameID),this.animFrameID=0)}animFrameWrapper(n){this.animFrameID=0,this.callback(n)}},$_={floating:!0,none:!0},F0=class extends Ze{getDefaultValue(){return"auto"}},O0=Math.PI*2,Ir=360/O0,k0=class{},Pr;globalThis.HTMLElement?Pr=HTMLElement:Pr=k0;var U0=class{define(){}},Tt;globalThis.customElements?Tt=customElements:Tt=new U0;var dn=class{constructor(n){this.sourceText=n}getAsString(){return this.sourceText}},Kt=class extends Pr{constructor(n){super(),this.#e=new Map,this.shadow=this.attachShadow({mode:n?.mode??"closed"}),this.contentWrapper=document.createElement("div"),this.contentWrapper.classList.add("wrapper"),this.shadow.appendChild(this.contentWrapper)}#e;addCSS(n){const e=this.#e.get(n);if(e)return e;const t=document.createElement("style");return t.textContent=n.getAsString(),this.#e.set(n,t),this.shadow.appendChild(t),t}removeCSS(n){const e=this.#e.get(n);!e||(this.shadow.removeChild(e),this.#e.delete(n))}addElement(n){return this.contentWrapper.appendChild(n)}prependElement(n){this.contentWrapper.prepend(n)}removeElement(n){return this.contentWrapper.removeChild(n)}};Tt.define("twisty-managed-custom-element",Kt);var Dl=null;async function Yc(){return Dl??(Dl=tt(()=>import("./twisty-dynamic-3d-ANE2ZSK4.5ae7ece7.js"),[]))}var gn=Ja(async()=>(await Yc()).T3I);function ka(){return devicePixelRatio||1}var B0=new dn(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`),Cl=.1,V0=class extends EventTarget{constructor(n){super(),this.target=n}#e=new Map;start(){this.addTargetListener("pointerdown",this.onPointerDown.bind(this)),this.addTargetListener("contextmenu",n=>{n.preventDefault()}),this.addTargetListener("touchmove",n=>n.preventDefault()),this.addTargetListener("dblclick",n=>n.preventDefault())}stop(){for(const[n,e]of this.#t.entries())this.target.removeEventListener(n,e);this.#t.clear(),this.#n=!1}#t=new Map;addTargetListener(n,e){this.#t.has(n)||(this.target.addEventListener(n,e),this.#t.set(n,e))}#n=!1;#i(){this.#n||(this.addTargetListener("pointermove",this.onPointerMove.bind(this)),this.addTargetListener("pointerup",this.onPointerUp.bind(this)),this.#n=!0)}#s(n){this.#e.delete(n.pointerId)}#r(n){const e=this.#e.get(n.pointerId);if(!e)return{movementInfo:null,hasMoved:!1};let t;return(n.movementX??0)!==0||(n.movementY??0)!==0?t={attachedInfo:e.attachedInfo,movementX:n.movementX,movementY:n.movementY,elapsedMs:n.timeStamp-e.lastTimeStamp}:t={attachedInfo:e.attachedInfo,movementX:n.clientX-e.lastClientX,movementY:n.clientY-e.lastClientY,elapsedMs:n.timeStamp-e.lastTimeStamp},e.lastClientX=n.clientX,e.lastClientY=n.clientY,e.lastTimeStamp=n.timeStamp,Math.abs(t.movementX)<Cl&&Math.abs(t.movementY)<Cl?{movementInfo:null,hasMoved:e.hasMoved}:(e.hasMoved=!0,{movementInfo:t,hasMoved:e.hasMoved})}onPointerDown(n){this.#i();const e={attachedInfo:{},hasMoved:!1,lastClientX:n.clientX,lastClientY:n.clientY,lastTimeStamp:n.timeStamp};this.#e.set(n.pointerId,e),this.target.setPointerCapture(n.pointerId)}onPointerMove(n){const e=this.#r(n).movementInfo;e&&(n.preventDefault(),this.dispatchEvent(new CustomEvent("move",{detail:e})))}onPointerUp(n){const e=this.#r(n),t=this.#e.get(n.pointerId);this.#s(n),this.target.releasePointerCapture(n.pointerId);let i;if(e.hasMoved)i=new CustomEvent("up",{detail:{attachedInfo:t.attachedInfo}});else{const{altKey:r,ctrlKey:s,metaKey:o,shiftKey:a}=n;i=new CustomEvent("press",{detail:{normalizedX:n.offsetX/this.target.offsetWidth*2-1,normalizedY:1-n.offsetY/this.target.offsetHeight*2,rightClick:!!(n.button&2),keys:{altKey:r,ctrlOrMetaKey:s||o,shiftKey:a}}})}this.dispatchEvent(i)}},Er=[];async function $c(n,e,t,i){Er.length===0&&Er.push(to());const r=await Er[0];return r.setSize(n,e),r.render(t,i),r.domElement}async function G0(n,e,t,i,r){if(n===0||e===0)return;Er.length===0&&Er.push(to());const s=await $c(n,e,i,r),o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.drawImage(s,0,0)}async function to(){const n=(await gn).WebGLRenderer,e=new n({antialias:!0,alpha:!0});return e.setPixelRatio(ka()),e}var H0=!0,_a=500,W0=50,q0=.75;function Rl(n){return(Math.exp(1-n)-(1-n))/(1-Math.E)+1}var j0=class{constructor(n,e,t,i){this.startTimestamp=n,this.momentumX=e,this.momentumY=t,this.callback=i,this.scheduler=new dr(this.render.bind(this)),this.scheduler.requestAnimFrame(),this.lastTimestamp=n}render(n){const e=(this.lastTimestamp-this.startTimestamp)/_a,t=Math.min(1,(n-this.startTimestamp)/_a);if(e===0&&t>W0/_a)return;const i=Rl(t)-Rl(e);this.callback(this.momentumX*i*1e3,this.momentumY*i*1e3),t<1&&this.scheduler.requestAnimFrame(),this.lastTimestamp=n}},X0=class{constructor(n,e,t,i){this.model=n,this.mirror=e,this.canvas=t,this.dragTracker=i,this.experimentalInertia=H0,this.onMovementBound=this.onMovement.bind(this),this.experimentalHasBeenMoved=!1,this.dragTracker.addEventListener("move",this.onMove.bind(this)),this.dragTracker.addEventListener("up",this.onUp.bind(this))}temperMovement(n){return Math.sign(n)*Math.log(Math.abs(n*10)+1)/6}onMove(n){var e;(e=n.detail).attachedInfo??(e.attachedInfo={});const{temperedX:t,temperedY:i}=this.onMovement(n.detail.movementX,n.detail.movementY),r=n.detail.attachedInfo;r.lastTemperedX=t*10,r.lastTemperedY=i*10,r.timestamp=n.timeStamp}onMovement(n,e){const t=this.mirror?-1:1,i=Math.min(this.canvas.offsetWidth,this.canvas.offsetHeight),r=this.temperMovement(n/i),s=this.temperMovement(e/i*q0);return this.model.twistySceneModel.orbitCoordinatesRequest.set((async()=>{const o=await this.model.twistySceneModel.orbitCoordinates.get();return{latitude:o.latitude+2*s*Ir*t,longitude:o.longitude-2*r*Ir}})()),{temperedX:r,temperedY:s}}onUp(n){n.preventDefault(),"lastTemperedX"in n.detail.attachedInfo&&"lastTemperedY"in n.detail.attachedInfo&&"timestamp"in n.detail.attachedInfo&&n.timeStamp-n.detail.attachedInfo.timestamp<60&&new j0(n.timeStamp,n.detail.attachedInfo.lastTemperedX,n.detail.attachedInfo.lastTemperedY,this.onMovementBound)}};async function Zc(n,e,t=!1){const i=new(await gn).Spherical(e.distance,(90-(t?-1:1)*e.latitude)/Ir,((t?180:0)+e.longitude)/Ir);i.makeSafe(),n.position.setFromSpherical(i),n.lookAt(0,0,0)}var Il=0,Y0=2,Qc=!1;function $0(){return Il<Y0?(Il++,!1):(Qc=!0,!0)}function Z_(){return Qc}var Ua=class extends Kt{constructor(n,e,t){super(),this.model=n,this.options=t,this.scene=null,this.stats=null,this.rendererIsShared=$0(),this.loadingElement=null,this.#t=new Is,this.#n=0,this.#i=0,this.#r=null,this.#a=null,this.#o=null,this.#u=null,this.#h=null,this.#c=[],this.#d=null,this.#f=new dr(this.render.bind(this)),this.scene=e??null,this.loadingElement=this.addElement(document.createElement("div")),this.loadingElement.classList.add("loading")}async connectedCallback(){this.addCSS(B0),this.addElement((await this.canvasInfo()).canvas),this.#s(),new ResizeObserver(this.#s.bind(this)).observe(this.contentWrapper),this.orbitControls(),this.#e(),this.scheduleRender()}async#e(){(await this.#l()).addEventListener("press",async e=>{await this.model.twistySceneModel.movePressInput.get()==="basic"&&this.dispatchEvent(new CustomEvent("press",{detail:{pressInfo:e.detail,cameraPromise:this.camera()}}))})}#t;async clearCanvas(){if(this.rendererIsShared){const n=await this.canvasInfo();n.context.clearRect(0,0,n.canvas.width,n.canvas.height)}else{const e=(await this.renderer()).getContext();e.clear(e.COLOR_BUFFER_BIT)}}#n;#i;async#s(){const n=await this.#t.queue(this.camera()),e=this.contentWrapper.clientWidth,t=this.contentWrapper.clientHeight;this.#n=e,this.#i=t;const i=0;let r=0,s=0;if(t>e&&(s=t-e,r=-Math.floor(.5*s)),n.aspect=e/t,n.setViewOffset(e,t-s,i,r,e,t),n.updateProjectionMatrix(),this.clearCanvas(),this.rendererIsShared){const o=await this.canvasInfo();o.canvas.width=e*ka(),o.canvas.height=t*ka(),o.canvas.style.width=`${e.toString()}px`,o.canvas.style.height=`${t.toString()}px`}else(await this.renderer()).setSize(e,t,!0);this.scheduleRender()}#r;async renderer(){if(this.rendererIsShared)throw new Error("renderer expected to be shared.");return this.#r??(this.#r=to())}#a;async canvasInfo(){return this.#a??(this.#a=(async()=>{let n;if(this.rendererIsShared)n=this.addElement(document.createElement("canvas"));else{const t=await this.renderer();n=this.addElement(t.domElement)}this.loadingElement?.remove();const e=n.getContext("2d");return{canvas:n,context:e}})())}#o;async#l(){return this.#o??(this.#o=(async()=>{const n=new V0((await this.canvasInfo()).canvas);return this.model?.twistySceneModel.dragInput.addFreshListener(e=>{let t=!1;switch(e){case"auto":{n.start(),t=!0;break}case"none":{n.stop();break}}this.contentWrapper.classList.toggle("drag-input-enabled",t)}),n})())}#u;async camera(){return this.#u??(this.#u=(async()=>{const n=new(await gn).PerspectiveCamera(20,1,.1,20);return n.position.copy(new(await gn).Vector3(2,4,4).multiplyScalar(this.options?.backView?-1:1)),n.lookAt(0,0,0),n})())}#h;async orbitControls(){return this.#h??(this.#h=(async()=>{const n=new X0(this.model,!!this.options?.backView,(await this.canvasInfo()).canvas,await this.#l());return this.model&&this.addListener(this.model.twistySceneModel.orbitCoordinates,async e=>{const t=await this.camera();Zc(t,e,this.options?.backView),this.scheduleRender()}),n})())}addListener(n,e){n.addFreshListener(e),this.#c.push(()=>{n.removeFreshListener(e)})}#c;disconnect(){for(const n of this.#c)n();this.#c=[]}#d;experimentalNextRenderFinishedCallback(n){this.#d=n}async render(){if(!this.scene)throw new Error("Attempted to render without a scene");this.stats?.begin();const[n,e,t]=await Promise.all([this.scene.scene(),this.camera(),this.canvasInfo()]);this.rendererIsShared?G0(this.#n,this.#i,t.canvas,n,e):(await this.renderer()).render(n,e),this.stats?.end(),this.#d?.(),this.#d=null}#f;scheduleRender(){this.#f.requestAnimFrame()}};Tt.define("twisty-3d-vantage",Ua);function Z0(n){return n.endsWith("v")||["x","y","z"].includes(n)?"Rotation":n.startsWith("2")||["M","E","S"].includes(n)?"Inner":"Outer"}var _r;function Q0(){if(_r)return _r;_r={};const n=[...Object.keys(_s.moves),...Object.keys(_s.experimentalDerivedMoves)];for(const e of n)_r[e]=Z0(e);return _r}var Kc={OBTM:{Rotation:{constantFactor:0,amountFactor:0},Outer:{constantFactor:1,amountFactor:0},Inner:{constantFactor:2,amountFactor:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0},Outer:{constantFactor:1,amountFactor:0},Inner:{constantFactor:1,amountFactor:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0},Outer:{constantFactor:0,amountFactor:1},Inner:{constantFactor:0,amountFactor:2}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0},Outer:{constantFactor:0,amountFactor:1},Inner:{constantFactor:0,amountFactor:1}},ETM:{Rotation:{constantFactor:1,amountFactor:0},Outer:{constantFactor:1,amountFactor:0},Inner:{constantFactor:1,amountFactor:0}}};function K0(n,e){const t=Kc[n];if(!t)throw new Error(`Invalid metric for 3x3x3: ${n}`);const i=Q0(),r=e.quantum.toString();if(!(r in i))throw new Error(`Invalid move for 3x3x3 ${n}: ${r}`);const s=i[r],{constantFactor:o,amountFactor:a}=t[s];return o+a*Math.abs(e.amount)}var Ps=class extends hr{constructor(n){super(),this.metric=n}traverseAlg(n){let e=0;for(const t of n.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(n){const e=n.alg;return this.traverseAlg(e)*Math.abs(n.amount)}traverseMove(n){return this.metric(n)}traverseCommutator(n){return 2*(this.traverseAlg(n.A)+this.traverseAlg(n.B))}traverseConjugate(n){return 2*this.traverseAlg(n.A)+this.traverseAlg(n.B)}traversePause(n){return 0}traverseNewline(n){return 0}traverseLineComment(n){return 0}};function Jc(n){return"A"<=n&&n<="Z"}function J0(n){const e=n.family;return Jc(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function ev(n){return 1}function tv(n){const e=n.family;return Jc(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:Math.abs(n.amount)}var nv=hn(Ps,[J0]),iv=hn(Ps,[ev]);hn(Ps,[tv]);function rv(n,e,t){if(n.id==="3x3x3"){if(e in Kc)return hn(Ps,[i=>K0(e,i)])(t)}else switch(e){case"ETM":return iv(t)}throw new Error("Unsupported puzzle or metric.")}var sv=class extends hr{traverseAlg(n){let e=0;for(const t of n.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(n){return this.traverseAlg(n.alg)*Math.abs(n.amount)}traverseMove(n){return 1}traverseCommutator(n){return 2*(this.traverseAlg(n.A)+this.traverseAlg(n.B))}traverseConjugate(n){return 2*this.traverseAlg(n.A)+this.traverseAlg(n.B)}traversePause(n){return 1}traverseNewline(n){return 0}traverseLineComment(n){return 0}},av=hn(sv),eu={id:"2x2x2",fullName:"2\xD72\xD72 Cube",kpuzzle:lt(async()=>new Hn((await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).cube2x2x2JSON)),svg:async()=>(await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).cube2x2x2SVG,llSVG:lt(async()=>(await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).cube2x2x2LLSVG),pg:lt(async()=>eo("2x2x2")),stickeringMask:n=>Cr(eu,n),stickerings:()=>Rs("2x2x2",{use3x3x3Fallbacks:!0})};function mt(n,e,t,i){const r=[];for(const s of n){const o=z.fromString(s),{family:a,amount:c}=o;if(![-1,1].includes(c))throw new Error("Invalid config move");r.push({family:a,direction:c,type:e,from:t,to:i})}return r}var xi={["x axis"]:{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...mt(["R"],0,0,3),...mt(["L'"],1,0,3),...mt(["r","Rw"],2,0,2),...mt(["l'","Lw'"],3,0,2),...mt(["M'"],4,1,2),...mt(["x","Uv","Dv'"],5,0,3)]},["y axis"]:{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...mt(["U"],0,0,3),...mt(["D'"],1,0,3),...mt(["u","Uw"],2,0,2),...mt(["d'","Dw'"],3,0,2),...mt(["E'"],4,1,2),...mt(["y","Uv","Dv'"],5,0,3)]},["z axis"]:{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...mt(["F"],0,0,3),...mt(["B'"],1,0,3),...mt(["f","Fw"],2,0,3),...mt(["b'","Bw'"],3,0,3),...mt(["S"],4,1,2),...mt(["z","Fv","Bv'"],5,0,3)]}},zr={};for(const[n,e]of Object.entries(xi))for(const t of e.moveSourceInfos)zr[t.family]={axis:n,moveSourceInfo:t};var tu={},Pl;for(const n of Object.keys(xi)){const e={};tu[n]=e;for(const t of xi[n].moveSourceInfos)(e[Pl=t.type]??(e[Pl]=[])).push(t)}var nu={};for(const n of Object.keys(xi)){const e=new Map;nu[n]=e;for(const t of xi[n].moveSourceInfos)e.get(t.from)||e.set(t.from,t)}function zl(n,e){const t=tu[n][e]?.[0];if(!t)throw new Error(`Could not find a reference move (axis: ${n}, move source type: ${e})`);return t}var ov=(n,e)=>zr[n.family].axis===zr[e.family].axis;function lv(n,e,t,i){if(e+1===t){const d=nu[n].get(e);if(d)return new z(new cn(d.family),i*d.direction)}const r=xi[n],{sliceDiameter:s}=r;if(e===0&&t===s){const d=zl(n,5);return new z(new cn(d.family),i*d.direction)}const o=e+t>s;o&&([e,t]=[s-t,s-e]);let a=e+1,c=t;const l=a===c;l&&(c=null),a===1&&(a=null),l&&a===1&&(c=null),!l&&c===2&&(c=null);const h=zl(n,l?o?1:0:o?3:2);return new z(new cn(h.family,c,a),i*h.direction)}function cv(n,e=!0){if(n.length===0)return[];const t=zr[n[0].family].axis,i=xi[t],{sliceDiameter:r}=i,s=new Map;let o=null;function a(d,m){let v=(s.get(d)??0)+m;e&&(v=v%4+5%4-1),v===0?s.delete(d):s.set(d,v)}let c=0;for(const d of Array.from(n).reverse()){c++;const{moveSourceInfo:m}=zr[d.family],v=d.amount*m.direction;switch(m.type){case 0:{const p=(d.innerLayer??1)-1;a(p,v),a(p+1,-v);break}case 1:{const p=r-(d.innerLayer??1);a(p,v),a(p+1,-v);break}case 2:{a((d.outerLayer??1)-1,v),a(d.innerLayer??2,-v);break}case 3:{a(r-(d.innerLayer??2),v),a(r-((d.outerLayer??1)-1),-v);break}case 4:{a(m.from,v),a(m.to,-v);break}case 5:{a(0,v),a(r,-v);break}}[0,2].includes(s.size)&&(o={suffixLength:c,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!o)return n;let[l,u]=o.sliceDeltas.keys();l>u&&([l,u]=[u,l]);const h=o.sliceDeltas.get(l);return[...n.slice(0,-o.suffixLength),...h!==0?[lv(t,l,u,h)]:[]]}var uv={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:ov,simplifySameAxisMoves:cv}},no={id:"3x3x3",fullName:"3\xD73\xD73 Cube",inventedBy:["Ern\u0151 Rubik"],inventionYear:1974,kpuzzle:lt(async()=>Wc),svg:lt(async()=>(await tt(()=>import("./puzzles-dynamic-3x3x3-QN5DUJUA.842358fb.js"),[])).cube3x3x3SVG),llSVG:lt(async()=>(await tt(()=>import("./puzzles-dynamic-3x3x3-QN5DUJUA.842358fb.js"),[])).cube3x3x3LLSVG),pg:lt(async()=>eo("3x3x3")),stickeringMask:n=>Cr(no,n),stickerings:()=>Rs("3x3x3"),puzzleSpecificSimplifyOptions:uv},hv={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:lt(async()=>new Hn((await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).clockJSON)),svg:lt(async()=>(await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).clockSVG)};async function dv(n,e){const t=await n.kpuzzle(),i=new Bc(t),r=new Vc(t),s=()=>r.and([r.move("U"),r.not(r.or(r.moves(["F","BL","BR"])))]),o=()=>r.and([r.move("U"),r.not(r.move("F"))]),a=()=>r.or([o(),r.and([r.move("F"),r.not(r.or(r.moves(["U","BL","BR"])))])]),c=()=>r.not(r.or([r.and([r.move("U"),r.move("F")]),r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])])),l=()=>r.not(r.or([r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])]));switch(e){case"full":break;case"experimental-fto-fc":{i.set(r.not(s()),"Ignored");break}case"experimental-fto-f2t":{i.set(r.not(o()),"Ignored"),i.set(s(),"Dim");break}case"experimental-fto-sc":{i.set(r.not(a()),"Ignored"),i.set(o(),"Dim");break}case"experimental-fto-l2c":{i.set(r.not(c()),"Ignored"),i.set(a(),"Dim");break}case"experimental-fto-lbt":{i.set(r.not(l()),"Ignored"),i.set(c(),"Dim");break}case"experimental-fto-l3t":{i.set(l(),"Dim");break}default:console.warn(`Unsupported stickering for ${n.id}: ${e}. Setting all pieces to dim.`),i.set(r.and(r.moves([])),"Dim")}return i.toStickeringMask()}async function fv(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var pv=class extends di{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983}),this.stickerings=fv,this.svg=lt(async()=>(await tt(()=>import("./puzzles-dynamic-unofficial-QXSDLTK5.b15d50d8.js"),[])).ftoSVG)}stickeringMask(n){return dv(this,n)}},mv=new pv;async function gv(n,e){return(await iu()).includes(e)?Cr(n,e):(console.warn(`Unsupported stickering for ${n.id}: ${e}. Setting all pieces to dim.`),Cr(n,"full"))}var vv=Ja(()=>Rs("megaminx"));function iu(){return vv}var xv=class extends di{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981}),this.stickerings=iu,this.llSVG=lt(async()=>(await tt(()=>import("./puzzles-dynamic-megaminx-FUKAIAP5.53f140e2.js"),[])).megaminxLLSVG)}stickeringMask(n){return gv(this,n)}},_v=new xv,wv=class extends di{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]}),this.svg=lt(async()=>(await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).pyraminxSVG)}},yv=new wv,Mv={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\u0161el","Vojtech Kopsk\xFD"],inventionYear:1990,kpuzzle:lt(async()=>new Hn((await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).sq1HyperOrbitJSON)),svg:lt(async()=>(await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).sq1HyperOrbitSVG)},Nl="d f 0.56",Sv={id:"kilominx",fullName:"Kilominx",kpuzzle:lt(()=>Hc(Nl,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>ws(Nl,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:lt(async()=>(await tt(()=>import("./puzzles-dynamic-unofficial-QXSDLTK5.b15d50d8.js"),[])).kilominxSVG)},bv={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:lt(async()=>new Hn((await tt(()=>import("./puzzles-dynamic-unofficial-QXSDLTK5.b15d50d8.js"),[])).rediCubeJSON)),svg:async()=>(await tt(()=>import("./puzzles-dynamic-unofficial-QXSDLTK5.b15d50d8.js"),[])).rediCubeSVG},ru=new Mr({id:"4x4x4",fullName:"4\xD74\xD74 Cube"});ru.llSVG=lt(async()=>(await tt(()=>import("./puzzles-dynamic-4x4x4-DT42HVIY.00923014.js"),[])).cube4x4x4LLSVG);var Tv={id:"melindas2x2x2x2",fullName:"Melinda's 2\xD72\xD72\xD72",inventedBy:["Melinda Green"],kpuzzle:lt(async()=>new Hn((await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).melindas2x2x2x2OrbitJSON)),svg:lt(async()=>(await tt(()=>import("./puzzles-dynamic-side-events-SRPR4BEO.0e68d591.js"),[])).melindas2x2x2x2OrbitSVG)},su={"3x3x3":no,"2x2x2":eu,"4x4x4":ru,"5x5x5":new Mr({id:"5x5x5",fullName:"5\xD75\xD75 Cube"}),"6x6x6":new Mr({id:"6x6x6",fullName:"6\xD76\xD76 Cube"}),"7x7x7":new Mr({id:"7x7x7",fullName:"7\xD77\xD77 Cube"}),"40x40x40":new Mr({id:"40x40x40",fullName:"40\xD740\xD740 Cube"}),clock:hv,megaminx:_v,pyraminx:yv,skewb:new di({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:Mv,fto:mv,gigaminx:new di({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new di({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:Sv,redi_cube:bv,melindas2x2x2x2:Tv};function Ba(n,e){if(n===e)return!0;if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Fl(n,e,t){if(n===e)return!0;if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++)if(!t(n[i],e[i]))return!1;return!0}function au(n,e,t=0){return(n%e+e+t)%e-t}function Ol(n,e,t){return au(n-e,t-e)+e}var Ev=class{constructor(n){this.model=n,this.catchingUp=!1,this.pendingFrame=!1,this.scheduler=new dr(this.animFrame.bind(this)),this.catchUpMs=500,this.lastTimestamp=0}start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}animFrame(n){this.scheduler.requestAnimFrame();const e=(n-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=n,this.model.catchUpMove.set((async()=>{const t=await this.model.catchUpMove.get();if(t.move===null)return t;const i=t.amount+e;return i>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:t.move,amount:i})})())}},Av=class{constructor(n,e){this.delegate=e,this.playing=!1,this.direction=1,this.lastDatestamp=0,this.scheduler=new dr(this.animFrame.bind(this)),this.#t=new Is,this.model=n,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new Ev(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}async onPlayingProp(n){n.playing!==this.playing&&(n.playing?this.play(n):this.pause())}async onCatchUpMoveProp(n){const e=n.move!==null;e!==this.catchUpHelper.catchingUp&&(e?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(n){this.model.timestampRequest.set("start"),this.pause(),n?.flash&&this.delegate.flash()}jumpToEnd(n){this.model.timestampRequest.set("end"),this.pause(),n?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}async play(n){const e=n?.direction??1,t=await this.model.coarseTimelineInfo.get();(n?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(e===1&&t.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),e===-1&&t.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:e,untilBoundary:n?.untilBoundary??"entire-timeline",loop:n?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}#t;async animFrame(n){this.playing&&this.scheduler.requestAnimFrame();const e=this.lastDatestamp,t=await this.#t.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[i,r,s,o,a]=t;if(!i.playing){this.playing=!1;return}let c=a.earliestEnd;(a.currentMoves.length===0||i.untilBoundary==="entire-timeline")&&(c=s.end);let l=a.latestStart;(a.currentMoves.length===0||i.untilBoundary==="entire-timeline")&&(l=s.start);let u=(n-e)*this.direction*o;u=Math.max(u,1),u*=i.direction;let h=r+u,d=null;h>=c?i.loop?h=Ol(h,s.start,s.end):(h===s.end?d="end":h=c,this.playing=!1,this.model.playingInfo.set({playing:!1})):h<=l&&(i.loop?h=Ol(h,s.start,s.end):(h===s.start?d="start":h=l,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=n,this.lastTimestampPromise=Promise.resolve(h),this.model.timestampRequest.set(d??h)}},Lv=class{constructor(n,e){this.model=n,this.animationController=new Av(n,e)}jumpToStart(n){this.animationController.jumpToStart(n)}jumpToEnd(n){this.animationController.jumpToEnd(n)}togglePlay(n){typeof n>"u"&&this.animationController.playPause(),n?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){const n=document.createElement("a");n.href=await this.model.twizzleLink(),n.target="_blank",n.click()}},Dv={"bottom-row":!0,none:!0},Cv=class extends Ze{getDefaultValue(){return"auto"}},ou=new dn(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`),ls="http://www.w3.org/2000/svg",kl="data-copy-id",Ul=0;function Rv(){return Ul+=1,`svg${Ul.toString()}`}var Iv={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},Pv=class{constructor(n,e,t){if(this.kpuzzle=n,this.originalColors={},this.gradients={},!e)throw new Error(`No SVG definition for puzzle type: ${n.name()}`);this.svgID=Rv(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=e;const i=this.wrapperElement.querySelector("svg");if(!i)throw new Error("Could not get SVG element");if(this.svgElement=i,ls!==i.namespaceURI)throw new Error("Unexpected XML namespace");i.style.maxWidth="100%",i.style.maxHeight="100%",this.gradientDefs=document.createElementNS(ls,"defs"),i.insertBefore(this.gradientDefs,i.firstChild);for(const r in n.definition.orbits){const s=n.definition.orbits[r];for(let o=0;o<s.numPieces;o++)for(let a=0;a<s.numOrientations;a++){const c=this.elementID(r,o,a),l=this.elementByID(c);let u=l?.style.fill;t?(()=>{const h=t.orbits;if(!h)return;const d=h[r];if(!d)return;const m=d.pieces[o];if(!m)return;const v=m.facelets[a];if(!v)return;const p=typeof v=="string"?v:v?.mask,f=Iv[p];typeof f=="string"?u=f:f&&(u=f[u])})():u=l?.style.fill,this.originalColors[c]=u,this.gradients[c]=this.newGradient(c,u),this.gradientDefs.appendChild(this.gradients[c]),l?.setAttribute("style",`fill: url(#grad-${this.svgID}-${c})`)}}for(const r of Array.from(i.querySelectorAll(`[${kl}]`))){const s=r.getAttribute(kl);r.setAttribute("style",`fill: url(#grad-${this.svgID}-${s})`)}}drawState(n,e,t){this.draw(n,e,t)}draw(n,e,t){const i=n.experimentalToTransformation(),r=e?.experimentalToTransformation();if(!i)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(const s in i.kpuzzle.definition.orbits){const o=i.kpuzzle.definition.orbits[s],a=i.transformationData[s],c=r?r.transformationData[s]:null;for(let l=0;l<o.numPieces;l++)for(let u=0;u<o.numOrientations;u++){const h=this.elementID(s,l,u),d=this.elementID(s,a.permutation[l],(o.numOrientations-a.orientation[l]+u)%o.numOrientations);let m=!1;if(c){const v=this.elementID(s,c.permutation[l],(o.numOrientations-c.orientation[l]+u)%o.numOrientations);d===v&&(m=!0),t=t||0;const p=100*(1-t*t*(2-t*t));this.gradients[h].children[0].setAttribute("stop-color",this.originalColors[d]),this.gradients[h].children[1].setAttribute("stop-color",this.originalColors[d]),this.gradients[h].children[1].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[h].children[2].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[h].children[3].setAttribute("offset",`${p}%`),this.gradients[h].children[4].setAttribute("offset",`${p}%`),this.gradients[h].children[4].setAttribute("stop-color",this.originalColors[v]),this.gradients[h].children[5].setAttribute("stop-color",this.originalColors[v])}else m=!0;m&&(this.gradients[h].children[0].setAttribute("stop-color",this.originalColors[d]),this.gradients[h].children[1].setAttribute("stop-color",this.originalColors[d]),this.gradients[h].children[1].setAttribute("offset","100%"),this.gradients[h].children[2].setAttribute("offset","100%"),this.gradients[h].children[3].setAttribute("offset","100%"),this.gradients[h].children[4].setAttribute("offset","100%"))}}}newGradient(n,e){const t=document.createElementNS(ls,"radialGradient");t.setAttribute("id",`grad-${this.svgID}-${n}`),t.setAttribute("r","70.7107%");const i=[{offset:0,color:e},{offset:0,color:e},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:e},{offset:100,color:e}];for(const r of i){const s=document.createElementNS(ls,"stop");s.setAttribute("offset",`${r.offset}%`),s.setAttribute("stop-color",r.color),s.setAttribute("stop-opacity","1"),t.appendChild(s)}return t}elementID(n,e,t){return`${n}-l${e}-o${t}`}elementByID(n){return this.wrapperElement.querySelector(`#${n}`)}},zv=new dn(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`),lu=class extends Kt{constructor(n,e,t,i,r){super(),this.model=n,this.kpuzzle=e,this.svgSource=t,this.options=i,this.puzzleLoader=r,this.scheduler=new dr(this.render.bind(this)),this.#e=null,this.#t=new kr,this.addCSS(zv),this.resetSVG(),this.#t.addListener(this.model.puzzleID,s=>{r?.id!==s&&this.disconnect()}),this.#t.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}#e;#t;disconnect(){this.#t.disconnect()}onPositionChange(n){try{if(n.movesInProgress.length>0){const e=n.movesInProgress[0].move;let t=e;n.movesInProgress[0].direction===-1&&(t=e.invert());const i=n.state.applyMove(t);this.svgWrapper.draw(n.state,i,n.movesInProgress[0].fraction)}else this.svgWrapper.draw(n.state),this.#e=n}catch(e){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",this.puzzleLoader?.id,e),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(n){this.resetSVG(n)}resetSVG(n){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new Pv(this.kpuzzle,this.svgSource,n),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}render(){}};Tt.define("twisty-2d-puzzle",lu);var Nv=class{constructor(n,e,t,i){this.model=n,this.schedulable=e,this.puzzleLoader=t,this.effectiveVisualization=i,this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async r=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(r)})}#e=new kr;disconnect(){this.#e.disconnect()}scheduleRender(){}#t=null;async twisty2DPuzzle(){return this.#t??(this.#t=(async()=>{const n=this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new lu(this.model,await this.puzzleLoader.kpuzzle(),await n,{},this.puzzleLoader)})())}},cu=class extends Kt{constructor(n,e){super(),this.model=n,this.effectiveVisualization=e}#e=new kr;disconnect(){this.#e.disconnect()}async connectedCallback(){this.addCSS(ou),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#t;async scene(){return this.#t??(this.#t=(async()=>new(await gn).Scene)())}scheduleRender(){this.#n?.scheduleRender()}#n=null;currentTwisty2DPuzzleWrapper(){return this.#n}async setCurrentTwisty2DPuzzleWrapper(n){const e=this.#n;this.#n=n,e?.disconnect();const t=n.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await t)}async onPuzzleLoader(n){this.#n?.disconnect();const e=new Nv(this.model.twistyPlayerModel,this,n,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(e)}};Tt.define("twisty-2d-scene-wrapper",cu);var zs=class{constructor(n,e,t){this.elem=n,this.prefix=e,this.validSuffixes=t}#e=null;clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(n){if(!this.validSuffixes.includes(n))throw new Error(`Invalid suffix: ${n}`);const e=`${this.prefix}${n}`,t=this.#e!==e;return t&&(this.clearValue(),this.elem.contentWrapper.classList.add(e),this.#e=e),t}},uu=class{constructor(){this.promise=new Promise((n,e)=>{this.#e=n,this.reject=e})}#e;handleNewValue(n){this.#e(n)}},hu=class extends EventTarget{constructor(n,e,t,i){super(),this.model=n,this.schedulable=e,this.puzzleLoader=t,this.visualizationStrategy=i,this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,r=>{this.puzzleLoader.id!==r.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async r=>{try{(await this.twisty3DPuzzle()).onPositionChange(r),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async r=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:r==="auto"?"floating":r}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async r=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:r!=="none"}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async r=>{(await this.twisty3DPuzzle()).setStickeringMask(r),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async r=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:r}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async r=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(r[0].specialBehaviour==="picture",r[1],r[2]),this.scheduleRender())})}#e=new kr;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}#t=null;async twisty3DPuzzle(){return this.#t??(this.#t=(async()=>{const n=Yc();if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){const[e,t,i,r]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get()]);return(await n).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:e,hintSprite:t,experimentalStickeringMask:i,initialHintFaceletsAnimation:r})}else{const[e,t,i,r]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),s=(await n).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,e==="auto"?"floating":e,r,this.puzzleLoader.id==="kilominx");return s.then(o=>o.experimentalUpdateTexture(!0,t??void 0,i??void 0)),s}})())}async raycastMove(n,e){const t=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in t)){console.info("not PG3D! skipping raycast");return}const i=t.experimentalGetControlTargets(),[r,s]=await Promise.all([n,this.model.twistySceneModel.movePressCancelOptions.get()]),o=r.intersectObjects(i);if(o.length>0){const a=t.getClosestMoveToAxis(o[0].point,e);a?this.model.experimentalAddMove(a.move,{cancel:s}):console.info("Skipping move!")}}},Va=class extends Kt{constructor(n){super(),this.model=n}#e=new zs(this,"back-view-",["auto","none","side-by-side","top-right"]);#t=new kr;disconnect(){this.#t.disconnect()}async connectedCallback(){this.addCSS(ou);const n=new Ua(this.model,this);this.addVantage(n),this.model&&(this.#t.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#t.addListener(this.model.backView,this.onBackView.bind(this))),this.scheduleRender()}#n=null;setBackView(n){const e=["side-by-side","top-right"].includes(n),t=this.#n!==null;this.#e.setValue(n),e?t||(this.#n=new Ua(this.model,this,{backView:!0}),this.addVantage(this.#n),this.scheduleRender()):this.#n&&(this.removeVantage(this.#n),this.#n=null)}onBackView(n){this.setBackView(n)}async onPress(n){const e=this.#r;if(!e){console.info("no wrapper; skipping scene wrapper press!");return}const t=(async()=>{const[i,r]=await Promise.all([n.detail.cameraPromise,gn]),s=new r.Raycaster,o=new(await gn).Vector2(n.detail.pressInfo.normalizedX,n.detail.pressInfo.normalizedY);return s.setFromCamera(o,i),s})();e.raycastMove(t,{invert:!n.detail.pressInfo.rightClick,depth:n.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":n.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}#i;async scene(){return this.#i??(this.#i=(async()=>new(await gn).Scene)())}#s=new Set;addVantage(n){n.addEventListener("press",this.onPress.bind(this)),this.#s.add(n),this.contentWrapper.appendChild(n)}removeVantage(n){this.#s.delete(n),n.remove(),n.disconnect(),this.#r?.disconnect()}experimentalVantages(){return this.#s.values()}scheduleRender(){for(const n of this.#s)n.scheduleRender()}#r=null;async setCurrentTwisty3DPuzzleWrapper(n,e){const t=this.#r;try{this.#r=e,t?.disconnect(),n.add(await e.twisty3DPuzzle())}finally{t&&n.remove(await t.twisty3DPuzzle())}this.#a.handleNewValue(e)}#a=new uu;async experimentalTwisty3DPuzzleWrapper(){return this.#r||this.#a.promise}#o=new Is;async onPuzzle(n){if(n[1]==="2D")return;this.#r?.disconnect();const[e,t]=await this.#o.queue(Promise.all([this.scene(),new hu(this.model,this,n[0],n[1])]));this.setCurrentTwisty3DPuzzleWrapper(e,t)}};Tt.define("twisty-3d-scene-wrapper",Va);var Fv=new dn(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`),Ov=new dn(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`),_i=typeof document>"u"?null:document,kv=_i?.fullscreenEnabled||!!_i?.webkitFullscreenEnabled;function Uv(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function Bl(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function Bv(n){return n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen()}var Vv=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],Gv=class extends Ke{derive(n){return{fullscreen:{enabled:kv,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!n.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!n.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(n.coarseTimelineInfo.atStart&&n.coarseTimelineInfo.atEnd),icon:n.coarseTimelineInfo.playing?"pause":"play",title:n.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!n.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!n.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:n.viewerLink==="none"}}}},Vl={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},du=class extends Kt{constructor(n,e,t){super(),this.model=n,this.controller=e,this.defaultFullscreenElement=t,this.buttons=null}connectedCallback(){this.addCSS(Fv);const n={};for(const e in Vl){const t=new fu;n[e]=t,t.htmlButton.addEventListener("click",()=>this.#e(e)),this.addElement(t)}this.buttons=n,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(n){switch(n){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{this.controller?.jumpToStart({flash:!0});break}case"play-step-backwards":{this.controller?.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{this.controller?.togglePlay();break}case"play-step":{this.controller?.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{this.controller?.jumpToEnd({flash:!0});break}case"twizzle-link":{this.controller?.visitTwizzleLink();break}default:throw new Error("Missing command")}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(Bl()===this.defaultFullscreenElement)Uv();else{this.buttons?.fullscreen.setIcon("exit-fullscreen"),Bv(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);const n=()=>{Bl()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon("enter-fullscreen"),window.removeEventListener("fullscreenchange",n))};window.addEventListener("fullscreenchange",n)}}async update(n){for(const e in Vl){const t=this.buttons[e],i=n[e];t.htmlButton.disabled=!i.enabled,t.htmlButton.title=i.title,t.setIcon(i.icon),t.hidden=!!i.hidden}}updateColorScheme(n){for(const e of Object.values(this.buttons??{}))e.updateColorScheme(n)}};Tt.define("twisty-buttons",du);var fu=class extends Kt{constructor(){super(...arguments),this.htmlButton=document.createElement("button"),this.#e=new zs(this,"svg-",Vv)}updateColorScheme(n){this.contentWrapper.classList.toggle("dark-mode",n==="dark")}connectedCallback(){this.addCSS(Ov),this.addElement(this.htmlButton)}#e;setIcon(n){this.#e.setValue(n)}};Tt.define("twisty-button",fu);var Hv=new dn(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);_i?.addEventListener("mousedown",function(n){n.which},!0);_i?.addEventListener("mouseup",function(n){n.which},!0);_i?.addEventListener("mousedown",()=>{},!1);_i?.addEventListener("mousemove",pu,!1);_i?.addEventListener("mouseenter",pu,!1);function pu(n){n.pageY}var mu=class extends Kt{constructor(n,e){super(),this.model=n,this.controller=e}async onDetailedTimelineInfo(n){const e=await this.inputElem();e.min=n.timeRange.start.toString(),e.max=n.timeRange.end.toString(),e.disabled=e.min===e.max,e.value=n.timestamp.toString()}async connectedCallback(){this.addCSS(Hv),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(n){this.contentWrapper.classList.toggle("dark-mode",n==="dark")}#e=null;async inputElem(){return this.#e??(this.#e=(async()=>{const n=document.createElement("input");return n.type="range",n.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),n.addEventListener("input",this.onInput.bind(this)),n.addEventListener("keydown",this.onKeypress.bind(this)),n})())}async onInput(n){const e=await this.inputElem();await this.slowDown(n,e);const t=parseInt(e.value);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(t)}onKeypress(n){switch(n.key){case"ArrowLeft":case"ArrowRight":{this.controller?.animationController.play({direction:n.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),n.preventDefault();break}case" ":{this.controller?.togglePlay(),n.preventDefault();break}}}async slowDown(n,e){}};Tt.define("twisty-scrubber",mu);var Gl=null;async function Hl(n,e){const[{PerspectiveCamera:t,Scene:i},r,s,o,a,c,l]=await Promise.all([gn,await n.puzzleLoader.get(),await n.visualizationStrategy.get(),await n.twistySceneModel.stickeringRequest.get(),await n.twistySceneModel.stickeringMaskRequest.get(),await n.legacyPosition.get(),await n.twistySceneModel.orbitCoordinates.get()]),u=e?.width??2048,h=e?.height??2048,d=u/h,m=Gl??(Gl=await(async()=>new t(20,d,.1,20))()),v=new i,p=new hu(n,{scheduleRender:()=>{}},r,s);v.add(await p.twisty3DPuzzle()),await Zc(m,l);const y=(await $c(u,h,v,m)).toDataURL(),A=await gu(n);return{dataURL:y,download:async T=>{vu(y,T??A)}}}async function gu(n){const[e,t]=await Promise.all([n.puzzleID.get(),n.alg.get()]);return`[${e}]${t.alg.experimentalNumChildAlgNodes()===0?"":` ${t.alg.toString()}`}`}function vu(n,e,t="png"){const i=document.createElement("a");i.href=n,i.download=`${e}.${t}`,i.click()}var Wv=new dn(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`),Wl=class extends Ze{getDefaultValue(){return null}},Ga=class extends Wn{getDefaultValue(){return null}derive(n){return typeof n=="string"?new URL(n,location.href):n}},ar=class{constructor(n){this.warnings=Object.freeze(n?.warnings??[]),this.errors=Object.freeze(n?.errors??[]),Object.freeze(this)}add(n){return new ar({warnings:this.warnings.concat(n?.warnings??[]),errors:this.errors.concat(n?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info("\u{1F60E} No issues!")}};function xu(n){try{const e=De.fromString(n),t=[];return e.toString()!==n&&t.push("Alg is non-canonical!"),{alg:e,issues:new ar({warnings:t})}}catch(e){return{alg:new De,issues:new ar({errors:[`Malformed alg: ${e.toString()}`]})}}}function qv(n,e){return n.alg.isIdentical(e.alg)&&Ba(n.issues.warnings,e.issues.warnings)&&Ba(n.issues.errors,e.issues.errors)}var ql=class extends Wn{getDefaultValue(){return{alg:new De,issues:new ar}}canReuseValue(n,e){return qv(n,e)}async derive(n){return typeof n=="string"?xu(n):{alg:n,issues:new ar}}},jv=class extends Ke{derive(n){return n.kpuzzle.algToTransformation(n.setupAlg.alg)}},Xv=class extends Ke{derive(n){if(n.setupTransformation)return n.setupTransformation;switch(n.setupAnchor){case"start":return n.setupAlgTransformation;case"end":{const t=n.indexer.transformationAtIndex(n.indexer.numAnimatedLeaves()).invert();return n.setupAlgTransformation.applyTransformation(t)}default:throw new Error("Unimplemented!")}}},Yv=class extends Ze{getDefaultValue(){return{move:null,amount:0}}canReuseValue(n,e){return n.move===e.move&&n.amount===e.amount}},$v=class extends Ke{derive(n){return{stateIndex:n.currentMoveInfo.stateIndex,movesFinishing:n.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:n.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(n,e){return n.stateIndex===e.stateIndex&&Fl(n.movesFinishing,e.movesFinishing,(t,i)=>t.isIdentical(i))&&Fl(n.movesFinished,e.movesFinished,(t,i)=>t.isIdentical(i))}},Zv=class extends Ke{derive(n){function e(t){return n.detailedTimelineInfo.atEnd&&n.catchUpMove.move!==null&&t.currentMoves.push({move:n.catchUpMove.move,direction:-1,fraction:1-n.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),t}if(n.indexer.currentMoveInfo)return e(n.indexer.currentMoveInfo(n.detailedTimelineInfo.timestamp));{const t=n.indexer.timestampToIndex(n.detailedTimelineInfo.timestamp),i={stateIndex:t,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(n.indexer.numAnimatedLeaves()>0){const r=n.indexer.getAnimLeaf(t)?.as(z);if(!r)return e(i);const s=n.indexer.indexToMoveStartTimestamp(t),o=n.indexer.moveDuration(t),a=o?(n.detailedTimelineInfo.timestamp-s)/o:0,c=s+o,l={move:r,direction:1,fraction:a,startTimestamp:s,endTimestamp:c};a===0?i.movesStarting.push(l):a===1?i.movesFinishing.push(l):(i.currentMoves.push(l),i.latestStart=Math.max(i.latestStart,s),i.earliestEnd=Math.min(i.earliestEnd,c))}return e(i)}}},Qv=class extends Ke{derive(n){let e=n.indexer.transformationAtIndex(n.currentLeavesSimplified.stateIndex);e=n.anchoredStart.applyTransformation(e);for(const t of n.currentLeavesSimplified.movesFinishing)e=e.applyMove(t);for(const t of n.currentLeavesSimplified.movesFinished)e=e.applyMove(t);return e.toKState()}};function oi(n){switch(Math.abs(n)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var _u=class extends hr{constructor(n=oi){super(),this.durationForAmount=n}traverseAlg(n){let e=0;for(const t of n.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(n){return n.amount*this.traverseAlg(n.alg)}traverseMove(n){return this.durationForAmount(n.amount)}traverseCommutator(n){return 2*(this.traverseAlg(n.A)+this.traverseAlg(n.B))}traverseConjugate(n){return 2*this.traverseAlg(n.A)+this.traverseAlg(n.B)}traversePause(n){return this.durationForAmount(1)}traverseNewline(n){return this.durationForAmount(1)}traverseLineComment(n){return this.durationForAmount(0)}},Kv=class{constructor(n,e){this.kpuzzle=n,this.durationFn=new _u(oi),this.moves=new De(e.experimentalExpand())}getAnimLeaf(n){return Array.from(this.moves.childAlgNodes())[n]}indexToMoveStartTimestamp(n){const e=new De(Array.from(this.moves.childAlgNodes()).slice(0,n));return this.durationFn.traverseAlg(e)}timestampToIndex(n){let e=0,t;for(t=0;t<this.numAnimatedLeaves();t++)if(e+=this.durationFn.traverseMove(this.getAnimLeaf(t)),e>=n)return t;return t}stateAtIndex(n){return this.kpuzzle.startState().applyTransformation(this.transformationAtIndex(n))}transformationAtIndex(n){let e=this.kpuzzle.identityTransformation();for(const t of Array.from(this.moves.childAlgNodes()).slice(0,n))e=e.applyMove(t);return e}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return av(this.moves)}moveDuration(n){return this.durationFn.traverseMove(this.getAnimLeaf(n))}},jl={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};function Jv(n,e){return jl[n.family[0].toLowerCase()]===jl[e.family[0].toLowerCase()]}var ex=class extends hr{traverseAlg(n){const e=[];for(const t of n.childAlgNodes())e.push(this.traverseAlgNode(t));return Array.prototype.concat(...e)}traverseGroupingOnce(n){if(n.experimentalIsEmpty())return[];for(const r of n.childAlgNodes())if(!r.is(z))return this.traverseAlg(n);const e=Array.from(n.childAlgNodes());let t=oi(e[0].amount);for(let r=0;r<e.length-1;r++){for(let s=1;s<e.length;s++)if(!Jv(e[r],e[s]))return this.traverseAlg(n);t=Math.max(t,oi(e[r].amount))}const i=e.map(r=>({animLeafAlgNode:r,msUntilNext:0,duration:t}));return i[i.length-1].msUntilNext=t,i}traverseGrouping(n){const e=[],t=n.amount>0?n.alg:n.alg.invert();for(let i=0;i<Math.abs(n.amount);i++)e.push(this.traverseGroupingOnce(t));return Array.prototype.concat(...e)}traverseMove(n){const e=oi(n.amount);return[{animLeafAlgNode:n,msUntilNext:e,duration:e}]}traverseCommutator(n){const e=[],t=[n.A,n.B,n.A.invert(),n.B.invert()];for(const i of t)e.push(this.traverseGroupingOnce(i));return Array.prototype.concat(...e)}traverseConjugate(n){const e=[],t=[n.A,n.B,n.A.invert()];for(const i of t)e.push(this.traverseGroupingOnce(i));return Array.prototype.concat(...e)}traversePause(n){if(n.experimentalNISSGrouping)return[];const e=oi(1);return[{animLeafAlgNode:n,msUntilNext:e,duration:e}]}traverseNewline(n){return[]}traverseLineComment(n){return[]}},tx=hn(ex);function nx(n){let e=0;return tx(n).map(i=>{const r={animLeaf:i.animLeafAlgNode,start:e,end:e+i.duration};return e+=i.msUntilNext,r})}var ix={"y' y' U' E D R2 r2 F2 B2 U E D' R2 L2' z2 S2 U U D D S2 F2' B2":[{animLeaf:new z("y",-1),start:0,end:1e3},{animLeaf:new z("y",-1),start:1e3,end:2e3},{animLeaf:new z("U",-1),start:1e3,end:1600},{animLeaf:new z("E",1),start:1200,end:1800},{animLeaf:new z("D"),start:1400,end:2e3},{animLeaf:new z("R",2),start:2e3,end:3500},{animLeaf:new z("r",2),start:2e3,end:3500},{animLeaf:new z("F",2),start:3500,end:4200},{animLeaf:new z("B",2),start:3800,end:4500},{animLeaf:new z("U",1),start:4500,end:5500},{animLeaf:new z("E",1),start:4500,end:5500},{animLeaf:new z("D",-1),start:4500,end:5500},{animLeaf:new z("R",2),start:5500,end:6500},{animLeaf:new z("L",-2),start:5500,end:6500},{animLeaf:new z("z",2),start:5500,end:6500},{animLeaf:new z("S",2),start:6500,end:7500},{animLeaf:new z("U"),start:7500,end:8e3},{animLeaf:new z("D"),start:7750,end:8250},{animLeaf:new z("U"),start:8e3,end:8500},{animLeaf:new z("D"),start:8250,end:8750},{animLeaf:new z("S",2),start:8750,end:9250},{animLeaf:new z("F",-2),start:8750,end:1e4},{animLeaf:new z("B",2),start:8750,end:1e4}],"M' R' U' D' M R":[{animLeaf:new z("M",-1),start:0,end:1e3},{animLeaf:new z("R",-1),start:0,end:1e3},{animLeaf:new z("U",-1),start:1e3,end:2e3},{animLeaf:new z("D",-1),start:1e3,end:2e3},{animLeaf:new z("M"),start:2e3,end:3e3},{animLeaf:new z("R"),start:2e3,end:3e3}],"U' E' r E r2' E r U E":[{animLeaf:new z("U",-1),start:0,end:1e3},{animLeaf:new z("E",-1),start:0,end:1e3},{animLeaf:new z("r"),start:1e3,end:2500},{animLeaf:new z("E"),start:2500,end:3500},{animLeaf:new z("r",-2),start:3500,end:5e3},{animLeaf:new z("E"),start:5e3,end:6e3},{animLeaf:new z("r"),start:6e3,end:7e3},{animLeaf:new z("U"),start:7e3,end:8e3},{animLeaf:new z("E"),start:7e3,end:8e3}]},Xl=class{constructor(n,e){this.kpuzzle=n,this.animLeaves=ix[e.toString()]??nx(e)}getAnimLeaf(n){return this.animLeaves[Math.min(n,this.animLeaves.length-1)]?.animLeaf??null}getAnimLeafWithRange(n){return this.animLeaves[Math.min(n,this.animLeaves.length-1)]}indexToMoveStartTimestamp(n){let e=0;return this.animLeaves.length>0&&(e=this.animLeaves[Math.min(n,this.animLeaves.length-1)].start),e}timestampToIndex(n){let e=0;for(e=0;e<this.animLeaves.length;e++)if(this.animLeaves[e].start>=n)return Math.max(0,e-1);return Math.max(0,e-1)}timestampToPosition(n,e){const t=this.currentMoveInfo(n);let i=e??this.kpuzzle.identityTransformation().toKState();for(const r of this.animLeaves.slice(0,t.stateIndex)){const s=r.animLeaf.as(z);s!==null&&(i=i.applyMove(s))}return{state:i,movesInProgress:t.currentMoves}}currentMoveInfo(n){let e=1/0;for(const l of this.animLeaves)if(l.start<=n&&l.end>=n)e=Math.min(e,l.start);else if(l.start>n)break;const t=[],i=[],r=[],s=[];let o=-1/0,a=1/0,c=0;for(const l of this.animLeaves)if(l.end<=e)c++;else{if(l.start>n)break;{const u=l.animLeaf.as(z);if(u!==null){let h=(n-l.start)/(l.end-l.start),d=!1;h>1&&(h=1,d=!0);const m={move:u,direction:1,fraction:h,startTimestamp:l.start,endTimestamp:l.end};switch(h){case 0:{i.push(m);break}case 1:{d?s.push(m):r.push(m);break}default:t.push(m),o=Math.max(o,l.start),a=Math.min(a,l.end)}}}}return{stateIndex:c,currentMoves:t,latestStart:o,earliestEnd:a,movesStarting:i,movesFinishing:r,movesFinished:s}}stateAtIndex(n,e){let t=e??this.kpuzzle.startState();for(let i=0;i<this.animLeaves.length&&i<n;i++){const s=this.animLeaves[i].animLeaf.as(z);s!==null&&(t=t.applyMove(s))}return t}transformationAtIndex(n){let e=this.kpuzzle.identityTransformation();for(const t of this.animLeaves.slice(0,n)){const i=t.animLeaf.as(z);i!==null&&(e=e.applyMove(i))}return e}algDuration(){let n=0;for(const e of this.animLeaves)n=Math.max(n,e.end);return n}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(n){const e=this.getAnimLeafWithRange(n);return e.end-e.start}},Jn=class{constructor(n,e,t,i,r=[]){this.moveCount=n,this.duration=e,this.forward=t,this.backward=i,this.children=r}},rx=class extends hr{constructor(n){super(),this.kpuzzle=n,this.durationFn=new _u(oi),this.cache={},this.identity=n.identityTransformation(),this.dummyLeaf=new Jn(0,0,this.identity,this.identity,[])}traverseAlg(n){let e=0,t=0,i=this.identity;const r=[];for(const s of n.childAlgNodes()){const o=this.traverseAlgNode(s);e+=o.moveCount,t+=o.duration,i===this.identity?i=o.forward:i=i.applyTransformation(o.forward),r.push(o)}return new Jn(e,t,i,i.invert(),r)}traverseGrouping(n){const e=this.traverseAlg(n.alg);return this.mult(e,n.amount,[e])}traverseMove(n){const e=n.toString();let t=this.cache[e];if(t)return t;const i=this.kpuzzle.moveToTransformation(n);return t=new Jn(1,this.durationFn.traverseAlgNode(n),i,i.invert()),this.cache[e]=t,t}traverseCommutator(n){const e=this.traverseAlg(n.A),t=this.traverseAlg(n.B),i=e.forward.applyTransformation(t.forward),r=e.backward.applyTransformation(t.backward),s=i.applyTransformation(r),o=new Jn(2*(e.moveCount+t.moveCount),2*(e.duration+t.duration),s,s.invert(),[e,t]);return this.mult(o,1,[o,e,t])}traverseConjugate(n){const e=this.traverseAlg(n.A),t=this.traverseAlg(n.B),r=e.forward.applyTransformation(t.forward).applyTransformation(e.backward),s=new Jn(2*e.moveCount+t.moveCount,2*e.duration+t.duration,r,r.invert(),[e,t]);return this.mult(s,1,[s,e,t])}traversePause(n){return n.experimentalNISSGrouping?this.dummyLeaf:new Jn(1,this.durationFn.traverseAlgNode(n),this.identity,this.identity)}traverseNewline(n){return this.dummyLeaf}traverseLineComment(n){return this.dummyLeaf}mult(n,e,t){const i=Math.abs(e),r=n.forward.selfMultiply(e);return new Jn(n.moveCount*i,n.duration*i,r,r.invert(),t)}},gt=class{constructor(n,e){this.apd=n,this.back=e}},sx=class extends ur{constructor(n,e,t){super(),this.kpuzzle=n,this.algOrAlgNode=e,this.apd=t,this.i=-1,this.dur=-1,this.goali=-1,this.goaldur=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new gt(this.apd,!1)}moveByIndex(n){return this.i>=0&&this.i===n?this.move!==void 0:this.dosearch(n,1/0)}moveByDuration(n){return this.dur>=0&&this.dur<n&&this.dur+this.moveDuration>=n?this.move!==void 0:this.dosearch(1/0,n)}dosearch(n,e){return this.goali=n,this.goaldur=e,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(De)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(n,e){if(!this.firstcheck(e))return!1;let t=e.back?n.experimentalNumChildAlgNodes()-1:0;for(const i of Jg(n.childAlgNodes(),e.back?-1:1)){if(this.traverseAlgNode(i,new gt(e.apd.children[t],e.back)))return!0;t+=e.back?-1:1}return!1}traverseGrouping(n,e){if(!this.firstcheck(e))return!1;const t=this.domult(e,n.amount);return this.traverseAlg(n.alg,new gt(e.apd.children[0],t))}traverseMove(n,e){return this.firstcheck(e)?(this.move=n,this.moveDuration=e.apd.duration,this.back=e.back,!0):!1}traverseCommutator(n,e){if(!this.firstcheck(e))return!1;const t=this.domult(e,1);return t?this.traverseAlg(n.B,new gt(e.apd.children[2],!t))||this.traverseAlg(n.A,new gt(e.apd.children[1],!t))||this.traverseAlg(n.B,new gt(e.apd.children[2],t))||this.traverseAlg(n.A,new gt(e.apd.children[1],t)):this.traverseAlg(n.A,new gt(e.apd.children[1],t))||this.traverseAlg(n.B,new gt(e.apd.children[2],t))||this.traverseAlg(n.A,new gt(e.apd.children[1],!t))||this.traverseAlg(n.B,new gt(e.apd.children[2],!t))}traverseConjugate(n,e){if(!this.firstcheck(e))return!1;const t=this.domult(e,1);return t?this.traverseAlg(n.A,new gt(e.apd.children[1],!t))||this.traverseAlg(n.B,new gt(e.apd.children[2],t))||this.traverseAlg(n.A,new gt(e.apd.children[1],t)):this.traverseAlg(n.A,new gt(e.apd.children[1],t))||this.traverseAlg(n.B,new gt(e.apd.children[2],t))||this.traverseAlg(n.A,new gt(e.apd.children[1],!t))}traversePause(n,e){return this.firstcheck(e)?(this.move=n,this.moveDuration=e.apd.duration,this.back=e.back,!0):!1}traverseNewline(n,e){return!1}traverseLineComment(n,e){return!1}firstcheck(n){return n.apd.moveCount+this.i<=this.goali&&n.apd.duration+this.dur<this.goaldur?this.keepgoing(n):!0}domult(n,e){let t=n.back;if(e===0)return t;e<0&&(t=!t,e=-e);const i=n.apd.children[0],r=Math.min(Math.floor((this.goali-this.i)/i.moveCount),Math.ceil((this.goaldur-this.dur)/i.duration-1));return r>0&&this.keepgoing(new gt(i,t),r),t}keepgoing(n,e=1){return this.i+=e*n.apd.moveCount,this.dur+=e*n.apd.duration,e!==1?n.back?this.st=this.st.applyTransformation(n.apd.backward.selfMultiply(e)):this.st=this.st.applyTransformation(n.apd.forward.selfMultiply(e)):n.back?this.st=this.st.applyTransformation(n.apd.backward):this.st=this.st.applyTransformation(n.apd.forward),!1}},ax=16;function ox(n,e){const t=new za,i=new za;for(const r of n.childAlgNodes())i.push(r),i.experimentalNumAlgNodes()>=e&&(t.push(new yt(i.toAlg())),i.reset());return t.push(new yt(i.toAlg())),t.toAlg()}var lx=class extends hr{traverseAlg(n){const e=n.experimentalNumChildAlgNodes();return e<ax?n:ox(n,Math.ceil(Math.sqrt(e)))}traverseGrouping(n){return new yt(this.traverseAlg(n.alg),n.amount)}traverseMove(n){return n}traverseCommutator(n){return new Rt(this.traverseAlg(n.A),this.traverseAlg(n.B))}traverseConjugate(n){return new Rt(this.traverseAlg(n.A),this.traverseAlg(n.B))}traversePause(n){return n}traverseNewline(n){return n}traverseLineComment(n){return n}},cx=hn(lx),Yl=class{constructor(n,e){this.kpuzzle=n;const t=new rx(this.kpuzzle),i=cx(e);this.decoration=t.traverseAlg(i),this.walker=new sx(this.kpuzzle,i,this.decoration)}getAnimLeaf(n){if(this.walker.moveByIndex(n)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");const e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(n){if(this.walker.moveByIndex(n)||this.walker.i===n)return this.walker.dur;throw new Error(`Out of algorithm: index ${n}`)}indexToMovesInProgress(n){if(this.walker.moveByIndex(n)||this.walker.i===n)return this.walker.dur;throw new Error(`Out of algorithm: index ${n}`)}stateAtIndex(n,e){return this.walker.moveByIndex(n),(e??this.kpuzzle.startState()).applyTransformation(this.walker.st)}transformationAtIndex(n){return this.walker.moveByIndex(n),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(n){return this.walker.moveByDuration(n),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(n){return this.walker.moveByIndex(n),this.walker.moveDuration}},ux=class extends Ke{derive(n){switch(n.indexerConstructorRequest){case"auto":return nv(n.alg.alg)<100&&n.puzzle==="3x3x3"&&n.visualizationStrategy==="Cube3D"?Xl:Yl;case"tree":return Yl;case"simple":return Kv;case"simultaneous":return Xl;default:throw new Error("Invalid indexer request!")}}},hx=class extends Ze{getDefaultValue(){return"auto"}},dx=class extends Ke{derive(n){return new n.indexerConstructor(n.kpuzzle,n.algWithIssues.alg)}},fx=class extends Ke{derive(n){return{state:n.state,movesInProgress:n.currentMoveInfo.currentMoves}}},px=!0,$l=class extends Ke{async derive(n){try{return px&&n.kpuzzle.algToTransformation(n.algWithIssues.alg),n.algWithIssues}catch(e){return{alg:new De,issues:new ar({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},mx=class extends Ze{getDefaultValue(){return"start"}},gx=class extends Ze{getDefaultValue(){return null}},vx=class extends Ke{async derive(n){return n.puzzleLoader.kpuzzle()}},xx=class extends Ze{getDefaultValue(){return Rr}},_x=class extends Ke{async derive(n){return n.puzzleLoader.id}},wx=class extends Ze{getDefaultValue(){return Rr}},yx=class extends Ke{derive(n){if(n.puzzleIDRequest&&n.puzzleIDRequest!==Rr){const e=su[n.puzzleIDRequest];return e||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${n.puzzleIDRequest}`]}),e}return n.puzzleDescriptionRequest&&n.puzzleDescriptionRequest!==Rr?I0(n.puzzleDescriptionRequest):no}},Mx=class extends Ke{derive(n){return{playing:n.playingInfo.playing,atStart:n.detailedTimelineInfo.atStart,atEnd:n.detailedTimelineInfo.atEnd}}canReuseValue(n,e){return n.playing===e.playing&&n.atStart===e.atStart&&n.atEnd===e.atEnd}},Sx=class extends Ke{derive(n){let e=this.#e(n),t=!1,i=!1;return e>=n.timeRange.end&&(i=!0,e=Math.min(n.timeRange.end,e)),e<=n.timeRange.start&&(t=!0,e=Math.max(n.timeRange.start,e)),{timestamp:e,timeRange:n.timeRange,atStart:t,atEnd:i}}#e(n){switch(n.timestampRequest){case"auto":return n.setupAnchor==="start"&&n.setupAlg.alg.experimentalIsEmpty()?n.timeRange.end:n.timeRange.start;case"start":return n.timeRange.start;case"end":return n.timeRange.end;case"anchor":return n.setupAnchor==="start"?n.timeRange.start:n.timeRange.end;case"opposite-anchor":return n.setupAnchor==="start"?n.timeRange.end:n.timeRange.start;default:return n.timestampRequest}}canReuseValue(n,e){return n.timestamp===e.timestamp&&n.timeRange.start===e.timeRange.start&&n.timeRange.end===e.timeRange.end&&n.atStart===e.atStart&&n.atEnd===e.atEnd}},bx=class extends Wn{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(n,e){const t=await e,i=Object.assign({},t);return Object.assign(i,n),i}canReuseValue(n,e){return n.direction===e.direction&&n.playing===e.playing&&n.untilBoundary===e.untilBoundary&&n.loop===e.loop}},Tx=class extends Wn{getDefaultValue(){return 1}derive(n){return n<0?1:n}},Ex={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},Ax=class extends Ze{getDefaultValue(){return"auto"}set(n){const e=this.get();super.set((async()=>this.validInput(await n)?n:e)())}validInput(n){return!!(typeof n=="number"||Ex[n])}},Lx=class extends Ze{getDefaultValue(){return"auto"}},Dx=class extends Ke{derive(n){return{start:0,end:n.indexer.algDuration()}}},Cx=class extends Ze{getDefaultValue(){return"auto"}},Rx=class extends Ze{getDefaultValue(){return"auto"}},Ix=class extends Ke{derive(n){switch(n.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":return"2D";case"3x3x3":switch(n.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return n.visualizationRequest}default:switch(n.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":return["2x2x2","4x4x4","megaminx"].includes(n.puzzleID)?"experimental-2D-LL":"2D";default:return n.visualizationRequest}}}},Px=class extends Ze{getDefaultValue(){return"auto"}},zx=class extends Ze{getDefaultValue(){return"auto"}},Nx=class extends Ze{getDefaultValue(){return"auto"}},Zl=null;async function Fx(){return Zl??(Zl=new(await gn).TextureLoader)}var Ql=class extends Ke{async derive(n){const{spriteURL:e}=n;return e===null?null:new Promise(async(t,i)=>{const r=()=>{console.warn("Could not load sprite:",e.toString()),t(null)};try{(await Fx()).load(e.toString(),t,r,r)}catch{r()}})}},Ox={facelets:["regular","regular","regular","regular","regular"]};async function kx(n){const{definition:e}=await n.kpuzzle(),t={orbits:{}};for(const[i,r]of Object.entries(e.orbits))t.orbits[i]={pieces:new Array(r.numPieces).fill(Ox)};return t}var Ux=class extends Ke{getDefaultValue(){return{orbits:{}}}async derive(n){return n.stickeringMaskRequest?n.stickeringMaskRequest:n.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:n.puzzleLoader.stickeringMask?.(n.stickeringRequest??"full")??kx(n.puzzleLoader)}},Bx={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation","@":"Regular"};function Vx(n){const e={orbits:{}},t=n.split(",");for(const i of t){const[r,s,...o]=i.split(":");if(o.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${i}\``);const a=[];e.orbits[r]={pieces:a};for(const c of s){const l=Bx[c];a.push(Uc(l))}}return e}var Gx=class extends Wn{getDefaultValue(){return null}derive(n){return n===null?null:typeof n=="string"?Vx(n):n}},Hx=class extends Ze{getDefaultValue(){return null}},Wx=class extends Ze{getDefaultValue(){return"auto"}},qx=class extends Ze{getDefaultValue(){return{}}},jx=class extends Ze{getDefaultValue(){return"auto"}},Xx=class extends Ze{getDefaultValue(){return"auto"}},Yx=class extends Ke{derive(n){return n.colorSchemeRequest==="dark"?"dark":"light"}},$x=class extends Ze{getDefaultValue(){return"auto"}},Zx=class extends Ze{getDefaultValue(){return null}},Qx=35,Kx=class extends Ze{getDefaultValue(){return Qx}};function wu(n,e){return n.latitude===e.latitude&&n.longitude===e.longitude&&n.distance===e.distance}var Jx=class extends Wn{getDefaultValue(){return"auto"}canReuseValue(n,e){return n===e||wu(n,e)}async derive(n,e){if(n==="auto")return"auto";let t=await e;t==="auto"&&(t={});const i=Object.assign({},t);return Object.assign(i,n),typeof i.latitude<"u"&&(i.latitude=Math.min(Math.max(i.latitude,-90),90)),typeof i.longitude<"u"&&(i.longitude=au(i.longitude,360,180)),i}},e_=class extends Ke{canReuseValue(n,e){return wu(n,e)}async derive(n){if(n.orbitCoordinatesRequest==="auto")return Jl(n.puzzleID,n.strategy);const e=Object.assign(Object.assign({},Jl(n.puzzleID,n.strategy),n.orbitCoordinatesRequest));if(Math.abs(e.latitude)<=n.latitudeLimit)return e;{const{latitude:t,longitude:i,distance:r}=e;return{latitude:n.latitudeLimit*Math.sign(t),longitude:i,distance:r}}}},t_={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},n_={latitude:35,longitude:30,distance:6},Kl={latitude:35,longitude:30,distance:6.25},i_={latitude:Math.atan(1/2)*Ir,longitude:0,distance:6.7},r_={latitude:26.56505117707799,longitude:0,distance:6};function Jl(n,e){if(n[1]==="x")return e==="Cube3D"?n_:Kl;switch(n){case"megaminx":case"gigaminx":return i_;case"pyraminx":case"master_tetraminx":return r_;case"skewb":return Kl;default:return t_}}var s_=class{constructor(n){this.twistyPlayerModel=n,this.background=new Xx,this.colorSchemeRequest=new $x,this.dragInput=new Wx,this.foundationDisplay=new zx,this.foundationStickerSpriteURL=new Ga,this.fullscreenElement=new Zx,this.hintFacelet=new F0,this.hintStickerSpriteURL=new Ga,this.initialHintFaceletsAnimation=new Nx,this.latitudeLimit=new Kx,this.movePressInput=new jx,this.movePressCancelOptions=new qx,this.orbitCoordinatesRequest=new Jx,this.stickeringMaskRequest=new Gx,this.stickeringRequest=new Hx,this.faceletScale=new Px,this.colorScheme=new Yx({colorSchemeRequest:this.colorSchemeRequest}),this.foundationStickerSprite=new Ql({spriteURL:this.foundationStickerSpriteURL}),this.hintStickerSprite=new Ql({spriteURL:this.hintStickerSpriteURL}),this.orbitCoordinates=new e_({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:n.puzzleID,strategy:n.visualizationStrategy}),this.stickeringMask=new Ux({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:n.puzzleLoader})}},a_={errors:[]},o_=class extends Ze{getDefaultValue(){return a_}reset(){this.set(this.getDefaultValue())}canReuseValue(n,e){return Ba(n.errors,e.errors)}},l_=class{constructor(){this.userVisibleErrorTracker=new o_,this.alg=new ql,this.backView=new Lx,this.controlPanel=new Cv,this.catchUpMove=new Yv,this.indexerConstructorRequest=new hx,this.playingInfo=new bx,this.puzzleDescriptionRequest=new xx,this.puzzleIDRequest=new wx,this.setupAnchor=new mx,this.setupAlg=new ql,this.setupTransformation=new gx,this.tempoScale=new Tx,this.timestampRequest=new Ax,this.viewerLink=new Cx,this.visualizationFormat=new Rx,this.title=new Wl,this.videoURL=new Ga,this.competitionID=new Wl,this.puzzleLoader=new yx({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker),this.kpuzzle=new vx({puzzleLoader:this.puzzleLoader}),this.puzzleID=new _x({puzzleLoader:this.puzzleLoader}),this.puzzleAlg=new $l({algWithIssues:this.alg,kpuzzle:this.kpuzzle}),this.puzzleSetupAlg=new $l({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle}),this.visualizationStrategy=new Ix({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID}),this.indexerConstructor=new ux({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest}),this.setupAlgTransformation=new jv({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle}),this.indexer=new dx({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle}),this.anchorTransformation=new Xv({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer}),this.timeRange=new Dx({indexer:this.indexer}),this.detailedTimelineInfo=new Sx({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg}),this.coarseTimelineInfo=new Mx({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo}),this.currentMoveInfo=new Zv({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove}),this.buttonAppearance=new Gv({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink}),this.currentLeavesSimplified=new $v({currentMoveInfo:this.currentMoveInfo}),this.currentState=new Qv({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer}),this.legacyPosition=new fx({currentMoveInfo:this.currentMoveInfo,state:this.currentState}),this.twistySceneModel=new s_(this)}async twizzleLink(){const[n,e,t,i,r,s,o,a]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),c=n==="experimental-twizzle-explorer",l=new URL(`https://alpha.twizzle.net/${c?"explore":"edit"}/`);return i.alg.experimentalIsEmpty()||l.searchParams.set("alg",i.alg.toString()),r.alg.experimentalIsEmpty()||l.searchParams.set("setup-alg",r.alg.toString()),s!=="start"&&l.searchParams.set("setup-anchor",s),o!=="full"&&o!==null&&l.searchParams.set("experimental-stickering",o),c&&t!==Rr?l.searchParams.set("puzzle-description",t):e!=="3x3x3"&&l.searchParams.set("puzzle",e),a&&l.searchParams.set("title",a),l.toString()}experimentalAddAlgLeaf(n,e){const t=n.as(z);t?this.experimentalAddMove(t,e):this.alg.set((async()=>{const r=(await this.alg.get()).alg.concat(new De([n]));return this.timestampRequest.set("end"),r})())}experimentalAddMove(n,e){const t=typeof n=="string"?new z(n):n;this.alg.set((async()=>{const[{alg:i},r]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),s=Oc(i,t,{...e,...await C0(r)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:t,amount:0}),s})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{const n=(await this.alg.get()).alg,e=Array.from(n.childAlgNodes()),[t]=e.splice(-1);if(!t)return n;this.timestampRequest.set("end");const i=t.as(z);return i&&this.catchUpMove.set({move:i.invert(),amount:0}),new De(e)})())}};function je(n){return new Error(`Cannot get \`.${n}\` directly from a \`TwistyPlayer\`.`)}var c_=class extends Kt{constructor(){super(...arguments),this.experimentalModel=new l_,this.experimentalGet=new u_(this.experimentalModel)}set alg(n){this.experimentalModel.alg.set(n)}get alg(){throw je("alg")}set experimentalSetupAlg(n){this.experimentalModel.setupAlg.set(n)}get experimentalSetupAlg(){throw je("setup")}set experimentalSetupAnchor(n){this.experimentalModel.setupAnchor.set(n)}get experimentalSetupAnchor(){throw je("anchor")}set puzzle(n){this.experimentalModel.puzzleIDRequest.set(n)}get puzzle(){throw je("puzzle")}set experimentalPuzzleDescription(n){this.experimentalModel.puzzleDescriptionRequest.set(n)}get experimentalPuzzleDescription(){throw je("experimentalPuzzleDescription")}set timestamp(n){this.experimentalModel.timestampRequest.set(n)}get timestamp(){throw je("timestamp")}set hintFacelets(n){this.experimentalModel.twistySceneModel.hintFacelet.set(n)}get hintFacelets(){throw je("hintFacelets")}set experimentalStickering(n){this.experimentalModel.twistySceneModel.stickeringRequest.set(n)}get experimentalStickering(){throw je("experimentalStickering")}set experimentalStickeringMaskOrbits(n){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(n)}get experimentalStickeringMaskOrbits(){throw je("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(n){this.experimentalModel.twistySceneModel.faceletScale.set(n)}get experimentalFaceletScale(){throw je("experimentalFaceletScale")}set backView(n){this.experimentalModel.backView.set(n)}get backView(){throw je("backView")}set background(n){this.experimentalModel.twistySceneModel.background.set(n)}get background(){throw je("background")}set colorScheme(n){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(n)}get colorScheme(){throw je("colorScheme")}set controlPanel(n){this.experimentalModel.controlPanel.set(n)}get controlPanel(){throw je("controlPanel")}set visualization(n){this.experimentalModel.visualizationFormat.set(n)}get visualization(){throw je("visualization")}set experimentalTitle(n){this.experimentalModel.title.set(n)}get experimentalTitle(){throw je("experimentalTitle")}set experimentalVideoURL(n){this.experimentalModel.videoURL.set(n)}get experimentalVideoURL(){throw je("experimentalVideoURL")}set experimentalCompetitionID(n){this.experimentalModel.competitionID.set(n)}get experimentalCompetitionID(){throw je("experimentalCompetitionID")}set viewerLink(n){this.experimentalModel.viewerLink.set(n)}get viewerLink(){throw je("viewerLink")}set experimentalMovePressInput(n){this.experimentalModel.twistySceneModel.movePressInput.set(n)}get experimentalMovePressInput(){throw je("experimentalMovePressInput")}set experimentalMovePressCancelOptions(n){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(n)}get experimentalMovePressCancelOptions(){throw je("experimentalMovePressCancelOptions")}set cameraLatitude(n){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:n})}get cameraLatitude(){throw je("cameraLatitude")}set cameraLongitude(n){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:n})}get cameraLongitude(){throw je("cameraLongitude")}set cameraDistance(n){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:n})}get cameraDistance(){throw je("cameraDistance")}set cameraLatitudeLimit(n){this.experimentalModel.twistySceneModel.latitudeLimit.set(n)}get cameraLatitudeLimit(){throw je("cameraLatitudeLimit")}set indexer(n){this.experimentalModel.indexerConstructorRequest.set(n)}get indexer(){throw je("indexer")}set tempoScale(n){this.experimentalModel.tempoScale.set(n)}get tempoScale(){throw je("tempoScale")}set experimentalSprite(n){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(n)}get experimentalSprite(){throw je("experimentalSprite")}set experimentalHintSprite(n){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(n)}get experimentalHintSprite(){throw je("experimentalHintSprite")}set fullscreenElement(n){this.experimentalModel.twistySceneModel.fullscreenElement.set(n)}get fullscreenElement(){throw je("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(n){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(n)}get experimentalInitialHintFaceletsAnimation(){throw je("experimentalInitialHintFaceletsAnimation")}set experimentalDragInput(n){this.experimentalModel.twistySceneModel.dragInput.set(n)}get experimentalDragInput(){throw je("experimentalDragInput")}},u_=class{constructor(n){this.model=n}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},wa="data-",ys={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},h_=Object.fromEntries(Object.values(ys).map(n=>[n,!0])),d_={experimentalMovePressCancelOptions:!0},Ur=class extends c_{constructor(n={}){super(),this.controller=new Lv(this.experimentalModel,this),this.experimentalCanvasClickCallback=()=>{},this.#e=new zs(this,"controls-",["auto"].concat(Object.keys(Dv))),this.#t=document.createElement("div"),this.#n=document.createElement("div"),this.#i=!1,this.#s="auto",this.#r=null,this.#a=new uu,this.#o=null;for(const[e,t]of Object.entries(n)){if(!(h_[e]||d_[e])){console.warn(`Invalid config passed to TwistyPlayer: ${e}`);break}this[e]=t}}#e;#t;#n;#i;async connectedCallback(){if(this.#i)return;this.#i=!0,this.addCSS(Wv),this.addElement(this.#t).classList.add("visualization-wrapper"),this.addElement(this.#n).classList.add("error-elem"),this.#n.textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(e=>{const t=e.errors[0]??null;this.contentWrapper.classList.toggle("error",!!t),t&&(this.#n.textContent=t)});const n=new mu(this.experimentalModel,this.controller);this.contentWrapper.appendChild(n),this.buttons=new du(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(e=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(e)),this.contentWrapper.classList.toggle("checkered-transparent",e==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(e=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(e))}),this.experimentalModel.controlPanel.addFreshListener(e=>{this.#e.setValue(e)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#l.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#s;experimentalSetFlashLevel(n){this.#s=n}flash(){this.#s==="auto"&&this.#r?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"})}#r;#a;#o;#l(n){if(n!==this.#o){this.#r?.remove(),this.#r?.disconnect();let e;switch(n){case"2D":case"experimental-2D-LL":{e=new cu(this.experimentalModel.twistySceneModel,n);break}case"Cube3D":case"PG3D":{e=new Va(this.experimentalModel),this.#a.handleNewValue(e);break}default:throw new Error("Invalid visualization")}this.#t.appendChild(e),this.#r=e,this.#o=n}}async experimentalCurrentVantages(){this.connectedCallback();const n=this.#r;return n instanceof Va?n.experimentalVantages():[]}async experimentalCurrentCanvases(){const n=await this.experimentalCurrentVantages(),e=[];for(const t of n)e.push((await t.canvasInfo()).canvas);return e}async experimentalCurrentThreeJSPuzzleObject(n){this.connectedCallback();const t=await(await this.#a.promise).experimentalTwisty3DPuzzleWrapper(),i=t.twisty3DPuzzle(),r=(async()=>{await i,await new Promise(s=>setTimeout(s,0))})();if(n){const s=new dr(async()=>{});t.addEventListener("render-scheduled",async()=>{s.requestIsPending()||(s.requestAnimFrame(),await r,n())})}return i}jumpToStart(n){this.controller.jumpToStart(n)}jumpToEnd(n){this.controller.jumpToEnd(n)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(n){this.controller.togglePlay(n)}experimentalAddMove(n,e){this.experimentalModel.experimentalAddMove(n,e)}experimentalAddAlgLeaf(n,e){this.experimentalModel.experimentalAddAlgLeaf(n,e)}static get observedAttributes(){const n=[];for(const e of Object.keys(ys))n.push(e,wa+e);return n}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(n,e,t){n.startsWith(wa)&&(n=n.slice(wa.length));const i=ys[n];!i||(this[i]=t)}async experimentalScreenshot(n){return(await Hl(this.experimentalModel,n)).dataURL}async experimentalDownloadScreenshot(n){if(["2D","experimental-2D-LL"].includes(await this.experimentalModel.visualizationStrategy.get())){const t=await this.#r.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),i=new XMLSerializer().serializeToString(t.svgWrapper.svgElement),r=URL.createObjectURL(new Blob([i]));vu(r,n??await gu(this.experimentalModel),"svg")}else await(await Hl(this.experimentalModel)).download(n)}};Tt.define("twisty-player",Ur);var f_=new dn(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);async function p_(n){return new Promise((e,t)=>{const i=document.getElementById(n);i&&e(i);const r=new MutationObserver(s=>{for(const o of s)o.attributeName==="id"&&o.target instanceof Element&&o.target.getAttribute("id")===n&&(e(o.target),r.disconnect())});r.observe(document.body,{attributeFilter:["id"],subtree:!0})})}var m_=250,ji=class extends Kt{constructor(n,e,t,i,r,s){if(super({mode:"open"}),this.algOrAlgNode=i,this.classList.add(n),this.addCSS(f_),s){const o=this.contentWrapper.appendChild(document.createElement("a"));o.href="#",o.textContent=e,o.addEventListener("click",a=>{a.preventDefault(),t.twistyAlgViewer.jumpToIndex(t.earliestMoveIndex,r)})}else this.contentWrapper.appendChild(document.createElement("span")).textContent=e}pathToIndex(n){return[]}setCurrentMove(n){this.contentWrapper.classList.toggle("current-move",n)}};Tt.define("twisty-alg-leaf-elem",ji);var Xi=class extends Pr{constructor(n,e){super(),this.algOrAlgNode=e,this.queue=[],this.classList.add(n)}addString(n){this.queue.push(document.createTextNode(n))}addElem(n){return this.queue.push(n.element),n.moveCount}flushQueue(n=1){for(const e of yu(this.queue,n))this.append(e);this.queue=[]}pathToIndex(n){return[]}};Tt.define("twisty-alg-wrapper-elem",Xi);function g_(n){return n===1?-1:1}function v_(n,e){return e<0?g_(n):n}function yu(n,e){if(e===1)return n;const t=Array.from(n);return t.reverse(),t}var x_=class extends ur{traverseAlg(n,e){let t=0;const i=new Xi("twisty-alg-alg",n);let r=!0;for(const s of Rc(n.childAlgNodes(),e.direction))r||i.addString(" "),r=!1,s.as(Nt)?.experimentalNISSGrouping&&i.addString("^("),s.as(yt)?.experimentalNISSPlaceholder||(t+=i.addElem(this.traverseAlgNode(s,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}))),s.as(Nt)?.experimentalNISSGrouping&&i.addString(")");return i.flushQueue(e.direction),{moveCount:t,element:i}}traverseGrouping(n,e){const t=n.experimentalAsSquare1Tuple(),i=v_(e.direction,n.amount);let r=0;const s=new Xi("twisty-alg-grouping",n);return s.addString("("),t?(r+=s.addElem({moveCount:1,element:new ji("twisty-alg-move",t[0].amount.toString(),e,t[0],!0,!0)}),s.addString(", "),r+=s.addElem({moveCount:1,element:new ji("twisty-alg-move",t[1].amount.toString(),e,t[1],!0,!0)})):r+=s.addElem(this.traverseAlg(n.alg,{earliestMoveIndex:e.earliestMoveIndex+r,twistyAlgViewer:e.twistyAlgViewer,direction:i})),s.addString(`)${n.experimentalRepetitionSuffix}`),s.flushQueue(),{moveCount:r*Math.abs(n.amount),element:s}}traverseMove(n,e){const t=new ji("twisty-alg-move",n.toString(),e,n,!0,!0);return e.twistyAlgViewer.highlighter.addMove(n.startCharIndex,t),{moveCount:1,element:t}}traverseCommutator(n,e){let t=0;const i=new Xi("twisty-alg-commutator",n);i.addString("["),i.flushQueue();const[r,s]=yu([n.A,n.B],e.direction);return t+=i.addElem(this.traverseAlg(r,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),i.addString(", "),t+=i.addElem(this.traverseAlg(s,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),i.flushQueue(e.direction),i.addString("]"),i.flushQueue(),{moveCount:t*2,element:i}}traverseConjugate(n,e){let t=0;const i=new Xi("twisty-alg-conjugate",n);i.addString("[");const r=i.addElem(this.traverseAlg(n.A,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}));return t+=r,i.addString(": "),t+=i.addElem(this.traverseAlg(n.B,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),i.addString("]"),i.flushQueue(),{moveCount:t+r,element:i}}traversePause(n,e){return n.experimentalNISSGrouping?this.traverseAlg(n.experimentalNISSGrouping.alg,e):{moveCount:1,element:new ji("twisty-alg-pause",".",e,n,!0,!0)}}traverseNewline(n,e){const t=new Xi("twisty-alg-newline",n);return t.append(document.createElement("br")),{moveCount:0,element:t}}traverseLineComment(n,e){return{moveCount:0,element:new ji("twisty-alg-line-comment",`//${n.text}`,e,n,!1,!1)}}},__=hn(x_),w_=class{constructor(){this.moveCharIndexMap=new Map,this.currentElem=null}addMove(n,e){this.moveCharIndexMap.set(n,e)}set(n){const e=n?this.moveCharIndexMap.get(n.startCharIndex)??null:null;this.currentElem!==e&&(this.currentElem?.classList.remove("twisty-alg-current-move"),this.currentElem?.setCurrentMove(!1),e?.classList.add("twisty-alg-current-move"),e?.setCurrentMove(!0),this.currentElem=e)}},Mu=class extends Pr{constructor(n){super(),this.highlighter=new w_,this.#t=null,this.lastClickTimestamp=null,n?.twistyPlayer&&(this.twistyPlayer=n?.twistyPlayer)}#e;#t;connectedCallback(){}setAlg(n){this.#e=__(n,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element,this.textContent="",this.appendChild(this.#e)}get twistyPlayer(){return this.#t}set twistyPlayer(n){this.#n(n)}async#n(n){if(this.#t){console.warn("twisty-player reassignment is not supported");return}if(n===null)throw new Error("clearing twistyPlayer is not supported");this.#t=n,this.#t.experimentalModel.alg.addFreshListener(i=>{this.setAlg(i.alg)});const e=(await this.#t.experimentalModel.alg.get()).alg,t="startCharIndex"in e?e:De.fromString(e.toString());this.setAlg(t),n.experimentalModel.currentMoveInfo.addFreshListener(i=>{let r=i.currentMoves[0];if(r??(r=i.movesStarting[0]),r??(r=i.movesFinishing[0]),!r)this.highlighter.set(null);else{const s=r.move;this.highlighter.set(s)}}),n.experimentalModel.detailedTimelineInfo.addFreshListener(i=>{i.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}async jumpToIndex(n,e){const t=this.#t;if(t){t.pause();const i=(async()=>{const r=await t.experimentalModel.indexer.get(),s=e?m_:0;return r.indexToMoveStartTimestamp(n)+r.moveDuration(n)-s})();t.experimentalModel.timestampRequest.set(await i),this.lastClickTimestamp===await i?(t.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await i}}async attributeChangedCallback(n,e,t){if(n==="for"){let i=document.getElementById(t);if(i||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),i=await p_(t),!(i instanceof Ur)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=i}}static get observedAttributes(){return["for"]}};Tt.define("twisty-alg-viewer",Mu);var y_=class extends ur{traverseAlg(n,e){const t=[];let i=0;for(const r of n.childAlgNodes()){const s=this.traverseAlgNode(r,{numMovesSofar:e.numMovesSofar+i});t.push(s.tokens),i+=s.numLeavesInside}return{tokens:Array.prototype.concat(...t),numLeavesInside:i}}traverseGrouping(n,e){const t=this.traverseAlg(n.alg,e);return{tokens:t.tokens,numLeavesInside:t.numLeavesInside*n.amount}}traverseMove(n,e){return{tokens:[{leaf:n,idx:e.numMovesSofar}],numLeavesInside:1}}traverseCommutator(n,e){const t=this.traverseAlg(n.A,e),i=this.traverseAlg(n.B,{numMovesSofar:e.numMovesSofar+t.numLeavesInside});return{tokens:t.tokens.concat(i.tokens),numLeavesInside:t.numLeavesInside*2+i.numLeavesInside}}traverseConjugate(n,e){const t=this.traverseAlg(n.A,e),i=this.traverseAlg(n.B,{numMovesSofar:e.numMovesSofar+t.numLeavesInside});return{tokens:t.tokens.concat(i.tokens),numLeavesInside:t.numLeavesInside*2+i.numLeavesInside*2}}traversePause(n,e){return{tokens:[{leaf:n,idx:e.numMovesSofar}],numLeavesInside:1}}traverseNewline(n,e){return{tokens:[],numLeavesInside:0}}traverseLineComment(n,e){return{tokens:[],numLeavesInside:0}}},M_=hn(y_),S_=class extends Ze{getDefaultValue(){return""}},b_=class extends Ke{derive(n){return xu(n.value)}},T_=class extends Wn{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(n,e){const{selectionStart:t,selectionEnd:i}=n,r=await e,s=n.selectionStart===r.selectionStart&&n.selectionEnd!==(await e).selectionEnd;return{selectionStart:t,selectionEnd:i,endChangedMostRecently:s}}},E_=class extends Ke{derive(n){return n.selectionInfo.endChangedMostRecently?n.selectionInfo.selectionEnd:n.selectionInfo.selectionStart}},A_=class extends Ke{derive(n){return M_(n.algWithIssues.alg,{numMovesSofar:0}).tokens}},L_=class extends Ke{derive(n){function e(i){if(i===null)return null;let r;return n.targetChar<i.leaf.startCharIndex?r="before":n.targetChar===i.leaf.startCharIndex?r="start":n.targetChar<i.leaf.endCharIndex?r="inside":n.targetChar===i.leaf.endCharIndex?r="end":r="after",{leafInfo:i,where:r}}let t=null;for(const i of n.leafTokens){if(n.targetChar<i.leaf.startCharIndex&&t!==null)return e(t);if(n.targetChar<=i.leaf.endCharIndex)return e(i);t=i}return e(t)}},D_=class{constructor(){this.valueProp=new S_,this.selectionProp=new T_,this.targetCharProp=new E_({selectionInfo:this.selectionProp}),this.algEditorAlgWithIssues=new b_({value:this.valueProp}),this.leafTokensProp=new A_({algWithIssues:this.algEditorAlgWithIssues}),this.leafToHighlight=new L_({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})}},C_=new dn(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  overflow: hidden;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`),cs="for-twisty-player",ec="placeholder",tc="twisty-player-prop",R_=class extends Kt{constructor(n){super(),this.model=new D_,this.#e=document.createElement("textarea"),this.#t=document.createElement("div"),this.#n=document.createElement("span"),this.#i=document.createElement("span"),this.#s=document.createElement("span"),this.#r=new zs(this,"valid-for-puzzle-",["none","warning","error"]),this.#a=null,this.debugNeverRequestTimestamp=!1,this.#u=!1,this.#c=null,this.#t.classList.add("carbon-copy"),this.addElement(this.#t),this.#e.rows=1,this.addElement(this.#e),this.#n.classList.add("prefix"),this.#t.appendChild(this.#n),this.#i.classList.add("highlight"),this.#t.appendChild(this.#i),this.#s.classList.add("suffix"),this.#t.appendChild(this.#s),this.#e.placeholder="Alg",this.#e.setAttribute("spellcheck","false"),this.addCSS(C_),this.#e.addEventListener("input",()=>{this.#u=!0,this.onInput()}),this.#e.addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),n?.twistyPlayer&&(this.twistyPlayer=n.twistyPlayer),this.#o=n?.twistyPlayerProp??"alg",n?.twistyPlayerProp==="alg"&&this.model.leafToHighlight.addFreshListener(e=>{e&&this.highlightLeaf(e.leafInfo.leaf)})}#e;#t;#n;#i;#s;#r;#a;#o;get#l(){return this.#a===null?null:this.#a.experimentalModel[this.#o]}set algString(n){this.#e.value=n,this.onInput()}get algString(){return this.#e.value}set placeholder(n){this.#e.placeholder=n}#u;onInput(){this.#i.hidden=!0,this.highlightLeaf(null);const n=this.#e.value.trimEnd();this.model.valueProp.set(n),this.#l?.set(n)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#o!=="alg")return;const{selectionStart:n,selectionEnd:e}=this.#e;this.model.selectionProp.set({selectionStart:n,selectionEnd:e})}async onBlur(){}setAlgIssueClassForPuzzle(n){this.#r.setValue(n)}#h(n){return n.endsWith(`
`)?`${n} `:n}#c;highlightLeaf(n){if(this.#o==="alg"){if(n===null){this.#n.textContent="",this.#i.textContent="",this.#s.textContent=this.#h(this.#e.value);return}n!==this.#c&&(this.#c=n,this.#n.textContent=this.#e.value.slice(0,n.startCharIndex),this.#i.textContent=this.#e.value.slice(n.startCharIndex,n.endCharIndex),this.#s.textContent=this.#h(this.#e.value.slice(n.endCharIndex)),this.#i.hidden=!1)}}get twistyPlayer(){return this.#a}set twistyPlayer(n){if(this.#a){console.warn("twisty-player reassignment/clearing is not supported");return}this.#a=n,n&&((async()=>this.algString=this.#l?(await this.#l.get()).alg.toString():"")(),this.#o==="alg"&&(this.#a?.experimentalModel.puzzleAlg.addFreshListener(e=>{if(e.issues.errors.length===0){this.setAlgIssueClassForPuzzle(e.issues.warnings.length===0?"none":"warning");const t=e.alg,i=De.fromString(this.algString);t.isIdentical(i)||(this.algString=t.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async e=>{if(e===null)return;const[t,i]=await Promise.all([await n.experimentalModel.indexer.get(),await n.experimentalModel.timestampRequest.get()]);if(i==="auto"&&!this.#u)return;const r=t.indexToMoveStartTimestamp(e.leafInfo.idx),s=t.moveDuration(e.leafInfo.idx);let o;switch(e.where){case"before":{o=r;break}case"start":case"inside":{o=r+s/4;break}case"end":case"after":{o=r+s;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||n.experimentalModel.timestampRequest.set(o)}),n.experimentalModel.currentLeavesSimplified.addFreshListener(async e=>{const i=(await n.experimentalModel.indexer.get()).getAnimLeaf(e.stateIndex);this.highlightLeaf(i)})))}attributeChangedCallback(n,e,t){switch(n){case cs:{const i=document.getElementById(t);if(!i){console.warn(`${cs}= elem does not exist`);return}if(!(i instanceof Ur)){console.warn(`${cs}=is not a twisty-player`);return}this.twistyPlayer=i;return}case ec:{this.placeholder=t;return}case tc:{if(this.#a)throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");this.#o=t;return}}}static get observedAttributes(){return[cs,ec,tc]}};Tt.define("twisty-alg-editor",R_);var I_=new dn(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`),P_=new dn(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function z_(n="",e=location.href){const t={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},i=new URL(e).searchParams,r={};for(const[s,o]of Object.entries(t)){const a=i.get(n+s);if(a!==null){const c=ys[o];r[c]=a}}return r}var ya="outer block moves (e.g. R, Rw, or 4r)",Ma="inner block moves (e.g. M or 2-5r)",N_={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${Ma} count as 2 turns
\u2022 ${ya} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${Ma} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${ya} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${Ma} count as 1 turn
\u2022 ${ya} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
\u2022 all moves (including rotations) count as 1 turn`},F_={OBTM:"h",OBQTM:"q",RBTM:"s",ETM:"e"},O_=class extends Kt{constructor(n){super({mode:"open"}),this.options=n,this.twistyPlayer=null,this.a=null}fallback(){if(this.contentWrapper.textContent="",this.a){const n=this.contentWrapper.appendChild(document.createElement("span"));n.textContent="\u2757\uFE0F",n.title="Could not show a player for link",this.addElement(this.a)}this.#e?.remove(),this.#t?.remove()}#e;#t;#n;#i;#s;async connectedCallback(){if(this.#i=this.addElement(document.createElement("div")),this.#i.classList.add("responsive-wrapper"),this.options?.colorScheme&&this.contentWrapper.classList.add("dark-mode"),this.#e=this.addCSS(I_),this.options?.cdnForumTweaks&&this.addCSS(P_),this.a=this.querySelector("a"),!this.a)return;const n=z_("",this.a.href),e=this.a?.href,{hostname:t,pathname:i}=new URL(e);if(t!=="alpha.twizzle.net"){this.fallback();return}if(["/edit/","/explore/"].includes(i)){const r=i==="/explore/";if(n.puzzle&&!(n.puzzle in su)){const a=(await tt(()=>import("./index.b52b244e.js"),[])).getPuzzleDescriptionString(n.puzzle);delete n.puzzle,n.experimentalPuzzleDescription=a}if(this.twistyPlayer=this.#i.appendChild(new Ur({background:this.options?.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:this.options?.colorScheme?"dark":"light",...n,viewerLink:r?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,n.experimentalTitle&&(this.twistyPlayer.experimentalTitle=n.experimentalTitle),this.#n=this.#i.appendChild(document.createElement("div")),this.#n.classList.add("scrollable-region"),n.experimentalTitle&&this.addHeading(n.experimentalTitle).classList.add("title"),n.experimentalSetupAlg){this.addHeading("Setup",async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);const a=this.#n.appendChild(document.createElement("div"));a.classList.add("setup-alg"),a.textContent=new De(n.experimentalSetupAlg).toString()}const s=this.addHeading("Moves",async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null);this.#s=s.appendChild(k_(this.twistyPlayer.experimentalModel)),this.#s.classList.add("move-count"),this.#n.appendChild(new Mu({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else this.fallback()}addHeading(n,e){const t=this.#n.appendChild(document.createElement("div"));t.classList.add("heading");const i=t.appendChild(document.createElement("span"));if(i.textContent=n,e){i.textContent+=" ";const r=i.appendChild(document.createElement("a"));r.textContent="\u{1F4CB}",r.href="#",r.title="Copy to clipboard";async function s(o){r.textContent=o,await new Promise(a=>setTimeout(a,2e3)),r.textContent===o&&(r.textContent="\u{1F4CB}")}r.addEventListener("click",async o=>{o.preventDefault(),r.textContent="\u2026\u{1F4CB}";const a=await e();if(a)try{await navigator.clipboard.writeText(a),s("\u2705\u{1F4CB}")}catch(c){throw s("\u274C\u{1F4CB}"),c}else s("\u274C\u{1F4CB}")})}return t}};Tt.define("twizzle-link",O_);function k_(n,e=document.createElement("span")){async function t(){const[i,r]=await Promise.all([n.puzzleAlg.get(),n.puzzleLoader.get()]);if(i.issues.errors.length!==0){e.textContent="";return}let s=!0;function o(a){s?s=!1:e.append(", ");const c=e.appendChild(document.createElement("span")),l=rv(r,a,i.alg),u=c.appendChild(document.createElement("span"));u.textContent=l.toString(),u.classList.add("move-number"),c.append(`${F_[a]}`),c.setAttribute("data-before",N_[a]??"")}e.textContent="(",r.id==="3x3x3"&&(o("OBTM"),o("OBQTM"),o("RBTM")),o("ETM"),e.append(")")}return n.puzzleAlg.addFreshListener(t),n.puzzleID.addFreshListener(t),e}const zt=new Eg;zt.background=new et(7438450);let Sr,Ha;Ha=new Ag;Sr=new Ue;let sn=[],Un=[];var Ms=document.getElementById("cubeDisplay");const Zt=new Tc({antialias:!0});Zt.setPixelRatio(window.devicePixelRatio);var Ki=Ms.offsetWidth,Ji=Ms.offsetHeight;Zt.setSize(Ki,Ji);const wi=new Xt(75,Ki/Ji,.1,1e3);wi.position.set(45,45,45);document.getElementById("cubeDisplay").appendChild(Zt.domElement);const us=new Lg(wi,Zt.domElement);document.addEventListener("pointerdown",W_);window.addEventListener("resize",B_);var Wi=function(e){return e*Math.PI/180};function Su(){requestAnimationFrame(Su),Zt.render(zt,wi)}function U_(){Zt.render(zt,wi)}function B_(){Ki=Ms.offsetWidth,Ji=Ms.offsetHeight,wi.aspect=Ki/Ji,wi.updateProjectionMatrix(),Zt.setSize(Ki,Ji)}function V_(n){var e=(n-1.55)*5.15;us.target=new V(e,e,e),us.minDistance=n*25,us.maxDistance=n*25,us.update()}var Dn=document.getElementById("InitialState");Dn.addEventListener("input",G_);var qt=document.getElementById("CCEExplanations"),vn=document.getElementById("EPExplanations"),xn=document.getElementById("CPExplanations"),ot=document.getElementById("SolutionState"),nc=200,Ss=[];Dn.oninput=function(){bu()};function bs(n,e,t){n==0&&(ot.value=ot.value+`
`+e,vn.innerHTML=vn.innerHTML+"<br>"+t+": "+e),n==1&&(ot.value=ot.value+`
`+e,xn.innerHTML=xn.innerHTML+"<br>"+t+": "+e)}function G_(n){if(n.target.value=="")Ns(Qe),Cs(Qe),ot.value="",qt.innerHTML="",vn.innerHTML="",xn.innerHTML="";else try{Tu(n.target.value,Qe),ot.value="",qt.innerHTML="",vn.innerHTML="",xn.innerHTML=""}catch{ot.value="",qt.innerHTML="",vn.innerHTML="",xn.innerHTML=""}}function bu(){ot.style.height="",ot.style.height=Math.min(ot.scrollHeight,nc)+10+"px",Dn.style.height="",Dn.style.height=Math.min(Dn.scrollHeight,nc)+10+"px"}var H_=function(e){var t=this;this.createPieces=function(){for(var i=0;i<t.cubeSize;i++)for(var r=0;r<t.cubeSize;r++)for(var s=0;s<t.cubeSize;s++){var o=.1,a=new or(t.pieceSize,t.pieceSize,t.pieceSize),c=new Ls(t.pieceSize*.85,t.pieceSize*.85),l=new Tn({color:15787074,side:Dt}),u=new Tn({color:16777215,side:Dt}),h=new Tn({color:13400487,side:Dt}),d=new Tn({color:13983232,side:Dt}),m=new Tn({color:5682409,side:Dt}),v=new Tn({color:40563,side:Dt}),p=new Tn({color:1118481,side:Dt}),f=new Ct(c,l),y=new Ct(c,u),A=new Ct(c,h),T=new Ct(c,d),S=new Ct(c,m),E=new Ct(c,v),C=new Ct(a,p);f.rotation.set(Wi(90),0,0),y.rotation.set(Wi(90),0,0),S.rotation.set(0,0,Wi(90)),E.rotation.set(0,0,Wi(90)),A.rotation.set(0,Wi(90),0),T.rotation.set(0,Wi(90),0);var F=i*this.pieceSize,g=r*this.pieceSize,x=s*this.pieceSize;f.position.set(F,g+(t.pieceSize/2+o),x),y.position.set(F,g-(t.pieceSize/2+o),x),E.position.set(F,g,x-(t.pieceSize/2+o)),S.position.set(F,g,x+(t.pieceSize/2+o)),A.position.set(F-(t.pieceSize/2+o),g,x),T.position.set(F+(t.pieceSize/2+o),g,x),C.position.set(F,g,x);var L=new vt;(i==0||r==0||s==0||i==t.cubeSize-1||r==t.cubeSize-1||s==t.cubeSize-1)&&(i==t.cubeSize-1&&(T.name="R"+(t.cubeSize*t.cubeSize-s-t.cubeSize*r-1),L.add(T),Un.push(T)),i==0&&(A.name="L"+(t.cubeSize*(t.cubeSize-1)+s-t.cubeSize*r),L.add(A),Un.push(A)),r==t.cubeSize-1&&(f.name="U"+(t.cubeSize*s+i),L.add(f),Un.push(f)),r==0&&(y.name="D"+(t.cubeSize*(t.cubeSize-s-1)+i),L.add(y),Un.push(y)),s==t.cubeSize-1&&(S.name="F"+(t.cubeSize*(t.cubeSize-r-1)+i),L.add(S),Un.push(S)),s==0&&(E.name="B"+(t.cubeSize*(t.cubeSize-r)-i-1),L.add(E),Un.push(E)),L.add(C),L.position.set(i,r,s),L.name=""+i+r+s,zt.add(L),sn.push(L))}},this.pieceSize=10,this.cubeSize=e,this.createPieces()};function Ns(n){sn=[],Un=[],Zt.dispose(),zt.traverse(e=>{if(!!e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)e.material.dispose();else for(const t of e.material)t.dispose()}),zt.remove.apply(zt,zt.children),new H_(n),V_(n),Su()}function Tu(n,e){let t=Ac(n,e);t=t.perm.perm;for(var i in t){let r=i.replace(/[0-9]/g,""),s=zt.getObjectByName(t[i]);switch(r){case"U":s.material.color.setHex("0xf0e442");break;case"D":s.material.color.setHex("0xffffff");break;case"L":s.material.color.setHex("0xcc79a7");break;case"R":s.material.color.setHex("0xd55e00");break;case"F":s.material.color.setHex("0x56b4e9");break;case"B":s.material.color.setHex("0x009e73");break}}}function hs(n,e){let t=Lr(n);t=t.perm.perm;for(var i in t){let r=i.replace(/[0-9]/g,""),s=zt.getObjectByName(t[i]);switch(r){case"U":s.material.color.setHex("0xf0e442");break;case"D":s.material.color.setHex("0xffffff");break;case"L":s.material.color.setHex("0xcc79a7");break;case"R":s.material.color.setHex("0xd55e00");break;case"F":s.material.color.setHex("0x56b4e9");break;case"B":s.material.color.setHex("0x009e73");break}}}function W_(n){Sr.x=(n.clientX-Zt.domElement.offsetLeft)/Zt.domElement.clientWidth*2-1,Sr.y=-((n.clientY-Zt.domElement.offsetTop)/Zt.domElement.clientHeight)*2+1,Sr.set(n.clientX/Ki*2-1,-(n.clientY/Ji)*2+1),Ha.setFromCamera(Sr,wi);const e=Ha.intersectObjects(Un,!1);if(e.length>0){const t=e[0];console.log(t),console.log(t.object.name),t.object.material.color.setHex(Eu),U_()}}$(".button").click(function(){Eu=$(this).attr("value"),$(".button").removeAttr("id"),$(this).attr("id","activeColor")});$(".dropdown-menu").on("click",".dropdown-item",function(n){var e=$(this).val();document.getElementById("dropdown-menu-value").innerHTML=e+"x"+e+"x"+e,Ns(e),Cs(e),Qe=e,Dn.value="",ot.value="",qt.innerHTML="",vn.innerHTML="",xn.innerHTML="",li.firstChild&&li.removeChild(li.firstChild)});$("#solveCube").click(function(){var n=document.getElementById("InitialState").value,e=Ug(n,Qe),t=Yg(e[0]);hs(t),ot.value=t,qt.innerHTML="",vn.innerHTML="[Three Cycle] : Moves",xn.innerHTML="[Three Cycle] : Moves",qt.innerHTML+="Parity of Corner and Center Edges: ["+e[1]+"]",qt.innerHTML+="<br>"+t;let i=Math.floor(Qe/2);for(let a=1;a<i;a++){let c=Bg(Qe,a);c[0]==0?qt.innerHTML=qt.innerHTML+"<br>[No Adjustment Needed] Parity of Inner Slice "+a+" was "+c[1]:(hs(c[0]),ot.value=ot.value+`
`+c[0],qt.innerHTML=qt.innerHTML+"<br>Parity of Inner Slice "+a+" was [1]: "+c[0])}Wg(Qe).forEach(a=>{ot.value=ot.value+`
`+a[1],vn.innerHTML=vn.innerHTML+"<br>"+a[0]+": "+a[1],hs(a[1])}),jg(Qe).forEach(a=>{ot.value=ot.value+`
`+a[1],xn.innerHTML=xn.innerHTML+"<br>"+a[0]+": "+a[1],hs(a[1])}),Ss=ot.value.split(/\r?\n/);let o=document.getElementById("myRange");o.max=Ss.length,o.min=0,o.value=0,bu()});$("#resetCube").click(function(){Ns(Qe),Cs(Qe),Dn.value="",ot.value="",qt.innerHTML="",vn.innerHTML="",xn.innerHTML=""});$("#randomizeCube").click(function(){Dn.value=kg(Qe);let n=document.getElementById("InitialState");var e=new Event("input");n.dispatchEvent(e)});function q_(n,e){console.log("Rotation");var t=new vt,i=[],r=(Qe-1)*5.5;switch(t.position.set(r,r,r),t.rotation.set(0,0,0),n){case"U":sn.forEach(function(o){o.position.y%10==Qe-1-e&&i.push(o)});for(var s in i)t.attach(i[s]);t.rotation.y=-Math.PI/2;break;case"D":sn.forEach(function(o){o.position.y%10==e&&i.push(o)});for(var s in i)t.attach(i[s]);t.rotation.y=Math.PI/2;break;case"F":sn.forEach(function(o){o.position.z%10==Qe-1-e&&i.push(o)});for(var s in i)t.attach(i[s]);t.rotation.z=-Math.PI/2;break;case"B":sn.forEach(function(o){o.position.z%10==e&&i.push(o)});for(var s in i)t.attach(i[s]);t.rotation.z=Math.PI/2;break;case"R":sn.forEach(function(o){o.position.x%10==Qe-1-e&&i.push(o)});for(var s in i)t.attach(i[s]);t.rotation.x=-Math.PI/2;break;case"L":sn.forEach(function(o){o.position.x%10==e&&i.push(o)});for(var s in i)t.attach(i[s]);t.rotation.x=Math.PI/2;break}t.updateMatrixWorld();for(var s in i)zt.attach(i[s]),i[s].position.copy(i[s].position.round())}$("#rotateButton4").click(function(){q_("L",0)});$("#rotateButton").click(function(){console.log("rotateButton Pressed");var n=new vt,e=[],t=(Qe-1)*5.5;n.position.set(t,t,t),n.rotation.set(0,0,0),sn.forEach(function(r){r.position.y%10==0&&e.push(r)});for(var i in e)n.attach(e[i]);n.rotation.y=Math.PI/2,n.updateMatrixWorld();for(var i in e)zt.attach(e[i]),e[i].position.copy(e[i].position.round())});$("#rotateButton2").click(function(){console.log("rotateButton Pressed");var n=new vt,e=[],t=(Qe-1)*5.5;n.position.set(t,t,t),n.rotation.set(0,0,0),sn.forEach(function(r){r.position.x%10==0&&e.push(r)});for(var i in e)n.attach(e[i]);n.rotation.x=Math.PI/2,n.updateMatrixWorld();for(var i in e)zt.attach(e[i]),e[i].position.copy(e[i].position.round())});$("#rotateButton3").click(function(){console.log("rotateButton Pressed");var n=new vt,e=[],t=(Qe-1)*5.5;n.position.set(t,t,t),n.rotation.set(0,0,0),sn.forEach(function(r){r.position.z%10==4&&e.push(r)});for(var i in e)n.attach(e[i]);n.rotation.z=-Math.PI/2,n.updateMatrixWorld();for(var i in e)zt.attach(e[i]),e[i].position.copy(e[i].position.round())});var Eu=8421504,Qe=5;Ns(Qe);Cs(Qe);var j_=document.getElementById("myRange"),li=document.getElementById("player");j_.oninput=function(){let n=Dn.value,e=n;for(let i=0;i<this.value;i++)e=n,n+=" "+Ss[i];const t=new Ur({puzzle:Qe+"x"+Qe+"x"+Qe,alg:String(Ss[this.value-1]),hintFacelets:"none",background:"none",experimentalSetupAlg:String(e)});li.firstChild&&li.removeChild(li.firstChild),t.id="playerAnimate",t.style.width="100%",li.appendChild(t),Tu(n,Qe)};$(function(){$('[data-toggle="tooltip"]').tooltip()});export{z as M,cn as Q,O0 as T,$_ as a,gn as b,no as c,Y_ as g,Z_ as h};
