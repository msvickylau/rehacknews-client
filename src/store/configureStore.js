import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}

/////////////////////////////////////////////////////////////
// If you have REDUX_DEVTOOLS_EXTENSION installed in Chrome
// then uncomment the below code to use the extension:
/////////////////////////////////////////////////////////////
// 
// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers/rootReducer';
// import thunk from 'redux-thunk';
//
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// }
