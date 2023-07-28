import React, { useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import axios from "axios";
import ChartComponent from "../components/ChartComponent";
import AlignItemsList from "../components/AlignItemsList";
function HomeScreen() {
  
  

  return (
    <div className="container-fluid">
      <h4>Dashboard</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <h5>Total Customers</h5>
            <div className="card-data">
              <i className="fa fa-users"></i>
              <h2 className="mt-1 m-2">23</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5>In Review</h5>
            <div className="card-data">
              <i className="fa fa-comments"></i>
              <h2 className="mt-1 m-2">53</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5>Pending</h5>
            <div className="card-data">
              <i className="fa fa-tasks"></i>
              <h2 className="mt-1 m-2">22</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-7 card">
            <ChartComponent />
          </div>
          <div className="col-md-4 card" style={{ marginLeft: "5px" }}>
            <h4 style={{ marginLeft: "10px", marginTop: "10px" }}>FeedBacks</h4>
            <AlignItemsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
