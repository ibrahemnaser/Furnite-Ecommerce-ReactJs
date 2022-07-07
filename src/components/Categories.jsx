import React from "react";
import styled from "styled-components";
import { categories } from "../products";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
	justify-content: center;
	padding: 50px 15px;
	${"" /* gap: 3%; */}
	${mobile({ gap: "0" })}
`;
const Title = styled.h2`
	font-size: 40px;
	font-weight: 600;
	text-align: center;
	margin-top: 40px;
`;

const Categories = () => {
	return (
		<>
			<Title>Categories</Title>
			<Container>
				{categories.map((item, indx) => {
					return <CategoryItem key={indx} item={item} />;
				})}
			</Container>
		</>
	);
};

export default Categories;
