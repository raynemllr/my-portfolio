import VerticalTimelineList from "../section-contents/experiences/VerticalTimelineList";

function Experiences() {
  return (
    <section id="experiences" className="experiences">
      <div className="section-container flex-col items-center gap-y-5">
        <h1 className="section-header">Experiences</h1>

        <VerticalTimelineList />
      </div>
    </section>
  );
}
export default Experiences;
