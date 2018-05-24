import React ,{Component} from 'react';
import TextField from 'material-ui/TextField'


class Suggestionlist extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <TextField className="field"></TextField>
                {this.props.data.name}
            </div>
        )
    }
}

export default Suggestionlist;