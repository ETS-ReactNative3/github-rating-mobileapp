import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';
import { REPOSITORY_LIST } from '../../datasamples/dummydata';

describe('RepositoryList', () => {
  it('renders all repositories in a list', async () => {
    const { getAllByTestId } = await render(
      <RepositoryListContainer repositories={REPOSITORY_LIST} />
    );

    expect(getAllByTestId('fullName').length).toBe(10);
  });
});
