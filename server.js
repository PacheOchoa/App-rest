const HTTP = require('http');
const PORT = 5000;

const BOOKS = [
    {
      'title' : 'libro de programación',
      'author' : 'Sergio Ochoa Zamora',
      'pages': 220
    },
    {
        'title' : 'estructuras de datos',
        'author' : 'Sergio Ochoa Zamora',
        'pages': 220
      },
      {
        'title' : 'algoritmos',
        'author' : 'Sergio Ochoa Zamora',
        'pages': 220
      },
      {
        'title' : 'matemáticas I',
        'author' : 'Sergio Ochoa Zamora',
        'pages': 220
      },
];


const SERVER = HTTP.createServer(function(request,response){
    //response.statusCode = 404;
    const {method,url} = request;

    let body = [];

    //console.log(request.headers.authorization);
    request.on('data', dataCliente => {
        body.push(dataCliente);
    });

    request.on('end',function(){

        body = Buffer.concat(body).toString();
        let status = 404;
        const res = {
            status: 404,
            data : null
        }

        if(method === 'GET' && url === '/libros'){
             status = 200;
             res.status = 200;
             res.data = BOOKS;

        }else if(method === 'POST' && url === '/libros'){
              status = 200;
               const {title,author,pages} = JSON.parse(body);
               BOOKS.push({title,author,pages});
               res.status = 200;
               res.data = BOOKS;
        }

        response.writeHead(status,{'Content-Type': 'application/json'})

        response.end(
          JSON.stringify(res)
          
      );


    });
   
});

SERVER.listen(PORT,function(){
    console.log('el server se está ejecutando');
});





