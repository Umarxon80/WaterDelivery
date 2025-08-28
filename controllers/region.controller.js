import pool from "../config/db.js";

export const GetRegions = async (req, res) => {
  try {
    const newregion = await pool.query(`Select * from regions`);
    console.log(newregion.rows);
    res.status(200).send({
      message: "regions are received",
      data: newregion.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const GetOneRegion = async (req, res) => {
  const { id } = req.params;
  try {
    const newregion = await pool.query(
      `Select * from regions where id=($1)`,
      [id]
    );
    console.log(newregion.rows);
    res.status(200).send({
      message: "region is received",
      data: newregion.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const AddRegion = async (req, res) => {
  try {
    const { name} = req.body;
    const newregion = await pool.query(
      `INSERT INTO regions (name)
            VALUES ($1) returning *`,
      [name]
    );
    console.log(newregion.rows[0]);
    res.status(201).send({
      message: "New region is addes",
      data: newregion.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const PatchRegion = async (req, res) => {
  const { id } = req.params;
  const { name} = req.body;
  try {
    const newregion = await pool.query(
      `update regions set name=$1  where id=$2 returning *`,
      [name,  id]
    );
    console.log(newregion.rows[0]);
    res.status(200).send({
      message: "region is patched",
      data: newregion.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const DeleteRegion = async (req, res) => {
  const { id } = req.params;
  try {
    const newregion = await pool.query(
      `delete from regions  where id=$1 returning *`,
      [id]
    );
    console.log(newregion.rows[0]);
    res.status(200).send({
      message: "region is deleted",
      data: newregion.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
