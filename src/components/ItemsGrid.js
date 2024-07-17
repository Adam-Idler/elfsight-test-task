import styled from 'styled-components';
import { Popup } from './popup';
import { useState } from 'react';
import { useData } from './providers';
import { Card } from './card';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  function togglePopup(e) {
    document.body.style.overflow = !popupSettings.visible ? 'hidden' : 'auto';

    if (e.currentTarget !== e.target) {
      return;
    }

    setPopupSettings((prevState) => ({
      ...prevState,
      visible: !prevState.visible
    }));
  }

  function cardOnClickHandler(e, props) {
    togglePopup(e);

    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  }

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((props) => (
        <Card
          key={props.id}
          onClickHandler={(e) => cardOnClickHandler(e, props)}
          {...props}
        />
      ))}

      <Popup
        visible={popupSettings.visible}
        content={popupSettings.content}
        onClickHandler={togglePopup}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
