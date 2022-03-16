import React, { VFC } from 'react';

type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

const Spacer: VFC<SpacerProps> = ({ size, horizontal }) => (
  <div
    style={
      horizontal
        ? {
            width: size,
            height: 'auto',
            display: 'inline-block',
            flexShrink: 0,
          }
        : { width: 'auto', height: size, flexShrink: 0 }
    }
  />
);
export default Spacer;
