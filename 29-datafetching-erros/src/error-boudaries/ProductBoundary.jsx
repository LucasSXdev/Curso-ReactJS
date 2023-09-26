import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function productBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Produto não encontrado!</h2>;
      case 401:
        return <h2>voce não está autorizado a ver esta página</h2>;
      case 400:
        return <h2>parece que há algo de errado na requisição</h2>;
      case 500:
        return <h2>Erro interno no servidor</h2>;
    }
  }

  return <h2>Algo de errado!</h2>;
}
