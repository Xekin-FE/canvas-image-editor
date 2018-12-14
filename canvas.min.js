class Base {
    constructor(opt){
        this.x = opt.x
        this.y = opt.y
        this.zIndex = opt.zIndex //图层
        this.rotate = opt.rotate
        this.opacity = 1
    }
    update(){
        //属性画布更新
    }
    dragUpdate(start, end){
        // 位置更新
    }
    scaleUpdate(start, end){
        // 缩放更新，角度处理
    }
    changeProperty(property, value){
        //一次操作只能更改一种属性
        this[property] = value;
        this.update()
    }
};

class Text extends Base{
    constructor(opt){
        super(opt)
        this.content = '点击编辑文字';
        this.font = '20px Arial';
        this.foWe = '400';
        this.foCo = '#fff';
        this.foFa = 'Microsoft Yahei' ;
        this.FiBg = false;
    }
    initUpdate(){
        let text = this.content;
        ctx.font = this.font;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        let tw = ctx.measureText(text).width;
        let ftop = 3*can.height/4 -5;
        let fleft = can.width/2;
        ctx.rect(fleft-tw/2, ftop- 10, tw+20, 30);
        ctx.fillStyle= "#fff";
        ctx.strokeStyle='#fff';
        ctx.strokeText(text, fleft, ftop);
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

    keydown(e){

    }
    keymove(e){

    }
    keyup(e){

    }

    initUpdate(opt){
        this.can.height = opt.height
        this.can.width = opt.width
        this.can.addEventListener('onmousedown',this.keydown)
        this.can.addEventListener('onmousemove',this.keymove)
        this.can.addEventListener('onmouseup',this.keyup)
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
        this.ctx.strokeStyle='#fff';
        this.ctx.strokeText(text, opt.x, opt.y);
        console.log('addText')
    }
    renderImage(src, editor){
        console.log('createImage')
        this.img.src = src;
        let maxHeight = 600;
        let maxWidth = 360;
        this.img.onload = () => {
            let imgwidth = this.img.width / this.img.height > 1 ? maxWidth : maxHeight/this.img.height*this.img.width;
            let imgheight = this.img.width / this.img.height > 1 ? maxWidth/this.img.width*this.img.height : maxHeight;
            editor.initUpdate({height:imgheight,width:imgwidth})
            this.can.width = imgwidth;
            this.can.height = imgheight;
            this.ctx.drawImage(this.img, 0, 0, imgwidth, imgheight);
            this.ctx.save();
        }
    }
    saveImage(){
        return this.can.toDataURL();
    }
};