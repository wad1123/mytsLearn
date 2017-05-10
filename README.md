# ts 基本数据类型：
     布尔
     boolean:true,false;

     字符串
     string:"string";

     数字(浮点型)
     number:1-9;

     数组
     Array:Array \<eleType\>;

     元组
     [ string,number,boolean... ];

     枚举
     enum enum EEE{ E1,E2,E3 };

     任意类型
     any

     虚空型
     void(子类型是undefined,null)undefined,null;

     未定义和空
     null&undefined null&&undefined;

     类型不存在
     never(any不能赋值给never)--该类型存在时会报错;

# 类型断言
    尖括号语法<>; 
    as语法;
        ----->只能在any类型中使用;


# 解构 
    --->形式赋值

# 类型检查的优点
     1.在编译时防止编译出错;
     2.便于阅读管理代码;

# 接口 interface
-     可选属性
        interface SquareConfig {
            name?:string;
            width?:number;
        }

-     只读接口 
        interface ReadonlyArray<T>

-     函数类型
        interface SearchFunc{
            ( source:string,substring: ):boolean;
        }
-     可索引的类型
        interface StringArray {
            [ index:number ]:string;
        }
-     类类型
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
-       扩展接口
        interface Teacher {
            professor:string;
        }

        interface ClassManager extends Teacher {
            manage:string;
        }

        let li = <ClassManager>{};
        li.manage = 'managing';
        li.professor = 'teaching';
        `一个接口可继承多个接口`
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
        }