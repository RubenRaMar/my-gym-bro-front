import { lazy } from "react";

export const LazyMuscleGroupPage = lazy(
  () => import("../../pages/MuscleGroups/MuscleGroupsPage")
);
