import React, {Component} from 'react';

class Card extends Component{
    render(){
        return (
            <article key={this.props.id} className="card">
                <header className="header">{this.props.name}</header>
                <div className="detail">{this.props.index}/{this.props.total}</div>
            </article>
        )
    }
}

export default Card;