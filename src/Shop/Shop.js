import { Link } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartModal from '../ProductCart/CartModal/CartModal'
import { useStateValue } from '../Utility/StateProvider'
import ShopWrapper from './pageComponents/ShopWrapper'

export default function Shop() {

    const [show,setShow] = useState(false)
    const [{basket}] = useStateValue()
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
              setShow(true)
            }else {
                setShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])
    return (
        <div>
            <Breadcrumb pageName={'Shop'} route={'/'} parent={'Home'}/>
            <ShopWrapper/>
            <ScrollBar/>
            {show && <Link to="#" data-toggle="modal" data-target="#cart_modal"><CartIcon /></Link>}
            <CartModal product={basket}/>
        </div>
    )
}
