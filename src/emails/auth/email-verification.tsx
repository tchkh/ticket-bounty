import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type EmailPasswordResetProps = {
  toName: string;
  code: string;
};

const EmailVerification = ({ toName, code }: EmailPasswordResetProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans m-8 text-center">
          <Container>
            <Section>
              <Text>
                Hello {toName}, please verify your email address by entering the
                following code:
              </Text>
            </Section>
            <Section>
              <Text className="bg-black rounded text-white p-2 m-2">
                {code}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailVerification.PreviewProps = {
  toName: "Johny Walker",
  code: "AORRHHOL",
};

export default EmailVerification;
