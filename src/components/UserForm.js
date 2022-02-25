import Input from './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: '',
    lastname: '',
    email: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    submit(form)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name" label="Name"
        value={form.name}
        placeholder='Nombre'
        onChange={handleChange}
      />
      <Input
        name="lastname" label="Lastname"
        value={form.lastname}
        placeholder='Apellido'
        onChange={handleChange}
      />
      <Input
        name="email" label="Email"
        value={form.email}
        placeholder='Email'
        onChange={handleChange}
      />
      <Button>Enviar</Button>
    </form>
  )
}

export default UserForm