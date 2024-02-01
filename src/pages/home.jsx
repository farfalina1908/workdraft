import {
  HomeWrapper,
  Section,
  Header1,
  ListEl,
  List,
  HomeText,
} from './home.styled';

export function Home() {
  return (
    <HomeWrapper>
      <Header1>WELCOME TO PHONEBOOK!</Header1>
      <Section>
        <List>
          <ListEl>You can add your contacts to this book</ListEl>
          <ListEl>Remove the contacts you don't need anymore</ListEl>
          <ListEl>Make one account or register as much as you need</ListEl>
        </List>

        <HomeText>
          <i>Now, when you red this, you can start using our phonebook.</i>
        </HomeText>
      </Section>
    </HomeWrapper>
  );
}
