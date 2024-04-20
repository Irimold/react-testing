import { Button } from '@irimold/react-component'
import "@irimold/react-component/dist/style.css"
import './App.css'
import { FilledAssets } from '@irimold/react-icons'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="text-center">
                Count: { count }
            </div>
            <Button
                leftIcon={FilledAssets}
                onClick={() => setCount(count + 1)}
            >
                Test button
            </Button>
        </>
    )
}

export default App
