
import React from 'react'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { Spinner } from 'react-bootstrap'

import { useAuth } from '../contexts/AuthContext'

const Routes = () => {
    const { currentUser, loading } = useAuth()

    if (loading) {
        return (
            <div className="d-flex justify-content-center pt-5">
                <Spinner variant="light" animation="border" style={{ width: '5rem', height: '5rem' }} />
            </div>
        )
    }

    return (currentUser ? <AppRoutes /> : <AuthRoutes />)
}

export default Routes