//Importar o módulo HTTP e URL
const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(response, file) {
    fs.readFile(file, function (err, data){
        response.end(data);
    });
}

//Função Web Server
var callback = function (request, response){
    response.writeHead(200, {"Content-type": "text/plain"});
    
    var parts = url.parse(request.url);

    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "./views/index.html");
    }
    else if (parts.path == "/contatos"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "./views/contato.html");
    }
    else if (parts.path == "/produtos"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "./views/produto.html");
    }
    else if (parts.path == "/catalogos"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "./views/catalogo.html");   
    }
    else if (parts.path == "/abertura/TipoDocx"){
        response.writeHead(200, {"Content-type": "application/msword"});
        readFile(response, "./recursos/arquivo.docx");    
    }
    else if (parts.path == "/abertura/TipoJpeg"){
        response.writeHead(200, {"Content-type": "image/jpeg"});
        readFile(response, "./recursos/arquivo.jpeg");     
    }
    else if (parts.path == "/abertura/TipoMp3"){
        response.writeHead(200, {"Content-type": "audio/mp3"});
        readFile(response, "./recursos/arquivo.mp3");     
    }
    else if (parts.path == "/abertura/TipoMp4"){
        response.writeHead(200, {"Content-type": "video/mp4"});
        readFile(response, "./recursos/arquivo.mp4");     
    }
    else if (parts.path == "/abertura/TipoJson"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "./recursos/arquivo.json");     
    }
    else if (parts.path == "/abertura/TipoMd"){
        response.writeHead(200, {"Content-type": "text/md"});
        readFile(response, "./recursos/arquivo.md");     
    }
    else if (parts.path == "/abertura/TipoPdf"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "./recursos/arquivo.pdf");     
    }
    else{
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "./views/404.html");
    }

};

//Criar Servidor
var server = http.createServer(callback);
server.listen(3000);
console.log("[SERVER - OK] ... Servidor rodando na porta 3000 em http://localhost:3000");