//Variables de ambiente
let express = require('express');
let mysql = require('mysql');
let app = express();
let cors = require('cors');
app.use(express.json());
//Pa que sepa
let puerto = 3000;
//Donde los escucha
app.listen(puerto, () => {
    console.log('Servicio iniciado');
});

//Para que se cree la conexion 
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'pw',
    password: '',
    database: 'pw'
});

//Para que lo se conecte la conexcion xd
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conectado a la base de datos");
    }
})

app.get('/api/articulos', function (req, res) {
    conexion.query('SELECT * FROM Articulos', [], function (error, results) {
        if (error) {
            throw error;
        }
        else {
            res.status(200).send(results);
        }
    });
});

//Con el post se inserta un objeto nuevo 
app.post('/api/articulos', function (req, res) {
    const data = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
    };

    const sql = 'INSERT INTO Articulos SET ?';

    //Para mandarlo a ejecutar 
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        }
        else {
            res.status(200).send(results);
        }
    });
});

//Put se usa para actualizar datos
app.put('/api/articulos/:id', function (req, res) {
    const { id } = req.params;
    const { descripcion, precio, cantidad } = req.body;
    const sql = 'UPDATE Articulos SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?';

    conexion.query(sql, [descripcion, precio, cantidad, id], function (error, results) {
        if (error) {
            throw error;
        }
        else {
            res.status(200).send(results);
        }
    });
});

//Para borrar objetos
app.delete('/api/articulos/:id', function (req, res) {
    const { id } = req.params;

    conexion.query('DELETE FROM Articulos WHERE id = ?', [id], function (error, results) {
        if (error) {
            throw error;
        }
        else {
            res.status(200).send(results);
        }
    });
});