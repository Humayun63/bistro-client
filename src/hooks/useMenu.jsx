import { useEffect, useState } from "react"
import { useQuery } from "react-query";

const useMenu = () => {
    // const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setItems(data)
    //             setLoading(false)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    const {data:items = [], isLoading:loading, refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/menu')
            return res.json()
        }
    })

    return [items, loading, refetch]
}

export default useMenu;