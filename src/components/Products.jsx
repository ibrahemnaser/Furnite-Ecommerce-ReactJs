import React from "react";
import styled from "styled-components";
import { items } from "../products";
import { mobile } from "../responsive";
import Product from "./Product";

const Title = styled.h2`
	font-size: 40px;
	font-weight: 600;
	text-align: center;
	margin-top: 40px;
`;

const Container = styled.div`
	padding: 50px 100px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	${mobile({ padding: "50px 0" })}
`;

const Products = ({ display }) => {
	return (
		<>
			<Title style={{ display: display }}>Products</Title>
			<Container>
				{items.map((item) => {
					return <Product key={item.id} item={item}></Product>;
				})}
			</Container>
		</>
	);
};

export default Products;
