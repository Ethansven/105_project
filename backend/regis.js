import bcrypt from "bcrypt";

export default async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt1 = await bcrypt.genSalt(10);
  console.log("Salt #1: ", salt1);
  const hash1 = await bcrypt.hash(password, salt1);
  console.log("Hash #1: ", hash1);
  function possiblePassword(password) {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    );
  }
  if (!possiblePassword(password)) {
    return res.json({
      success: false,
      data: null,
      message: "Wrong password format",
    });
  }

  var sql = global.connection.format(
    "INSERT INTO user (username, password, hashed_password) VALUES (?, ?, ?)",
    [username, password, hash1]
  );
  global.connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "User has been created",
    });
  });
};
