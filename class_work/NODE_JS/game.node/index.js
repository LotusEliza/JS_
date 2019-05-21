console.log('HELLO NodeJS');
// Для сервера
var http = require('http');
// Парсер URL;
var url = require('url');
// Для файлов
var fs = require('fs');

// Создание HTTP сервера
var server = new http.Server();
server.listen(5000);

// Обработка запросов
server.on('request', (request, response) => {
    // console.log('New request');
    // Чтение из файла
    fs.readFile('./index.html', (error, data) => {
        // Ответ клиенту
        response.end(data);
    })
})


/////////////  HTTP END   //////////////////////////
var randomcolor = require('randomcolor');
var ws = require('ws');

// Создание WS сервера
var wsServer = new ws.Server({
    port: 5555
});

var counter = 0;
var players = {
};
// Ожидание клиента
wsServer.on('connection', (client) => {
    var id = counter++;
    var player = {
        id: id,
        color: randomcolor(),
        position: {
            top: 0,
            left: 0
        }
    }; 
    players[id] = player;

    var all_players_json = JSON.stringify({
        type: 'all_players',
        info: players
    });
    client.send(all_players_json);

    wsServer.clients.forEach((cl) => {
        var message = {
            type: 'new_player',
            info: player
        };
        var message_json_string = JSON.stringify(message);
        cl.send(message_json_string);
    });

    // Событие отключения клиента
    client.on('close', () => {
        delete players[id];
        // Сообщение всем клиентам о удалении
        wsServer.clients.forEach((cl) => {
            var message = {
                type: 'remove_player',
                info: id
            };
            var message_json_string = JSON.stringify(message);
            cl.send(message_json_string);
        });
    })


    // Ожидание сообщения от клиента
    client.on('message', (message) => {
        // Если клиент прислал сообщение 'ping'
        if (message === 'ping') {
            // Ответ клиенту 'pong'
            client.send('pong');
        }

        try {
            var data = JSON.parse(message);

            switch(data.type) {
                case 'move':
                    switch(data.info) {
                        case 'Up':
                            players[id].position.top--;
                            break;
                        case 'Down':
                            players[id].position.top++;
                            break;
                        case 'Left':
                            players[id].position.left--;
                            break;
                        case 'Right':
                            players[id].position.left++;
                            break;
                    }
                    

                    wsServer.clients.forEach((cl) => {
                        var data_json = JSON.stringify({
                            type: 'update_player',
                            info: players[id]
                        });
                        cl.send(data_json);
                    })

                    break;
            }
        } catch (e) {}
    });
});