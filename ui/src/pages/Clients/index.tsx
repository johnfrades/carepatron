import React, { memo, useContext, useEffect, useState } from 'react';
import { Paper, Stack, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CreateNewClientModal from '../../components/CreateNewClientModal';

function Clients() {
	const { state, dispatch } = useContext(StateContext);
	const { clients } = state;
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		getClients().then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }));
	}, [dispatch]);

	return (
		<Page>
			<Typography variant='h5' sx={{ textAlign: 'start' }}>
				Clients
			</Typography>
			<Stack direction='row' justifyContent='space-between' sx={{ marginTop: '20px' }}>
				<OutlinedInput
					size='small'
					sx={{ backgroundColor: 'white', borderColor: 'red' }}
					type='text'
					placeholder='Search clients...'
					endAdornment={
						<InputAdornment position='end'>
							<IconButton aria-label='search' edge='end'>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
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
				<ClientTable clients={clients} />
			</Paper>

			<CreateNewClientModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</Page>
	);
}

export default memo(Clients);
