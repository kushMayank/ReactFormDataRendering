import React ,{Component } from 'react';
import Button from 'material-ui/FlatButton';


class Details extends Component{
    constructor(props){
        super(props);

        this.state={
            name:this.props.data.name,
            address:this.props.data.address,
            country:this.props.data.country,
            flag:this.props.data.flag
        }

        
        this.editHandler=this.editHandler.bind(this);
            
    }


    shouldComponentUpdate(nextProps,nextState){
        console.log("should component Update ");
        console.log("next state",nextState)
        if(nextState.flag!==false){
            this.setState({flag:false,});
            console.log("should component Update2 ");
            console.log("current state value",nextState)
            return true
        }
    }


    componentWillUnmount(){
        console.log("componnet will unmount in details");
    }

    
    componentWillReceiveProps(nextProps){
        console.log("component will recieving props");
        console.log("next props",nextProps.data)
        this.setState({
            name:nextProps.data.name,
            address:nextProps.data.address,
            country:nextProps.data.country,
            flag:nextProps.data.flag
            
            
        })
    }


    componentWillMount(){
        console.log("component will mount in the details")
    }


    componentDidMount(){
        console.log("component did mount in the details");
    }



    editHandler(e){
        console.log("props2",this.props)
        this.setState={
            name:this.state.data.name,
            address:this.state.data.address,
            country:this.state.data.country
        }

    }

    
    render(){
        console.log("props in details",this.state);

        return(
            <div>
                
                Name:{this.state.name}<br/>
                Address:{this.state.address}<br/>
                Country:{this.state.country}

                <div>
                    <Button onClick={this.editHandler}>Edit</Button>
                </div>


            </div>
        )
    }

    
}

export default Details;