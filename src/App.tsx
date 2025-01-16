import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { OnOf } from "./components/onOf/OnOf";
import { Rating } from "./components/rating/Rating";
import { UnControlledRating } from "./components/unConctrolledRating/UnControlledRating";
import { UnControlledAccordion } from "./components/unControlledAccordion/UnControlledAccordion";

function App() {
  console.log("App rendering");
  return (
    <>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      <UnControlledAccordion titleValue={"Menu"} />
      <UnControlledAccordion titleValue={"Users"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <UnControlledRating value={1} />
      <UnControlledRating value={2} />
      <UnControlledRating value={3} />
      <UnControlledRating value={4} />
      <UnControlledRating value={5} />
      <OnOf />
      <OnOf />
    </>
  );
}

type PageTtitlePropsType = {
  title: string;
};

const PageTitle = ({ title }: PageTtitlePropsType) => {
  console.log("PageTitle rendering");
  return <h1>{title}</h1>;
};

export default App;
