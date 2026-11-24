export interface Event {
    id: number;
    title: string;
    description: string;
    imageURL: string | null;
    startDate: string;
    endDate: string;
    location: string;
    price: number;
    capacity: number;
    availableTickets: number;
    categoryId: number;
    categoryname: number;
}
