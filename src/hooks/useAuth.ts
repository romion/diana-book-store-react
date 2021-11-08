import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {selectCurrentUser} from "../shared/slices/authSlice";

export const useAuth = () => {
    const user = useSelector(selectCurrentUser)

    return useMemo(() => {
        console.log(user);
        return {user}
    }, [user])
}
