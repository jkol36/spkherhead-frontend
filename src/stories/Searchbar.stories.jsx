import React from 'react';

import SearchBar  from './SearchBar';

export default {
  title: 'Navigation/SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const SearchTerm = Template.bind({});
SearchTerm.args = {
    searchText: 'Search NFTS And Accounts', 
    width: 500
};


