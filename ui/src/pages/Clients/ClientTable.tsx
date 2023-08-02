import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClientRow from './ClientRow';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../store/DataProvider';

function searchByName(clients: Client[], searchString: string): Client[] {
	const searchData = searchString.toLowerCase();

	return clients.filter((person) => {
		const firstNameMatches = person.firstName.toLowerCase().includes(searchData);
		const lastNameMatches = person.lastName.toLowerCase().includes(searchData);

		return firstNameMatches || lastNameMatches;
	});
}

const BasicTable = () => {
	const [localClients, setLocalClients] = useState<Client[]>([]);
	const { state } = useContext(StateContext);
	const { clients, searchInput } = state;

	useEffect(() => {
		const searchResult = searchByName(clients, searchInput);
		setLocalClients(searchResult);
	}, [searchInput, clients]);

	return (
		<TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
			<Table sx={{ minWidth: 400 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Phone number</TableCell>
						<TableCell>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{localClients.map((client) => (
						<ClientRow key={client.id} client={client} />
					))}
					{!localClients?.length && (
						<TableRow sx={{ padding: 3 }}>
							<TableCell component='th' scope='row'>
								No clients
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BasicTable;
