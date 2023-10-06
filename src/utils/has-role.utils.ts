import { Roles } from "@typing/enums";
import { IUser } from "@typing/interfaces/user.interface";

export const hasOneOfRole = (roles: Roles[], user: IUser) => {
  return roles.some((role) => user.roles.includes(role) || user.isAdmin);
};
