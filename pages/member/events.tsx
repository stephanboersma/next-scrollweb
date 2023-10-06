import { PrivateRoute } from "@modules/common";
import { VerticalNavbarLayout } from "@modules/common/vertical-navbar-layout";
import { Roles } from "@typing/enums";

const Events = () => {
  return (
    <PrivateRoute roles={[Roles.EventManager]}>
      <VerticalNavbarLayout title="Events">
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

export default Events;
