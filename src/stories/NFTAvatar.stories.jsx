import React from 'react';

import { NFTAvatar } from './NFTAvatar';

export default {
  title: 'components/NFTAvatar',
  component: NFTAvatar,
};

const Template = (args) => <NFTAvatar {...args} />;

export const withAvatar = Template.bind({});
withAvatar.args = {
  mediaUrl: 'https://storage.opensea.io/static/promocards/fatales-promocard.png',
  createdAt: '04/10/1995',
  description: 'yoooooo',
  avatarName: 'jkol36',
  narrative: `This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.`
};

