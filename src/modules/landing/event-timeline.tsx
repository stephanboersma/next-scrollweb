import { IEvent } from "@typing/interfaces/event.interface";
import { FaCalendar } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { formatDate } from "@utils/date.utils";

type Props = {
  events: IEvent[];
};

export const EventTimeline = ({ events }: Props) => {
  return (
    <VerticalTimeline
      lineColor="var(--contrast)"
      layout="2-columns"
      animate={false}
      style={{ width: "100%" }}
    >
      {events.map((event) => (
        <VerticalTimelineElement
          key={event.id}
          icon={<FaCalendar />}
          date={formatDate(event.startDate)}
          contentStyle={{
            background: "none",
            boxShadow: "none",
            padding: "1em",
          }}
          iconStyle={{
            color: "var(--primary)",
            background: "var(--background-color)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--primary)",
            display: "none",
          }}
        >
          <article style={{ margin: "0px", padding: "1.25rem" }}>
            <h4>{event.displayName}</h4>
          </article>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
