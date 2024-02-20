const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
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
						console.log(data);
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
