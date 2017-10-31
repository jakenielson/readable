import { combineReducers } from 'redux';

import postList from './postList';
import commentList from './commentList';
import activePost from './activePost';
import activeCategory from './activeCategory';
import sortMethod from './sortMethod';

export default combineReducers({
  postList,
  commentList,
  activeCategory,
  activePost,
  sortMethod
});
