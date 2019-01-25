import React, { Component } from 'react';
import '../css/App.css';

class TransitionComp extends Component{
    state = {
        show: false
    }
    showDiv = () => {
        this.setState({
            show:!this.state.show ? true:false
        })
    }

    render(){
        return(
            <div>
                {this.state.show ? <div style={{
                    background:'red',
                    height:'100px'
                }}>

                </div>:
            null }
            <div className="showDiv"
            onClick={this.showDiv}>
                Show or Hide
            </div>
            </div>
        )
    }
}


export default TransitionComp;