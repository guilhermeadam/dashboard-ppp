import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import headerImg from '../src/assets/images/Logos-Cagece Governo-Horizontal-COR-NomesemBranco.png';

import ambientalImg from './assets/images/ambiental.png';
import Router from './routes';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 144px;
  background: #253E92;

  padding: 0 32px;
`;

export const HeaderTitle = styled.div`
  span {
    color: #FCFCFC;
    font-size: 32px;
  }
  h1 {
    color: #FCFCFC;
    font-size: 64px;
  }
`;

export const HeaderImg = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 163px;
    height: 50px;
    margin-left: 34px;
  }

  img + img {
    width: 435px;
    height: 103px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  background: #255F92;

  width: 100%;
  height: 59px;
`;

export const MenuOptions = styled.div`
    background: ${({ isSelected }) => isSelected ? '#A9CC00' : '#255F92'};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in;
    span {
        color: #FCFCFC;
        font-size: 32px;
        font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'regular'};
    }
`;

const OPTIONS_MENU = [
  {name: 'Quadro Resumo', path: '/'},
  {name: 'Cobertura', path: '/cobertura'},
  {name: 'Serviços', path: '/servicos'},
  {name: 'Ligações', path: '/ligacoes'},
  {name: 'Rede', path: '/rede'},
  {name: 'Infraestrutura', path: '/infraestrutura'},
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState('Quadro Resumo');

  function handleSelectedItem(itemSelected) {
    const item = selectedOption === itemSelected ? '' : itemSelected;
    setSelectedOption(item);
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <span>DASHBOARD</span>
          <h1>Universalização do Esgotamento</h1>
        </HeaderTitle>
        <HeaderImg>
          <img src={ambientalImg} alt="Logo da Ambiental" />
          <img src={headerImg} alt="Lgoo da Cagece" />
        </HeaderImg>
      </Header>
      <Menu>
        {OPTIONS_MENU.map((option) => {
          const { name, path } = option;

          const isSelected = selectedOption === name;

          return (
            <Link style={{ height: '100%', width: '100%' }} key={name} to={path} onClick={() => handleSelectedItem(name)}>
              <MenuOptions isSelected={isSelected}>
                <span>{name}</span>
              </MenuOptions>
            </Link>
          );
        })}
      </Menu>
      <Router />
    </Container>
  );
}
