import React, {Component} from 'react'
import './Pipeline.css'

class Pipeline extends Component{

    constructor(props){
        super(props);
        this.state = {
            cards: [],
            listId: this.props.pipeline.id,
            value: "",
        }
    }

    componentDidMount(){
        fetch('https://api.trello.com/1/lists/'+ this.props.pipeline.id +'/cards?fields=id,name,desc&key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147')
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                // let cards = response.map((card, index) => {
                //     return (
                //         <article key={card.id} className="card">
                //             <header className="header">{card.name}</header>
                //             <div className="detail">{index+1}/{response.length}</div>
                //         </article>
                //     )
                // });
                let cards = response;
                this.setState({cards:cards});
            })
    }

    change = (e) => {
        this.setState({value: e.target.value})
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.createCard(e.target.value)
        }
    };

    createCard = (cardName) => {
        if (cardName.trim() !== "") {

            // Create new card
            fetch(`https://api.trello.com/1/cards?idList=${this.state.listId}&name=${cardName}&key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147`, {method: "POST"})
                .then((data) => {
                    return data.json()
                })
                .then((json) => {
                    let cards = this.state.cards
                    cards.push(json)
                    this.setState({
                        cards: cards
                    });
                })
                .catch((err) => console.log(err))

            // Redraw input
            this.setState({
                value: ""
            });
        }
    };

    render(){
        return(
            <section className="list">
                <header>{this.props.pipeline.name}</header>
                {this.state.cards.map((card, index) => {
                    return (
                        <article key={card.id} className="card">
                            <header className="header">{card.name}</header>
                            <div className="detail">{index+1}/{this.state.cards.length}</div>
                        </article>
                    )
                })}
                <input type="text" placeholder="Add a card..." onChange={this.change}
                       onKeyPress={this.handleKeyPress} value={this.state.value}/>
            </section>
        )
    };
}

export default Pipeline;