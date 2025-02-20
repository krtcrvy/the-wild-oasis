import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import AppLayout from "@/components/ui/app-layout";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/theme-provider";
import Account from "@/pages/account";
import Booking from "@/pages/booking";
import Bookings from "@/pages/bookings";
import Cabins from "@/pages/cabins";
import Checkin from "@/pages/checkin";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import PageNotFound from "@/pages/page-not-found";
import Settings from "@/pages/settings";
import Users from "@/pages/users";

import ProtectedRoute from "./components/ui/protected-route";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster position="top-center" richColors toastOptions={{}} closeButton />
    </ThemeProvider>
  );
}

export default App;
