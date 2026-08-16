import { createFileRoute } from "@tanstack/react-router";
import { CertificatesPage, CERT_HERO } from "@/components/pages/CertificatesPage";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — EcoSmart" },
      {
        name: "description",
        content:
          "ISO 9001, ISO 14001, ISO 45001 and product test reports for EcoSmart flexible clay-stone surfaces, issued on request to specifiers and contractors.",
      },
      { property: "og:title", content: "Certificates — EcoSmart" },
      {
        property: "og:description",
        content: "Request EcoSmart management-system certificates and product test reports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: CERT_HERO },
    ],
  }),
  component: CertificatesPage,
});
