import React, { ReactNode } from 'react'
import Footer from '../components/common/footer';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';



export default function MainLayout() {

    return (
        <div className="main-layout">
            <header>
                <Navbar />
            </header>
            <div className="pt-16">
                <Outlet />
            </div>
        </div>
    )
}
