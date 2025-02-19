import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
      <div>
        <div style={{fontSize: '160px', lineHeight: 1}}>404</div>
      </div>
      <div>
      <div style={{textAlign: 'center', fontSize: '18px'}} className='text-muted'>Not Found</div>
      {/* <div className='text-muted'>The page does not exist..</div> */}
      </div>
      <div style={{marginTop: '20px'}}>
        <div style={{padding: '10px', width: '180px', color: '#fff', background: '#2b9348', textAlign: 'center', cursor: 'pointer', borderRadius: '3px'}} onClick={() => navigate('/')}>Back to Home</div>
      </div>
    </div>
  )
}
