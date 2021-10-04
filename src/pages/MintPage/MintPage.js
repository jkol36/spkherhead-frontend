import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import SpkhrHead from '../../spkrheads/speakerhead.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { contractAddress } from '../../config';
import contractAbi from './abi.json';




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


export const MintPage = (props) => {
 const {
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    web3EnableError,
    user,
    isAuthenticated,
    web3
  } = useMoralis();

  const [value, setValue] = useState(5)
  const startMintProcess = async () => {
    console.log('starting mint process.')
    const abi = JSON.stringify(contractAbi)
    const nftContract = new web3.eth.Contract(JSON.parse(abi), contractAddress)
    console.log(nftContract)
  }
  if(!isAuthenticated) {
    return (
      <Card elevation={12}>
      <CardHeader action={
          <Button onClick={() => enableWeb3({provider: 'metamask'})} style={{backgroundColor: '#f9218d', color: 'white'}}>
            Connect Wallet
          </Button>
        }>
       
      </CardHeader>
      <Divider/>
      <CardContent style={{textAlign: 'center'}}>
        <h1> Quantity: <input placeholder={'max is 10'} onChange={setValue} type={"number"} value={value.value}/> </h1>
        <h1> Max: <span> 10 </span> </h1>
        <img width={500} height={500} src={SpkhrHead} />
        {JSON.stringify(
            {
              isAuthenticated
            },
            null,
            2,
          )}
      </CardContent>
    </Card>
    );
  }
  else {
    return (
      <Card elevation={12}>
        <CardHeader action={
            <h1>Welcome {user.get("username")}</h1>
          }>
         
        </CardHeader>
        <Divider/>
        <CardContent style={{textAlign: 'center'}}>
          <h1> Quantity: <span> 5 </span> </h1>
          <h1> Max: <span> 10 </span> </h1>
          <img width={500} height={500} src={SpkhrHead} />
        </CardContent>
        <Divider />
        <CardActions style={{backgroundColor: '#f9218d'}} disableSpacing>
          <Button style={{marginLeft: '50%', color: 'white'}} onClick={() => startMintProcess()}> Mint </Button>
        </CardActions>
      </Card>
    )
  }
}