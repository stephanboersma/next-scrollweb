import { Hero } from "@components/landing/hero";
import { HorizontalNavbarLayout } from "@components/landing/horizontal-navbar-layout";
import { ITender } from "@typing/interfaces/tender.interface";
import { GetServerSideProps } from "next";
import { TenderAvatar } from "@components/common/tender-avatar";
import { IEvent } from "@typing/interfaces/event.interface";
import { EventTimeline } from "@components/landing/event-timeline";
import { ISettings } from "@typing/interfaces/settings.interface";
import { Footer } from "@components/index";

type Props = {
  tenders: ITender[];
  settings: ISettings;
  events: IEvent[];
};

const IndexPage = ({ tenders, settings, events }: Props) => {
  const getNextEvent = () => {
    if (events.length === 0) return null;
    return events[0];
  };
  return (
    <HorizontalNavbarLayout>
      <Hero nextEvent={getNextEvent()} />
      <main>
        <section id="about">
          <h2>What is ScrollBar?</h2>
          <p>
            ScrollBar is a study-bar driven by the volunteer-organisation
            ScrollBar, founded in 2004, that aims to bring together students
            from ITU in a cozy atmosphere. ScrollBar is open every Friday within
            the semester from 3 PM - 2 AM. We regularly have DJs playing, we
            have a myriad of different events throughout the semester (Birthday
            parties, Back-To-School party aswell as Beer-pong tournaments). Were
            truly proud of our beer-assortment. That aside we serve the usual
            suspects of drinks. We just covered the ScrollBar-basics here, but
            if you are truly curious, you can find ScrollBars current
            constitution here
          </p>
        </section>
        {settings.openForSignups && (
          <section id="sign-up">
            <h2>{settings.joinScrollBarTitle}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: settings.joinScrollBarText }}
            />
            <a role="button" href={settings.joinScrollBarLink}>
              Apply now!
            </a>
          </section>
        )}
        <section id="volunteers">
          <h2>Our Volunteers</h2>
          <div
            className="container-fluid"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {tenders.map((tender) => (
              <TenderAvatar key={tender.displayName} tender={tender} />
            ))}
          </div>
        </section>
        <section id="events">
          <h2>Future Events</h2>
          <EventTimeline events={events} />
        </section>
      </main>
      <Footer settings={settings} />
    </HorizontalNavbarLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const tenders: { data: ITender[] } = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tenders`)
  ).json();

  const settings: { data: ISettings } = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`)
  ).json();

  const events: { data: IEvent[] } = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`)
  ).json();

  const props = {
    tenders: tenders.data,
    settings: settings.data,
    events: events.data,
  };

  return {
    props,
  };
};

export default IndexPage;
