import { lazy } from "react"
import { useNearScreen } from "../../hooks/useNearScreen"
import { Suspense } from "react"
const TrendingSearches = lazy(() => import("./TrendingSearches"))

export default function LazyTrending() {

  const { show, ref } = useNearScreen()

  return (
    <div ref={ref}>
      <Suspense fallback="Cargando......" >
      {show && <TrendingSearches />}
      </Suspense>

    </div>
  )
}