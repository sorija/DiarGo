import moment from 'moment';

export default [{
  id: '1',
  title: 'Test Post Title',
  content: 'Test Post Content',
  createdAt: 0
}, {
  id: '2',
  title: 'Other Test Title',
  content: 'Different Content',
  createdAt: moment(0).add(6, 'days').valueOf()
}];
