import { Phone, ClipboardList, Truck, Star } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "تواصل معنا",
    description:
      "تواصل معنا عبر واتساب أو الهاتف لتحديد موعد مناسب وتفاصيل مناسبتك.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "تخطيط الاحتياجات",
    description:
      "نناقش معك عدد الضيوف ونوع الضيافة المطلوبة لتقديم أفضل تجربة ممكنة.",
  },
  {
    icon: Truck,
    step: "03",
    title: "الحضور والتجهيز",
    description:
      "يصل فريقنا في الوقت المحدد مزوداً بكافة المعدات والمستلزمات الاحترافية.",
  },
  {
    icon: Star,
    step: "04",
    title: "تجربة لا تُنسى",
    description:
      "استمتع بضيافة سعودية أصيلة تترك أثراً جميلاً في قلوب ضيوفك.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 px-4 bg-white overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-main-color-dark inline-flex items-center bg-main-color/10 w-fit px-6 py-2.5 rounded-full text-sm md:text-base mx-auto mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-main-color ml-2" />
            كيف نعمل
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-4 leading-tight">
            خطوات بسيطة نحو ضيافة مثالية
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            نحرص على تقديم تجربة سلسة ومريحة لك ولضيوفك من لحظة التواصل حتى
            انتهاء المناسبة
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={item.step} className="relative group">
                {/* Connector line between steps (hidden on last) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-main-color/20 z-0 translate-x-1/2" />
                )}

                <div className="relative z-10 bg-[#F9FAFB] border border-slate-100 rounded-3xl p-7 text-right shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Step number badge */}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-main-color/10 text-main-color-dark text-xs font-extrabold mb-4">
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-main-color shadow-sm border border-slate-100 group-hover:bg-main-color group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg md:text-xl font-extrabold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-[#F5F5F5] rounded-3xl p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 shadow-sm">
          <div>
            <p className="text-xl md:text-2xl font-extrabold text-[#111827] mb-1">
              جاهز لحجز ضيافتك؟
            </p>
            <p className="text-[#4B5563] text-sm md:text-base">
              تواصل معنا الآن ونحن نتولى الباقي
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-main-color hover:bg-main-color-dark text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
