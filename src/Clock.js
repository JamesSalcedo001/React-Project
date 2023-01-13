import {useState, useEffect} from "react"

function Clock() {
    const [date, setDate] = useState(new Date())

    function clockChange() {
        setDate(new Date())
    }

    useEffect(() => {
        const timer = setInterval(clockChange, 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    }, [])

    return (
        <span id="clock"> {date.toLocaleTimeString()}</span>
    )
}

export default Clock;