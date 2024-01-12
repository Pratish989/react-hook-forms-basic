import './App.css'
import { useState } from "react";
import Checkbox from './CheckBox';
import Multiple from './SimpleForm';
import MyForm from './InputValidation';
import Uncontrolled from './Uncontrolled';
import LoginForm from './ReactHookForm';

function App() {
  const [selectedOption, setSelectedOption] = useState("option1");

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

return  (
	<div>
		<label>
			Select an option:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Option 1</option>
				<option  value="option2">Option 2</option>
				<option  value="option3">Option 3</option>
			</select>
		</label>
		<p>Selected option: {selectedOption}</p>

    <Checkbox/>
    <Multiple/>
    <MyForm/> 
    <Uncontrolled/>
    <LoginForm/>
	</div>
	);
}

export default App


