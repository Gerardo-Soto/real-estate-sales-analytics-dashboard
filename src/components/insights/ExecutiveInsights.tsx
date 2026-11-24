"use client";

import {
  useLanguage,
} from "@/lib/i18n/LanguageContext";


type Insight = {
  id: string;
  title: string;
  description: string;
  recommendation: string;
};


export default function ExecutiveInsights() {
  const { t } =
    useLanguage();


  const insights: Insight[] = [
    {
      id: "customer-recurrence",

      title:
        t.executiveInsights.repeatPurchaseTitle,

      description:
        t.executiveInsights.repeatPurchaseDescription,

      recommendation:
        t.executiveInsights.repeatPurchaseRecommendation,
    },

    {
      id: "first-time-buyers",

      title:
        t.executiveInsights.firstTimeTitle,

      description:
        t.executiveInsights.firstTimeDescription,

      recommendation:
        t.executiveInsights.firstTimeRecommendation,
    },

    {
      id: "repurchase-waves",

      title:
        t.executiveInsights.recurrenceTitle,

      description:
        t.executiveInsights.recurrenceDescription,

      recommendation:
        t.executiveInsights.recurrenceRecommendation,
    },

    {
      id: "segment-repurchase",

      title:
        t.executiveInsights.segmentTitle,

      description:
        t.executiveInsights.segmentDescription,

      recommendation:
        t.executiveInsights.segmentRecommendation,
    },
  ];


  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">

        <p className="text-sm font-medium text-gray-500">
          {t.executiveInsights.cardTitle}
        </p>

        <h2 className="mt-1 text-xl font-semibold text-gray-900">
          {t.executiveInsights.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {t.executiveInsights.subtitle}
        </p>

      </div>


      <div className="grid gap-4 md:grid-cols-2">

        {insights.map(
          (insight, index) => (
            <article
              key={insight.id}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {insight.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {insight.description}
                  </p>


                  <div className="mt-4 border-l-2 border-gray-300 pl-3">

                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {
                        t.executiveInsights
                          .recommendationAction
                      }
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      {insight.recommendation}
                    </p>

                  </div>

                </div>

              </div>

            </article>
          )
        )}

      </div>

    </section>
  );
}