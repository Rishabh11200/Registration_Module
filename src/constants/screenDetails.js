import React, {useState, useEffect} from 'react';
import {Dimensions, Platform} from 'react-native';

export default function screenDetails() {
  const [screen, setScreen] = useState(Dimensions.get('screen'));
  useEffect(() => {
    const subscription = answer => {
      setScreen(answer.screen);
    };
    const event = Dimensions.addEventListener('change', subscription);
    return () => event.remove();
  }, []);

  let potrait = screen.height > screen.width;
  let fPotraitSize = (screen.width * 4.9) / 100;
  let fLandscapeSize = (screen.width * 3) / 100;
  const screenDetails = {
    platform: Platform.OS,
    height: screen.height,
    width: screen.width,
    up: potrait,
    fps: fPotraitSize,
    fls: fLandscapeSize,
  };
  return screenDetails;
}
