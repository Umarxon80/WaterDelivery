import pool from "../config/db.js";


export const GetWater_products=async(req,res)=>{
    try {
        const newwater_product= await pool.query(
            `Select * from water_products`
        );
        console.log(newwater_product.rows);
        res.status(200).send({
            message:"water_products are received",
            data:newwater_product.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOneWater_product=async(req,res)=>{
    const {id}=req.params
    try {
        const newwater_product= await pool.query(
            `Select * from water_products where id=($1)`,[id]
        );
        console.log(newwater_product.rows);
        res.status(200).send({
            message:"water_product is received",
            data:newwater_product.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const AddWater_product=async(req,res)=>{
    try {
        const {name,volume_liters,price}=req.body
        const newwater_product= await pool.query(
            `INSERT INTO water_products (name,volume_liters,price)
            VALUES ($1, $2, $3) returning *`,
            [name,volume_liters,price]
        );
        console.log(newwater_product.rows[0]);
        res.status(201).send({
            message:"New water_product is added",
            data:newwater_product.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const PatchWater_product=async(req,res)=>{
    const {id}=req.params
    const {name,volume_liters,price}=req.body
    try {
        const newwater_product= await pool.query(
            `update water_products set name=$1,volume_liters=$2 ,price=$3  where id=$4 returning *`,
            [name,volume_liters,price,id]
        );
        console.log(newwater_product.rows[0]);
        res.status(200).send({
            message:"water_product is patched",
            data:newwater_product.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const DeleteWater_product=async(req,res)=>{
    const {id}=req.params
    try {
        const newwater_product= await pool.query(
            `delete from water_products  where id=$1 returning *`,
            [id]
        );
        console.log(newwater_product.rows[0]);
        res.status(200).send({
            message:"water_product is deleted",
            data:newwater_product.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}