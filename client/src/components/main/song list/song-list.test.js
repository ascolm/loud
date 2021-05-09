import renderer, { act } from 'react-test-renderer';
import apiSongFixture from '__fixtures__/song-list-payload.json';
import SongList from './song-list-index';
import * as apiService from 'apiService';

const mockSongList = apiSongFixture;
const mockToggle = jest.fn();

it('Snapshot: Renders song list correctly', async () => {
  jest.spyOn(apiService, 'getSongs').mockResolvedValueOnce(mockSongList);

  let tree;
  await act(async () => {
    tree = renderer.create(<SongList togglePlay={mockToggle} songPlaying={''}/>);
  });

  expect(tree.toJSON()).toMatchSnapshot();
});