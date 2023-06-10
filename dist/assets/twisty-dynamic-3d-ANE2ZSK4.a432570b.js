import{T as tn,h as bd,a as Sd,g as Ol,b as wd,c as Td,M as Ad}from"./index.834c28d6.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="150",Ed={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hh=0,fo=1,uh=2,Ld=3,Rd=0,Qo=1,dh=2,qi=3,Vt=0,gt=1,Jt=2,Pd=2,Tn=0,pi=1,po=2,mo=3,go=4,fh=5,oi=100,ph=101,mh=102,xo=103,_o=104,gh=200,xh=201,_h=202,yh=203,el=204,tl=205,vh=206,Mh=207,bh=208,Sh=209,wh=210,Th=0,Ah=1,Eh=2,ia=3,Ch=4,Lh=5,Rh=6,Ph=7,Xs=0,Ih=1,Dh=2,cn=0,Fh=1,Nh=2,zh=3,kh=4,Oh=5,la=300,Gn=301,Vn=302,Cs=303,Ls=304,ts=306,Rs=1e3,Ct=1001,Ps=1002,ct=1003,sa=1004,Id=1004,ws=1005,Dd=1005,ht=1006,nl=1007,Fd=1007,Hn=1008,Nd=1008,Wn=1009,Uh=1010,Bh=1011,il=1012,Gh=1013,kn=1014,Sn=1015,Ki=1016,Vh=1017,Hh=1018,mi=1020,Wh=1021,Bt=1023,qh=1024,Xh=1025,Bn=1026,_i=1027,Yh=1028,Zh=1029,Jh=1030,$h=1031,Kh=1033,Zr=33776,Jr=33777,$r=33778,Kr=33779,yo=35840,vo=35841,Mo=35842,bo=35843,jh=36196,So=37492,wo=37496,To=37808,Ao=37809,Eo=37810,Co=37811,Lo=37812,Ro=37813,Po=37814,Io=37815,Do=37816,Fo=37817,No=37818,zo=37819,ko=37820,Oo=37821,jr=36492,Qh=36283,Uo=36284,Bo=36285,Go=36286,eu=2200,tu=2201,nu=2202,Is=2300,Ds=2301,Qr=2302,ci=2400,hi=2401,Fs=2402,ca=2500,sl=2501,zd=0,kd=1,Od=2,qn=3e3,tt=3001,iu=3200,su=3201,Yn=0,ru=1,Ud="",Qt="srgb",ji="srgb-linear",rl="display-p3",Bd=0,ea=7680,Gd=7681,Vd=7682,Hd=7683,Wd=34055,qd=34056,Xd=5386,Yd=512,Zd=513,Jd=514,$d=515,Kd=516,jd=517,Qd=518,au=519,Ns=35044,ef=35048,tf=35040,nf=35045,sf=35049,rf=35041,af=35046,of=35050,lf=35042,cf="100",Vo="300 es",ra=1035;class En{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const gi=Math.PI/180,zs=180/Math.PI;function Gt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function al(r,e){return(r%e+e)%e}function hf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function uf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ts(r,e,t){return(1-t)*r+t*e}function df(r,e,t,n){return Ts(r,e,1-Math.exp(-t*n))}function ff(r,e=1){return e-Math.abs(al(r,e*2)-e)}function pf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xf(r,e){return r+Math.random()*(e-r)}function _f(r){return r*(.5-Math.random())}function yf(r){r!==void 0&&(Ul=r);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(r){return r*gi}function Mf(r){return r*zs}function Ho(r){return(r&r-1)===0&&r!==0}function ou(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sf={DEG2RAD:gi,RAD2DEG:zs,generateUUID:Gt,clamp:ut,euclideanModulo:al,mapLinear:hf,inverseLerp:uf,lerp:Ts,damp:df,pingpong:ff,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:xf,randFloatSpread:_f,seededRandom:yf,degToRad:vf,radToDeg:Mf,isPowerOfTwo:Ho,ceilPowerOfTwo:ou,floorPowerOfTwo:lu,setQuaternionFromProperEuler:bf,normalize:Ke,denormalize:wn};class Y{constructor(e=0,t=0){Y.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],p=i[0],g=i[3],_=i[6],y=i[1],x=i[4],v=i[7],b=i[2],T=i[5],L=i[8];return s[0]=a*p+o*y+l*b,s[3]=a*g+o*x+l*T,s[6]=a*_+o*v+l*L,s[1]=c*p+h*y+d*b,s[4]=c*g+h*x+d*T,s[7]=c*_+h*v+d*L,s[2]=u*p+f*y+m*b,s[5]=u*g+f*x+m*T,s[8]=u*_+f*v+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=t*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return e[0]=d*p,e[1]=(i*c-h*n)*p,e[2]=(o*n-i*a)*p,e[3]=u*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new wt;function cu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const wf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xi(r,e){return new wf[r](e)}function ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],f=s[a+1],m=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=p;return}if(d!==p||l!==u||c!==f||h!==m){let g=1-o;const _=l*u+c*f+h*m+d*p,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,_*y);g=Math.sin(g*T)/b,o=Math.sin(o*T)/b}const v=o*y;if(l=l*g+u*v,c=c*g+f*v,h=h*g+m*v,d=d*g+p*v,g===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,d=l*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=c*l+u*-s+h*-o-d*-a,this.y=h*l+u*-a+d*-s-c*-o,this.z=d*l+u*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new A,Bl=new Ft;function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Tf=new wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Af=new wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),On=new A;function Ef(r){return r.convertSRGBToLinear(),On.set(r.r,r.g,r.b).applyMatrix3(Af),r.setRGB(On.x,On.y,On.z)}function Cf(r){return On.set(r.r,r.g,r.b).applyMatrix3(Tf),r.setRGB(On.x,On.y,On.z).convertLinearToSRGB()}const Lf={[ji]:r=>r,[Qt]:r=>r.convertSRGBToLinear(),[rl]:Ef},Rf={[ji]:r=>r,[Qt]:r=>r.convertLinearToSRGB(),[rl]:Cf},Et={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ji},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Lf[e],i=Rf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ei;class ol{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=ks("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ui{constructor(e=null){this.isSource=!0,this.uuid=Gt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ia(i[a].image)):s.push(Ia(i[a]))}else s=Ia(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ia(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ol.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class dt extends En{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Ct,i=Ct,s=ht,a=Hn,o=Bt,l=Wn,c=dt.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Gt(),this.name="",this.source=new ui(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==la)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=la;dt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],p=l[2],g=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,b=(_+1)/2,T=(h+u)/4,L=(d+p)/4,M=(m+g)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=L/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=M/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=L/s,i=M/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-p)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nn extends En{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ui(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class If extends nn{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ha(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ll extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Df extends nn{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ll(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ff extends nn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class bi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)jn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox),Da.applyMatrix4(e.matrixWorld),this.union(Da);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),lr.subVectors(this.max,cs),Ci.subVectors(e.a,cs),Li.subVectors(e.b,cs),Ri.subVectors(e.c,cs),Rn.subVectors(Li,Ci),Pn.subVectors(Ri,Li),Qn.subVectors(Ci,Ri);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Qn.z,Qn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Qn.z,0,-Qn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Qn.y,Qn.x,0];return!Fa(t,Ci,Li,Ri,lr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Ci,Li,Ri,lr))?!1:(cr.crossVectors(Rn,Pn),t=[cr.x,cr.y,cr.z],Fa(t,Ci,Li,Ri,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new A,new A,new A,new A,new A,new A,new A,new A],jn=new A,Da=new bi,Ci=new A,Li=new A,Ri=new A,Rn=new A,Pn=new A,Qn=new A,cs=new A,lr=new A,cr=new A,ei=new A;function Fa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ei.fromArray(r,s);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nf=new bi,hs=new A,Na=new A;class Si{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Na)),this.expandByPoint(hs.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new A,za=new A,hr=new A,In=new A,ka=new A,ur=new A,Oa=new A;class Ys{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){za.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),In.copy(this.origin).sub(za);const s=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=In.dot(this.direction),l=-In.dot(hr),c=In.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const p=1/h;d*=p,u*=p,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(za).addScaledVector(hr,u),f}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,i,s){ka.subVectors(t,e),ur.subVectors(n,e),Oa.crossVectors(ka,ur);let a=this.direction.dot(Oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,e);const l=o*this.direction.dot(ur.crossVectors(In,ur));if(l<0)return null;const c=o*this.direction.dot(ka.cross(In));if(c<0||l+c>a)return null;const h=-o*In.dot(Oa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,h,d,u,f,m,p,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=f,_[7]=m,_[11]=p,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,m=o*h,p=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-p*c,t[9]=-o*l,t[2]=p-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,m=c*h,p=c*d;t[0]=u+p*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=p+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,m=c*h,p=c*d;t[0]=u-p*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=p-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,m=o*h,p=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,m=o*l,p=o*c;t[0]=l*h,t[4]=p-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-p*d}else if(e.order==="XZY"){const u=a*l,f=a*c,m=o*l,p=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+p,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zf,e,kf)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Dn.crossVectors(n,Ot),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Dn.crossVectors(n,Ot)),Dn.normalize(),dr.crossVectors(Ot,Dn),i[0]=Dn.x,i[4]=dr.x,i[8]=Ot.x,i[1]=Dn.y,i[5]=dr.y,i[9]=Ot.y,i[2]=Dn.z,i[6]=dr.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],p=n[6],g=n[10],_=n[14],y=n[3],x=n[7],v=n[11],b=n[15],T=i[0],L=i[4],M=i[8],S=i[12],R=i[1],k=i[5],W=i[9],z=i[13],I=i[2],U=i[6],J=i[10],te=i[14],q=i[3],$=i[7],ee=i[11],ue=i[15];return s[0]=a*T+o*R+l*I+c*q,s[4]=a*L+o*k+l*U+c*$,s[8]=a*M+o*W+l*J+c*ee,s[12]=a*S+o*z+l*te+c*ue,s[1]=h*T+d*R+u*I+f*q,s[5]=h*L+d*k+u*U+f*$,s[9]=h*M+d*W+u*J+f*ee,s[13]=h*S+d*z+u*te+f*ue,s[2]=m*T+p*R+g*I+_*q,s[6]=m*L+p*k+g*U+_*$,s[10]=m*M+p*W+g*J+_*ee,s[14]=m*S+p*z+g*te+_*ue,s[3]=y*T+x*R+v*I+b*q,s[7]=y*L+x*k+v*U+b*$,s[11]=y*M+x*W+v*J+b*ee,s[15]=y*S+x*z+v*te+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],p=e[7],g=e[11],_=e[15];return m*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*f-n*l*f)+p*(+t*l*f-t*c*u+s*a*u-i*a*f+i*c*h-s*l*h)+g*(+t*c*d-t*o*f-s*a*d+n*a*f+s*o*h-n*c*h)+_*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],p=e[13],g=e[14],_=e[15],y=d*g*c-p*u*c+p*l*f-o*g*f-d*l*_+o*u*_,x=m*u*c-h*g*c-m*l*f+a*g*f+h*l*_-a*u*_,v=h*p*c-m*d*c+m*o*f-a*p*f-h*o*_+a*d*_,b=m*d*l-h*p*l-m*o*u+a*p*u+h*o*g-a*d*g,T=t*y+n*x+i*v+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=y*L,e[1]=(p*u*s-d*g*s-p*i*f+n*g*f+d*i*_-n*u*_)*L,e[2]=(o*g*s-p*l*s+p*i*c-n*g*c-o*i*_+n*l*_)*L,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*f-n*l*f)*L,e[4]=x*L,e[5]=(h*g*s-m*u*s+m*i*f-t*g*f-h*i*_+t*u*_)*L,e[6]=(m*l*s-a*g*s-m*i*c+t*g*c+a*i*_-t*l*_)*L,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*f+t*l*f)*L,e[8]=v*L,e[9]=(m*d*s-h*p*s-m*n*f+t*p*f+h*n*_-t*d*_)*L,e[10]=(a*p*s-m*o*s+m*n*c-t*p*c-a*n*_+t*o*_)*L,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*f-t*o*f)*L,e[12]=b*L,e[13]=(h*p*i-m*d*i+m*n*u-t*p*u-h*n*g+t*d*g)*L,e[14]=(m*o*i-a*p*i-m*n*l+t*p*l+a*n*g-t*o*g)*L,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,p=a*h,g=a*d,_=o*d,y=l*c,x=l*h,v=l*d,b=n.x,T=n.y,L=n.z;return i[0]=(1-(p+_))*b,i[1]=(f+v)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(u+_))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(m+x)*L,i[9]=(g-y)*L,i[10]=(1-(u+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const c=1/s,h=1/a,d=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),d=(t+e)*l,u=(n+i)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new A,$t=new Ce,zf=new A(0,0,0),kf=new A(1,1,1),Dn=new A,dr=new A,Ot=new A,Gl=new Ce,Vl=new Ft;class Yt{constructor(e=0,t=0,n=0,i=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class ua{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const Hl=new A,Ii=new Ft,gn=new Ce,fr=new A,us=new A,Uf=new A,Bf=new Ft,Wl=new A(1,0,0),ql=new A(0,1,0),Xl=new A(0,0,1),Gf={type:"added"},Yl={type:"removed"};class We extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Gt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const e=new A,t=new Yt,n=new Ft,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new wt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(us,fr,this.up):gn.lookAt(fr,us,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(gn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new A(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new A,xn=new A,Ua=new A,_n=new A,Di=new A,Fi=new A,Zl=new A,Ba=new A,Ga=new A,Va=new A;class Zt{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kt.subVectors(i,t),xn.subVectors(n,t),Ua.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(xn),l=Kt.dot(Ua),c=xn.dot(xn),h=xn.dot(Ua),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,_n),l.set(0,0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),xn.subVectors(e,t),Kt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Kt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Zt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Di.subVectors(i,n),Fi.subVectors(s,n),Ba.subVectors(e,n);const l=Di.dot(Ba),c=Fi.dot(Ba);if(l<=0&&c<=0)return t.copy(n);Ga.subVectors(e,i);const h=Di.dot(Ga),d=Fi.dot(Ga);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Di,a);Va.subVectors(e,s);const f=Di.dot(Va),m=Fi.dot(Va);if(m>=0&&f<=m)return t.copy(s);const p=f*c-l*m;if(p<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Fi,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Zl.subVectors(s,i),o=(d-h)/(d-h+(f-m)),t.copy(i).addScaledVector(Zl,o);const _=1/(g+p+u);return a=p*_,o=u*_,t.copy(n).addScaledVector(Di,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vf=0;class Lt extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Gt(),this.name="",this.type="Material",this.blending=pi,this.side=Vt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Vt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ha(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Et.workingColorSpace){if(e=al(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ha(a,s,e+1/3),this.g=Ha(a,s,e),this.b=Ha(a,s,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Et.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Et.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Et.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Et.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Et.fromWorkingColorSpace(At.copy(this),e),ut(At.r*255,0,255)<<16^ut(At.g*255,0,255)<<8^ut(At.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Qt){Et.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(pr);const n=Ts(jt.h,pr.h,t),i=Ts(jt.s,pr.s,t),s=Ts(jt.l,pr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new he;he.NAMES=hu;class je extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new A,mr=new Y;class Xe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ns,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ns&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Hf extends Xe{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Wf extends Xe{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class qf extends Xe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Xf extends Xe{constructor(e,t,n){super(new Int16Array(e),t,n)}}class cl extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yf extends Xe{constructor(e,t,n){super(new Int32Array(e),t,n)}}class hl extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zf extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}}class ge extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}}class Jf extends Xe{constructor(e,t,n){super(new Float64Array(e),t,n)}}let $f=0;const qt=new Ce,Wa=new We,Ni=new A,Ut=new bi,ds=new bi,bt=new A;class Fe extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Gt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?hl:cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Ut.min,ds.min),Ut.expandByPoint(bt),bt.addVectors(Ut.max,ds.max),Ut.expandByPoint(bt)):(Ut.expandByPoint(ds.min),Ut.expandByPoint(ds.max))}Ut.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),bt.add(Ni)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new A,h[R]=new A;const d=new A,u=new A,f=new A,m=new Y,p=new Y,g=new Y,_=new A,y=new A;function x(R,k,W){d.fromArray(i,R*3),u.fromArray(i,k*3),f.fromArray(i,W*3),m.fromArray(a,R*2),p.fromArray(a,k*2),g.fromArray(a,W*2),u.sub(d),f.sub(d),p.sub(m),g.sub(m);const z=1/(p.x*g.y-g.x*p.y);!isFinite(z)||(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(z),y.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(z),c[R].add(_),c[k].add(_),c[W].add(_),h[R].add(y),h[k].add(y),h[W].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,k=v.length;R<k;++R){const W=v[R],z=W.start,I=W.count;for(let U=z,J=z+I;U<J;U+=3)x(n[U+0],n[U+1],n[U+2])}const b=new A,T=new A,L=new A,M=new A;function S(R){L.fromArray(s,R*3),M.copy(L);const k=c[R];b.copy(k),b.sub(L.multiplyScalar(L.dot(k))).normalize(),T.crossVectors(M,k);const z=T.dot(h[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=z}for(let R=0,k=v.length;R<k;++R){const W=v[R],z=W.start,I=W.count;for(let U=z,J=z+I;U<J;U+=3)S(n[U+0]),S(n[U+1]),S(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,d=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),p=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let p=0,g=l.length;p<g;p++){o.isInterleavedBufferAttribute?f=l[p]*o.data.stride+o.offset:f=l[p]*h;for(let _=0;_<h;_++)u[m++]=c[f++]}return new Xe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Ce,ln=new Ys,gr=new Si,$l=new A,fs=new A,ps=new A,ms=new A,qa=new A,xr=new A,_r=new Y,yr=new Y,vr=new Y,Xa=new A,Mr=new A;class at extends We{constructor(e=new Fe,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(qa.fromBufferAttribute(d,e),a?xr.addScaledVector(qa,h):xr.addScaledVector(qa.sub(t),h))}t.add(xr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),ln.copy(e.ray).recast(e.near),gr.containsPoint(ln.origin)===!1&&(ln.intersectSphere(gr,$l)===null||ln.origin.distanceToSquared($l)>(e.far-e.near)**2))||(Jl.copy(s).invert(),ln.copy(e.ray).applyMatrix4(Jl),n.boundingBox!==null&&ln.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,m=d.length;f<m;f++){const p=d[f],g=i[p.materialIndex],_=Math.max(p.start,u.start),y=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,v=y;x<v;x+=3){const b=o.getX(x),T=o.getX(x+1),L=o.getX(x+2);a=br(this,g,e,ln,c,h,b,T,L),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const f=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let p=f,g=m;p<g;p+=3){const _=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);a=br(this,i,e,ln,c,h,_,y,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,m=d.length;f<m;f++){const p=d[f],g=i[p.materialIndex],_=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,v=y;x<v;x+=3){const b=x,T=x+1,L=x+2;a=br(this,g,e,ln,c,h,b,T,L),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const f=Math.max(0,u.start),m=Math.min(l.count,u.start+u.count);for(let p=f,g=m;p<g;p+=3){const _=p,y=p+1,x=p+2;a=br(this,i,e,ln,c,h,_,y,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Kf(r,e,t,n,i,s,a,o){let l;if(e.side===gt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Vt,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:r}}function br(r,e,t,n,i,s,a,o,l){r.getVertexPosition(a,fs),r.getVertexPosition(o,ps),r.getVertexPosition(l,ms);const c=Kf(r,e,t,n,fs,ps,ms,Xa);if(c){i&&(_r.fromBufferAttribute(i,a),yr.fromBufferAttribute(i,o),vr.fromBufferAttribute(i,l),c.uv=Zt.getUV(Xa,fs,ps,ms,_r,yr,vr,new Y)),s&&(_r.fromBufferAttribute(s,a),yr.fromBufferAttribute(s,o),vr.fromBufferAttribute(s,l),c.uv2=Zt.getUV(Xa,fs,ps,ms,_r,yr,vr,new Y));const h={a,b:o,c:l,normal:new A,materialIndex:0};Zt.getNormal(fs,ps,ms,h.normal),c.face=h}return c}class Cn extends Fe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function m(p,g,_,y,x,v,b,T,L,M,S){const R=v/L,k=b/M,W=v/2,z=b/2,I=T/2,U=L+1,J=M+1;let te=0,q=0;const $=new A;for(let ee=0;ee<J;ee++){const ue=ee*k-z;for(let O=0;O<U;O++){const j=O*R-W;$[p]=j*y,$[g]=ue*x,$[_]=I,c.push($.x,$.y,$.z),$[p]=0,$[g]=0,$[_]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(O/L),d.push(1-ee/M),te+=1}}for(let ee=0;ee<M;ee++)for(let ue=0;ue<L;ue++){const O=u+ue+U*ee,j=u+ue+U*(ee+1),ae=u+(ue+1)+U*(ee+1),F=u+(ue+1)+U*ee;l.push(O,j,F),l.push(j,ae,F),q+=6}o.addGroup(f,q,S),f+=q,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(r){const e={};for(let t=0;t<r.length;t++){const n=Qi(r[t]);for(const i in n)e[i]=n[i]}return e}function jf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uu(r){return r.getRenderTarget()===null&&r.outputEncoding===tt?Qt:ji}const du={clone:Qi,merge:Dt};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class da extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends da{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,ki=1;class fu extends We{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new St(zi,ki,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new St(zi,ki,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new St(zi,ki,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new St(zi,ki,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new St(zi,ki,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new St(zi,ki,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=cn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Zs extends dt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Gn,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pu extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cn(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:Tn});s.uniforms.tEquirect.value=t;const a=new at(i,s),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=ht),new fu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ya=new A,tp=new A,np=new wt;class zn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ya.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||np.getNormalMatrix(e),i=this.coplanarPoint(Ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Si,Sr=new A;class fa{constructor(e=new zn,t=new zn,n=new zn,i=new zn,s=new zn,a=new zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],m=n[10],p=n[11],g=n[12],_=n[13],y=n[14],x=n[15];return t[0].setComponents(o-i,d-l,p-u,x-g).normalize(),t[1].setComponents(o+i,d+l,p+u,x+g).normalize(),t[2].setComponents(o+s,d+c,p+f,x+_).normalize(),t[3].setComponents(o-s,d-c,p-f,x-_).normalize(),t[4].setComponents(o-a,d-h,p-m,x-y).normalize(),t[5].setComponents(o+a,d+h,p+m,x+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ip(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,d,u),c.onUploadCallback();let m;if(d instanceof Float32Array)m=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(d instanceof Int16Array)m=5122;else if(d instanceof Uint32Array)m=5125;else if(d instanceof Int32Array)m=5124;else if(d instanceof Int8Array)m=5120;else if(d instanceof Uint8Array)m=5121;else if(d instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class ns extends Fe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],p=[],g=[];for(let _=0;_<h;_++){const y=_*u-a;for(let x=0;x<c;x++){const v=x*d-s;m.push(v,-y,0),p.push(0,0,1),g.push(x/o),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<o;y++){const x=y+c*_,v=y+c*(_+1),b=y+1+c*(_+1),T=y+1+c*_;f.push(x,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp="vec3 transformed = vec3( position );",up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sp=`#define PI 3.141592653589793
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
}`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,Yp=`#if defined( USE_ENVMAP )
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,em=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_m=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Om=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
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
#endif`,Jm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$m=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Km=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
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
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:_p,color_fragment:yp,color_pars_fragment:vp,color_pars_vertex:Mp,color_vertex:bp,common:Sp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Ep,emissivemap_fragment:Cp,emissivemap_pars_fragment:Lp,encodings_fragment:Rp,encodings_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Fp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Yp,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Op,fog_fragment:Up,fog_pars_fragment:Bp,gradientmap_pars_fragment:Gp,lightmap_fragment:Vp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:qp,lights_pars_begin:Xp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:xm,normal_fragment_maps:_m,normal_pars_fragment:ym,normal_pars_vertex:vm,normal_vertex:Mm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,output_fragment:Em,packing:Cm,premultiplied_alpha_fragment:Lm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:zm,shadowmap_vertex:km,shadowmask_pars_fragment:Om,skinbase_vertex:Um,skinning_pars_vertex:Bm,skinning_vertex:Gm,skinnormal_vertex:Vm,specularmap_fragment:Hm,specularmap_pars_fragment:Wm,tonemapping_fragment:qm,tonemapping_pars_fragment:Xm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:$m,uv_vertex:Km,uv2_pars_fragment:jm,uv2_pars_vertex:Qm,uv2_vertex:eg,worldpos_vertex:tg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distanceRGBA_vert:hg,distanceRGBA_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:xg,meshlambert_vert:_g,meshlambert_frag:yg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:bg,meshnormal_frag:Sg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Eg,meshtoon_vert:Cg,meshtoon_frag:Lg,points_vert:Rg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Dg,sprite_vert:Fg,sprite_frag:Ng},re={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},en={basic:{uniforms:Dt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Dt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new he(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Dt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Dt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Dt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new he(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Dt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Dt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Dt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Dt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Dt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Dt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Dt([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Dt([re.lights,re.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};en.physical={uniforms:Dt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const wr={r:0,b:0,g:0};function zg(r,e,t,n,i,s,a){const o=new he(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function m(g,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=r.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ts)?(h===void 0&&(h=new at(new Cn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Qi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==tt,(d!==x||u!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new ns(2,2),new un({name:"BackgroundMaterial",uniforms:Qi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function p(g,_){g.getRGB(wr,uu(r)),n.buffers.color.setClear(wr.r,wr.g,wr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(o,l)},render:m}}function kg(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function d(I,U,J,te,q){let $=!1;if(a){const ee=p(te,J,U);c!==ee&&(c=ee,f(c.object)),$=_(I,te,J,q),$&&y(I,te,J,q)}else{const ee=U.wireframe===!0;(c.geometry!==te.id||c.program!==J.id||c.wireframe!==ee)&&(c.geometry=te.id,c.program=J.id,c.wireframe=ee,$=!0)}q!==null&&t.update(q,34963),($||h)&&(h=!1,M(I,U,J,te),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,U,J){const te=J.wireframe===!0;let q=o[I.id];q===void 0&&(q={},o[I.id]=q);let $=q[U.id];$===void 0&&($={},q[U.id]=$);let ee=$[te];return ee===void 0&&(ee=g(u()),$[te]=ee),ee}function g(I){const U=[],J=[],te=[];for(let q=0;q<i;q++)U[q]=0,J[q]=0,te[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:te,object:I,attributes:{},index:null}}function _(I,U,J,te){const q=c.attributes,$=U.attributes;let ee=0;const ue=J.getAttributes();for(const O in ue)if(ue[O].location>=0){const ae=q[O];let F=$[O];if(F===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),ae===void 0||ae.attribute!==F||F&&ae.data!==F.data)return!0;ee++}return c.attributesNum!==ee||c.index!==te}function y(I,U,J,te){const q={},$=U.attributes;let ee=0;const ue=J.getAttributes();for(const O in ue)if(ue[O].location>=0){let ae=$[O];ae===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor));const F={};F.attribute=ae,ae&&ae.data&&(F.data=ae.data),q[O]=F,ee++}c.attributes=q,c.attributesNum=ee,c.index=te}function x(){const I=c.newAttributes;for(let U=0,J=I.length;U<J;U++)I[U]=0}function v(I){b(I,0)}function b(I,U){const J=c.newAttributes,te=c.enabledAttributes,q=c.attributeDivisors;J[I]=1,te[I]===0&&(r.enableVertexAttribArray(I),te[I]=1),q[I]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),q[I]=U)}function T(){const I=c.newAttributes,U=c.enabledAttributes;for(let J=0,te=U.length;J<te;J++)U[J]!==I[J]&&(r.disableVertexAttribArray(J),U[J]=0)}function L(I,U,J,te,q,$){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(I,U,J,q,$):r.vertexAttribPointer(I,U,J,te,q,$)}function M(I,U,J,te){if(n.isWebGL2===!1&&(I.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=te.attributes,$=J.getAttributes(),ee=U.defaultAttributeValues;for(const ue in $){const O=$[ue];if(O.location>=0){let j=q[ue];if(j===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const ae=j.normalized,F=j.itemSize,me=t.get(j);if(me===void 0)continue;const le=me.buffer,pe=me.type,xe=me.bytesPerElement;if(j.isInterleavedBufferAttribute){const ve=j.data,Le=ve.stride,Z=j.offset;if(ve.isInstancedInterleavedBuffer){for(let K=0;K<O.locationSize;K++)b(O.location+K,ve.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<O.locationSize;K++)v(O.location+K);r.bindBuffer(34962,le);for(let K=0;K<O.locationSize;K++)L(O.location+K,F/O.locationSize,pe,ae,Le*xe,(Z+F/O.locationSize*K)*xe)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<O.locationSize;ve++)b(O.location+ve,j.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<O.locationSize;ve++)v(O.location+ve);r.bindBuffer(34962,le);for(let ve=0;ve<O.locationSize;ve++)L(O.location+ve,F/O.locationSize,pe,ae,F*xe,F/O.locationSize*ve*xe)}}else if(ee!==void 0){const ae=ee[ue];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(O.location,ae);break;case 3:r.vertexAttrib3fv(O.location,ae);break;case 4:r.vertexAttrib4fv(O.location,ae);break;default:r.vertexAttrib1fv(O.location,ae)}}}}T()}function S(){W();for(const I in o){const U=o[I];for(const J in U){const te=U[J];for(const q in te)m(te[q].object),delete te[q];delete U[J]}delete o[I]}}function R(I){if(o[I.id]===void 0)return;const U=o[I.id];for(const J in U){const te=U[J];for(const q in te)m(te[q].object),delete te[q];delete U[J]}delete o[I.id]}function k(I){for(const U in o){const J=o[U];if(J[I.id]===void 0)continue;const te=J[I.id];for(const q in te)m(te[q].object),delete te[q];delete J[I.id]}}function W(){z(),h=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function Og(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=r,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Ug(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),f=r.getParameter(3379),m=r.getParameter(34076),p=r.getParameter(34921),g=r.getParameter(36347),_=r.getParameter(36348),y=r.getParameter(36349),x=u>0,v=a||e.has("OES_texture_float"),b=x&&v,T=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:T}}function Bg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zn,o=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,p=d.clipIntersection,g=d.clipShadows,_=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const y=s?0:n,x=y*4;let v=_.clippingState||null;l.value=v,v=h(m,u,x,f);for(let b=0;b!==x;++b)v[b]=t[b];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){const p=d!==null?d.length:0;let g=null;if(p!==0){if(g=l.value,m!==!0||g===null){const _=f+p*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<_)&&(g=new Float32Array(_));for(let x=0,v=f;x!==p;++x,v+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function Gg(r){let e=new WeakMap;function t(a,o){return o===Cs?a.mapping=Gn:o===Ls&&(a.mapping=Vn),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Cs||o===Ls)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pu(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class pa extends da{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Kl=[.125,.215,.35,.446,.526,.582],li=20,Za=new pa,jl=new he;let Ja=null;const ai=(1+Math.sqrt(5))/2,Ui=1/ai,Ql=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,ai,Ui),new A(0,ai,-Ui),new A(Ui,0,ai),new A(-Ui,0,ai),new A(ai,Ui,0),new A(-ai,Ui,0)];class Wo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ja=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja),e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===Vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:Ki,format:Bt,encoding:qn,depthBuffer:!1},i=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(s)),this._blurMaterial=Hg(s,e,t)}return i}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,i){const o=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(jl),h.toneMapping=cn,h.autoClear=!1;const f=new je({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),m=new at(new Cn,f);let p=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,p=!0):(f.color.copy(jl),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):y===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Tr(i,y*x,_>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gn||e.mapping===Vn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ql[(i-1)%Ql.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new at(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*li-1),p=s/m,g=isFinite(s)?1+Math.floor(h*p):li;g>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${li}`);const _=[];let y=0;for(let L=0;L<li;++L){const M=L/p,S=Math.exp(-M*M/2);_.push(S),L===0?y+=S:L<g&&(y+=2*S)}for(let L=0;L<_.length;L++)_[L]=_[L]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-Yi?i-x+Yi:0),T=4*(this._cubeSize-v);Tr(t,b,T,3*v,2*v),l.setRenderTarget(t),l.render(d,Za)}}function Vg(r){const e=[],t=[],n=[];let i=r;const s=r-Yi+1+Kl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Yi?l=Kl[a-r+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,p=3,g=2,_=1,y=new Float32Array(p*m*f),x=new Float32Array(g*m*f),v=new Float32Array(_*m*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,M=T>2?0:-1,S=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];y.set(S,p*m*T),x.set(u,g*m*T);const R=[T,T,T,T,T,T];v.set(R,_*m*T)}const b=new Fe;b.setAttribute("position",new Xe(y,p)),b.setAttribute("uv",new Xe(x,g)),b.setAttribute("faceIndex",new Xe(v,_)),e.push(b),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ec(r,e,t){const n=new nn(r,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hg(r,e,t){const n=new Float32Array(li),i=new A(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function tc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function nc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Wg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cs||l===Ls,h=l===Gn||l===Vn;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Wo(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Wo(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xg(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)e.update(u[m],34962);const f=d.morphAttributes;for(const m in f){const p=f[m];for(let g=0,_=p.length;g<_;g++)e.update(p[g],34962)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let p=0;if(f!==null){const y=f.array;p=f.version;for(let x=0,v=y.length;x<v;x+=3){const b=y[x+0],T=y[x+1],L=y[x+2];u.push(b,T,T,L,L,b)}}else{const y=m.array;p=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const b=x+0,T=x+1,L=x+2;u.push(b,T,T,L,L,b)}}const g=new(cu(u)?hl:cl)(u,1);g.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Yg(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,f){r.drawElements(s,f,o,u*l),t.update(f,s,1)}function d(u,f,m){if(m===0)return;let p,g;if(i)p=r,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,f,o,u*l,m),t.update(f,s,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Zg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jg(r,e){return r[0]-e[0]}function $g(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Kg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new $e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let I=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",I)};p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),v===!0&&(M=3);let S=h.attributes.position.count*M,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*R*4*m),W=new ha(k,S,R,m);W.type=Sn,W.needsUpdate=!0;const z=M*4;for(let U=0;U<m;U++){const J=b[U],te=T[U],q=L[U],$=S*R*4*U;for(let ee=0;ee<J.count;ee++){const ue=ee*z;y===!0&&(a.fromBufferAttribute(J,ee),k[$+ue+0]=a.x,k[$+ue+1]=a.y,k[$+ue+2]=a.z,k[$+ue+3]=0),x===!0&&(a.fromBufferAttribute(te,ee),k[$+ue+4]=a.x,k[$+ue+5]=a.y,k[$+ue+6]=a.z,k[$+ue+7]=0),v===!0&&(a.fromBufferAttribute(q,ee),k[$+ue+8]=a.x,k[$+ue+9]=a.y,k[$+ue+10]=a.z,k[$+ue+11]=q.itemSize===4?a.w:1)}}p={count:m,texture:W,size:new Y(S,R)},s.set(h,p),h.addEventListener("dispose",I)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];const _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const f=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<f;x++){const v=m[x];v[0]=x,v[1]=u[x]}m.sort($g);for(let x=0;x<8;x++)x<f&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Jg);const p=h.morphAttributes.position,g=h.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const v=o[x],b=v[0],T=v[1];b!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+x)!==p[b]&&h.setAttribute("morphTarget"+x,p[b]),g&&h.getAttribute("morphNormal"+x)!==g[b]&&h.setAttribute("morphNormal"+x,g[b]),i[x]=T,_+=T):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function jg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const gu=new dt,xu=new ha,_u=new ll,yu=new Zs,ic=[],sc=[],rc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function is(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ic[i];if(s===void 0&&(s=new Float32Array(i),ic[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ma(r,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function n0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function i0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;oc.set(n),r.uniformMatrix2fv(this.addr,!1,oc),_t(t,n)}}function s0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;ac.set(n),r.uniformMatrix3fv(this.addr,!1,ac),_t(t,n)}}function r0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;rc.set(n),r.uniformMatrix4fv(this.addr,!1,rc),_t(t,n)}}function a0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function o0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function l0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function f0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function p0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||gu,i)}function m0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_u,i)}function g0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yu,i)}function x0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xu,i)}function _0(r){switch(r){case 5126:return Qg;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(r,e){r.uniform1fv(this.addr,e)}function v0(r,e){const t=is(e,this.size,2);r.uniform2fv(this.addr,t)}function M0(r,e){const t=is(e,this.size,3);r.uniform3fv(this.addr,t)}function b0(r,e){const t=is(e,this.size,4);r.uniform4fv(this.addr,t)}function S0(r,e){const t=is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function w0(r,e){const t=is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function T0(r,e){const t=is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function A0(r,e){r.uniform1iv(this.addr,e)}function E0(r,e){r.uniform2iv(this.addr,e)}function C0(r,e){r.uniform3iv(this.addr,e)}function L0(r,e){r.uniform4iv(this.addr,e)}function R0(r,e){r.uniform1uiv(this.addr,e)}function P0(r,e){r.uniform2uiv(this.addr,e)}function I0(r,e){r.uniform3uiv(this.addr,e)}function D0(r,e){r.uniform4uiv(this.addr,e)}function F0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gu,s[a])}function N0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||_u,s[a])}function z0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yu,s[a])}function k0(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xu,s[a])}function O0(r){switch(r){case 5126:return y0;case 35664:return v0;case 35665:return M0;case 35666:return b0;case 35674:return S0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return E0;case 35668:case 35672:return C0;case 35669:case 35673:return L0;case 5125:return R0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}class U0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_0(t.type)}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=O0(t.type)}}class G0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function lc(r,e){r.seq.push(e),r.map[e.id]=e}function V0(r,e,t){const n=r.name,i=n.length;for($a.lastIndex=0;;){const s=$a.exec(n),a=$a.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){lc(t,c===void 0?new U0(o,r,e):new B0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new G0(o),lc(t,d)),t=d}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);V0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function cc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let H0=0;function W0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function q0(r){switch(r){case qn:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function hc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+W0(r.getShaderSource(e),a)}else return i}function X0(r,e){const t=q0(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Y0(r,e){let t;switch(e){case Fh:t="Linear";break;case Nh:t="Reinhard";break;case zh:t="OptimizedCineon";break;case kh:t="ACESFilmic";break;case Oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z0(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function J0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ss(r){return r!==""}function uc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(r){return r.replace(K0,j0)}function j0(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qo(t)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(r){return r.replace(Q0,ex)}function ex(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function nx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gn:case Vn:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ix(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vn:e="ENVMAP_MODE_REFRACTION";break}return e}function sx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Dh:e="ENVMAP_BLENDING_ADD";break}return e}function rx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ax(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tx(t),c=nx(t),h=ix(t),d=sx(t),u=rx(t),f=t.isWebGL2?"":Z0(t),m=J0(s),p=i.createProgram();let g,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Ss).join(`
`),g.length>0&&(g+=`
`),_=[f,m].filter(Ss).join(`
`),_.length>0&&(_+=`
`)):(g=[pc(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),_=[f,pc(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?ke.tonemapping_pars_fragment:"",t.toneMapping!==cn?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,X0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=qo(a),a=uc(a,t),a=dc(a,t),o=qo(o),o=uc(o,t),o=dc(o,t),a=fc(a),o=fc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+g+a,v=y+_+o,b=cc(i,35633,x),T=cc(i,35632,v);if(i.attachShader(p,b),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(b).trim(),k=i.getShaderInfoLog(T).trim();let W=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){W=!1;const I=hc(i,b,"vertex"),U=hc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+I+`
`+U)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||k==="")&&(z=!1);z&&(this.diagnostics={runnable:W,programLog:S,vertexShader:{log:R,prefix:g},fragmentShader:{log:k,prefix:_}})}i.deleteShader(b),i.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new ta(i,p)),L};let M;return this.getAttributes=function(){return M===void 0&&(M=$0(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=H0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let ox=0;class lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cx(e),t.set(e,n)),n}}class cx{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}}function hx(r,e,t,n,i,s,a){const o=new ua,l=new lx,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,S,R,k,W){const z=k.fog,I=W.geometry,U=M.isMeshStandardMaterial?k.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),te=!!J&&J.mapping===ts?J.image.height:null,q=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=$!==void 0?$.length:0;let ue=0;I.morphAttributes.position!==void 0&&(ue=1),I.morphAttributes.normal!==void 0&&(ue=2),I.morphAttributes.color!==void 0&&(ue=3);let O,j,ae,F;if(q){const Le=en[q];O=Le.vertexShader,j=Le.fragmentShader}else O=M.vertexShader,j=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),F=l.getFragmentShaderID(M);const me=r.getRenderTarget(),le=M.alphaTest>0,pe=M.clearcoat>0,xe=M.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:M.type,vertexShader:O,fragmentShader:j,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:me===null?r.outputEncoding:me.isXRRenderTarget===!0?me.texture.encoding:qn,map:!!M.map,matcap:!!M.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:te,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===ru,tangentSpaceNormalMap:M.normalMapType===Yn,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===tt,clearcoat:pe,clearcoatMap:pe&&!!M.clearcoatMap,clearcoatRoughnessMap:pe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!M.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!M.iridescenceMap,iridescenceThicknessMap:xe&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===pi,alphaMap:!!M.alphaMap,alphaTest:le,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!I.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:cn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===gt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function g(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(r.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.combine),M.push(S.vertexUvs),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),M.push(o.mask)}function x(M){const S=m[M.type];let R;if(S){const k=en[S];R=du.clone(k.uniforms)}else R=M.uniforms;return R}function v(M,S){let R;for(let k=0,W=c.length;k<W;k++){const z=c[k];if(z.cacheKey===S){R=z,++R.usedTimes;break}}return R===void 0&&(R=new ax(r,S,M,s),c.push(R)),R}function b(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function ux(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,m,p,g){let _=r[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:p,group:g},r[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=f,_.groupOrder=m,_.renderOrder=d.renderOrder,_.z=p,_.group=g),e++,_}function o(d,u,f,m,p,g){const _=a(d,u,f,m,p,g);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function l(d,u,f,m,p,g){const _=a(d,u,f,m,p,g);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,u){t.length>1&&t.sort(d||dx),n.length>1&&n.sort(u||mc),i.length>1&&i.sort(u||mc)}function h(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function fx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new gc,r.set(n,[a])):i>=s.length?(a=new gc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function px(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new he};break;case"SpotLight":t={position:new A,direction:new A,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function mx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gx=0;function xx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _x(r,e){const t=new px,n=mx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new A);const s=new A,a=new Ce,o=new Ce;function l(h,d){let u=0,f=0,m=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,g=0,_=0,y=0,x=0,v=0,b=0,T=0,L=0,M=0;h.sort(xx);const S=d===!0?Math.PI:1;for(let k=0,W=h.length;k<W;k++){const z=h[k],I=z.color,U=z.intensity,J=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=I.r*U*S,f+=I.g*U*S,m+=I.b*U*S;else if(z.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(z.sh.coefficients[q],U);else if(z.isDirectionalLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const $=z.shadow,ee=n.get(z);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=z.shadow.matrix,v++}i.directional[p]=q,p++}else if(z.isSpotLight){const q=t.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(I).multiplyScalar(U*S),q.distance=J,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,i.spot[_]=q;const $=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,$.updateMatrices(z),z.castShadow&&M++),i.spotLightMatrix[_]=$.matrix,z.castShadow){const ee=n.get(z);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.spotShadow[_]=ee,i.spotShadowMap[_]=te,T++}_++}else if(z.isRectAreaLight){const q=t.get(z);q.color.copy(I).multiplyScalar(U),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=q,y++}else if(z.isPointLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*S),q.distance=z.distance,q.decay=z.decay,z.castShadow){const $=z.shadow,ee=n.get(z);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=z.shadow.matrix,b++}i.point[g]=q,g++}else if(z.isHemisphereLight){const q=t.get(z);q.skyColor.copy(z.color).multiplyScalar(U*S),q.groundColor.copy(z.groundColor).multiplyScalar(U*S),i.hemi[x]=q,x++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==x||R.numDirectionalShadows!==v||R.numPointShadows!==b||R.numSpotShadows!==T||R.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+L-M,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=M,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=x,R.numDirectionalShadows=v,R.numPointShadows=b,R.numSpotShadows=T,R.numSpotMaps=L,i.version=gx++)}function c(h,d){let u=0,f=0,m=0,p=0,g=0;const _=d.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const v=h[y];if(v.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),u++}else if(v.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),m++}else if(v.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),g++}}}return{setup:l,setupView:c,state:i}}function xc(r,e){const t=new _x(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yx(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new xc(r,e),t.set(s,[l])):a>=o.length?(l=new xc(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class dl extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fl extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function bx(r,e,t){let n=new fa;const i=new Y,s=new Y,a=new $e,o=new dl({depthPacking:su}),l=new fl,c={},h=t.maxTextureSize,d={[Vt]:gt,[gt]:Vt,[Jt]:Jt},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:vx,fragmentShader:Mx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Fe;m.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new at(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo,this.render=function(v,b,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const L=r.getRenderTarget(),M=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Tn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let k=0,W=v.length;k<W;k++){const z=v[k],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const U=I.getFrameExtents();if(i.multiply(U),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/U.x),i.x=s.x*U.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/U.y),i.y=s.y*U.y,I.mapSize.y=s.y)),I.map===null){const te=this.type!==qi?{minFilter:ct,magFilter:ct}:{};I.map=new nn(i.x,i.y,te),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const J=I.getViewportCount();for(let te=0;te<J;te++){const q=I.getViewport(te);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),R.viewport(a),I.updateMatrices(z,te),n=I.getFrustum(),x(b,T,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===qi&&_(I,T),I.needsUpdate=!1}g.needsUpdate=!1,r.setRenderTarget(L,M,S)};function _(v,b){const T=e.update(p);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new nn(i.x,i.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(b,null,T,u,p,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(b,null,T,f,p,null)}function y(v,b,T,L,M,S){let R=null;const k=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(k!==void 0)R=k;else if(R=T.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=R.uuid,z=b.uuid;let I=c[W];I===void 0&&(I={},c[W]=I);let U=I[z];U===void 0&&(U=R.clone(),I[z]=U),R=U}return R.visible=b.visible,R.wireframe=b.wireframe,S===qi?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=L,R.farDistance=M),R}function x(v,b,T,L,M){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===qi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const k=e.update(v),W=v.material;if(Array.isArray(W)){const z=k.groups;for(let I=0,U=z.length;I<U;I++){const J=z[I],te=W[J.materialIndex];if(te&&te.visible){const q=y(v,te,L,T.near,T.far,M);r.renderBufferDirect(T,null,k,q,v,J)}}}else if(W.visible){const z=y(v,W,L,T.near,T.far,M);r.renderBufferDirect(T,null,k,z,v,null)}}const R=v.children;for(let k=0,W=R.length;k<W;k++)x(R[k],b,T,L,M)}}function Sx(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const V=new $e;let Q=null;const fe=new $e(0,0,0,0);return{setMask:function(_e){Q!==_e&&!P&&(r.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){P=_e},setClear:function(_e,nt,vt,Rt,an){an===!0&&(_e*=Rt,nt*=Rt,vt*=Rt),V.set(_e,nt,vt,Rt),fe.equals(V)===!1&&(r.clearColor(_e,nt,vt,Rt),fe.copy(V))},reset:function(){P=!1,Q=null,fe.set(-1,0,0,0)}}}function s(){let P=!1,V=null,Q=null,fe=null;return{setTest:function(_e){_e?le(2929):pe(2929)},setMask:function(_e){V!==_e&&!P&&(r.depthMask(_e),V=_e)},setFunc:function(_e){if(Q!==_e){switch(_e){case Th:r.depthFunc(512);break;case Ah:r.depthFunc(519);break;case Eh:r.depthFunc(513);break;case ia:r.depthFunc(515);break;case Ch:r.depthFunc(514);break;case Lh:r.depthFunc(518);break;case Rh:r.depthFunc(516);break;case Ph:r.depthFunc(517);break;default:r.depthFunc(515)}Q=_e}},setLocked:function(_e){P=_e},setClear:function(_e){fe!==_e&&(r.clearDepth(_e),fe=_e)},reset:function(){P=!1,V=null,Q=null,fe=null}}}function a(){let P=!1,V=null,Q=null,fe=null,_e=null,nt=null,vt=null,Rt=null,an=null;return{setTest:function(ot){P||(ot?le(2960):pe(2960))},setMask:function(ot){V!==ot&&!P&&(r.stencilMask(ot),V=ot)},setFunc:function(ot,Wt,on){(Q!==ot||fe!==Wt||_e!==on)&&(r.stencilFunc(ot,Wt,on),Q=ot,fe=Wt,_e=on)},setOp:function(ot,Wt,on){(nt!==ot||vt!==Wt||Rt!==on)&&(r.stencilOp(ot,Wt,on),nt=ot,vt=Wt,Rt=on)},setLocked:function(ot){P=ot},setClear:function(ot){an!==ot&&(r.clearStencil(ot),an=ot)},reset:function(){P=!1,V=null,Q=null,fe=null,_e=null,nt=null,vt=null,Rt=null,an=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},f={},m=new WeakMap,p=[],g=null,_=!1,y=null,x=null,v=null,b=null,T=null,L=null,M=null,S=!1,R=null,k=null,W=null,z=null,I=null;const U=r.getParameter(35661);let J=!1,te=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=te>=2);let $=null,ee={};const ue=r.getParameter(3088),O=r.getParameter(2978),j=new $e().fromArray(ue),ae=new $e().fromArray(O);function F(P,V,Q){const fe=new Uint8Array(4),_e=r.createTexture();r.bindTexture(P,_e),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let nt=0;nt<Q;nt++)r.texImage2D(V+nt,0,6408,1,1,0,6408,5121,fe);return _e}const me={};me[3553]=F(3553,3553,1),me[34067]=F(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(2929),l.setFunc(ia),oe(!1),Re(fo),le(2884),se(Tn);function le(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function pe(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function xe(P,V){return f[P]!==V?(r.bindFramebuffer(P,V),f[P]=V,n&&(P===36009&&(f[36160]=V),P===36160&&(f[36009]=V)),!0):!1}function ve(P,V){let Q=p,fe=!1;if(P)if(Q=m.get(V),Q===void 0&&(Q=[],m.set(V,Q)),P.isWebGLMultipleRenderTargets){const _e=P.texture;if(Q.length!==_e.length||Q[0]!==36064){for(let nt=0,vt=_e.length;nt<vt;nt++)Q[nt]=36064+nt;Q.length=_e.length,fe=!0}}else Q[0]!==36064&&(Q[0]=36064,fe=!0);else Q[0]!==1029&&(Q[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Le(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const Z={[oi]:32774,[ph]:32778,[mh]:32779};if(n)Z[xo]=32775,Z[_o]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Z[xo]=P.MIN_EXT,Z[_o]=P.MAX_EXT)}const K={[gh]:0,[xh]:1,[_h]:768,[el]:770,[wh]:776,[bh]:774,[vh]:772,[yh]:769,[tl]:771,[Sh]:775,[Mh]:773};function se(P,V,Q,fe,_e,nt,vt,Rt){if(P===Tn){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(le(3042),_=!0),P!==fh){if(P!==y||Rt!==S){if((x!==oi||T!==oi)&&(r.blendEquation(32774),x=oi,T=oi),Rt)switch(P){case pi:r.blendFuncSeparate(1,771,1,771);break;case po:r.blendFunc(1,1);break;case mo:r.blendFuncSeparate(0,769,0,1);break;case go:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case pi:r.blendFuncSeparate(770,771,1,771);break;case po:r.blendFunc(770,1);break;case mo:r.blendFuncSeparate(0,769,0,1);break;case go:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,b=null,L=null,M=null,y=P,S=Rt}return}_e=_e||V,nt=nt||Q,vt=vt||fe,(V!==x||_e!==T)&&(r.blendEquationSeparate(Z[V],Z[_e]),x=V,T=_e),(Q!==v||fe!==b||nt!==L||vt!==M)&&(r.blendFuncSeparate(K[Q],K[fe],K[nt],K[vt]),v=Q,b=fe,L=nt,M=vt),y=P,S=!1}function Me(P,V){P.side===Jt?pe(2884):le(2884);let Q=P.side===gt;V&&(Q=!Q),oe(Q),P.blending===pi&&P.transparent===!1?se(Tn):se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const fe=P.stencilWrite;c.setTest(fe),fe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(32926):pe(32926)}function oe(P){R!==P&&(P?r.frontFace(2304):r.frontFace(2305),R=P)}function Re(P){P!==hh?(le(2884),P!==k&&(P===fo?r.cullFace(1029):P===uh?r.cullFace(1028):r.cullFace(1032))):pe(2884),k=P}function Se(P){P!==W&&(J&&r.lineWidth(P),W=P)}function Pe(P,V,Q){P?(le(32823),(z!==V||I!==Q)&&(r.polygonOffset(V,Q),z=V,I=Q)):pe(32823)}function Qe(P){P?le(3089):pe(3089)}function Je(P){P===void 0&&(P=33984+U-1),$!==P&&(r.activeTexture(P),$=P)}function C(P,V,Q){Q===void 0&&($===null?Q=33984+U-1:Q=$);let fe=ee[Q];fe===void 0&&(fe={type:void 0,texture:void 0},ee[Q]=fe),(fe.type!==P||fe.texture!==V)&&($!==Q&&(r.activeTexture(Q),$=Q),r.bindTexture(P,V||me[P]),fe.type=P,fe.texture=V)}function w(){const P=ee[$];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){j.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function we(P){ae.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function Ye(P,V){let Q=d.get(V);Q===void 0&&(Q=new WeakMap,d.set(V,Q));let fe=Q.get(P);fe===void 0&&(fe=r.getUniformBlockIndex(V,P.name),Q.set(P,fe))}function it(P,V){const fe=d.get(V).get(P);h.get(V)!==fe&&(r.uniformBlockBinding(V,fe,P.__bindingPointIndex),h.set(V,fe))}function yt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},$=null,ee={},f={},m=new WeakMap,p=[],g=null,_=!1,y=null,x=null,v=null,b=null,T=null,L=null,M=null,S=!1,R=null,k=null,W=null,z=null,I=null,j.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:le,disable:pe,bindFramebuffer:xe,drawBuffers:ve,useProgram:Le,setBlending:se,setMaterial:Me,setFlipSided:oe,setCullFace:Re,setLineWidth:Se,setPolygonOffset:Pe,setScissorTest:Qe,activeTexture:Je,bindTexture:C,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:ne,texImage2D:ye,texImage3D:Ie,updateUBOMapping:Ye,uniformBlockBinding:it,texStorage2D:X,texStorage3D:Ae,texSubImage2D:ie,texSubImage3D:ce,compressedTexSubImage2D:be,compressedTexSubImage3D:de,scissor:Ee,viewport:we,reset:yt}}function wx(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let p;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,w){return _?new OffscreenCanvas(C,w):ks("canvas")}function x(C,w,B,ne){let ie=1;if((C.width>ne||C.height>ne)&&(ie=ne/Math.max(C.width,C.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ce=w?lu:Math.floor,be=ce(ie*C.width),de=ce(ie*C.height);p===void 0&&(p=y(be,de));const X=B?y(be,de):p;return X.width=be,X.height=de,X.getContext("2d").drawImage(C,0,0,be,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+de+")."),X}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Ho(C.width)&&Ho(C.height)}function b(C){return o?!1:C.wrapS!==Ct||C.wrapT!==Ct||C.minFilter!==ct&&C.minFilter!==ht}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==ct&&C.minFilter!==ht}function L(C){r.generateMipmap(C)}function M(C,w,B,ne,ie=!1){if(o===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=w;return w===6403&&(B===5126&&(ce=33326),B===5131&&(ce=33325),B===5121&&(ce=33321)),w===33319&&(B===5126&&(ce=33328),B===5131&&(ce=33327),B===5121&&(ce=33323)),w===6408&&(B===5126&&(ce=34836),B===5131&&(ce=34842),B===5121&&(ce=ne===tt&&ie===!1?35907:32856),B===32819&&(ce=32854),B===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function S(C,w,B){return T(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==ct&&C.minFilter!==ht?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===ct||C===sa||C===ws?9728:9729}function k(C){const w=C.target;w.removeEventListener("dispose",k),z(w),w.isVideoTexture&&m.delete(w)}function W(C){const w=C.target;w.removeEventListener("dispose",W),U(w)}function z(C){const w=n.get(C);if(w.__webglInit===void 0)return;const B=C.source,ne=g.get(B);if(ne){const ie=ne[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(C),Object.keys(ne).length===0&&g.delete(B)}n.remove(C)}function I(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const B=C.source,ne=g.get(B);delete ne[w.__cacheKey],a.memory.textures--}function U(C){const w=C.texture,B=n.get(C),ne=n.get(w);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(B.__webglFramebuffer[ie]),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ie=0;ie<B.__webglColorRenderbuffer.length;ie++)B.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[ie]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,ce=w.length;ie<ce;ie++){const be=n.get(w[ie]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(w[ie])}n.remove(w),n.remove(C)}let J=0;function te(){J=0}function q(){const C=J;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),J+=1,C}function $(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function ee(C,w){const B=n.get(C);if(C.isVideoTexture&&Qe(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(B,C,w);return}}t.bindTexture(3553,B.__webglTexture,33984+w)}function ue(C,w){const B=n.get(C);if(C.version>0&&B.__version!==C.version){pe(B,C,w);return}t.bindTexture(35866,B.__webglTexture,33984+w)}function O(C,w){const B=n.get(C);if(C.version>0&&B.__version!==C.version){pe(B,C,w);return}t.bindTexture(32879,B.__webglTexture,33984+w)}function j(C,w){const B=n.get(C);if(C.version>0&&B.__version!==C.version){xe(B,C,w);return}t.bindTexture(34067,B.__webglTexture,33984+w)}const ae={[Rs]:10497,[Ct]:33071,[Ps]:33648},F={[ct]:9728,[sa]:9984,[ws]:9986,[ht]:9729,[nl]:9985,[Hn]:9987};function me(C,w,B){if(B?(r.texParameteri(C,10242,ae[w.wrapS]),r.texParameteri(C,10243,ae[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ae[w.wrapR]),r.texParameteri(C,10240,F[w.magFilter]),r.texParameteri(C,10241,F[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==Ct||w.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,R(w.magFilter)),r.texParameteri(C,10241,R(w.minFilter)),w.minFilter!==ct&&w.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===ct||w.minFilter!==ws&&w.minFilter!==Hn||w.type===Sn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function le(C,w){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",k));const ne=w.source;let ie=g.get(ne);ie===void 0&&(ie={},g.set(ne,ie));const ce=$(w);if(ce!==C.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ie[ce].usedTimes++;const be=ie[C.__cacheKey];be!==void 0&&(ie[C.__cacheKey].usedTimes--,be.usedTimes===0&&I(w)),C.__cacheKey=ce,C.__webglTexture=ie[ce].texture}return B}function pe(C,w,B){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const ie=le(C,w),ce=w.source;t.bindTexture(ne,C.__webglTexture,33984+B);const be=n.get(ce);if(ce.version!==be.__version||ie===!0){t.activeTexture(33984+B),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const de=b(w)&&v(w.image)===!1;let X=x(w.image,de,!1,h);X=Je(w,X);const Ae=v(X)||o,ye=s.convert(w.format,w.encoding);let Ie=s.convert(w.type),Ee=M(w.internalFormat,ye,Ie,w.encoding,w.isVideoTexture);me(ne,w,Ae);let we;const Ye=w.mipmaps,it=o&&w.isVideoTexture!==!0,yt=be.__version===void 0||ie===!0,P=S(w,X,Ae);if(w.isDepthTexture)Ee=6402,o?w.type===Sn?Ee=36012:w.type===kn?Ee=33190:w.type===mi?Ee=35056:Ee=33189:w.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Bn&&Ee===6402&&w.type!==il&&w.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=kn,Ie=s.convert(w.type)),w.format===_i&&Ee===6402&&(Ee=34041,w.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=mi,Ie=s.convert(w.type))),yt&&(it?t.texStorage2D(3553,1,Ee,X.width,X.height):t.texImage2D(3553,0,Ee,X.width,X.height,0,ye,Ie,null));else if(w.isDataTexture)if(Ye.length>0&&Ae){it&&yt&&t.texStorage2D(3553,P,Ee,Ye[0].width,Ye[0].height);for(let V=0,Q=Ye.length;V<Q;V++)we=Ye[V],it?t.texSubImage2D(3553,V,0,0,we.width,we.height,ye,Ie,we.data):t.texImage2D(3553,V,Ee,we.width,we.height,0,ye,Ie,we.data);w.generateMipmaps=!1}else it?(yt&&t.texStorage2D(3553,P,Ee,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,ye,Ie,X.data)):t.texImage2D(3553,0,Ee,X.width,X.height,0,ye,Ie,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&yt&&t.texStorage3D(35866,P,Ee,Ye[0].width,Ye[0].height,X.depth);for(let V=0,Q=Ye.length;V<Q;V++)we=Ye[V],w.format!==Bt?ye!==null?it?t.compressedTexSubImage3D(35866,V,0,0,0,we.width,we.height,X.depth,ye,we.data,0,0):t.compressedTexImage3D(35866,V,Ee,we.width,we.height,X.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(35866,V,0,0,0,we.width,we.height,X.depth,ye,Ie,we.data):t.texImage3D(35866,V,Ee,we.width,we.height,X.depth,0,ye,Ie,we.data)}else{it&&yt&&t.texStorage2D(3553,P,Ee,Ye[0].width,Ye[0].height);for(let V=0,Q=Ye.length;V<Q;V++)we=Ye[V],w.format!==Bt?ye!==null?it?t.compressedTexSubImage2D(3553,V,0,0,we.width,we.height,ye,we.data):t.compressedTexImage2D(3553,V,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(3553,V,0,0,we.width,we.height,ye,Ie,we.data):t.texImage2D(3553,V,Ee,we.width,we.height,0,ye,Ie,we.data)}else if(w.isDataArrayTexture)it?(yt&&t.texStorage3D(35866,P,Ee,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,ye,Ie,X.data)):t.texImage3D(35866,0,Ee,X.width,X.height,X.depth,0,ye,Ie,X.data);else if(w.isData3DTexture)it?(yt&&t.texStorage3D(32879,P,Ee,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,ye,Ie,X.data)):t.texImage3D(32879,0,Ee,X.width,X.height,X.depth,0,ye,Ie,X.data);else if(w.isFramebufferTexture){if(yt)if(it)t.texStorage2D(3553,P,Ee,X.width,X.height);else{let V=X.width,Q=X.height;for(let fe=0;fe<P;fe++)t.texImage2D(3553,fe,Ee,V,Q,0,ye,Ie,null),V>>=1,Q>>=1}}else if(Ye.length>0&&Ae){it&&yt&&t.texStorage2D(3553,P,Ee,Ye[0].width,Ye[0].height);for(let V=0,Q=Ye.length;V<Q;V++)we=Ye[V],it?t.texSubImage2D(3553,V,0,0,ye,Ie,we):t.texImage2D(3553,V,Ee,ye,Ie,we);w.generateMipmaps=!1}else it?(yt&&t.texStorage2D(3553,P,Ee,X.width,X.height),t.texSubImage2D(3553,0,0,0,ye,Ie,X)):t.texImage2D(3553,0,Ee,ye,Ie,X);T(w,Ae)&&L(ne),be.__version=ce.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function xe(C,w,B){if(w.image.length!==6)return;const ne=le(C,w),ie=w.source;t.bindTexture(34067,C.__webglTexture,33984+B);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(33984+B),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,X=[];for(let V=0;V<6;V++)!be&&!de?X[V]=x(w.image[V],!1,!0,c):X[V]=de?w.image[V].image:w.image[V],X[V]=Je(w,X[V]);const Ae=X[0],ye=v(Ae)||o,Ie=s.convert(w.format,w.encoding),Ee=s.convert(w.type),we=M(w.internalFormat,Ie,Ee,w.encoding),Ye=o&&w.isVideoTexture!==!0,it=ce.__version===void 0||ne===!0;let yt=S(w,Ae,ye);me(34067,w,ye);let P;if(be){Ye&&it&&t.texStorage2D(34067,yt,we,Ae.width,Ae.height);for(let V=0;V<6;V++){P=X[V].mipmaps;for(let Q=0;Q<P.length;Q++){const fe=P[Q];w.format!==Bt?Ie!==null?Ye?t.compressedTexSubImage2D(34069+V,Q,0,0,fe.width,fe.height,Ie,fe.data):t.compressedTexImage2D(34069+V,Q,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(34069+V,Q,0,0,fe.width,fe.height,Ie,Ee,fe.data):t.texImage2D(34069+V,Q,we,fe.width,fe.height,0,Ie,Ee,fe.data)}}}else{P=w.mipmaps,Ye&&it&&(P.length>0&&yt++,t.texStorage2D(34067,yt,we,X[0].width,X[0].height));for(let V=0;V<6;V++)if(de){Ye?t.texSubImage2D(34069+V,0,0,0,X[V].width,X[V].height,Ie,Ee,X[V].data):t.texImage2D(34069+V,0,we,X[V].width,X[V].height,0,Ie,Ee,X[V].data);for(let Q=0;Q<P.length;Q++){const _e=P[Q].image[V].image;Ye?t.texSubImage2D(34069+V,Q+1,0,0,_e.width,_e.height,Ie,Ee,_e.data):t.texImage2D(34069+V,Q+1,we,_e.width,_e.height,0,Ie,Ee,_e.data)}}else{Ye?t.texSubImage2D(34069+V,0,0,0,Ie,Ee,X[V]):t.texImage2D(34069+V,0,we,Ie,Ee,X[V]);for(let Q=0;Q<P.length;Q++){const fe=P[Q];Ye?t.texSubImage2D(34069+V,Q+1,0,0,Ie,Ee,fe.image[V]):t.texImage2D(34069+V,Q+1,we,Ie,Ee,fe.image[V])}}}T(w,ye)&&L(34067),ce.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ve(C,w,B,ne,ie){const ce=s.convert(B.format,B.encoding),be=s.convert(B.type),de=M(B.internalFormat,ce,be,B.encoding);n.get(w).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,de,w.width,w.height,w.depth,0,ce,be,null):t.texImage2D(ie,0,de,w.width,w.height,0,ce,be,null)),t.bindFramebuffer(36160,C),Pe(w)?u.framebufferTexture2DMultisampleEXT(36160,ne,ie,n.get(B).__webglTexture,0,Se(w)):(ie===3553||ie>=34069&&ie<=34074)&&r.framebufferTexture2D(36160,ne,ie,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(C,w,B){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(B||Pe(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Sn?ne=36012:ie.type===kn&&(ne=33190));const ce=Se(w);Pe(w)?u.renderbufferStorageMultisampleEXT(36161,ce,ne,w.width,w.height):r.renderbufferStorageMultisample(36161,ce,ne,w.width,w.height)}else r.renderbufferStorage(36161,ne,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Se(w);B&&Pe(w)===!1?r.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Pe(w)?u.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],be=s.convert(ce.format,ce.encoding),de=s.convert(ce.type),X=M(ce.internalFormat,be,de,ce.encoding),Ae=Se(w);B&&Pe(w)===!1?r.renderbufferStorageMultisample(36161,Ae,X,w.width,w.height):Pe(w)?u.renderbufferStorageMultisampleEXT(36161,Ae,X,w.width,w.height):r.renderbufferStorage(36161,X,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function Z(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,ie=Se(w);if(w.depthTexture.format===Bn)Pe(w)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===_i)Pe(w)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function K(C){const w=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,C)}else if(B){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=r.createRenderbuffer(),Le(w.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Le(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function se(C,w,B){const ne=n.get(C);w!==void 0&&ve(ne.__webglFramebuffer,C,C.texture,36064,3553),B!==void 0&&K(C)}function Me(C){const w=C.texture,B=n.get(C),ne=n.get(w);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=w.version,a.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,be=v(C)||o;if(ie){B.__webglFramebuffer=[];for(let de=0;de<6;de++)B.__webglFramebuffer[de]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const de=C.texture;for(let X=0,Ae=de.length;X<Ae;X++){const ye=n.get(de[X]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Pe(C)===!1){const de=ce?w:[w];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let X=0;X<de.length;X++){const Ae=de[X];B.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(36161,B.__webglColorRenderbuffer[X]);const ye=s.convert(Ae.format,Ae.encoding),Ie=s.convert(Ae.type),Ee=M(Ae.internalFormat,ye,Ie,Ae.encoding,C.isXRRenderTarget===!0),we=Se(C);r.renderbufferStorageMultisample(36161,we,Ee,C.width,C.height),r.framebufferRenderbuffer(36160,36064+X,36161,B.__webglColorRenderbuffer[X])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),me(34067,w,be);for(let de=0;de<6;de++)ve(B.__webglFramebuffer[de],C,w,36064,34069+de);T(w,be)&&L(34067),t.unbindTexture()}else if(ce){const de=C.texture;for(let X=0,Ae=de.length;X<Ae;X++){const ye=de[X],Ie=n.get(ye);t.bindTexture(3553,Ie.__webglTexture),me(3553,ye,be),ve(B.__webglFramebuffer,C,ye,36064+X,3553),T(ye,be)&&L(3553)}t.unbindTexture()}else{let de=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?de=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ne.__webglTexture),me(de,w,be),ve(B.__webglFramebuffer,C,w,36064,de),T(w,be)&&L(de),t.unbindTexture()}C.depthBuffer&&K(C)}function oe(C){const w=v(C)||o,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,ie=B.length;ne<ie;ne++){const ce=B[ne];if(T(ce,w)){const be=C.isWebGLCubeRenderTarget?34067:3553,de=n.get(ce).__webglTexture;t.bindTexture(be,de),L(be),t.unbindTexture()}}}function Re(C){if(o&&C.samples>0&&Pe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,ne=C.height;let ie=16384;const ce=[],be=C.stencilBuffer?33306:36096,de=n.get(C),X=C.isWebGLMultipleRenderTargets===!0;if(X)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ae,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ae,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){ce.push(36064+Ae),C.depthBuffer&&ce.push(be);const ye=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ye===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),X&&r.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[Ae]),ye===!0&&(r.invalidateFramebuffer(36008,[be]),r.invalidateFramebuffer(36009,[be])),X){const Ie=n.get(w[Ae]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ie,0)}r.blitFramebuffer(0,0,B,ne,0,0,B,ne,ie,9728),f&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ae,36161,de.__webglColorRenderbuffer[Ae]);const ye=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ae,3553,ye,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function Se(C){return Math.min(d,C.samples)}function Pe(C){const w=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qe(C){const w=a.render.frame;m.get(C)!==w&&(m.set(C,w),C.update())}function Je(C,w){const B=C.encoding,ne=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ra||B!==qn&&(B===tt?o===!1?e.has("EXT_sRGB")===!0&&ne===Bt?(C.format=ra,C.minFilter=ht,C.generateMipmaps=!1):w=ol.sRGBToLinear(w):(ne!==Bt||ie!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=q,this.resetTextureUnits=te,this.setTexture2D=ee,this.setTexture2DArray=ue,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=se,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Pe}function vu(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Wn)return 5121;if(s===Vh)return 32819;if(s===Hh)return 32820;if(s===Uh)return 5120;if(s===Bh)return 5122;if(s===il)return 5123;if(s===Gh)return 5124;if(s===kn)return 5125;if(s===Sn)return 5126;if(s===Ki)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wh)return 6406;if(s===Bt)return 6408;if(s===qh)return 6409;if(s===Xh)return 6410;if(s===Bn)return 6402;if(s===_i)return 34041;if(s===ra)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Yh)return 6403;if(s===Zh)return 36244;if(s===Jh)return 33319;if(s===$h)return 33320;if(s===Kh)return 36249;if(s===Zr||s===Jr||s===$r||s===Kr)if(a===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$r)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yo||s===vo||s===Mo||s===bo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===So||s===wo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===So)return a===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===wo)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===To||s===Ao||s===Eo||s===Co||s===Lo||s===Ro||s===Po||s===Io||s===Do||s===Fo||s===No||s===zo||s===ko||s===Oo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===To)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ao)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eo)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Co)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lo)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ro)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Po)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Io)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Do)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fo)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===No)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zo)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ko)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oo)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===jr)return a===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Qh||s===Uo||s===Bo||s===Go)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===jr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Uo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Go)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Mu extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Un extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),_=this._getHandJoint(c,p);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=g.radius),_.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bu extends dt{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Bn,h!==Bn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bn&&(n=kn),n===void 0&&h===_i&&(n=mi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1}}class Ax extends En{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const p=t.getContextAttributes();let g=null,_=null;const y=[],x=[],v=new Set,b=new Map,T=new St;T.layers.enable(1),T.viewport=new $e;const L=new St;L.layers.enable(2),L.viewport=new $e;const M=[T,L],S=new Mu;S.layers.enable(1),S.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=y[O];return j===void 0&&(j=new Ka,y[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=y[O];return j===void 0&&(j=new Ka,y[O]=j),j.getGripSpace()},this.getHand=function(O){let j=y[O];return j===void 0&&(j=new Ka,y[O]=j),j.getHandSpace()};function W(O){const j=x.indexOf(O.inputSource);if(j===-1)return;const ae=y[j];ae!==void 0&&ae.dispatchEvent({type:O.type,data:O.inputSource})}function z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",I);for(let O=0;O<y.length;O++){const j=x[O];j!==null&&(x[O]=null,y[O].disconnect(j))}R=null,k=null,e.setRenderTarget(g),f=null,u=null,d=null,i=null,_=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",z),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),_=new nn(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:Wn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let j=null,ae=null,F=null;p.depth&&(F=p.stencil?35056:33190,j=p.stencil?_i:Bn,ae=p.stencil?mi:kn);const me={colorFormat:32856,depthFormat:F,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(me),i.updateRenderState({layers:[u]}),_=new nn(u.textureWidth,u.textureHeight,{format:Bt,type:Wn,depthTexture:new bu(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const le=e.properties.get(_);le.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(O){for(let j=0;j<O.removed.length;j++){const ae=O.removed[j],F=x.indexOf(ae);F>=0&&(x[F]=null,y[F].disconnect(ae))}for(let j=0;j<O.added.length;j++){const ae=O.added[j];let F=x.indexOf(ae);if(F===-1){for(let le=0;le<y.length;le++)if(le>=x.length){x.push(ae),F=le;break}else if(x[le]===null){x[le]=ae,F=le;break}if(F===-1)break}const me=y[F];me&&me.connect(ae)}}const U=new A,J=new A;function te(O,j,ae){U.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(ae.matrixWorld);const F=U.distanceTo(J),me=j.projectionMatrix.elements,le=ae.projectionMatrix.elements,pe=me[14]/(me[10]-1),xe=me[14]/(me[10]+1),ve=(me[9]+1)/me[5],Le=(me[9]-1)/me[5],Z=(me[8]-1)/me[0],K=(le[8]+1)/le[0],se=pe*Z,Me=pe*K,oe=F/(-Z+K),Re=oe*-Z;j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Re),O.translateZ(oe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Se=pe+oe,Pe=xe+oe,Qe=se-Re,Je=Me+(F-Re),C=ve*xe/Pe*Se,w=Le*xe/Pe*Se;O.projectionMatrix.makePerspective(Qe,Je,C,w,Se,Pe)}function q(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;S.near=L.near=T.near=O.near,S.far=L.far=T.far=O.far,(R!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,k=S.far);const j=O.parent,ae=S.cameras;q(S,j);for(let me=0;me<ae.length;me++)q(ae[me],j);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),O.matrix.copy(S.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const F=O.children;for(let me=0,le=F.length;me<le;me++)F[me].updateMatrixWorld(!0);ae.length===2?te(S,T,L):S.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.getPlanes=function(){return v};let $=null;function ee(O,j){if(h=j.getViewerPose(c||a),m=j,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let F=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,F=!0);for(let me=0;me<ae.length;me++){const le=ae[me];let pe=null;if(f!==null)pe=f.getViewport(le);else{const ve=d.getViewSubImage(u,le);pe=ve.viewport,me===0&&(e.setRenderTargetTextures(_,ve.colorTexture,u.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(_))}let xe=M[me];xe===void 0&&(xe=new St,xe.layers.enable(me),xe.viewport=new $e,M[me]=xe),xe.matrix.fromArray(le.transform.matrix),xe.projectionMatrix.fromArray(le.projectionMatrix),xe.viewport.set(pe.x,pe.y,pe.width,pe.height),me===0&&S.matrix.copy(xe.matrix),F===!0&&S.cameras.push(xe)}}for(let ae=0;ae<y.length;ae++){const F=x[ae],me=y[ae];F!==null&&me!==void 0&&me.update(F,j,c||a)}if($&&$(O,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ae=null;for(const F of v)j.detectedPlanes.has(F)||(ae===null&&(ae=[]),ae.push(F));if(ae!==null)for(const F of ae)v.delete(F),b.delete(F),n.dispatchEvent({type:"planeremoved",data:F});for(const F of j.detectedPlanes)if(!v.has(F))v.add(F),b.set(F,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:F});else{const me=b.get(F);F.lastChangedTime>me&&(b.set(F,F.lastChangedTime),n.dispatchEvent({type:"planechanged",data:F}))}}m=null}const ue=new mu;ue.setAnimationLoop(ee),this.setAnimationLoop=function(O){$=O},this.dispose=function(){}}}function Ex(r,e){function t(p,g){g.color.getRGB(p.fogColor.value,uu(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,_,y,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?i(p,g):g.isMeshToonMaterial?(i(p,g),h(p,g)):g.isMeshPhongMaterial?(i(p,g),c(p,g)):g.isMeshStandardMaterial?(i(p,g),d(p,g),g.isMeshPhysicalMaterial&&u(p,g,x)):g.isMeshMatcapMaterial?(i(p,g),f(p,g)):g.isMeshDepthMaterial?i(p,g):g.isMeshDistanceMaterial?(i(p,g),m(p,g)):g.isMeshNormalMaterial?i(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?o(p,g,_,y):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===gt&&(p.bumpScale.value*=-1)),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===gt&&p.normalScale.value.negate()),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*v}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let y;g.map?y=g.map:g.specularMap?y=g.specularMap:g.displacementMap?y=g.displacementMap:g.normalMap?y=g.normalMap:g.bumpMap?y=g.bumpMap:g.roughnessMap?y=g.roughnessMap:g.metalnessMap?y=g.metalnessMap:g.alphaMap?y=g.alphaMap:g.emissiveMap?y=g.emissiveMap:g.clearcoatMap?y=g.clearcoatMap:g.clearcoatNormalMap?y=g.clearcoatNormalMap:g.clearcoatRoughnessMap?y=g.clearcoatRoughnessMap:g.iridescenceMap?y=g.iridescenceMap:g.iridescenceThicknessMap?y=g.iridescenceThicknessMap:g.specularIntensityMap?y=g.specularIntensityMap:g.specularColorMap?y=g.specularColorMap:g.transmissionMap?y=g.transmissionMap:g.thicknessMap?y=g.thicknessMap:g.sheenColorMap?y=g.sheenColorMap:g.sheenRoughnessMap&&(y=g.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let x;g.aoMap?x=g.aoMap:g.lightMap&&(x=g.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _;g.map?_=g.map:g.alphaMap&&(_=g.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===gt&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function f(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Cx(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(m(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",g));const b=x.program;n.updateUBOMapping(y,b);const T=e.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function h(y){const x=d();y.__bindingPointIndex=x;const v=r.createBuffer(),b=y.__size,T=y.usage;return r.bindBuffer(35345,v),r.bufferData(35345,b,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,v),v}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],v=y.uniforms,b=y.__cache;r.bindBuffer(35345,x);for(let T=0,L=v.length;T<L;T++){const M=v[T];if(f(M,T,b)===!0){const S=M.__offset,R=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let W=0;W<R.length;W++){const z=R[W],I=p(z);typeof z=="number"?(M.__data[0]=z,r.bufferSubData(35345,S+k,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=z.elements[0],M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=z.elements[0],M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=z.elements[0]):(z.toArray(M.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,M.__data)}}r.bindBuffer(35345,null)}function f(y,x,v){const b=y.value;if(v[x]===void 0){if(typeof b=="number")v[x]=b;else{const T=Array.isArray(b)?b:[b],L=[];for(let M=0;M<T.length;M++)L.push(T[M].clone());v[x]=L}return!0}else if(typeof b=="number"){if(v[x]!==b)return v[x]=b,!0}else{const T=Array.isArray(v[x])?v[x]:[v[x]],L=Array.isArray(b)?b:[b];for(let M=0;M<T.length;M++){const S=T[M];if(S.equals(L[M])===!1)return S.copy(L[M]),!0}}return!1}function m(y){const x=y.uniforms;let v=0;const b=16;let T=0;for(let L=0,M=x.length;L<M;L++){const S=x[L],R={boundary:0,storage:0},k=Array.isArray(S.value)?S.value:[S.value];for(let W=0,z=k.length;W<z;W++){const I=k[W],U=p(I);R.boundary+=U.boundary,R.storage+=U.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,L>0){T=v%b;const W=b-T;T!==0&&W-R.boundary<0&&(v+=b-T,S.__offset=v)}v+=R.storage}return T=v%b,T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function p(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Lx(){const r=ks("canvas");return r.style.display="block",r}function pl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Lx(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.useLegacyLights=!0,this.toneMapping=cn,this.toneMappingExposure=1;const p=this;let g=!1,_=0,y=0,x=null,v=-1,b=null;const T=new $e,L=new $e;let M=null,S=e.width,R=e.height,k=1,W=null,z=null;const I=new $e(0,0,S,R),U=new $e(0,0,S,R);let J=!1;const te=new fa;let q=!1,$=!1,ee=null;const ue=new Ce,O=new A,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return x===null?k:1}let F=t;function me(E,N){for(let G=0;G<E.length;G++){const D=E[G],H=e.getContext(D,N);if(H!==null)return H}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",we,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),F=me(N,E),F===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let le,pe,xe,ve,Le,Z,K,se,Me,oe,Re,Se,Pe,Qe,Je,C,w,B,ne,ie,ce,be,de,X;function Ae(){le=new qg(F),pe=new Ug(F,le,r),le.init(pe),be=new vu(F,le,pe),xe=new Sx(F,le,pe),ve=new Zg,Le=new ux,Z=new wx(F,le,xe,Le,pe,be,ve),K=new Gg(p),se=new Wg(p),Me=new ip(F,pe),de=new kg(F,le,Me,pe),oe=new Xg(F,Me,ve,de),Re=new jg(F,oe,Me,ve),ne=new Kg(F,pe,Z),C=new Bg(Le),Se=new hx(p,K,se,le,pe,de,C),Pe=new Ex(p,Le),Qe=new fx,Je=new yx(le,pe),B=new zg(p,K,se,xe,Re,h,a),w=new bx(p,Re,pe),X=new Cx(F,ve,pe,xe),ie=new Og(F,le,ve,pe),ce=new Yg(F,le,ve,pe),ve.programs=Se.programs,p.capabilities=pe,p.extensions=le,p.properties=Le,p.renderLists=Qe,p.shadowMap=w,p.state=xe,p.info=ve}Ae();const ye=new Ax(p,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(S,R,!1))},this.getSize=function(E){return E.set(S,R)},this.setSize=function(E,N,G=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,R=N,e.width=Math.floor(E*k),e.height=Math.floor(N*k),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(S*k,R*k).floor()},this.setDrawingBufferSize=function(E,N,G){S=E,R=N,k=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,N,G,D){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,N,G,D),xe.viewport(T.copy(I).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,N,G,D){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,N,G,D),xe.scissor(L.copy(U).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){xe.setScissorTest(J=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(E=!0,N=!0,G=!0){let D=0;E&&(D|=16384),N&&(D|=256),G&&(D|=1024),F.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",we,!1),Qe.dispose(),Je.dispose(),Le.dispose(),K.dispose(),se.dispose(),Re.dispose(),de.dispose(),X.dispose(),Se.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Q),ye.removeEventListener("sessionend",fe),ee&&(ee.dispose(),ee=null),_e.stop()};function Ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const E=ve.autoReset,N=w.enabled,G=w.autoUpdate,D=w.needsUpdate,H=w.type;Ae(),ve.autoReset=E,w.enabled=N,w.autoUpdate=G,w.needsUpdate=D,w.type=H}function we(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ye(E){const N=E.target;N.removeEventListener("dispose",Ye),it(N)}function it(E){yt(E),Le.remove(E)}function yt(E){const N=Le.get(E).programs;N!==void 0&&(N.forEach(function(G){Se.releaseProgram(G)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,D,H,Te){N===null&&(N=j);const De=H.isMesh&&H.matrixWorld.determinant()<0,Oe=_d(E,N,G,D,H);xe.setMaterial(D,De);let Ue=G.index,Ze=1;D.wireframe===!0&&(Ue=oe.getWireframeAttribute(G),Ze=2);const Be=G.drawRange,Ge=G.attributes.position;let ft=Be.start*Ze,zt=(Be.start+Be.count)*Ze;Te!==null&&(ft=Math.max(ft,Te.start*Ze),zt=Math.min(zt,(Te.start+Te.count)*Ze)),Ue!==null?(ft=Math.max(ft,0),zt=Math.min(zt,Ue.count)):Ge!=null&&(ft=Math.max(ft,0),zt=Math.min(zt,Ge.count));const fn=zt-ft;if(fn<0||fn===1/0)return;de.setup(H,D,Oe,G,Ue);let Jn,pt=ie;if(Ue!==null&&(Jn=Me.get(Ue),pt=ce,pt.setIndex(Jn)),H.isMesh)D.wireframe===!0?(xe.setLineWidth(D.wireframeLinewidth*ae()),pt.setMode(1)):pt.setMode(4);else if(H.isLine){let Ve=D.linewidth;Ve===void 0&&(Ve=1),xe.setLineWidth(Ve*ae()),H.isLineSegments?pt.setMode(1):H.isLineLoop?pt.setMode(2):pt.setMode(3)}else H.isPoints?pt.setMode(0):H.isSprite&&pt.setMode(4);if(H.isInstancedMesh)pt.renderInstances(ft,fn,H.count);else if(G.isInstancedBufferGeometry){const Ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ta=Math.min(G.instanceCount,Ve);pt.renderInstances(ft,fn,Ta)}else pt.render(ft,fn)},this.compile=function(E,N){function G(D,H,Te){D.transparent===!0&&D.side===Jt&&D.forceSinglePass===!1?(D.side=gt,D.needsUpdate=!0,Wt(D,H,Te),D.side=Vt,D.needsUpdate=!0,Wt(D,H,Te),D.side=Jt):Wt(D,H,Te)}u=Je.get(E),u.init(),m.push(u),E.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights(p.useLegacyLights),E.traverse(function(D){const H=D.material;if(H)if(Array.isArray(H))for(let Te=0;Te<H.length;Te++){const De=H[Te];G(De,E,D)}else G(H,E,D)}),m.pop(),u=null};let P=null;function V(E){P&&P(E)}function Q(){_e.stop()}function fe(){_e.start()}const _e=new mu;_e.setAnimationLoop(V),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(E){P=E,ye.setAnimationLoop(E),E===null?_e.stop():_e.start()},ye.addEventListener("sessionstart",Q),ye.addEventListener("sessionend",fe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(N),N=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,N,x),u=Je.get(E,m.length),u.init(),m.push(u),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(ue),$=this.localClippingEnabled,q=C.init(this.clippingPlanes,$),d=Qe.get(E,f.length),d.init(),f.push(d),nt(E,N,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(W,z),q===!0&&C.beginShadows();const G=u.state.shadowsArray;if(w.render(G,E,N),q===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(d,E),u.setupLights(p.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let H=0,Te=D.length;H<Te;H++){const De=D[H];vt(d,E,De,De.viewport)}}else vt(d,E,N);x!==null&&(Z.updateMultisampleRenderTarget(x),Z.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(p,E,N),de.resetDefaultState(),v=-1,b=null,m.pop(),m.length>0?u=m[m.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function nt(E,N,G,D){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){D&&O.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const De=Re.update(E),Oe=E.material;Oe.visible&&d.push(E,De,Oe,G,O.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ve.render.frame&&(E.skeleton.update(),E.skeleton.frame=ve.render.frame),!E.frustumCulled||te.intersectsObject(E))){D&&O.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const De=Re.update(E),Oe=E.material;if(Array.isArray(Oe)){const Ue=De.groups;for(let Ze=0,Be=Ue.length;Ze<Be;Ze++){const Ge=Ue[Ze],ft=Oe[Ge.materialIndex];ft&&ft.visible&&d.push(E,De,ft,G,O.z,Ge)}}else Oe.visible&&d.push(E,De,Oe,G,O.z,null)}}const Te=E.children;for(let De=0,Oe=Te.length;De<Oe;De++)nt(Te[De],N,G,D)}function vt(E,N,G,D){const H=E.opaque,Te=E.transmissive,De=E.transparent;u.setupLightsView(G),q===!0&&C.setGlobalState(p.clippingPlanes,G),Te.length>0&&Rt(H,N,G),D&&xe.viewport(T.copy(D)),H.length>0&&an(H,N,G),Te.length>0&&an(Te,N,G),De.length>0&&an(De,N,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Rt(E,N,G){const D=pe.isWebGL2;ee===null&&(ee=new nn(1024,1024,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Ki:Wn,minFilter:Hn,samples:D&&s===!0?4:0}));const H=p.getRenderTarget();p.setRenderTarget(ee),p.clear();const Te=p.toneMapping;p.toneMapping=cn,an(E,N,G),p.toneMapping=Te,Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee),p.setRenderTarget(H)}function an(E,N,G){const D=N.isScene===!0?N.overrideMaterial:null;for(let H=0,Te=E.length;H<Te;H++){const De=E[H],Oe=De.object,Ue=De.geometry,Ze=D===null?De.material:D,Be=De.group;Oe.layers.test(G.layers)&&ot(Oe,N,G,Ue,Ze,Be)}}function ot(E,N,G,D,H,Te){E.onBeforeRender(p,N,G,D,H,Te),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(p,N,G,D,E,Te),H.transparent===!0&&H.side===Jt&&H.forceSinglePass===!1?(H.side=gt,H.needsUpdate=!0,p.renderBufferDirect(G,N,D,H,E,Te),H.side=Vt,H.needsUpdate=!0,p.renderBufferDirect(G,N,D,H,E,Te),H.side=Jt):p.renderBufferDirect(G,N,D,H,E,Te),E.onAfterRender(p,N,G,D,H,Te)}function Wt(E,N,G){N.isScene!==!0&&(N=j);const D=Le.get(E),H=u.state.lights,Te=u.state.shadowsArray,De=H.state.version,Oe=Se.getParameters(E,H.state,Te,N,G),Ue=Se.getProgramCacheKey(Oe);let Ze=D.programs;D.environment=E.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(E.isMeshStandardMaterial?se:K).get(E.envMap||D.environment),Ze===void 0&&(E.addEventListener("dispose",Ye),Ze=new Map,D.programs=Ze);let Be=Ze.get(Ue);if(Be!==void 0){if(D.currentProgram===Be&&D.lightsStateVersion===De)return on(E,Oe),Be}else Oe.uniforms=Se.getUniforms(E),E.onBuild(G,Oe,p),E.onBeforeCompile(Oe,p),Be=Se.acquireProgram(Oe,Ue),Ze.set(Ue,Be),D.uniforms=Oe.uniforms;const Ge=D.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=C.uniform),on(E,Oe),D.needsLights=vd(E),D.lightsStateVersion=De,D.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix);const ft=Be.getUniforms(),zt=ta.seqWithValue(ft.seq,Ge);return D.currentProgram=Be,D.uniformsList=zt,Be}function on(E,N){const G=Le.get(E);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function _d(E,N,G,D,H){N.isScene!==!0&&(N=j),Z.resetTextureUnits();const Te=N.fog,De=D.isMeshStandardMaterial?N.environment:null,Oe=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:qn,Ue=(D.isMeshStandardMaterial?se:K).get(D.envMap||De),Ze=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!D.normalMap&&!!G.attributes.tangent,Ge=!!G.morphAttributes.position,ft=!!G.morphAttributes.normal,zt=!!G.morphAttributes.color,fn=D.toneMapped?p.toneMapping:cn,Jn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=Jn!==void 0?Jn.length:0,Ve=Le.get(D),Ta=u.state.lights;if(q===!0&&($===!0||E!==b)){const kt=E===b&&D.id===v;C.setState(D,E,kt)}let Mt=!1;D.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ta.state.version||Ve.outputEncoding!==Oe||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ue||D.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==C.numPlanes||Ve.numIntersection!==C.numIntersection)||Ve.vertexAlphas!==Ze||Ve.vertexTangents!==Be||Ve.morphTargets!==Ge||Ve.morphNormals!==ft||Ve.morphColors!==zt||Ve.toneMapping!==fn||pe.isWebGL2===!0&&Ve.morphTargetsCount!==pt)&&(Mt=!0):(Mt=!0,Ve.__version=D.version);let $n=Ve.currentProgram;Mt===!0&&($n=Wt(D,N,H));let zl=!1,ls=!1,Aa=!1;const Pt=$n.getUniforms(),Kn=Ve.uniforms;if(xe.useProgram($n.program)&&(zl=!0,ls=!0,Aa=!0),D.id!==v&&(v=D.id,ls=!0),zl||b!==E){if(Pt.setValue(F,"projectionMatrix",E.projectionMatrix),pe.logarithmicDepthBuffer&&Pt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,ls=!0,Aa=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const kt=Pt.map.cameraPosition;kt!==void 0&&kt.setValue(F,O.setFromMatrixPosition(E.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Pt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||H.isSkinnedMesh)&&Pt.setValue(F,"viewMatrix",E.matrixWorldInverse)}if(H.isSkinnedMesh){Pt.setOptional(F,H,"bindMatrix"),Pt.setOptional(F,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(pe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Pt.setValue(F,"boneTexture",kt.boneTexture,Z),Pt.setValue(F,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ea=G.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0&&pe.isWebGL2===!0)&&ne.update(H,G,$n),(ls||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,Pt.setValue(F,"receiveShadow",H.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Kn.envMap.value=Ue,Kn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ls&&(Pt.setValue(F,"toneMappingExposure",p.toneMappingExposure),Ve.needsLights&&yd(Kn,Aa),Te&&D.fog===!0&&Pe.refreshFogUniforms(Kn,Te),Pe.refreshMaterialUniforms(Kn,D,k,R,ee),ta.upload(F,Ve.uniformsList,Kn,Z)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ta.upload(F,Ve.uniformsList,Kn,Z),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Pt.setValue(F,"center",H.center),Pt.setValue(F,"modelViewMatrix",H.modelViewMatrix),Pt.setValue(F,"normalMatrix",H.normalMatrix),Pt.setValue(F,"modelMatrix",H.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const kt=D.uniformsGroups;for(let Ca=0,Md=kt.length;Ca<Md;Ca++)if(pe.isWebGL2){const kl=kt[Ca];X.update(kl,$n),X.bind(kl,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function yd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function vd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,N,G){Le.get(E.texture).__webglTexture=N,Le.get(E.depthTexture).__webglTexture=G;const D=Le.get(E);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const G=Le.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){x=E,_=N,y=G;let D=!0,H=null,Te=!1,De=!1;if(E){const Ue=Le.get(E);Ue.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),D=!1):Ue.__webglFramebuffer===void 0?Z.setupRenderTarget(E):Ue.__hasExternalTextures&&Z.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);const Ze=E.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(De=!0);const Be=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(H=Be[N],Te=!0):pe.isWebGL2&&E.samples>0&&Z.useMultisampledRTT(E)===!1?H=Le.get(E).__webglMultisampledFramebuffer:H=Be,T.copy(E.viewport),L.copy(E.scissor),M=E.scissorTest}else T.copy(I).multiplyScalar(k).floor(),L.copy(U).multiplyScalar(k).floor(),M=J;if(xe.bindFramebuffer(36160,H)&&pe.drawBuffers&&D&&xe.drawBuffers(E,H),xe.viewport(T),xe.scissor(L),xe.setScissorTest(M),Te){const Ue=Le.get(E.texture);F.framebufferTexture2D(36160,36064,34069+N,Ue.__webglTexture,G)}else if(De){const Ue=Le.get(E.texture),Ze=N||0;F.framebufferTextureLayer(36160,36064,Ue.__webglTexture,G||0,Ze)}v=-1},this.readRenderTargetPixels=function(E,N,G,D,H,Te,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){xe.bindFramebuffer(36160,Oe);try{const Ue=E.texture,Ze=Ue.format,Be=Ue.type;if(Ze!==Bt&&be.convert(Ze)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===Ki&&(le.has("EXT_color_buffer_half_float")||pe.isWebGL2&&le.has("EXT_color_buffer_float"));if(Be!==Wn&&be.convert(Be)!==F.getParameter(35738)&&!(Be===Sn&&(pe.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-D&&G>=0&&G<=E.height-H&&F.readPixels(N,G,D,H,be.convert(Ze),be.convert(Be),Te)}finally{const Ue=x!==null?Le.get(x).__webglFramebuffer:null;xe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(E,N,G=0){const D=Math.pow(2,-G),H=Math.floor(N.image.width*D),Te=Math.floor(N.image.height*D);Z.setTexture2D(N,0),F.copyTexSubImage2D(3553,G,0,0,E.x,E.y,H,Te),xe.unbindTexture()},this.copyTextureToTexture=function(E,N,G,D=0){const H=N.image.width,Te=N.image.height,De=be.convert(G.format),Oe=be.convert(G.type);Z.setTexture2D(G,0),F.pixelStorei(37440,G.flipY),F.pixelStorei(37441,G.premultiplyAlpha),F.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?F.texSubImage2D(3553,D,E.x,E.y,H,Te,De,Oe,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(3553,D,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,De,N.mipmaps[0].data):F.texSubImage2D(3553,D,E.x,E.y,De,Oe,N.image),D===0&&G.generateMipmaps&&F.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G,D,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,Ue=be.convert(D.format),Ze=be.convert(D.type);let Be;if(D.isData3DTexture)Z.setTexture3D(D,0),Be=32879;else if(D.isDataArrayTexture)Z.setTexture2DArray(D,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,D.flipY),F.pixelStorei(37441,D.premultiplyAlpha),F.pixelStorei(3317,D.unpackAlignment);const Ge=F.getParameter(3314),ft=F.getParameter(32878),zt=F.getParameter(3316),fn=F.getParameter(3315),Jn=F.getParameter(32877),pt=G.isCompressedTexture?G.mipmaps[0]:G.image;F.pixelStorei(3314,pt.width),F.pixelStorei(32878,pt.height),F.pixelStorei(3316,E.min.x),F.pixelStorei(3315,E.min.y),F.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Be,H,N.x,N.y,N.z,Te,De,Oe,Ue,Ze,pt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Be,H,N.x,N.y,N.z,Te,De,Oe,Ue,pt.data)):F.texSubImage3D(Be,H,N.x,N.y,N.z,Te,De,Oe,Ue,Ze,pt),F.pixelStorei(3314,Ge),F.pixelStorei(32878,ft),F.pixelStorei(3316,zt),F.pixelStorei(3315,fn),F.pixelStorei(32877,Jn),H===0&&D.generateMipmaps&&F.generateMipmap(Be),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(pl.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Su extends pl{}Su.prototype.isWebGL1Renderer=!0;class ga{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new ga(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class xa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new xa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class wu extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _a{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ns,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Gt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new A;class yi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ml extends Lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bi;const gs=new A,Gi=new A,Vi=new A,Hi=new Y,xs=new Y,Tu=new Ce,Ar=new A,_s=new A,Er=new A,_c=new Y,ja=new Y,yc=new Y;class Au extends We{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _a(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new yi(n,3,0,!1)),Bi.setAttribute("uv",new yi(n,2,3,!1))}this.geometry=Bi,this.material=e!==void 0?e:new ml,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Cr(Ar.set(-.5,-.5,0),Vi,a,Gi,i,s),Cr(_s.set(.5,-.5,0),Vi,a,Gi,i,s),Cr(Er.set(.5,.5,0),Vi,a,Gi,i,s),_c.set(0,0),ja.set(1,0),yc.set(1,1);let o=e.ray.intersectTriangle(Ar,_s,Er,!1,gs);if(o===null&&(Cr(_s.set(-.5,.5,0),Vi,a,Gi,i,s),ja.set(0,1),o=e.ray.intersectTriangle(Ar,Er,_s,!1,gs),o===null))return;const l=e.ray.origin.distanceTo(gs);l<e.near||l>e.far||t.push({distance:l,point:gs.clone(),uv:Zt.getUV(gs,Ar,_s,Er,_c,ja,yc,new Y),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cr(r,e,t,n,i,s){Hi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(xs.x=s*Hi.x-i*Hi.y,xs.y=i*Hi.x+s*Hi.y):xs.copy(Hi),r.copy(e),r.x+=xs.x,r.y+=xs.y,r.applyMatrix4(Tu)}const Lr=new A,vc=new A;class Eu extends We{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Lr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Lr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Lr.setFromMatrixPosition(e.matrixWorld),vc.setFromMatrixPosition(this.matrixWorld);const n=Lr.distanceTo(vc)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Mc=new A,bc=new $e,Sc=new $e,Rx=new A,wc=new Ce;class Cu extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;bc.fromBufferAttribute(i.attributes.skinIndex,e),Sc.fromBufferAttribute(i.attributes.skinWeight,e),Mc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Sc.getComponent(s);if(a!==0){const o=bc.getComponent(s);wc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rx.copy(Mc).applyMatrix4(wc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gl extends We{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $i extends dt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ct,h=ct,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new Ce,Px=new Ce;class ya{constructor(e=[],t=[]){this.uuid=Gt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Px;Tc.multiplyMatrices(o,t[s]),Tc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ya(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ou(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $i(t,e,e,Bt,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new gl),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class es extends Xe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ac=new Ce,Ec=new Ce,Rr=[],Ix=new Ce,ys=new at;class Lu extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Ix)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Ac),Ec.multiplyMatrices(n,Ac),ys.matrixWorld=Ec,ys.raycast(e,Rr);for(let a=0,o=Rr.length;a<o;a++){const l=Rr[a];l.instanceId=s,l.object=this,t.push(l)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Nt extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new A,Lc=new A,Rc=new Ce,Qa=new Ys,Pr=new Si;class Xn extends We{constructor(e=new Fe,t=new Nt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Cc.fromBufferAttribute(t,i-1),Lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Cc.distanceTo(Lc);e.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;Rc.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(Rc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,d=new A,u=new A,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const _=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=_,v=y-1;x<v;x+=f){const b=m.getX(x),T=m.getX(x+1);if(c.fromBufferAttribute(g,b),h.fromBufferAttribute(g,T),Qa.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(u);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=_,v=y-1;x<v;x+=f){if(c.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),Qa.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Pc=new A,Ic=new A;class dn extends Xn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pc.distanceTo(Ic);e.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ru extends Xn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xl extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dc=new Ce,Xo=new Ys,Ir=new Si,Dr=new A;class Pu extends We{constructor(e=new Fe,t=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Dc.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(Dc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,p=f;m<p;m++){const g=c.getX(m);Dr.fromBufferAttribute(d,g),Fc(Dr,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,p=f;m<p;m++)Dr.fromBufferAttribute(d,m),Fc(Dr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fc(r,e,t,n,i,s,a){const o=Xo.distanceSqToPoint(r);if(o<t){const l=new A;Xo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Dx extends dt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:ht,this.magFilter=s!==void 0?s:ht,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Fx extends dt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=ct,this.minFilter=ct,this.generateMipmaps=!1,this.needsUpdate=!0}}class _l extends dt{constructor(e,t,n,i,s,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Nx extends _l{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ct}}class zx extends dt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Y:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],s=[],a=[],o=new A,l=new Ce;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class va extends sn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Y,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Iu extends va{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Fr=new A,eo=new yl,to=new yl,no=new yl;class Du extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Fr.subVectors(i[0],i[1]).add(i[0]),c=Fr);const d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Fr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);p<1e-4&&(p=1),m<1e-4&&(m=p),g<1e-4&&(g=p),eo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,p,g),to.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,p,g),no.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,p,g)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),to.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),no.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(eo.calc(l),to.calc(l),no.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function kx(r,e){const t=1-r;return t*t*e}function Ox(r,e){return 2*(1-r)*r*e}function Ux(r,e){return r*r*e}function As(r,e,t,n){return kx(r,e)+Ox(r,t)+Ux(r,n)}function Bx(r,e){const t=1-r;return t*t*t*e}function Gx(r,e){const t=1-r;return 3*t*t*r*e}function Vx(r,e){return 3*(1-r)*r*r*e}function Hx(r,e){return r*r*r*e}function Es(r,e,t,n,i){return Bx(r,e)+Gx(r,t)+Vx(r,n)+Hx(r,i)}class vl extends sn{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,i.x,s.x,a.x,o.x),Es(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fu extends sn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,i.x,s.x,a.x,o.x),Es(e,i.y,s.y,a.y,o.y),Es(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ma extends sn{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nu extends sn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ml extends sn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(As(e,i.x,s.x,a.x),As(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bl extends sn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(As(e,i.x,s.x,a.x),As(e,i.y,s.y,a.y),As(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sl extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Nc(o,l.x,c.x,h.x,d.x),Nc(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Iu,CatmullRomCurve3:Du,CubicBezierCurve:vl,CubicBezierCurve3:Fu,EllipseCurve:va,LineCurve:Ma,LineCurve3:Nu,QuadraticBezierCurve:Ml,QuadraticBezierCurve3:bl,SplineCurve:Sl});class zu extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ma(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new wl[i.type]().fromJSON(i))}return this}}class Os extends zu{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ma(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ml(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new vl(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new va(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ss extends Fe{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,d=new A,u=new Y,f=new A,m=new A,p=new A;let g=0,_=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,_=e[y+1].y-e[y].y,f.x=_*1,f.y=-g,f.z=_*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(p.x,p.y,p.z);break;default:g=e[y+1].x-e[y].x,_=e[y+1].y-e[y].y,f.x=_*1,f.y=-g,f.z=_*0,m.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(m)}for(let y=0;y<=t;y++){const x=n+y*h*i,v=Math.sin(x),b=Math.cos(x);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*v,d.y=e[T].y,d.z=e[T].x*b,a.push(d.x,d.y,d.z),u.x=y/t,u.y=T/(e.length-1),o.push(u.x,u.y);const L=l[3*T+0]*v,M=l[3*T+1],S=l[3*T+0]*b;c.push(L,M,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,b=v,T=v+e.length,L=v+e.length+1,M=v+1;s.push(b,T,M),s.push(L,M,T)}this.setIndex(s),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.points,e.segments,e.phiStart,e.phiLength)}}class Js extends ss{constructor(e=1,t=1,n=4,i=8){const s=new Os;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Js(e.radius,e.length,e.capSegments,e.radialSegments)}}class $s extends Fe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new A,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wi extends Fe{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const p=[],g=n/2;let _=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function y(){const v=new A,b=new A;let T=0;const L=(t-e)/n;for(let M=0;M<=s;M++){const S=[],R=M/s,k=R*(t-e)+e;for(let W=0;W<=i;W++){const z=W/i,I=z*l+o,U=Math.sin(I),J=Math.cos(I);b.x=k*U,b.y=-R*n+g,b.z=k*J,d.push(b.x,b.y,b.z),v.set(U,L,J).normalize(),u.push(v.x,v.y,v.z),f.push(z,1-R),S.push(m++)}p.push(S)}for(let M=0;M<i;M++)for(let S=0;S<s;S++){const R=p[S][M],k=p[S+1][M],W=p[S+1][M+1],z=p[S][M+1];h.push(R,k,z),h.push(k,W,z),T+=6}c.addGroup(_,T,0),_+=T}function x(v){const b=m,T=new Y,L=new A;let M=0;const S=v===!0?e:t,R=v===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),m++;const k=m;for(let W=0;W<=i;W++){const I=W/i*l+o,U=Math.cos(I),J=Math.sin(I);L.x=S*J,L.y=g*R,L.z=S*U,d.push(L.x,L.y,L.z),u.push(0,R,0),T.x=U*.5+.5,T.y=J*.5*R+.5,f.push(T.x,T.y),m++}for(let W=0;W<i;W++){const z=b+W,I=k+W;v===!0?h.push(I,I+1,z):h.push(I+1,I,z),M+=3}c.addGroup(_,M,v===!0?1:2),_+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ks extends wi{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ks(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ln extends Fe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(s.slice(),3)),this.setAttribute("uv",new ge(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new A,v=new A,b=new A;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],v),f(t[T+2],b),l(x,v,b,y)}function l(y,x,v,b){const T=b+1,L=[];for(let M=0;M<=T;M++){L[M]=[];const S=y.clone().lerp(v,M/T),R=x.clone().lerp(v,M/T),k=T-M;for(let W=0;W<=k;W++)W===0&&M===T?L[M][W]=S:L[M][W]=S.clone().lerp(R,W/k)}for(let M=0;M<T;M++)for(let S=0;S<2*(T-M)-1;S++){const R=Math.floor(S/2);S%2===0?(u(L[M][R+1]),u(L[M+1][R]),u(L[M][R])):(u(L[M][R+1]),u(L[M+1][R+1]),u(L[M+1][R]))}}function c(y){const x=new A;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const y=new A;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=g(y)/2/Math.PI+.5,b=_(y)/Math.PI+.5;a.push(v,1-b)}m(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],b=a[y+4],T=Math.max(x,v,b),L=Math.min(x,v,b);T>.9&&L<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){const y=new A,x=new A,v=new A,b=new A,T=new Y,L=new Y,M=new Y;for(let S=0,R=0;S<s.length;S+=9,R+=6){y.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),T.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),b.copy(y).add(x).add(v).divideScalar(3);const k=g(b);p(T,R+0,y,k),p(L,R+2,x,k),p(M,R+4,v,k)}}function p(y,x,v,b){b<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.vertices,e.indices,e.radius,e.details)}}class js extends Ln{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new js(e.radius,e.detail)}}const Nr=new A,zr=new A,io=new A,kr=new Zt;class ku extends Fe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(gi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:p,b:g,c:_}=kr;if(p.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),kr.getNormal(io),d[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=d[y],b=d[x],T=kr[h[y]],L=kr[h[x]],M=`${v}_${b}`,S=`${b}_${v}`;S in u&&u[S]?(io.dot(u[S].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(L.x,L.y,L.z)),u[S]=null):M in u||(u[M]={index0:c[y],index1:c[x],normal:io.clone()})}}for(const m in u)if(u[m]){const{index0:p,index1:g}=u[m];Nr.fromBufferAttribute(o,p),zr.fromBufferAttribute(o,g),f.push(Nr.x,Nr.y,Nr.z),f.push(zr.x,zr.y,zr.z)}this.setAttribute("position",new ge(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi extends Os{constructor(e){super(e),this.uuid=Gt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Os().fromJSON(i))}return this}}const Wx={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Ou(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,f;if(n&&(s=Jx(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)d=r[m],u=r[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Us(s,a,t,o,l,f,0),a}};function Ou(r,e,t,n,i){let s,a;if(i===a_(r,e,t,n)>0)for(s=e;s<t;s+=n)a=zc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=zc(s,r[s],r[s+1],a);return a&&ba(a,a.next)&&(Gs(a),a=a.next),a}function vi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ba(t,t.next)||st(t.prev,t,t.next)===0)){if(Gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Us(r,e,t,n,i,s,a){if(!r)return;!a&&s&&e_(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Xx(r,n,i,s):qx(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Gs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Yx(vi(r),e,t),Us(r,e,t,n,i,s,2)):a===2&&Zx(r,e,t,n,i,s):Us(vi(r),e,t,n,i,s,1);break}}}function qx(r){const e=r.prev,t=r,n=r.next;if(st(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Zi(i,o,s,l,a,c,m.x,m.y)&&st(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xx(r,e,t,n){const i=r.prev,s=r,a=r.next;if(st(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,p=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,_=Yo(f,m,e,t,n),y=Yo(p,g,e,t,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=_&&v&&v.z<=y;){if(x.x>=f&&x.x<=p&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Zi(o,h,l,d,c,u,x.x,x.y)&&st(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=p&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Zi(o,h,l,d,c,u,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=f&&x.x<=p&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Zi(o,h,l,d,c,u,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=p&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Zi(o,h,l,d,c,u,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Yx(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ba(i,s)&&Uu(i,n,n.next,s)&&Bs(i,s)&&Bs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Gs(n),Gs(n.next),n=r=s),n=n.next}while(n!==r);return vi(n)}function Zx(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&i_(a,o)){let l=Bu(a,o);a=vi(a,a.next),l=vi(l,l.next),Us(a,e,t,n,i,s,0),Us(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Jx(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Ou(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(n_(c));for(i.sort($x),s=0;s<i.length;s++)t=Kx(i[s],t);return t}function $x(r,e){return r.x-e.x}function Kx(r,e){const t=jx(r,e);if(!t)return e;const n=Bu(t,r);return vi(n,n.next),vi(t,t.next)}function jx(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,d;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Zi(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),Bs(t,r)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&Qx(i,t)))&&(i=t,h=d)),t=t.next;while(t!==o);return i}function Qx(r,e){return st(r.prev,r,e.prev)<0&&st(e.next,r,r.next)<0}function e_(r,e,t,n){let i=r;do i.z===0&&(i.z=Yo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,t_(i)}function t_(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Yo(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function n_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Zi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function i_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!s_(r,e)&&(Bs(r,e)&&Bs(e,r)&&r_(r,e)&&(st(r.prev,r,e.prev)||st(r,e.prev,e))||ba(r,e)&&st(r.prev,r,r.next)>0&&st(e.prev,e,e.next)>0)}function st(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ba(r,e){return r.x===e.x&&r.y===e.y}function Uu(r,e,t,n){const i=Ur(st(r,e,t)),s=Ur(st(r,e,n)),a=Ur(st(t,n,r)),o=Ur(st(t,n,e));return!!(i!==s&&a!==o||i===0&&Or(r,t,e)||s===0&&Or(r,n,e)||a===0&&Or(t,r,n)||o===0&&Or(t,e,n))}function Or(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ur(r){return r>0?1:r<0?-1:0}function s_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Bs(r,e){return st(r.prev,r,r.next)<0?st(r,e,r.next)>=0&&st(r,r.prev,e)>=0:st(r,e,r.prev)<0||st(r,r.next,e)<0}function r_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Bu(r,e){const t=new Zo(r.i,r.x,r.y),n=new Zo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function zc(r,e,t,n){const i=new Zo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Zo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a_(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class hn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return hn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];kc(e),Oc(n,e);let a=e.length;t.forEach(kc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Oc(n,t[l]);const o=Wx.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function kc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Oc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Qs extends Fe{constructor(e=new xi([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:o_;let x,v=!1,b,T,L,M;_&&(x=_.getSpacedPoints(h),v=!0,u=!1,b=_.computeFrenetFrames(h,!1),T=new A,L=new A,M=new A),u||(g=0,f=0,m=0,p=0);const S=o.extractPoints(c);let R=S.shape;const k=S.holes;if(!hn.isClockWise(R)){R=R.reverse();for(let Z=0,K=k.length;Z<K;Z++){const se=k[Z];hn.isClockWise(se)&&(k[Z]=se.reverse())}}const z=hn.triangulateShape(R,k),I=R;for(let Z=0,K=k.length;Z<K;Z++){const se=k[Z];R=R.concat(se)}function U(Z,K,se){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(K,se)}const J=R.length,te=z.length;function q(Z,K,se){let Me,oe,Re;const Se=Z.x-K.x,Pe=Z.y-K.y,Qe=se.x-Z.x,Je=se.y-Z.y,C=Se*Se+Pe*Pe,w=Se*Je-Pe*Qe;if(Math.abs(w)>Number.EPSILON){const B=Math.sqrt(C),ne=Math.sqrt(Qe*Qe+Je*Je),ie=K.x-Pe/B,ce=K.y+Se/B,be=se.x-Je/ne,de=se.y+Qe/ne,X=((be-ie)*Je-(de-ce)*Qe)/(Se*Je-Pe*Qe);Me=ie+Se*X-Z.x,oe=ce+Pe*X-Z.y;const Ae=Me*Me+oe*oe;if(Ae<=2)return new Y(Me,oe);Re=Math.sqrt(Ae/2)}else{let B=!1;Se>Number.EPSILON?Qe>Number.EPSILON&&(B=!0):Se<-Number.EPSILON?Qe<-Number.EPSILON&&(B=!0):Math.sign(Pe)===Math.sign(Je)&&(B=!0),B?(Me=-Pe,oe=Se,Re=Math.sqrt(C)):(Me=Se,oe=Pe,Re=Math.sqrt(C/2))}return new Y(Me/Re,oe/Re)}const $=[];for(let Z=0,K=I.length,se=K-1,Me=Z+1;Z<K;Z++,se++,Me++)se===K&&(se=0),Me===K&&(Me=0),$[Z]=q(I[Z],I[se],I[Me]);const ee=[];let ue,O=$.concat();for(let Z=0,K=k.length;Z<K;Z++){const se=k[Z];ue=[];for(let Me=0,oe=se.length,Re=oe-1,Se=Me+1;Me<oe;Me++,Re++,Se++)Re===oe&&(Re=0),Se===oe&&(Se=0),ue[Me]=q(se[Me],se[Re],se[Se]);ee.push(ue),O=O.concat(ue)}for(let Z=0;Z<g;Z++){const K=Z/g,se=f*Math.cos(K*Math.PI/2),Me=m*Math.sin(K*Math.PI/2)+p;for(let oe=0,Re=I.length;oe<Re;oe++){const Se=U(I[oe],$[oe],Me);le(Se.x,Se.y,-se)}for(let oe=0,Re=k.length;oe<Re;oe++){const Se=k[oe];ue=ee[oe];for(let Pe=0,Qe=Se.length;Pe<Qe;Pe++){const Je=U(Se[Pe],ue[Pe],Me);le(Je.x,Je.y,-se)}}}const j=m+p;for(let Z=0;Z<J;Z++){const K=u?U(R[Z],O[Z],j):R[Z];v?(L.copy(b.normals[0]).multiplyScalar(K.x),T.copy(b.binormals[0]).multiplyScalar(K.y),M.copy(x[0]).add(L).add(T),le(M.x,M.y,M.z)):le(K.x,K.y,0)}for(let Z=1;Z<=h;Z++)for(let K=0;K<J;K++){const se=u?U(R[K],O[K],j):R[K];v?(L.copy(b.normals[Z]).multiplyScalar(se.x),T.copy(b.binormals[Z]).multiplyScalar(se.y),M.copy(x[Z]).add(L).add(T),le(M.x,M.y,M.z)):le(se.x,se.y,d/h*Z)}for(let Z=g-1;Z>=0;Z--){const K=Z/g,se=f*Math.cos(K*Math.PI/2),Me=m*Math.sin(K*Math.PI/2)+p;for(let oe=0,Re=I.length;oe<Re;oe++){const Se=U(I[oe],$[oe],Me);le(Se.x,Se.y,d+se)}for(let oe=0,Re=k.length;oe<Re;oe++){const Se=k[oe];ue=ee[oe];for(let Pe=0,Qe=Se.length;Pe<Qe;Pe++){const Je=U(Se[Pe],ue[Pe],Me);v?le(Je.x,Je.y+x[h-1].y,x[h-1].x+se):le(Je.x,Je.y,d+se)}}}ae(),F();function ae(){const Z=i.length/3;if(u){let K=0,se=J*K;for(let Me=0;Me<te;Me++){const oe=z[Me];pe(oe[2]+se,oe[1]+se,oe[0]+se)}K=h+g*2,se=J*K;for(let Me=0;Me<te;Me++){const oe=z[Me];pe(oe[0]+se,oe[1]+se,oe[2]+se)}}else{for(let K=0;K<te;K++){const se=z[K];pe(se[2],se[1],se[0])}for(let K=0;K<te;K++){const se=z[K];pe(se[0]+J*h,se[1]+J*h,se[2]+J*h)}}n.addGroup(Z,i.length/3-Z,0)}function F(){const Z=i.length/3;let K=0;me(I,K),K+=I.length;for(let se=0,Me=k.length;se<Me;se++){const oe=k[se];me(oe,K),K+=oe.length}n.addGroup(Z,i.length/3-Z,1)}function me(Z,K){let se=Z.length;for(;--se>=0;){const Me=se;let oe=se-1;oe<0&&(oe=Z.length-1);for(let Re=0,Se=h+g*2;Re<Se;Re++){const Pe=J*Re,Qe=J*(Re+1),Je=K+Me+Pe,C=K+oe+Pe,w=K+oe+Qe,B=K+Me+Qe;xe(Je,C,w,B)}}}function le(Z,K,se){l.push(Z),l.push(K),l.push(se)}function pe(Z,K,se){ve(Z),ve(K),ve(se);const Me=i.length/3,oe=y.generateTopUV(n,i,Me-3,Me-2,Me-1);Le(oe[0]),Le(oe[1]),Le(oe[2])}function xe(Z,K,se,Me){ve(Z),ve(K),ve(Me),ve(K),ve(se),ve(Me);const oe=i.length/3,Re=y.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);Le(Re[0]),Le(Re[1]),Le(Re[3]),Le(Re[1]),Le(Re[2]),Le(Re[3])}function ve(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function Le(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return l_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new wl[i.type]().fromJSON(i)),new Qs(n,e.options)}}const o_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Y(s,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],m=e[i*3+2],p=e[s*3],g=e[s*3+1],_=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-d),new Y(u,1-m),new Y(p,1-_)]:[new Y(o,1-l),new Y(h,1-d),new Y(f,1-m),new Y(g,1-_)]}};function l_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class er extends Ln{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new er(e.radius,e.detail)}}class rs extends Ln{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rs(e.radius,e.detail)}}class tr extends Fe{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new A,m=new Y;for(let p=0;p<=i;p++){for(let g=0;g<=n;g++){const _=s+g/n*a;f.x=d*Math.cos(_),f.y=d*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let p=0;p<i;p++){const g=p*(n+1);for(let _=0;_<n;_++){const y=_+g,x=y,v=y+n+1,b=y+n+2,T=y+1;o.push(x,v,T),o.push(v,b,T)}}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nr extends Fe{constructor(e=new xi([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(i,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(a,2));function c(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const m=u.holes;hn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,_=m.length;g<_;g++){const y=m[g];hn.isClockWise(y)===!0&&(m[g]=y.reverse())}const p=hn.triangulateShape(f,m);for(let g=0,_=m.length;g<_;g++){const y=m[g];f=f.concat(y)}for(let g=0,_=f.length;g<_;g++){const y=f[g];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let g=0,_=p.length;g<_;g++){const y=p[g],x=y[0]+d,v=y[1]+d,b=y[2]+d;n.push(x,v,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return c_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new nr(n,e.curveSegments)}}function c_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class as extends Fe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new A,u=new A,f=[],m=[],p=[],g=[];for(let _=0;_<=n;_++){const y=[],x=_/n;let v=0;_==0&&a==0?v=.5/t:_==n&&l==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const T=b/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),g.push(T+v,1-x),y.push(c++)}h.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const x=h[_][y+1],v=h[_][y],b=h[_+1][y],T=h[_+1][y+1];(_!==0||a>0)&&f.push(x,v,T),(_!==n-1||l<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends Ln{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ir(e.radius,e.detail)}}class sr extends Fe{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new A,d=new A,u=new A;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const p=m/i*s,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(p),d.y=(e+t*Math.cos(g))*Math.sin(p),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const p=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,_=(i+1)*(f-1)+m,y=(i+1)*f+m;a.push(p,g,y),a.push(g,_,y)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rr extends Fe{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],d=new A,u=new A,f=new A,m=new A,p=new A,g=new A,_=new A;for(let x=0;x<=n;++x){const v=x/n*s*Math.PI*2;y(v,s,a,e,f),y(v+.01,s,a,e,m),g.subVectors(m,f),_.addVectors(m,f),p.crossVectors(g,_),_.crossVectors(p,g),p.normalize(),_.normalize();for(let b=0;b<=i;++b){const T=b/i*Math.PI*2,L=-t*Math.cos(T),M=t*Math.sin(T);d.x=f.x+(L*_.x+M*p.x),d.y=f.y+(L*_.y+M*p.y),d.z=f.z+(L*_.z+M*p.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(x/n),h.push(b/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){const b=(i+1)*(x-1)+(v-1),T=(i+1)*x+(v-1),L=(i+1)*x+v,M=(i+1)*(x-1)+v;o.push(b,T,M),o.push(T,L,M)}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2));function y(x,v,b,T,L){const M=Math.cos(x),S=Math.sin(x),R=b/v*x,k=Math.cos(R);L.x=T*(2+k)*.5*M,L.y=T*(2+k)*S*.5,L.z=T*Math.sin(R)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ar extends Fe{constructor(e=new bl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new Y;let h=new A;const d=[],u=[],f=[],m=[];p(),this.setIndex(m),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function p(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),y(),_()}function g(x){h=e.getPointAt(x/t,h);const v=a.normals[x],b=a.binormals[x];for(let T=0;T<=i;T++){const L=T/i*Math.PI*2,M=Math.sin(L),S=-Math.cos(L);l.x=S*v.x+M*b.x,l.y=S*v.y+M*b.y,l.z=S*v.z+M*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function _(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){const b=(i+1)*(x-1)+(v-1),T=(i+1)*x+(v-1),L=(i+1)*x+v,M=(i+1)*(x-1)+v;m.push(b,T,M),m.push(T,L,M)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)c.x=x/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ar(new wl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gu extends Fe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new A,s=new A;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let m=u,p=u+f;m<p;m+=3)for(let g=0;g<3;g++){const _=o.getX(m+g),y=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,y),Uc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Uc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Uc(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Bc=Object.freeze({__proto__:null,BoxGeometry:Cn,CapsuleGeometry:Js,CircleGeometry:$s,ConeGeometry:Ks,CylinderGeometry:wi,DodecahedronGeometry:js,EdgesGeometry:ku,ExtrudeGeometry:Qs,IcosahedronGeometry:er,LatheGeometry:ss,OctahedronGeometry:rs,PlaneGeometry:ns,PolyhedronGeometry:Ln,RingGeometry:tr,ShapeGeometry:nr,SphereGeometry:as,TetrahedronGeometry:ir,TorusGeometry:sr,TorusKnotGeometry:rr,TubeGeometry:ar,WireframeGeometry:Gu});class Vu extends Lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new he(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hu extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tl extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wu extends Tl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qu extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xu extends Lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Yu extends Lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Zu extends Lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ju extends Lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new he(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $u extends Nt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Xt(r,e,t){return Al(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function di(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Al(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ku(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Jo(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function El(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function h_(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){d.push(c.times[f]);for(let p=0;p<h;++p)u.push(c.values[f*h+p])}}d.length!==0&&(c.times=di(d,c.times.constructor),c.values=di(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function u_(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(_){return _.name===o.name&&_.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const m=o.times.length-1;let p;if(s<=o.times[0]){const _=h,y=d-h;p=Xt(o.values,_,y)}else if(s>=o.times[m]){const _=m*d+h,y=_+d-h;p=Xt(o.values,_,y)}else{const _=o.createInterpolant(),y=h,x=d-h;_.evaluate(s),p=Xt(_.resultBuffer,y,x)}l==="quaternion"&&new Ft().fromArray(p).normalize().conjugate().toArray(p);const g=c.times.length;for(let _=0;_<g;++_){const y=_*f+u;if(l==="quaternion")Ft.multiplyQuaternionsFlat(c.values,y,p,0,c.values,y);else{const x=f-u*2;for(let v=0;v<x;++v)c.values[y+v]-=p[v]}}}return r.blendMode=sl,r}const d_={arraySlice:Xt,convertArray:di,isTypedArray:Al,getKeyframeOrder:Ku,sortedArray:Jo,flattenJSON:El,subclip:h_,makeClipAdditive:u_};class or{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ju extends or{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ci,endingEnd:ci}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hi:s=e,o=2*t-n;break;case Fs:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hi:a=e,l=2*n-t;break;case Fs:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),p=m*m,g=p*m,_=-u*g+2*u*p-u*m,y=(1+u)*g+(-1.5-2*u)*p+(-.5+u)*m+1,x=(-1-f)*g+(1.5+f)*p+.5*m,v=f*g-f*p;for(let b=0;b!==o;++b)s[b]=_*a[h+b]+y*a[c+b]+x*a[l+b]+v*a[d+b];return s}}class Cl extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class Qu extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=di(t,this.TimeBufferType),this.values=di(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:di(e.times,Array),values:di(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ju(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Xt(n,s,a),this.values=Xt(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Al(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Xt(this.times),t=Xt(this.values),n=this.getValueSize(),i=this.getInterpolation()===Qr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const p=t[d+m];if(p!==t[u+m]||p!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Xt(e,0,a),this.values=Xt(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Xt(this.times,0),t=Xt(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Ds;class Ti extends rn{}Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Is;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Ll extends rn{}Ll.prototype.ValueTypeName="color";class Vs extends rn{}Vs.prototype.ValueTypeName="number";class ed extends or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(s,0,a,c-o,a,c,l);return s}}class os extends rn{InterpolantFactoryMethodLinear(e){return new ed(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.DefaultInterpolation=Ds;os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ai extends rn{}Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Is;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends rn{}Hs.prototype.ValueTypeName="vector";class Ws{constructor(e,t=-1,n,i=ca){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(rn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ku(l);l=Jo(l,1,h),c=Jo(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Vs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,p){if(f.length!==0){const g=[],_=[];El(f,g,_,m),g.length!==0&&p.push(new d(u,g,_))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let p=0;p<u[m].morphTargets.length;p++)f[u[m].morphTargets[p]]=-1;for(const p in f){const g=[],_=[];for(let y=0;y!==u[m].morphTargets.length;++y){const x=u[m];g.push(x.time),_.push(x.morphTarget===p?1:0)}i.push(new Vs(".morphTargetInfluence["+p+"]",g,_))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(Hs,f+".position",u,"pos",i),n(os,f+".quaternion",u,"rot",i),n(Hs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function f_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return Ll;case"quaternion":return os;case"bool":case"boolean":return Ti;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function p_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f_(r.type);if(r.times===void 0){const t=[],n=[];El(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rl{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const td=new Rl;class Ht{constructor(e){this.manager=e!==void 0?e:td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const yn={};class m_ extends Error{constructor(e,t){super(e),this.response=t}}class An extends Ht{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:i});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yn[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,m=f!==0;let p=0;const g=new ReadableStream({start(_){y();function y(){d.read().then(({done:x,value:v})=>{if(x)_.close();else{p+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:p,total:f});for(let T=0,L=h.length;T<L;T++){const M=h[T];M.onProgress&&M.onProgress(b)}_.enqueue(v),y()}})}}});return new Response(g)}else throw new m_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Mi.add(e,c);const h=yn[e];delete yn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=yn[e];if(h===void 0)throw this.manager.itemError(e),c;delete yn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class g_ extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new An(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ws.parse(e[n]);t.push(i)}return t}}class x_ extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new _l,l=new An(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const f=s.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=ht),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=s.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)a[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+p]),a[m].format=u.format,a[m].width=u.width,a[m].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=ht),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class qs extends Ht{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ks("img");function l(){h(),Mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class __ extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=new Zs,a=new qs(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class y_ extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new $i,o=new An(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);!c||(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ct,a.wrapT=c.wrapT!==void 0?c.wrapT:Ct,a.magFilter=c.magFilter!==void 0?c.magFilter:ht,a.minFilter=c.minFilter!==void 0?c.minFilter:ht,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Hn),c.mipmapCount===1&&(a.minFilter=ht),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class nd extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=new dt,a=new qs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zn extends We{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class id extends Zn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const so=new Ce,Gc=new A,Vc=new A;class Pl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class v_ extends Pl{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sd extends Zn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new v_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hc=new Ce,vs=new A,ro=new A;class M_ extends Pl{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(vs),ro.copy(n.position),ro.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ro),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc)}}class rd extends Zn{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new M_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class b_ extends Pl{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ad extends Zn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new b_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class od extends Zn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ld extends Zn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class cd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Sa extends Zn{constructor(e=new cd,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class wa extends Ht{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new An(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=wa.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new he().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new he().setHex(a.value);break;case"v2":i.uniforms[s].value=new Y().fromArray(a.value);break;case"v3":i.uniforms[s].value=new A().fromArray(a.value);break;case"v4":i.uniforms[s].value=new $e().fromArray(a.value);break;case"m3":i.uniforms[s].value=new wt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Ce().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new Y().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Y().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Vu,SpriteMaterial:ml,RawShaderMaterial:Hu,ShaderMaterial:un,PointsMaterial:xl,MeshPhysicalMaterial:Wu,MeshStandardMaterial:Tl,MeshPhongMaterial:qu,MeshToonMaterial:Xu,MeshNormalMaterial:Yu,MeshLambertMaterial:Zu,MeshDepthMaterial:dl,MeshDistanceMaterial:fl,MeshBasicMaterial:je,MeshMatcapMaterial:Ju,LineDashedMaterial:$u,LineBasicMaterial:Nt,Material:Lt};return new t[e]}}class $o{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hd extends Fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ud extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new An(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],_=s(f,g.buffer),y=Xi(g.type,_),x=new _a(y,g.stride);return x.uuid=g.uuid,t[m]=x,x}function s(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],_=new Uint32Array(g).buffer;return n[m]=_,_}const a=e.isInstancedBufferGeometry?new hd:new Fe,o=e.data.index;if(o!==void 0){const f=Xi(o.type,o.array);a.setIndex(new Xe(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let p;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);p=new yi(g,m.itemSize,m.offset,m.normalized)}else{const g=Xi(m.type,m.array),_=m.isInstancedBufferAttribute?es:Xe;p=new _(g,m.itemSize,m.normalized)}m.name!==void 0&&(p.name=m.name),m.usage!==void 0&&p.setUsage(m.usage),m.updateRange!==void 0&&(p.updateRange.offset=m.updateRange.offset,p.updateRange.count=m.updateRange.count),a.setAttribute(f,p)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],p=[];for(let g=0,_=m.length;g<_;g++){const y=m[g];let x;if(y.isInterleavedBufferAttribute){const v=i(e.data,y.data);x=new yi(v,y.itemSize,y.offset,y.normalized)}else{const v=Xi(y.type,y.array);x=new Xe(v,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),p.push(x)}a.morphAttributes[f]=p}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,m=d.length;f!==m;++f){const p=d[f];a.addGroup(p.start,p.count,p.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const f=new A;u.center!==void 0&&f.fromArray(u.center),a.boundingSphere=new Si(f,u.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class S_ extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?$o.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new An(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?$o.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new An(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new xi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new ya().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new ud;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Bc?o=Bc[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new wa;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ws.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Xi(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Rl(t);s=new qs(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const f=[];for(let m=0,p=u.length;m<p;m++){const g=u[m],_=o(g);_!==null&&(_ instanceof HTMLImageElement?f.push(_):f.push(new $i(_.data,_.width,_.height)))}i[d.uuid]=new ui(f)}else{const f=o(d.url);i[d.uuid]=new ui(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Xi(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new qs(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=await s(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new $i(m.data,m.width,m.height)))}n[l.uuid]=new ui(h)}else{const h=await s(l.url);n[l.uuid]=new ui(h)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Zs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new $i:h=new dt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,w_)),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Wc),h.wrapT=n(o.wrap[1],Wc)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.encoding!==void 0&&(h.encoding=o.encoding),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,qc)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,qc)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,s){let a;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let m=0,p=u.length;m<p;m++){const g=u[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(e.type){case"Scene":a=new wu,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new he(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new xa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ga(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":a=new St(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new pa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new od(e.color,e.intensity);break;case"DirectionalLight":a=new ad(e.color,e.intensity);break;case"PointLight":a=new rd(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ld(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new sd(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new id(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Sa().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),a=new Cu(h,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),a=new at(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);const u=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Lu(h,d,u),a.instanceMatrix=new es(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new es(new Float32Array(m.array),m.itemSize));break;case"LOD":a=new Eu;break;case"Line":a=new Xn(o(e.geometry),l(e.material));break;case"LineLoop":a=new Ru(o(e.geometry),l(e.material));break;case"LineSegments":a=new dn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Pu(o(e.geometry),l(e.material));break;case"Sprite":a=new Au(l(e.material));break;case"Group":a=new Un;break;case"Bone":a=new gl;break;default:a=new We}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],t,n,i,s))}if(e.animations!==void 0){const u=e.animations;for(let f=0;f<u.length;f++){const m=u[f];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let f=0;f<u.length;f++){const m=u[f],p=a.getObjectByProperty("uuid",m.object);p!==void 0&&a.addLevel(p,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const w_={UVMapping:la,CubeReflectionMapping:Gn,CubeRefractionMapping:Vn,EquirectangularReflectionMapping:Cs,EquirectangularRefractionMapping:Ls,CubeUVReflectionMapping:ts},Wc={RepeatWrapping:Rs,ClampToEdgeWrapping:Ct,MirroredRepeatWrapping:Ps},qc={NearestFilter:ct,NearestMipmapNearestFilter:sa,NearestMipmapLinearFilter:ws,LinearFilter:ht,LinearMipmapNearestFilter:nl,LinearMipmapLinearFilter:Hn};class T_ extends Ht{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Mi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Br;class Il{static getContext(){return Br===void 0&&(Br=new(window.AudioContext||window.webkitAudioContext)),Br}static setContext(e){Br=e}}class A_ extends Ht{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new An(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);Il.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class E_ extends Sa{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new he().set(e),s=new he().set(t),a=new A(i.r,i.g,i.b),o=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}class C_ extends Sa{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new he().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Xc=new Ce,Yc=new Ce,ti=new Ce;class L_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new St,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new St,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ti.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(gi*t.fov*.5)/t.zoom;let o,l;Yc.elements[12]=-i,Xc.elements[12]=i,o=-a*t.aspect+s,l=a*t.aspect+s,ti.elements[0]=2*t.near/(l-o),ti.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ti),o=-a*t.aspect-s,l=a*t.aspect-s,ti.elements[0]=2*t.near/(l-o),ti.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ti)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Yc),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Xc)}}class dd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zc(){return(typeof performance>"u"?Date:performance).now()}const ni=new A,Jc=new Ft,R_=new A,ii=new A;class P_ extends We{constructor(){super(),this.type="AudioListener",this.context=Il.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new dd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ni,Jc,R_),ii.set(0,0,-1).applyQuaternion(Jc),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ni.x,i),t.positionY.linearRampToValueAtTime(ni.y,i),t.positionZ.linearRampToValueAtTime(ni.z,i),t.forwardX.linearRampToValueAtTime(ii.x,i),t.forwardY.linearRampToValueAtTime(ii.y,i),t.forwardZ.linearRampToValueAtTime(ii.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ni.x,ni.y,ni.z),t.setOrientation(ii.x,ii.y,ii.z,n.x,n.y,n.z)}}class fd extends We{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const si=new A,$c=new Ft,I_=new A,ri=new A;class D_ extends fd{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(si,$c,I_),ri.set(0,0,1).applyQuaternion($c);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(si.x,n),t.positionY.linearRampToValueAtTime(si.y,n),t.positionZ.linearRampToValueAtTime(si.z,n),t.orientationX.linearRampToValueAtTime(ri.x,n),t.orientationY.linearRampToValueAtTime(ri.y,n),t.orientationZ.linearRampToValueAtTime(ri.z,n)}else t.setPosition(si.x,si.y,si.z),t.setOrientation(ri.x,ri.y,ri.z)}}class F_{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class pd{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Dl="\\[\\]\\.:\\/",N_=new RegExp("["+Dl+"]","g"),Fl="[^"+Dl+"]",z_="[^"+Dl.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",Fl),O_=/(WCOD+)?/.source.replace("WCOD",z_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),B_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),G_=new RegExp("^"+k_+O_+U_+B_+"$"),V_=["material","materials","bones","map"];class H_{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){const t=G_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);V_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=H_;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class W_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Gt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(u);for(let p=0,g=a;p!==g;++p)s[p].push(new qe(u,n[p],i[p]))}else if(m<c){o=e[m];const p=--c,g=e[p];t[g.uuid]=m,e[m]=g,t[f]=p,e[p]=u;for(let _=0,y=a;_!==y;++_){const x=s[_],v=x[p];let b=x[m];x[m]=v,b===void 0&&(b=new qe(u,n[_],i[_])),x[p]=b}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const d=s++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,m=i;f!==m;++f){const p=n[f],g=p[d],_=p[h];p[h]=g,p[d]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<s){const u=--s,f=e[u],m=--a,p=e[m];t[f.uuid]=d,e[d]=f,t[p.uuid]=u,e[u]=p,e.pop();for(let g=0,_=i;g!==_;++g){const y=n[g],x=y[u],v=y[m];y[d]=x,y[u]=v,y.pop()}}else{const u=--a,f=e[u];u>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let m=0,p=i;m!==p;++m){const g=n[m];g[d]=g[u],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(d);for(let u=h,f=l.length;u!==f;++u){const m=l[u];d[u]=new qe(m,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class q_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ci,endingEnd:ci};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case sl:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ca:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===nu;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===eu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hi,i.endingEnd=hi):(e?i.endingStart=this.zeroSlopeAtStart?hi:ci:i.endingStart=Fs,t?i.endingEnd=this.zeroSlopeAtEnd?hi:ci:i.endingEnd=Fs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const X_=new Float32Array(1);class Y_ extends En{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const p=t&&t._propertyBindings[d].binding.parsedPath;m=new pd(qe.create(n,f,p),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Cl(new Float32Array(2),new Float32Array(2),1,X_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Ws.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ca),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new q_(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ws.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Nl{constructor(e){this.value=e}clone(){return new Nl(this.value.clone===void 0?this.value:this.value.clone())}}let Z_=0;class J_ extends En{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.usage=Ns,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class $_ extends _a{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class K_{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class j_{constructor(e,t,n=0,i=1/0){this.ray=new Ys(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ko(e,this,n,t),n.sort(Kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ko(e[i],this,n,t);return n.sort(Kc),n}}function Kc(r,e){return r.distance-e.distance}function Ko(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Ko(i[s],e,t,!0)}}class Q_{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ey{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const jc=new Y;class ty{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qc=new A,Gr=new A;class ny{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qc.subVectors(e,this.start),Gr.subVectors(this.end,this.start);const n=Gr.dot(Gr);let s=Gr.dot(Qc)/n;return t&&(s=ut(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const eh=new A;class iy extends We{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Fe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new ge(i,3));const s=new Nt({fog:!1,toneMapped:!1});this.cone=new dn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),eh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(eh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Fn=new A,Vr=new Ce,ao=new Ce;class sy extends dn{constructor(e){const t=md(e),n=new Fe,i=[],s=[],a=new he(0,0,1),o=new he(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new ge(i,3)),n.setAttribute("color",new ge(s,3));const l=new Nt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ao.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Vr.multiplyMatrices(ao,o.matrixWorld),Fn.setFromMatrixPosition(Vr),i.setXYZ(a,Fn.x,Fn.y,Fn.z),Vr.multiplyMatrices(ao,o.parent.matrixWorld),Fn.setFromMatrixPosition(Vr),i.setXYZ(a+1,Fn.x,Fn.y,Fn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function md(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,md(r.children[t]));return e}class ry extends at{constructor(e,t,n){const i=new as(t,4,2),s=new je({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const ay=new A,th=new he,nh=new he;class oy extends We{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new rs(t);i.rotateY(Math.PI*.5),this.material=new je({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Xe(a,3)),this.add(new at(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");th.copy(this.light.color),nh.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?th:nh;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(ay.setFromMatrixPosition(this.light.matrixWorld).negate())}}class ly extends dn{constructor(e=10,t=10,n=4473924,i=8947848){n=new he(n),i=new he(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,m=-o;u<=t;u++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const p=u===s?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new Fe;h.setAttribute("position",new ge(l,3)),h.setAttribute("color",new ge(c,3));const d=new Nt({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cy extends dn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new he(s),a=new he(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),f=Math.sin(u)*e,m=Math.cos(u)*e;o.push(0,0,0),o.push(f,0,m);const p=d&1?s:a;l.push(p.r,p.g,p.b),l.push(p.r,p.g,p.b)}for(let d=0;d<n;d++){const u=d&1?s:a,f=e-e/n*d;for(let m=0;m<i;m++){let p=m/i*(Math.PI*2),g=Math.sin(p)*f,_=Math.cos(p)*f;o.push(g,0,_),l.push(u.r,u.g,u.b),p=(m+1)/i*(Math.PI*2),g=Math.sin(p)*f,_=Math.cos(p)*f,o.push(g,0,_),l.push(u.r,u.g,u.b)}}const c=new Fe;c.setAttribute("position",new ge(o,3)),c.setAttribute("color",new ge(l,3));const h=new Nt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ih=new A,Hr=new A,sh=new A;class hy extends We{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Fe;i.setAttribute("position",new ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Nt({fog:!1,toneMapped:!1});this.lightPlane=new Xn(i,s),this.add(this.lightPlane),i=new Fe,i.setAttribute("position",new ge([0,0,0,0,0,1],3)),this.targetLine=new Xn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ih.setFromMatrixPosition(this.light.matrixWorld),Hr.setFromMatrixPosition(this.light.target.matrixWorld),sh.subVectors(Hr,ih),this.lightPlane.lookAt(Hr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Hr),this.targetLine.scale.z=sh.length()}}const Wr=new A,rt=new da;class uy extends dn{constructor(e){const t=new Fe,n=new Nt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,p){l(m),l(p)}function l(m){i.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new ge(i,3)),t.setAttribute("color",new ge(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new he(16755200),h=new he(16711680),d=new he(43775),u=new he(16777215),f=new he(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;rt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),lt("c",t,e,rt,0,0,-1),lt("t",t,e,rt,0,0,1),lt("n1",t,e,rt,-n,-i,-1),lt("n2",t,e,rt,n,-i,-1),lt("n3",t,e,rt,-n,i,-1),lt("n4",t,e,rt,n,i,-1),lt("f1",t,e,rt,-n,-i,1),lt("f2",t,e,rt,n,-i,1),lt("f3",t,e,rt,-n,i,1),lt("f4",t,e,rt,n,i,1),lt("u1",t,e,rt,n*.7,i*1.1,-1),lt("u2",t,e,rt,-n*.7,i*1.1,-1),lt("u3",t,e,rt,0,i*2,-1),lt("cf1",t,e,rt,-n,0,1),lt("cf2",t,e,rt,n,0,1),lt("cf3",t,e,rt,0,-i,1),lt("cf4",t,e,rt,0,i,1),lt("cn1",t,e,rt,-n,0,-1),lt("cn2",t,e,rt,n,0,-1),lt("cn3",t,e,rt,0,-i,-1),lt("cn4",t,e,rt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function lt(r,e,t,n,i,s,a){Wr.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Wr.x,Wr.y,Wr.z)}}const qr=new bi;class dy extends dn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Fe;s.setIndex(new Xe(n,1)),s.setAttribute("position",new Xe(i,3)),super(s,new Nt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&qr.setFromObject(this.object),qr.isEmpty())return;const t=qr.min,n=qr.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class fy extends dn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Fe;s.setIndex(new Xe(n,1)),s.setAttribute("position",new ge(i,3)),super(s,new Nt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class py extends Xn{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Fe;a.setAttribute("position",new ge(s,3)),a.computeBoundingSphere(),super(a,new Nt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Fe;l.setAttribute("position",new ge(o,3)),l.computeBoundingSphere(),this.add(new at(l,new je({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const rh=new A;let Xr,oo;class my extends We{constructor(e=new A(0,0,1),t=new A(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Xr===void 0&&(Xr=new Fe,Xr.setAttribute("position",new ge([0,0,0,0,1,0],3)),oo=new wi(0,.5,1,5,1),oo.translate(0,-.5,0)),this.position.copy(t),this.line=new Xn(Xr,new Nt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new at(oo,new je({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{rh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(rh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gy extends dn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Fe;i.setAttribute("position",new ge(t,3)),i.setAttribute("color",new ge(n,3));const s=new Nt({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new he,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xy{constructor(){this.type="ShapePath",this.color=new he,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Os,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const y=[];for(let x=0,v=_.length;x<v;x++){const b=_[x],T=new xi;T.curves=b.curves,y.push(T)}return y}function n(_,y){const x=y.length;let v=!1;for(let b=x-1,T=0;T<x;b=T++){let L=y[b],M=y[T],S=M.x-L.x,R=M.y-L.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(L=y[T],S=-S,M=y[b],R=-R),_.y<L.y||_.y>M.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const k=R*(_.x-L.x)-S*(_.y-L.y);if(k===0)return!0;if(k<0)continue;v=!v}}else{if(_.y!==L.y)continue;if(M.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=M.x)return!0}}return v}const i=hn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new xi,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const d=[],u=[];let f=[],m=0,p;u[m]=void 0,f[m]=[];for(let _=0,y=s.length;_<y;_++)o=s[_],p=o.getPoints(),a=i(p),a=e?!a:a,a?(!h&&u[m]&&m++,u[m]={s:new xi,p},u[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:p[0]});if(!u[0])return t(s);if(u.length>1){let _=!1,y=0;for(let x=0,v=u.length;x<v;x++)d[x]=[];for(let x=0,v=u.length;x<v;x++){const b=f[x];for(let T=0;T<b.length;T++){const L=b[T];let M=!0;for(let S=0;S<u.length;S++)n(L.p,u[S].p)&&(x!==S&&y++,M?(M=!1,d[S].push(L)):_=!0);M&&d[x].push(L)}}y>0&&_===!1&&(f=d)}let g;for(let _=0,y=u.length;_<y;_++){l=u[_].s,c.push(l),g=f[_];for(let x=0,v=g.length;x<v;x++)l.holes.push(g[x].h)}return c}}const bn=_y();function _y(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function yy(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ut(r,-65504,65504),bn.floatView[0]=r;const e=bn.uint32View[0],t=e>>23&511;return bn.baseTable[t]+((e&8388607)>>bn.shiftTable[t])}function vy(r){const e=r>>10;return bn.uint32View[0]=bn.mantissaTable[bn.offsetTable[e]+(r&1023)]+bn.exponentTable[e],bn.floatView[0]}const My={toHalfFloat:yy,fromHalfFloat:vy};class by extends Cn{constructor(e,t,n,i,s,a){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,a)}}class Sy extends Js{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class wy extends $s{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class Ty extends Ks{constructor(e,t,n,i,s,a,o){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,s,a,o)}}class Ay extends wi{constructor(e,t,n,i,s,a,o,l){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,s,a,o,l)}}class Ey extends js{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class Cy extends Qs{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class Ly extends er{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class Ry extends ss{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class Py extends rs{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class Iy extends ns{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class Dy extends Ln{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class Fy extends tr{constructor(e,t,n,i,s,a){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,s,a)}}class Ny extends nr{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class zy extends as{constructor(e,t,n,i,s,a,o){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,s,a,o)}}class ky extends ir{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class Oy extends sr{constructor(e,t,n,i,s){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,s)}}class Uy extends rr{constructor(e,t,n,i,s,a){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,s,a)}}class By extends ar{constructor(e,t,n,i,s){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);const fv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:kh,AddEquation:oi,AddOperation:Dh,AdditiveAnimationBlendMode:sl,AdditiveBlending:po,AlphaFormat:Wh,AlwaysDepth:Ah,AlwaysStencilFunc:au,AmbientLight:od,AmbientLightProbe:C_,AnimationClip:Ws,AnimationLoader:g_,AnimationMixer:Y_,AnimationObjectGroup:W_,AnimationUtils:d_,ArcCurve:Iu,ArrayCamera:Mu,ArrowHelper:my,Audio:fd,AudioAnalyser:F_,AudioContext:Il,AudioListener:P_,AudioLoader:A_,AxesHelper:gy,BackSide:gt,BasicDepthPacking:iu,BasicShadowMap:Rd,Bone:gl,BooleanKeyframeTrack:Ti,Box2:ty,Box3:bi,Box3Helper:fy,BoxBufferGeometry:by,BoxGeometry:Cn,BoxHelper:dy,BufferAttribute:Xe,BufferGeometry:Fe,BufferGeometryLoader:ud,ByteType:Uh,Cache:Mi,Camera:da,CameraHelper:uy,CanvasTexture:zx,CapsuleBufferGeometry:Sy,CapsuleGeometry:Js,CatmullRomCurve3:Du,CineonToneMapping:zh,CircleBufferGeometry:wy,CircleGeometry:$s,ClampToEdgeWrapping:Ct,Clock:dd,Color:he,ColorKeyframeTrack:Ll,ColorManagement:Et,CompressedArrayTexture:Nx,CompressedTexture:_l,CompressedTextureLoader:x_,ConeBufferGeometry:Ty,ConeGeometry:Ks,CubeCamera:fu,CubeReflectionMapping:Gn,CubeRefractionMapping:Vn,CubeTexture:Zs,CubeTextureLoader:__,CubeUVReflectionMapping:ts,CubicBezierCurve:vl,CubicBezierCurve3:Fu,CubicInterpolant:ju,CullFaceBack:fo,CullFaceFront:uh,CullFaceFrontBack:Ld,CullFaceNone:hh,Curve:sn,CurvePath:zu,CustomBlending:fh,CustomToneMapping:Oh,CylinderBufferGeometry:Ay,CylinderGeometry:wi,Cylindrical:ey,Data3DTexture:ll,DataArrayTexture:ha,DataTexture:$i,DataTextureLoader:y_,DataUtils:My,DecrementStencilOp:Hd,DecrementWrapStencilOp:qd,DefaultLoadingManager:td,DepthFormat:Bn,DepthStencilFormat:_i,DepthTexture:bu,DirectionalLight:ad,DirectionalLightHelper:hy,DiscreteInterpolant:Qu,DisplayP3ColorSpace:rl,DodecahedronBufferGeometry:Ey,DodecahedronGeometry:js,DoubleSide:Jt,DstAlphaFactor:vh,DstColorFactor:bh,DynamicCopyUsage:of,DynamicDrawUsage:ef,DynamicReadUsage:sf,EdgesGeometry:ku,EllipseCurve:va,EqualDepth:Ch,EqualStencilFunc:Jd,EquirectangularReflectionMapping:Cs,EquirectangularRefractionMapping:Ls,Euler:Yt,EventDispatcher:En,ExtrudeBufferGeometry:Cy,ExtrudeGeometry:Qs,FileLoader:An,Float16BufferAttribute:Zf,Float32BufferAttribute:ge,Float64BufferAttribute:Jf,FloatType:Sn,Fog:xa,FogExp2:ga,FramebufferTexture:Fx,FrontSide:Vt,Frustum:fa,GLBufferAttribute:K_,GLSL1:cf,GLSL3:Vo,GreaterDepth:Rh,GreaterEqualDepth:Lh,GreaterEqualStencilFunc:Qd,GreaterStencilFunc:Kd,GridHelper:ly,Group:Un,HalfFloatType:Ki,HemisphereLight:id,HemisphereLightHelper:oy,HemisphereLightProbe:E_,IcosahedronBufferGeometry:Ly,IcosahedronGeometry:er,ImageBitmapLoader:T_,ImageLoader:qs,ImageUtils:ol,IncrementStencilOp:Vd,IncrementWrapStencilOp:Wd,InstancedBufferAttribute:es,InstancedBufferGeometry:hd,InstancedInterleavedBuffer:$_,InstancedMesh:Lu,Int16BufferAttribute:Xf,Int32BufferAttribute:Yf,Int8BufferAttribute:Hf,IntType:Gh,InterleavedBuffer:_a,InterleavedBufferAttribute:yi,Interpolant:or,InterpolateDiscrete:Is,InterpolateLinear:Ds,InterpolateSmooth:Qr,InvertStencilOp:Xd,KeepStencilOp:ea,KeyframeTrack:rn,LOD:Eu,LatheBufferGeometry:Ry,LatheGeometry:ss,Layers:ua,LessDepth:Eh,LessEqualDepth:ia,LessEqualStencilFunc:$d,LessStencilFunc:Zd,Light:Zn,LightProbe:Sa,Line:Xn,Line3:ny,LineBasicMaterial:Nt,LineCurve:Ma,LineCurve3:Nu,LineDashedMaterial:$u,LineLoop:Ru,LineSegments:dn,LinearEncoding:qn,LinearFilter:ht,LinearInterpolant:Cl,LinearMipMapLinearFilter:Nd,LinearMipMapNearestFilter:Fd,LinearMipmapLinearFilter:Hn,LinearMipmapNearestFilter:nl,LinearSRGBColorSpace:ji,LinearToneMapping:Fh,Loader:Ht,LoaderUtils:$o,LoadingManager:Rl,LoopOnce:eu,LoopPingPong:nu,LoopRepeat:tu,LuminanceAlphaFormat:Xh,LuminanceFormat:qh,MOUSE:Ed,Material:Lt,MaterialLoader:wa,MathUtils:Sf,Matrix3:wt,Matrix4:Ce,MaxEquation:_o,Mesh:at,MeshBasicMaterial:je,MeshDepthMaterial:dl,MeshDistanceMaterial:fl,MeshLambertMaterial:Zu,MeshMatcapMaterial:Ju,MeshNormalMaterial:Yu,MeshPhongMaterial:qu,MeshPhysicalMaterial:Wu,MeshStandardMaterial:Tl,MeshToonMaterial:Xu,MinEquation:xo,MirroredRepeatWrapping:Ps,MixOperation:Ih,MultiplyBlending:go,MultiplyOperation:Xs,NearestFilter:ct,NearestMipMapLinearFilter:Dd,NearestMipMapNearestFilter:Id,NearestMipmapLinearFilter:ws,NearestMipmapNearestFilter:sa,NeverDepth:Th,NeverStencilFunc:Yd,NoBlending:Tn,NoColorSpace:Ud,NoToneMapping:cn,NormalAnimationBlendMode:ca,NormalBlending:pi,NotEqualDepth:Ph,NotEqualStencilFunc:jd,NumberKeyframeTrack:Vs,Object3D:We,ObjectLoader:S_,ObjectSpaceNormalMap:ru,OctahedronBufferGeometry:Py,OctahedronGeometry:rs,OneFactor:xh,OneMinusDstAlphaFactor:Mh,OneMinusDstColorFactor:Sh,OneMinusSrcAlphaFactor:tl,OneMinusSrcColorFactor:yh,OrthographicCamera:pa,PCFShadowMap:Qo,PCFSoftShadowMap:dh,PMREMGenerator:Wo,Path:Os,PerspectiveCamera:St,Plane:zn,PlaneBufferGeometry:Iy,PlaneGeometry:ns,PlaneHelper:py,PointLight:rd,PointLightHelper:ry,Points:Pu,PointsMaterial:xl,PolarGridHelper:cy,PolyhedronBufferGeometry:Dy,PolyhedronGeometry:Ln,PositionalAudio:D_,PropertyBinding:qe,PropertyMixer:pd,QuadraticBezierCurve:Ml,QuadraticBezierCurve3:bl,Quaternion:Ft,QuaternionKeyframeTrack:os,QuaternionLinearInterpolant:ed,RED_GREEN_RGTC2_Format:Bo,RED_RGTC1_Format:Qh,REVISION:oa,RGBADepthPacking:su,RGBAFormat:Bt,RGBAIntegerFormat:Kh,RGBA_ASTC_10x10_Format:zo,RGBA_ASTC_10x5_Format:Do,RGBA_ASTC_10x6_Format:Fo,RGBA_ASTC_10x8_Format:No,RGBA_ASTC_12x10_Format:ko,RGBA_ASTC_12x12_Format:Oo,RGBA_ASTC_4x4_Format:To,RGBA_ASTC_5x4_Format:Ao,RGBA_ASTC_5x5_Format:Eo,RGBA_ASTC_6x5_Format:Co,RGBA_ASTC_6x6_Format:Lo,RGBA_ASTC_8x5_Format:Ro,RGBA_ASTC_8x6_Format:Po,RGBA_ASTC_8x8_Format:Io,RGBA_BPTC_Format:jr,RGBA_ETC2_EAC_Format:wo,RGBA_PVRTC_2BPPV1_Format:bo,RGBA_PVRTC_4BPPV1_Format:Mo,RGBA_S3TC_DXT1_Format:Jr,RGBA_S3TC_DXT3_Format:$r,RGBA_S3TC_DXT5_Format:Kr,RGB_ETC1_Format:jh,RGB_ETC2_Format:So,RGB_PVRTC_2BPPV1_Format:vo,RGB_PVRTC_4BPPV1_Format:yo,RGB_S3TC_DXT1_Format:Zr,RGFormat:Jh,RGIntegerFormat:$h,RawShaderMaterial:Hu,Ray:Ys,Raycaster:j_,RectAreaLight:ld,RedFormat:Yh,RedIntegerFormat:Zh,ReinhardToneMapping:Nh,RepeatWrapping:Rs,ReplaceStencilOp:Gd,ReverseSubtractEquation:mh,RingBufferGeometry:Fy,RingGeometry:tr,SIGNED_RED_GREEN_RGTC2_Format:Go,SIGNED_RED_RGTC1_Format:Uo,SRGBColorSpace:Qt,Scene:wu,ShaderChunk:ke,ShaderLib:en,ShaderMaterial:un,ShadowMaterial:Vu,Shape:xi,ShapeBufferGeometry:Ny,ShapeGeometry:nr,ShapePath:xy,ShapeUtils:hn,ShortType:Bh,Skeleton:ya,SkeletonHelper:sy,SkinnedMesh:Cu,Source:ui,Sphere:Si,SphereBufferGeometry:zy,SphereGeometry:as,Spherical:Q_,SphericalHarmonics3:cd,SplineCurve:Sl,SpotLight:sd,SpotLightHelper:iy,Sprite:Au,SpriteMaterial:ml,SrcAlphaFactor:el,SrcAlphaSaturateFactor:wh,SrcColorFactor:_h,StaticCopyUsage:af,StaticDrawUsage:Ns,StaticReadUsage:nf,StereoCamera:L_,StreamCopyUsage:lf,StreamDrawUsage:tf,StreamReadUsage:rf,StringKeyframeTrack:Ai,SubtractEquation:ph,SubtractiveBlending:mo,TOUCH:Cd,TangentSpaceNormalMap:Yn,TetrahedronBufferGeometry:ky,TetrahedronGeometry:ir,Texture:dt,TextureLoader:nd,TorusBufferGeometry:Oy,TorusGeometry:sr,TorusKnotBufferGeometry:Uy,TorusKnotGeometry:rr,Triangle:Zt,TriangleFanDrawMode:Od,TriangleStripDrawMode:kd,TrianglesDrawMode:zd,TubeBufferGeometry:By,TubeGeometry:ar,TwoPassDoubleSide:Pd,UVMapping:la,Uint16BufferAttribute:cl,Uint32BufferAttribute:hl,Uint8BufferAttribute:Wf,Uint8ClampedBufferAttribute:qf,Uniform:Nl,UniformsGroup:J_,UniformsLib:re,UniformsUtils:du,UnsignedByteType:Wn,UnsignedInt248Type:mi,UnsignedIntType:kn,UnsignedShort4444Type:Vh,UnsignedShort5551Type:Hh,UnsignedShortType:il,VSMShadowMap:qi,Vector2:Y,Vector3:A,Vector4:$e,VectorKeyframeTrack:Hs,VideoTexture:Dx,WebGL1Renderer:Su,WebGL3DRenderTarget:Df,WebGLArrayRenderTarget:If,WebGLCubeRenderTarget:pu,WebGLMultipleRenderTargets:Ff,WebGLRenderTarget:nn,WebGLRenderer:pl,WebGLUtils:vu,WireframeGeometry:Gu,WrapAroundEnding:Fs,ZeroCurvatureEnding:ci,ZeroFactor:gh,ZeroSlopeEnding:hi,ZeroStencilOp:Bd,_SRGBAFormat:ra,sRGBEncoding:tt},Symbol.toStringTag,{value:"Module"}));function gd(r){return r*r*r*(10-r*(15-6*r))}var ah=new nd,Gy=new je({color:4473924,side:Jt}),Vy=new je({color:13421772,side:gt,transparent:!0,opacity:.75}),aa=new je({visible:!1}),Hy=new je({color:4513228}),Wy=new je({color:4513228,side:gt,transparent:!0,opacity:.5}),Wi=class{constructor(r,e,t,n,i,s){this.vector=r,this.fromZ=e,this.color=t,this.dimColor=n,this.hintOpacityScale=i,this.stickerMaterial={regular:new je({color:t,side:Vt}),dim:new je({color:n,side:Vt}),oriented:Hy,ignored:Gy,invisible:aa},this.hintStickerMaterial={regular:new je({color:s?.hintColor??t,side:gt,transparent:!0,opacity:.5*i}),dim:new je({color:s?.hintDimColor??n,side:gt,transparent:!0,opacity:.5*i}),oriented:Wy,ignored:Vy,invisible:aa}}},vn=[new Wi(new A(0,1,0),new Yt(-tn/4,0,0),15787074,14540253,1.25),new Wi(new A(-1,0,0),new Yt(0,-tn/4,0),13400487,8930304,1,{hintDimColor:10053120}),new Wi(new A(0,0,1),new Yt(0,0,0),5682409,34816,1,{hintDimColor:39168}),new Wi(new A(1,0,0),new Yt(0,tn/4,0),13983232,6684672,1,{hintDimColor:10027008}),new Wi(new A(0,0,-1),new Yt(0,tn/2,0),40563,1127304,.75,{hintDimColor:6246}),new Wi(new A(0,-1,0),new Yt(tn/4,0,0),16777215,8947712,1.25,{hintDimColor:12303104})],He={U:0,L:1,F:2,R:3,B:4,D:5},qy={U:He.U,u:He.U,Uw:He.U,Uv:He.U,y:He.U,L:He.L,l:He.L,Lw:He.L,Lv:He.L,M:He.L,F:He.F,f:He.F,Fw:He.F,Fv:He.F,S:He.F,z:He.F,R:He.R,r:He.R,Rw:He.R,Rv:He.R,x:He.R,B:He.B,b:He.B,Bw:He.B,Bv:He.B,D:He.D,d:He.D,Dw:He.D,Dv:He.D,E:He.D},fi={stickerElevation:.503,foundationWidth:1,hintStickerElevation:1.45},Xy=2,Yy={showMainStickers:!0,hintFacelets:"floating",showFoundation:!0,experimentalStickeringMask:void 0,foundationSprite:null,hintSprite:null,initialHintFaceletsAnimation:"auto",faceletScale:"auto"},Zy=.85;function lo(r){return typeof r.faceletScale>"u"||r.faceletScale==="auto"?Zy:r.faceletScale}var Jy=new je({color:0,opacity:1,transparent:!0}),$y=new je({color:0,opacity:.3,transparent:!0}),et=class{constructor(r,e,t){this.orbit=r;const n=typeof e=="string"?e.split(""):e;this.stickerFaces=n.map(i=>He[i]),this.matrix=new Ce,this.matrix.setPosition(na[r]),this.matrix.premultiply(new Ce().makeRotationFromQuaternion(t))}};function Ne(r,e){return new Ft().setFromAxisAngle(r,tn*e/4)}var ze={O:new A(0,0,0),U:new A(0,-1,0),L:new A(1,0,0),F:new A(0,0,-1),R:new A(-1,0,0),B:new A(0,0,1),D:new A(0,1,0)},na={EDGES:new A(0,1,1),CORNERS:new A(1,1,1),CENTERS:new A(0,1,0)},Ky={EDGES:[0,1].map(r=>new Ce().makeRotationAxis(na.EDGES.clone().normalize(),-r*tn/2)),CORNERS:[0,1,2].map(r=>new Ce().makeRotationAxis(na.CORNERS.clone().normalize(),-r*tn/3)),CENTERS:[0,1,2,3].map(r=>new Ce().makeRotationAxis(na.CENTERS.clone().normalize(),-r*tn/4))},co=[He.U,He.F,He.R],Ms={EDGES:[new et("EDGES","UF",Ne(ze.O,0)),new et("EDGES","UR",Ne(ze.U,3)),new et("EDGES","UB",Ne(ze.U,2)),new et("EDGES","UL",Ne(ze.U,1)),new et("EDGES","DF",Ne(ze.F,2)),new et("EDGES","DR",Ne(ze.F,2).premultiply(Ne(ze.D,1))),new et("EDGES","DB",Ne(ze.F,2).premultiply(Ne(ze.D,2))),new et("EDGES","DL",Ne(ze.F,2).premultiply(Ne(ze.D,3))),new et("EDGES","FR",Ne(ze.U,3).premultiply(Ne(ze.R,3))),new et("EDGES","FL",Ne(ze.U,1).premultiply(Ne(ze.R,3))),new et("EDGES","BR",Ne(ze.U,3).premultiply(Ne(ze.R,1))),new et("EDGES","BL",Ne(ze.U,1).premultiply(Ne(ze.R,1)))],CORNERS:[new et("CORNERS","UFR",Ne(ze.O,0)),new et("CORNERS","URB",Ne(ze.U,3)),new et("CORNERS","UBL",Ne(ze.U,2)),new et("CORNERS","ULF",Ne(ze.U,1)),new et("CORNERS","DRF",Ne(ze.F,2).premultiply(Ne(ze.D,1))),new et("CORNERS","DFL",Ne(ze.F,2).premultiply(Ne(ze.D,0))),new et("CORNERS","DLB",Ne(ze.F,2).premultiply(Ne(ze.D,3))),new et("CORNERS","DBR",Ne(ze.F,2).premultiply(Ne(ze.D,2)))],CENTERS:[new et("CENTERS","U",Ne(ze.O,0)),new et("CENTERS","L",Ne(ze.R,3).premultiply(Ne(ze.U,1))),new et("CENTERS","F",Ne(ze.R,3)),new et("CENTERS","R",Ne(ze.R,3).premultiply(Ne(ze.D,1))),new et("CENTERS","B",Ne(ze.R,3).premultiply(Ne(ze.D,2))),new et("CENTERS","D",Ne(ze.R,2))]},ho=1/3,Yr={EDGES:[[[0,4,6],[0,4,5]],[[3,5,7],[0,7,5]],[[2,4,8],[0,10,5]],[[1,3,7],[0,1,5]],[[2,4,2],[2,4,3]],[[3,5,1],[2,7,3]],[[0,4,0],[2,10,3]],[[1,3,1],[2,1,3]],[[3,5,4],[3,6,4]],[[1,3,4],[1,2,4]],[[1,9,4],[1,8,4]],[[3,11,4],[3,0,4]]],CORNERS:[[[0,5,6],[0,5,5],[0,6,5]],[[3,5,8],[0,8,5],[0,9,5]],[[2,3,8],[0,11,5],[0,0,5]],[[1,3,6],[0,2,5],[0,3,5]],[[3,5,2],[2,6,3],[2,5,3]],[[2,3,2],[2,3,3],[2,2,3]],[[1,3,0],[2,0,3],[2,11,3]],[[0,5,0],[2,9,3],[2,8,3]]],CENTERS:[[[0,4,7]],[[0,1,4]],[[0,4,4]],[[0,7,4]],[[0,10,4]],[[0,4,1]]]},oh=null;function jy(){return oh??(oh=new Cn(fi.foundationWidth,fi.foundationWidth,fi.foundationWidth))}function jo(){const r=new Fe,e=.5;return r.setAttribute("position",new Xe(new Float32Array([e,e,0,-e,e,0,e,-e,0,-e,e,0,-e,-e,0,e,-e,0]),3)),r.setAttribute("uv",new Xe(new Float32Array([1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1]),2)),r}var lh=null;function Qy(){return lh??(lh=jo())}var ev=class extends We{constructor(r,e,t={}){if(super(),this.kpuzzle=r,this.scheduleRenderCallback=e,this.pieces={},this.experimentalHintStickerMeshes=[],this.experimentalFoundationMeshes=[],this.sprite=new Promise(n=>{this.setSpriteURL=i=>{ah.load(i,n)}}),this.hintSprite=new Promise(n=>{this.setHintSpriteURL=i=>{ah.load(i,n)}}),this.#e=null,this.options={...Yy},Object.assign(this.options,t),this.kpuzzle.name()!=="3x3x3")throw new Error(`Invalid puzzle for this Cube3D implementation: ${this.kpuzzle.name()}`);t.foundationSprite&&this.setSprite(t.foundationSprite),t.hintSprite&&this.setHintSprite(t.hintSprite),this.kpuzzleFaceletInfo={};for(const n in Ms){const i=[];this.kpuzzleFaceletInfo[n]=i,this.pieces[n]=Ms[n].map(this.createCubie.bind(this,n,i))}this.scale.set(ho,ho,ho),this.options.experimentalStickeringMask&&this.setStickeringMask(this.options.experimentalStickeringMask),this.#n(),this.options.faceletScale&&this.experimentalSetFaceletScale(this.options.faceletScale)}setSprite(r){this.sprite=r}setHintSprite(r){this.hintSprite=r}#e;#t(){return this.#e??(this.#e=jo())}#n(){if(this.options.initialHintFaceletsAnimation==="none"||this.options.initialHintFaceletsAnimation!=="always"&&bd())return;const r=fi.hintStickerElevation-fi.stickerElevation;this.#t().translate(0,0,-r),setTimeout(()=>{const e=performance.now();let t=0;const n=1e3;function i(a){return a*(2-a)}const s=()=>{const a=performance.now()-e,o=i(a/n)*r;this.#t().translate(0,0,o-t),t=o,a<n&&(requestAnimationFrame(s),this.scheduleRenderCallback?.())};s()},500)}experimentalSetStickerSpriteURL(r){this.setSpriteURL(r)}experimentalSetHintStickerSpriteURL(r){this.setHintSpriteURL(r)}setStickeringMask(r){if(r.specialBehaviour==="picture"){for(const e of Object.values(this.kpuzzleFaceletInfo))for(const t of e)for(const n of t){n.facelet.material=aa;const{hintFacelet:i}=n;i&&(i.material=aa)}return}this.options.experimentalStickeringMask=r;for(const[e,t]of Object.entries(r.orbits))for(let n=0;n<t.pieces.length;n++){const i=t.pieces[n];if(i){const s=this.kpuzzleFaceletInfo[e][n];for(let a=0;a<s.length;a++){const o=i.facelets[a];if(o){const l=s[a],c=typeof o=="string"?o:o?.mask;l.facelet.material=vn[l.faceIdx].stickerMaterial[c];const h=typeof o=="string"?c:o.hintMask??c;l.hintFacelet&&(l.hintFacelet.material=vn[l.faceIdx].hintStickerMaterial[h])}}}}this.scheduleRenderCallback&&this.scheduleRenderCallback()}experimentalUpdateOptions(r){if("showMainStickers"in r)throw new Error("Unimplemented");const e=r.showFoundation;if(typeof e<"u"&&this.options.showFoundation!==e){this.options.showFoundation=e;for(const s of this.experimentalFoundationMeshes)s.visible=e}const t=r.hintFacelets;if(typeof t<"u"&&this.options.hintFacelets!==t&&Sd[t]){this.options.hintFacelets=t;for(const s of this.experimentalHintStickerMeshes)s.visible=t==="floating";this.scheduleRenderCallback()}const{experimentalStickeringMask:n}=r;typeof n<"u"&&(this.options.experimentalStickeringMask=n,this.setStickeringMask(n),this.scheduleRenderCallback());const{faceletScale:i}=r;typeof i<"u"&&this.experimentalSetFaceletScale(i)}onPositionChange(r){const e=r.state;for(const t in Ms){const n=Ms[t];for(let i=0;i<n.length;i++){const s=e.stateData[t].pieces[i];this.pieces[t][s].matrix.copy(Ms[t][i].matrix),this.pieces[t][s].matrix.multiply(Ky[t][e.stateData[t].orientation[i]])}for(const i of r.movesInProgress){const s=i.move,a=vn[qy[s.family]].vector,o=new Ce().makeRotationAxis(a,-this.ease(i.fraction)*i.direction*s.amount*tn/4);for(let l=0;l<n.length;l++){const c=this.kpuzzle.moveToTransformation(s.modified({amount:1})),h=c.transformationData[t].permutation[l];if(l!==h||c.transformationData[t].orientation[l]!==0){const d=e.stateData[t].pieces[l];this.pieces[t][d].matrix.premultiply(o)}}}}this.scheduleRenderCallback()}createCubie(r,e,t,n){const i=[];e.push(i);const s=new Un;if(this.options.showFoundation){const a=this.createCubieFoundation();s.add(a),this.experimentalFoundationMeshes.push(a)}for(let a=0;a<t.stickerFaces.length;a++){const o=this.createSticker(vn[co[a]],vn[t.stickerFaces[a]],!1),l={faceIdx:t.stickerFaces[a],facelet:o};if(s.add(o),this.options.hintFacelets==="floating"){const c=this.createSticker(vn[co[a]],vn[t.stickerFaces[a]],!0);s.add(c),l.hintFacelet=c,this.experimentalHintStickerMeshes.push(c)}if(this.options.experimentalStickeringMask?.specialBehaviour==="picture"&&Yr[r]&&Yr[r][n]&&Yr[r][n][a]){const[c,h,d]=Yr[r][n][a];(async()=>{const u=async f=>{const m=await(f?this.hintSprite:this.sprite),p=this.createSticker(vn[co[a]],vn[t.stickerFaces[a]],f);p.material=new je({map:m,side:f?gt:Jt,transparent:!0});const g=h/12,_=(h+1)/12,y=d/9,x=(d+1)/9;let v=new Y(g,y),b=new Y(g,x),T=new Y(_,x),L=new Y(_,y);switch(c){case 1:{[v,b,T,L]=[b,T,L,v];break}case 2:{[v,b,T,L]=[T,L,v,b];break}case 3:{[v,b,T,L]=[L,v,b,T];break}}p.geometry.setAttribute("uv",new Xe(new Float32Array([T.x,T.y,b.x,b.y,L.x,L.y,b.x,b.y,v.x,v.y,L.x,L.y]),2)),s.add(p)};u(!0),u(!1)})()}i.push(l)}return s.matrix.copy(t.matrix),s.matrixAutoUpdate=!1,this.add(s),s}createCubieFoundation(){const r=jy();return new at(r,this.options.experimentalStickeringMask?.specialBehaviour==="picture"?Jy:$y)}createSticker(r,e,t){const n=this.options.experimentalStickeringMask?.specialBehaviour==="picture"?jo():t?this.#t():Qy(),i=new at(n,t?e.hintStickerMaterial.regular:e.stickerMaterial.regular);return i.setRotationFromEuler(r.fromZ),i.position.copy(r.vector),i.position.multiplyScalar(t?this.options.experimentalStickeringMask?.specialBehaviour==="picture"?Xy:fi.hintStickerElevation:fi.stickerElevation),i.scale.setScalar(lo(this.options)),i}experimentalSetFoundationOpacity(r){this.experimentalFoundationMeshes[0].material.opacity=r}experimentalSetFaceletScale(r){this.options.faceletScale=r;for(const e of Object.values(this.kpuzzleFaceletInfo))for(const t of e)for(const n of t)n.facelet.scale.setScalar(lo(this.options)),n.hintFacelet?.scale.setScalar(lo(this.options))}ease(r){return gd(r)}},ch=new je({side:Jt,color:0}),Nn=new je({visible:!1}),bs=new je({vertexColors:!0});function uo(r,e,t){return Math.hypot(r[3*e]-r[3*t],r[3*e+1]-r[3*t+1],r[3*e+2]-r[3*t+2])}function tv(r,e,t,n){const i=uo(r,e,t),s=uo(r,t,n),a=uo(r,e,n),o=(i+s+a)/2;return Math.sqrt(o*(o-i)*(o-s)*(o-a))}function nv(r){let e=0;for(let t=2;3*t<r.length;t++)e+=tv(r,0,1,t);return e}function iv(r){const e=Math.hypot(r[0],r[1],r[2]);return r[0]/=e,r[1]/=e,r[2]/=e,r}function sv(r,e){const t=new Array(3);return t[0]=r[1]*e[2]-r[2]*e[1],t[1]=r[2]*e[0]-r[0]*e[2],t[2]=r[0]*e[1]-r[1]*e[0],t}function rv(r){const e=[r[3]-r[0],r[4]-r[1],r[5]-r[2]],t=[r[6]-r[3],r[7]-r[4],r[8]-r[5]],n=sv(e,t);return iv(n)}function av(r,e){const t=[],n=new Array(3),i=new Array(3);for(let s=1;s<10;s++){for(let o=0;o<r.length;o+=3){const l=(o+r.length-3)%r.length,c=(o+3)%r.length;for(let m=0;m<3;m++)n[m]=r[l+m]-r[o+m],i[m]=r[c+m]-r[o+m];const h=Math.hypot(n[0],n[1],n[2]),d=Math.hypot(i[0],i[1],i[2]);for(let m=0;m<3;m++)n[m]/=h,i[m]/=d;const u=n[0]*i[0]+n[1]*i[1]+n[2]*i[2],f=e/Math.sqrt(1-u*u);for(let m=0;m<3;m++)t[o+m]=r[o+m]+(n[m]+i[m])*f}let a=!0;for(let o=0;a&&o<t.length;o+=3){const l=(o+3)%r.length;let c=0;for(let h=0;h<3;h++){const d=r[l+h]-r[o+h],u=t[l+h]-t[o+h];c+=d*u}c<=0&&(a=!1)}if(a)return t;e/=2}return r}var xd=class{constructor(r,e){this.sz=r,this.tm=e,this.vertices=new Float32Array(9*r),this.uvs=void 0,this.colors=new Uint8Array(18*r),this.ind=new Uint8Array(r),this.pos=0,this.ipos=0}add(r,e,t){this.vertices[this.pos]=r[3*e+0],this.vertices[this.pos+1]=r[3*e+1],this.vertices[this.pos+2]=r[3*e+2],this.colors[this.pos]=t>>16,this.colors[this.pos+1]=t>>8&255,this.colors[this.pos+2]=t&255,this.pos+=3}addUncolored(r,e){this.vertices[this.pos]=r[3*e+0],this.vertices[this.pos+1]=r[3*e+1],this.vertices[this.pos+2]=r[3*e+2],this.pos+=3}setind(r){this.ind[this.ipos++]=r}makePoly(r,e,t){const n=r;for(let i=1;3*(i+1)<n.length;i++)this.add(n,0,e),this.add(n,i,e),this.add(n,i+1,e),this.setind(t)}setAttributes(r){r.setAttribute("position",new Xe(this.vertices,3));const e=this.colors.subarray(0,9*this.sz);r.setAttribute("color",new Xe(e,3,!0))}makeGroups(r){r.clearGroups();for(let e=0;e<this.ipos;){const t=e++,n=this.ind[t];for(;this.ind[e]===n;)e++;r.addGroup(3*t,3*(e-t),n)}}saveOriginalColors(){this.colors.copyWithin(this.pos,0,this.pos)}},ov=class{constructor(r,e,t,n){this.texturePtr=void 0,this.twistVal=-1,this.isDup=!!e.isDup,this.faceNum=e.face,this.stickerStart=r.ipos;const i=new he(e.color).getHex();this.origColor=i,this.origColorStickeringMask=i,n?.stickeringMask&&this.setStickeringMask(r,n.stickeringMask),this.faceColor=i;const s=this.stickerCoords(e.coords,t);r.makePoly(s,this.faceColor,this.isDup?4:0),this.stickerEnd=r.ipos}stickerCoords(r,e){return av(r.slice(),e)}hintCoords(r,e,t,n){r=this.stickerCoords(r,t),n=n.slice();for(let s=0;s<3;s++)n[s]*=.5*e;const i=new Array(r.length);for(let s=0;3*s<r.length;s++){const a=r.length/3-1-s;i[3*s]=r[3*a]+n[0],i[3*s+1]=r[3*a+1]+n[1],i[3*s+2]=r[3*a+2]+n[2]}return i}foundationCoords(r){const e=r.slice();for(let t=0;t<r.length;t++)e[t]=r[t]*.999;return e}addHint(r,e,t,n,i,s){this.hintStart=r.ipos;const a=this.hintCoords(e.coords,n,i,s);r.makePoly(a,this.faceColor,t&&!this.isDup?2:4),this.hintEnd=r.ipos}addFoundation(r,e,t){this.foundationStart=r.ipos;const n=this.foundationCoords(e.coords);r.makePoly(n,t,this.isDup?4:6),this.foundationEnd=r.ipos}setHintStickers(r,e){const t=this.isDup||!e?4:2;for(let n=this.hintStart;n<this.hintEnd;n++)r.ind[n]=t|r.ind[n]&1}setStickeringMask(r,e){let t=0;switch(e){case"regular":{t=this.origColor;break}case"dim":{this.origColor===16777215?t=14540253:t=new he(this.origColor).multiplyScalar(.5).getHex();break}case"oriented":{t=16746751;break}case"ignored":{t=4473924;break}case"invisible":t=this.origColor}this.origColorStickeringMask=t;for(let n=9*this.stickerStart;n<9*this.stickerEnd;n+=3)r.colors[r.pos+n]=t>>16,r.colors[r.pos+n+1]=t>>8&255,r.colors[r.pos+n+2]=t&255;for(let n=9*this.hintStart;n<9*this.hintEnd;n+=3)r.colors[r.pos+n]=t>>16,r.colors[r.pos+n+1]=t>>8&255,r.colors[r.pos+n+2]=t&255;this.setHintStickers(r,e!=="invisible"&&!this.isDup)}addUVs(r){const e=r.uvs,t=r.vertices,n=new Array(3);for(let i=3*this.stickerStart;i<3*this.stickerEnd;i++){n[0]=t[3*i],n[1]=t[3*i+1],n[2]=t[3*i+2];const s=r.tm.getuv(this.faceNum,n);e[2*i]=s[0],e[2*i+1]=s[1]}for(let i=3*this.hintStart;i<3*this.hintEnd;i++){n[0]=t[3*i],n[1]=t[3*i+1],n[2]=t[3*i+2];const s=r.tm.getuv(this.faceNum,n);e[2*i]=s[0],e[2*i+1]=s[1]}}setTexture(r,e){if(this.texturePtr===e)return 0;this.texturePtr=e;const t=6*r.sz;return r.uvs.copyWithin(6*this.stickerStart,6*e.stickerStart+t,6*e.stickerEnd+t),r.uvs.copyWithin(6*this.hintStart,6*e.hintStart+t,6*e.hintEnd+t),1}setColor(r,e){const t=e.origColorStickeringMask;if(this.faceColor!==t){this.faceColor=t;const n=r.pos;return r.colors.copyWithin(9*this.stickerStart,9*e.stickerStart+n,9*e.stickerEnd+n),r.colors.copyWithin(9*this.hintStart,9*e.hintStart+n,9*e.hintEnd+n),1}else return 0}},lv=class{constructor(r,e,t){this.cubie=new Un;const n=r.coords,i=new xd(n.length/3-2,e);for(let a=1;3*a+3<n.length;a++)i.addUncolored(n,0),i.addUncolored(n,a),i.addUncolored(n,a+1);this.geo=new Fe,i.setAttributes(this.geo);const s=new at(this.geo,Nn);s.userData.quantumMove=t.notationMapper.notationToExternal(new Ad(r.name)),this.cubie.scale.setScalar(.99),this.cubie.add(s)}},cv=class{constructor(r){const e=r.coordinates;this.axis=new A(e[0],e[1],e[2]),this.order=r.order}},hv=.71,Mn=.5,uv=class extends We{constructor(r,e,t,n=!1,i=!1,s=1,a=1,o={}){if(super(),this.scheduleRenderCallback=r,this.kpuzzle=e,this.stickerDat=t,this.faceletScale=a,this.params=o,this.stickerTargets=[],this.controlTargets=[],this.textured=!1,this.showHintStickers=!1,this.showFoundations=!1,this.#e=!1,t.stickers.length===0)throw Error("Reuse of stickerdat from pg; please don't do that.");this.hintMaterial=new je({vertexColors:!0,transparent:!0,opacity:.5}),this.hintMaterialDisposable=!0,this.stickerMaterial=bs,this.stickerMaterialDisposable=!1,this.axesInfo={};const l=this.stickerDat.axis;for(const L of l)this.axesInfo[L.quantumMove.family]=new cv(L);const c=this.stickerDat.stickers;this.stickers={},this.materialArray1=new Array(8),this.materialArray2=new Array(8),this.showFoundation(n),n=!0;let h=0;const d=3;for(const L of c){const M=L.coords.length/3;h+=d*(M-2)}const u=new xd(h,t.textureMapper),f=0,m=[];let p=0;for(const L of t.faces)m.push(rv(L.coords)),p+=nv(L.coords);const g=a!=="auto"?a*a:hv;let _=0;for(const L of c)L.isDup||_++;const y=Math.sqrt(p/_)*(1-Math.sqrt(g))/2;for(const L of c){const M=L.orbit,S=L.ord,R=L.ori;this.stickers[M]||(this.stickers[M]=[]),this.stickers[M][R]||(this.stickers[M][R]=[]);const k={};o.stickeringMask&&(k.stickeringMask=Ol(o.stickeringMask,M,S,R,!1));const W=new ov(u,L,y,k);this.stickers[M][R][S]=W}this.showHintStickers=i,i=!0;for(const L of c){const M=L.orbit,S=L.ord,R=L.ori;this.stickers[M][R][S].addHint(u,L,i,s,y,m[L.face])}this.foundationBound=u.ipos;for(const L of c){const M=L.orbit,S=L.ord,R=L.ori;n&&this.stickers[M][R][S].addFoundation(u,L,f)}const x=new Fe;u.setAttributes(x),u.makeGroups(x);const v=new at(x,this.materialArray1);v.scale.set(Mn,Mn,Mn),this.add(v);const b=new at(x,this.materialArray2);b.scale.set(Mn,Mn,Mn),this.add(b);const T=this.stickerDat.faces;this.movingObj=b,this.fixedGeo=x,this.filler=u;for(const L of T){const M=new lv(L,t.textureMapper,this.stickerDat);M.cubie.scale.set(Mn,Mn,Mn),this.add(M.cubie),this.controlTargets.push(M.cubie.children[0])}u.saveOriginalColors(),t.stickers=[],this.updateMaterialArrays()}#e;dispose(){this.fixedGeo&&this.fixedGeo.dispose(),this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterial=bs,this.stickerMaterialDisposable=!1),this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterial=bs,this.hintMaterialDisposable=!1)}experimentalGetStickerTargets(){return this.stickerTargets}experimentalGetControlTargets(){return this.controlTargets}#t(r){try{return this.kpuzzle.moveToTransformation(r),!0}catch{return!1}}getClosestMoveToAxis(r,e){let t=null,n=0,i=a=>a;switch(e.depth){case"secondSlice":{i=a=>a.modified({innerLayer:2});break}case"rotation":{i=a=>a.modified({family:`${a.family}v`});break}}for(const a of this.stickerDat.axis){const o=r.dot(new A(...a.coordinates));if(o>n){const l=this.stickerDat.notationMapper.notationToExternal(i(a.quantumMove));if(!l)continue;this.#t(l)&&(n=o,t=l)}}if(!t)return null;e.invert&&(t=t.invert());const s=this.kpuzzle.moveToTransformation(t).repetitionOrder();return{move:t,order:s}}setStickeringMask(r){if(this.params.stickeringMask=r,r.specialBehaviour!=="picture")for(const e in this.kpuzzle.definition.orbits){const{numPieces:t,numOrientations:n}=this.kpuzzle.definition.orbits[e];for(let i=0;i<t;i++)for(let s=0;s<n;s++){const a=Ol(r,e,i,s,!1),o=this.stickers[e][s][i];this.textured&&this.hintMaterialDisposable&&a==="invisible"||o.setStickeringMask(this.filler,a)}}this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos)}onPositionChange(r){const e=r.state.experimentalToTransformation();if(!e)throw new Error("indistinguishable pieces are not supported by PG3D yet");const t=new Yt;this.movingObj.rotation.copy(t);let n=0;const i=this.filler,s=i.ind;if(!this.lastPos||this.#e||!this.lastPos.state.experimentalToTransformation().isIdentical(e)){for(const o in this.stickers){const l=this.stickers[o],c=e.transformationData[o],h=l.length;if(h===1){const d=l[0];for(let u=0;u<d.length;u++){const f=c.permutation[u];this.textured?n+=d[u].setTexture(i,d[f]):n+=d[u].setColor(i,d[f])}}else for(let d=0;d<h;d++){const u=l[d];for(let f=0;f<u.length;f++){const m=(d+h-c.orientation[f])%h,p=c.permutation[f];this.textured?n+=u[f].setTexture(i,l[m][p]):n+=u[f].setColor(i,l[m][p])}}}this.lastPos=r}let a=0;for(const o of r.movesInProgress){const l=o.move,c=this.stickerDat.unswizzle(l);if(!c)return;const h=l;let d;try{d=this.kpuzzle.moveToTransformation(h.modified({amount:1}))}catch(p){const g=this.stickerDat.notationMapper.notationToInternal(h);if(g){const _=this.stickerDat.notationMapper.notationToExternal(g.modified({amount:1}));_&&(d=this.kpuzzle.moveToTransformation(_))}if(!d)throw console.log(p),p}const u=this.axesInfo[c.family],f=u.axis,m=-this.ease(o.fraction)*o.direction*c.amount*tn/u.order;if(this.movingObj.rotateOnAxis(f,m),this.lastMoveTransformation!==d){for(const p in this.stickers){const g=this.stickers[p],_=g.length,y=d.transformationData[p];for(let x=0;x<_;x++){const v=g[x];for(let b=0;b<v.length;b++){const T=v[b],L=y.permutation[b];let M=0;if((L!==b||y.orientation[b]!==0)&&(M=1),M!==T.twistVal){if(M){for(let S=T.stickerStart;S<T.stickerEnd;S++)s[S]|=1;for(let S=T.hintStart;S<T.hintEnd;S++)s[S]|=1;for(let S=T.foundationStart;S<T.foundationEnd;S++)s[S]|=1}else{for(let S=T.stickerStart;S<T.stickerEnd;S++)s[S]&=-2;for(let S=T.hintStart;S<T.hintEnd;S++)s[S]&=-2;for(let S=T.foundationStart;S<T.foundationEnd;S++)s[S]&=-2}T.twistVal=M,a++}}}}this.lastMoveTransformation=d}}(this.#e||a)&&this.filler.makeGroups(this.fixedGeo),(this.#e||n)&&(this.textured&&(this.fixedGeo.getAttribute("uv").updateRange={offset:0,count:6*this.foundationBound},this.fixedGeo.getAttribute("uv").needsUpdate=!0),(this.#e||!this.textured)&&(this.fixedGeo.getAttribute("color").updateRange={offset:0,count:9*this.foundationBound},this.fixedGeo.getAttribute("color").needsUpdate=!0)),this.scheduleRenderCallback(),this.#e=!1}ease(r){return gd(r)}showHintFacelets(r){this.showHintStickers=r}updateMaterialArrays(){for(let r=0;r<8;r++)this.materialArray1[r]=Nn,this.materialArray2[r]=Nn;this.materialArray1[0]=this.stickerMaterial,this.materialArray2[1]=this.stickerMaterial,this.showHintStickers?(this.materialArray1[2]=this.hintMaterial,this.materialArray2[3]=this.hintMaterial):(this.materialArray1[2]=Nn,this.materialArray2[3]=Nn),this.showFoundations?(this.materialArray1[6]=ch,this.materialArray2[7]=ch):(this.materialArray1[6]=Nn,this.materialArray2[7]=Nn)}showFoundation(r){this.showFoundations=r}setHintStickerOpacity(r){this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),r===0?this.hintMaterial=Nn:r===1?this.hintMaterial=this.stickerMaterial:(this.hintMaterial=new je({vertexColors:!0,transparent:!0,opacity:r}),this.hintMaterialDisposable=!0)}experimentalUpdateOptions(r){r.hintFacelets!==void 0&&this.showHintFacelets(r.hintFacelets!=="none"),r.showFoundation!==void 0&&this.showFoundation(r.showFoundation),r.hintStickerOpacity!==void 0&&this.setHintStickerOpacity(r.hintStickerOpacity),this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos),typeof r.faceletScale<"u"&&r.faceletScale!==this.faceletScale&&console.warn("Dynamic facelet scale is not yet supported for PG3D. For now, re-create the TwistyPlayer to change the facelet scale."),this.updateMaterialArrays(),this.scheduleRenderCallback()}adduvs(){const r=this.filler;if(r.uvs)return;this.filler.uvs=new Float32Array(12*r.sz);for(const t in this.stickers){const n=this.stickers[t],i=n.length;for(let s=0;s<i;s++){const a=n[s];for(const o of a)o.addUVs(this.filler)}}r.uvs.copyWithin(6*r.sz,0,6*r.sz);const e=r.uvs.subarray(0,6*r.sz);this.fixedGeo.setAttribute("uv",new Xe(e,2,!0))}experimentalUpdateTexture(r,e,t){e||(r=!1),r&&!this.filler.uvs&&this.adduvs(),this.textured=r,this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterialDisposable=!1),r?(this.stickerMaterial=new je({map:e,side:Vt,transparent:!1}),this.stickerMaterialDisposable=!0):this.stickerMaterial=bs,this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),r?(this.hintMaterial=new je({map:t,side:Vt,transparent:!0}),this.hintMaterialDisposable=!0):this.hintMaterial=bs,r&&this.showHintFacelets(t!==null),this.updateMaterialArrays(),this.#e=!0,this.lastPos&&this.onPositionChange(this.lastPos),this.scheduleRenderCallback()}},pv=class{constructor(){this.renderTargets=new Set,this.twisty3Ds=new Set,this.threeJSScene=(async()=>new(await wd).Scene)()}addRenderTarget(r){this.renderTargets.add(r)}scheduleRender(){for(const r of this.renderTargets)r.scheduleRender()}async addTwisty3DPuzzle(r){this.twisty3Ds.add(r),(await this.threeJSScene).add(r)}async removeTwisty3DPuzzle(r){this.twisty3Ds.delete(r),(await this.threeJSScene).remove(r)}async clearPuzzles(){for(const r of this.twisty3Ds)(await this.threeJSScene).remove(r);this.twisty3Ds.clear()}};async function mv(r,e){return new ev(await Td.kpuzzle(),r,e)}async function gv(r,e,t,n,i){return new uv(r,await e.kpuzzle(),(await e.pg()).get3d({darkIgnoredOrbits:i}),!0,t==="floating",void 0,n)}export{ev as Cube3D,uv as PG3D,fv as T3I,pv as Twisty3DScene,mv as cube3DShim,gv as pg3dShim};
