import React, {Component} from 'react';
import Pipeline from '../Pipeline/Pipeline';

class Board extends Component{

    constructor(props){
        super(props);
        this.state = {
            pipelines: [],
        }
    }

    componentDidMount(){
        fetch('https://api.trello.com/1/boards/'+ this.props.match.params.boardId +'?fields=id,name&lists=open&list_fields=id,name&key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147')
            .then(response => {
                return response.json();
            })
            .then(response =>{
                let pipelines = response.lists.map((pipeline) => {
                    return(
                        <Pipeline key={pipeline.id} pipeline={pipeline} tasks={[{id:1,name:'test'}]}></Pipeline>
                    )
                });
                this.setState({pipelines:pipelines});
            });
    }

    componentWillReceiveProps(){
        fetch('https://api.trello.com/1/boards/'+ this.props.match.params.boardId +'?fields=id,name&lists=open&list_fields=id,name&key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147')
            .then(response => {
                return response.json();
            })
            .then(response =>{
                let pipelines = response.lists.map((pipeline) => {
                    return(
                        <Pipeline key={pipeline.id} pipeline={pipeline} tasks={[{id:1,name:'test'}]}></Pipeline>
                    )
                });
                this.setState({pipelines:pipelines});
            });
    }


    render(){
      return (
          <div>
              {this.state.pipelines}
          </div>
      )
    };
}

export default Board;