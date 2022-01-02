import { Container } from "./styles";

type RowProps = {
  align?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  padding?: number;
  marginBottom?: number;
};

export const Row: React.FC<RowProps> = ({
  align,
  children,
  padding,
  marginBottom,
}) => {
  return (
    <Container align={align} padding={padding} marginBottom={marginBottom}>
      {children}
    </Container>
  );
};
