import React from 'react';
import PropTypes from 'prop-types';
import { LineChart as LC, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import './index.css';

const LineChart = (props) => {
	return (
		<div className="linechart-wrapper">
			<LC
				width={800}
				height={600}
				data={props.data}
				margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
			>
				<XAxis dataKey="timestamp" />
				<YAxis dataKey="value" />
				<CartesianGrid stroke="#f5f5f5" />
				<Line type="monotone" dataKey="value" stroke="#387908" />
			</LC>
		</div>
	);
};

LineChart.propTypes = {
	data: PropTypes.array,
};

export default LineChart;