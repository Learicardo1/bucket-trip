import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Atraction from './place/atraction';


export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerShown: false ,title: 'Details' }} />
      <Atraction/>
    </>
  );
}
