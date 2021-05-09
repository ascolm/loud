import SongListItem from './song-list-item-index';
import { render, screen } from '@testing-library/react';
import apiSongFixture from '__fixtures__/song-list-payload.json';
import '@testing-library/jest-dom';

const mockSong = apiSongFixture[0];
const mockToggle = jest.fn();

beforeEach(() => {
  render(
    <SongListItem song={mockSong} togglePlay={mockToggle} isPlaying={false}/>
  );
});

it('should correctly render the details of a given song', () => {
  expect(screen.getByText('mix')).toBeInTheDocument();
  expect(screen.getByText('aarelxuxmn')).toBeInTheDocument();

  const cover = screen.getByRole('img');
  expect(cover).toBeInTheDocument();
  expect(cover).toHaveAttribute('src', mockSong.cover_image_path);

  expect(screen.getByRole('button', {name: 'like'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'play-pause'})).toBeInTheDocument();
});

it('should render like and play/pause buttons', () => {
  expect(screen.getByRole('button', {name: 'like'})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'play-pause'})).toBeInTheDocument();
});
