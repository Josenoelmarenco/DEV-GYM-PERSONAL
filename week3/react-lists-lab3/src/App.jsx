import { TourList } from "./TourList";
import { tours } from "./toursData";
import './App.css';

export function App(){
  return(
    <main>
    <TourList tours={tours}/>
    </main>
  )
}