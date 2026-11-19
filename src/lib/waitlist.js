/**
 * Waitlist integration boundary.
 * Set VITE_WAITLIST_ENDPOINT in `.env` to enable submissions.
 * Expected request: POST JSON { email, source, consentedAt }
 */
export function getWaitlistEndpoint() {
  const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT
  return typeof endpoint === 'string' && endpoint.trim().length > 0
    ? endpoint.trim()
    : null
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
}

export async function submitWaitlist({ email, source = 'crave-homepage' }) {
  const endpoint = getWaitlistEndpoint()

  if (!endpoint) {
    return {
      ok: false,
      code: 'NOT_CONFIGURED',
      message:
        'Waitlist signup is not connected yet. Add VITE_WAITLIST_ENDPOINT to enable submissions.',
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      source,
      consentedAt: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    let detail = 'Something went wrong. Please try again.'
    try {
      const data = await response.json()
      if (data?.message) detail = data.message
    } catch {
      /* ignore non-JSON */
    }
    return { ok: false, code: 'REQUEST_FAILED', message: detail }
  }

  return {
    ok: true,
    code: 'SUCCESS',
    message: "You're on the list. We'll be in touch.",
  }
}
