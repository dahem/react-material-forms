import React from 'react';
import {Form, Field} from 'react-final-form';
import {RenderTextField, RenderDateField} from 'util/CustomForm';
import {InputMaskCpf} from 'util/mask';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

const DateTimeFields = (props) => (
	<>
		<Field
			label="date"
			component={RenderDateField}
			name="date1"
		/>
		<Field
			label="date"
			component={RenderDateField}
			name="date2"
		/>
		<Field
			label="date"
			component={RenderDateField}
			name="date3"
		/>
		<Field
			label="date"
			component={RenderDateField}
			name="date4"
		/>
	</>
);

const FormComponent = (props) => (
	<form
		onSubmit={() => {}}
		style={{
			display: 'grid',
			gridGap: 20,
			gridTemplateColumns: 'auto auto auto',
			padding: 20,
		}}
	>
		<Field
			label="domain"
			component={RenderTextField}
			InputProps={{inputComponent: InputMaskCpf}}
			name="domain1"
		/>
		<Field
			label="domain"
			component={RenderTextField}
			name="domain2"
		/>
		<Field
			label="domain"
			component={RenderTextField}
			name="domain3"
		/>
		<Field
			label="domain"
			component={RenderTextField}
			name="domain4"
		/>
		<DateTimeFields />
	</form>
);

const App = () => (
	<div>
		<MuiPickersUtilsProvider
			utils={MomentUtils}
			locale="pt-BR"
			moment={moment}
		>
			<Form
				onSubmit={(data) => console.log(data)}
				initialValues={{
					domain1: '',
					domain2: 'larry',
					domain3: 'larry',
					domain4: 'larry',
					date1: moment().format('YYYY-MM-DD'),
					date2: moment().format('YYYY-MM-DD'),
					date3: moment().format('YYYY-MM-DD'),
					date4: moment().format('YYYY-MM-DD'),
				}}
				render={FormComponent}
			/>
		</MuiPickersUtilsProvider>
	</div>
);

export default App;
