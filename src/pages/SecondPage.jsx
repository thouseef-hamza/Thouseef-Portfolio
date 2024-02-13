import React, { useState } from 'react'
import CircleIconComp from '../components/CircleIconComp';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const SecondPage = () => {
    const data=[
      {
        id: 1,
        image: "https://techstack-generator.vercel.app/python-icon.svg",
        text: "Python",
      },
      {
        id: 2,
        image: "https://techstack-generator.vercel.app/django-icon.svg",
        text: "Django",
      },
      {
        id: 3,
        image: "https://techstack-generator.vercel.app/restapi-icon.svg",
        text: "REST API",
      },
      {
        id: 4,
        image: "https://techstack-generator.vercel.app/js-icon.svg",
        text: "JavaScript",
      },
      {
        id: 5,
        image: "https://techstack-generator.vercel.app/react-icon.svg",
        text: "React",
      },
      {
        id: 6,
        image: "https://techstack-generator.vercel.app/redux-icon.svg",
        text: "Redux Toolkit",
      },
      {
        id: 7,
        image: "https://skillicons.dev/icons?i=postgres",
        text: "PostgreSQL",
      },
      {
        id: 8,
        image: "https://techstack-generator.vercel.app/mysql-icon.svg",
        text: "MySQL",
      },
      {
        id: 9,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        text: "Redis",
      },
      {
        id: 10,
        image: "https://techstack-generator.vercel.app/aws-icon.svg",
        text: "AWS",
      },
      {
        id: 12,
        image: "https://techstack-generator.vercel.app/github-icon.svg",
        text: "Github",
      },
      {
        id: 13,
        image:
          "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
        text: "Git",
      },
      {
        id: 19,
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        text: "Postman",
      },
      {
        id: 24,
        image:
          "https://github.com/THOUSI731/THOUSI731/assets/119723781/b7ea9dae-7907-48b2-a3fb-0673f4eff363",
        text: "Swagger API",
      },
      {
        id: 25,
        image: "http://jwt.io/img/icon.svg",
        text: "JWT",
      },
      {
        id: 27,
        image:
          "https://github.com/THOUSI731/THOUSI731/assets/119723781/5eeac37f-2378-4d06-9399-29dd46554ce9",
        text: "PyTest",
      },
    ];


  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl font-bold mb-4">Skills</h1>
        <div className="ml-16 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-7  justify-between mr-10">
          {data
            .slice(0, window.innerWidth < 763 ? 3 : data.length)
            .map((value) => (
              <Card
                key={value.id}
                className="mt-6 flex items-center justify-center shadow-md hover:shadow-xl"
              >
                <img
                  src={value.image}
                  alt="icon"
                  width="80"
                  height="80"
                  className="mr-2"
                />
                <span className="text-lg font-semibold">{value.text}</span>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}

export default SecondPage