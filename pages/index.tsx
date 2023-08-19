import { Hero } from "@components/hero";
import { LandingPageLayout } from "@components/landing-page-layout";

const IndexPage = () => (
  <LandingPageLayout>
    <Hero />
    <main>
      <section>
        <h2>What is ScrollBar?</h2>
        <p>
          ScrollBar is a study-bar driven by the volunteer-organisation
          ScrollBar, founded in 2004, that aims to bring together students from
          ITU in a cozy atmosphere. ScrollBar is open every Friday within the
          semester from 3 PM - 2 AM. We regularly have DJs playing, we have a
          myriad of different events throughout the semester (Birthday parties,
          Back-To-School party aswell as Beer-pong tournaments). Were truly
          proud of our beer-assortment. That aside we serve the usual suspects
          of drinks. We just covered the ScrollBar-basics here, but if you are
          truly curious, you can find ScrollBars current constitution here
        </p>
      </section>
    </main>
  </LandingPageLayout>
);

export default IndexPage;
