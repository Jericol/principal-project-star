import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import SettingHttp from './components/SettingHttps/SettingHttp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SettingHttp>
                 <App />
            </SettingHttp>
        </Provider>
    </React.StrictMode>
);
