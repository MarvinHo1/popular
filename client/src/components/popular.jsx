import React from 'react'
import PhotoList from './photoList.jsx';


class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
render() {
    // {console.log(this.props.data[0].image)}
    return(
        <div>
        <h1>Helloo!!!...  We have life!</h1>  
        <PhotoList photo = {this.props}/> 
         </div>
        )
    {console.log(Photolist)}
    }
}
export default Popular

// console.log('hello')