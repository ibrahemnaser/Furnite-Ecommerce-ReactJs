import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	padding: 50px;
	${mobile({ padding: "50px 0" })}
`;
const Title = styled.h2`
	font-size: 40px;
	margin-bottom: 25px;
	text-align: center;
`;

const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${tablet({ flexDirection: "column", gap: "20px" })}
`;
const Filter = styled.div`
	${tablet({ display: "flex", width: "80%", justifyContent: "space-between" })}
	${mobile({ width: "95%" })}
`;
const FilterText = styled.span`
	font-size: 22px;
	font-weight: 600;
	margin-right: 20px;
`;
const Select = styled.select`
	padding: 5px;
`;
const Option = styled.option``;

const ProductList = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Container>
				<Title>Our Products</Title>
				<FilterContainer>
					<Filter>
						<FilterText>Filter Products:</FilterText>
						<Select defaultValue={"DEFAULT"}>
							<Option disabled value="DEFAULT">
								Type
							</Option>
							<Option>Sofa</Option>
							<Option>Chair</Option>
							<Option>Table</Option>
							<Option>Bed</Option>
							<Option>Others</Option>
						</Select>
					</Filter>
					<Filter>
						<FilterText>Sort Products:</FilterText>
						<Select defaultValue={"DEFAULT"}>
							<Option value="DEFAULT">Newest</Option>
							<Option>Price (asend)</Option>
							<Option>Price (desc)</Option>
						</Select>
					</Filter>
				</FilterContainer>
			</Container>
			<Products display={"none"} />
			<NewsLetter />
			<Footer />
		</>
	);
};

export default ProductList;
