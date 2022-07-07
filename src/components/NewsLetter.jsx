import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	padding: 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #97bae7;
`;

const Title = styled.h2`
	font-size: 40px;
	font-weight: 600;
	text-align: center;
	letter-spacing: 1.2px;
	color: teal;
	${mobile({ fontSize: "30px" })}
`;

const Description = styled.p`
	color: #423d39;
	${mobile({ fontSize: "14px" })}
`;
const InputField = styled.form`
	margin-top: 20px;
	width: 50%;
	display: flex;
	justify-content: space-between;
	border: 1px solid teal;
	box-shadow: ${(props) => props.focus && "1px 0px 4px 2px #049f9f"};
	${mobile({ width: "70%" })}
`;
const Input = styled.input`
	flex: 8;
	background-color: transparent;
	border: none;
	outline: none;
	padding-left: 15px;
	color: teal;
	font-size: 16px;

	&::placeholder {
		color: #423d39;
	}
	${mobile({ width: "10%" })}
`;
const Button = styled.button`
	flex: 1;
	background-color: teal;
	color: white;
	border: none;
	cursor: pointer;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	&:hover {
		background-color: #057878;
	}
	${mobile({ padding: "5px" })}
`;

const NewsLetter = () => {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Description>Subscribe to get all updates</Description>
			<InputField focus={isFocused}>
				<Input
					type="email"
					placeholder="Enter your email"
					onBlur={() => {
						setIsFocused(false);
					}}
					onFocus={() => {
						setIsFocused(true);
					}}
				/>
				<Button>
					<SendIcon />
				</Button>
			</InputField>
		</Container>
	);
};

export default NewsLetter;
