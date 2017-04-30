import React, { Component } from 'react'
import {Card, CardHeader, CardTitle, CardText, CardActions, Button} from 'react-mdc-web';
 
class MyComponent extends Component {
  render() {
    return (
        <Card>
          <CardHeader>
            <CardTitle>
              Title goes here
            </CardTitle>
          </CardHeader>
          <CardText> 
            Lorem ipsum dolor sit amet, sint adipiscing ius eu
          </CardText>
          <CardActions>
            <Button compact>Save</Button>
            <Button compact accent>Remove</Button>
          </CardActions>
        </Card>
    );
  }
}
