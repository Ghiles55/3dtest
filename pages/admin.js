import React from 'react'
import AdminCard from '../components/admin_data_card'

export const admin = () => {
    return (
        <>
        <div className='admin_header'>

        </div>
        <div className='admin_main_container'>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around'}}>

        <AdminCard title='test title' data='344'/>
        <AdminCard title='test title' data='344'/>
        <AdminCard title='test title' data='344'/>
            </div>
        </div>
        </>
    )
}

export default admin