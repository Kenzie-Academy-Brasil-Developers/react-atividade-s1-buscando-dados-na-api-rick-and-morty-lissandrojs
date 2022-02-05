import logo from './logo.svg';
import './App.css';
import{useState,useEffect} from 'react'
import Characters from './components/Characters'


function App() {
  useEffect(()=> {fetch("https://rickandmortyapi.com/api/character/").then(resp =>resp.json()).then(resut =>setcharacterList(resut.results)).catch((err)=>console.log(err))},[])
    const [characterList,setcharacterList] = useState([])
  console.log(characterList)
  
  return (
    <div >
      <Characters characterList={characterList}></Characters>
   

    </div>
  );
}

export default App;
