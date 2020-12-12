import React from 'react'
import Breadcrumb from '../../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import ListBody from './PageComponents/ListBody'


export default function ShopList() {
 return(
     <div>
         <Breadcrumb pageName='Shop List' parent='Home' route='/'/>
         <ListBody/>
         <ScrollBar/>
     </div>
 )
}
