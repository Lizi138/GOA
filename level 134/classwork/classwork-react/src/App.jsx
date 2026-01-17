import { ErrorBoundary } from 'react-error-boundary'
import Comp from './components/Comp'
import FallbackUI from './components/FallbackUI'

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackUI} >
        <Comp />
        <Comp />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={FallbackUI} >
        <Comp />
      </ErrorBoundary>
      
      <Comp />
    </>
  )
}