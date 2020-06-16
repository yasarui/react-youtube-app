import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm:"",
        }
    }
    handleChange(e){
        this.setState({
            searchTerm:e.target.value
        })
    }
    handleFormSubmit(e){
       e.preventDefault();
       this.props.handleSubmit(this.state.searchTerm);
    }
    render(){
        return(
           <div className="ui grid">
              <div className="sixteen wide column">
                <form onSubmit={(e)=>this.handleFormSubmit(e)} className="ui form">
                    <div className="ui fluid input" >
                       <input placeholder="Search Videos" value={this.state.searchTerm} onChange={(e)=>this.handleChange(e)} type="text" placeholder="Search Videos" />
                    </div>
                </form>
              </div>
           </div>
        )
    }
}

export default SearchBar;