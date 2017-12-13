import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './icon/candles-icon.png';

var data=[
    {
        id:1,
        title: 'Гробы',
        src: 'hearse2-icon.jpg'
    },
    {
        id:2,
        title: 'Венки',
        src: 'wreath-icon.png'
    },
    {
        id:3,
        title: 'Кресты',
        src: 'cross-icon.png'
    },
    {
        id:4,
        title: 'Ограды',
        src: 'fence-icon.png'
    },
    {
        id:5,
        title: 'Одежда',
        src: 'clothes-icon.png'
    },
    {
        id:6,
        title: 'Ритуальные принадлежности',
        src: 'candles-icon.png'
    }
];

ReactDOM.render(<App heroes={data}/>, document.getElementById('root'));
registerServiceWorker();
