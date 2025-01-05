import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";

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
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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
