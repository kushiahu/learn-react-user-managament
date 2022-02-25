import { useState } from "react"

const useForm = (initial) => {
  const [form, seTform] = useState(initial)
  const handleChange = (e) => {
    seTform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const reset = () => {
    seTform(initial)
  }  
  return [form, handleChange, reset]
}

export default useForm