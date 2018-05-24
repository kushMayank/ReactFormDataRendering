import React,{Component} from 'react';
import { TextField } from 'material-ui';
import Button from 'material-ui/RaisedButton';
import Suggestionlist from './suggestionlist'


class Suggestion extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            Suggestion:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeSuggestion=this.handleChangeSuggestion.bind(this);
    }

    handleChangeName(e){
        console.log(" inside the handleChangename ");
        this.setState({
            name:e.target.value 
        })
    }

    handleChangeSuggestion(e){
        console.log(" inside the handleChangeSuggestion ");
        this.setState({
            Suggestion:e.target.value 
        })
    }

    handleSubmit(){
        
    }


    componentDidUpdate(){
        console.log("this.state",this.state);
    }

    render(){
        return(
            <div>
                <div className="Suggestion">

                <label>Enter Your Name :</label>  <TextField onChange={this.handleChangeName} className="name"></TextField>
                <label>Enter Your Suggestion :</label><TextField  onChange={this.handleChangeSuggestion} className="suggestion"></TextField><br/>

                <Button label="submit" onClick={this.handleSubmit}  />
                </div>

                <div className="Suggestionlist">
                     <Suggestionlist data={this.state} />
                </div>

            </div>
        )
    }
}

export default Suggestion;