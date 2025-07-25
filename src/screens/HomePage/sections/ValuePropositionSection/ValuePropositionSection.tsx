import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ValuePropositionSection = (): JSX.Element => {
  // Responsive feature cards data
  const featureCards = [
    {
      iconDesktop: "https://c.animaapp.com/md8qit7hIsaPL2/img/vector-1.svg",
      iconMobile: "https://c.animaapp.com/mda992oeRqV2dl/img/vector-1.svg",
      title: "AI-Driven Forecasts",
      description:
        "Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends, and stay steps ahead of your competition. Make informed decisions backed by data-driven insights",
    },
    {
      iconDesktop: "https://c.animaapp.com/md8qit7hIsaPL2/img/vector-5.svg",
      iconMobile: "https://c.animaapp.com/mda992oeRqV2dl/img/vector-30.svg",
      title: "Connect & Streamline",
      description:
        "Neuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the gaps in your data ecosystem, ensuring you have a holistic view of your operations",
    },
    {
      iconDesktop: "https://c.animaapp.com/md8qit7hIsaPL2/img/vector-2.svg",
      iconMobile: "https://c.animaapp.com/mda992oeRqV2dl/img/vector-4.svg",
      title: "Instant Insights",
      description:
        "In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you're always working with the most up-to-date information. React to changes as they happen and pivot your strategies instantly.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] pt-32 pb-28 px-8 sm:pt-32 sm:pb-28 sm:px-8 px-5 py-[60px] relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-[1204px] items-center gap-[60px] relative w-full flex-[0_0_auto]">
        {/* Header section */}
        <div className="max-w-[520px] items-center gap-8 w-full flex flex-col relative">
          <div className="flex flex-col items-center gap-4 self-stretch w-full relative">
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1"
            >
              <div className="relative w-5 h-5">
                {/* Desktop/Tablet icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:block hidden"
                  alt="Vector"
                  src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-18.svg"
                />
                {/* Mobile icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:hidden block"
                  alt="Vector"
                  src="https://c.animaapp.com/mda992oeRqV2dl/img/vector-2.svg"
                />
              </div>
              <span className="font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-[#4b5162] text-[length:var(--body-base-medium-font-size)] tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-medium-line-height)] [font-style:var(--body-base-medium-font-style)]">
                Our strategies
              </span>
            </Badge>

            <h2 className="
              w-full text-center
              font-heading-desktop-h2-bold font-[number:var(--heading-desktop-h2-bold-font-weight)] text-[#1c1f25] text-[length:var(--heading-desktop-h2-bold-font-size)] tracking-[var(--heading-desktop-h2-bold-letter-spacing)] leading-[var(--heading-desktop-h2-bold-line-height)] [font-style:var(--heading-desktop-h2-bold-font-style)]
              sm:font-heading-desktop-h2-bold sm:text-[length:var(--heading-desktop-h2-bold-font-size)] sm:leading-[var(--heading-desktop-h2-bold-line-height)]
              font-heading-mobile-h2-bold text-[length:var(--heading-mobile-h2-bold-font-size)] leading-[var(--heading-mobile-h2-bold-line-height)] sm:font-heading-desktop-h2-bold sm:text-[length:var(--heading-desktop-h2-bold-font-size)] sm:leading-[var(--heading-desktop-h2-bold-line-height)]
            ">
              Improve your Continuous Design Data workflow
            </h2>

            <p className="max-w-[820px] w-full opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] text-center tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)] px-5">
              Specify helps you gain control of your design system across teams
              and products.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex items-start gap-3">
            <Button className="px-5 py-3 bg-[#387ff5] rounded-xl h-auto">
              <span className="font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-white text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] [font-style:var(--button-base-bold-font-style)] px-2">
                Get a demo
              </span>
            </Button>
            <Button
              variant="outline"
              className="px-5 py-3 bg-white rounded-xl h-auto border-[#b6d0fb] backdrop-blur-[6px]"
            >
              <span className="font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-[#4b5162] text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] [font-style:var(--button-base-bold-font-style)] px-2">
                Research
              </span>
            </Button>
          </div>
        </div>

        {/* Feature cards section */}
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-4 gap-[12px] w-full">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col min-w-[360px] items-start justify-center flex-1 bg-white rounded-xl z-[2]"
              >
                <CardContent className="flex flex-col gap-2 p-5 sm:p-5 px-5 py-4">
                  <div className="flex items-start gap-3 w-full">
                    <div className="inline-flex items-start gap-2">
                      <div className="relative w-6 h-6">
                        {/* Desktop/Tablet icon */}
                        <img
                          className="absolute w-5 h-5 top-0.5 left-0.5 sm:block hidden"
                          alt="Feature icon"
                          src={card.iconDesktop}
                        />
                        {/* Mobile icon */}
                        <img
                          className="absolute w-5 h-5 top-0.5 left-0.5 sm:hidden block"
                          alt="Feature icon"
                          src={card.iconMobile}
                        />
                      </div>
                    </div>
                    <h3 className="flex-1 font-body-base-semibold font-[number:var(--body-base-semibold-font-weight)] text-[#1c1f25] text-[length:var(--body-base-semibold-font-size)] tracking-[var(--body-base-semibold-letter-spacing)] leading-[var(--body-base-semibold-line-height)] [font-style:var(--body-base-semibold-font-style)]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};