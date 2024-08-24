import React, { ReactNode } from "react";
import { Navigate, Route } from "react-router-dom";
import { type UserRole, roleAtom } from "./authAtom";
import { useAtom } from "jotai";
import { ROUTES } from "constants/common";

interface AuthRouteProps {
  requiredRoles: UserRole[];
  redirectPath?: string;
  path: (typeof ROUTES)[keyof typeof ROUTES];
  element: ReactNode;
  //이외 RouteProps로 필요한 것 있을 경우 정의해서 씁니다. v6부터 확장안됨
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  redirectPath = "/sign-in",
  requiredRoles,
  path,
  element,
}) => {
  const [role] = useAtom(roleAtom);

  if (!requiredRoles.includes(role))
    return <Navigate to={redirectPath} replace />;

  return <Route path={path} element={element} />;
};

export default AuthRoute;
