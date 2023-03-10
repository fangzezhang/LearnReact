import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import DepthInJSX from '@/views/depthInJSX/index.js';
import { logProps } from "@/util/hoc";

const baseURL = process.env.REACT_APP_BASEURL;

const HOCDepthInJSX = logProps(DepthInJSX);
const HookFunction = lazy(() => import(/* webpackChunkName: "HookFunction" */ "@/views/hook/HookFunction"));
const errorElement = <h3>router component get something wrong...</h3>;
const ReduxFunction = lazy(() => import(/* webpackChunkName: "CounterFunction"*/ "@/views/counter"));
const CounterFunction = lazy(() => import(/* webpackChunkName: "CounterFunction"*/ "@/views/counter/Counter"));
const ReduxThunk = lazy(() => import(/* webpackChunkName: "ReduxThunk"*/ "@/views/reduxThunk"));

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
        errorElement: errorElement,
      },
      {
        path: '/depthInJSX',
        element: <HOCDepthInJSX />,
        errorElement: errorElement,
      },
      {
        path: '/redux',
        element: <Navigate to={'/redux/counter'}/>,
      },
      {
        path: '/redux',
        element: <ReduxFunction />,
        children: [
          {
            index: true,
            path: '/redux/counter',
            element: <CounterFunction />,
          },
          {
            path: '/redux/reduxThunk',
            element: <ReduxThunk />
          }
        ]
      },
    ]
  },
], {
  basename: `/${baseURL}`
});

export default router;
