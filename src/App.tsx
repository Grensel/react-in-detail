import { useState } from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating, RatingValueType } from "./components/rating/Rating";
import { UnControlledRating } from "./components/unConctrolledRating/UnControlledRating";
import { UnControlledAccordion } from "./components/unControlledAccordion/UnControlledAccordion";
import { OnOf, OnOfType } from "./components/OnOf/OnOf";
import { UnControlledOnOf } from "./components/unControlledOnOf/UnControlledOnOf";

function App() {
  console.log("App rendering");

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<OnOfType>(false);

  return (
    <>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        titleValue={"Menu"}
        collapsed={accordionCollapsed}
        onChange={() => {
          setaccordionCollapsed(!accordionCollapsed);
        }}
      />
      <Accordion
        titleValue={"Users"}
        collapsed={accordionCollapsed}
        onChange={() => {
          setaccordionCollapsed(!accordionCollapsed);
        }}
      />
      <OnOf on={switchOn} onChange={() => setSwitchOn(!switchOn)} />
      <OnOf on={switchOn} onChange={() => setSwitchOn(!switchOn)} />
      <hr></hr>
      <UnControlledRating value={1} />
      <UnControlledRating value={2} />
      <UnControlledRating value={3} />
      <UnControlledRating value={4} />
      <UnControlledRating value={5} />
      <UnControlledAccordion titleValue={"Menu"} />
      <UnControlledAccordion titleValue={"Users"} />
      <UnControlledOnOf callBack={setSwitchOn} /> {switchOn.toString()}
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