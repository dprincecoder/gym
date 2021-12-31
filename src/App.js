import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterConsole, HeaderConsole } from "./components/console/layout";
import HomePage from "./components/home/homePage";
import { Footer, Header } from "./components/home/layouts";
import Dashboard from "./components/console/admin/Dashboard";
import EditAccountTrainer from "./components/console/trainer/EditAccountTrainer";
import EnrollClass from "./components/console/customer/EnrollClass";
import GymDashboard from "./components/console/gym/GymDashboard";
import Layout from "./components/Layout";
const App = () => {
	return (
		<div className="page-wrapper">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
					 	<Route index element={<HomePage />} />
						<Route path="/" element={<Footer />} />
						<Route path="*" element={<HomePage />} /> 
					</Route>
				</Routes>
				<Routes>
					<Route path="/console/" element={<HeaderConsole />}>
						<Route path="admin" element={<Dashboard />} />
						<Route path="trainer" element={<EditAccountTrainer />} />
						<Route path="customer" element={<EnrollClass />} />
						<Route path="gym" element={<GymDashboard />} />
					</Route>
					<Route path="/console/" element={<Footer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
