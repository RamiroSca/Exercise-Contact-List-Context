import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { ModalEdit } from "../component/ModalEdit.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	const [stateEdit, setStateEdit] = useState({
		showModal: false,
		id: null,
		fullName: "",
		email: "",
		phone: "",
		address: ""
	});
	const { store, actions } = useContext(Context);

	const handleDelete = id => {
		setState({ showModal: true, id: id });
	};
	const handleEdit = (id, fullName, email, phone, address) => {
		setStateEdit({ showModal: true, id: id, fullName: fullName, email: email, phone: phone, address: address });
	};

	useEffect(() => {
		actions.getDatosAgenda();
	}, []);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactData.map((item, index) => {
							return (
								<ContactCard
									key={index}
									fullName={item.full_name}
									email={item.email}
									phone={item.phone}
									address={item.address}
									onEdit={() => handleEdit(item.id)}
									onDelete={() =>
										handleDelete(item.id, item.full_name, item.email, item.phone, item.address)
									}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<ModalEdit
				show={stateEdit.showModal}
				id={stateEdit.id}
				onClose={() => setStateEdit({ showModal: false })}
				fullName={stateEdit.fullName}
				email={stateEdit.email}
				phone={stateEdit.phone}
				address={stateEdit.address}
			/>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
