import UseState from "./components/Usestate";
import Image from "./components/Image";
import ShadBtn from "./components/Button";
import CarouselDemo from "./components/Carousel";
import "./css/all.css";
function App() {
  return (
    <>
      <div className="all">
        <UseState />
        <Image />
        <ShadBtn />
        <CarouselDemo />
      </div>
    </>
  );
}
export default App;
