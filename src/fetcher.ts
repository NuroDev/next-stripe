interface FetcherOptions<T> {
  body?: T
  method:
    | 'GET'
    | 'POST'
    | 'HEAD'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | 'TRACE'
    | 'PATCH'
  url: string
}

export async function fetcher<
  T = {
    body: object
  }
>({ body, method = 'GET', url }: FetcherOptions<T>) {
  const response = await fetch(url, {
    method,
    headers: new Headers({ 'Content-Type': 'application/json' }),
    ...(body && {
      body: JSON.stringify(body)
    })
  })

  if (!response.ok) {
    const error = new Error('An error occurred while performing this request.')

    // TODO: Refactor passing response json / status to error
    // error.info = await response.json();
    // error.status = response.status;

    throw error
  }

  return response.json()
}
