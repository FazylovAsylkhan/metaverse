import styled from 'styled-components';
import Orbits from '@shared/assets/images/orbits.svg';

export const HoverZone = styled.div`
  width: 516px;
  height: 516px;
  border-radius: 50%;
  position: absolute;
  top: 106px;
  left: 695px;
  z-index: 100;
`;

export interface IOrbitsSvgProps {
  position?: string;
  top?: string;
  left?: string;
  zIndex?: string;
}

export const OrbitsSvg = styled(Orbits)<IOrbitsSvgProps>`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
`;
