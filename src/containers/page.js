import React from 'react';
import {Header} from './header';
import {Menu} from './body'
import { Card, CardContent } from '@material-ui/core';

export class Page extends React.Component{
	
	render(){
		const menus=[
			{
				"img": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
				"name": "Hleb",
			},
			{
				"img": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
				"name": "Gril"
			},
			{
				"img": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
				"name": "Burger"
			},
			{
				"img": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
				"name": "Salad"
			},
		]		
		
		return(
			<div>
				<Header />
				<Card>
					<CardContent>
						<Menu  menus={menus} />
					</CardContent>
					<CardContent>
						<Menu  menus={menus} />
					</CardContent>
					<CardContent>
						<Menu  menus={menus} />
					</CardContent>
					<CardContent>
						<Menu  menus={menus} />
					</CardContent>
				</Card>			
					
			</div>
		)
  }
}