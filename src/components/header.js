import React ,{Component} from 'react';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="Header">
                
                <h1 className="headerTitle">
                    Welcome to the react testing app
                </h1>
                
            </div>
        )
    }
}

export default Header;