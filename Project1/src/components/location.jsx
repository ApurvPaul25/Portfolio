import { useEffect, useState } from "react"

export default function Location(){
const [coords, setCoords] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setCoords({
        lat: parseFloat(pos.coords.latitude.toFixed(2)),
        lng: parseFloat(pos.coords.longitude.toFixed(2))
      })
    },
    (err) => {
      setError("Location denied/Unavailable")
    }
  )
}, [])

return { coords, error }
}