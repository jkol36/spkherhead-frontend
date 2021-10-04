import React, { Component } from 'react';
import { Page } from './components/Page';
import { ExplorePage } from './pages/ExplorePage';
import { SignupPage } from './pages/SignupPage';
import { MintPage } from './pages/MintPage';
import { HeroBanner } from './components/HeroBanner';
import { StudioPage } from './pages/StudioPage';
import { MoralisProvider } from "react-moralis";
import { CreationTool } from './CreationTool';
import LandingPage  from 'pages/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const App = () => {
    const genres = [
      {
        imgUrl: 'https://at-cdn-s02.audiotool.com/2018/10/01/genres/trap/9a8d5fe51134485aa8f8a4cfe5bea3e3.jpg',
        title: 'trap'
    },
    {
      imgUrl: 'https://at-cdn-s02.audiotool.com/2018/10/01/genres/trap/9a8d5fe51134485aa8f8a4cfe5bea3e3.jpg',
      title: 'Rap',
    },
    {
      imgUrl:'https://at-cdn-s02.audiotool.com/2018/10/01/genres/experimental/3ed2f33620a24f5f80102adf1aaf8506.jpg',
      title: 'Experimental'
    },
    {
      imgUrl: 'https://at-cdn-s02.audiotool.com/2018/10/01/genres/other/cb6415b99d11422c8759b958fb82b02e.jpg',
      title: 'Other'
    },
    {
      imgUrl: 'https://at-cdn-s02.audiotool.com/2018/10/01/genres/lo-fi/7bf7fb9170bd4aafb45c73be05a94f38.jpg',
      title: 'Lo-Fi'
    },
    {
      imgUrl: 'https://at-cdn-s02.audiotool.com/2018/10/01/genres/bass_music/783dc9a5db4d43fbb9f905725d5f14e2.jpg',
      title: 'Bass Music'
    },
    {
      imgUrl: 'https://at-cdn-s02.audiotool.com/2018/10/01/genres/edm/b9efc98fd10340c5a0e01427b2b93f38.jpg',
      title: 'EDM'
    }
  
  ]
    return (
      <MoralisProvider appId="rQyiywDTyNnMYrRVof7dUXyEVcGAsVmrc9g4649k" serverUrl="https://vzyovux00w7z.bigmoralis.com:2053/server">
        <Router>
          <Switch>
            <Route path="/create">
              <Page> I'm the create page </Page>
            </Route>
            <Route path="/login">
              <Page> I'm the signin page </Page>
            </Route>
            <Route path="/signup"> 
              <Page> <SignupPage />  </Page>
            </Route>
            <Route path="/studio"> 
              <Page> 
                <StudioPage genres={genres} />
              </Page>
            </Route>
            <Route path="/mint"> 
              <Page> 
                <MintPage />
              </Page>
            </Route>
            <Route path="/app"> 
              <CreationTool /> 
            </Route>
            <Route path="/">
              <Page> 
                <LandingPage />
              </Page>
            </Route>
          </Switch>
        </Router>
      </MoralisProvider>
      );
  }
