import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../providers/AuthProvider';
const useCart = () => {
    const {user} = useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery(['carts', user?.email], async ()=>{
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return res.json()
    })
    return [refetch, cart]
}
export default useCart;