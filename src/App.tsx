import React from "react"
import { Homepage } from "./Homepage";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import Checkout from "./Checkout"
import { Success } from './Success';
import { Error } from "./Error";


function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      resources={[{ 
        name: "home", 
        list: Homepage 
      },{
        name: "checkout",
        list: Checkout,
      },{
        name: "success",
        list: Success,
      },{
        name: "error",
        list: Error,
      },]}
      Layout={({ children }) => (
        <div>
          <div>{children}</div>
        </div>
      )}
    />
  );
}

export default App;