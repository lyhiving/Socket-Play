define(function(){var GEE=function(d){d||(d={});if(document.createElement("canvas").getContext){var c=this,i={},b={ctx:undefined,domElement:undefined,width:undefined,height:undefined,desiredFrameTime:1E3/60,frameCount:0,key:undefined,keyCode:undefined,mouseX:0,mouseY:0,pmouseX:undefined,pmouseY:undefined,mousePressed:false,offset:{x:0,y:0}},j=undefined,f,g=function(){for(var a=f,h=0,m=0;a;){m+=a.offsetTop;h+=a.offsetLeft;a=a.offsetParent}b.offset.x=h;b.offset.y=m};d.context||(d.context="2d");f=b.domElement=document.createElement("canvas");
b.ctx=f.getContext(d.context);if(b.ctx==null)d.fallback&&d.fallback();else{if(d.fullscreen){var e=function(){g();b.width=d.width?f.width=d.width:f.width=window.innerWidth;b.height=d.height?f.height=d.height:f.height=window.innerHeight;c.loop||c.draw&&c.draw()};window.addEventListener("resize",e,false);e();if(!d.container){document.body.style.margin="0px";document.body.style.padding="0px";document.body.style.overflow="hidden"}d.container=d.container||document.body}else{d.width||(d.width=500);d.height||
(d.height=500);window.addEventListener("resize",g,false);g();c.__defineSetter__("width",function(a){b.width=f.width=a});c.__defineSetter__("height",function(a){b.height=f.height=a});c.width=d.width;c.height=d.height}if(d.container){d.container.appendChild(f);g()}e=function(a){c.__defineGetter__(a,function(){return b[a]})};e("ctx");e("domElement");e("width");e("height");e("frameCount");e("key");e("keyCode");e("mouseX");e("mouseY");e("pmouseX");e("pmouseY");e("mousePressed");e=function(){};c.loop=true;
c.keyup=e;c.keydown=e;c.draw=e;c.mousedown=e;c.mouseup=e;c.mousemove=e;c.mousedrag=e;c.mouseover=e;c.mouseout=e;c.__defineGetter__("frameRate",function(){return 1E3/j});c.__defineGetter__("frameTime",function(){return j});c.__defineGetter__("keyPressed",function(){for(var a in i)if(i[a])return true;return false});c.__defineSetter__("frameTime",function(a){b.desiredFrameTime=a});c.__defineSetter__("frameRate",function(a){b.desiredFrameTime=k/a});f.addEventListener("mouseover",function(){g();c.mouseover()},
false);f.addEventListener("mouseout",function(){g();c.mouseout()},false);var l=function(){c.mousemove()};f.addEventListener("mousemove",function(a){var h=a.pageX-b.offset.x;a=a.pageY-b.offset.y;if(b.pmouseX==undefined){b.pmouseX=h;b.pmouseY=a}else{b.pmouseX=b.mouseX;b.pmouseY=b.mouseY}b.mouseX=h;b.mouseY=a},false);f.addEventListener("mousemove",l,false);f.addEventListener("mousedown",function(){b.mousePressed=true;c.mousedown();f.addEventListener("mousemove",c.mousedrag,false);f.removeEventListener("mousemove",
l,false)},false);f.addEventListener("mouseup",function(){b.mousePressed=false;c.mouseup();f.removeEventListener("mousemove",c.mousedrag,false);f.addEventListener("mousemove",l,false)},false);window.addEventListener("keydown",function(a){a=a.keyCode;b.key=String.fromCharCode(a);b.keyCode=a;i[a]=true;c.keydown()},false);window.addEventListener("keyup",function(a){a=a.keyCode;b.key=String.fromCharCode(a);b.keyCode=a;i[a]=false;c.keyup()},false);var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,j)}}();b._idraw=function(){b.frameCount++;var a=(new Date).getTime();c.draw();a=(new Date).getTime()-a;j=a>b.desiredFrameTime?a:b.desiredFrameTime;c.loop&&n(b._idraw)};b._idraw()}}else d.fallback&&d.fallback()};return GEE;});