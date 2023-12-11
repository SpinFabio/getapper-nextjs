import { RootState } from "@/spas/admin-dashboard/redux-store";

export const getProjectsList = (state: RootState) => state?.projects?.list;
