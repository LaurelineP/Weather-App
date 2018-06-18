import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHERMAP_KEY;
const ENTRY_POINT = 'http://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const api_call = await fetch(`${ENTRY_POINT}${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if ( city && country ){
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:''
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error:'Please specify a city and country.'
      })
    }
  }

  onFocus = focus => {
    const inputs = document.getElementById(focus.target.id);
    inputs.setAttribute('placeholder', '')
  }

  onBlur = blur => {
    const inputs = document.getElementById(blur.target.id);
    inputs.setAttribute('placeholder', `${blur.target.id.charAt(0).toUpperCase() + blur.target.id.slice(1)} ...`)
  }

  render() {
    const { city, country, temperature, humidity, description, error} = this.state
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title/>
                </div>
                <div className="col-xs-7 form-container">
                  <div className="row">

                    <Form
                          onFocus={this.onFocus}
                          onBlur={this.onBlur}
                          onChange={this.onChangeCapitalise}
                          getWeather={this.getWeather}/>
                        </div>

                        <div className="row">
                    <Weather
                      className='weather-info'
                          city={city}
                          country={country}
                          temp={temperature}
                          humid={humidity}
                          desc={description}
                          err={error}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// async and await : request http easier
// when we actually making the call type await.
// const api_call doesn't do anything cause it contains a func, doesn't call it
// we need to jsonify the answer with json.json()

// TODO: add control case in input in order to match api req
