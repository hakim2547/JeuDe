import React, {Component} from 'react'
import './De.css'

class De extends Component{
render(){
	const {face, rolling} = this.props
	
	// Using font awesome icon to show
	// the exactnumber of dots
	return <i className={`De fas fa-dice-${face}
			${rolling && 'De-shaking'}`}/>
}
}

export default De
