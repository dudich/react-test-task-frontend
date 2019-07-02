import React from 'react';
import PropTypes from 'prop-types';
import { BarChart as BC, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import './index.css';

const BarChart = (props) => (
	<div className="barchart-wrapper">
		<BC width={800} height={600} data={props.data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="key" />
			<YAxis />
			<Bar dataKey="value" fill="#82ca9d" />
		</BC>
	</div>
);

BarChart.propTypes = {
	data: PropTypes.array,
};

export default BarChart;