import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Dashboard"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Categories",
    to: "/categories",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Services",
    to: "/theme/typography",
    icon: "cil-pencil",
  },
];

export default _nav;
