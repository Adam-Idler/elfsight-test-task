import styled from 'styled-components';
import { Text } from '../common';

const StyledPopupInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${window.screen.width < 600 ? 'column' : 'row'};
  margin-bottom: 40px;
`;

const PopupOrigin = styled.div`
  margin-top: 40px;
  max-width: ${window.screen.width < 600 ? '100%' : '48%'};
  display: flex;
  flex-direction: column;
`;

const PopupLastLocation = styled(PopupOrigin)``;

const PopupOriginValue = styled.p`
  color: #83bf46;
`;

const PopupLastLocationValue = styled(PopupOriginValue)``;

export function PopupInfo({ origin, location }) {
  return (
    <StyledPopupInfo>
      {origin && origin.name !== 'unknown' && (
        <PopupOrigin>
          <Text>First Seen in:</Text>
          <PopupOriginValue>{origin?.name}</PopupOriginValue>
        </PopupOrigin>
      )}
      {location && location.name !== 'unknown' && (
        <PopupLastLocation>
          <Text>Last known location:</Text>
          <PopupLastLocationValue>{location?.name}</PopupLastLocationValue>
        </PopupLastLocation>
      )}
    </StyledPopupInfo>
  );
}
