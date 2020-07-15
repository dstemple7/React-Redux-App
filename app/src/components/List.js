import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import {fetchDogs} from '../store/actions'

const DogsList = props => {
  useEffect(() => {
    props.fetchDogs()
  }, [])

  const [dogPics, setDogPics] = useState(<div></div>)

  useEffect(() => {
    setDogPics(props.dogs.message.map(dog => (
      <img src={dog}></img>
    )))
  }, [props.isLoading])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>

      <h1 class='title'>Holy Trinity o' Randar Miniature Schnauzer Pics</h1>
      <h1>"heavens yes, jim bob!!!"</h1>
      <button onClick={refreshPage}>Those are some ugly beasts, show me some fresh ones!</button>
      <div className="doggyContainer">
        <div className="doggyPics">
          {dogPics}
        </div>
      </div>

      {props.isLoading && <h4>Loading doggie data...</h4>}
      {props.error && (
        <p className="error">What, woah...{props.error}</p>
      )}
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
