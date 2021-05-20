import React from 'react';
import {useSelector} from 'react-redux';
import './category.css';
function Category() {

	const categories = useSelector(state => state.categories);

	const handleClick=(id) =>{
		
	}
	return (
		<div class='service'>
			<div class='container-fluid'>
				<div class='section-header'>
					<h2>Our Services categories</h2>
					<p>
						We assure our services qualities
					</p>
				</div>
				<div class='row'>
				
					{ categories.map((option)=>
											(
												<div class='col-lg-3 col-md-6' key ={option._id} onClick={handleClick(option._id)} >
													<div class='service-item'>
														<h3>{option.label}</h3>
														<img src='img/Categories/icon-service-1.png' alt='Service' />
														<p>{option.definition}</p>
													</div>
												</div>
										
											))}
				
				</div>
			</div>
		</div>
	);
}

export default Category;
