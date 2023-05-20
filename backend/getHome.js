export default (req, res) => {
  global.connection.query(
    "SELECT * FROM post JOIN post_category ON post.post_category_id = post_category.id ",
    async (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      res.json({
        success: true,
        data: rows,
        error: null,
      });
    }
  );
};
