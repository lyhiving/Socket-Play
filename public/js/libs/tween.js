define(function(){var TWEEN=TWEEN||function(){var a,d,c,b,e=[];return{start:function(a){c=setInterval(this.update,1E3/(a||60))},stop:function(){clearInterval(c)},add:function(a){e.push(a)},remove:function(c){a=e.indexOf(c);a!==-1&&e.splice(a,1)},update:function(){a=0;d=e.length;for(b=(new Date).getTime();a<d;)e[a].update(b)?a++:(e.splice(a,1),d--)}}}();
TWEEN.Tween=function(a){var d={},c={},b={},e=1E3,m=0,h=null,n=TWEEN.Easing.Linear.EaseNone,i=null,j=null,k=null;this.to=function(f,c){c!==null&&(e=c);for(var d in f)a[d]!==null&&(b[d]=f[d]);return this};this.start=function(){TWEEN.add(this);h=(new Date).getTime()+m;for(var f in b)a[f]!==null&&(d[f]=a[f],c[f]=b[f]-a[f]);return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(a){m=a;return this};this.easing=function(a){n=a;return this};this.chain=function(a){i=a};this.onUpdate=
function(a){j=a;return this};this.onComplete=function(a){k=a;return this};this.update=function(b){var g,l;if(b<h)return!0;b=(b-h)/e;b=b>1?1:b;l=n(b);for(g in c)a[g]=d[g]+c[g]*l;j!==null&&j.call(a,l);if(b==1)return k!==null&&k.call(a),i!==null&&i.start(),!1;return!0}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};
TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return-a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a;return-0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return--a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a;return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};
TWEEN.Easing.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a;return-0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a*a;return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};
TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0)return 0;if(a==1)return 1;if((a*=2)<1)return 0.5*Math.pow(2,10*(a-1));return 0.5*(-Math.pow(2,-10*(a-1))+2)};
TWEEN.Easing.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1)return-0.5*(Math.sqrt(1-a*a)-1);return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(a){var d,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);!c||c<1?(c=1,d=b/4):d=b/(2*Math.PI)*Math.asin(1/c);return-(c*Math.pow(2,10*(a-=1))*Math.sin((a-d)*2*Math.PI/b))};
TWEEN.Easing.Elastic.EaseOut=function(a){var d,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);!c||c<1?(c=1,d=b/4):d=b/(2*Math.PI)*Math.asin(1/c);return c*Math.pow(2,-10*a)*Math.sin((a-d)*2*Math.PI/b)+1};
TWEEN.Easing.Elastic.EaseInOut=function(a){var d,c=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);!c||c<1?(c=1,d=b/4):d=b/(2*Math.PI)*Math.asin(1/c);if((a*=2)<1)return-0.5*c*Math.pow(2,10*(a-=1))*Math.sin((a-d)*2*Math.PI/b);return c*Math.pow(2,-10*(a-=1))*Math.sin((a-d)*2*Math.PI/b)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};TWEEN.Easing.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};
TWEEN.Easing.Back.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*(3.5949095*a-2.5949095);return 0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};
TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5)return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5;return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};return TWEEN;});