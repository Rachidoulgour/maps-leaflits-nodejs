module.exports = io =>{
    io.on('connection', (socket) =>{
        console.log('nuevo usuario connectado');
        socket.on('userCoordinates', coords => {
            socket.broadcast.emit('newUserCoordinates', coords)
        })
    });
}