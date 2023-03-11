import React from 'react';
import { OrbitsSvg, HoverZone, IOrbitsSvgProps } from './styles';

interface IProps extends IOrbitsSvgProps {
  children: React.ReactNode;
  onHover?: {
    handlerMouseMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handlerMouseLeave: () => void;
  };
}

export function Orbits(props: IProps): JSX.Element {
  const { children, onHover, top, left, zIndex, position } = props;

  return (
    <>
      <OrbitsSvg top={top} left={left} zIndex={zIndex} position={position} />
      {children}
      {onHover !== undefined && (
        <HoverZone
          onMouseMove={(e) => onHover.handlerMouseMove(e)}
          onMouseLeave={() => onHover.handlerMouseLeave()}
        />
      )}
    </>
  );
}
