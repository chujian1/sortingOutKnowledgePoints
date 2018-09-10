/**
 * 函数防抖函数节流
 * Created by ly on 2018/9/10.
 */
//函数防抖
var timer = false;
document.getElementById("xx").onscroll = function () {
    clearTimeout(timer);
    timer = setTimeout(()=>{
        //一些操作
    },300);
};
//函数节流
var canrun = true;
document.getElementById("xx").onscroll = function () {
  if(!canrun){
      return;
  }
  canrun = false;
  setTimeout(()=>{
      //一些操作
      canrun = true;
  },300);
};
