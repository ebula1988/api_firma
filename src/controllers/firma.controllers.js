import { getConnection } from "../database/database";


const addFirma = async (req, res) => {
    try {
        const { identificacion, firma } = req.body;

        if (identificacion === undefined || firma === undefined ) {
            res.status(400).json({ message: "Registre todos los datos" });
        }

        const firmaRegistro = { identificacion, firma };
        const connection = await getConnection();
        await connection.query("INSERT INTO firmas SET ?", firmaRegistro);
        res.json({ message: "datos agregados con exito" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



/*

const getFirmas= async (req, res)=>{
    try{
        const connection= await getConnection();
    const result = await connection.query("SELECT * FROM firmas ");


    res.json(result);

    }catch(error){
        res.status(500);
        
    }
}
*/


const getFirma = async (req, res) => {
    try {
        console.log(req.params);
        const { identificacion } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM firmas WHERE identificacion = ?", identificacion );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};











// exporto para usarla en otro lugar


export const methods = {
  //getFirmas,
  addFirma,
  getFirma
}