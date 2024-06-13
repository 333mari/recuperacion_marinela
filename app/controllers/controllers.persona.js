import pool from "../config/mysql.database";

export const mostrarPersona = async (req, res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_PERSONA("${id}")`)
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const listarPersona = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_PERSONA()`)
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"Error": error})
    }
}
export const crearPersona = async (req, res) =>{
    const {nombre, apellido, edad} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_PERSONA(?,?,?)`, [nombre, apellido, edad])
        res.json({"respuesta": "El usuario ha sido creado"})
    } catch (error) {
        res.json({"Error": "Error al crear el usuario"})
    }
}
export const modificarPersona = async (req, res) =>{
    const {id, nombre, apellido, edad} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_PERSONA(?,?,?,?)`, [id, nombre, apellido, edad])
        res.json({"respuesta": "El usuario ha sido modificado"})
    } catch (error) {
        res.json({"Error": "Error al modificar usuario"})
    }
}
export const eliminarPersona = async (req, res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PERSONA("${id}")`)
        res.json({"respuesta": "El usuario ha sido eliminado"})
    } catch (error) {
        res.json({"Error": "Error al eliminar usuario"})
    }
}

