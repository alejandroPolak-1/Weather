/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import Error from './components/Error'

function App() {
  //State of Form
  const [search, setSearch] = useState({
    country: '',
    city: '',
  })

  //state for consult one finish writer de search (Wait before to consult of API)
  const [consult, setConsult] = useState(false)
  // state for result of query
  const [result, setResult] = useState({})

  // state for error message
  const [error, setError] = useState(false)

  //Destructuration, extract city, country
  const { country, city } = search

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = '8223adcd73d23dff977c6386a1f9c117'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

        const response = await fetch(url)
        const result = await response.json()

        setResult(result)
        setConsult(false)

        //Mesagge error. detects if there were correct results in the query
        if (result.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultAPI()
    //eslint-disable-next-line
  }, [consult])

  //conditionally load a component
  let component;
  if(error){
    component = <Error message= "No results"/>

  } else {
    component= <Weather result={result} />
  }

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
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
