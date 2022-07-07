export function wishReducer(state = { wishCount: 0, wishList: [] }, action) {
	if (action.type === "WISH") {
		if (!state.wishList.some((item) => item.id === action.id)) {
			state.wishList.push({ id: action.id, isWished: true })
			++state.wishCount
		} else {
			let remainWish = state.wishList.filter((item) => item.id !== action.id)
			state.wishList = remainWish
			--state.wishCount
		}
	}
	return state
}
