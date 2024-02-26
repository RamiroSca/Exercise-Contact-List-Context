import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import propTypes from "prop-types";

export const ModalEdit = props => {
	const [fullNameNew, setFullNameNew] = useState(props.fullName);
	const [emailNew, setEmailNew] = useState("");
	const [phoneNew, setPhoneNew] = useState("");
	const [addressNew, setAddressNew] = useState("");
	const { store, actions } = useContext(Context);

	function editarContacto(e) {
		e.preventDefault();

		fullNameNew == "" ? setFullNameNew(props.fullName) : console.log(fullNameNew);
		emailNew == "" ? setEmailNew(props.email) : console.log(emailNew);
		phoneNew == "" ? setPhoneNew(props.phone) : console.log(phoneNew);
		addressNew == "" ? setAddressNew(props.address) : console.log(addressNew);

		actions.editarContacto(fullNameNew, emailNew, addressNew, phoneNew, props.id);
		// console.log("hola");
		props.onClose();
		setFullNameNew("");
		setEmailNew("");
		setAddressNew("");
		setPhoneNew("");
	}

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content p-3">
					<div className="d-flex justify-content-between">
						<h1 className="text-center">Edit contact</h1>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close text-danger"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<form onSubmit={editarContacto}>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder={props.fullName}
								value={fullNameNew}
								onChange={event => setFullNameNew(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								placeholder={props.email}
								value={emailNew}
								onChange={event => setEmailNew(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								className="form-control"
								placeholder={props.phone}
								value={phoneNew}
								onChange={event => setPhoneNew(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								className="form-control"
								placeholder={props.address}
								value={addressNew}
								onChange={event => setAddressNew(event.target.value)}
							/>
						</div>
						<div className="d-flex">
							<button
								type="button"
								className="btn btn-danger form-control"
								onClick={() => props.onClose()}
								data-dismiss="modal">
								Back
							</button>
							<button type="submit" className="btn btn-primary form-control">
								save
							</button>
						</div>
					</form>
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
