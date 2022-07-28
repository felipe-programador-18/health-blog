import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

import { useValueAuth } from '../Contextmanage/authcontext'



const Navbar  = () => {
 
  const {user} = useValueAuth()
  console.log('what have here', user)
 
 
 
 return (<div>
   <nav className={styles.navbar}>
     <NavLink className={styles.brand}  to='/' > <span> FirmeSaúde</span> </NavLink>  
    
    <ul className={styles.links_list} >
       <li>
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : "" ) }>Home</NavLink>
       </li>
      
      {!user && ( <> 
       <li>
        <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '')}  > Entrar</NavLink>
       </li>
       
       
       <li>
        <NavLink to='/register' className={({isActive}) => (isActive ? styles.active :'') }  >Registrar</NavLink>
       </li>
       
       <li>
         <NavLink to='/login' >Login</NavLink>
       </li> 
       

       </>
       
       )}
          

      {user && (<>  
      
        <li>
        <NavLink to='/post/create' className={({isActive}) => (isActive ? styles.active: '')}  >Novo Post</NavLink>
       </li>
        
       <li>
        <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active: '')}   >Dashboard</NavLink>
       </li>
      
        </> ) }
      
       <li>
        <NavLink to='/about' className={({isActive}) => (isActive ? styles.active: '')} >Sobre</NavLink>
       </li>
     
       
       {user && ( <> 
        <li>
         <button >Sair</button>
       </li>
       </> )}
      
    </ul> 
</nav>

   </div>)
}

export default Navbar