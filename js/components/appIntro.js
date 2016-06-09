import React from 'react'; //eslint-disable-line

const AppIntro = () =>
    <div
        className='intro align-center'>
        <h1>Simple todo app by JD</h1>
        <p>Please note this app utilises localStorage (if available) to make data persistent</p>
        <p>Browsers support list can be found here: <a href="http://caniuse.com/#search=localstorage">http://caniuse.com/#search=localstorage</a></p>
    </div>;
;

export default AppIntro;
