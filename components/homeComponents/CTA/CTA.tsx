import {
  DescriptionContainer,
  DescrptionHeader,
  DescrptionText,
  ImageContainer,
  TextContainer,
} from "./CTAStyles";
import Image from "next/image";

export const CTA = () => {
  return (
    <DescriptionContainer>
      <TextContainer>
        <DescrptionHeader>
          Stay prepared with tomorrow&apos;s weather forecast and your upcoming
          meetings.
        </DescrptionHeader>
        <DescrptionText>
          A simple application which provides a summary of your day ahead at the
          click of a button. Making sure you&apos;re prepared for the day ahead!
          Click the &quot;SUMMARY&quot; button for a spoken summary of your day
        </DescrptionText>
      </TextContainer>
      <ImageContainer>
        <img
          src="/images/clouds.jpeg"
          alt={"Picture of clouds in a clear blue sky"}
        />
      </ImageContainer>
    </DescriptionContainer>
  );
};
