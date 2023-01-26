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
	console.log(history);
	return (
		<div className={s.container}>
			{/*
				<h2 className={s.title}>Stock</h2>
			<h3 className={s.subtitle}>All our products are here</h3>
			<div className={s.stockTitles}>
				<div className={s.bold}>ID</div>
				<div className={s.bold}>Name</div>
				<div className={s.bold}>Category</div>
				<div className={s.bold}>Country</div>
				<div className={s.bold}>Price</div>
				<div className={s.bold}>Stock</div>
			</div>
			<div className={s.stockContainer}>
				{drinks.length
					? drinks.map((e) =>
							edit.editable === true &&
							e.id === parseInt(edit.id) &&
							typeof e === "object" ? (
								<div
									key={e.id}
									id={e.id}
									onBlur={(e) => handleBlur(e)}
									className={s.stockEdit}
								>
									<div
										type="text"
										className={s.inputID}
										id={e.id}
										name="previewid"
										defaultValue={e.id}
									>
										{e.id}
									</div>

									<input
										type="text"
										className={s.inputName}
										id={e.id}
										name="name"
										defaultValue={e.name}
										style={
											errors.name
												? { borderColor: "red", color: "red" }
												: { borderColor: "black" }
										}
									/>
									<select name="category" id={e.id} className={s.inputCategory}>
										{categories.map((cat) => (
											<option key={cat.id} value={cat.id}>
												{cat.category}
											</option>
										))}
									</select>
									<select name="country" id={e.id} className={s.inputCategory}>
										{countries.map((con) => (
											<option key={con.id} value={con.id}>
												{con.country}
											</option>
										))}
									</select>
									<input
										type="text"
										className={s.inputStock}
										id={e.id}
										name="price"
										defaultValue={e.price}
									/>
									<input
										type="text"
										className={s.inputStock}
										id={e.id}
										name="stock"
										defaultValue={e.stock}
									/>
									<div className={s.botones}>
										<input
											type="submit"
											className={s.boton}
											onClick={(e) => changed(e)}
											value="✔"
											style={
												errors.name
													? { backgroundColor: "lightblue" }
													: { backgroundColor: "#0d035a" }
											}
											disabled={errors.name ? true : false}
										/>
										<input
											type="submit"
											className={s.boton}
											style={{ backgroundColor: "#0d035a" }}
											onClick={cancele}
											value="✖"
										/>
									</div>
								</div>
							) : (
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
