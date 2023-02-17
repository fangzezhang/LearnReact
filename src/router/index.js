import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "@/App";
import HookFunction from "@/views/hook/HookFunction.js";
import DepthInJSX from '@/views/depthInJSX/index.js';
import { logProps } from "@/util/hoc";

const HOCDepthInJSX = logProps(DepthInJSX);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HookFunction />,
      },
      {
        path: '/depthInJSX',
        element: <HOCDepthInJSX />,
      }
    ]
  },
]);

export default router;
