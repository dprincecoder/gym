import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./authWrapper/AuthWrapper";
import {
	adminUser,
	customerUser,
	gymUser,
	trainerUser,
} from "./mockUser/MockUser";

import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthWrapper currentUser={trainerUser}>
				<App />
			</AuthWrapper>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
