import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const NeumorphismButton = (props: any) => {

  const { size = 12,
    marginTop = 0,
    marginBottom = 0,
    buttonType = 0,
    onPress = function() { },
  } = props;

  const [sound] = useState(() => {
    let fileName = "";
    if (buttonType == 0) {
      fileName = "count.mp3";
    } else {
      fileName = "reset.mp3";
    }
    return new Sound(fileName, Sound.MAIN_BUNDLE);
  });

  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
    sound.stop();
    sound.play();
    onPress();
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#579cdd', '#67b9ff'] : ['#67b9ff', '#579cdd'];

  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size / 2,
  };
  const buttonOuterStyle = {
    shadowOffset: { width: size / 3, height: size / 2.5 },
    marginTop: marginTop,
    marginBottom: marginBottom,
  };
  const buttonInnerStyle = {
    shadowOffset: { width: -size / 3, height: -size / 2.5 },
  };
  const buttonFaceStyle = {
    borderRadius: size,
    padding: size,
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
        <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
          <LinearGradient
            colors={gradColors}
            useAngle={true}
            angle={145}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={[styles.buttonFace, buttonFaceStyle, props.style]}>
            {props.children}
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

NeumorphismButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    shadowColor: '#5293d0',
    shadowOpacity: 1.0,
  },
  buttonInner: {
    backgroundColor: '#61adf5',
    shadowColor: '#70c7ff',
    shadowOpacity: 0.5,
  },
  buttonFace: {
    padding: 12,
    borderRadius: 12,
  }
});

export default NeumorphismButton;
