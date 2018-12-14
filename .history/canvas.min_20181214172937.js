class Base {
    constructor(opt){
        this.x = opt.x
        this.y = opt.y
        this.zIndex = opt.zIndex //图层
        this.rotate = opt.rotate
        this.opacity = 1
    }
    dragUpdate(start, end){
    // 位置更新
    }
    scaleUpdate(start, end){
    // 缩放更新
    // 角度处理
    // 放大处理
    }
    opacityUpdate(value){
        this.opacity = value
    }
};

class Text extends Base{
    constructor(opt){
        super(opt)
        this.content = '点击编辑文字';
        this.fontSize = '20px';
        this.fontWeight = '400';
        this.fontColor = '#fff';
        this.fontFamily = 'Microsoft Yahei' ;
        this.isFillBg = false;
    }
    initUpdate(){
        let text = '点击编辑文字';
        ctx.font = '20px Arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        let tw = ctx.measureText(text).width;
        let ftop =3*can.height/4 -5;
        let fleft = can.width/2;
        ctx.rect(fleft-tw/2, ftop- 10, tw+20, 30);
        ctx.fillStyle= "#fff";
        ctx.strokeStyle='#fff';
        ctx.strokeText(text, fleft, ftop);
    }
    changeProperty(property, value){
        //一次操作只能更改一种属性
        this[property] = value;
    }
};
class CanvasBase {
    constructor(obj){
        this.author = 'Xekin'
        this.can = obj
        this.ctx = obj.getContext('2d')
    }
}
// Editor 暴露最后的元素参数给 Canvas 绘制，Canvas 一旦绘制不可修改
class Editor extends CanvasBase{
    constructor(obj){
        super(obj);
    }
    initUpdate(opt){
        this.can.height = opt.height
        this.can.width = opt.width
    }
    createText(){
        
    }
    returnParams(){
        
    }
}
class Canvas extends CanvasBase{
    constructor(obj){
        super(obj);
        this.img = new Image();
    }
    renderText(opt){
        let text = opt.contents;
        this.ctx.font = opt.font;
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        let tw = this.ctx.measureText(text).width;
        let ftop = 3*this.can.height/4;
        let fleft = this.can.width/2;
        this.ctx.rect(fleft-tw/2, ftop- 10, tw+20, 30);
        this.ctx.fillStyle= "#fff";
        this.ctx.strokeStyle='#fff';
        this.ctx.strokeText(text, fleft, ftop);
        console.log('addText')
    }
    renderImage(src){
        console.log('createImage')
        this.img.src = src;
        let maxHeight = 600;
        let maxWidth = 360;
        this.img.onload = () => {
            let imgwidth = this.img.width / this.img.height > 1 ? maxWidth : maxHeight/this.img.height*this.img.width;
            let imgheight = this.img.width / this.img.height > 1 ? maxWidth/this.img.width*this.img.height : maxHeight;
            this.can.width = imgwidth;
            this.can.height = imgheight;
            this.ctx.drawImage(this.img, 0, 0, imgwidth, imgheight);
            this.ctx.save();
        }
    }
};