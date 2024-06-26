import Image from "next/image";
import Link from "next/link";

import { Spacer } from "~/components/spacer";
import { Stack } from "~/components/stack";
import { Text } from "~/components/text";

export default function About() {
  return (
    <div className="max-w-2xl m-auto min-h-max mb-10">
      <Text level="1" weight="fontSemibold">
        👋...hi there
      </Text>
      <Spacer paddingVertical="28px" />
      {/* About Me */}
      <div className="grid lg:grid-cols-about-page grid-rows-2 lg:grid-rows-none">
        <div>
          <Text level="4" className="text-accents5">
            About me
          </Text>
        </div>
        <Spacer />
        <Stack gutter="5px">
          <div>
            <Text>
              My name is{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5"
              >
                Niall
              </Text>
              , pronouced{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                knee
              </Text>{" "}
              (like the body part)
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                -all.
              </Text>
              <Text level="span">
                {" "}
                Currently, I work at RAC
                <Text level="span" className="text-xs text-red-300 align-top">
                  {" !important"}
                </Text>
                , working on the mobile app. 
              </Text>
            </Text>
          </div>
          <div>
            <Text level="span">
              I have a <span className="sr-only">love</span>❤️ for all things{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                React
              </Text>
              ,{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                React Native
              </Text>
              ,{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                TypeScript
              </Text>
              ,{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                CSS
              </Text>{" "}
              and most recently, and secretly... 👀{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                Tailwind
              </Text>
              . I {"don't"} just love the frontend though! I (very
              unprofessionally) enjoy making small{" "}
              <Text
                level="span"
                weight="fontSemibold"
                className="text-accents5 italic"
              >
                Rust
              </Text>{" "}
              projects as well!
            </Text>
          </div>
          <div>
            <Text>
              My passions lie in beautiful UI 🎨, performant applications 📈 and
              accessibility 👐. Having begun my career at a web agency where
              clients demanded pixel-perfect 👾 output, {"I've"} come to demand
              the same quality in my own work throughout the stack, making sure
              mobile apps are performant and accessible (the web is for everyone{" "}
              <Text level="span" className="text-xs text-red-300 align-top">
                {"!important"}
              </Text>
              ).
            </Text>
          </div>
        </Stack>
      </div>
      <Spacer paddingVertical="24px" />
      {/* Experience */}
      <div className="grid lg:grid-cols-about-page grid-rows-2 lg:grid-rows-none">
        <div>
          <Text level="4" className="text-accents5">
            Experience
          </Text>
        </div>
        <Spacer />
        <Stack gutter="5px">
        <Link
            href="https://www.rac.co.uk/"
            target="_blank"
            prefetch={false}
          >
            <div className="flex p-3 rounded-lg bg-transparent hover:bg-fadedAccents5 transition-all">
              <div className="w-12 mr-4 hidden sm:block">
                <Image
                  src="/about-images/rac.jpeg"
                  width={48}
                  height={48}
                  alt="RAC app icon"
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <Text>Senior Software Engineer</Text>
                  <Text>RAC</Text>
                </div>
                <div>
                  <Text className="text-sm italic text-accents5">
                    Feb 2024 - Present
                  </Text>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://olioapp.com/en/" target="_blank" prefetch={false}>
            <div className="flex p-3 rounded-lg bg-transparent hover:bg-fadedAccents5 transition-all">
              <div className="w-12 mr-4 hidden sm:block">
                <Image
                  src="/about-images/olio.jpeg"
                  width={48}
                  height={48}
                  alt="Olio app icon"
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <Text>Software Engineer</Text>
                  <Text>Olio</Text>
                </div>
                <div>
                  <Text className="text-sm italic text-accents5">
                    Feb 2022 - Dec 2023
                  </Text>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/company/actual-experience/?originalSubdomain=uk"
            target="_blank"
            prefetch={false}
          >
            <div className="flex p-3 rounded-lg bg-transparent hover:bg-fadedAccents5 transition-all">
              <div className="w-12 mr-4 hidden sm:block">
                <Image
                  src="/about-images/actual-experience.jpeg"
                  width={48}
                  height={48}
                  alt="Olio app icon"
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <Text>Frontend Developer</Text>
                  <Text>Actual Experience</Text>
                </div>
                <div>
                  <Text className="text-sm italic text-accents5">
                    Mar 2019 - Feb 2022
                  </Text>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://www.tghp.co.uk/" target="_blank" prefetch={false}>
            <div className="flex p-3 rounded-lg bg-transparent hover:bg-fadedAccents5 transition-all">
              <div className="w-12 mr-4 hidden sm:block">
                <Image
                  src="/about-images/tghp.jpeg"
                  width={48}
                  height={48}
                  alt="Olio app icon"
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <Text>Web Developer</Text>
                  <Text>The Glasshouse Project</Text>
                </div>
                <div>
                  <Text className="text-sm italic text-accents5">
                    Sept 2016 - Mar 2019
                  </Text>
                </div>
              </div>
            </div>
          </Link>
        </Stack>
      </div>
    </div>
  );
}
