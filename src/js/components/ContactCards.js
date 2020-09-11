/**
 * The ContactCard Component builds a list of Contact Cards to display 
 * them on the Contacts.jsx view.
 * 
 * It started life as a copy of ContactCard. Now it sits between the 
 * ContactCard Component and the Contacts.jsx view.
 * 
 * If you look at Contacts.jsx on line 28 there is now just one 
 * React component <ContactCards /> in place the orginal list of serveral copies 
 * of <ContactCard /> . 
 * 
 * First this component demonstrates a "fake data" part, and second it also makes a 
 * call to Fetch to demonstrate a call to an API. In this case the "API" is actually
 * a file stored in the "dist" folder called "data.json".  
 * ( This is using modern AJAX - read about AJAX here https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) 
 * 
 * The "fake data" uses the Javascript array cardItems  that contains records as it's 
 * source of data. The "real" data come from the "data.jason" file. There are two records in 
 * both data sources. A key "property" or "attribute" was needed 
 * by React for the call to multiple copies of <ContactCard . /> . 
 * 
 * The technique used to generate list of ContactCards is to ask an array to map each item 
 * in the array as a parameter to a function "fatArrow" as described recently.
 * 
 * The "map" method generates one ContactCard per item (x) in the array. 
 * 
 * This is done twice in the code. Once at "fake data", that produces the const "listItems".
 * The second time a successful Fetch "result" contains the list from the data.jason file. That
 * is put into the Component's State as this.state.items.
 * 
 * The Render requests both {listItems} and the "{this.state.items.map( (x) => ...)}".
 * 
 * Have a read enjoy!
 * 
 * 
 */
import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactCard from '../components/ContactCard';

// fake data
const cardItems = [{key:1, img:"http://demos.themes.guide/bodeo/assets/images/users/m101.jpg",
                    name:"Mike Anamendolla"},
                    {key:2, img:"http://demos.themes.guide/bodeo/assets/images/users/m102.jpg",
                    name:"Zorro Anamendolla"}
                ];
const listItems = cardItems.map((x) =>
    <ContactCard key={x.key} img={x.img} name={x.name} alt={x.name} className="rounded-circle mx-auto d-block img-fluid" />
    ); 


class ContactCards extends React.Component{
    
    constructor(props ){ 
        super(props );
        this.state = {
            // initialize your state
            isLoaded: false,
            items:[]
        };
    }

    // ** from https://reactjs.org/docs/faq-ajax.html  
    componentDidMount() {
        fetch("http://localhost/data.json") // this is served from dist when in dev mode
          .then(res => res.json())
          .then(
            (result) => {
              //  alert('got data' + result);
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                alert('error'+error);
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
    }

    render(){
        return (
            <div> {listItems} {
                    this.state.items.map((x) =>
                        <ContactCard key={x.key} img={x.img} name={x.name} alt={x.name} className="rounded-circle mx-auto d-block img-fluid" />
                )} 
            </div>
            
        );
    }
    
}

/**
 * here is where you define the data-types for
 * your component propersties
**/
ContactCards.propTypes = {
    history: PropTypes.object,
    img : PropTypes.string,
    name : PropTypes.string,
    key : PropTypes.number,
    onDelete: PropTypes.func,
};
 
/**
 * here is where you define the default values
 * for your component propersties
**/
ContactCards.defaultProps = {
  onDelete: null
};
export default withRouter(ContactCards);