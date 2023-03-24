import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const HeartSVG = ({ width = 30, height = 30, filled = false, stroked = true, onPress }) => {
  const [isFilled, setIsFilled] = useState(filled);
  const [strokeColor, setStrokeColor] = useState(stroked);
  const handleClick = () => {
    setIsFilled(!isFilled);
    setStrokeColor(!strokeColor)
    if (onPress) {
      onPress(!isFilled);
      onPress(!strokeColor);
    }
  };

  const fill = isFilled ? '#FF0000' : 'none';
  const stroke = strokeColor ? '#666' : '#FF0000';
  return (
    <TouchableOpacity onPress={handleClick}>
      
      <Svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
  >
    <G transform="translate(0 -1028.4)">
      <Path
        d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
        fill={fill}   stroke={stroke}
          strokeWidth="1"
      />
    </G>
  </Svg>
    </TouchableOpacity>
  );
};

export default HeartSVG;