import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SideNavData = [
  {
    title: "Account Classification",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Search",
        path: "/search",
        icon: <AiIcons.AiOutlineSearch />,
      },
      {
        title: "View",
        path: "/view",
        icon: <AiIcons.AiOutlineTable />,
      },
      {
        title: "Add",
        path: "/add",
        icon: <AiIcons.AiOutlineFileAdd />,
      },
      {
        title: "Update",
        path: "/update",
        icon: <AiIcons.AiOutlineEdit />,
      },
    ],
  },
  {
    title: "Help",
    path: "/",
    icon: <AiIcons.AiFillQuestionCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Contact Us",
    path: "/",
    icon: <AiIcons.AiFillCustomerService />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Log out",
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
