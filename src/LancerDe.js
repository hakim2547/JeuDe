import React,{ Component } from 'react'
import './LancerDe.css'
import De from './De'

class LancerDe extends Component{

// Face numbers passes as default props
static defaultProps = {
	sides : ['one', 'two', 'three',
			'four', 'five', 'six']
}
constructor(props){
	super(props)
	
	// States
	this.state = {
	De1 : 'one',
	De2 : 'one',
	rolling: false
	

	}
	this.roll = this.roll.bind(this)
}
roll(){
	const {sides} = this.props
	this.setState({
	
	// Changing state upon click
	De1 : sides[Math.floor(Math.random() * sides.length)],
	De2 : sides[Math.floor(Math.random() * sides.length)],
	rolling:true
	})

    // Start timer of one sec when rolling start
    setTimeout(() => {

	// Set rolling to false again when time over
	this.setState({rolling:false})
	},1000)
}
     

render(){

	const handleBtn = this.state.rolling ?
					'LancerDe-rolling' : ''
	const {De1, De2, rolling} = this.state.
	return(

	<div className='LancerDe'>
		<div className='LancerDe-container'>
		<De face={De1} rolling={rolling}/>
		<De face={De2} rolling={rolling}/>
		</div>
        
		<button className={handleBtn}
				disabled={this.state.rolling}
				onClick={this.roll}>

		{this.state.rolling ? 'Rolling' : 'Play !'}
        
		</button>
	</div>
    )
    
}
}


export default LancerDe
