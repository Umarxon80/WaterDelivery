import pool from "../config/db.js";

export const Getdistricts = async (req, res) => {
  try {
    const newdistrict = await pool.query(`Select * from district`);
    console.log(newdistrict.rows);
    res.status(200).send({
      message: "districts are received",
      data: newdistrict.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const GetOnedistrict = async (req, res) => {
  const { id } = req.params;
  try {
    const newdistrict = await pool.query(
      `Select * from district where id=($1)`,
      [id]
    );
    console.log(newdistrict.rows);
    res.status(200).send({
      message: "district is received",
      data: newdistrict.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const Adddistrict = async (req, res) => {
  try {
    const { name} = req.body;
    const newdistrict = await pool.query(
      `INSERT INTO district (name)
            VALUES ($1) returning *`,
      [name]
    );
    console.log(newdistrict.rows[0]);
    res.status(201).send({
      message: "New district is added",
      data: newdistrict.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const Patchdistrict = async (req, res) => {
  const { id } = req.params;
  const { name} = req.body;
  try {
    const newdistrict = await pool.query(
      `update district set name=$1  where id=$2 returning *`,
      [name,  id]
    );
    console.log(newdistrict.rows[0]);
    res.status(200).send({
      message: "district is patched",
      data: newdistrict.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const Deletedistrict = async (req, res) => {
  const { id } = req.params;
  try {
    const newdistrict = await pool.query(
      `delete from district  where id=$1 returning *`,
      [id]
    );
    console.log(newdistrict.rows[0]);
    res.status(200).send({
      message: "district is deleted",
      data: newdistrict.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
