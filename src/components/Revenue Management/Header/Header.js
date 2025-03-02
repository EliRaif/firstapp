import React from 'react'

function Header({ income, expenditure, balance }) {
    return (

        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <span className="navbar-brand">ניהול כספים</span>
                    <div className="d-flex">
                        <h5 className="text-success me-3">הכנסות: {income}</h5>
                        <h5 className="text-danger me-3">הוצאות: {expenditure}</h5>
                        <h5 className="text-primary">יתרה עדכנית: {balance}</h5>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header