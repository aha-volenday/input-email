import React from 'react';
import { Form, Input, Skeleton, Tooltip } from 'antd';

const browser = typeof window !== 'undefined' ? true : false;

if (browser) require('./styles.css');

export default ({
	disabled = false,
	error = null,
	extra = null,
	id,
	label = '',
	onBlur = () => {},
	onChange,
	onPressEnter = () => {},
	placeholder = '',
	required = false,
	styles = {},
	toolTip = {},
	value = '',
	withLabel = false
}) => {
	const renderInput = () => {
		const input = (
			<Input
				autoComplete="off"
				disabled={disabled}
				name={id}
				placeholder={placeholder || label || id}
				style={styles}
				type="text"
				onBlur={e => {
					const newValue = e.target.value.trim();
					onChange({ target: { name: id, value: newValue } }, id, newValue);
					onBlur(e);
				}}
				onChange={e => onChange(e, id, e.target.value)}
				onPressEnter={onPressEnter}
				value={value}
			/>
		);
		return Object.keys(toolTip).length === 0 ? input : <Tooltip {...toolTip}>{input}</Tooltip>;
	};

	const formItemCommonProps = {
		colon: false,
		help: error ? error : '',
		label: withLabel ? (
			<>
				<div style={{ float: 'right' }}>{extra}</div> <span class="label">{label}</span>
			</>
		) : (
			false
		),
		required,
		validateStatus: error ? 'error' : 'success'
	};

	return (
		<Form.Item {...formItemCommonProps}>
			{browser ? renderInput() : <Skeleton active paragraph={{ rows: 1, width: '100%' }} title={false} />}
		</Form.Item>
	);
};
