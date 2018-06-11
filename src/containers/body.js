import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

export class Menu extends React.Component{
	
  constructor(props){
		super(props);
		this.state= this.props.menus
		console.log(this.state)
	}
	
	render(){
		return this.state.map((dish, index)=>{
			return(
				<div key={index} >
					<Card>
						<CardMedia  image={dish.img} />						
						<CardContent> {dish.name} </CardContent>	
					</Card>					
				</div>	
			);		
		});		
	}	

}