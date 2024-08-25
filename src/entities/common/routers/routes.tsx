import { RouteObject, Navigate } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import { LazyMuscleGroupPage } from "../../muscleGroups/pages/lazyPages/lazyPages";
import {
  commonPaths,
  routerPaths,
} from "../../muscleGroups/constants/paths/paths";

const routes: RouteObject[] = [
  {
    path: `${commonPaths.root}`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={routerPaths.muslceGroup} replace />,
      },
      {
        path: `${routerPaths.muslceGroup}`,
        element: (
          <Suspense>
            <LazyMuscleGroupPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
