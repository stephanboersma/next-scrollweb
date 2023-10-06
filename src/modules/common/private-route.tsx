import { useStore } from "@store/store";
import toast from "react-hot-toast";
import { shallow } from "zustand/shallow";
import router from "next/router";
import { useEffect } from "react";
import { Roles } from "@typing/enums";

type Props = {
  children?: React.ReactNode;
  roles?: Roles[];
};

export const PrivateRoute = ({ children, roles }: Props) => {
  const { isAuthLoading, user } = useStore(
    (state) => ({
      isAuthLoading: state.isAuthLoading,
      user: state.user,
    }),
    shallow
  );
  const hasPermission = () => {
    return roles.some(
      (role) => user && (user.roles.includes(role) || user.isAdmin)
    );
  };
  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.push("/login");
    } else if (!isAuthLoading && roles && !hasPermission()) {
      toast.error("You don't have permission to access this page");
      router.push("/member");
    }
  }, [isAuthLoading, user]);

  if (!isAuthLoading && !user) return <></>;
  if (isAuthLoading && !user && !hasPermission()) return <></>;

  return <>{children}</>;
};
