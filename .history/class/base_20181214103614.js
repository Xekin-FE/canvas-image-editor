export default class Base {
    // 图形基类 图形坐标 透明度 旋转角度
    constructor(opt){
        this.x = opt.x
        this.y = opt.y
        this.opacity = opt.opacity
        this.rotate = opt.rotate
    }
}