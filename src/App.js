import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';

function App() {

  const handleOnSearchChange = (searchData) =>{
       console.log(searchData);
       console.log("I am printed")
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
