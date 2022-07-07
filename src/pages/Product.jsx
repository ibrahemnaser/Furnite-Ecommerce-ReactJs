import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { connect } from "react-redux"
import NewsLetter from "../components/NewsLetter"
import { tablet } from "../responsive"
import { items } from "../products"

const Container = styled.div``
const Wrapper = styled.div`
	padding: 200px 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	${tablet({ padding: "200px 50px", gap: "40px", flexDirection: "column" })}
`
const ImageContainer = styled.div`
	width: 450px;
	display: flex;
	justify-content: center;
	${tablet({ width: "100%" })}
`
const Image = styled.img`
	width: 90%;
	${tablet({ width: "100%" })}
`
const InfoContainer = styled.div`
	width: 300px;
	${tablet({ width: "100%" })}
`
const InfoTitle = styled.h2`
	font-size: 40px;
	color: red;
`
const Desc = styled.p`
	color: #826969;
	margin-top: 10px;
`
const Price = styled.span`
	display: inline-block;
	margin: 12px 0px;
	font-size: 30px;
`

const AddContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 100%;
`

const AddWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	margin: auto;
`

const Adder = styled.button`
	background-color: black;
	color: white;
	padding: 10px;
	cursor: pointer;
	font-weight: bold;
	font-weight: bold;
	&:active {
		background-color: green;
		border-color: transparent;
	}
`
const Amount = styled.span`
	color: red;
	font-weight: bold;
	font-size: 20px;
`
const Remover = styled.button`
	background-color: black;
	color: white;
	padding: 10px;
	cursor: pointer;
	font-weight: bold;
	&:active {
		background-color: red;
		border-color: transparent;
	}
`
const Button = styled.button`
	background-color: black;
	color: white;
	padding: 10px;
	cursor: pointer;
	font-weight: bold;
	&:hover {
		background-color: green;
		border-color: transparent;
	}
`

const Product = (props) => {
	const { addToCart, increase, decrease, selectedProduct } = props
	const { id } = useParams()
	const [selectedItem] = items.filter((ele) => ele.id === parseInt(id))
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImageContainer>
					<Image src={selectedItem.img} />
				</ImageContainer>
				<InfoContainer>
					<InfoTitle>{selectedItem.title}</InfoTitle>
					<Desc>Special product item for sale.</Desc>
					<Price>{selectedItem.price}$</Price>
					<AddContainer>
						<AddWrapper>
							<Adder onClick={() => increase(id)}>+</Adder>
							<Amount>{selectedProduct.amount}</Amount>
							<Remover onClick={() => decrease(id)}>-</Remover>
						</AddWrapper>
						<Button
							onClick={() =>
								addToCart(
									parseInt(id),
									selectedProduct.amount,
									selectedItem.price
								)
							}
						>
							Add To Cart
						</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

let mapStateToProps = (state) => {
	return {
		selectedProduct: state.cartCount.showedProduct,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id, amount, price) =>
			dispatch({ type: "ADD", id: id, amount: amount, price: price }),
		showProduct: (id) => dispatch({ type: "SHOW", id: id }),
		increase: (increasedId) => dispatch({ type: "INCREASE", id: increasedId }),
		decrease: (decreasedId) => dispatch({ type: "DECREASE", id: decreasedId }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
