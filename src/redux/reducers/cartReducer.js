export function cartReducer(
	state = { count: 0, products: [], showedProduct: {} },
	action
) {
	if (action.type === "ADD") {
		let addedProduct = state.products.filter((item) => item.id === action.id)

		if (!addedProduct.length) {
			++state.count
			let productAmount = action.amount || 1
			state.products.push({
				id: action.id,
				amount: productAmount,
				price: action.price,
			})
			return { ...state, products: state.products }
		}

		return state
	}

	if (action.type === "SHOW") {
		return { ...state, showedProduct: { id: action.id, amount: 1 } }
	}

	if (action.type === "INCREASE") {
		return {
			...state,
			products: state.products.map((product) =>
				product.id === action.id
					? { ...product, amount: product.amount + 1 }
					: product
			),
			showedProduct: {
				...state.showedProduct,
				amount: state.showedProduct.amount + 1,
			},
		}
	}
	if (action.type === "DECREASE") {
		return {
			...state,
			products: state.products.map((product) =>
				product.id === action.id
					? {
							...product,
							amount: product.amount !== 1 ? product.amount - 1 : 1,
					  }
					: product
			),
			showedProduct: {
				...state.showedProduct,
				amount:
					state.showedProduct.amount !== 1 ? state.showedProduct.amount - 1 : 1,
			},
		}
	}

	return state
}
