import React from 'react';
import PropTypes from 'prop-types';
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	TextField,
	Checkbox,
	RadioGroup,
	Radio,
	InputAdornment,
} from '@material-ui/core';
import moment from 'moment';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

export const RenderTextField = ({label, input, meta, ...rest}) => {
	const {name, onChange, value, ...restInput} = input;
	const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

	return (
		<TextField
			{...rest}
			label={label}
			variant="outlined"
			fullWidth
			error={showError}
			onChange={onChange}
			value={value}
			inputProps={{
				...restInput,
				startAdornment: true && (
					<InputAdornment position="start">
						{!false ? <DoneIcon color="primary" /> : <ErrorIcon color="error" />}
					</InputAdornment>
				),
			}}
			helperText={showError ? meta.error || meta.submitError : undefined}
		/>
	);
};

RenderTextField.propTypes = {
	label: PropTypes.string.isRequired,
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
};
