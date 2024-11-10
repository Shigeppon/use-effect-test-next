import { useEffect } from "react"

export function useFaviconBadge(count: number) {
  useEffect(() => {
    // Faviconのリンク要素を取得
    const favicon = document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement | null
    if (!favicon) return

    // 通知が0の場合、元のFaviconに戻す
    if (count === 0) {
      favicon.href = "/favicon.ico" // 元のFavicon URLを指定
      return
    }

    const faviconUrl = favicon.href

    // 元のFavicon画像を読み込む
    const image = new Image()
    image.src = faviconUrl

    image.onload = () => {
      // Canvasを作成
      const size = 32
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      if (!context) return

      canvas.width = size
      canvas.height = size

      // Faviconの画像をキャンバスに描画
      context.drawImage(image, 0, 0, size, size)

      // 通知バッジが必要な場合にバッジを描画
      if (count > 0) {
        // 赤いバッジの背景を描画
        context.fillStyle = "red"
        context.beginPath()
        context.arc(8, 8, 8, 0, 2 * Math.PI) // バッジの円を描画
        context.fill()

        // 通知数を描画
        context.font = "10px Arial"
        context.fillStyle = "white"
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText(count.toString(), 8, 8) // バッジに通知数を表示
      }

      // キャンバスの画像データをFaviconとして設定
      favicon.href = canvas.toDataURL("image/png")
    }
  }, [count])
}
