// ARTUR

import './App.css';

import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {Homepage} from './pages/Homepage'
import {Personal} from './pages/Personal'
import {Courses} from './pages/Courses'
import {EducationsList} from './pages/EducationsList'
import {Apply} from './pages/Apply'
import {Notfound} from './pages/Notfound'
import RecordList from './components/recordList';
import EditCourse from './components/editCourse';
import CreateCourse from './components/createCourse';


import {Layout} from './components/Layout'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Homepage />}/>
          <Route path='personal' element= {<Personal />}/>
          <Route path='courses' element= {<Courses />}/>
          <Route path='educations' element= {<EducationsList />}/>
          <Route path='apply' element= {<Apply />}/>
          <Route path='*' element= {<Notfound />}/>
          <Route path="/record" element={<RecordList />} />
          <Route path="/edit/:id" element={<EditCourse />} />
          <Route path="/create" element={<CreateCourse />} />

        </Route>
      </Routes>
      </>
  );
}

export default App;


// ARTUR