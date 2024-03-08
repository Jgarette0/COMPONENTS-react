import { ThemeProvider } from "@/components/ui/theme-provider";
import Rendering from "./components/Render";

function App() {
  return (
    <>
      <div className="flex flex-row place-items-start gap-12 ">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Rendering />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
