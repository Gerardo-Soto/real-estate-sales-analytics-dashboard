"use client";

import {
  useEffect,
  useState,
} from "react";

import type {
  BuyerProfile,
  CohortRetentionRow,
  KPIs,
  MonthlyRevenue,
  RevenueByChannel,
  RevenueByCity,
  RevenueByPropertyType,
} from "@/lib/types";

import {
  useLanguage,
} from "@/lib/i18n/LanguageContext";

import ExecutiveSummarySlide from "./ExecutiveSummarySlide";
import CommercialPerformanceSlide from "./CommercialPerformanceSlide";
import BuyerProfileSlide from "./BuyerProfileSlide";
import CohortStorySlide from "./CohortStorySlide";
import RecommendationsSlide from "./RecommendationsSlide";


type StorytellingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  kpis: KPIs;
  monthlyRevenue: MonthlyRevenue[];
  revenueByCity: RevenueByCity[];
  revenueByChannel: RevenueByChannel[];
  revenueByPropertyType: RevenueByPropertyType[];
  buyerProfiles: BuyerProfile[];
  cohortRetention: CohortRetentionRow[];
};


export default function StorytellingModal({
  isOpen,
  onClose,
  kpis,
  monthlyRevenue,
  revenueByCity,
  revenueByChannel,
  revenueByPropertyType,
  buyerProfiles,
  cohortRetention,
}: StorytellingModalProps) {
  const { t } =
    useLanguage();

  const [
    currentSlide,
    setCurrentSlide,
  ] = useState(0);


  const slides = [
    {
      id: "executive-summary",

      title:
        t.storytelling
          .executiveSummaryTitle,

      subtitle:
        t.storytelling
          .executiveSummarySubtitle,
    },

    {
      id: "commercial-performance",

      title:
        t.storytelling
          .commercialPerformanceTitle,

      subtitle:
        t.storytelling
          .commercialPerformanceSubtitle,
    },

    {
      id: "buyer-profile",

      title:
        t.storytelling
          .buyerProfileTitle,

      subtitle:
        t.storytelling
          .buyerProfileSubtitle,
    },

    {
      id: "cohort-story",

      title:
        t.storytelling
          .cohortStoryTitle,

      subtitle:
        t.storytelling
          .cohortStorySubtitle,
    },

    {
      id: "recommendations",

      title:
        t.storytelling
          .recommendationsTitle,

      subtitle:
        t.storytelling
          .recommendationsSubtitle,
    },
  ];


  const totalSlides =
    slides.length;


  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        setCurrentSlide(
          (current) =>
            Math.min(
              current + 1,
              totalSlides - 1
            )
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentSlide(
          (current) =>
            Math.max(
              current - 1,
              0
            )
        );
      }
    }


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    isOpen,
    onClose,
    totalSlides,
  ]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [isOpen]);


  if (!isOpen) {
    return null;
  }


  const slide =
    slides[currentSlide];

  const isFirstSlide =
    currentSlide === 0;

  const isLastSlide =
    currentSlide ===
    totalSlides - 1;


  function goToPreviousSlide() {
    setCurrentSlide(
      (current) =>
        Math.max(
          current - 1,
          0
        )
    );
  }


  function goToNextSlide() {
    setCurrentSlide(
      (current) =>
        Math.min(
          current + 1,
          totalSlides - 1
        )
    );
  }


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={
        t.storytelling.modalTitle
      }
    >

      <div className="flex max-h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Top bar */}

        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">

          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {
                t.storytelling
                  .modalTitle
              }
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {
                t.storytelling
                  .modalSubtitle
              }
            </p>

          </div>


          <div className="flex items-center gap-4">

            <span className="text-sm font-medium text-gray-500">
              {t.storytelling.slide}{" "}
              {currentSlide + 1}{" "}
              {t.storytelling.of}{" "}
              {totalSlides}
            </span>


            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              aria-label={
                t.storytelling.close
              }
            >
              ×
            </button>

          </div>

        </div>


        {/* Slide */}

        <div className="min-h-0 flex-1 overflow-y-auto">

          <div className="mx-auto flex min-h-[600px] max-w-6xl flex-col px-8 py-10">

            <div className="mb-8">

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                {slide.title}
              </h2>

              <p className="mt-3 max-w-2xl text-base text-gray-500">
                {slide.subtitle}
              </p>

            </div>


            {/* Slide content */}

            {currentSlide === 0 && (
              <ExecutiveSummarySlide
                kpis={kpis}
                monthlyRevenue={
                  monthlyRevenue
                }
              />
            )}


            {currentSlide === 1 && (
              <CommercialPerformanceSlide
                revenueByCity={
                  revenueByCity
                }
                revenueByChannel={
                  revenueByChannel
                }
                revenueByPropertyType={
                  revenueByPropertyType
                }
              />
            )}


            {currentSlide === 2 && (
              <BuyerProfileSlide
                buyerProfiles={
                  buyerProfiles
                }
              />
            )}


            {currentSlide === 3 && (
              <CohortStorySlide
                cohortRetention={
                  cohortRetention
                }
              />
            )}


            {currentSlide === 4 && (
              <RecommendationsSlide
                revenueByCity={
                  revenueByCity
                }
                revenueByChannel={
                  revenueByChannel
                }
                revenueByPropertyType={
                  revenueByPropertyType
                }
                buyerProfiles={
                  buyerProfiles
                }
              />
            )}

          </div>

        </div>


        {/* Navigation */}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 px-6 py-4">

          <button
            type="button"
            onClick={
              goToPreviousSlide
            }
            disabled={
              isFirstSlide
            }
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ←{" "}
            {
              t.storytelling
                .previous
            }
          </button>


          <div className="flex items-center gap-2">

            {slides.map(
              (
                slideItem,
                index
              ) => (
                <button
                  key={
                    slideItem.id
                  }
                  type="button"
                  onClick={() =>
                    setCurrentSlide(
                      index
                    )
                  }
                  className={`h-2.5 rounded-full transition-all ${
                    index ===
                    currentSlide
                      ? "w-8 bg-gray-900"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`${t.storytelling.slide} ${
                    index + 1
                  }: ${
                    slideItem.title
                  }`}
                />
              )
            )}

          </div>


          <button
            type="button"
            onClick={
              goToNextSlide
            }
            disabled={
              isLastSlide
            }
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-30"
          >
            {
              t.storytelling
                .next
            }{" "}
            →
          </button>

        </div>

      </div>

    </div>
  );
}