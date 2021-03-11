import { combineReducers } from "redux";
import ReducerHomeScreen from "./ReducerHomeScreen";
import ReducerNetworkInfo from "./ReducerNetworkInfo";
import StoreListReducer from "./StoreListReducer";
import ReducerLogin from "./ReducerLogin";
import ReducerUserDetail from "./ReducerUserDetail";
import ReducerProduct from './ReducerProduct';
import ReducerWishlist from './ReducerWishlist'
import ReducerWishlistshow from './ReducerWishlistshow'
import ReducerProductSerch from './ReducerProductSerch'
import ReducerDelete from './ReducerDelete'
import ReducerBrandSerch from './ReducerBrandSerch'
import ReducerMall from './ReudcerMall'
import RducerCat from './ReducerCat'
import ReducerProductbyCat from './ReducerProductbyCat'
import ReducerStoreSearch from './ReducerStoreSearch'
import Reducermallsearch2 from './Reducermallsearch2'
// combine all reducers
const rootReducer = combineReducers({
  network: ReducerNetworkInfo,
  homeScreen: ReducerHomeScreen,
  storeAllList: StoreListReducer,
  loginScreen: ReducerLogin, 
  userdetail:ReducerUserDetail,
  productData : ReducerProduct,
  showUserDetail : ReducerUserDetail,
  Wishlist : ReducerWishlist,
  showWishList : ReducerWishlistshow,
  ProductSerch : ReducerProductSerch,
  showDeletedProduct : ReducerDelete,
  BrandSerch : ReducerBrandSerch,
  mallSerch : ReducerMall,
  category : RducerCat,
  Productcat : ReducerProductbyCat,
  storesSearch : ReducerStoreSearch,
  mallSearch2 : Reducermallsearch2
});

export default rootReducer;
