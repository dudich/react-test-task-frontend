import React, { useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import './index.css';
import { SOCKET_URL } from '../constants';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import { getCategoriesRanges, getMaxMinValuesFromArray, mapToFlatArray, pipe } from '../helpers';

const socket = io.connect(SOCKET_URL);

const initialState = {
	data: [],
};

function reducer(state, action) {
	switch (action.type) {
		case 'data':
			return { data: [...state.data, action.data] };
		default:
			throw new Error();
	}
}


function prepareBarChartData(data) {

	const categoriesRanges = pipe(
		mapToFlatArray,
		getMaxMinValuesFromArray,
		getCategoriesRanges,
	)(data);

	const categories = {};
	categoriesRanges.forEach(([minRange, maxRange]) => {
		const categoryKey = `${minRange}-${maxRange}`;
		categories[categoryKey] = 0;
		data.forEach(i => {
			if (i.value > minRange && i.value < maxRange) {
				categories[categoryKey] += 1;
			}
		});
	});
	return Object.keys(categories).map(key => ({ key, value: categories[key] }));
}

function Index() {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		socket.on('data', (data) => {
			dispatch({ type: 'data', data });
		});
		return () => socket.disconnect();
	}, []);

	const barChartData = prepareBarChartData(state.data);
	return (
		<div className="App">
			<LineChart data={state.data} />
			<BarChart data={barChartData} />
		</div>
	);
}

export default Index;
