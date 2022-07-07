import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import RoomIcon from "@mui/icons-material/Room"
import PhoneIcon from "@mui/icons-material/Phone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.footer`
	padding: 50px;
	background-color: #333;
`
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 50px;
	max-width: 1000px;
	margin: auto;
`

const Left = styled.div`
	display: flex;
	flex-direction: column;
`
const Title = styled.h2`
	color: white;
	font-size: 40px;
`
const Desc = styled.p`
	color: white;
	width: 70%;
`
const SocialIcons = styled.div`
	display: flex;
	gap: 10px;
`
const SocialLink = styled.a`
	text-decoration: none;
	color: white;
	margin-top: 20px;
	&:hover {
		color: rgba(250, 250, 250, 0.8);
	}
`
const Center = styled.div`
	display: flex;
	flex-direction: column;
`
const LinksTitle = styled.h3`
	font-size: 28px;
	color: white;
	margin-bottom: 20px;
`
const LinksContainer = styled.div`
	display: flex;
`
const LinksList = styled.ul`
	width: 50%;
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
const LinkItem = styled.li`
	width: fit-content;
	color: white;
	cursor: pointer;
	&:hover {
		color: rgba(250, 250, 250, 0.8);
	}
`

const Right = styled.div`
	display: flex;
	flex-direction: column;
`

const ContactTitle = styled.h2`
	color: white;
	font-size: 28px;
	margin-bottom: 15px;
`
const ContactItem = styled.p`
	color: white;
	margin-bottom: 15px;
`
const ContactImage = styled.img`
	width: 50%;
	background-color: white;
`
const LinkStyled = styled(Link)`
	text-decoration: none;
	color: white;
	&:hover {
		color: rgba(250, 250, 250, 0.8);
	}
`

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Title>Furnit.</Title>
					<Desc>
						Furnit. is one of the best furniture and decoration stores in Egypt,
						shop the best and rarest styles.
					</Desc>
					<SocialIcons>
						<SocialLink href="#">
							<FacebookIcon />
						</SocialLink>
						<SocialLink href="#">
							<InstagramIcon />
						</SocialLink>
						<SocialLink href="#">
							<TwitterIcon />
						</SocialLink>
						<SocialLink href="#">
							<YouTubeIcon />
						</SocialLink>
					</SocialIcons>
				</Left>
				<Center>
					<LinksTitle>Links</LinksTitle>
					<LinksContainer>
						<LinksList>
							<LinkItem>
								<LinkStyled to="/home">Home</LinkStyled>
							</LinkItem>
							<LinkItem>About</LinkItem>
							<LinkItem>
								<LinkStyled to="/products">Products</LinkStyled>
							</LinkItem>
							<LinkItem>Services</LinkItem>
							<LinkItem>Contact</LinkItem>
							<LinkItem>Support</LinkItem>
						</LinksList>
						<LinksList>
							<LinkItem>Jobs</LinkItem>
							<LinkItem>
								<LinkStyled to="/cart">Cart</LinkStyled>
							</LinkItem>
							<LinkItem>Service Policy</LinkItem>
							<LinkItem>Order Now</LinkItem>
							<LinkItem>Call Us</LinkItem>
							<LinkItem>Terms</LinkItem>
						</LinksList>
					</LinksContainer>
				</Center>
				<Right>
					<ContactTitle>Contact Info</ContactTitle>
					<ContactItem>
						<RoomIcon style={{ marginRight: "15px" }} />
						10th of Ramadan City Egypt
					</ContactItem>
					<ContactItem>
						<PhoneIcon style={{ marginRight: "15px" }} />
						+2 255 120 115
					</ContactItem>
					<ContactItem>
						<MailOutlineIcon style={{ marginRight: "15px" }} />
						contact@furnit.ma
					</ContactItem>
					<ContactImage src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png"></ContactImage>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Footer
