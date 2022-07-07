import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Badge, MenuItem } from "@mui/material"
import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { tablet } from "../responsive"

// Start Styled Components
const Container = styled.nav`
	position: fixed;
	top: 30px;
	width: 100%;
	height: 60px;
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${tablet({ height: "unset", padding: "20px 0", position: "static" })};
	z-index: 100;
`

const Wrapper = styled.div`
	padding: 0 15px;
	display: flex;
	${tablet({ flexDirection: "column", gap: "10px" })}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 15%;
	${tablet({ width: "100%", justifyContent: "space-evenly" })}
`
const Language = styled.div`
	cursor: pointer;
	font-weight: bold;
	${tablet({ fontSize: "14px" })}
`
const SearchField = styled.div`
	display: flex;
	aling-items: center;
	padding: 4px;
	border: 1px solid;
	box-shadow: ${(props) => props.focus && "0px 0px 4px 2px #9ebebe"};

	${tablet({ padding: "2px" })}
`
const InputSearch = styled.input`
	border: none;
	background: none;
	color: white;
	outline: none;
	&::placeholder {
		color: lightgray;
	}
`
const MagnifyIcon = styled(SearchIcon)`
	cursor: pointer;
	&.override {
		${tablet({ fontSize: "20px" })}
	}
`
const Center = styled.div`
	flex: 1;
	text-align: center;
`
const Logo = styled.h1`
	font-weight: bold;
	cursor: pointer;
	${tablet({ fontSize: "40px", margin: "10px 0" })}
`
const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	${tablet({ width: "100%", justifyContent: "space-around" })}
`
const LinkStyled = styled(Link)`
	text-decoration: none;
	color: white;
`
const LinkStyledLogo = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 40px;
`
// start toggler

const LinksMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 200px;
	top: 50%;
	transform: translateY(-50%);
	height: 50vh;
	background-color: #0000008f;
	transition: 0.5s;
	left: ${(props) => (props.show ? "0px" : "-200px")};
	z-index: 100;
	${tablet({ height: "20vh" })}
`
const LinksItems = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 50px 10px;
	list-style: none;
	padding: 0;
`
const ListItem = styled.li`
	${LinkStyled} {
		font-size: 25px;
		${tablet({ fontSize: "20px" })}
	}
`

const TogglerContainer = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: -30px;
	width: 30px;
	height: 30px;
	cursor: pointer;
	background-color: white;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 1px 1px 4px #00000087;
`
const TogglerSpan = styled.span`
	background-color: black;
	width: 80%;
	height: 2px;
	display: inline-block;
	position: relative;
	&::before,
	&::after {
		content: "";
		position: absolute;
		width: inherit;
		height: inherit;
		background-color: inherit;
	}
	&::before {
		top: 4px;
	}
	&::after {
		top: -4px;
	}
`

const Navbar = (props) => {
	const [isFocused, setIsFocused] = useState(false)
	const [isToggeled, setIsToggled] = useState(false)
	let { itemsCount } = props
	return (
		<>
			<LinksMenu show={isToggeled}>
				<LinksItems>
					<ListItem>
						<LinkStyled to="/home">Home</LinkStyled>
					</ListItem>
					<ListItem>
						<LinkStyled to="/products">Products</LinkStyled>
					</ListItem>
					<ListItem>
						<LinkStyled to="/cart">Cart</LinkStyled>
					</ListItem>
				</LinksItems>
				<TogglerContainer onClick={() => setIsToggled(!isToggeled)}>
					<TogglerSpan></TogglerSpan>
				</TogglerContainer>
			</LinksMenu>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchField focus={isFocused}>
							<InputSearch
								placeholder="Search"
								onBlur={() => {
									setIsFocused(false)
								}}
								onFocus={() => {
									setIsFocused(true)
								}}
							></InputSearch>
							<MagnifyIcon className="override"></MagnifyIcon>
						</SearchField>
					</Left>
					<Center>
						<Logo>
							<LinkStyledLogo to="/home">Furnit.</LinkStyledLogo>
						</Logo>
					</Center>
					<Right>
						<MenuItem>
							<LinkStyled to="/register">Register</LinkStyled>
						</MenuItem>
						<MenuItem>
							<LinkStyled to="/login">Login</LinkStyled>
						</MenuItem>
						<MenuItem>
							<LinkStyled to="/cart">
								<Badge badgeContent={itemsCount} color="primary">
									<ShoppingCartOutlinedIcon />
								</Badge>
							</LinkStyled>
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		itemsCount: state.cartCount.count,
	}
}

// let mapDispatchToProps= (dispatch)=>{
//   return{
//     increase: ()=> dispatch({ type: 'INCREASE' }),
//     decrease: ()=> dispatch({ type: 'DECREASE' })
//   }
// }

export default connect(mapStateToProps)(Navbar)
