import './App.css';

import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import {Homepage} from './pages/Homepage'
import {Personal} from './pages/Personal'
import {Courses} from './NATTA/pages/Courses'
import {Educations} from './pages/Educations'
import {Apply} from './pages/Apply'
import {Notfound} from './pages/Notfound'


import {Layout} from './components/Layout'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Homepage />}/>
          <Route path='personal' element= {<Personal />}/>
          <Route path='courses' element= {<Courses />}/>
          <Route path='educations' element= {<Educations />}/>
          <Route path='apply' element= {<Apply />}/>
          <Route path='*' element= {<Notfound />}/>
        </Route>
      </Routes>
      </>
  );
}

export default App;
