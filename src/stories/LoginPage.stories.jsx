import React from 'react';
import { LoginPage } from './LoginPage';


export default {
  title: 'pages/login',
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const LoginPageComponet  = Template.bind({
    handleChange: () => {console.log('YOO')}

});

