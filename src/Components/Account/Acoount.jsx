import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Pages/Footer/Footer'
import AccountSection from './AccountSection/AccountSection'
const Account = () => {
    return (
        <div className='w-full h-screen bg-gray-100 box-border overflow-x-hidden'>
            <div className="nav w-full h-[160px] relative ">
                <Navbar />
            </div>
            <AccountSection />
            <Footer />
        </div>
    )
}

export default Account;
