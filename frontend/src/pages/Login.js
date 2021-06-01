import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { FaFacebookSquare, AiFillGoogleSquare } from 'react-icons/all';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, signInWithGoogle, signInWithFacebook } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  async function handleSignWithGoogle() {
    try {
      setError("")
      setLoading(true)
      await signInWithGoogle();
      history.push("/")
    } catch (err) {
      //da pra fazer condicoes com o erro e mandar msg personalizada de erro com o set error
      setError("Failed to log in")
    }
    setLoading(false)

  }


  async function handleSignWithFacebook() {
    try {
      setError("")
      setLoading(true)
      await signInWithFacebook();
      history.push("/")
    } catch (err) {
      //da pra fazer condicoes com o erro e mandar msg personalizada de erro com o seterror
      setError("Failed to log in")
    }
    setLoading(false)

  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="bg-dark text-white">
          <Card.Header>
            <Button disabled={loading} variant="outline-light" className="w-100" onClick={handleSignWithGoogle}>
              <AiFillGoogleSquare  style={{ position: 'absolute', left: '10%'}} size={25} />
              Sign in with google
            </Button>
            <Button  disabled={loading} variant="outline-light" className="w-100 mt-2" onClick={handleSignWithFacebook}>
              <FaFacebookSquare style={{ position: 'absolute', left: '10%'}} size={24} />
              Sign in with facebook
            </Button>
          </Card.Header>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} variant="outline-light" className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link className="text-light" to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2 text-light">
          Need an account? <Link className="text-light font-weight-bold" to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  )
}
