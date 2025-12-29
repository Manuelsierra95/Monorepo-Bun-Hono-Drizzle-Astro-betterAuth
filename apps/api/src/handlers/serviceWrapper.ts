type ApiResponse<T> = {
  message?: string
  timestamp?: string
  data?: T
  count?: number
  pagination?: PaginationInfo
  error?: string
  details?: string
}

type PaginationInfo = {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

type PaginatedResult<T> = {
  data: T[]
  pagination: PaginationInfo
}

type ServiceWrapperOptions<T> = {
  operation: () => Promise<T>
  success: {
    message: string
  }
  error: {
    message: string
  }
  onNotFound?: {
    condition: (result: T) => boolean
    message: string
    details: string
  }
}

function isPaginatedResult<T>(result: any): result is PaginatedResult<T> {
  return (
    result &&
    typeof result === 'object' &&
    Array.isArray(result.data) &&
    result.pagination &&
    typeof result.pagination === 'object' &&
    typeof result.pagination.currentPage === 'number'
  )
}

export async function serviceWrapper<T>(
  options: ServiceWrapperOptions<T>
): Promise<ApiResponse<T>> {
  try {
    const result = await options.operation()

    if (options.onNotFound && options.onNotFound.condition(result)) {
      return {
        error: options.onNotFound.message,
        details: options.onNotFound.details,
      }
    }

    // With pagination structure
    if (isPaginatedResult(result)) {
      return {
        message: options.success.message,
        timestamp: new Date().toISOString(),
        data: result.data as T,
        pagination: result.pagination,
      }
    }

    // With regular (non-paginated) structure
    return {
      message: options.success.message,
      timestamp: new Date().toISOString(),
      data: result,
      count: Array.isArray(result) ? (result as unknown[]).length : undefined,
    }
  } catch (e) {
    const error = e instanceof Error ? e.message : String(e)
    return {
      error: options.error.message,
      details: error,
    }
  }
}
