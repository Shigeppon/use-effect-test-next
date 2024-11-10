import { useEffect } from "react"

export function useFaviconBadge(count: number) {
  useEffect(() => {
    // Faviconの画像を取得
    const favicon = document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement | null
    if (!favicon) return
    const faviconUrl = favicon.href

    // 画像を読み込む
    const image = new Image()
    image.src = faviconUrl

    image.onload = () => {
      console.log("in useFaviconBadge", count)
      // Canvasを作成
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      console.log(context)
      if (!context) return
      const size = 32
      canvas.width = size
      canvas.height = size

      // Faviconをキャンバスに描画
      context.drawImage(image, 0, 0, size, size)

      // バッジの表示
      if (count > 0) {
        context.fillStyle = "red"
        context.beginPath()
        context.arc(24, 8, 8, 0, 2 * Math.PI) //バッジの円を描画
        context.fill()

        // 数値を表示
        context.font = "10px Arial"
        context.fillStyle = "white"
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText(count.toString(), 24, 8) //バッジに通知数を表示
      }

      // 新しいFaviconを設定
      favicon.href = canvas.toDataURL("image/png")
    }
  }, [count])
}
