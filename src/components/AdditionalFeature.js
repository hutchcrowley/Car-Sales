import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addFeature } from '../actions/index'

const AdditionalFeature = (props) => {
	const handleAdd = () => {
		console.log('feature: ', props.feature)
		props.addFeature(props.feature)
	}
	return (
		<li key={props.id}>
			<button type='submit' className='button' onClick={(e) => handleAdd(e)}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	)
}
AdditionalFeature.propTypes = {
	addFeature: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
	return {
		id: state.additionalFeatures.id,
		name: state.additionalFeatures.name,
		price: state.additionalFeatures.price,
	}
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature)
