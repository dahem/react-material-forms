import React from 'react';
import MaskedInput from 'react-text-mask';

export function InputMaskCpf(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			guide={false}
			mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
		/>
	);
}

export function InputMaskDate(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
		/>
	);
}

export function InputMaskIdentityCard(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/]}
		/>
	);
}

export function InputMaskHealthCardNumber(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/]}
		/>
	);
}

export function InputMaskPhone(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
		/>
	);
}

export function InputMaskCellPhone(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
		/>
	);
}

export function InputMaskDeskNumber(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
		/>
	);
}


export function InputMaskTime(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			guide={false}
			mask={[/\d/, /\d/, ':', /\d/, /\d/]}
		/>
	);
}

export function InputMaskZipCode(props) {
	const {inputRef, ...other} = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			guide={false}
			mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
		/>
	);
}
