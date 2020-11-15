import React from 'react'
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
import ScrollBar from '../PrimarySections/ScrollBar'
import URL from '../RequestLinks'



export default function HomeMainSection() {


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
        </div>
    )
}
