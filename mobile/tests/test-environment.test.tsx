import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('test environment', () => {
  test('renders a React Native component', async () => {
    await render(<Text>Rekind test environment works</Text>);

    expect(
      screen.getByText('Rekind test environment works'),
    ).toBeTruthy();
  });
});
