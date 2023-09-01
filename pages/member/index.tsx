import { PrivateRoute } from "@components/common/private-route";
import { logOut } from "@fire/authentication";
import { Roles } from "@typing/enums";

const Tender = () => {
  return (
    <PrivateRoute roles={[Roles.RegularAccount]}>
      <div>Tender</div>
      <button onClick={() => logOut()}></button>
    </PrivateRoute>
  );
};

export default Tender;
