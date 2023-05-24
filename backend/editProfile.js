import jwt from "jsonwebtoken";

export default async (req, res) => {
  const profile_url = req.body.profile_url;
  const id = req.user.id;
  console.log(id);
  console.log(profile_url);
  global.connection.query(
    "UPDATE user SET profile_url=? WHERE id=?",
    [profile_url, id],
    async (err, rows) => {
      if (err) {
        console.log("hello");
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      res.json({
        success: true,
        message: "update successful",
        error: null,
      });
    }
  );
};
