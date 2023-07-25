import React from 'react'
import Navigate from './Navigate';
import { Button } from 'react-bootstrap';
import MyModal from '../Components/MyModal';
function Login() {
  return (
    <>
    <Navigate />
     <MyModal />
     <div className='container'>
     <div>
    <Button>
    click me
    </Button>
    </div>
    </div>
    </>
  )
}

export default Login