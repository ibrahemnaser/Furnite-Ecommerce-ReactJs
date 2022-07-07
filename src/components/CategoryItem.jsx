import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
	flex: 1;
	height: 300px;
	position: relative;
	margin-right: 10px;
	margin-bottom: 10px;
	${mobile({ marginBottom: "10px" })}
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #79767652;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Title = styled.h2`
	font-size: 30px;
	font-weight: bold;
	color: white;
	margin-bottom: 10px;
`
const Button = styled.button`
	background-color: white;
	border: 1px solid white;
	color: #333;
	padding: 5px 5px;
	cursor: pointer;
	font-size: 16px;
`
const LinkStyled = styled(Link)`
	text-decoration: none;
	color: black;
`

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img}></Image>
			<Info>
				<Title>{item.category}</Title>
				<Button>
					<LinkStyled to="/products">Shop Now</LinkStyled>
				</Button>
			</Info>
		</Container>
	)
}

export default CategoryItem
