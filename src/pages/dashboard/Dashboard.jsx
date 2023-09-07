import React from 'react'
import DashSidebar from '../../components/dashborad-sidebar/DashSidebar'

function Dashboard() {
    return (
        <div className='grid grid-cols-6 min-h-screen'>
            <DashSidebar />
        </div>
    )
}

export default Dashboard
