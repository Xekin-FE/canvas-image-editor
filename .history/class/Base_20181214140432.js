
// 图形基类 图形坐标 透明度 旋转角度 模式\编辑\显示
export default class Base {
    constructor(opt){
        this.x = opt.x
        this.y = opt.y
        this.zIndex = opt.zIndex //图层
        this.rotate = opt.rotate
        this.opacity = 1
    }
    set dragUpdate(start, end){
    // 位置更新
    }
    set scaleUpdate(start, end){
    // 缩放更新
    // 角度处理
    // 放大处理
    }
    set opacityUpdate(value){
        this.opacity = value
    }
}