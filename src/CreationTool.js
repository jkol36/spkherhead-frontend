import React, { useState, useRef, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/pro-solid-svg-icons';
import  { SelectComponent }  from './components/Select';
import { SynthCard } from './components/SynthCard';
import Faker from 'faker';
import  Card  from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { SearchBar } from './components/SearchBar';
import { shuffle, generateNote, generateBeats, } from './utils';
import * as Tone from 'tone';
import { synth } from 'tone';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import Replay5Icon from '@material-ui/icons/Replay5';
import MicIcon from '@material-ui/icons/Mic';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])
library.add(...iconList)
const dropdownMenuStyle = {
  dropdown: {
    width: "100px",
    height: "30px",
    lineHeight: "30px",
    color: "#7e807e",
    textAlign: "left"
  },
  options: {
    backgroundColor: "#242624",
    marginLeft: "10px",
    paddingLeft: "10px",
    cursor: "pointer"
  }
};

const drawerStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 1000,
    backgroundColor: '#1f201f'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '1em',
  },
  title: {
    flexGrow: 1,
  },

}));


const DrawerComponent = (props) => {
  console.log('props', props)
  const {beatComponents, title, updateBPM, bpm,  setOpenDrawer, open, updateSynthesizer} = props
  const [selected, setSelected] = useState({})
  const getBorderStyle = (index) => {
    return selected[index] ? '1px solid blue' : 'None'
  }

  const classes = drawerStyles();
  const ref = useRef(null);
  useOutsideAlerter({ref, setOpenDrawer, open});
  console.log('selected', selected[1])
  console.log('style', getBorderStyle(1))


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <h2 style={{textAlign: 'center', paddingLeft: 10}}>  {title} </h2>
      <SearchBar placeholder={'search beats'} />
      <Divider />
      <div style={{display: 'flex'}}>
        <Card style={{height: 50, width: 50, padding: 10, border:getBorderStyle(1)}} onClick={() => setSelected({[1]:!selected[1]})} elevation={12}> <p> Originals </p> </Card>
        <Card onClick={() => setSelected({[2]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(2)}}> <p> Drums </p> </Card>
        <Card onClick={() => setSelected({[3]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(3)}}> <p> Bass </p> </Card>
        <Card onClick={() => setSelected({[4]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(4)}}> <p> Piano </p> </Card>
        <Card onClick={() => setSelected({[5]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(5)}}> <p> Guitar </p> </Card>
        <Card onClick={() => setSelected({[6]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(6)}}> <p> Synth </p> </Card>
        <Card onClick={() => setSelected({[7]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(7)}}> <p> SFX </p> </Card>
        <Card onClick={() => setSelected({[8]: true})} elevation={12} style={{height: 50, width: 50, padding: 10, border: getBorderStyle(8)}}> <p> Hip Hop </p> </Card>
      </div>
      <Divider position={'horizontal'} />
      <div style={{display: 'inline-flex', float: 'left', marginTop: 10}} className='settings'>
        <label> BPM </label> 
        <input value={bpm} type={'number'} onChange={updateBPM}/> 
      </div>
      <Divider position={'vertical'} />
      <div style={{display: 'inline-flex', width:'200px'}}> 
        <label style={{marginTop: 15}}> Synth </label>
        <SelectComponent
          width={300}
          options={[
            {label: "Base Synthesizer", value: 'base'},
            {label: "AM synthesizer", value: 'am'},
            {label: "Metal Synthesizer", value: 'metal'},
            {label: "Mono Synthesizer", value: 'mono'},
            {label: "Noise Synthesizer", value: 'noise'},
            {label: "Pluck Synthesizer", value: 'pluck'},
            {label: "Poly Synthesizer", value: 'PolySynth'},
            {label: "Sampler", value: 'Sampler'}
          ]}
          onChange={updateSynthesizer}
        />
      </div>
      <div style={{marginTop: 10}} className='result-table'> 
        {beatComponents}
      </div>
      
    </div>
  );

  return (
    <div>
      <Drawer variant="persistent" anchor={'right'} open={open}>
        {list('right')}
      </Drawer>
    </div>
  );
}
const renderMenuItems = () => {
    const menuItems = ['Project', 'Edit', 'Window', 'Help']
    return menuItems.map(item => <div style={{padding: 5, margin: 5, color: 'grey'}}> {item} </div>)
}

const renderControls = () => {
    return (
        <AppBar className='elevation' style={{backgroundColor: 'black', margin: '0 auto', marginTop: 0, padding: 0, width: 200}}> 
            <PlayArrowIcon style={{color: 'white', padding: 5}} />
            <StopIcon style={{color: 'white', padding: 5}} />
            <Replay5Icon style={{color: 'white', padding: 5}} />
            <MicIcon style={{color: 'white', padding: 5}} />
            <p style={{display:'inline', color: 'grey', marginBottom: 5}}> Bars </p>
            <span style={{display: 'block', color: 'white', float: 'right', marginTop: 40}}> 4.9 </span>
            <div> BPM </div>
            <span> 120 </span>
        </AppBar>
    )
}

const Dropdown = ({title, show, options, setShow, handleSelection}) => {
  return (
      <div style={dropdownMenuStyle.dropdown}>
        <div
          style={dropdownMenuStyle.options}
          onClick={() => setShow(!show)}
        >
          <summary>{title}</summary>
          {show? options.map(option => {
            return <div onClick={e => handleSelection(e)}>{option}</div>;
          }): null}
        </div>
      </div>
    );

}




const useStyles2 = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    float: 'right',
    marginLeft: 185,
    display: 'inline-flex',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#7f807f',
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

export default function VerticalDividers() {
  const classes = useStyles2();

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Button size='big'>
            <Add />
            Add New Track
        </Button>
      </Grid>
    </div>
  );
}
const Navbar = ({bpm}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [projectDropdown, setProjectShow] = useState(false);
    const [editDropdown, setEditShow] = useState(false);
    const [windowDropdown, setWindowShow] = useState(false);
    const [selected, setSelection] = useState(null);

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
     return (
        <div>
        <AppBar style={{backgroundColor: '#262726'}} position="static">
        <Grid container alignItems='center'>
        <Toolbar>
          <IconButton style={{color:"#7f807f"}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Dropdown handleSelection={setSelection} setShow={setProjectShow} show={projectDropdown} title={"Project"}  options={["New", "Open", "Save", "Close"]}/>
          </IconButton>
          <IconButton style={{color: '#7f807f'}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Dropdown handleSelection={setSelection} setShow={setEditShow} show={editDropdown} title="Edit" options={["Undo"]} />
          </IconButton>
          <IconButton style={{color: '#7f807f'}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Dropdown title={"Window"} setShow={setWindowShow} show={windowDropdown} options={["Fullscreen"]} />
          </IconButton>
          <IconButton style={{color: '#7f807f'}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Help
          </IconButton>
          <div style={{margin: '0 200px'}}>
            <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <PlayArrowIcon />
            </IconButton>
            <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <StopIcon />
            </IconButton>
            <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <Replay5Icon />
            </IconButton>
            <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <MicIcon />
            </IconButton>
             <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <span>
                    <span> Bars </span>
                    <br/>
                 <span style={{color: '#b2b3b2'}}> 4.5 </span>
                 </span>
            </IconButton>
             <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <span>
                    <span> BPM </span>
                    <br/>
                 <span style={{color: '#b2b3b2'}}> {bpm} </span>
                 </span>
            </IconButton>
             <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <span>
                    <span> Sign </span>
                    <br/>
                 <span style={{color: '#b2b3b2'}}> 1/4 </span>
                 </span>
            </IconButton>
             <IconButton style={{color: '#7f807f'}} edge='end' className={classes.menuButton}> 
                <span>
                    <span> % </span>
                    <br/>
                 <span style={{color: '#b2b3b2'}}> 60 </span>
                 </span>
            </IconButton>
           </div>
        </Toolbar>
        <VerticalDividers />
        </Grid>
        
      </AppBar>
        </div>
     )

}
const useOutsideAlerter = ({ref, setOpenDrawer, open}) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          console.log('handling click outside')
            if (ref.current && !ref.current.contains(event.target)) {
              console.log('you clicked me')
                alert("You clicked outside of me!");
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export const CreationTool = (props) => {
    const [drawerOpen, setOpenDrawer] = useState(false);
    const [beatPlaying, setBeatPlaying] = useState(false);
    const [bpm, _setBPM] = useState(Tone.Transport.bpm.value);
    const [synthesizer, updateSynthesizer] = useState('base');

    const setBPM = (e) => {
      console.log(e.target.value)
      Tone.Transport.bpm.value = e.target.value
      _setBPM(e.target.value)
    }
    console.log('note', generateNote())
    console.log('bpm', Tone.Transport.bpm.value)
    let counter = 0
    

    const [selected, setSelected] = useState({});
    const classes = useStyles();
    console.log(Tone.Transport.bpm)
    const iconStyle = {fontSize: 50}
    //Tone.Transport.start()
    console.log('generating beats for', synthesizer)
    const beats = generateBeats('16n', synthesizer)
   const BeatComponents = beats.map(beat => {
     console.log('beat state', beat.state)
     console.log('beatplaying', beatPlaying)

      return (
        <Card style={{display: 'inline-flex', marginTop: 5, width: '100%'}} elevation={6}>
          <div style={{textAlign: 'left', display: 'inline-flex', marginTop: 5}}> 
            {beatPlaying === true ? <StopIcon onClick={() => {beat.stop(); Tone.Transport.stop(); setBeatPlaying(false)}} />:<PlayArrowIcon onClick={() => {
              Tone.Transport.start();
              Tone.start();
              beat.start();
              setBeatPlaying(true);

            }} style={{color: 'red'}} />}
            <FontAwesomeIcon style={{color: 'grey', marginTop:5, 'box-shadow': '1px'}}  icon='waveform-path'/>
          </div>
          <div style={{textAlign: 'center', width: '100%'}} className='track-title'> 
            <p style={{textAlign: 'center'}}> {Faker.music.genre()} <span style={{fontSize: '1em'}}> 3:45 </span> </p> 
          </div>
          <div style={{textAlign: 'right', marginTop: 5}}> 
            <FavoriteIcon />
          </div>
         </Card>
      )
    })
    console.log(BeatComponents)


    
    return (
        <div> 
          <Navbar bpm={Tone.Transport.bpm.value} />
          <div className={classes.root}> 
            <div>
            <Grid style={{marginLeft: 450}} spacing={12} container>
              <Grid spacing={6} style={{display:'flex-inline', backgroundColor: '#1f201f', marginTop: 300, padding: 10, marginLeft: 80}} item>
                <Paper style={{display: 'inline-flex', height:200, width: '100%'}} elevation={12}> 
                  <button onClick={() => {
                    console.log('this is running')
                    setOpenDrawer(true)
                  }} style={{cursor: 'pointer', backgroundColor: '#7e807e'}}>
                    <div> <FontAwesomeIcon style={iconStyle} icon={'music'} />  </div>
                    <div style={{width: '100%', color: 'white'}}> Browse Beats </div>
                    <DrawerComponent updateSynthesizer={updateSynthesizer} updateBPM={setBPM} bpm={bpm} beatComponents={BeatComponents} open={drawerOpen}> 
                      {BeatComponents}
                    </DrawerComponent>
                  </button>
                </Paper>
              </Grid>
              
            </Grid>
            </div>
          </div>
          
        </div>
    )
}