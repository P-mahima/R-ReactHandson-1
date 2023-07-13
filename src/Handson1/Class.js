import React, { Component } from 'react'
// import './App.css';/

class Class extends Component{
    render(){
        return(
            <div className='box'>

                <h1>Class Component</h1>
                <p style={{color:"blue"}}>This is done by inline CSS</p>
                <p>This is done by External CSS</p>

            </div>

        )
    }
}
export default Class;