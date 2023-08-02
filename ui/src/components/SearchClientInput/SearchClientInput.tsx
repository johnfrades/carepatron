import React, { useContext } from 'react';
import { InputAdornment, OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { StateContext } from '../../store/DataProvider';

const SearchClientInput = () => {
	const { dispatch } = useContext(StateContext);

	return (
		<OutlinedInput
			onChange={(e) => dispatch({ type: 'SEARCH_INPUT', data: e.target.value })}
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
	);
};

export default SearchClientInput;
