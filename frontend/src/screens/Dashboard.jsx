import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { COMPANY_LOGO } from "../assets/images";
import GridViewIcon from "@mui/icons-material/GridView";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeScreen from "./HomeScreen";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CustomersList from "./CustomersList";
import ProductList from "./ProductList";
import Statistics from "./Statistics";
import Settings from "./Settings";
import ProfileScreen from "./ProfileScreen";
function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Tabs className="vertical-tabs">
        <TabList className="vertical-tab-list">
          <div className="container">
            <Tab className="vertical-tab ">
              <GridViewIcon />
              <span className="m-2">Dashboard</span>
            </Tab>
            <Tab className="vertical-tab ">
              <GroupIcon />
              <span className="m-2">Customers</span>
            </Tab>
            <Tab className="vertical-tab ">
              <Inventory2Icon />
              <span className="m-2">Products</span>
            </Tab>
            <Tab className="vertical-tab ">
              <EqualizerIcon />
              <span className="m-2">Statistics</span>
            </Tab>
            <Tab className="vertical-tab ">
              <SettingsIcon />
              <span className="m-2">Settings</span>
            </Tab>
            <Tab className="vertical-tab ">
              <AccountCircleIcon />
              <span className="m-2">Profile</span>
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <HomeScreen />
        </TabPanel>
        <TabPanel>
          <CustomersList />
        </TabPanel>
        <TabPanel>
          <ProductList />
        </TabPanel>
        <TabPanel>
          <Statistics />
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
        <TabPanel>
          <ProfileScreen />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Dashboard;
