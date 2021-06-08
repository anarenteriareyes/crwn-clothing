import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import {persistReducer} from 'redux-persist';

// use localStorage as default storage (this is the actual localStorage from window)
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
// whitelist: the array with the names of reducers that we want to persist

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig,rootReducer);

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });



