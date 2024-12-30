import { Stack, Link } from 'expo-router';
import { FlatList } from 'react-native';
import attractions from '~/assets/attractions.json';
import AttractionListItem from '~/components/AttractionListItem';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
      <FlatList
      data={attractions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <AttractionListItem
          title={item.title}
          onPress={() => console.log('Pressed')}
          onLongPress={() => console.log('Long pressed')}
          onToggleCompletion={() => console.log('Toggled')}
          isCompleted={false}
          
          
        />)}
        />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
