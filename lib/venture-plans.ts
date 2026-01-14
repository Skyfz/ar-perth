export interface VentureHouse {
    id: string;
    name: string;
    specs: {
        beds: number;
        baths: number;
        living: number;
        garages: number;
    };
    floorArea: number;
    imageUrl: string;
    floorPlanUrl: string;
    startingPrice: number;
}

export const ventureHouses: VentureHouse[] = [
    {
        id: "amsterdam",
        name: "Amsterdam",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 212,
        imageUrl: "/designs/AMSTERDAM_Render.png",
        floorPlanUrl: "/designs/AMSTERDAM_Plan.png",
        startingPrice: 350000
    },
    {
        id: "athens",
        name: "Athens",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 121,
        imageUrl: "/designs/ATHENS_Render.png",
        floorPlanUrl: "/designs/ATHENS_Plan.png",
        startingPrice: 280000
    },
    {
        id: "belfast",
        name: "Belfast",
        specs: { beds: 3, baths: 2.5, living: 2, garages: 2 },
        floorArea: 196,
        imageUrl: "/designs/BELFAST_Render.png",
        floorPlanUrl: "/designs/BELFAST_Plan.png",
        startingPrice: 295000
    },
    {
        id: "berlin",
        name: "Berlin",
        specs: { beds: 3, baths: 2, living: 2, garages: 2 },
        floorArea: 211,
        imageUrl: "/designs/BERLIN_Render.png",
        floorPlanUrl: "/designs/BERLIN_Plan.png",
        startingPrice: 310000
    },
    {
        id: "brussels",
        name: "Brussels",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 173,
        imageUrl: "/designs/BRUSSELS_Render.png",
        floorPlanUrl: "/designs/BRUSSELS_Plan.png",
        startingPrice: 285000
    },
    {
        id: "budapest",
        name: "Budapest",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 161,
        imageUrl: "/designs/BUDAPEST_Render.png",
        floorPlanUrl: "/designs/BUDAPEST_Plan.png",
        startingPrice: 290000
    },
    {
        id: "cape-town",
        name: "Cape Town",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 213,
        imageUrl: "/designs/CAPE_TOWN_Render.png",
        floorPlanUrl: "/designs/CAPE_TOWN_Plan.png",
        startingPrice: 360000
    },
    {
        id: "chicago",
        name: "Chicago",
        specs: { beds: 4, baths: 2, living: 2, garages: 2 },
        floorArea: 193,
        imageUrl: "/designs/CHICAGO_Render.png",
        floorPlanUrl: "/designs/CHICAGO_Plan.png",
        startingPrice: 375000
    },
    {
        id: "dublin",
        name: "Dublin",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 168,
        imageUrl: "/designs/DUBLIN_Render.png",
        floorPlanUrl: "/designs/DUBLIN_Plan.png",
        startingPrice: 250000
    },
    {
        id: "jakarta",
        name: "Jakarta",
        specs: { beds: 3, baths: 2.5, living: 1, garages: 2 },
        floorArea: 169,
        imageUrl: "/designs/JAKARTA_Render.png",
        floorPlanUrl: "/designs/JAKARTA_Plan.png",
        startingPrice: 270000
    },
    {
        id: "lisbon",
        name: "Lisbon",
        specs: { beds: 4, baths: 2, living: 1, garages: 2 },
        floorArea: 177,
        imageUrl: "/designs/LISBON_Render.png",
        floorPlanUrl: "/designs/LISBON_Plan.png",
        startingPrice: 330000
    },
    {
        id: "london",
        name: "London",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 154,
        imageUrl: "/designs/LONDON_Render.png",
        floorPlanUrl: "/designs/LONDON_Plan.png",
        startingPrice: 295000
    },
    {
        id: "madrid",
        name: "Madrid",
        specs: { beds: 3, baths: 2, living: 2, garages: 2 },
        floorArea: 152,
        imageUrl: "/designs/MADRID_Render.png",
        floorPlanUrl: "/designs/MADRID_Plan.png",
        startingPrice: 305000
    },
    {
        id: "manhattan",
        name: "Manhattan",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 113,
        imageUrl: "/designs/MANHATTAN_Render.png",
        floorPlanUrl: "/designs/MANHATTAN_Plan.png",
        startingPrice: 275000
    },
    {
        id: "melbourne",
        name: "Melbourne",
        specs: { beds: 4, baths: 2, living: 2, garages: 2 },
        floorArea: 212,
        imageUrl: "/designs/MELBOURNE_Render.png",
        floorPlanUrl: "/designs/MELBOURNE_Plan.png",
        startingPrice: 390000
    },
    {
        id: "oslo",
        name: "Oslo",
        specs: { beds: 4, baths: 2, living: 2, garages: 2 },
        floorArea: 212,
        imageUrl: "/designs/OSLO_Render.png",
        floorPlanUrl: "/designs/OSLO_Plan.png",
        startingPrice: 355000
    },
    {
        id: "paris",
        name: "Paris",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 169,
        imageUrl: "/designs/PARIS_Render.png",
        floorPlanUrl: "/designs/PARIS_Plan.png",
        startingPrice: 290000
    },
    {
        id: "prague",
        name: "Prague",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 184,
        imageUrl: "/designs/PRAGUE_Render.png",
        floorPlanUrl: "/designs/PRAGUE_Plan.png",
        startingPrice: 365000
    },
    {
        id: "rome",
        name: "Rome",
        specs: { beds: 4, baths: 2, living: 1, garages: 1 },
        floorArea: 140,
        imageUrl: "/designs/ROME_Render.png",
        floorPlanUrl: "/designs/ROME_Plan.png",
        startingPrice: 260000
    },
    {
        id: "santiago",
        name: "Santiago",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 139,
        imageUrl: "/designs/SANTIAGO_Render.png",
        floorPlanUrl: "/designs/SANTIAGO_Plan.png",
        startingPrice: 245000
    },
    {
        id: "seoul",
        name: "Seoul",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 225,
        imageUrl: "/designs/SEOUL_Render.png",
        floorPlanUrl: "/designs/SEOUL_Plan.png",
        startingPrice: 385000
    },
    {
        id: "stockholm",
        name: "Stockholm",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 164,
        imageUrl: "/designs/STOCKHOLM_Render.png",
        floorPlanUrl: "/designs/STOCKHOLM_Plan.png",
        startingPrice: 295000
    },
    {
        id: "sydney",
        name: "Sydney",
        specs: { beds: 3, baths: 2, living: 2, garages: 2 },
        floorArea: 188,
        imageUrl: "/designs/SYDNEY_Render.png",
        floorPlanUrl: "/designs/SYDNEY_Plan.png",
        startingPrice: 340000
    },
    {
        id: "tokyo",
        name: "Tokyo",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 153,
        imageUrl: "/designs/TOKYO_Render.png",
        floorPlanUrl: "/designs/TOKYO_Plan.png",
        startingPrice: 300000
    },
    {
        id: "toronto",
        name: "Toronto",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 118,
        imageUrl: "/designs/TORONTO_Render.png",
        floorPlanUrl: "/designs/TORONTO_Plan.png",
        startingPrice: 265000
    },
    {
        id: "tuscany",
        name: "Tuscany",
        specs: { beds: 4, baths: 2, living: 1, garages: 1 },
        floorArea: 129,
        imageUrl: "/designs/TUSCANY_Render.png",
        floorPlanUrl: "/designs/TUSCANY_Plan.png",
        startingPrice: 325000
    },
    {
        id: "vienna",
        name: "Vienna",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 216,
        imageUrl: "/designs/VIENNA_Render.png",
        floorPlanUrl: "/designs/VIENNA_Plan.png",
        startingPrice: 360000
    },
    {
        id: "washington",
        name: "Washington",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 174,
        imageUrl: "/designs/WASHINGTON_Render.png",
        floorPlanUrl: "/designs/WASHINGTON_Plan.png",
        startingPrice: 315000
    }
];
