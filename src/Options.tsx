import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Options() {

	const [options, setOptions] = useState<string[]>(['', '']);
	const [decision, setDecision] = useState<string>();

	function addOption(): void {
		setOptions([...options, '']);
	}

	function deleteOption(index: number): void {
		const newOptions = [...options];
		newOptions.splice(index, 1);
		setOptions(newOptions);
	}

	function updateOption(index: number, event: any) {
		const newOptions = [...options];
		newOptions[index] = event.currentTarget.value;
		setOptions(newOptions);
		setDecision('');
	}

	function makeDecision(): void {
		setDecision(options[Math.floor(Math.random() * (options.length))]);
	}

	function addButtonDisabled(): boolean {
		return options.includes('');
	}

	function deleteButtonDisabled(): boolean {
		return options.length <= 1;
	}

	function decisionButtonDisabled(): boolean {
		return options.includes('') && options.length > 1;
	}

	return (
		<div>
			<h2>Add your options and then press the button to make a decision</h2>
			<div>
				{options.map((option, index) => {
					return (
						<div key={index}>
							<Form.Control type="text" placeholder={`Option ${index + 1}`} onChange={(e) => updateOption(index, e)} value={option}/>
							{index === options.length - 1 ? <Button variant="outline-primary" disabled={addButtonDisabled()} onClick={addOption}>Add</Button> : ''}
							<Button variant="outline-primary" disabled={deleteButtonDisabled()} onClick={() => deleteOption(index)}>Delete</Button>
						</div>
						)
					})}
			</div>
			<div>
				<Button variant="primary" disabled={decisionButtonDisabled()} onClick={makeDecision}>Make a decision</Button>
			</div>
			<div>
				{decision}
			</div>
		</div>
	)
}
