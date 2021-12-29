import { useEffect, useState } from "react";
import { checkUserType } from "../hoc";
import { useHistory } from "react-router-dom";

const AuthWrapper = ({ currentUser, children }) => {
	const history = useHistory();
	const userType = checkUserType(currentUser);
	useEffect(() => {
		if (!currentUser) {
			history.push("/");
		} else {
			history.push(`/${userType}`);
		}
	}, [currentUser, history, userType]);

	return <div className="page-wrapper">{children}</div>;
};

export default AuthWrapper;
