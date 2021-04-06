//class defintion
class A{
    //properties
        name= "";
    //contructor
    constructor(n){
        this.name =n;

    }

    //method
    fun1(n){
        console.log(n);
    }
}    //end of calss a
//class defintion
class B extends A{
    //properties

    //contructor
    constructor(n){
        super(n);
        this.fun1(n);
    }

    //method
}  //end of class b
module.exports =B;