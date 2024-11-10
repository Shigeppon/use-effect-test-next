import { useState, useEffect } from "react"

export function usePageVisibility(): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(!document.hidden)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    // visibilitychangeイベントリスナーを追加
    document.addEventListener("visibilitychange", handleVisibilityChange)

    // クリーンアップ
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return isVisible
}
