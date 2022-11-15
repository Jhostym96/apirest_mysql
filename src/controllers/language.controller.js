import { getConnection } from "./../database/database"

// funcion para traer datos desde la BD

const getLanguages = async (request, response) => {

  try {

    const connection = await getConnection();
    const result = await connection.query("SELECT id, name, programmers FROM language");
    response.json(result);

  } catch (error) {
    response.status(500);
    response.send(error.message);

  }
};

// funcion para traser datos de la BD segun algun parametro 

const getLanguage = async (request, response) => {

  try {

    const { id } = request.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT id, name, programmers FROM language WHERE id= ?", id);
    response.json(result);

  } catch (error) {
    response.status(500);
    response.send(error.message);

  }
};

// funcion para enviar datos a la BD
const addLanguage = async (request, response) => {

  try {

    const { name, programmers } = request.body;

    if (name === undefined || programmers === undefined) {

      response.status(400).json({ messaje: "Bad Request, Please fill all field" })
    }

    const language = { name, programmers }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO language SET ?", language)

    response.json({ message: "Register added" });

  } catch (error) {
    response.status(500);
    response.send(error.message);

  }
};

// actualizar la informacion de la BD

const updateLanguage = async (request, response) => {

  try {

    const { id } = request.params;
    const { name, programmers } = request.body;

    if (id === undefined || name === undefined || programmers === undefined) {

      response.status(400).json({ messaje: "Bad Request, Please fill all field" });
    }

    const language = {id, name, programmers };
    const connection = await getConnection();
    const result = await connection.query("UPDATE language SET ? WHERE id= ?", [language, id]);
    response.json(result);

  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};


// funcion para eliminar datos de una BD 

const deleteLanguage = async (request, response) => {

  try {

    const { id } = request.params;

    const connection = await getConnection();
    const result = await connection.query("DELETE FROM language WHERE id= ?", id);
    response.json(result);

  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};


export const methods = {
  getLanguages,
  addLanguage,
  getLanguage,
  deleteLanguage,
  updateLanguage,
};