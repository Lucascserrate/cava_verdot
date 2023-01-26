import React from "react";
import s from "./History.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../../redux/actions";
function History() {
	const dispatch = useDispatch();
	const history = useSelector((state) => state.historial);
	useEffect(() => {
		dispatch(getHistory());
	}, []);
	return (
		<div className={s.container}>
			<div className={s.stockTitles}>
				<div className={s.bold}>ID</div>
				<div className={s.bold}>Name</div>
				<div className={s.bold}>UserID</div>
				<div className={s.bold}>DrinkID</div>
				<div className={s.bold}>SubTotal</div>
				<div className={s.bold}>Amount</div>
			</div>
			<div className={s.stockContainer}>
				{history.length > 0 &&
					history.map((e) => (
						<div className={s.stockItems} key={e.id} id={e.id}>
							<div className={s.text}>{e.id}</div>
							<div className={s.text}>{e.name}</div>
							<div className={s.text}>{e.userId}</div>
							<div className={s.text}>{e.drinkId}</div>
							<div className={s.text}>{e.subtotal.toFixed(2)}</div>
							<div className={s.text}>{e.amount}</div>
						</div>
					))}
			</div>
			{/*
			<div className={s.stockContainer}> (
								<div
									onClickCapture={(e) => editable(e)}
									key={e.id}
									id={e.id}
									className={s.stockItems}
								>
									<div className={s.text} id={e.id}>
										{e.id}
									</div>
									<div className={s.text} id={e.id}>
										{e.name}
									</div>
									<div className={s.text} id={e.id}>
										{e.category?.category}{" "}
									</div>
									<div className={s.text} id={e.id}>
										{e.country?.country}{" "}
									</div>
									<div className={s.text} id={e.id}>
										{e.price}
									</div>
									<div className={s.text} id={e.id}>
										{e.stock}
									</div>
								</div>
							),
					  )
					: undefined}
			</div>
			<div className={s.buttons}>
				<button onClick={() => setDisplay(true)} className={s.btn}>
					Add
				</button>
				{errors.name && <Alert>{errors.name}</Alert>}
			</div> */}
		</div>
	);
}

export default History;
