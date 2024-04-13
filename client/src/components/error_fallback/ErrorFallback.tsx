import { ReactNode } from "react"

const ErrorFallback = ({ children }: {children: ReactNode}) => {
    return (
        <div>{children}</div>
    )
}

export default ErrorFallback