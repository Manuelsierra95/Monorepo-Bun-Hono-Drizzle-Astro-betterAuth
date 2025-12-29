let currentHeaders: Headers | null = null

export function setRequestHeaders(headers: Headers) {
  currentHeaders = headers
}

export function getRequestHeaders(): Headers | null {
  return currentHeaders
}
