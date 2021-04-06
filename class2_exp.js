//class definition
class A{
    //properties
        name ="";
    //constructor
    constructor(n){
        this.name =n;
    }

    //method
    fun1(n){
        console.log(n);
    }
}
class B extends A{
    //properties

    //constructor
    constructor(n){
        super(n);
        this.fun1(n);

    }

    //method
    addition(p,q){
         console.log(`addition is ${p+q}`);
    }
    multiplication(p,q){
        console.log(`multiplication is ${p*q}`);

    }

}
module.exports = B;