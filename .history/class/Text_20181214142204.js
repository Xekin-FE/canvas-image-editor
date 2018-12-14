// Text 类
import Base from './Base.js';
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
    set update(property, value){
        //一次操作只能更改一种属性
        this[property] = value
    }
};
export default Text;