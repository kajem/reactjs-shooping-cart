import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeItem, addQuantity, subtractQuantity} from './actions/cartActions';
import Shipping from './Shipping';
import {Link} from 'react-router-dom';

class Cart extends Component{
    //To remove item
    handleRemoveItem = (id) => {
        this.props.removeItem(id);
    }

    //To add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }


    //To subtract the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render(){
        let addedItems = this.props.items.length ? 
        (
            this.props.items.map(item => {
                return (
                    <li className="list-group-item" key={item.id}>
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="item-img">
                                    <Link to={`/reactjs-shooping-cart/product/${ item.id }`} ><img src={item.img} alt={item.title} /></Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <span className="title">
                                    <Link to={`/reactjs-shooping-cart/product/${ item.id }`}>{item.title}</Link>
                                </span>
                                <div className="desc"><strong></strong>{item.desc.substring(0, 50)}...</div>
                                <div className="model"><strong>Model: </strong>{item.model}</div>
                                <p>
                                    <div className="row mb-0">
                                        <div className="col-sm-2 pt-1"><strong>Quantity:</strong></div>
                                        <div className="col-sm-1 pt-1">{item.quantity}</div>
                                        <div className="col-sm-2 pt-1 m-0 p-0">
                                            <i className="material-icons" onClick={ () => this.handleAddQuantity(item.id) }>add_circle</i>
                                            <i className="material-icons" onClick={ () => this.handleSubtractQuantity(item.id) }>remove_circle</i>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div className="col-sm-1 text-center">
                                <button className="btn btn-danger mt-4" onClick={ () => this.handleRemoveItem(item.id) }>Remove</button>
                            </div>
                            <div className="col-sm-3 text-right">
                                Tk. {item.price.toFixed(2)}
                            </div>
                        </div>
                    </li>
                )
            })
        )
        :
        (
            <li className="list-group-item"> No products added.</li>
        )
        if(this.props.items.length > 0){
            return (
                <div className="container">
                    <div className="cart">
                        <h3>Your cart:</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row mb-0">
                                    <div className="col-sm-2"><b>Thumb</b></div>
                                    <div className="col-sm-6"><b>Details</b></div>
                                    <div className="col-sm-1 text-center"><b>Remove</b></div>
                                    <div className="col-sm-3 text-right"><b>Price per item</b></div>
                                </div>
                            </li>
                            {addedItems}
                            <Shipping/>
                        </ul>
                    </div>
                    <br/>
                    <div className="checkout text-right">
                        <button className="btn btn-success"><h5 className="m-0 pl-3 pr-3">Checkout</h5></button>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="container">
                    <div className="cart">
                        <h3>Your cart:</h3>
                        <ul className="list-group mt-3">
                            {addedItems}
                        </ul>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeItem: (id) => {
            dispatch(removeItem(id));
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);