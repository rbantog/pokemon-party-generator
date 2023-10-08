import { ReactElement } from 'react';
import Form from './components/Form';
import Grid from './components/Grid';

function App(): ReactElement {
    return (
        <div className="m-4">
            <p className="text-center m-4">Generate your Pokémon team</p>
            <Form />
            <Grid />
        </div>
    );
}

export default App;
