import React, {useState, useEffect} from 'react';
import {Dimensions, Platform} from 'react-native';

export default function screenDetails() {
  const [screen, setScreen] = useState(Dimensions.get('screen'));
  useEffect(() => {
    const onChangeValue = answer => {
      setScreen(answer.screen);
    };
    const event = Dimensions.addEventListener('change', onChangeValue);
    return () => event.remove();
  }, []);

  let potrait = screen.height > screen.width;
  let fPotraitSize = (screen.width * 4.9) / 100;
  let fLandscapeSize = (screen.width * 3) / 100;

  let onePixel = screen.width * 0.00113 + screen.height * 0.00051;

  if (screen.height < screen.width) {
    onePixel = onePixel * 0.5;
  }
  const screenDetails = {
    platform: Platform.OS,
    height: screen.height,
    width: screen.width,
    up: potrait,
    fps: fPotraitSize,
    fls: fLandscapeSize,
    onePixel: onePixel,
  };
  return screenDetails;
}
