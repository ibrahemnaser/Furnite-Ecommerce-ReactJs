import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { items } from "../products"
import { mobile, tablet } from "../responsive"
const Product = styled.div`
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	${tablet({ flexDirection: "column", gap: "30px", alignItems: "center" })}
`
const ProductDetail = styled.div`
	display: flex;
	gap: 50px;
	${mobile({ flexDirection: "column", gap: "30px" })}
`
const Image = styled.img`
	width: 200px;
	aspect-ratio: 1/1;
`
const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	${mobile({ gap: "10px" })}
`
const ProductTitle = styled.h3`
	color: red;
`
const ProductColor = styled.span`
	background-color: ${(props) => props.color};
	width: 20px;
	height: 20px;
	border-radius: 50%;
`
const ProductId = styled.span``
const ProductDimension = styled.span``
const PriceDetail = styled.div`
	display: flex;
	width: 20%;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	${mobile({
		flexDirection: "row",
		gap: "30px",
		width: "80%",
		justifyContent: "space-around",
	})}
`

const ProductAmount = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
const Amount = styled.div`
	font-size: 30px;
`
const Button = styled.div`
	cursor: pointer;
	font-size: 16px;
`
const ProductPrice = styled.span`
	font-size: 25px;
`
const CartProduct = (props) => {
	const { id, amount, increase, decrease } = props
	const [purchasedItem] = items.filter((ele) => ele.id === id)
	let [productAmount, setProductAmount] = useState(amount)

	useEffect(() => {
		setProductAmount(amount)
	}, [amount])

	return (
		<Product>
			<ProductDetail>
				<Image src={purchasedItem.img} />
				<Details>
					<ProductTitle>
						<b>Product: </b>
						{purchasedItem.title}
					</ProductTitle>
					<ProductId>
						<b>ID: </b>8544210354
					</ProductId>
					<ProductColor color="#b8aea9" />
					<ProductDimension>
						<b>Dimensions: </b>3x2
					</ProductDimension>
				</Details>
			</ProductDetail>
			<PriceDetail>
				<ProductAmount>
					<Button onClick={() => decrease(id)}>-</Button>
					<Amount>{productAmount}</Amount>
					<Button onClick={() => increase(id)}>+</Button>
				</ProductAmount>
				<ProductPrice>${purchasedItem.price}</ProductPrice>
			</PriceDetail>
		</Product>
	)
}

export default CartProduct
