export type ItineraryItem = {
    time: string;
    title: string;
    note?: string;
    locationQuery: string; // For Google Maps link
};

export type DayItinerary = {
    day: string;
    title: string;
    date: string; // e.g., "Day 1", "Day 2" or actual dates if we had them
    items: ItineraryItem[];
};

export const itineraryData: DayItinerary[] = [
    {
        day: "Day 1",
        title: "第一天｜出發・開心的開始",
        date: "第一天",
        items: [
            {
                time: "09:00",
                title: "集合出發民主火雞肉飯 🚗",
                note: "記得帶好錢包與好心情",
                locationQuery: "嘉義民主火雞肉飯",
            },
            {
                time: "12:30",
                title: "出發王氏魚皮🍽️",
                note: "記得先買飲料",
                locationQuery: "台南王氏魚皮",
            },
            {
                time: "14:10",
                title: "前往民宿 🏡",
                note: "Check-in",
                locationQuery: "708臺南市安平區建平六街110巷25號",
            },
            {
                time: "16:00",
                title: "前往漁光島",
                note: "看風景",
                locationQuery: "台南漁光島",
            },
            {
                time: "17:30",
                title: "前往同記安平豆花",
                note: "好吃豆花",
                locationQuery: "同記安平豆花",
            },
            {
                time: "18:00",
                title: "前往阿裕牛肉鍋",
                note: "吃完回民宿休息",
                locationQuery: "阿裕牛肉涮涮鍋",
            },
            {
                time: "11:50",
                title: "前往永樂牛肉湯",
                note: "一人吃5碗",
                locationQuery: "台南永樂牛肉湯",
            },
        ],
    },
    {
        day: "Day 2",
        title: "第二天｜最精彩的一天",
        date: "第二天",
        items: [
            {
                time: "12:00",
                title: "丹丹漢堡 ☀️",
                note: "美味丹丹",
                locationQuery: "丹丹漢堡成功店",
            },
            {
                time: "13:00",
                title: "前往捲尾家",
                note: "排隊美食 🎒",
                locationQuery: "台南捲尾家",
            },
            {
                time: "15:00",
                title: "前往林家茂子白糖粿",
                note: "❤️好吃阿粿❤️",
                locationQuery: "林家茂子白糖粿",
            },
            {
                time: "15:10",
                title: "出發頂頭額沙洲",
                note: "哇~這裡風景最美🌙",
                locationQuery: "頂頭額沙洲",
            },
            {
                time: "17:00",
                title: "回住宿休息",
                note: "休息一下",
                locationQuery: "708臺南市安平區建平六街110巷25號", // Same accommodation
            },
            {
                time: "19:00",
                title: "前往武聖夜市",
                note: "猜輸的玩海盜船",
                locationQuery: "台南武聖夜市",
            },
            {
                time: "23:30",
                title: "鬍鬚忠牛肉湯",
                note: "再喝5碗",
                locationQuery: "700臺南市中西區民族路三段91號",
            },
        ],
    },
    {
        day: "Day 3",
        title: "第三天｜回程・滿滿回憶",
        date: "第三天",
        items: [
            {
                time: "11:00",
                title: "阿蓮牛肉湯",
                note: "11:00退房",
                locationQuery: "阿蓮牛肉湯台南公園店",
            },
            {
                time: "12:30",
                title: "安平老街",
                note: "逛老街",
                locationQuery: "安平老街",
            },
            {
                time: "14:00",
                title: "青菜樂園台南鹽行店",
                note: "夾娃娃",
                locationQuery: "青菜樂園台南鹽行店",
            },
            {
                time: "16:00",
                title: "回程 🚗",
                note: "回家 ❤️ (新火車站)",
                locationQuery: "新火車站",
            },
        ],
    },
];
