const http = require('http');

let contador = 0.5;

const servidor = http.createServer(function(request, response){
    contador = contador + 0.5;
    // console.log("alguem bateu na porta");
    // response.end('Mensagem no navegador');
    // response.write(`voce acessou este site ${contador} vezes`); 
    
    //console.log(request.url);
    //
    if(request.url === '/'){
        response.write("<h1> Voce esta na pagina principal </h1>")
    }else{
        response.write(`Voce esta acessando a pagina ${request.url}`)
    }
    response.end();
});

servidor.listen(3000, function(){
    console.log("o servidor esta funcionando")
});
