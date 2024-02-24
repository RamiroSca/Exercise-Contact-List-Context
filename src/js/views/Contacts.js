import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	const { store, actions } = useContext(Context);

	const handleDelete = id => {
		setState({ showModal: true, id: id });
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
									onDelete={() => handleDelete(item.id)}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
