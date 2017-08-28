import React from 'react'
import TotpAuthenticator from '../containers/TotpAuthenticator';

export const SecondFactorAuthenticator = (props) => {
    console.log(props);
    switch(props.type) {
        case "totp":
            return <TotpAuthenticator/>;
        default: 
            return (
                <div className="error">
                    Invalid authenticator.
                </div>
            )
    }
}

export default SecondFactorAuthenticator