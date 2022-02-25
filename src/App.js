import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'


function App() {
  const [users, setUsers] = useState([])
  const [form, handleChange, reset] = useForm({
    name: '',
    lastname: '',
    email: '',
  })

  const submit = e => {
    e.preventDefault()
    setUsers([
      ...users,
      form
    ])
    reset()
  }

  console.info(form, users)
  return (
    <Container>
      <Card>
        <form onSubmit={submit}>
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
      </Card>
      <Card>
        <ul>
          {users.map(x => <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>)}
        </ul>
      </Card>
    </Container>
  );
}

export default App