
// 图形基类 图形坐标 透明度 旋转角度
export default class Base {
    constructor(opt){
        this.x = opt.x
        this.y = opt.y
        this.opacity = 1
        this.rotate = opt.rotate
    }
    dragUpdate(start, end){
    // 位置更新
    }
    scaleUpdate(start, end){
    // 缩放更新
    // 角度处理
    // 放大处理
    }
    set opacityUpdate(value){
        this.opacity = value
    }
}