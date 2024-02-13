import { Button, ButtonGroup, Card, CardBody, IconButton, Typography } from '@material-tailwind/react';
import Lottie from 'lottie-react';
import React from 'react'
import { FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <h1 className="text-center text-3xl">Who Am I</h1>
      <div className="container mx-auto h-screen grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-1  m-16">
          <img
            src="https://avatars.githubusercontent.com/u/119723781?v=4"
            alt=""
            height={"auto"}
            width={"auto"}
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 m-10">
          <Typography
            className="text-start text-blue-gray-800 font-thin"
            variant="h5"
          >
            My name is <span className="font-extrabold">Thouseef Hamza TP</span>
            , I am <span className="font-extrabold">Passionate</span>{" "}
            Self-taught Python FullStack (Django+React) Developer. I am
            Expertised in Backend Developement using Django.
            <br />
            <br />
            When i find out my strong interest in technology.I took an
            internship at{" "}
            <span className="font-extrabold">Bridgeon Solution</span> in
            Calicut,kerala,India.The Self-learning method teaches me how to
            study properly,how to set sharp mindset,how i look like after 3
            years or 5 years and i used to follow{" "}
            <span className="font-extrabold">Feynmann Technique.</span> In this
            period i have worked on various projects. My projects shows how much
            skilled i am.
            <br />
            <br />I have 1 year project experience with 2 year work-experience
            developer skills&confident.
            <br />
            <br />
            <Button>Continous Learner</Button>
            <Button className="ml-4">
              Career Target : DevOps Engineer (2027)
            </Button>
            <br />
            <a href='https://github.com/thouseef-hamza/' target='_blank'>
            <IconButton className="rounded-full">
              <FaGithub />
            </IconButton>
                 thouseef-hamza
            </a>
          </Typography>
        </div>
      </div>
    </>
  );
}

export default AboutPage