import { Toaster } from "sonner";

import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />

      <Toaster
        richColors
        position="top-right"
        closeButton
        duration={3000}
      />
    </>
  );
}

export default App;