import { logOut } from "@fire/authentication";
import { Roles } from "@typing/enums";
import { IUser } from "@typing/interfaces/user.interface";
import { hasOneOfRole } from "@utils/has-role.utils";
import Link from "next/link";

type Props = {
  user: IUser;
  isDropdown?: boolean;
};

export const NavbarVertical = ({ user, isDropdown = false }: Props) => {
  return (
    <ul {...(isDropdown ? { role: "listbox" } : {})}>
      {hasOneOfRole([Roles.RegularAccount], user) && (
        <li>
          <Link href="/member">Tender Site</Link>
        </li>
      )}

      {hasOneOfRole([Roles.RegularAccount], user) && (
        <li>
          <Link href="/member/profile">Profile</Link>
        </li>
      )}

      {hasOneOfRole([Roles.ShiftManager], user) && (
        <li>
          <Link href="/member/shifts">Shift Management</Link>
        </li>
      )}

      {hasOneOfRole([Roles.TenderManager], user) && (
        <li>
          <Link href="/member/users">User Administration</Link>
        </li>
      )}

      {hasOneOfRole([Roles.EventManager], user) && (
        <li>
          <Link href="/member/events">Event Management</Link>
        </li>
      )}

      {hasOneOfRole([Roles.BoardMember], user) && (
        <li>
          <Link href="/member/settings">Settings</Link>
        </li>
      )}

      <li>
        <Link href="#" onClick={() => logOut()}>
          Sign Out
        </Link>
      </li>
    </ul>
  );
};
