import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from './actions/cartActions';

class Home extends Component{

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map( item => {
            return(
                <div className="card p-2 text-center" key={item.id}>
                        <div className="card-image">
                            <Link to={`/product/${ item.id }`}>
                                <img src={item.img} alt={item.title}/>
                            </Link>
                        </div>
                        
                        <div className="card-content mb-2 mt-2">
                            <span className="card-title">{item.title}</span>                            
                            <p className="mt-2">Price: Tk. {item.price.toFixed(2)}</p>
                            <div className="text-left mt-3">
                            <div className="row mb-0">
                                    <div className="col-sm-4">
                                        <Link to="/" onClick={()=>{this.handleClick(item.id)}} className="add-to-cart"><img src="/reactjs-shooping-cart/cart-add-icon.png" /></Link>
                                    </div>
                                    <div className="col-sm-8 text-right">
                                        <Link to={`/product/${ item.id }`} className="btn btn-success mt-1">View Details</Link>                                        
                                    </div>
                                </div>   
                            </div>                 
                        </div>
                 </div>
            )
        })

        return(
            <div className="container home">
                <h2 className="center mt-3 mb-3">Shop</h2>
                <div className="box">
                    {itemList}
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch( addToCart(id) ) }
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) (Home);