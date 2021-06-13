import React from 'react';
import {useSelector} from 'react-redux';
import './category.css';
function Category() {


	const categories = useSelector(state => state.categories);

	const handleClick=(id) =>{
		
	}
	return (
		<section className="trending_items" style={{paddingTop:"50px"}} id="categoryList">
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
												<div className="col-lg-4 col-sm-6" key ={option._id} onClick={handleClick(option._id)}>
													<div className="single_product_item">
													<div className="single_product_item_thumb">
														<img src="img/tranding_item/tranding_item_1.png" alt="#" className="img-fluid" />
													</div>
													<h3> {option.label} </h3>
													<p>{option.definition}</p>
													</div>
												</div>
												/*
												<div class='col-lg-3 col-md-6' key ={option._id} onClick={handleClick(option._id)} >
													<div class='service-item'>
														<h3>{option.label}</h3>
														<img src='img/Categories/icon-service-1.png' alt='Service' />
														<p>{option.definition}</p>
													</div>
												</div>*/
										
											))}
				
				</div>
			</div>
		</div>
		</section>
	);
}

export default Category;
