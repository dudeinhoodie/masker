import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

// Components
import Button from './components/Button/index';
import Dropdown from './components/Dropdown/index';

// Constants
import { DEVICES as devices } from './constants/devices';

// Types
import { Device } from './types';

type AppProps = {};
type AppState = {
    devices: Device[];
    selected: Device | null;
    deviceCount: number;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
            deviceCount: 1,
            devices,
        };
    }

    public handleCreate = (): void => {
        const { selected, deviceCount } = this.state;
        const values = {
            device: selected,
            count: deviceCount,
        };

        parent.postMessage({ pluginMessage: { type: 'create-phone-mock', values } }, '*');
    };

    public handleDeviceChange = (element: any): void => {
        this.setState({
            selected: element,
        });
    };

    render() {
        const { devices } = this.state;

        return (
            <div className={'device-picker'}>
                <input type={'text'} id={'count'} />
                <Dropdown options={devices} onChange={this.handleDeviceChange} tabIndex={1} />

                <Button title={'Select'} onClick={this.handleCreate} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-page'));
