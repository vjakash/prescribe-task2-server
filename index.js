const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//     res.send('<h1>Hey Socket.io</h1>');
// });

io.on('connection', (socket) => {
    console.log(`${socket.id} connected to socket`);
   
    socket.on('disableAlternate', (message) => {
        io.emit('changeButton');
    })
    
});
http.listen(port, () => {
    console.log('listening on *:' + port);
});