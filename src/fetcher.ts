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
    const info = await response.json()
    throw new Error(
      `[${response.status}] An error occurred while performing this request: ${info}`
    )
  }

  return response.json()
}
