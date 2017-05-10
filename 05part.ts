let o = {
    a:'aString',
    b:123,
    c:'anotherStr'
};

let { a:newName1,b:newName2 }:{ a:string,b:number } = o;

console.log( newName1 );

class Ace{
    name:string;
    constructor(){
        this.name = 'zhangsan';
    }
    sayHello (){
        alert( 'hello' );
    }
    eating(){
        alert( "I'm eating!" )
    }
}

class Beta extends Ace{
    constructor(){
        
        super();
    }
    think(){
        super.eating();
    }
}

class Test {
    constructor( public x:string ){
        console.log( x );
    }
}