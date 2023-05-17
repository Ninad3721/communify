import { useAuth0 } from '@auth0/auth0-react'
import UnAuthorized from './UnAuthorized'

function Detail() {
    const { isAuthorized } = useAuth0()
    console.log(isAuthorized)
    return (
        <div>
            {(!isAuthorized) ? <UnAuthorized />
                : <div></div>}
        </div>
    )
}

export default Detail
