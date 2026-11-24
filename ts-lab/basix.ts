type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled";

function orderTotal(
    price: number,
    quantity: number,
    deliveryFee: number = 0): 
    number {
        return price * quantity + deliveryFee;
        }


function isFinalStatus(status: OrderStatus): boolean {
    return status === "done" || status === "cancelled";
}

function parseQuantity(raw: unknown): number | null {
    if (typeof raw === "string") {
        raw = Number(raw);
    }

    if (typeof raw === "number" && Number.isInteger(raw) && raw > 0) {
        return raw;
    }

    return null;
}

function statusLabel(status: OrderStatus): string {
    switch (status) {
        case "new":
            return "Новый";
        case "cooking":
            return "Готовится";
        case "delivering":
            return "В доставке";
        case "done":
            return "Завершён";
        case "cancelled":
            return "Отменён";
    }
}

type Discount = 0 | 5 | 10 | 15;

function applyDiscount(total: number, discount: Discount): number {
    return total - total * discount / 100;
}

// statusLabel("paid");