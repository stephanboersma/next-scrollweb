import { PrivateRoute } from "@components/common/private-route";
import { Roles } from "@typing/enums";

const Users = () => {
  return (
    <PrivateRoute roles={[Roles.TenderManager]}>
      <div>
        <h1>Users</h1>
      </div>
    </PrivateRoute>
  );
};

export default Users;
