"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 rounded-lg transition-all duration-200 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label={`تقييم ${star} من 5`}>
              <Star
                className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-200 drop-shadow-sm ${
                  star <= value ? "" : ""
                }`}
                style={{
                  fill: star <= value ? "#f59e0b" : "#e5e7eb",
                  color: star <= value ? "#f59e0b" : "#e5e7eb",
                  filter:
                    star <= value
                      ? "drop-shadow(0 1px 3px rgba(245,158,11,0.35))"
                      : "none",
                }}
              />
            </button>
          ) : (
            <Star
              className="w-10 h-10 md:w-12 md:h-12"
              style={{
                fill: star <= value ? "#f59e0b" : "#e5e7eb",
                color: star <= value ? "#f59e0b" : "#e5e7eb",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--main-background, #f5f5f5)" }}>
      {/* Top accent border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--main-color, #16a34a)" }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-10 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--main-color, #16a34a)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--main-color, #16a34a)" }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        {/* Section label above card — matches site pattern */}
        <div className="text-center mb-10" dir="rtl">
          <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest px-4 py-1.5 rounded-full mb-3 bg-green-700 text-white">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            آراء العملاء
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug"
            style={{ color: "var(--main-black, #0f172a)" }}>
            قيّم تجربتك معنا
          </h2>

          <div
            className="w-16 h-1 mx-auto rounded-full mb-4"
            style={{ background: "var(--main-color, #16a34a)" }}
          />

          <p
            className="text-base md:text-lg"
            style={{ color: "var(--low-color, #6b7280)" }}>
            رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
          </p>
        </div>

        {/* Card */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--card-background, #ffffff)",
            boxShadow: "0 4px 32px rgba(15,23,42,0.08)",
            border: "1px solid #e5e7eb",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {/* Green top stripe on card */}
          <div
            className="h-1.5 w-full"
            style={{ background: "var(--main-color, #16a34a)" }}
          />

          <div className="p-8 md:p-12 text-center" dir="rtl">
            {/* Stats row */}
            {(averageRating > 0 || totalRatings > 0) && (
              <div
                className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 pb-8"
                style={{ borderBottom: "1px solid #f3f4f6" }}>
                {averageRating > 0 && (
                  <div className="flex items-center gap-3">
                    <span
                      className="text-3xl md:text-4xl font-extrabold"
                      style={{ color: "var(--main-black, #0f172a)" }}>
                      {averageRating.toFixed(1)}
                    </span>
                    <div>
                      <div className="flex gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4"
                            style={{
                              fill:
                                star <= Math.round(averageRating)
                                  ? "#f59e0b"
                                  : "#e5e7eb",
                              color:
                                star <= Math.round(averageRating)
                                  ? "#f59e0b"
                                  : "#e5e7eb",
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: "var(--low-color, #6b7280)" }}>
                        من 5
                      </span>
                    </div>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div
                    className="flex flex-col items-center justify-center px-6 py-2 rounded-xl"
                    style={{ background: "var(--teal-100, #dcfce7)" }}>
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: "var(--main-color, #16a34a)" }}>
                      {totalRatings}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--main-color-dark, #15803d)" }}>
                      {totalRatings === 1 ? "تقييم" : "تقييمات"}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Star interaction area */}
            {submitted !== null && mounted ? (
              <div className="py-4">
                {renderStars(submitted, false)}
                <p
                  className="font-bold mt-5 text-lg"
                  style={{ color: "var(--main-color, #16a34a)" }}>
                  شكراً لتقييمك! 🎉
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--low-color, #6b7280)" }}>
                  نسعد بتقييمك وسنعمل على تحسين تجربتك
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {renderStars(displayRating || 0, true)}

                {/* Hint labels */}
                <div
                  className="flex justify-between px-2 text-xs"
                  style={{ color: "var(--low-color, #6b7280)" }}>
                  <span>ضعيف</span>
                  <span>ممتاز</span>
                </div>

                <p
                  className="text-sm min-h-5"
                  style={{ color: "var(--low-color, #6b7280)" }}>
                  {mounted && !isLoading && "انقر على النجم المناسب للتقييم"}
                  {isLoading && (
                    <span style={{ color: "var(--main-color, #16a34a)" }}>
                      جاري الإرسال...
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
