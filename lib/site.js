const configuredSiteUrl =
  process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;

const normalizedSiteUrl = configuredSiteUrl
  ? configuredSiteUrl.startsWith("http")
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`
  : "http://localhost:3000";

export const siteUrl = new URL(normalizedSiteUrl);
export const siteName = "Kreative Grafix";
export const personName = "Suhail Yazdan";
