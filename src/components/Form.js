import React, { useState } from 'react'

const Form = () => {
  //State of Form
  const [search, setSearch] = useState({
      country: '',
    city: '',
  })

  //Destructuration, extract city, country
  const { country, city  } = search

  //Handle info of click. Get info user select
  const handleChange = (e) => {
    //To update state
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form>
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
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city"> City: </label>
      </div>
    </form>
  )
}

export default Form
