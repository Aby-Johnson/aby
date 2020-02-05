import React from 'react';
import Product from './Product';

export default class ProductList extends React.Component {
	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Product/>
			</div>
		);
	}
}
