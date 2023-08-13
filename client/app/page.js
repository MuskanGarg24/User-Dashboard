import AuthChecker from "./components/AuthChecker";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <AuthChecker>
      <LoginForm />
    </AuthChecker>
  )
}
