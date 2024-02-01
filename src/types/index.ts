// интерфейс, описывающий карточку товара
export interface ILotItem {
    id: string;
    title: string;
    category: string;
    description?: string;
    image: string;
    price: string | number;
}

export type ILot = ILotItem;

// интерфейс описания товара
export interface IAppState {
    catalog: ILot[];
    basket: string[];
    preview: string | null;
    order: IOrder | null;
    loading: boolean;
}

// Интерфейс для формы заказа
export interface IOrderForm {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
}

// Интерфейс для контактной формы
export interface IContactForm {
    email: string;
    phone: string;
}

//Интерфейс для формы
export interface IOrder extends IOrderForm{
    total: number,
    items: string[];
}

export type FormErrors = Partial<Record<keyof IOrder, string>>;

export interface IOrderResult {
    id: string;
}

export interface IBid {
    price: number
}