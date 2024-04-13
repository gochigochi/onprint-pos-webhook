import React, { ReactNode, ErrorInfo } from "react"

type ErrorBoundaryProps = {
  fallback: ReactNode
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props)
      this.state = { hasError: false }
    }
  
    static getDerivedStateFromError(): ErrorBoundaryState {
      return { hasError: true }
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
      console.log(error, info.componentStack)
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.fallback
      }
  
      return this.props.children
    }
  }

  export default ErrorBoundary