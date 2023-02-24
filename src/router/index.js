import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import DepthInJSX from '@/views/depthInJSX/index.js';
import { logProps } from "@/util/hoc";

const baseURL = process.env.REACT_APP_BASEURL;

const HOCDepthInJSX = logProps(DepthInJSX);
const HookFunction = lazy(() => import(/* webpackChunkName: "HookFunction" */ "@/views/hook/HookFunction.js"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/hook'}/>,
  },
  {
    path: '/*',
    element: <Navigate to={'/hook'}/>
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/hook',
        element: <HookFunction />,
      },
      {
        path: '/depthInJSX',
        element: <HOCDepthInJSX />,
      }
    ]
  },
], {
  basename: `/${baseURL}`
});

export default router;
