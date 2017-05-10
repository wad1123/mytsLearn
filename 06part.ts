{
    interface  Param {
        title:string;
    }
    interface InsObj {
        readonly x:number;
        readonly y:number;
    }
    let param:Param = { title:'this is a title' };
    param.title = 'anotherString';
    let insObj:InsObj = { x:100,y:20 };
}

let roa : ReadonlyArray<number>,
    arr: number[] = [ 1,2,3,4 ];
arr = roa as number[];
arr.push( 1 );

interface Func {
    ( param1:number, param2:string ) :boolean;
}

let realFunc:Func = function (param1: number, param2: string) {
    return true;
};

interface StringArray {
    [index:number]:string;
}

let yourArray:StringArray = [ 'stringA','stringB' ];

let num_:number = 1;

        interface ClockInterface {
            currentTime:Date;
            setTime( d:Date );
        }

        class Clock implements ClockInterface{
            currentTime:Date;
            setTime( d:Date ){
                this.currentTime = d;
            }
            constructor( h:number,m:number ){}
        }

    
interface Teacher {
    professor:string;
}

interface ClassManager extends Teacher {
    manage:string;
}

let li = <ClassManager>{};
li.manage = 'managing';
li.professor = 'teaching';

        interface Father {
            job:string;
        }
        interface Son {
            age:number;
        }
        interface Man extends Father,Son {
            name:string;
        }
    
        let man = <Man>{
            job:'web',
            age:55,
            name:'wl'
        };

    
    interface yourDreamVal{
        ( valName:string,idNumber:number ):string;
        valString:string;
        method():void;
    }

    function createDreamVal():yourDreamVal{
        let myVal = <yourDreamVal>function( valName:string,idNumber:number ){

        };
        myVal.valString = 'strageVal';
        myVal.method = function(){};
        return myVal;
    }

    class Control {
        private state:any;
    }

    interface SelectableControl extends Control {
        select():void;
    }