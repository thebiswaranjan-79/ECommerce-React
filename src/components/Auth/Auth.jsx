import React from 'react'

function Auth() {
  return (
    <div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Username" id="loginUsername"/>
        </div>
        <div className="input-group">
            <input type="password" className="form-control" placeholder="Password" id="loginPassword" />
        </div>
        <div className="input-group">
            <button className="form-control btn btn-primary">Submit</button>
        </div>
        
    </div>
  )
}

export default Auth
