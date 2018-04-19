const selectPosts = (posts, { text }) => {
  return posts.filter((post) => {
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};

export default selectPosts;