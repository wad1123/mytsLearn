let unkown : any = 'string';
unkown = 5;
unkown = true;
function voidFunc() : void{
    console.log( 'this is a void function' );
    return undefined;
}
let number : any = '123';
let trueNumber : number = ( number as string ).length;
const dog = {
    name:'ben',
    age:2,
    eat:'bones'
}
dog.name = 'Howard';