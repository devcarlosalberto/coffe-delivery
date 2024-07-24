import { Link, NotFoundContainer } from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Ocorreu um erro...</h1>
      <p>
        Parece que a página na qual você tentou acessar não existe ou foi
        modificada.
      </p>

      <Link to="/">Voltar para a página principal.</Link>
    </NotFoundContainer>
  )
}
