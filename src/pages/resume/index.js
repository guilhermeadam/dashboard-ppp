import styled from 'styled-components';
import { Progress } from 'antd';

const Container = styled.div`
  background: #121212;
  height: 100%;

  display: flex;

  padding: 32px;

  justify-content: space-between;
`;

const Box = styled.div`
  width: 321px;
  height: 700px;
  background: #1E1E1E;

  border: 5px solid #2B2B2B;
  border-radius: 8px;

  padding: 8px 46px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > strong {
    color: #DFDFDF;
    font-size: 40px;
  }

  > span {
    color: #898989;
    font-size: 35px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #707070;
`;

export default function Resume() {
  return (
    <Container>
      <Box>
        <strong>Cobertura</strong>
        <Progress
          type="circle"
          percent={73.48}
          format={() => {
            return (
              <strong style={{ color: 'white'}}>73,48%</strong>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 01</span>
        <Divider />
        <Progress
          type="circle"
          percent={51.03}
          format={() => {
            return (
              <strong style={{ color: 'white'}}>51,03%</strong>
            );
          }}
          strokeColor='#FF9900' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 02</span>
      </Box>
      <Box>
        <strong>Serviços</strong>
        <Progress
          type="circle"
          percent={96.50}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>3,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>96,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 01</span>
        <Divider />
        <Progress
          type="circle"
          percent={95.20}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>4,80%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>95,20%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 02</span>
      </Box>
      <Box>
        <strong>Ligações</strong>
        <Progress
          type="circle"
          percent={96.50}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>3,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>96,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 01</span>
        <Divider />
        <Progress
          type="circle"
          percent={95.20}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>4,80%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>95,20%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 02</span>
      </Box>
      <Box>
        <strong>Rede</strong>
        <Progress
          type="circle"
          percent={96.50}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>3,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>96,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 01</span>
        <Divider />
        <Progress
          type="circle"
          percent={95.20}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>4,80%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>95,20%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 02</span>
      </Box>
      <Box>
        <strong>Infraestrutura</strong>
        <Progress
          type="circle"
          percent={96.50}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>3,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>96,50%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 01</span>
        <Divider />
        <Progress
          type="circle"
          percent={95.20}
          trailColor='#FF0000'
          format={() => {
            return (
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <strong style={{ color: 'white'}}>4,80%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços fora do prazo</strong>
                <strong style={{ color: 'white'}}>95,20%</strong>
                <strong style={{ color: '#FCFCFC', fontSize
                : '8px'}}>Serviços dentro do prazo</strong>
              </div>
            );
          }}
          strokeColor='#A9CC00' strokeWidth={10} strokeLinecap='butt'
        />
        <span>Bloco 02</span>
      </Box>
    </Container>
  );
}
