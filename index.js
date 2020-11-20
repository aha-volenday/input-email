import React from 'react';
import { Form, Input, Skeleton } from 'antd';

import './styles.css';

const browser = typeof process.browser !== 'undefined' ? process.browser : true;

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
	value = '',
	withLabel = false
}) => {
	const renderInput = () => {
		return (
			<Input
				autoComplete="off"
				disabled={disabled}
				name={id}
				placeholder={placeholder || label || id}
				style={styles}
				type="text"
				onBlur={onBlur}
				onChange={e => onChange(e, id, e.target.value)}
				onPressEnter={onPressEnter}
				value={value}
			/>
		);
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
