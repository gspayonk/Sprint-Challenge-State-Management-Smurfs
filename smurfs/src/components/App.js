import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchData } from '../actions';
import SmurfList from './SmurfList';
import NewSmurfForm from './AddForm';
import './App.css';

const App = props => {

  useEffect(() => {

    if (props.smurfs.length === 0) {
      props.fetchData();
    }
  }, [props.smurfs]);

  return (

    <div className = 'App'>

      <h1>SMURFS! 2.0 W/ Redux</h1>

      <div className = 'updatelist'>
        <h3>Update My List!</h3>
      <button onClick={props.getData}>Click to Update</button>
      </div>

      <div className = 'smurfsarray'>
      <SmurfList list={props.smurfs} />
      </div>
      <div className = 'newsmurf'>
      <NewSmurfForm />
      </div>

      <footer>
      <p>Smurfs for days!</p>
      </footer>

    </div>
  );
};

const mapStatesToProp = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStatesToProp, { fetchData })(App);
