import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/Sign_up';
import SemesterTable from './Components/NoteTable/BSCIT/SemWiseData';
import Semester_1 from './Components/NoteTable/BSCIT/Semester_1/Semester_1';
import Semester_2 from './Components/NoteTable/BSCIT/Semester_2/Semester_2';
import Semester_3 from './Components/NoteTable/BSCIT/Semester_3/Semester_3';
import Semester_4 from './Components/NoteTable/BSCIT/Semester_4/Semester_4';
import Semester_5 from './Components/NoteTable/BSCIT/Semester_5/Semester_5';
import Semester_6 from './Components/NoteTable/BSCIT/Semester_6/Semester_6';
import IP from './Components/NoteTable/BSCIT/Semester_1/IP';
import IP_Practical_Table from './Components/NoteTable/BSCIT/Semester_1/IP_Practical_Table';
import DE from './Components/NoteTable/BSCIT/Semester_1/DE';
import DE_Practical_Table from './Components/NoteTable/BSCIT/Semester_1/DE_Practical_Table';
import CS_Practical_Table from './Components/NoteTable/BSCIT/Semester_1/CS_Practical_Table';
import OS_Practical_Table from './Components/NoteTable/BSCIT/Semester_1/OS_Practical_Table';
import DM_Practical_Table from './Components/NoteTable/BSCIT/Semester_1/DM_Practical_Table';
import CS from './Components/NoteTable/BSCIT/Semester_1/CS';
import DM from './Components/NoteTable/BSCIT/Semester_1/DM';
import OS from './Components/NoteTable/BSCIT/Semester_1/OS';
import CSS_CourseContent from './Languages/CSS_TutorialDetail';
import PHP_CourseContent from './Languages/PHP_TutorialDetail';
import JS_CourseContent from './Languages/JS_TutorialDetail';
import RJS_CourseContent from './Languages/RJS_TutorialDetail';
import JAVA_CourseContent from './Languages/JAVA_TutorialDetail';
import QuizInstructions from './Components/Quiz/HTML_Quiz/HTML_Instructions';
import QuizApp from './Components/Quiz/HTML_Quiz/HTML_Quiz';
import Html_QResult from './Components/Quiz/HTML_Quiz/Html_QResult';
import CSS_QuizInstructions from './Components/Quiz/CSS_Quiz/CSS_Instructions';
import CSS_QResult from './Components/Quiz/CSS_Quiz/CSS_QResult';
import CSS_QuizApp from './Components/Quiz/CSS_Quiz/CSS_Quiz';
import Header_Quiz from './Components/Quiz/Header_Quiz';
import AboutSection from './Components/AboutSection/AboutSection';
import HTML_CourseContent from './Languages/HTML_TutorialDetail';
import ContactHeader from './Components/Contact/Contact';
import BSCCS_semesters from './Components/NoteTable/BSCCS/BSCCS_SemWiseData';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Sign_up" element={<SignUp />} />
              <Route path="/AboutSection" element={<AboutSection />} />
              <Route path="/Contact" element={<ContactHeader />} />
              <Route path='/SemWiseData' element={<SemesterTable />} />
              <Route path='/Semester_1' element={<Semester_1 />} />
              <Route path='/Semester_2' element={<Semester_2 />} />
              <Route path='/Semester_3' element={<Semester_3 />} />
              <Route path='/Semester_4' element={<Semester_4 />} />
              <Route path='/Semester_5' element={<Semester_5 />} />
              <Route path='/Semester_6' element={<Semester_6 />} />
              <Route path='/IP' element={<IP />} />
              <Route path='/IP_Practical_Table' element={<IP_Practical_Table />} />
              <Route path='/DE' element={<DE />} />
              <Route path='/DE_Practical_Table' element={<DE_Practical_Table />} />
              <Route path='/OS' element={<OS />} />
              <Route path='/OS_Practical_Table' element={<OS_Practical_Table />} />
              <Route path='/DM' element={<DM />} />
              <Route path='/DM_Practical_Table' element={<DM_Practical_Table />} />
              <Route path='/CS' element={<CS />} />
              <Route path='/CS_Practical_Table' element={<CS_Practical_Table />} />
              <Route path='/HTML_TutorialDetail' element={<HTML_CourseContent />} />
              <Route path='/CSS_TutorialDetail' element={<CSS_CourseContent />} />
              <Route path='/PHP_TutorialDetail' element={<PHP_CourseContent />} />
              <Route path='/JS_TutorialDetail' element={<JS_CourseContent />} />
              <Route path='/RJS_TutorialDetail' element={<RJS_CourseContent />} />
              <Route path='/JAVA_TutorialDetail' element={<JAVA_CourseContent />} />
              <Route path='/HTML_Instructions' element={<QuizInstructions />} />
              <Route path='/HTML_Quiz' element={<QuizApp />} />
              <Route path="/Html_QResult" element={<Html_QResult />} />
              <Route path='/CSS_Instructions' element={<CSS_QuizInstructions />} />
              <Route path='/CSS_Quiz' element={<CSS_QuizApp />} />
              <Route path="/CSS_QResult" element={<CSS_QResult />} />
              <Route path="/Header_Quiz" element={<Header_Quiz />} />
              <Route path="/BSCCS_SemWiseData" element={<BSCCS_semesters />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
