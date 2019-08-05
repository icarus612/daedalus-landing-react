import React from 'react';
export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            classNames: [`throbber-inner ${this.props.pulsar}`]
        }
    }
    render(){
        return (
            <div className="col-7 step">
                <div className="throbber">
                    <div className={this.state.classNames}></div>
                </div>
                <div>
                    <h4 className="description">
                        {this.props.title}
                    </h4>

                    <p className="description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
    
}