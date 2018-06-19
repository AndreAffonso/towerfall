import React from 'react';
import mediavelSong from '../music/medieval.mp3';

const AudioPlayer = props => <audio src={mediavelSong} autoPlay loop />;

export default AudioPlayer;
