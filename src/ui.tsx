import React, { FC, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

// Components
import Button from './components/Button/index';
import Dropdown from './components/Dropdown/index';
import Input from './components/Input/index';

// Constants
import { DEVICES as devices } from './constants/devices';
import { MAX_DEVICE_COUNT } from './constants/ui';

// Types
import { Device, NodeBound } from './types';

type AppProps = {};
type AppState = {
    devices: Device[];
    selected: Device | null;
    deviceCount: number;
    error: string;
};

const App: FC<AppProps> = () => {
    let nodes = [];
    const [state, setState] = useState({
        deviceCount: 1,
        selected: null,
        error: null,
        pair: null,
        devices,
    });

    onmessage = (event) => {
        console.warn('event.data.pluginMessage');
        console.warn(event.data.pluginMessage);

        nodes = event.data.pluginMessage;
    };

    useEffect(() => {
        const pair = getPairs();

        if (pair) {
            setState({
                ...state,
                selected: pair,
                pair,
            });
        }
    });

    const getPairs = () => {
        let deviceSize = null;

        for (const node of nodes) {
            if (!deviceSize) {
                deviceSize = node;
                continue;
            }

            if (deviceSize.width !== node.width || deviceSize.height !== node.height) {
                return setState({
                    ...state,
                    error: 'Devices are not same',
                });
            }
        }

        return getPairBySize(deviceSize);
    };

    const getPairBySize = (device) => {
        if (!device) {
            return null;
        }

        const { devices } = state;

        return devices.find((d) => {
            return d.screenSize.width === device.width && d.screenSize.height === device.height;
        });
    };

    const handleCreate = (): void => {
        const { selected, deviceCount } = state;
        const values = {
            device: selected,
            count: deviceCount,
        };

        parent.postMessage({ pluginMessage: { type: 'create-phone-mock', values } }, '*');
    };

    const handleDeviceChange = (element: any): void => {
        setState({
            ...state,
            selected: element,
        });
    };

    const handleCountChange = (value) => {
        const deviceCount = value > MAX_DEVICE_COUNT ? MAX_DEVICE_COUNT : value;

        setState({
            ...state,
            deviceCount,
        });
    };

    return (
        <div className={'device-picker'}>
            <Input
                type="text"
                id={'deviceCount'}
                value={state.deviceCount}
                className={'device-picker__count-field'}
                onChange={handleCountChange}
            />
            <Dropdown
                options={state.devices}
                selected={state.selected}
                onChange={handleDeviceChange}
                className={'device-picker__device-picker'}
                tabIndex={1}
            />
            <Button
                title={'Select'}
                className={'device-picker__submit-action'}
                onClick={handleCreate}
            />

            {state.error && <p>{state.error}</p>}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('react-page'));
