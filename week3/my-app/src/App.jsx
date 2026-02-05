// import Map2 from "./components/Map2"
// import UserDirectory from "./components/UserDirectory"
// import {OrdersDashboard} from "./components/OrdersDashboard"
import TourList from "./components/Tours"

import './App.css'

export default function App() {
  const tours = [
    { id: 1, name: "Tour 1", price: 100 },
    { id: 2, name: "Tour 2", price: 200 },
  ];

  return <TourList tours={tours} />;
}

