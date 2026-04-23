import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.crsriddor.app",
  appName: "CRS RIDDOR",
  // Native shell loads the deployed Netlify site directly, so server
  // actions (submitIncident, fetchLog), fonts, PWA assets and future
  // schema changes all just work — no static export required.
  server: {
    url: "https://crs-riddor.netlify.app",
    cleartext: false,
    androidScheme: "https",
    iosScheme: "https",
  },
  // webDir is unused when server.url is set but Capacitor still
  // requires the field to be present and to point somewhere real.
  webDir: ".next",
  ios: {
    // Splash/launch screen is a solid CRS cream; content renders over.
    backgroundColor: "#F3EEE1",
    // Let the PWA's meta viewport drive layout; no Capacitor WKWebView
    // resize shenanigans.
    contentInset: "automatic",
  },
};

export default config;
