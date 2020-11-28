import React,{useState,useEffect} from 'react'
import HomeSlider from './pageComponents/HomeSlider'
import FeatureArea from './pageComponents/FeatureArea'
import OurProduct from './pageComponents/OurProduct'
import HomeBanner from './pageComponents/HomeBanner'
import FeaturedCategory from './pageComponents/FeaturedCategory'
import HotCollection from './pageComponents/HotCollection'
import StaticsBanner from './pageComponents/StaticsBanner'
import ElectronicsArea from './pageComponents/ElectronicsArea';
import HeadphonesAccessories from './pageComponents/HeadphonesAccessories';
import BusinessAndOffice from './pageComponents/BusinessAndOffice';
import WideBanner from './pageComponents/LongBanner'
import BrandArea from './pageComponents/BrandArea';
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import URL from '../RequestLinks'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import CartModal from '../ProductCart/CartModal/CartModal'
import { useStateValue } from '../Utility/StateProvider'
import { Link } from '@material-ui/core'



export default function HomeMainSection() {

    const [show,setShow] = useState(false)
    const [{basket}]=useStateValue()
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
            <HomeSlider/>
            <OurProduct fetchURL={URL.products}/>
            <HomeBanner/>
            <FeaturedCategory/>
            <HotCollection/>
            <StaticsBanner/>
            <ElectronicsArea/>
            <HeadphonesAccessories/>
            <BusinessAndOffice/>
            <WideBanner/>
            <BrandArea/>
            <FeatureArea/>
            <ScrollBar/>
            <Link to="#" data-toggle="modal" data-target="#cart_modal"><CartIcon/></Link>
            <CartModal product={basket}/>
        </div>
    )
}
