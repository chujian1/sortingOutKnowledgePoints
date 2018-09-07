/**
 * Created by ly on 2018/9/7.
 */
/*
首先引入socket.io
<script src="http://cdn.socket.io/stable/socket.io.js"></script>
*/
//创建Socket.IO实例，建立链接
var socket = new io.WebSocket("localhost",{port:8080});
socket.connect();
//添加连接监听器
socket.on("connect",()=> {
    console.log("client has connected to the server");
});
//发送消息到服务器
function sendMessageToServer(message) {
    socket.send(message);
}
//添加消息监听器
socket.on("message",(data)=>{
    console.log("client received message,",data);
});
//添加关闭连接监听器
socket.on("disconnect",()=>{
    console.log("client has disconnect");
});
