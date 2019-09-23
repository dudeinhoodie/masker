import React, { FC, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';
import { lang } from './constants/lang';

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
    const [errors, setErrors] = useState({});
    const [nodes, setNodes] = useState({
        items: [],
        isNodesSame: null,
    });
    const [state, setState] = useState({
        selected: null,
        deviceQuantity: 1,
        devices,
    });

    onmessage = (event) => {
        if (event.data.pluginMessage.length > 0) {
            setNodes({
                ...nodes,
                items: event.data.pluginMessage,
            });
            setState({
                ...state,
                deviceQuantity: event.data.pluginMessage.length,
            });
        }
    };

    const isAllNodesSame = () => {
        if (!nodes.items) {
            return false;
        }

        return nodes.items.every((node) => {
            return node.width === nodes.items[0].width && node.height === nodes.items[0].height;
        });
    };

    useEffect(() => {
        const { selected } = state;

        if (selected === null && nodes.items.length > 0) {
            const isNodesSame = isAllNodesSame();

            if (isNodesSame !== nodes.isNodesSame) {
                setNodes({
                    ...nodes,
                    isNodesSame,
                });
            }

            if (isNodesSame) {
                setState({
                    ...state,
                    selected: getPair(),
                });
            } else {
                setErrors({
                    ...errors,
                    ['isNodesSame']: lang.isNotNodesSame,
                });
            }
        }

        validate();
    }, [state, nodes]);

    const getPair = () => {
        const { devices } = state;
        const reference = nodes.items[0];

        return (
            devices.find((device) => {
                return (
                    device.screenSize.width === reference.width &&
                    device.screenSize.height === reference.height
                );
            }) || null
        );
    };

    const validate = () => {
        const { selected, deviceQuantity } = state;
        const errors = {};

        if (!selected || selected.id === -1) {
            errors['requiredDevice'] = lang.requiredDeviceField;
        }

        if (!deviceQuantity) {
            errors['requiredQuantity'] = lang.requiredDeviceCountField;
        }

        setErrors(errors);
    };

    const handleCreate = (): void => {
        if (!Object.values(errors).length) {
            const values = {
                device: state.selected,
                count: state.deviceQuantity,
            };

            parent.postMessage({ pluginMessage: { type: 'create-phone-mock', values } }, '*');
        }
    };

    const handleDeviceChange = (element: any): void => {
        setState({
            ...state,
            selected: element,
        });
        validate();
    };

    const handleCountChange = (value) => {
        let deviceQuantity = null;

        if (value <= 0 || !value) {
            deviceQuantity = 1;
        } else if (value > MAX_DEVICE_COUNT) {
            deviceQuantity = MAX_DEVICE_COUNT;
        } else {
            deviceQuantity = value;
        }

        setState({
            ...state,
            deviceQuantity,
        });
        validate();
    };

    const renderErrors = () => {
        return Object.keys(errors).map((key) => {
            return <Error id={key} text={errors[key]} />;
        });
    };

    return (
        <div className={'device-picker'}>
            <Dropdown
                disabled={nodes.isNodesSame && state.selected}
                label={'Device'}
                options={state.devices}
                selected={state.selected}
                onChange={handleDeviceChange}
                className={'device-picker__device-picker'}
                tabIndex={1}
            />
            <Input
                type="number"
                disabled={nodes.items.length > 0}
                label={'Device count'}
                id={'deviceQuantity'}
                value={state.deviceQuantity}
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
