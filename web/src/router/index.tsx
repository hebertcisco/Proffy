import {BrowserRouter, Route} from "react-router-dom";
import React, { Component } from "react";

import { Landing } from '../pages/Landing/index';
import { TeacherForm } from "../pages/TeacherForm/index";
import { TeacherList } from '../pages/TeacherList/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} /> 
      <Route path="/study" component={TeacherList} /> 
      <Route path="/give-classes" component={TeacherForm}/> 
    </BrowserRouter>
  );
}

