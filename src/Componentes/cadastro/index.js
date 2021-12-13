import React, {Component} from 'react';

import Social from './components/lista';

class App extends Component{
    render(){
        return(
            <div>
                <h1>Conheça a nossa Equipe:</h1>
                <Equipe nome="Juliana"/>
            </div>
        );
    }
}
export default App;
