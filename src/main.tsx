import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as Sentry from "@sentry/react";
import './index.css'

Sentry.init({
  dsn: "https://29d4b4e92e1d98ca8b9d736e57eb5721@o4507026017550336.ingest.us.sentry.io/4507026019385344",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", "https://pharmacys-turn-v2.vercel.app/"],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
