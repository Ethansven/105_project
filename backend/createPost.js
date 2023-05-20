export default (req, res) => {
  const header = req.body.header;
  const content = req.body.content;
  const img_url = req.body.img_url;
  const category = req.body.category;
  const user_id = req.body.user_id;
  global.connection.query(
    "INSERT INTO post (header,content,img_url,post_category_id,user_id) VALUE (?,?,?,?,?) ",
    [header, content, img_url, category, user_id],
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
        message: "create post successful",
        error: null,
      });
    }
  );
};
