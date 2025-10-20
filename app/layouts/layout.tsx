

import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

export default function Layout() {
    return (
        <div>
            <Outlet />
            <ToastContainer
                theme="light"
                stacked={true}
                limit={3}
            />
        </div>
    )
}
