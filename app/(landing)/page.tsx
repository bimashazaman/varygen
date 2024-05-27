import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { CodeFeature } from "@/components/Code";
import { Conversation } from "@/components/Conversation";
import { ImageFeature } from "@/components/Image";
import { FAQS } from "@/components/FAQS";
import HowItWorks from "@/components/HowItWorks";
import PricingTable from "@/components/PricingTable";
import UserJoinedToast from "@/components/UserJoinedToast";
import Footer from "@/components/Footer";
import Summurize from "@/components/Summurize";
import CoverLetterGen from "@/components/CoverLetterGen";
import StoryGen from "@/components/StoryGen";
import MeetTheFounder from "@/components/MeetTheFounder";
import ContactForm from "@/components/ContactForm"; // Import ContactForm

const LandingPage = () => {
  return (
    <div className="h-full">
      {/* Header Section */}
      <LandingNavbar />
      <LandingHero />
      {/* <UserJoinedToast /> */}

      {/* Features Section */}
      <section className="my-5">
        <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-800 dark:text-white">
          Marketing is important...
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          But there are 101 things on your to-do list. And they all are
          important too.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 ">
          <Conversation />
          <ImageFeature />
          <Summurize />
        </div>
      </section>

      <br />
      <br />

      <section className="my-12">
        <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-800 dark:text-white">
          OK... So What Makes
          <br />
          You So Different?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-12 ">
          {[
            {
              title: "GUARANTEED",
              description: (
                <>
                  We only win if you win. <br />
                  That&apos;s the basis for a good partnership. <br />
                  <br />
                  You won&apos;t carry all the risk, <br />
                  we&apos;ll share it.
                </>
              ),
            },
            {
              title: "RESULTS",
              description: (
                <>
                  Our first priority is to get you results. <br />
                  <br />
                  Less talk, more walk.
                </>
              ),
            },
            {
              title: "SPECIALIZED",
              description: (
                <>
                  Jack of all trades... master of none. <br />
                  Specialization works. <br />
                  <br />
                  That&apos;s why we work with industries we know, <br />
                  so we can guarantee results.
                </>
              ),
            },
            {
              title: "TRANSPARENCY",
              description: (
                <>
                  No hidden fees, no hidden agendas. <br />
                  <br />
                  We&apos;re upfront about what we can do <br />
                  and what we can&apos;t.
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition-transform duration-300 border-4 border-gray-200 dark:border-gray-700 rounded-xl shadow-xl hover:shadow-2xl"
            >
              <div className="p-10 text-center">
                <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="my-12" id="contact">
        <ContactForm /> {/* Add ContactForm here */}
      </section>

      <footer
        className="bg-gray-800 text-white text-center p-4 mx-0 w-full"
        style={{ marginTop: "auto" }}
      >
        <p>&copy; 2021 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
