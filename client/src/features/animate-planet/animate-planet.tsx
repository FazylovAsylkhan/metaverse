import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Orbits } from '@entities/orbits';
import PlanetImg from '@shared/assets/images/planet.png';

export function AnimatePlanet(): JSX.Element {
  const [springs, api] = useSpring(() => ({
    from: { left: '796px', top: '205px' },
  }));

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const y = e.pageY;
    const x = e.pageX;

    const RADIUS_PLANET = 160;
    const isRightPartOfOrbit = x > 1000;
    const isLeftPartOfOrbit = x < 800;

    let left: string;
    const top = `${y - y * 0.4}px`;

    if (isRightPartOfOrbit) {
      left = `${x - x * 0.2}px`;
    } else if (isLeftPartOfOrbit) {
      left = `${x - x * 0.1}px`;
    } else {
      left = `${x - RADIUS_PLANET}px`;
    }

    api.start({
      to: {
        left,
        top,
      },
    });
  };

  const handleMouseLeave = (): void => {
    api.start({
      to: { left: '796px', top: '205px' },
    });
  };

  return (
    <Orbits
      position="absolute"
      top="80px"
      left="670px"
      zIndex="-10"
      onHover={{
        handlerMouseLeave: handleMouseLeave,
        handlerMouseMove: handleMouseMove,
      }}>
      <animated.img
        src={PlanetImg}
        alt="planet"
        style={{
          position: 'absolute',
          zIndex: -10,
          transition: '2.0s linear',
          ...springs,
        }}
      />
    </Orbits>
  );
}
