import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgb(72 114 132 / 50%), rgba(250, 250, 250, 0.2)),
		url(https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80)
			no-repeat center;
	background-size: cover;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	gap: 20px;
`;

const Title = styled.h2`
	color: teal;
	font-size: 40px;
	${tablet({ fontSize: "30px" })}
	${mobile({ fontSize: "25px" })}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 40%;
	align-items: center;
	position: relative;
	${tablet({ width: "80%" })}
`;
const Input = styled.input`
	padding: 10px;
	border: none;
	outline: none;
	width: 100%;
	border-radius: 5px;
	font-size: 22px;
	&:focus {
		box-shadow: 0px 0px 1px 2px #049f9f;
	}
	${tablet({ padding: "8px", fontSize: "18px" })}
	${mobile({ padding: "7px", fontSize: "16px" })}
`;

const Terms = styled.a`
	align-self: flex-start;
	color: #38454b;
	font-size: 20px;
`;

const Button = styled.button`
	align-self: flex-end;
	background-color: teal;
	color: white;
	border: transparent;
	padding: 10px;
	font-size: 20px;
	cursor: pointer;
	&:hover {
		background-color: #296464;
	}
`;

const Regitster = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input type="text" placeholder="First Name" />
					<Input type="text" placeholder="Last Name" />
					<Input type="text" placeholder="User Name" />
					<Input type="email" placeholder="Email" />
					<Input type="password" placeholder="Password" />
					<Input type="password" placeholder="Confirm Password" />
					<Terms href="">Privacy Terms</Terms>
					<Button>Create</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Regitster;
