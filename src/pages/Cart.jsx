import React, { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import { items } from "../products"
import { connect } from "react-redux"
import { largeTablet, mobile, tablet } from "../responsive"
import CartProduct from "../components/CartProduct"

const Container = styled.div``
const Wrapper = styled.div`
	padding: 50px 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	${tablet({ padding: "50px 40px" })}
	${mobile({ padding: "50px 10px" })}
`
const Title = styled.h1`
	font-size: 40px;
`
const Top = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	${tablet({ flexDirection: "column", alignItems: "stretch", gap: "20px" })}
`
const TopButton = styled.button`
	padding: 10px;
	font-weight: bold;
	cursor: pointer;
	border: 1px solid black;
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
	display: flex;
	gap: 25px;
	${tablet({ flexDirection: "column", alignItems: "center" })}
`
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
`
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 10px;
	${largeTablet({ flexDirection: "column" })}
`
const Info = styled.div`
	flex: 3;
`

const Hr = styled.hr``

const Summary = styled.div`
	flex: 1;
	border: 1px solid black;
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 2%;
	height: 50vh;
	justify-content: space-around;
	${largeTablet({ gap: "15px" })}
`

const SummaryTitle = styled.h2`
	font-size: 30px;
	align-self: center;
	font-weight: 400;
`
const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "25px"};
	border-top: ${(props) => props.type === "total" && "1px solid black"};
	padding-top: ${(props) => props.type === "total" && "5px"};
`
const SummaryText = styled.p``
const SummaryPrice = styled.span``
const SummaryButton = styled.button`
	cursor: pointer;
	background-color: black;
	color: white;
	font-weight: 400;
	padding: 10px 0;
	transition: 0.5s;
	&:hover {
		background-color: #181818;
	}
`
const LinkStyled = styled(Link)`
	text-decoration: none;
	color: black;
`

const Cart = (props) => {
	let { itemsCount, productsList, increase, decrease, wishCounter } = props
	let [productsItem, setProductItem] = useState(productsList)
	let totalPrice = 0
	productsList.map((item) => (totalPrice += item.price * item.amount))

	useEffect(() => {
		setProductItem(productsList)
	}, [productsList, productsItem])

	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title>Your Cart</Title>
				<Top>
					<TopButton>
						<LinkStyled to="/products">Continue Shopping</LinkStyled>
					</TopButton>
					<TopTexts>
						<TopText>Shop Bag ({itemsCount})</TopText>
						<TopText>Your WishList ({wishCounter})</TopText>
					</TopTexts>
					<TopButton type="filled">Checkout Now</TopButton>
				</Top>
				<Bottom>
					{productsItem.length === 0 ? (
						<h1>Your Cart is Empty</h1>
					) : (
						<>
							<Info>
								{productsItem.map((item, indx) => {
									return (
										<Fragment key={indx}>
											<CartProduct
												id={item.id}
												amount={item.amount}
												increase={increase}
												decrease={decrease}
											/>
											<Hr />
										</Fragment>
									)
								})}
							</Info>
							<Summary>
								<SummaryTitle>Order Summary</SummaryTitle>
								<SummaryItem>
									<SummaryText>Subtotal</SummaryText>
									<SummaryPrice>$ {totalPrice}</SummaryPrice>
								</SummaryItem>
								<SummaryItem>
									<SummaryText>Estimated Shipping</SummaryText>
									<SummaryPrice>$ 10</SummaryPrice>
								</SummaryItem>
								<SummaryItem>
									<SummaryText>Shipping Discount</SummaryText>
									<SummaryPrice>$ -5</SummaryPrice>
								</SummaryItem>
								<SummaryItem type="total">
									<SummaryText>Total</SummaryText>
									<SummaryPrice>$ {totalPrice - 5}</SummaryPrice>
								</SummaryItem>
								<SummaryButton>Checkout</SummaryButton>
							</Summary>
						</>
					)}
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	)
}

let mapStateToProps = (state) => {
	return {
		itemsCount: state.cartCount.count,
		productsList: state.cartCount.products,
		wishCounter: state.wishList.wishCount,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (addedItemId) => dispatch({ type: "ADD", id: addedItemId }),
		increase: (increasedId) => dispatch({ type: "INCREASE", id: increasedId }),
		decrease: (decreasedId) => dispatch({ type: "DECREASE", id: decreasedId }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
