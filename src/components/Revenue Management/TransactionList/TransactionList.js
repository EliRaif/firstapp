import React from 'react'

function TransactionList({ transactionList }) {
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4 text-primary">📜 רשימת העסקאות</h3>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="list-group">

                        {transactionList.length > 0 ? (


                            transactionList.map((transactionList, index) => {
                                return (
                                    <div key={index} className="list-group-item list-group-item-action shadow-lg p-3 rounded-4 mb-3 d-flex justify-content-between align-items-center" style={{ background: "#f8f9fa" }}>
                                        <div>
                                            <h5 className="mb-1 fw-bold">📝 {transactionList.description}</h5>
                                            <p className="mb-1 text-muted">📅 {transactionList.transactionDate}</p>
                                        </div>
                                        <span className="fw-bold fs-5 text-success">{transactionList.amount}</span>
                                    </div>
                                )
                            })

                        ) : < p className="text-center text-muted">🚫 אין עדיין עסקאות...</p>


                        }
                    </div>
                </div>
            </div>
        </div >

    )
}

export default TransactionList

