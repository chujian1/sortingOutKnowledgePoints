/**
 *
 * Created by ly on 2018/9/7.
 */
//创建websocket实例
var socket = new WebSocket("ws:localhost://8080");//ws表示websocket协议
//打开socket
socket.open = function (event) {
    //发送一个初始消息
    socket.send("i am the client and i am listening!");
    //监听消息
    socket.onmessage = function (event) {
        console.log("client received a message",event);
    };
    //监听socket关闭
    socket.onclose = function (event) {
        console.log("client notified socket has closed,",event);
    };
    //关闭socket
    socket.close();
};