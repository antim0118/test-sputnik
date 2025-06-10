import type { ReactElement } from "react";
import { ProductCard } from "./components/ProductCard";

function App() {
    const cards: ReactElement[] = [];
    for (let i = 0; i < 50; i++) {
        cards.push(
            <ProductCard
                key={i}
                title="Название товара"
                origin="Россия"
                price={Math.random() * 5000 + 1000}
                currency={i % 2 == 0 ? "RUB" : "USD"}
                imageUrl="https://img.hhcdn.ru/employer-logo/7306670.png"
            />
        );
    }

    return <div className="container">{cards}</div>;
}

export default App;
