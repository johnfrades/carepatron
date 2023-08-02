import React, { memo, useContext, useEffect, useState } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import Button from '@mui/material/Button';
import CreateNewClientModal from '../../components/CreateNewClientModal';
import SearchClientInput from '../../components/SearchClientInput';

function Clients() {
	const { dispatch } = useContext(StateContext);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		getClients().then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }));
	}, [dispatch]);

	return (
		<Page>
			<Typography variant='h5' fontWeight={500} sx={{ textAlign: 'start' }}>
				Clients
			</Typography>
			<Stack direction='row' justifyContent='space-between' sx={{ marginTop: '20px' }}>
				<SearchClientInput />
				<Button
					disableElevation
					color='primary'
					variant='contained'
					size='small'
					onClick={() => setModalOpen(true)}
				>
					Create new client
				</Button>
			</Stack>
			<Paper sx={{ margin: 'auto', marginTop: 3 }}>
				<ClientTable />
			</Paper>

			<CreateNewClientModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</Page>
	);
}

export default memo(Clients);
