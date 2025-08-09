'use client'

import { useEffect } from 'react'

export default function ServiceWorkerCleanup() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // 로컬 개발 환경에서만 동작
    if (location.hostname !== 'localhost') return

    const run = async () => {
      try {
        // 기존 서비스 워커 해제
        if ('serviceWorker' in navigator) {
          const regs = await navigator.serviceWorker.getRegistrations()
          await Promise.all(regs.map((r) => r.unregister()))
        }

        // 기존 캐시 삭제
        if ('caches' in window) {
          const keys = await caches.keys()
          await Promise.all(keys.map((k) => caches.delete(k)))
        }

        // 첫 진입에 자동으로 한 번 새로고침해 최신 리소스 강제 로드
        if (!sessionStorage.getItem('swCleanupReloaded')) {
          sessionStorage.setItem('swCleanupReloaded', '1')
          location.reload()
        } else {
          // 다음 방문을 위해 플래그 초기화
          sessionStorage.removeItem('swCleanupReloaded')
        }
      } catch {}
    }

    // 비동기 실행
    run()
  }, [])

  return null
}


