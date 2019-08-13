import React from 'react';
const Card = (props) => {


        this.state = {
            classes = ['throbber-inner', props.pulsar]
        }
    

        return (
            <div className="col-7 step">
                <div className="throbber">
                    <div className={classNames.join(' ')}></div>
                </div>
                <div>
                    <h4 className="description">
                        {props.title}
                    </h4>

                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </div>
        )
    
    
}
export default Card;
