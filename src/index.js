import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./redux/combinedReducers"
import { Provider } from "react-redux"
import promiseMiddleware from "redux-promise"

let myStore = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={myStore(rootReducer)}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
