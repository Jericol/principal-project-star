import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import App from './App';
=======
import SettingHttp from './components/SettingHttps/SettingHttp';
>>>>>>> 1965d985579a5d0f3ebb0469a812c1ed4970c27e



export const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
<<<<<<< HEAD
           <App />
=======
            <SettingHttp>
                 <App />
            </SettingHttp>
>>>>>>> 1965d985579a5d0f3ebb0469a812c1ed4970c27e
        </Provider>
    </React.StrictMode>
);


