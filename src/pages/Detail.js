import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import UnAuthorized from './UnAuthorized'
import DetailForm from '../components/DetailForm'
import DetailSkeleton from "../components/Skeletons/pages/DetailSkeleton"
function Detail() {
    const { isAuthorized } = useAuth0()
    console.log(isAuthorized)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <div>
            {isAuthorized ? <div>
                {loading ? <DetailSkeleton /> : <DetailForm />}
            </div> : <UnAuthorized></UnAuthorized>}
        </div>

    )
}

export default Detail
