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
  // Minimal bounce page — the native shell copies this into the .app
  // bundle but as soon as it loads, server.url takes over. Using .next
  // (the Next build output) fails App Store review because it contains
  // sharp's .dylib/.node binaries.
  webDir: "capacitor-shell",
  ios: {
    // Splash/launch screen is a solid CRS cream; content renders over.
    backgroundColor: "#F3EEE1",
    // Let the PWA's meta viewport drive layout; no Capacitor WKWebView
    // resize shenanigans.
    contentInset: "automatic",
  },
};

export default config;
