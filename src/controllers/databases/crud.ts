import db from "@/config/db";

export const getUser = async (res: any) => {
  try {
    return db.query("SELECT * FROM user_control", (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
    
  } catch (err) {
    res.status(500).json({ message: "Error getting data", err });
  }
}

export const CreateUser = async (res: any, req: any) => {
  try {
    const { nama, password } = req.body;
    return db.query(
      "INSERT INTO user_control (nama, password) VALUES (?, ?)",
      [nama, password],
      (err, result) => {
        if (err) throw err;
        res.status(201).json(result);
      }
    );
  } catch (err) {
    res.status(500).json({massage: "Error inserting data", err})
  }
}