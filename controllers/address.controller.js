import pool from "../config/db.js";
import DeviceDetector from "node-device-detector";
import DeviceHelper from "node-device-detector/helper.js";
const detector = new DeviceDetector({
        clientIndexes: true,
        deviceIndexes: true,
        osIndexes: true,
        deviceAliasCode: false,
        deviceTrusted: false,
        deviceInfo: false,
        maxUserAgentSize: 500,
      });

export const Getaddress=async(req,res)=>{
    const userAgent=req.headers["user-agent"]
    console.log(userAgent);
    
    const result = detector.detect(userAgent);
    console.log(DeviceHelper.isDesktop(result));
    console.log(DeviceHelper.isDesktop(result));
      
    try {
        const newadress= await pool.query(
            `Select * from address`
        );
        console.log(newadress.rows);
        res.status(200).send({
            message:"addresses are received",
            data:newadress.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOneaddress=async(req,res)=>{
    const {id}=req.params
    try {
        const newadress= await pool.query(
            `Select * from address where id=($1)`,[id]
        );
        console.log(newadress.rows);
        res.status(200).send({
            message:"address is received",
            data:newadress.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Addaddress=async(req,res)=>{
    try {
        const {name,customer_id,address,location,district_id}=req.body
        const checkdistrict= await pool.query(`SELECT * FROM district where id=$1`,[district_id])
        if (!checkdistrict.rows[0]) {
            return res.send({message:"bunday district mavjud emas"})
        }
        const checkcustomer= await pool.query(`SELECT * FROM customers where id=$1`,[customer_id])
        if (!checkcustomer.rows[0]) {
            return res.send({message:"bunday customer mavjud emas"})
        }
        const newaddress= await pool.query(
            `INSERT INTO address (name,customer_id,address,location,district_id)
            VALUES ($1, $2, $3,$4,$5) returning *`,
            [name,customer_id,address,location,district_id]
        );

        console.log(newaddress.rows[0]);
        res.status(201).send({
            message:"New address is added",
            data:newaddress.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Patchaddress=async(req,res)=>{
    const {id}=req.params
    const {name,customer_id,address,location,district_id}=req.body
    const checkdistrict= await pool.query(`SELECT * FROM district where id=$1`,[district_id])
    if (!checkdistrict.rows[0]) {
        return res.send({message:"bunday district mavjud emas"})
    }
    const checkcustomer= await pool.query(`SELECT * FROM customers where id=$1`,[customer_id])
    if (!checkcustomer.rows[0]) {
        return res.send({message:"bunday customer mavjud emas"})
    }
    try {
        const newadress= await pool.query(
            `update address set name=$1,customer_id=$2,address=$3,location=$4,district_id=$5  where id=$6 returning *`,
            [name,customer_id,address,location,district_id,id]
        );
        console.log(newadress.rows[0]);
        res.status(200).send({
            message:"address is patched",
            data:newadress.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Deleteaddress=async(req,res)=>{
    const {id}=req.params
    try {
        const newadress= await pool.query(
            `delete from address  where id=$1 returning *`,
            [id]
        );
        console.log(newadress.rows[0]);
        res.status(200).send({
            message:"address is deleted",
            data:newadress.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}