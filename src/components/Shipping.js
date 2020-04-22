import React, {Component} from 'react';
import {connect} from 'react-redux';

class Shipping extends Component{
    handleShipping = (e) => {
        if(e.target.checked){
            this.props.addShipping();
        }else{
            this.props.subtractShipping();
        }
    }

    componentWillUnmount(){
        if(this.refs.shipping.checked)
            this.props.subtractShipping();
    }
    
    render(){
        return (
            <div>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-sm-9 text-right">
                            <label>
                                <input type="checkbox" ref="shipping" onChange={this.handleShipping} />
                                <span> <strong>Shipping</strong></span>
                            </label>
                        </div>
                        <div className="col-sm-3 text-right">Tk. 50.00</div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-sm-9 text-right">
                            <h2>Total</h2>
                        </div>
                        <div className="col-sm-3 text-right"><h2>Tk. {this.props.total.toFixed(2)}</h2></div>
                    </div>
                </li>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => {
            dispatch({type: 'ADD_SHIPPING'})
        },
        subtractShipping: () => {
            dispatch({type: 'SUB_SHIPPING'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);