import React from 'react';
import Box from '@mui/material/Box';
import { Modal, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PersonalDetails from './PersonalDetails';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClientFormInput } from './types';
import ContactDetails from './ContactDetails';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	boxShadow:
		'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
	p: '20px',
	borderRadius: '6px',
};
const steps = ['Personal details', 'Contact details'];

type CreateNewClientModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const CreateNewClientModal: React.FC<CreateNewClientModalProps> = ({ isOpen, onClose }) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ClientFormInput>({ mode: 'onBlur' });
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const onSubmit: SubmitHandler<ClientFormInput> = (data) => {
		console.log(data);
	};

	return (
		<Modal
			open={isOpen}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={modalStyle}>
				<Stack direction='row' justifyContent='space-between' alignItems='center'>
					<Typography>Create new client</Typography>
					<IconButton aria-label='close' onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</Stack>

				<Stepper activeStep={activeStep} sx={{ marginTop: '20px' }}>
					{steps.map((label) => {
						const stepProps: { completed?: boolean } = {};
						const labelProps: {
							optional?: React.ReactNode;
						} = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>

				<form onSubmit={handleSubmit(onSubmit)}>
					{activeStep === 0 && (
						<PersonalDetails errors={errors} register={register} handleNext={handleSubmit(handleNext)} />
					)}
					{activeStep === 1 && <ContactDetails goBack={handleBack} errors={errors} register={register} />}
				</form>
			</Box>
		</Modal>
	);
};

export default CreateNewClientModal;
