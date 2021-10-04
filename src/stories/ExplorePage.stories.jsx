import React from 'react';

import { ExplorePage } from './ExplorePage';

export default {
  title: 'pages/explore',
  component: ExplorePage,
};

const Template = (args) => <ExplorePage {...args} />;

export const withNFTS = Template.bind({});
withNFTS.args = {
  nfts: [
      {
        mediaUrl: 'https://storage.opensea.io/static/promocards/fatales-promocard.png',
        avatarName: 'jkol36',
        Owner: 'jkol36',
        createdAt: '10:00',
        narrative: 'test',
        description: 'test'
    },
    {
      mediaUrl: 'https://storage.opensea.io/static/promocards/nyfwpromo.jpg',
      avatarName: 'jkol36',
      Owner: 'jkol36',
      createdAt: '10:00',
      narrative: 'test',
      description: 'test'
  },
  {
      mediaUrl: 'https://storage.opensea.io/static/promocards/tinted-promocard.jpeg',
      avatarName: 'jkol36',
      Owner: 'jkol36',
      createdAt: '10:00',
      narrative: 'test',
      description: 'test'
  },
  
  ],
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
