import "./HomePage.css"
import { ProductLine } from "../../components/ProductsLine/ProductLine.jsx";
import { useProducts } from "../../hooks/use-products.js";
import { Outlet } from "react-router-dom";

function getLines(products, linesAmount, lineSize) {
  const allLines = []
  let line = []
  let currentIndex = 0;

  for (let i = 0; i < linesAmount; i++) {
    const animationClass = (i % 2 === 0) ? "move-to-left" : "move-to-right";
    allLines.push({line: [], code: i, animationClass: animationClass})
  }

  for (let i = 0; i < products.length; i++) {
    line.push(products[i])

    if ((i + 1) % lineSize === 0) {
      allLines[currentIndex].line = line;
      line = []
      currentIndex += 1
    }
  }

  return allLines;
}

function HomePage() {
  const { products } = useProducts();

  const allLines = getLines(products, 2, 10)
  return (
    <main className="main-screen-container">
      {allLines.map(line => <ProductLine key={line.code} products={line.line} animationClass={line.animationClass} />)}
      <Outlet context={[products]} />
    </main>
  )
}

export { HomePage }