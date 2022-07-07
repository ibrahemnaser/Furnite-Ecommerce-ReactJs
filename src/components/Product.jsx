import React from "react"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { items } from "../products"

const Image = styled.img`
	width: 100%;
	height: 100%;
`
const Info = styled.div`
	display: flex;
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	top: 0;
	align-items: center;
	justify-content: center;
	gap: 2%;
	cursor: pointer;
	opacity: 0;
	transition: 0.2s ease;
`
const Container = styled.div`
	height: 300px;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}
`
const Icon = styled.div`
	cursor: pointer;
	transition: 0.1s ease-in;
	background-color: white;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	color: ${(props) => props.clicked && "red"};
	svg {
		font-size: 16px;
	}
	&:hover {
		transform: scale(1.1);
	}
`
const LinkStyled = styled(Link)`
	text-decoration: none;
	color: black;
	display: flex;
`

const Product = (props) => {
	let { item, addToCart, showProduct, wishCounterHandler, wish } = props
	const [selectedItem] = items.filter((ele) => ele.id === item.id)
	const [wishedItem] = wish.filter((ele) => ele.id === item.id)
	console.log(wishedItem)

	return (
		<Container>
			<Image src={item.img}></Image>
			<Info>
				<Icon onClick={() => addToCart(item.id, selectedItem.price)}>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon onClick={() => showProduct(item.id)}>
					<LinkStyled to={`/products/${item.id}`}>
						<SearchIcon />
					</LinkStyled>
				</Icon>
				<Icon
					onClick={() => {
						wishCounterHandler(item.id)
					}}
				>
					<FavoriteBorderIcon />
				</Icon>
			</Info>
		</Container>
	)
}

let mapStateToProps = (state) => {
	return {
		itemsCount: state.cartCount.count,
		products: state.cartCount.products,
		wish: state.wishList.wishList,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		showProduct: (id) => dispatch({ type: "SHOW", id: id }),
		addToCart: (addedItemId, price) =>
			dispatch({ type: "ADD", id: addedItemId, price: price }),
		wishCounterHandler: (id) => dispatch({ type: "WISH", id: id }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
