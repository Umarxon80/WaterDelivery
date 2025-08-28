import pool from "../config/db.js";


export const GetCustomers=async(req,res)=>{
    try {
        const newCustomer= await pool.query(
            `Select * from customers`
        );
        console.log(newCustomer.rows);
        res.status(200).send({
            message:"customers are received",
            data:newCustomer.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOneCustomer=async(req,res)=>{
    const {id}=req.params
    try {
        const newCustomer= await pool.query(
            `Select * from customers where id=($1)`,[id]
        );
        console.log(newCustomer.rows);
        res.status(200).send({
            message:"customer is received",
            data:newCustomer.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const AddCustomer=async(req,res)=>{
    try {
        const {name,phone,email}=req.body
        const newCustomer= await pool.query(
            `INSERT INTO customers (name,phone,email)
            VALUES ($1, $2, $3) returning *`,
            [name,phone,email]
        );
        console.log(newCustomer.rows[0]);
        res.status(201).send({
            message:"New customer is added",
            data:newCustomer.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const PatchCustomer=async(req,res)=>{
    const {id}=req.params
    const {name,phone,email}=req.body
    try {
        const newCustomer= await pool.query(
            `update customers set name=$1,phone=$2 ,email=$3  where id=$4 returning *`,
            [name,phone,email,id]
        );
        console.log(newCustomer.rows[0]);
        res.status(200).send({
            message:"customer is patched",
            data:newCustomer.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const DeleteCustomer=async(req,res)=>{
    const {id}=req.params
    try {
        const newCustomer= await pool.query(
            `delete from customers  where id=$1 returning *`,
            [id]
        );
        console.log(newCustomer.rows[0]);
        res.status(200).send({
            message:"customer is deleted",
            data:newCustomer.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}