import { AuthActions } from "core/constant"

const authSearchParamsGuard = (location: Location) => {
    const searchParams = new URLSearchParams(location.search)
    const action = searchParams.get('action')

    if (searchParams.size === 0) {
        return
    }

    if (action && Object.values(AuthActions).includes(action)) {
        if (searchParams.size > 1) {
            location.search = `action=${action}`
        }

        return
    }

    location.replace('/auth')

    return
}

export const authLoader = () => {
    const location = window.location

    authSearchParamsGuard(location)

    return null
}
