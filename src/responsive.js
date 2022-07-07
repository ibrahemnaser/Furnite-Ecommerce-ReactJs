import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media (max-width: 380px) {
			${props}
		}
	`;
};
export const tablet = (props) => {
	return css`
		@media (max-width: 600px) {
			${props}
		}
	`;
};
export const largeTablet = (props) => {
	return css`
		@media (max-width: 768px) {
			${props}
		}
	`;
};
