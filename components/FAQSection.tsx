"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "ما هي خدمات القهوجيين التي تقدمونها؟",
    answer:
      "نوفر قهوجيين محترفين لجميع أنواع المناسبات بما في ذلك حفلات الزفاف، المناسبات العائلية، الفعاليات الرسمية، المؤتمرات، والاجتماعات الخاصة. نقدم خدمة متكاملة تشمل تقديم القهوة العربية الأصيلة بأسلوب راقٍ واحترافي.",
  },
  {
    question: "كيف يمكنني حجز قهوجيين لمناسبتي؟",
    answer:
      "يمكنك حجز قهوجيين بسهولة من خلال التواصل معنا عبر الواتساب أو الهاتف أو تعبئة نموذج الحجز في صفحة التواصل. سيقوم فريقنا بالتواصل معك لتحديد تفاصيل المناسبة وعدد القهوجيين المطلوبين.",
  },
  {
    question: "كم عدد القهوجيين الذي أحتاجه لمناسبتي؟",
    answer:
      "يعتمد عدد القهوجيين على حجم المناسبة وعدد الضيوف. عادةً نوصي بقهوجي واحد لكل 50-75 ضيف. فريقنا سيساعدك في تحديد العدد المناسب بناءً على تفاصيل مناسبتك لضمان خدمة مثالية لجميع الضيوف.",
  },
  {
    question: "هل توفرون القهوة العربية والمستلزمات؟",
    answer:
      "نعم، نوفر القهوة العربية الفاخرة من أجود أنواع البن، بالإضافة إلى جميع المستلزمات اللازمة مثل الدلال، الفناجين، والتمور. نحرص على استخدام مواد عالية الجودة لضمان تجربة ضيافة راقية.",
  },
  {
    question: "ما هي المناطق التي تغطيها خدماتكم؟",
    answer:
      "نقدم خدماتنا في جميع أنحاء مدينة الرياض والمناطق المحيطة بها. إذا كانت مناسبتك خارج نطاق الرياض، يرجى التواصل معنا لمناقشة الإمكانية وترتيبات خاصة.",
  },
  {
    question: "هل القهوجيين لديكم مدربون ومحترفون؟",
    answer:
      "بالتأكيد، جميع القهوجيين لدينا مدربون على أعلى مستوى ولديهم خبرة واسعة في تقديم القهوة العربية وفق الأصول والتقاليد. نحرص على اختيار قهوجيين يتمتعون بمظهر أنيق، لباقة في التعامل، والتزام تام بالمواعيد.",
  },
  {
    question: "ما هي تكلفة خدمة القهوجيين؟",
    answer:
      "تختلف التكلفة حسب عدد القهوجيين المطلوبين، مدة الخدمة، ونوع المناسبة. نقدم أسعاراً تنافسية وعروضاً خاصة للمناسبات الكبيرة. للحصول على عرض سعر مخصص، يرجى التواصل معنا مع تفاصيل مناسبتك.",
  },
  {
    question: "كم من الوقت يستغرق تأكيد الحجز؟",
    answer:
      "نعمل على تأكيد الحجز في أسرع وقت ممكن، عادةً خلال 24 ساعة من استلام طلبك. ننصح بالحجز المبكر خاصة في مواسم المناسبات لضمان توفر القهوجيين في التاريخ المطلوب.",
  },
  {
    question: "هل يمكن طلب زي معين للقهوجيين؟",
    answer:
      "نعم، نوفر أزياء تقليدية راقية للقهوجيين. إذا كان لديك طلب خاص بنوع معين من الزي أو لون محدد يتناسب مع ثيم مناسبتك، يمكننا ترتيب ذلك مسبقاً.",
  },
  {
    question: "ماذا يحدث في حالة الإلغاء أو تغيير موعد المناسبة؟",
    answer:
      "نتفهم أن الظروف قد تتغير. لدينا سياسة إلغاء مرنة، ولكن ننصح بإبلاغنا في أقرب وقت ممكن في حالة الإلغاء أو تغيير الموعد. سيقوم فريقنا بمناقشة الخيارات المتاحة معك بناءً على وقت الإشعار.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 px-4 bg-gradient-to-b from-white to-[#F5F5F5]" id="faq">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center bg-white text-main-color-dark font-semibold text-xs md:text-sm rounded-full px-4 py-2 mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 ml-2" />
            <span>الأسئلة الشائعة</span>
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-4 leading-tight">
            أسئلة وأجوبة حول خدماتنا
          </h2>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول خدمات القهوجيين والضيافة العربية
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-slate-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-bold text-[#111827] flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-main-color flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-[#4B5563] mb-6">
            تواصل معنا مباشرة وسنكون سعداء بالإجابة على جميع استفساراتك
          </p>
          <a
            href="#contact"
            className="inline-block bg-main-color hover:bg-main-color-dark text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
