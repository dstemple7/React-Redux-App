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
      <button onClick={refreshPage}>Show me a new lil yapper</button>
      <h1>Woof woof</h1>
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
