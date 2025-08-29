import pool from "../config/db.js";


export const Getpayments=async(req,res)=>{
    try {
        const newpayments= await pool.query(
            `Select * from payments`
        );
        console.log(newpayments.rows);
        res.status(200).send({
            message:"payments are received",
            data:newpayments.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOnepayments=async(req,res)=>{
    const {id}=req.params
    try {
        const newpayments= await pool.query(
            `Select * from payments where id=($1)`,[id]
        );
        console.log(newpayments.rows);
        res.status(200).send({
            message:"payments is received",
            data:newpayments.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Addpayments=async(req,res)=>{
    try {
        const {order_id,amount,payment_date,method}=req.body
        const newpayments= await pool.query(
            `INSERT INTO payments (order_id,amount,payment_date,method)
            VALUES ($1, $2, $3,$4) returning *`,
            [order_id,amount,payment_date,method]
        );
        console.log(newpayments.rows[0]);
        res.status(201).send({
            message:"New payments is added",
            data:newpayments.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Patchpayments=async(req,res)=>{
    const {id}=req.params
    const {order_id,amount,payment_date,method}=req.body
    try {
        const newpayments= await pool.query(
            `update payments set order_id=$1 ,amount=$2,payment_date=$3,method=$4  where id=$5 returning *`,
            [order_id,amount,payment_date,method,id]
        );
        console.log(newpayments.rows[0]);
        res.status(200).send({
            message:"payments is patched",
            data:newpayments.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Deletepayments=async(req,res)=>{
    const {id}=req.params
    try {
        const newpayments= await pool.query(
            `delete from payments  where id=$1 returning *`,
            [id]
        );
        console.log(newpayments.rows[0]);
        res.status(200).send({
            message:"payments is deleted",
            data:newpayments.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}