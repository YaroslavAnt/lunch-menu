import React from 'react';
import { Button} from '@material-ui/core'



export function Header(props){
	
	return(	
			<div>
				<Button >Home</Button>
				<Button>Statistics</Button>
				<Button>Admin</Button>
				<Button>Signout</Button>
			</div>
	);
}

