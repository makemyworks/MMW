import Hero from "../components/About/Hero";
import Model from "../components/About/model";
import Execution  from "../components/About/execution";
import Different from "../components/About/different";

export default function About() {
  return (
    <>
      <Hero />

      {/* ✅ Add id="model" so the "Get to Know Us" button can scroll here */}
      <div id="model">
        <Model />
      </div>

      <Execution />
      <Different />
    </>
  );
}