interface Client {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

interface ApplicationState {
	clients: Client[];
	searchInput: string;
}
