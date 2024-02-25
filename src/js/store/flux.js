const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Your data structures, A.K.A Entities
			contactData: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			getDatosAgenda: function() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Ramiro")
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						// console.log(data);
						setStore({ contactData: data });
					})
					.catch(error => console.log(error));
			},
			creacionContacto: function(fullName, email, address, phone) {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "Ramiro",
						address: address,
						phone: phone
					})
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			eliminarContacto: function(id) {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "delete"
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status == 201 ? this.getDatosAgenda() : console.log(resp.status));
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			editarContacto: function(fullName, email, address, phone, id) {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "Ramiro",
						address: address,
						phone: phone
					})
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status == 201 ? this.getDatosAgenda() : console.log(resp.status));
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
