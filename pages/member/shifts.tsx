import { PrivateRoute } from "@modules/common";
import { VerticalNavbarLayout } from "@modules/common/vertical-navbar-layout";
import { Roles } from "@typing/enums";

const Shifts = () => {
  return (
    <PrivateRoute roles={[Roles.ShiftManager]}>
      <VerticalNavbarLayout title="Shifts">
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

export default Shifts;
