import { PrivateRoute } from "src/modules/common/private-route";
import { Roles } from "@typing/enums";
import { VerticalNavbarLayout } from "@modules/common/vertical-navbar-layout";

const Tender = () => {
  return (
    <PrivateRoute roles={[Roles.RegularAccount]}>
      <VerticalNavbarLayout
        title="Overview"
        description="See your assigned shifts here and swap with others"
      >
        <div className="grid">
          <div>
            <button>My Shifts</button>
          </div>
          <div>
            <button className="outline">Up For Grabs</button>
          </div>
          <div>
            <button className="contrast outline">All Shifts</button>
          </div>
        </div>
        <section>
          <article>
            <header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <hgroup>
                  <h2>🥤🍻Friday Bar: Beer Pong Tournament🍻🥤</h2>
                  <h3>06/10/2023 @ 15:00</h3>
                </hgroup>
                <div>
                  <button>Put up for grabs</button>
                  {/* <details role="list" dir="rtl">
                    <summary
                      aria-haspopup="listbox"
                      role="button"
                      className="outline"
                    >
                      Grab a Shift
                    </summary>
                    <ul>
                      <li>Name 1</li>
                      <li>Name 2</li>
                    </ul>
                  </details> */}
                </div>
              </div>
            </header>
            <details>
              <summary>Opening in Main bar - 14:00 - 19:00</summary>
              <p>…</p>
            </details>

            <details open>
              <summary>Closing in Main bar</summary>
              <ul>
                <li>…</li>
                <li>…</li>
              </ul>
            </details>
          </article>
        </section>
      </VerticalNavbarLayout>
    </PrivateRoute>
  );
};

export default Tender;
