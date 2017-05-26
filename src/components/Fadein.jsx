import React from 'react';
import {Link, IndexLink} from 'react-router';

class FadeIn extends React.Component  {
   componentDidMount() {
    console.log("componentDidMount", this.displayName);
    var that = this;
    // Get the components DOM node
    var elem = ReactDOM.findDOMNode(that);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function () {
      // Now set a transition on the opacity
      elem.style.transition = that.props.transition || "opacity 5000ms";
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }

  render () {
  return (
      <div>
        {this.props.children}
      </div>
    );
  }
}




const MatchWithFade = ({ component: Component, transition, ...rest }) => (
  <Route {...rest} render={(matchProps) => (
    <FadeIn transition={transition}>
      <Component {...matchProps} />
    </FadeIn>
  )} />
)



