import { Button, Popover, PopoverContent, PopoverHandler, Tooltip, Typography } from '@material-tailwind/react';
import Lottie from 'lottie-react';
import animationData from '../assets/home_animation.json'
import Resume from "/thouseef_python_react_resume.pdf";

const LandingPage = () => {
  return (
    <>
      <div className="container mx-auto h-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="grid grid-cols-1 place-items-center">
          <Typography className="text-start outlined-text" variant="h1">
            Thouseef Hamza T P
          </Typography>
          <Typography className="text-start" variant="h4">
            Django+React Developer | Backend Developer
          </Typography>
          <div className="flex gap-4 mt-5">
            <a href={Resume} download>
              <Button variant="outlined">Resume</Button>
            </a>
            <Popover>
              <PopoverHandler>
                <Button variant="filled">Hire Now</Button>
              </PopoverHandler>
              <PopoverContent>
                +91 8848285720 | thouseefhamza.codes@gmail.com
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </>
  );
}

export default LandingPage