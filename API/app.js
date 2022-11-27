let express =require('express');
let mysql=require('mysql');
let app = express();
let puerto = 3000;

app.listen(puerto, function(){
    console.log("Servidor en linea");
});
//Base de datos
//Parametros de conexion 


//Los objetos van entre llaves
let conexion=mysql.createConnection({
    host: 'localhost',
    user: 'pw', //'root/
    password: '',
    database: 'pw'
})

conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Conectado a la base de datos')
    }
})

//Que obtenga cosas a traves de rutas
//Ruta de inicio  que es la raiz 
app.get('/', function(req,res){
    res.send("Ruta de inicio");
})

//Ruta a un articulos 
app.get('/api/articulos/:id',function(req,res){
    conexion.query("SELECT * FROM articulos WHERE id = ?", [req.params.id], function(error,fila){
        if(error){
            throw error
        }else{
            res.send(fila);
        }
    })
})

//Ruta para agregar un articulo
app.post('/api/articulos',function(req,res){
    let data = {descripcion:req.body.descripcion,
                precio:req.body.precio,
            cantidad:req.body.cantidad}

            let sql = "INSERT INTO articulos SET ? "
            conexion.query(sql,data,function(error,results){
                if(error){
                    throw error
                }else{
                    res.send(results);
                } 
            })
    })

//Para modificar un registro ya existe


