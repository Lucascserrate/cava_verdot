import React from "react";
import { useState, useEffect } from "react";
import PostProductForm from "../../FormularioPostProduct/PostProductForm";
import Aside from "../Aside/Aside";
import NavBar from "../Navbar/Navbar";
// import Prueba from '../Prueba/Prueba';
import Stock from "../Stock/Stock";
import s from "./Dashboard.module.css";
import { Doughnut } from "react-chartjs-2";
import Error from "../../Error/Error";
import { parseJwt } from "../../../functions/parseTokenJwt";
import { useNavigate } from "react-router-dom";
import "chart.js/auto";

const Dashboard = () => {
	const [display, setDisplay] = useState(false);
	const [decoding, setDecoding] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		if (!window.localStorage.getItem("token")) {
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		}
	}, [window.localStorage.getItem("token")]);

	useEffect(() => {
		if (window.localStorage.getItem("token")) {
			setDecoding(parseJwt(window.localStorage.getItem("token")));
		}
		/*
    if(decoding?.role !== 3){
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
   */
	}, [window.localStorage.getItem("token")]);

	const data = {
		labels: [
			"Ron",
			"Wine",
			"Tequila",
			"Mezcal",
			"Gin",
			"Whisky",
			"Beer",
			"Bourbon",
			"Brandy",
		],
		datasets: [
			{
				label: "My First Dataset",
				data: [30, 50, 60, 10, 20, 40, 70, 15, 25],
				backgroundColor: [
					"#212934",
					"#263238",
					"#37474f",
					"#455a64",
					"#546e7a",
					"#607d8b",
					"#78909c",
					"#90a4ae",
					"#b0bec5",
				],
				hoverOffset: 4,
			},
		],
	};
	const config = {
		type: "doughnut",
		data: data,
	};

	return (
		<>
			{window.localStorage.getItem("token") ? (
				decoding?.role === 3 ? (
					<div className={s.container}>
						<NavBar />
						<div className={s.aside}>
							<Aside />
						</div>
						<div className={s.title}>
							<h2 className={s.h2}>Dashboard</h2>
							<h3 className={s.h3}>An admin table</h3>
							<Stock setDisplay={setDisplay} />
						</div>
						<div className={s.cards}>
							<div className={s.card}>
								<p className={s.cardTitle}>Sale of the day</p>
								<p className={s.cardInfo}>$650</p>
							</div>
							<div className={s.card}>
								<p className={s.cardTitle}>Best Seller (ID)</p>
								<p className={s.cardInfo}>33</p>
							</div>
							<div className={s.card}>
								<p className={s.cardTitle}>Best Selling Category </p>
								<p className={s.cardInfo}>Wine</p>
							</div>
							<div className={s.card}>
								<p className={s.cardTitle}>Worst Seller (ID)</p>
								<p className={s.cardInfo}>13</p>
							</div>
						</div>
						<div className={s.dona}>
							<Doughnut data={data} config={config} />
						</div>
						{display && <PostProductForm setDisplay={setDisplay} />}
					</div>
				) : (
					<Error />
				)
			) : (
				<Error />
			)}
		</>
	);
};

export default Dashboard;
