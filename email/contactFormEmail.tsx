import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  name: string;
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  name,
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{name} sended you a message on josephopio.com</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">Message from {name}</Heading>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
              <Hr />
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
