import React from 'react';

import { Box, Grommet, WorldMap } from 'grommet';
import { grommet } from 'grommet/themes';

export const SelectPlace = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: 'graph-1', location: place }]);
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
      </Box>
    </Grommet>
  );
};

SelectPlace.story = {
  name: 'Select place',
  parameters: {
    chromatic: { disable: true },
  },
};
