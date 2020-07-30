import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { removeFeature } from '../actions/index'

const AddedFeature = (props) => {
	const handleRemove = () => {
		props.removeFeature(props.feature)
	}

	return (
		<li key={props.id}>
			<button className='button' onClick={(e) => handleRemove(e)}>
				X
			</button>
			{props.feature.name}
		</li>
	)
}
AddedFeature.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	removeFeature: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		id: state.additionalFeatures.id,
		name: state.additionalFeatures.name,
	}
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature)
