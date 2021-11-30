import React from 'react'



function Dashboard(){
    return (
        <div className="das_details">
            <div className="main center">
                <div className="box">
                    <div className=" box-items">
                    <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div>
                        50
                    </div>
                    <div> Orders</div>
                </div>
                <div className="box">
                <div className=" box-items">
                    <i className="fa fa-line-chart"></i>
                    </div>
                    <div>
                        50
                    </div>
                    <div> Orders</div>

                </div>
                <div className="box">
                <div className=" box-items">
                    <i className="fa fa-inr"></i>
                    </div>
                    <div>
                        50
                    </div>
                    <div> Orders</div>

                </div>

            </div>
            <div>
                <div>
                    <h2>
                        Booking History
                    </h2>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>
                                sn
                            </th>
                            <th>
                                Customer
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                No of Days
                            </th>
                            <th>
                                Services
                            </th>
                            <th>
                                status
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard;