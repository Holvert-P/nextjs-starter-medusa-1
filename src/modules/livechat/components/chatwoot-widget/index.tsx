"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
  }
}

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(function (d: Document, t: string) {
        const BASE_URL = "https://app.chatwoot.com"
        const g = d.createElement(t) as HTMLScriptElement
        const s = d.getElementsByTagName(t)[0]
        g.src = `${BASE_URL}/packs/js/sdk.js`
        g.defer = true
        g.async = true
        s.parentNode?.insertBefore(g, s)
        g.onload = () => {
          if (window.chatwootSDK) {
            window.chatwootSDK.run({
              websiteToken: "RAcTjcYLvTowFhy1zvgUwkHy", // por favor, añade tu token de sitio web aquí
              baseUrl: BASE_URL,
            })
          }
        }
      })(document, "script")
    }
  }, [])

  return null
}

export default ChatwootWidget
