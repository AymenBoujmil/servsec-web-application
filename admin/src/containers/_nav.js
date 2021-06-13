import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Categories & Services"],
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
    to: "/services",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Users"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Entreprises",
    to: "/entreprises",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Clients",
    to: "/client",
    icon: "cil-user",
  },
];

export default _nav;
