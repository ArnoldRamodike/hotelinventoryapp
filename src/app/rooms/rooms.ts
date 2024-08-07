export interface Room {
    totalRooms?: number;
    availableRooms: Number;
    bookedRooms: number;

}

export interface RoomList {
    roomNumber?: string;
    roomType: string;
    ameneties: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}