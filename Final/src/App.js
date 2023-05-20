import { Route, Routes} from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css"
import { Home } from "./pages/Home";
import { Edit } from "./pages/Edit";
import { Add } from "./pages/Add"

import moment from "moment"

function App() {
  // gives specific date in YYYY-MM-DD format
  console.log(moment(moment(('21/05/2023').split(' ')[0].split("/").reverse().join("-"))).format('YYYY-MM-DD'))

  // gives current date in YYYY-MM-DD format 
  console.log(moment().format('YYYY-MM-DD'))

  console.log(moment(moment(moment(('21/05/2023').split(' ')[0].split("/").reverse().join("-"))).format('YYYY-MM-DD')).isAfter(moment().format('YYYY-MM-DD')))
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route path="edit" element={<Edit />} />
          <Route />
          <Route path="add" element={<Add />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
