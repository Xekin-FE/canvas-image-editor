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
        this.content = '点击编辑文字'
        this.fontSize = '20px'
        this.fontWeight = '400'
        this.fontColor = '#fff'
        this.fontFamily = 'Microsoft Yahei' 
        this.isFillBg = false
    }
    initUpdate(){

    }
    update(property, value){
        //一次操作只能更改一种属性
        this[property] = value
    }
};

class Canvas {
    constructor(obj){
        this.author = 'Xekin'
        this.can = obj
        this.ctx = obj.getContext('2d')
        this.img = new Image()
    }
    createText(){
        console.log('createText')
        var a = new Text()
        a.initUpdate()
    }
    createImage(src){
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