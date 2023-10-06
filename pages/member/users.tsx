import { PrivateRoute } from "src/modules/common/private-route";
import { Roles } from "@typing/enums";
import { VerticalNavbarLayout } from "@modules/common/vertical-navbar-layout";

const Users = () => {
  return (
    <PrivateRoute roles={[Roles.TenderManager]}>
      <VerticalNavbarLayout title="Tenders">
        <main className="container" style={{ marginLeft: "1rem" }}>
          <section>
            <article>
              <header>Header</header>
              Body
              <footer>Footer</footer>
            </article>
            <article>
              <header>Header</header>
              Body
              <footer>Footer</footer>
            </article>
          </section>
        </main>
      </VerticalNavbarLayout>
    </PrivateRoute>
  );
};

export default Users;
