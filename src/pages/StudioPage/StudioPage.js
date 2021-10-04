import React, { useState, useCallback } from 'react';
import { GenreCard } from '../../components/Studio/GenreCard';
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import SpkhrHead from '../../spkrheads/speakerhead.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { useMoralis } from "react-moralis";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const StudioPage = ({genres}) => {
  const [selected, setState] = useState({})
  const history = useHistory()

  const goToStudio = () => {
    history.push('/app')
  }
  
  return (
    <div className='studio'>
      <h1> What Music Do you Like? </h1>
      <p> Please select up to 3 categories </p>
      <Grid container>
        {genres.map((genre, index) => {
          const {imgUrl, title} = genre
          return (
            <Grid item>
              <GenreCard goToStudio={goToStudio} isSelected={selected[index]} index={index} selected={selected} onSelected={(index) => setState(Object.assign({}, selected, {[index]: !selected[index]}))} title={title} imgUrl={imgUrl} />
            </Grid>
          )
        })}
      </Grid>
      {Object.keys(selected).length >= 3 ? <Button onClick={goToStudio} style={{top: -1000, float: 'right'}}> Continue </Button>: null}
    </div>
    
  );

}