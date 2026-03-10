import './App.css'
import ListStudentComponent from './components/ListStudentComponent'
import StudentComponent from './components/StudentComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListStudentComponent />}></Route>
          <Route path='/students' element={<ListStudentComponent />}></Route>
          <Route path='/add-student' element={<StudentComponent />}></Route>
          <Route path='/edit-student/:id' element={<StudentComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
