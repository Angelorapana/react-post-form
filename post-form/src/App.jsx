import { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const aggiornamento = (e) => {
    const name = e.target.name
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const preventDefaultSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      author: "",
      title: "",
      body: "",
      public: false
    })
  }

  return (
    <form onSubmit={preventDefaultSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={aggiornamento}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={aggiornamento}
      />

      <input
        name="body"
        placeholder="Body"
        value={formData.body}
        onChange={aggiornamento}
      />

      <label>
        Pubblico:
        <input
          type="checkbox"
          name="public"
          checked={formData.public}
          onChange={aggiornamento}
        />
      </label>

      <button type="submit">Invia</button>

    </form>
  )
}

export default App