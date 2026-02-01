export type ActivityType = 'activity' | 'travel' | 'food' | 'hotel';

export interface ItineraryItem {
    id: string;
    time: string;
    title: string;
    description?: string;
    location?: string;
    type: ActivityType;
    icon?: string; // Optional custom icon
    duration?: string;
    images?: string[]; // Array of image URLs
}

export interface DayItinerary {
    date: string; // YYYY-MM-DD
    dayLabel: string; // e.g., "Day 1"
    items: ItineraryItem[];
}

export const itineraryData: DayItinerary[] = [
    {
        date: "2024-04-01",
        dayLabel: "Day 1",
        items: [
            {
                id: "1",
                time: "08:00",
                title: "集合出發！",
                description: "大家記得準時喔，帶上好心情！",
                location: "台北車站",
                type: "travel",
                duration: "1 hr",
            },
            {
                id: "2",
                time: "10:00",
                title: "抵達遊樂園",
                description: "先去寄放行李，然後直衝雲霄飛車！",
                location: "Wonderland",
                type: "activity",
                duration: "4 hrs",
            },
            {
                id: "3",
                time: "12:30",
                title: "午餐時間",
                description: "園區內可愛主題餐廳",
                location: "Miffy Cafe",
                type: "food",
                duration: "1.5 hrs",
            },
            {
                id: "4",
                time: "18:00",
                title: "入住飯店",
                description: "休息一下，準備晚餐",
                location: "Grand Hotel",
                type: "hotel",
            },
        ],
    },
];
