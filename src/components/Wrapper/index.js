import { Container } from './styles';

export default function Wrapper({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}
