import { useEffect } from "react";
import React from 'react'
// import {Jumbotron, Container, Button} from "reactstrap"

export const Home = () => {

  useEffect(() => {
    document.title="Home Notes"
  },[]);

  return (
    <div>
        {/* <Jumbotron> */}
            <h1>Notes</h1>
          {/* <Container>
              <Button>Start using</Button>
          </Container> */}
        {/* </Jumbotron> */}

    </div>
  );
};
