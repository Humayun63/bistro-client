import { useEffect, useState } from "react"

const useMenu = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])
    return [items, loading]
}

export default useMenu;