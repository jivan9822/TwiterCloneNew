import DisplayPostHelper from './DisplayPostHelper';
import classes from './DisplayPost.module.css';
const posts = [
  {
    id: 'e1',
    title: 'post-1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, libero dolor delectus sapiente voluptatibus commodi architecto est? Saepe, ipsa! Recusandae, iure? Cumque sunt dolore beatae quaerat eius cupiditate necessitatibus amet!',
    postedBy: 'Jivan',
    likes: [],
    reTweetUsers: [],
  },
  {
    id: 'e2',
    title: 'post-2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, libero dolor delectus sapiente voluptatibus commodi architecto est? Saepe, ipsa! Recusandae, iure? Cumque sunt dolore beatae quaerat eius cupiditate necessitatibus amet!',
    postedBy: 'Yaju',
    likes: [],
    reTweetUsers: [],
  },
  {
    id: 'e3',
    title: 'post-3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, libero dolor delectus sapiente voluptatibus commodi architecto est? Saepe, ipsa! Recusandae, iure? Cumque sunt dolore beatae quaerat eius cupiditate necessitatibus amet!',
    postedBy: 'Manju',
    likes: [],
    reTweetUsers: [],
  },
];

const DisplayPost = (props) => {
  return posts.map((post) => <DisplayPostHelper key={post.id} post={post} />);
};
export default DisplayPost;
