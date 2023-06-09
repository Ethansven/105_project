import jwt from "jsonwebtoken";
export default (req, res, next) => {
  const token = req.cookies.jwt_token;
  try {
    const decode = jwt.verify(token, "stupidsecret");
    const userId = decode.data;
    global.connection.query(
      "SELECT * FROM user WHERE id=?",
      [userId],
      async (err, rows) => {
        if (err) {
          return res.json({
            success: false,
            data: null,
            error: err.message,
          });
        }
        const user = rows[0];
        const { bio, profile_url, id, nickname } = user;
        req.user = { bio,  profile_url, id, nickname };
        next();
      }
    );
  } catch (error) {
    return res.status(401).send({ msg: "Unauthorized" });
  }
};
