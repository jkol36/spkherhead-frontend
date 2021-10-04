import React from 'react';
import { Page } from './Page';
import { NFTAvatar } from './NFTAvatar';
import Grid from '@material-ui/core/Grid';


export const ExplorePage = ({nfts}) => {
  return (
    <Page>
      <Grid container spacing={2}>
        {nfts.map(nft => {
          const { mediaUrl, avatarName, Owner, createdAt, narrative, description } = nft;
          return (
            <Grid xs={4} item>
              <NFTAvatar 
                mediaUrl={mediaUrl}
                avatarName={avatarName}
                Owner={Owner}
                createdAt={createdAt}
                narrative={narrative}
                description={description}
              />
            </Grid>
          )
        })}
      </Grid>
    </Page>
  )
}