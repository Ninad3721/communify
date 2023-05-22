import { useAuth0 } from '@auth0/auth0-react'
import UnAuthorized from './UnAuthorized'
import DetailForm from '../components/DetailForm'

function Detail() {
    const { isAuthorized } = useAuth0()
    console.log(isAuthorized)
    return (
        <div>
            {(!isAuthorized) ? <UnAuthorized />
                : <div><DetailForm /></div>}
        </div>
    )
}

export default Detail
