// var c = document.getElementById("myCanvas");
// c.width=img.width;
// c.height=img.height;
// var cxt = c.getContext("2d");
// cxt.fillStyle = "rgba(255, 255, 255, 0)";
// cxt.fillRect(0, 0, c.width, c.height);
// cxt.drawImage(img,0,0);
// cxt.save();
// cxt.font = fsz+"px Arial";
// cxt.textBaseline = 'middle';//更改字号后，必须重置对齐方式，否则居中麻烦。设置文本的垂直对齐方式
// cxt.textAlign = 'center';
// var tw = cxt.measureText(text).width;
// var ftop = c.height/2-5;
// var fleft = c.width/2;
// cxt.fillStyle="#ff0000";
// cxt.fillRect(fleft-tw/2,ftop-fsz/2,tw,fsz);//矩形在画布居中方式
// cxt.fillStyle="#ffffff";
// cxt.fillText(text,fleft,ftop);//文本元素在画布居中方式
// cxt.strokeStyle = 'white';
// cxt.strokeText(text,fleft,ftop);//文字边框