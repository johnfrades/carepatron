import React from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import FormInput from '../FormInput';
import Button from '@mui/material/Button';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ClientFormInput } from './types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type ContactDetailsProps = {
	register: UseFormRegister<ClientFormInput>;
	errors: FieldErrors<ClientFormInput>;
	goBack: () => void;
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ register, errors, goBack }) => {
	return (
		<>
			<Stack gap={2} sx={{ marginTop: '20px' }}>
				<Box>
					<FormInput keyProp='email' register={register} errors={errors} />
				</Box>
				<Box>
					<FormInput keyProp='phoneNumber' register={register} errors={errors} />
				</Box>
			</Stack>

			<Box marginTop='50px' display='flex' justifyContent='space-between'>
				<Button size='small' startIcon={<ArrowBackIcon />} onClick={goBack}>
					Back
				</Button>
				<Button size='small' variant='contained' type='submit'>
					Create client
				</Button>
			</Box>
		</>
	);
};

export default ContactDetails;
