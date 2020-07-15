import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchDogs} from '../store/actions'

const DogsList = props => {
  useEffect(() => {
    props.fetchDogs()
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button onClick={refreshPage}>Oooh, that's an ugly beast, show me a fresh one!</button>
      <h1>Show me my son's cousins!</h1>
      <img src={props.dogs.message} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    dogs: state.dogs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {fetchDogs}
  )(DogsList)
