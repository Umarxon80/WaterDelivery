import pool from "../config/db.js";

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
            message:"New customer is addes",
            data:newCustomer.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error})
    }
}