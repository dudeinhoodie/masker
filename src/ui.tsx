import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

// Components
import Button from './components/Button/index';
import Dropdown from './components/Dropdown/index';

// Constants
import { DEVICES as devices } from './constants/devices';
import { MAX_DEVICE_COUNT } from './constants/ui';

// Types
import { Device } from './types';

type AppProps = {};
type AppState = {
    devices: Device[];
    selected: Device | null;
    deviceCount: number;
};

// TODO: переделать
let selectedNodes = [];

onmessage = (event) => {
    const nodes = event.data.pluginMessage;

    if (nodes.length && nodes.length > 0) {
        selectedNodes = nodes;
    }
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

    private handleCreate = (): void => {
        const { selected, deviceCount } = this.state;
        const values = {
            device: selected,
            count: deviceCount,
        };

        parent.postMessage({ pluginMessage: { type: 'create-phone-mock', values } }, '*');
    };

    private handleDeviceChange = (element: any): void => {
        this.setState({
            selected: element,
        });
    };

    private handleCountChange = (event) => {
        const inputValue = event.target.value;
        const value = inputValue > MAX_DEVICE_COUNT ? MAX_DEVICE_COUNT : inputValue;

        this.setState({
            deviceCount: value,
        });
    };

    private getPairs = () => {
        const { devices } = this.state;

        for (const node of selectedNodes) {
            // TODO: здесь делать проверку на размер и подгонять автоматически если ВСЕ элементы соответсвуют размеру
            // TODO: если хотя бы один не соответсвутет то блочить и выкидывать алерт
            // TODO: блочить все элементы списка по размеру ноды
            // TODO: добавить проверку на === 1 элемент
        }
    };

    render() {
        const { devices, deviceCount } = this.state;

        return (
            <div className={'device-picker'}>
                <input
                    type="text"
                    value={deviceCount}
                    id={'deviceCount'}
                    onChange={this.handleCountChange}
                />
                <Dropdown options={devices} onChange={this.handleDeviceChange} tabIndex={1} />

                <Button title={'Select'} onClick={this.handleCreate} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-page'));
