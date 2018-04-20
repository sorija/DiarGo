import moment from 'moment';

const selectPosts = (posts, { text, date }) => {
  return posts.filter((post) => {
    const createdAtMoment = moment(post.createdAt);
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
    const dateMatch = date ? date.isSame(createdAtMoment, 'day') : true;
    
    return textMatch && dateMatch;
  });
};

export default selectPosts;
