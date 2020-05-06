import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({ search, setSearch, setConsult }) => {
  const [error, setError] = useState(false)

  //Destructuration, extract city, country
  const { country, city } = search

  //Handle info of click. Get info user select
  const handleChange = (e) => {
    //To update state
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault()

    //Validation
    if (city.trim() === '' || country.trim() === '') {
      setError(true)
      return
    }

    setError(false)

    setConsult(true)

    //Pass to principal Component
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All fields are required" /> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city"> City: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">--Select a country--</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brazil</option>
          <option value="CO">Colombia</option>
          <option value="PE">Perú</option>
          <option value="ES">España</option>
        </select>
        <label htmlFor="country"> Country: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Search"
          className="waves-effect waves-dark btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  )
}

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired,
}

export default Form
