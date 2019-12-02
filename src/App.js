import React from 'react';
import {Form, Field} from 'react-final-form';
import {RenderTextField} from 'util/CustomForm';

const FormComponent = (props) => (
	<form onSubmit={() => {}}>
		<Field
			label="domain"
			component={RenderTextField}
			name="domain1"
		/>
		<Field
			label="domain"
			component={RenderTextField}
			name="domain2"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain3"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain4"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain5"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain6"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain7"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain8"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain9"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain10"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain11"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain12"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain13"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain14"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain15"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain16"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain17"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain18"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain19"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain20"
		/><Field
			label="domain"
			component={RenderTextField}
			name="domain21"
		/>
	</form>
);

const App = () => (
	<div>
		<Form
			onSubmit={(data) => console.log(data)}
			initialValues={{
				domain1: 'larry',
				domain2: 'larry',
				domain3: 'larry',
				domain4: 'larry',
				domain5: 'larry',
				domain6: 'larry',
				domain7: 'larry',
				domain8: 'larry',
				domain9: 'larry',
				domain10: 'larry',
				domain11: 'larry',
				domain12: 'larry',
				domain13: 'larry',
				domain14: 'larry',
				domain15: 'larry',
				domain16: 'larry',
				domain17: 'larry',
				domain18: 'larry',
				domain19: 'larry',
				domain20: 'larry',
				domain21: 'larry',
			}}
			render={FormComponent}
		/>
	</div>
);

export default App;
