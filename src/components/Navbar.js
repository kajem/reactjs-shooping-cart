import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component{
    render(){
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="pt-2 pb-1"><Link to="/" className="brand-logo text-white">ReactJs Shopping Cart</Link></h1>
                        </div>
                        <div className="col-sm-6 text-right">
                        <ul>
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/cart">My cart (<span>{this.props.addedItems.length}</span>)</Link></li>
                            <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Navbar);