// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom'

import React, { useState } from 'react'

export default function Headers() {

    return (
        <>
            <header>
                <div className="bg-green-700 px-4 py-4">
                    <img src="https://picsum.photos/100/100" className="mx-auto rounded-full" />
                </div>
                <div className="nav bg-blue-950 ">
                    <ul className="flex gap-4 items-center justify-start">
                        <NavLink  to="/" className=" block py-3 text-white p-4 hover:bg-orange-600  active:bg-orange-600 " ><li>home page</li></NavLink >
                        <NavLink to="/About" className="block py-3 text-white p-4 hover:bg-orange-600"><li>About</li></NavLink >
                        <NavLink to="/Product" className="block py-3 text-white p-4 hover:bg-orange-600"><li>Product</li></NavLink >
                        <NavLink to="/admin" className="block py-3 text-white p-4 hover:bg-orange-600"><li>admin</li></NavLink >
                    </ul>
                </div>

            </header >
        </>
    )
}
