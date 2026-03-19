'use client'

import { useEffect, useRef } from 'react'

const PALETTE = ['#A32787', '#6B2E7E', '#602F7B', '#353572', '#b040c0', '#c855d4']
const FONT_SIZE = 14

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    let cols = 0
    let drops: number[] = []
    let columnColors: string[] = []
    let columnSpeeds: number[] = []
    let animId: number

    function init() {
      W = canvas!.width  = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
      cols         = Math.floor(W / FONT_SIZE)
      drops        = Array.from({ length: cols }, () => Math.random() * -(H / FONT_SIZE))
      columnColors = Array.from({ length: cols }, () => PALETTE[Math.floor(Math.random() * PALETTE.length)])
      columnSpeeds = Array.from({ length: cols }, () => 0.08 + Math.random() * 0.22)
    }

    function loop() {
      ctx!.fillStyle = 'rgba(14, 11, 26, 0.15)'
      ctx!.fillRect(0, 0, W, H)
      ctx!.font = `bold ${FONT_SIZE}px 'Courier New', monospace`

      for (let i = 0; i < cols; i++) {
        const y = Math.floor(drops[i]) * FONT_SIZE
        if (y < 0) { drops[i] += columnSpeeds[i]; continue }

        const col = columnColors[i]
        const trailLen = 18 + Math.floor(Math.random() * 8)

        for (let t = trailLen; t >= 1; t--) {
          const ty = y - t * FONT_SIZE
          if (ty < 0) continue
          const alpha = (1 - t / trailLen) * 0.75
          ctx!.shadowBlur = 0
          ctx!.fillStyle  = col + Math.round(alpha * 255).toString(16).padStart(2, '0')
          ctx!.fillText(Math.random() > 0.5 ? '1' : '0', i * FONT_SIZE, ty)
        }

        ctx!.shadowBlur  = 16
        ctx!.shadowColor = col
        ctx!.fillStyle   = '#ffffff'
        ctx!.fillText(Math.random() > 0.5 ? '1' : '0', i * FONT_SIZE, y)
        ctx!.shadowBlur  = 0

        drops[i] += columnSpeeds[i]

        if (y > H && Math.random() > 0.975) {
          drops[i]        = -Math.floor(Math.random() * 20)
          columnColors[i] = PALETTE[Math.floor(Math.random() * PALETTE.length)]
          columnSpeeds[i] = 0.08 + Math.random() * 0.22
        }
        if (Math.random() < 0.001) {
          columnColors[i] = PALETTE[Math.floor(Math.random() * PALETTE.length)]
        }
      }
      animId = requestAnimationFrame(loop)
    }

    init()
    loop()

    const handleResize = () => { init() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.55,
      }}
    />
  )
}
