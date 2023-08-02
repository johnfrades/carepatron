import React from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ClientFormInput } from './types';
import FormInput from '../FormInput';

type PersonalDetailsProps = {
	handleNext: () => void;
	register: UseFormRegister<ClientFormInput>;
	errors: FieldErrors<ClientFormInput>;
};

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ handleNext, register, errors }) => {
	return (
		<>
			<Stack gap={2} sx={{ marginTop: '20px' }}>
				<Box>
					<FormInput keyProp='firstName' register={register} errors={errors} />
				</Box>
				<Box>
					<FormInput keyProp='lastName' register={register} errors={errors} />
				</Box>
			</Stack>

			<Box marginTop='50px' display='flex' justifyContent='flex-end'>
				<Button size='small' variant='contained' onClick={handleNext}>
					Continue
				</Button>
			</Box>
		</>
	);
};

export default PersonalDetails;
