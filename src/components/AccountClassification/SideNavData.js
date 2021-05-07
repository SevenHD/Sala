import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SideNavData = [
  {
    title: "Operations",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "View",
        path: "/view",
        icon: <AiIcons.AiOutlineUnorderedList />,
      },
      {
        title: "Add",
        path: "/add",
        icon: <AiIcons.AiOutlineFileAdd />,
      },
      {
        title: "Delete",
        path: "/delete",
        icon: <AiIcons.AiOutlineDelete />,
      },
      {
        title: "Modify",
        path: "/modify",
        icon: <AiIcons.AiOutlineEdit />,
      },
    ],
  },
];
