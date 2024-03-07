import { ThemeProvider } from "@/components/ui/theme-provider";
import { UseState } from "./components/Usestate";
import CarouselDemo from "./components/Carousel";
import { ModeToggle } from "./components/ModeToggle";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
          <UseState />
          <CarouselDemo />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
