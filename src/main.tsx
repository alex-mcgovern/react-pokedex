import { StrictMode } from "react";

import { ErrorBoundary } from "@sentry/react";
import { RouterProvider, Toaster } from "boondoggle";
import ReactDOM from "react-dom/client";
import { navigate } from "wouter/use-browser-location";

import { ErrorMessage } from "@shared/components";
import { ReactQueryProvider } from "@shared/react-query";

import App from "./app.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary fallback={ErrorMessage}>
			<ReactQueryProvider>
				<RouterProvider navigate={navigate}>
					<App />
					<Toaster />
				</RouterProvider>
			</ReactQueryProvider>
		</ErrorBoundary>
	</StrictMode>,
);
