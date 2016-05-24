import { combineReducers } from 'redux';

import accounts from './Accounts';
import auth from './Auth';
import repos from './Repos';

export default combineReducers({
  accounts,
  auth,
  repos
});
