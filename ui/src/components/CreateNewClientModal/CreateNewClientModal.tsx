import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Alert, Modal, Snackbar, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PersonalDetails from './PersonalDetails';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClientFormInput } from './types';
import ContactDetails from './ContactDetails';
import { createClient } from '../../services/api';
import { v4 as uuidv4 } from 'uuid';
import { StateContext } from '../../store/DataProvider';

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
	const { dispatch } = useContext(StateContext);
	const [activeStep, setActiveStep] = React.useState(0);
	const [toastOpen, setToastOpen] = React.useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ClientFormInput>({ mode: 'onBlur' });
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const onSubmit: SubmitHandler<ClientFormInput> = async (data) => {
		const newClient = {
			id: uuidv4(),
			...data,
		};
		try {
			await createClient(newClient);
			dispatch({ type: 'CREATE_CLIENT', data: newClient });
			setToastOpen(true);
			reset();
			setActiveStep(0);
			onClose();
		} catch (err) {
			// Handle error here
		}
	};

	const handleCloseToast = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setToastOpen(false);
	};

	return (
		<>
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
							<PersonalDetails
								errors={errors}
								register={register}
								handleNext={handleSubmit(handleNext)}
							/>
						)}
						{activeStep === 1 && <ContactDetails goBack={handleBack} errors={errors} register={register} />}
					</form>
				</Box>
			</Modal>
			<Snackbar open={toastOpen} autoHideDuration={5000} onClose={handleCloseToast}>
				<Alert onClose={handleCloseToast} severity='success' sx={{ width: '100%' }}>
					New client has been added!
				</Alert>
			</Snackbar>
		</>
	);
};

export default CreateNewClientModal;
