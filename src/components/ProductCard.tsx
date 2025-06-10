import styles from "./ProductCard.module.css";

type Currency = "RUB" | "USD" | "EUR";

type ProductCardProps = {
    title: string;
    origin: string;
    price: number;
    currency: Currency;
    imageUrl: string;
};

const formatPrice = (price: number, currency: Currency): string => {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(price);
};

export const ProductCard = (props: ProductCardProps) => {
    const { title, origin, price, currency, imageUrl } = props;
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.origin}>Страна:{origin}</p>
                <p className={styles.price}>{formatPrice(price, currency)}</p>
            </div>
        </div>
    );
};
