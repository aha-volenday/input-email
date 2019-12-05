import React, { Component } from 'react';
import { Form, Input } from 'antd';

import './styles.css';

export default class InputEmail extends Component {
	renderInput() {
		const {
			disabled = false,
			id,
			label = '',
			onBlur = () => {},
			onChange,
			onPressEnter = () => {},
			placeholder = '',
			styles = {},
			value = ''
		} = this.props;

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
	}

	render() {
		const { error = null, extra = null, label = '', required = false, withLabel = false } = this.props;

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

		return <Form.Item {...formItemCommonProps}>{this.renderInput()}</Form.Item>;
	}
}
