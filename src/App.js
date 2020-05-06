/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'

function App() {
  //State of Form
  const [search, setSearch] = useState({
    country: '',
    city: '',
  })

  //state for consult one finish writer de search (Wait before to consult of API)
  const [consult, setConsult] = useState(false)

  const [result, setResult] = useState({})

  //Destructuration, extract city, country
  const { country, city } = search

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = '8223adcd73d23dff977c6386a1f9c117';
        const url =
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

        const response = await fetch(url)
        const result = await response.json()

        setResult(result)
        setConsult(false)

      }
    }
    consultAPI()
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
            <div className="col m6 s12">
              <Weather
              result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
