class A {
    constructor(){
        this.a=1;
        this.b=2
    }
}

class B extends A {
    constructor(par){
        super(par)
    }
    updated(){
        this.a=3
        console.log(A.prototype.a,B.prototype.a)
    }
}

B.updated()
