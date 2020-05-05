/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  //State of Form
  const [search, setSearch] = useState({
    country: '',
    city: '',
  })

  //state for consult one finish writer de search (Wait before to consult of API)
  const [consult, setConsult] = useState(false)

  //Destructuration, extract city, country
  const { country, city } = search

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = ''
        const url =
          ' http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}'

        const response = await fetch(url)
        const result = response.json()

        console.log(result)
      }
    }
  }, [consult])

  return (
    <Fragment>
      <Header title="Weather React app" />

      <div className="contenedor-form">
        <div className="conteiner">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
