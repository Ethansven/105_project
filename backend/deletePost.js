export default (req, res) => {
  const id = req.body.id;
  console.log(id);
  global.connection.query(
    "DELETE FROM post WHERE id=? ",
    [id],
    async (err) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      res.json({
        success: true,
        message: "delete post successful",
        error: null,
      });
    }
  );
};
