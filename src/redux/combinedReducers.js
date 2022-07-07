import { combineReducers } from "redux"
import { cartReducer } from "./reducers/cartReducer"
import { wishReducer } from "./reducers/wishReducer"

export default combineReducers({
	cartCount: cartReducer,
	wishList: wishReducer,
})
