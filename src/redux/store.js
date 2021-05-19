import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //Logger middleware sẽ console log previousState và nextState mỗi khi có action

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //Tạo store lấy rootReducer và giá trị trả về của applyMiddleware

export default store
