import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'David Huecker',
    aria: 'My name is David Huecker',
  },
  title: {
    display: 'Techinal Account Manger',
    aria: 'I am a techinal account manager',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/dhuecker',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/david-huecker-658053122?challengeId=AQERa296Gzj9tQAAAYvWwLO8GQ_hqQUI9LuqnMzLmTSdyBvX84pLMThuOxtBDZ-wA6_hKDUYMuBKSo0xxoqu-j9I4DCEKyBDcg&submissionId=37a83cd4-9d05-9817-37eb-47e66351d14a&challengeSource=AgEWXd2-zAMyagAAAYvWwL1RfNIfiEeR0ChlgNJs4uVSW9DlFpXy7rh5IahHsF0&challegeType=AgEUPfbFk71r7QAAAYvWwL1T6h8HA_CVD2Au4_VfRaxip6w8p8rwXlE&memberId=AgGvEmU636TPrAAAAYvWwL1W1ef18DRvcWaihC_GwKDqqcs&recognizeDevice=AgFym9pBSWjwVgAAAYvWwL1ZpW63SCtKxTFVeXQqB7Gr44EfeaJ8',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://docs.google.com/document/d/1AmrfQo5fDkc0Qhc370QdpTKJTyvi5VqU/edit?usp=sharing&ouid=101497798513193541749&rtpof=true&sd=true',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:davidhuecker01@gmail.com',
    },
  ],
};

export default config;
