/**
 * 一个数组中的每一项都是数组，然后找出他们的交集
 * Created by ypj on 18-9-19.
 */
function jiaoji() {
    var arr = Array.from(arguments);
    return arr.reduce((prev,cur)=>{
        return prev.filter((item)=>{
            return cur.indexOf(item)!=-1;
        })
    });
}

console.log(jiaoji([1,2,3],[3,4,5],[3,4,5]));