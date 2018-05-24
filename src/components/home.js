import React,{Component} from 'react';
import Button from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { TextField, DropDownMenu } from 'material-ui';
import Details from './details.js'
 

class Home extends Component{

    constructor(props){

        console.log(" in the constructor");
        super(props);
        this.state={
            name:"",
            address:"",
            country:"",
            flag:false,
        }; 

        console.log("constructor intial state",this.state);
        
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeAddress=this.handleChangeAddress.bind(this);
        this.handleChangeCountry=this.handleChangeCountry.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name:e.target.value});
        // console.log("current state1",this.state);
    }
    handleChangeAddress(e) {
        this.setState({ address:e.target.value});
        // console.log("current state2",this.state);
    }

    handleChangeCountry(e){
        this.setState({country:e.target.value});
        // console.log("current state3",this.state);
    }

    handleSubmit(e){
        console.log(" in the handle submit")
            this.setState({flag:true});
        
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("should component Update ");
    //     console.log("next state",nextState)
    //     if(nextState.flag!==false){
    //         this.setState({flag:false,});
    //         console.log("should component Update2 ");
    //         console.log("current state value",nextState)
    //         return true
    //     }
    // }

    componentWillUpdate(){
        console.log("componnet will update");
    }

    componentDidUpdate(){
        console.log("componnet did update");
        //this.setState({flag:false});
        
    }

    componentWillReceiveProps(nextProps){
        console.log("component will recieve props");
        

    }

    componentWillUnmount(){
        console.log("componnet will unmount ");
    }

    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        
        console.log("component did mount")
    }

    
    render(){
        console.log("in the render");
        return(

            <div className="Home">

                <div className="Input">
                    <label>Name:</label><TextField className="Address" onChange={this.handleChangeName} /><br/>
                    <label> country:</label><TextField className="Country" onChange={this.handleChangeCountry}/><br/>
                    <label>Address:</label><TextField  className="Name"  onChange={this.handleChangeAddress}/><br/>
                    <Button label='Submit' onClick={this.handleSubmit} >
                    
                    </Button>
                    <RaisedButton label="Cancel">
                    
                    </RaisedButton>

                </div>
                <div className="Output">
                     <label>Your name is  :  </label>{this.state.name} <br></br>
                     <label>your address is  :  </label>{this.state.address}<br></br>
                
                     <label>your country is  :  </label>{this.state.country}<br/><br/>

                      {this.state.flag ? <Details data={this.state}/>:""}    

                      {/* {this.setState({flag:false})}    ;               */}
                         
                </div>
                
             </div>

        )
    }

    
}

export default Home;