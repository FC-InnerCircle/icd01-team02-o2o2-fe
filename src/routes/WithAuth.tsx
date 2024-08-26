import React from "react";
import { Navigate } from "react-router-dom";
import { type UserRole, roleAtom } from "atoms/authAtom";
import { useAtom } from "jotai";

interface WithAuthProps {
  requiredRoles: UserRole[];
  redirectPath?: string;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { requiredRoles, redirectPath = "/sign-in" }: WithAuthProps
) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const [role] = useAtom(roleAtom);

    if (!requiredRoles.includes(role)) {
      return <Navigate to={redirectPath} replace />;
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
