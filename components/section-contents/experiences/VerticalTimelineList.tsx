"use client";

import { experiencesData } from "@/constants";
import { Briefcase } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function VerticalTimelineList() {
  return (
    <VerticalTimeline lineColor="#475569">
      {experiencesData.map((item) => (
        <VerticalTimelineElement
          key={item.company}
          visible={true}
          contentStyle={{
            background: "#e7e5e4",
            boxShadow:
              "0 20px 25px -5px rgba(11, 127, 171, 0.18), 0 10px 10px -5px rgba(11, 127, 171, 0.18)",
            fontWeight: "bold",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #e7e5e4",
            boxShadow:
              "0 20px 25px -5px rgba(11, 127, 171, 0.18), 0 10px 10px -5px rgba(11, 127, 171, 0.18)",
          }}
          dateClassName="text-slate-600 dark:text-slate-500"
          date={item.date}
          iconStyle={{ background: "#1e293b", color: "#fff" }}
          icon={<Briefcase />}
        >
          <div className="text-slate-700">
            <h3 className="text-base font-extrabold md:text-xl">
              {item.position}
            </h3>
            <h4 className="text-sm md:text-base">{item.company}</h4>
            <h5 className="text-xs font-semibold text-slate-500 md:text-sm ">
              {item.location}
            </h5>
            <p className="text-slate-500">{item.description}</p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
export default VerticalTimelineList;
