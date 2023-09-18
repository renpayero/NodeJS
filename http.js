const http = require('http')

const server = http.createServer(function(request, response){


    console.log(request.url)
    if ((request.url) == '/'){
        response.write('Welcome to the server...')
        return response.end()
    }
    if ((request.url) == '/about'){
        response.write('about this...')
        return response.end()
    }
    response.write(`
    <h1>Not found</h1>
    <p>Esta pagina no se a encontrado</p>
    <a href="/">Presione aqui para volver a la pagina inicial</a>
    `)
    response.end()
})
server.listen(3000)

console.log('servidor escuchando en el puerto 3000')