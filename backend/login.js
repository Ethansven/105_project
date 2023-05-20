import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export default (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  global.connection.query(
    "SELECT * FROM user WHERE username  =?",
    [username],
    async (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      const numRows = rows.length;
      if (numRows == 0) {
        res.json({
          success: false,
          message: "Username not found",
        });
      } else {
        const valid = bcrypt.compare(password, rows[0].hashed_password);
        if (valid) {
          res.json({
            success: true,
            message: "Login success",
            user: rows[0],
          });
          const token = jwt.sign(
            {
              data: rows[0].id,
            },
            "stupidsecret",
            { expiresIn: "1h" }
          );
          res.cookie("user_id", token);
        } else {
          res.json({
            success: true,
            message: "Wrong password",
          });
        }
      }
    }
  );
};
