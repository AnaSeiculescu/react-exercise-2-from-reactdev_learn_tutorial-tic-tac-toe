import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './App.jsx'
import './index.css'

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);
