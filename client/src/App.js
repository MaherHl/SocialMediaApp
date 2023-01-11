import { BrowserRouter as Router,Navigate ,Routes, Route } from "react-router-dom";
import HomePage from "scenes/HomePage";
import LoginPage from "scenes/LoginPage";
import ProfilePage from "scenes/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import{themeSettings} from "./theme"
import { boolean } from "yup";
function App() {
   const mode = useSelector((state)=>state.mode)
   const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
   const isAuth =Boolean(useSelector((state)=> state.token))
  return (

   <>
   <Router>
    <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <Routes>
      <Route  path="/" element={<LoginPage/>} />
      <Route path="/home" element={ isAuth ?< HomePage/> : <Navigate to="/"/> }/>
      <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/"/>}/>
      

    </Routes>
   </ThemeProvider>
   
   </Router>
   </>
  );
}

export default App;
