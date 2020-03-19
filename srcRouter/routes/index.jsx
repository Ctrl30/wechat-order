import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "../App/App";
import Index from "../models/index";
// import A from "../models/a";
// import B from "../models/b";
import Lazy from "../routes/lazy";

const PC = Lazy(()=>import('../models/pc/inedx'))
const A = Lazy(()=>import('../models/pc/a'))
const B = Lazy(()=>import('../models/pc/b'))

// function BaseRouter() {
//   return (
//     <Router>
//       <App>
//         <Switch>
//           <Route path="/" exact  component={Index} />
//           {/* <Route path="/" exact  component={()=>{
//               return <Redirect to="/a"/>
//           }} /> */}
//           <Route path="/a" exact component={A}></Route>
//           <Route path="/b" component={B}></Route>
//         </Switch>
//       </App>
//     </Router>
//   );
// }
function BaseRouter() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" exact  component={Index} />
            {/* <Route path="/" exact  component={()=>{
                return <Redirect to="/a"/>
            }} /> */}
            <Route path="/pc" exact component={PC}></Route>
            <Route path="/b" component={B}></Route>
          </Switch>
        </App>
      </Router>
    );
  }
export default BaseRouter;
