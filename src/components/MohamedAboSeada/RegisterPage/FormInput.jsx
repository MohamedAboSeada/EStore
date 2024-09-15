import React, { useEffect, useRef, useState } from "react";

function FormInput({ type, label, value, setValue }) {
	let [visible, setVisible] = useState(false);
	let password = useRef(null);

	useEffect(() => {
		if (type === "password") {
			if (visible) {
				password.current.type = "text";
				password.current.focus();
			} else {
				password.current.type = "password";
			}
		}
	}, [visible]);

	return (
		<div className="field bg-slate">
			<label className="field__label">{label}</label>
			<div className="mydiv">
				<input
					ref={password}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					type={type}
					className="field__input"
				/>

				{type === "password" && (
					<button
						onClick={() => setVisible(!visible)}
						className="show__btn"
					>
						<i
							className={`far ${
								visible ? "fa-eye-slash" : "fa-eye"
							}`}
						></i>
					</button>
				)}
			</div>
		</div>
	);
}

export default FormInput;
