import CharacterList from "./components/CharacterList";
import Reload_page from "./components/recargar";
import Header from "./components/header";

function App(){
  
  return <div className="background">
    <Reload_page/>    
    <Header/>
    <CharacterList/> 
  </div>
}
export default App
