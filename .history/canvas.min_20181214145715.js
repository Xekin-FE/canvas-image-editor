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
    constructor(){
        this.author = 'Xekin'
    }
    createText(){
        console.log('createText')
        var a = new Text()
        a.initUpdate()
    }
    createImage(){
        console.log('createImage')
        var b = new Image()
        b.initUpdate()
    }
};