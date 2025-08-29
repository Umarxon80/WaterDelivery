import pool from "../config/db.js";


export const Getorder_items=async(req,res)=>{
    try {
        const neworder_items= await pool.query(
            `Select * from order_items`
        );
        console.log(neworder_items.rows);
        res.status(200).send({
            message:"order_items are received",
            data:neworder_items.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOneorder_items=async(req,res)=>{
    const {id}=req.params
    try {
        const neworder_items= await pool.query(
            `Select * from order_items where id=($1)`,[id]
        );
        console.log(neworder_items.rows);
        res.status(200).send({
            message:"order_items is received",
            data:neworder_items.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Addorder_items=async(req,res)=>{
    try {
        const {order_id,water_product_id,quantity,total_price}=req.body
        const neworder_items= await pool.query(
            `INSERT INTO order_items (order_id,water_product_id,quantity,total_price)
            VALUES ($1, $2, $3,$4) returning *`,
            [order_id,water_product_id,quantity,total_price]
        );
        console.log(neworder_items.rows[0]);
        res.status(201).send({
            message:"New order_items is added",
            data:neworder_items.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Patchorder_items=async(req,res)=>{
    const {id}=req.params
    const {order_id,water_product_id,quantity,total_price}=req.body
    try {
        const neworder_items= await pool.query(
            `update order_items set order_id=$1 ,water_product_id=$2,quantity=$3,total_price=$4  where id=$5 returning *`,
            [order_id,water_product_id,quantity,total_price,id]
        );
        console.log(neworder_items.rows[0]);
        res.status(200).send({
            message:"order_items is patched",
            data:neworder_items.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Deleteorder_items=async(req,res)=>{
    const {id}=req.params
    try {
        const neworder_items= await pool.query(
            `delete from order_items  where id=$1 returning *`,
            [id]
        );
        console.log(neworder_items.rows[0]);
        res.status(200).send({
            message:"order_items is deleted",
            data:neworder_items.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}