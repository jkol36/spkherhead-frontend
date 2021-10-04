import React from 'react';
import { NFTAvatar } from '../../components/NFTAvatar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './fonts.css'


export const ExplorePage = ({nfts}) => {
  return (
    <div>
      <div className="section-text__title-big">
          Trending
      </div>
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
    </div>
  )
}