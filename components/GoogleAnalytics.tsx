import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-4RL0PX0FMN";
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18204131668";

export function GoogleAnalytics() {
  const ids = [GA_ID, ADS_ID].filter(Boolean);

  if (ids.length === 0) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${ids.map((id) => `gtag('config', '${id}');`).join("\n          ")}
        `}
      </Script>
    </>
  );
}