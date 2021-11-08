import { useProtectedMutation } from '../shared/services/AuthService'
import {Button, Card} from "antd";

export function ProtectedComponent() {
    const [attemptAccess, { data, error, isLoading }] = useProtectedMutation()

    return (
        <Card>
            <Button onClick={() => attemptAccess()} loading={isLoading}>
                Make an authenticated request
            </Button>
            {data ? (
                <>
                    Data:
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </>
            ) : error ? (
                <>
                    Error: <pre>{JSON.stringify(error, null, 2)}</pre>
                </>
            ) : null}
        </Card>
    )
}
