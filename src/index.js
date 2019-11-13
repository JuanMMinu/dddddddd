// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";

//import Badge from './components/Badge';
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const container = document.getElementById("app");

// ReactDOM.render(
//   <Badge
//     firstname="Juan"
//     lastname="Minú"
//     jobtitle="Frontend Engineer"
//     twitter="JuanMMinu"
//     avatar="https://es.gravatar.com/avatar/9deef320351a5f60fa8dd128fa53e771"
//   />,
//   container
// );

ReactDOM.render(<Badges/>, container);