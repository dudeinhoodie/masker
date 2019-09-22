import React, { FC, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

// Components
import Button from './components/Button/index';
import Dropdown from './components/Dropdown/index';
import Input from './components/Input/index';
import Error from './components/Error/index';

// Constants
import { DEVICES as devices } from './constants/devices';
import { MAX_DEVICE_COUNT } from './constants/ui';

// Types
import { Device } from './types';
import { node } from 'prop-types';

type AppProps = {};

const App: FC<AppProps> = () => {
    const [errors, setErrors] = useState([]);
    const [state, setState] = useState({
        deviceCount: 1,
        selected: null,
        pair: null,
        nodes: [],
        devices,
    });

    onmessage = (event) => {
        if (event.data.pluginMessage.length > 0) {
            setState({
                ...state,
                nodes: event.data.pluginMessage,
                deviceCount: event.data.pluginMessage.length,
            });
        }
    };

    const isAllNodesSame = () => {
        const { nodes } = state;

        if (!nodes) {
            return null;
        }

        const first = nodes[0];
        return nodes.every((node) => node.width === first.width && node.height === first.height);
    };

    useEffect(() => {
        const { pair } = state;

        if (!pair && errors.length) {
            const isNodesSame = isAllNodesSame();

            if (isNodesSame) {
                const pair = getPair();

                if (pair) {
                    setState({
                        ...state,
                        pair,
                    });
                }
            }
        }

        validate();
    });

    const getPair = () => {
        const { devices } = state;
        const reference = devices[0];

        return devices.find((device) => {
            return (
                device.screenSize.width === reference.width &&
                device.screenSize.height === reference.height
            );
        });
    };

    const validate = () => {
        const { nodes, pair, selected, deviceCount } = state;
        const errors = [];

        if (!pair && nodes && nodes.length) {
            errors.push(`Hasn't parent`);
        }

        if (!selected) {
            errors.push(`Device is required field`);
        }

        if (!deviceCount) {
            errors.push(`Device count is required field`);
        }

        setErrors(errors);
    };

    const handleCreate = (): void => {
        validate();
        const { selected, deviceCount } = state;

        if (selected && deviceCount) {
            const values = {
                device: selected,
                count: deviceCount,
            };

            parent.postMessage({ pluginMessage: { type: 'create-phone-mock', values } }, '*');
        }
    };

    const handleDeviceChange = (element: any): void => {
        setState({
            ...state,
            selected: element,
        });
    };

    const handleCountChange = (value) => {
        let deviceCount = null;

        if (value <= 0 || !value) {
            deviceCount = 1;
        } else if (value > MAX_DEVICE_COUNT) {
            deviceCount = MAX_DEVICE_COUNT;
        } else {
            deviceCount = value;
        }

        setState({
            ...state,
            deviceCount,
        });
    };

    const renderErrors = () => {
        return errors.map((error, index) => {
            return <Error id={index} text={error} />;
        });
    };

    return (
        <div className={'device-picker'}>
            <Dropdown
                disabled={state.pair}
                label={'Device'}
                options={state.devices}
                selected={state.selected}
                onChange={handleDeviceChange}
                className={'device-picker__device-picker'}
                tabIndex={1}
            />
            <Input
                type="number"
                disabled={state.nodes.length > 0}
                label={'Device count'}
                id={'deviceCount'}
                value={state.deviceCount}
                className={'device-picker__count-field'}
                onChange={handleCountChange}
            />

            <div className={'device-picker__footer'}>
                {errors && renderErrors()}

                <Button
                    title={'Select'}
                    className={'device-picker__submit-action'}
                    onClick={handleCreate}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('react-page'));
