import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import propTypes from "prop-types";

export const ModalEdit = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const [fullNameNew, setFullNameNew] = useState("");
	const [emailNew, setEmailNew] = useState("");
	const [phoneNew, setPhoneNew] = useState("");
	const [addressNew, setAddressNew] = useState("");
	const { store, actions } = useContext(Context);

	function editarContacto(e) {
		e.preventDefault();

		fullNameNew == "" ? setFullNameNew(props.fullName) : undefined;
		emailNew == "" ? setEmailNew(props.email) : undefined;
		phoneNew == "" ? setPhoneNew(props.phone) : undefined;
		addressNew == "" ? setAddressNew(props.address) : undefined;

		actions.editarContacto(fullNameNew, emailNew, addressNew, phoneNew, props.id);
		// console.log("hola");
		setFullNameNew("");
		setEmailNew("");
		setAddressNew("");
		setPhoneNew("");
	}

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<h1 className="text-center mt-5">Edit contact</h1>
					{props.onClose ? (
						<button
							onClick={() => props.onClose()}
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					) : (
						""
					)}
					<form onSubmit={editarContacto}>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								value={fullNameNew}
								onChange={event => setFullNameNew(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								value={emailNew}
								onChange={event => setEmailNew(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								value={phoneNew}
								onChange={event => setPhoneNew(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								value={addressNew}
								onChange={event => setAddressNew(event.target.value)}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => props.onClose()}
							data-dismiss="modal">
							Back
						</button>
						<button type="submit" className="btn btn-primary form-control">
							save
						</button>
					</form>
					{/* <div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary "
							onClick={() => props.onClose()}
							data-dismiss="modal">
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => eliminarContacto(props.id)}>
							Do it!
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEdit.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	fullName: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
