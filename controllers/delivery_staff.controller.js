import pool from "../config/db.js";


export const Getdelivery_staff=async(req,res)=>{
    try {
        const newdelivery_staff= await pool.query(
            `Select * from delivery_staff`
        );
        console.log(newdelivery_staff.rows);
        res.status(200).send({
            message:"delivery_staff are received",
            data:newdelivery_staff.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const GetOnedelivery_staff=async(req,res)=>{
    const {id}=req.params
    try {
        const newdelivery_staff= await pool.query(
            `Select * from delivery_staff where id=($1)`,[id]
        );
        console.log(newdelivery_staff.rows);
        res.status(200).send({
            message:"delivery_staff is received",
            data:newdelivery_staff.rows
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Adddelivery_staff=async(req,res)=>{
    try {
        const {name,phone,vehicle_number,district_id}=req.body
        const newdelivery_staff= await pool.query(
            `INSERT INTO delivery_staff (name,phone,vehicle_number,district_id)
            VALUES ($1, $2, $3,$4) returning *`,
            [name,phone,vehicle_number,district_id]
        );
        console.log(newdelivery_staff.rows[0]);
        res.status(201).send({
            message:"New delivery_staff is added",
            data:newdelivery_staff.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Patchdelivery_staff=async(req,res)=>{
    const {id}=req.params
    const {name,phone,vehicle_number,district_id}=req.body
    try {
        const newdelivery_staff= await pool.query(
            `update delivery_staff set name=$1,phone=$2 ,vehicle_number=$3,district_id=$4  where id=$5 returning *`,
            [name,phone,vehicle_number,district_id,id]
        );
        console.log(newdelivery_staff.rows[0]);
        res.status(200).send({
            message:"delivery_staff is patched",
            data:newdelivery_staff.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

export const Deletedelivery_staff=async(req,res)=>{
    const {id}=req.params
    try {
        const newdelivery_staff= await pool.query(
            `delete from delivery_staff  where id=$1 returning *`,
            [id]
        );
        console.log(newdelivery_staff.rows[0]);
        res.status(200).send({
            message:"delivery_staff is deleted",
            data:newdelivery_staff.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}