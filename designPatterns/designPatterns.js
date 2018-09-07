/**
 * 四种设计模式
 * Created by ly on 2018/9/7.
 */
//工厂模式
function createPerson(name,age,job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = ()=>{
        console.log(this.name);
    };
    return o;
}
const person1 = createPerson("y",13,"Engineer");
const person2 = createPerson("z",11,"Engineer");
/*
* 解决了多个对象相似的问题
* 但没有解决对象识别的问题（即：无法得知对象的类型）
* */


//构造函数模式
function Person1(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName() {
    console.log(this.sayName);
}
const person3 = new Person1("y",13,"engineer");
const person4 = new Person1("z",11,"engineer");
/**
 * 函数名首字母大写
 * 创建的两个对象实例都有一个constructor属性指向Person
 * 解决了对象类型的识别问题
 * 但是全局函数中定义的函数实际上只能被某个对象调用
 * 对象需要定义很多方法，就需要定义很多个全局函数
 */


//原型模式
function Person2(){}
Person2.prototype.name = "";
Person2.prototype.age = "";
Person2.prototype.job = "";
Person2.prototype.sayName = ()=>{
    console.log(this.name);
};
const person3 = new Person2();
const person4 = new Person2();
console.log(person3.sayName() === person4.sayName());//true 两个输出都为""
person3.name = "y";
person4.name = "z";
console.log(person3.sayName());//"y"
console.log(person4.sayName());//"z"
/*
* 解决了构造函数遗留下来的问题
* 但是，某个属性值若为引用类型，那么所构建的所有实例都指向了同一个值
* */

/*
* 组合模式：构造函数模式+原型模式
* 构造函数模式用于定义实例属性，原型模式用于定义方法和共享的属性
* */