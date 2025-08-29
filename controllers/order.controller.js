import pool from "../config/db.js";


export const Getorders=async(req,res)=>{
    try {
        const neworders= await pool.query(
            `Select * from orders`
        );
        console.log(neworders.rows);
        res.status(200).send({
            message:"orders are received",
            data:neworders.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOneorders=async(req,res)=>{
    const {id}=req.params
    try {
        const neworders= await pool.query(
            `Select * from orders where id=($1)`,[id]
        );
        console.log(neworders.rows);
        res.status(200).send({
            message:"orders is received",
            data:neworders.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Addorders=async(req,res)=>{
    try {
        const {customer_id,delivery_stuff_id,order_date,status}=req.body
        const neworders= await pool.query(
            `INSERT INTO orders (customer_id,delivery_stuff_id,order_date,status)
            VALUES ($1, $2, $3,$4) returning *`,
            [customer_id,delivery_stuff_id,order_date,status]
        );
        console.log(neworders.rows[0]);
        res.status(201).send({
            message:"New orders is added",
            data:neworders.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Patchorders=async(req,res)=>{
    const {id}=req.params
    const {customer_id,delivery_stuff_id,order_date,status}=req.body
    try {
        const neworders= await pool.query(
            `update orders set customer_id=$1 ,delivery_stuff_id=$2,order_date=$3,status=$4  where id=$5 returning *`,
            [customer_id,delivery_stuff_id,order_date,status,id]
        );
        console.log(neworders.rows[0]);
        res.status(200).send({
            message:"orders is patched",
            data:neworders.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Deleteorders=async(req,res)=>{
    const {id}=req.params
    try {
        const neworders= await pool.query(
            `delete from orders  where id=$1 returning *`,
            [id]
        );
        console.log(neworders.rows[0]);
        res.status(200).send({
            message:"orders is deleted",
            data:neworders.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}