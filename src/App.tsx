import { ThemeProvider } from "@/components/ui/theme-provider";
import Rendering from "./components/Render";

function App() {
  return (
    <>
      <div className="flex flex-row place-items-start gap-12 ">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex items-center w-full max-w-5.5xl mx-auto overflow-hidden box-border border-none">
            <Rendering />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
