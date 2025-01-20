import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSelectedButton = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const buttonImages = {
    dashboard: {
      active: "../assets/active/dashboard.png",
      inactive: "../assets/inactive/dashboard.png",
    },
    transactions: {
      active: "../assets/active/transactions.png",
      inactive: "../assets/inactive/transactions.png",
    },
    support: {
      active: "../assets/active/support.png",
      inactive: "../assets/inactive/support.png",
    },
  };

  useEffect(() => {
    const storedSelectedTab = localStorage.getItem("selectedTab");

    if (storedSelectedTab) {
      setSelectedTab(storedSelectedTab);
    } else {
      if (location.pathname === "/support") {
        setSelectedTab("support");
      } else if (location.pathname === "/transactions") {
        setSelectedTab("transactions");
      } else {
        setSelectedTab("dashboard");
      }
    }
  }, [location.pathname]);

  const handleButtonClick = (buttonId) => {
    setSelectedTab(buttonId);
    localStorage.setItem("selectedTab", buttonId);
  };

  return {
    selectedTab,
    buttonImages,
    handleButtonClick,
  };
};

export default useSelectedButton;
