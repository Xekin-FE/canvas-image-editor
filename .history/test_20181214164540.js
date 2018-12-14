

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
    }
}

let test = new A();
let test3 = new B();
let test2 = new B();

test2.updated()
console.log(test.a, test2.a, test3.a)
test3.updated()
console.log(test.a, test2.a, test3.a)

