import Item1 from '../../images/nokia7.2.png'
import Item2 from '../../images/walton-tv.jpg'
import Item3 from '../../images/walton-freez.jpg'
import Item4 from '../../images/walton-ac.png'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/iphone-1.png'
import Item8 from '../../images/xoami-note-4x.png';

import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from '../actions/action-types/cart-actions';


const initState = {
    items: [
        {
            id:1,title:'Nokia 7.2Ds (4G)', 
            brand: 'Jemmy', 
            model: 'Jemmy 320', 
            product_id: 30469, 
            price: 1100,
            img:Item1, 
            desc: "Nokia 7.2Ds The phone comes with a 6.30-inch touchscreen display with a resolution of 1080x2340 pixels. Nokia 7.2Ds is powered by an octa-core Qualcomm Snapdragon 660 processor. It comes with 4GB of RAM."},
        {
            id:2,
            title:'Walton Smart TV', 
            brand: 'Walton', 
            model: 'WE4-AF39-BX120', 
            product_id: 30470, 
            price: 28900, 
            img: Item2, 
            desc: "Android 7.0 (AOSP), Screen size: 991mm, Aspect ratio: 16:9, Resolution: 1920 x 1080, Viewing angle: H 1780 / V 1780, Contrast: 5900:1"},
        {
            id:3,
            title:'Direct Cool Refrigerator', 
            brand: 'Walton', 
            model: 'WFC-3F5-GDNE-XX',
            product_id: 30471, 
            price: 40390, 
            img: Item3,
            desc: "Type: Direct Cool, Door: Glass door, Gross Volume: 380 Ltr, Net Volume: 365 Ltr, Refrigerant: R600a, Using Latest Intelligent INVERTER technology, No need to use Voltage Stabilizer."
        },
        {
            id:4,
            title:'Walton Split AC',
            brand: 'Walton', 
            model: 'WSI-BEVELYN-24C',
            product_id: 30472, 
            price: 2560, 
            img: Item4,
            desc: "Watts: 7034 Watts (24000 BTU/hr), Function: Cooling, Refrigerant Type: R-410a", 
        },
        {
            id:5,
            title:'Cropped-sho', 
            brand: 'Bata', 
            model: 'Bata 452', 
            product_id: 30473, 
            price:1650, 
            img: Item5,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", 
        },
        {
            id:6,
            title:'Blues',
            brand: 'Apex', 
            model: 'Apex 250', 
            product_id: 30474, 
            price:9000, 
            img: Item6,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex."
        },
        {
            id:7,
            title:'iPhone Xs Max 512GB', 
            brand: 'Apple', model: 'iPhone Xs Max', 
            product_id: 30475, 
            price: 160000, 
            img: Item7, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex."
        },
        {
            id:8,
            title:'Xiaomi Redmi Note 4X', 
            brand: 'Xiaomi', 
            model: 'Redmi Note 4X', 
            product_id: 30475, 
            price: 12500, 
            img: Item8, 
            desc: "360 Full Protection Case for Xiaomi Redmi Note 4X High Quality Hard Plastic PC Matte Material. Ultra Thin Luxury 360 Degrees Integral Protection Back Cover Case. Ultra Thin Style, Super Fine Case for Integral Protection. Shockproof, Dirt Resistant and Anti Knock back cover. Provides Camera Protection. Ultralight, Anti Skid, Anti-fingerprint, Dustproof, Dustproof, Drop-Resistant and Business Style."
        },
    ],
    addedItems:[],
    total: 0
}

const cartReducer= (state = initState, action)=>{
    //Inside home component
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find( item => item.id === action.id);
        let qty = action.quantity !== undefined ? action.quantity : 1;
        //Check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id);

        if(existed_item){
            addedItem.quantity += parseInt(qty);

            return {
                ...state,
                total: state.total + addedItem.price * qty
            }
        }else{
            addedItem.quantity = parseInt(qty);
            //calculatingthe total
            let newTotal = state.total + addedItem.price * qty;

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }else if(action.type === REMOVE_ITEM){
        let addedItem = state.items.find( item => item.id === action.id );
        let newItems = state.addedItems.filter(item => item.id !== action.id);
        let newTotal = state.total - addedItem.price*addedItem.quantity;

        return {
            ...state,
            addedItems: newItems,
            total: newTotal
        }
    }
    else if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find( item => item.id === action.id );
        
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;

        return {
            ...state,
            total: newTotal
        }

    }else if(action.type === SUB_QUANTITY){
        let addedItem = state.items.find( item => item.id === action.id );

        //if the quantity is 1 then it should be removed
        if(addedItem.quantity === 1){
            let newItems = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - addedItem.price;

            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        }else{
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;

            return {
                ...state,
                total: newTotal
            }
        }
    }else if(action.type === ADD_SHIPPING){
        return {
            ...state,
            total: state.total + 50
        }
    }else if(action.type === SUB_SHIPPING){
        return {
            ...state,
            total: state.total - 50
        }
    }else{
        return state;
    }
}

export default cartReducer;