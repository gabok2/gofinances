import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';


import { Container, Header, Photo, UserInfo, User, UserGreeting, UserName, UserWrapper, Icon, HighlightCards } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/53623479?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 2000.44,00"
          lastTransaction="Última entrada dia 13 agosto"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1220.44,00"
          lastTransaction="Última entrada dia 13 agosto"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 44445.44,00"
          lastTransaction="Última entrada dia 13 agosto"
        />
      </HighlightCards>

    </Container>
  )
}