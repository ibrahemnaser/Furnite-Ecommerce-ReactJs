import React, { useState } from "react"
import styled from "styled-components"
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import { products } from "../products"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({ height: "70vh" })}
`

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.dir === "left" && "15px"};
	right: ${(props) => props.dir === "right" && "15px"};
	cursor: pointer;
	opacity: 0.5;
	z-index: 10;
`

const Wrapper = styled.div`
	display: flex;
	transform: translateX(${(props) => props.slideVal * -100}vw);
	transition: 0.5s ease-in;
`
const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
	${mobile({ height: "70vh" })}
`
const ImgContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
const InfoContainer = styled.div`
	position: absolute;
	${"" /* text-align: ${(props) => props.texDir || "center"}; */}
	width: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transform: translate(${(props) => props.texDir === "right" && 0}, -50%);
`
const Title = styled.h1`
	color: ${(props) => (props.imgId === 2 ? "#73989a" : "#115155")};
	font-size: 50px;
	${mobile({ fontSize: "30px" })}
`
const Desc = styled.p`
	color: ${(props) => (props.imgId === 2 ? "#73989a" : "#115155")};
	width: 70%;
	letter-spacing: 1.2px;
	line-height: 1.1;
	font-size: 16px;
	${mobile({ fontSize: "10px" })}
`
const Button = styled.button`
	color: white;
	cursor: pointer;
	position: absolute;
	bottom: -50px;
	background: no-repeat;
	border: 1px solid transparent;
	background-color: #115155;
	padding: 5px 15px;
`
const LinkStyled = styled(Link)`
	text-decoration: none;
	color: white;
`

const Slider = () => {
	let [sliderIndex, setSliderIndex] = useState(0)

	let handleSlide = (direction) => {
		if (direction === "left") {
			setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 3)
		} else {
			setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0)
		}
	}

	return (
		<Container>
			<Arrow dir="left" onClick={() => handleSlide("left")}>
				<ArrowLeftIcon />
			</Arrow>
			<Wrapper slideVal={sliderIndex}>
				{products.map((item, indx) => {
					return (
						<Slide key={indx}>
							<ImgContainer>
								<Image src={item.img} />
							</ImgContainer>
							<InfoContainer texDir={item.dir}>
								<Title imgId={item.id}>{item.title}</Title>
								<Desc marginDir={item.dir} imgId={item.id}>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</Desc>
								<Button>
									<LinkStyled to="/products">Shop Now</LinkStyled>
								</Button>
							</InfoContainer>
						</Slide>
					)
				})}
			</Wrapper>
			<Arrow dir="right" onClick={() => handleSlide("right")}>
				<ArrowRightIcon />
			</Arrow>
		</Container>
	)
}

export default Slider
