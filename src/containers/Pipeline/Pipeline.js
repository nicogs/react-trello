import React, {Component} from 'react'
import './Pipeline.css'

class Pipeline extends Component{

    constructor(props){
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount(){
        fetch('https://api.trello.com/1/lists/'+ this.props.pipeline.id +'/cards?fields=id,name,desc&key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147')
            .then(response => {
                return response.json();
            })
            .then(response => {
                let cards = response.map((card) => {
                    return (
                        <article key={card.id} className="card">
                            <header className="header">{card.name}</header>
                            <div className="detail">1/2</div>
                        </article>
                    )
                });
                this.setState({cards:cards});
            })
    }


    render(){
        return(
            <section className="list">
                <header>{this.props.pipeline.name}</header>
                {this.state.cards}
            </section>
        )
    };
}

export default Pipeline;