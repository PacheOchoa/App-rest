const HTTP = require('http');
const PORT = 5000;

const BOOKS = [
    {
      'title' : 'libro de programación',
      'author' : 'Sergio Ochoa Zamora',
      'pages': 220
    },
    {
        'title' : 'estructurasde datos',
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
    response.setHeader('Content-Type','application/json');
    
    response.end(
        JSON.stringify({data: BOOKS})
    );
});

SERVER.listen(PORT,function(){
    console.log('el server se está ejecutando');
});

