import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryItem from '../components/RepositoryItem';

describe('RepositoryItem', () => {
  it('renders all data fields correctly in a RepositoryItem', async () => {
    const itemExampleData = {
      description: 'description',
      forksCount: 1,
      fullName: 'fullName',
      id: 'zeit.swr',
      language: 'language',
      ownerAvatarUrl: 'https://ownerAvatarUrl.com',
      ratingAverage: 1,
      reviewCount: 1449,
      stargazersCount: 1,
    };
    const { getByTestId } = await render(
      <RepositoryItem item={itemExampleData} onPress={() => console.log('test')} active={false} />
    );

    expect(getByTestId('picture')._fiber.stateNode.props.source.uri).toBe(
      'https://ownerAvatarUrl.com'
    );
    expect(getByTestId('fullName')).toHaveTextContent(itemExampleData.fullName);
    expect(getByTestId('description')).toHaveTextContent(itemExampleData.description);
    expect(getByTestId('language')).toHaveTextContent(itemExampleData.language);
    expect(getByTestId('Stars')).toHaveTextContent(itemExampleData.stargazersCount);
    expect(getByTestId('Forks')).toHaveTextContent(itemExampleData.forksCount);
    expect(getByTestId('Reviews')).toHaveTextContent('1.4 k');
    expect(getByTestId('Ratings')).toHaveTextContent(itemExampleData.ratingAverage);
  });
});
