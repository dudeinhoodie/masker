import React, { ChangeEvent } from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

// Components
import Button from './components/Button/index';
import Select from './components/Select/index';

// Constants
import { DEVICES } from './constants/devices';
import { backgroundTypes } from './constants/backgrounds';
import Dropdown from './components/Dropdown/Dropdown';

interface Device {}

type AppProps = {};
type AppState = {
    // TODO: create DEVICES PROPS;
    devices: Device;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            devices: DEVICES,
        };
    }

    handleConfirm = (event: React.MouseEvent): void => {
        console.warn(event);
    };

    // TODO: change to SELECT_ELEMENT
    handleDeviceChange = (element: any): void => {
        console.warn(element);
    };

    render() {
        const { devices } = this.state;

        return (
            <div className={'device-picker'}>
                <Dropdown options={devices} onChange={this.handleDeviceChange} />

                <Button title={'Select'} onClick={this.handleConfirm} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-page'));
