import MainRouter from "./routes"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Admin from "./page/Admin"
import News from "./page/News"
import DetailNews from "./page/DetailNews"

export default function App() {
  return (
    <div>
      <MainRouter />
    </div>
  )
}