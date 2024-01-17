import { Suspense, useState } from "react"
import { getContacts } from "./api"

function App() {
  return (
    <>
      <h1>Contacts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactList />
      </Suspense>
    </>
  )
}

function ContactList() {
  const contacts = getContacts()

  return (
    <ul>
      {contacts.map(({ id, name, email }) => (
        <li key={id}>
          <ContactItem name={name} email={email} />
        </li>
      ))}
    </ul>
  )
}

type ContactItemProps = {
  name: string
  email: string
}

function ContactItem({ name, email }: ContactItemProps) {
  const [color, setColor] = useState("blue")

  const handleClick = () => {
    console.log("clicked")

    if (color === "red") {
      setColor("blue")
    } else {
      setColor("red")
    }

    // 拡張性と可読性の低い書き方
    // if (color === "red") setColor("blue")
    // else setColor("red")
  }

  return (
    <div style={{ color: color }} onClick={handleClick}>
      {name} | {email}
    </div>
  )
}

export default App
