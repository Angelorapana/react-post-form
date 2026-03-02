import { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  return (
    <form>
      <input
        type="text"
        name="author"
      />

      <input
        type="text"
        name="title"
      />

      <textarea
        name="body"
      />

      <input
        type="checkbox"
        name="public"
      />

      <button type="submit">Invia</button>
    </form>
  )
}

export default App
