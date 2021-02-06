module.exports = mongoose => {
  const Post = mongoose.model(
    "post",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Post;
};
