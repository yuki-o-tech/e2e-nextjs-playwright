'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const MonitorSession = () => {
  const router = useRouter()
  const { data: session } = useSession()
  useEffect(() => {
    // ユーザーが変更になった場合は、新しいユーザーに対応したデーターを新しく取得する必要がありますので、
    // こちらのrouter.refreshを実行することによってサーバーコンポーネントを再度実行して最新値をデーターfetchするようにしています。
    router.refresh()
  }, [session])
  return null
}

export default MonitorSession
