

class A {
    constructor(obj){
        this.a= obj.name;
    }
}

class B extends A {
    constructor(par){
        super(par)
    }
    updated(){
        this.a='Hank'
    }
}

let obj1 = {
    name: 'Xekin'
}
let obj2 = {
    name: 'xxxxxx'
}

let test = new A(obj);
let test3 = new B(obj);
let test2 = new B(obj2);

test2.updated()
console.log(test.a, test2.a, test3.a)
test3.updated()
console.log(test.a, test2.a, test3.a)

