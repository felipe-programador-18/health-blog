import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import { AuthProviderContext } from './Contextmanage/authcontext';
import { useAuth } from './hoock/useAuthTentication';
import CreateLogin from './Login/login';
import Dashboard from './pages/dashbords/dashboards';
import EditPost from './pages/Editpost/Edit';
import Home from './pages/Home/Home';
import ManagePost from './pages/MeusPost/SavePost';
import PostSeparete from './pages/post/post';
import SearchDeates from './pages/Search/search';
import Sobre from './pages/Sobre/sobre';
import RegisterUser from './Register/registerUser';


function App() {
  const[user, setUsers] = useState(undefined)
  const{auth} = useAuth()
   
  console.log("testing user", user)
  const loadeduser = user === undefined
  console.log('test users here',user)
  
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
    setUsers(user)
    })
  }, [auth])

  if(loadeduser){
    return <p>Loading.....</p>
  } 
  
  
  return (
    <div className="App">
    <AuthProviderContext value={{user}} >
      <BrowserRouter>
      <Navbar/>
      <div className='container' >
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='/about' element={<Sobre/>} />
          <Route path="/dashboard" element={<Dashboard/>}  />
          
          <Route path='/search' element={<SearchDeates/> }  />
           
          <Route path='/login' element={ !user ?  <CreateLogin/> : <Navigate to='/' /> }  />
          
          <Route path='/register' element={!user ?  <RegisterUser/> : <Navigate to='/'  /> } />
          
          <Route path="/dashboard" element={ user ?  <Dashboard/> : <Navigate to='/' />}  />
          
          
          <Route path='/post/meuspost'  element={ user ? <ManagePost/> : <Navigate to='/login' />   }  />
          
          <Route  path='/post/:id' element={<PostSeparete/>} />
          
          <Route path='/post/edit/:id' element={ user ? <EditPost/>: <Navigate to='/login' /> } />

         
        
        
        </Routes>

        </div>

    
     </BrowserRouter>

    </AuthProviderContext> 
    </div>
  );
}

export default App;
