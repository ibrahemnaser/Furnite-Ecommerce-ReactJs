import React from "react"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"

const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 30px;
	background-color: teal;
	color: white;
	font-size: 14px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.2px;
	${tablet({ position: "static" })}
	${mobile({ fontSize: "10px" })};
	z-index: 100;
`

const Announcement = () => {
	return (
		<Container>Super Deal! Free Shipping On Orders Over &#36;1,000</Container>
	)
}

export default Announcement
