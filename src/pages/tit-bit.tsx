import PageLayout from "../components/layout";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const titbit = [
  {
    question: "Where did you first meet?",
    answer: "Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria.",
  },
  {
    question: "Who made the first move? How?",
    answer:
      "Mide made the first move. He could not resist the beauty called Bukunmi. Check details under ‘how we met'.",
  },
  {
    question: "Did you ever doubt this relationship/marriage at any point?",
    answer:
      "Yes, there were times I doubted if it was God who truly gave the go-ahead, especially during our misunderstandings and small fights. The funny thing is for every time I went back to God, I got a reassuring YES!",
  },
  {
    question: "Who's going to take out the trash?",
    answer:
      "Lol, maybe me sometimes, but he hates the sight of dirt. I’m sure most of the time, he’ll do it.",
  },
  {
    question: "Who eats the most?",
    answer:
      "Actually, we are both light eaters, but if we rephrase this question to who eats “junks” the most, Bukunmi will score a 100%!",
  },
  {
    question: "What was your most memorable date?",
    answer:
      "The day we visited Idanre hills in Ondo State. I don’t know if that was a date but heck! It was a memorable trip. The proposal too.. memorable cos it was a funny one! From the planning to the execution.",
  },
  {
    question:
      "How did you manage your attractions without defiling each other?",
    answer:
      "God helped our decision to stay chaste. We were determined to overcome temptations before they came. Most importantly, God gave us grace and self-control",
  },
  {
    question: "What's your favourite activity together?",
    answer:
      "Gisting. Bukunmi always have something to gist Olumide about and he must pay 100% attention. So our favourite activity will be communicating with each other.",
  },
  {
    question: "Where are you going for your honeymoon?",
    answer:
      "Maybe Santorini, maybe Paris, maybe in our apartment, or Obudu cattle ranch or Canada.. Lol..",
  },
];

const TitBit = () => {
  const header = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      header.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );
    gsap.fromTo(
      text.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: text.current,
          toggleActions: "play none none reverse",
          start: "20% bottom",
        },
      }
    );
  });

  return (
    <PageLayout title="Tit Bit - theBMWedding">
      <div className="font-playfair bg-darkBrown px-4 sm:px-8 md:px-16 lg:px-24 text-primary text-justify tracking-wider">
        <h1
          ref={header}
          className="text-center sm:pt-4 text-primary text-xl sm:text-4xl font-signika"
        >
          TIT-BIT
        </h1>
        <div ref={text}>
          {titbit.map((item) => (
            <div className="pt-6">
              <p className="text-base sm:text-lg">{item.question}</p>
              <p className="font-light pt-1 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default TitBit;
