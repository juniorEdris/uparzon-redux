import React from 'react'
import DashAccDetails from './SubFolder/DashAccDetails'
import DashAddress from './SubFolder/DashAddress'
import DashDownload from './SubFolder/DashDownload'
import DashList from './SubFolder/DashList'
import DashMsg from './SubFolder/DashMsg'
import DashOrders from './SubFolder/DashOrders'

export default function DashTable() {
    return (
        <div className="main-dashboard">
        <div className="row">
            <DashList/>
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            {/* Tab panes */}
            <div className="tab-content dashboard-content">
                <DashMsg/>
                <DashOrders/>
                <DashDownload/>
                <DashAddress/>
                <DashAccDetails/>                                      
            </div>
          </div>
        </div> {/* end of row */}
      </div>
    )
}
