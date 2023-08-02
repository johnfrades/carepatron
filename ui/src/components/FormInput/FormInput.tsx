import React from 'react';
import { InputLabel, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ClientFormInput } from '../CreateNewClientModal/types';

type FormInputProps = {
	keyProp: keyof ClientFormInput;
	register: UseFormRegister<ClientFormInput>;
	errors: FieldErrors<ClientFormInput>;
};

const labelMapping: Record<FormInputProps['keyProp'], string> = {
	firstName: 'First name',
	lastName: 'Last name',
	phoneNumber: 'Phone number',
	email: 'Email',
};

const FormInput: React.FC<FormInputProps> = ({ keyProp, errors, register }) => {
	return (
		<>
			<InputLabel error={!!errors[keyProp]} shrink={false} htmlFor='firstName'>
				{labelMapping[keyProp]}
			</InputLabel>
			<TextField
				type={keyProp === 'email' ? 'email' : 'text'}
				error={!!errors[keyProp]}
				{...register(keyProp, { required: { value: true, message: 'Field is required' } })}
				size='small'
				name={keyProp}
				fullWidth
				helperText={errors[keyProp]?.message}
			/>
		</>
	);
};

export default FormInput;
