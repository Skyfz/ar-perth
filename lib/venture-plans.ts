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
        imageUrl: "/api/private-images/designs/AMSTERDAM_Render.png",
        floorPlanUrl: "/api/private-images/designs/AMSTERDAM_Plan.png",
        startingPrice: 350000
    },
    {
        id: "athens",
        name: "Athens",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 121,
        imageUrl: "/api/private-images/designs/ATHENS_Render.png",
        floorPlanUrl: "/api/private-images/designs/ATHENS_Plan.png",
        startingPrice: 280000
    },
    {
        id: "belfast",
        name: "Belfast",
        specs: { beds: 3, baths: 2.5, living: 2, garages: 2 },
        floorArea: 196,
        imageUrl: "/api/private-images/designs/BELFAST_Render.png",
        floorPlanUrl: "/api/private-images/designs/BELFAST_Plan.png",
        startingPrice: 295000
    },
    {
        id: "berlin",
        name: "Berlin",
        specs: { beds: 3, baths: 2, living: 2, garages: 2 },
        floorArea: 211,
        imageUrl: "/api/private-images/designs/BERLIN_Render.png",
        floorPlanUrl: "/api/private-images/designs/BERLIN_Plan.png",
        startingPrice: 310000
    },
    {
        id: "brussels",
        name: "Brussels",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 173,
        imageUrl: "/api/private-images/designs/BRUSSELS_Render.png",
        floorPlanUrl: "/api/private-images/designs/BRUSSELS_Plan.png",
        startingPrice: 285000
    },
    {
        id: "budapest",
        name: "Budapest",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 161,
        imageUrl: "/api/private-images/designs/BUDAPEST_Render.png",
        floorPlanUrl: "/api/private-images/designs/BUDAPEST_Plan.png",
        startingPrice: 290000
    },
    {
        id: "cape-town",
        name: "Cape Town",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 213,
        imageUrl: "/api/private-images/designs/CAPE_TOWN_Render.png",
        floorPlanUrl: "/api/private-images/designs/CAPE_TOWN_Plan.png",
        startingPrice: 360000
    },
    {
        id: "chicago",
        name: "Chicago",
        specs: { beds: 4, baths: 2, living: 2, garages: 2 },
        floorArea: 193,
        imageUrl: "/api/private-images/designs/CHICAGO_Render.png",
        floorPlanUrl: "/api/private-images/designs/CHICAGO_Plan.png",
        startingPrice: 375000
    },
    {
        id: "dublin",
        name: "Dublin",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 168,
        imageUrl: "/api/private-images/designs/DUBLIN_Render.png",
        floorPlanUrl: "/api/private-images/designs/DUBLIN_Plan.png",
        startingPrice: 250000
    },
    {
        id: "jakarta",
        name: "Jakarta",
        specs: { beds: 3, baths: 2.5, living: 1, garages: 2 },
        floorArea: 169,
        imageUrl: "/api/private-images/designs/JAKARTA_Render.png",
        floorPlanUrl: "/api/private-images/designs/JAKARTA_Plan.png",
        startingPrice: 270000
    },
    {
        id: "lisbon",
        name: "Lisbon",
        specs: { beds: 4, baths: 2, living: 1, garages: 2 },
        floorArea: 177,
        imageUrl: "/api/private-images/designs/LISBON_Render.png",
        floorPlanUrl: "/api/private-images/designs/LISBON_Plan.png",
        startingPrice: 330000
    },
    {
        id: "london",
        name: "London",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 154,
        imageUrl: "/api/private-images/designs/LONDON_Render.png",
        floorPlanUrl: "/api/private-images/designs/LONDON_Plan.png",
        startingPrice: 295000
    },
    {
        id: "madrid",
        name: "Madrid",
        specs: { beds: 3, baths: 2, living: 2, garages: 2 },
        floorArea: 152,
        imageUrl: "/api/private-images/designs/MADRID_Render.png",
        floorPlanUrl: "/api/private-images/designs/MADRID_Plan.png",
        startingPrice: 305000
    },
    {
        id: "manhattan",
        name: "Manhattan",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 113,
        imageUrl: "/api/private-images/designs/MANHATTAN_Render.png",
        floorPlanUrl: "/api/private-images/designs/MANHATTAN_Plan.png",
        startingPrice: 275000
    },
    {
        id: "melbourne",
        name: "Melbourne",
        specs: { beds: 4, baths: 2, living: 2, garages: 2 },
        floorArea: 212,
        imageUrl: "/api/private-images/designs/MELBOURNE_Render.png",
        floorPlanUrl: "/api/private-images/designs/MELBOURNE_Plan.png",
        startingPrice: 390000
    },
    {
        id: "oslo",
        name: "Oslo",
        specs: { beds: 4, baths: 2, living: 2, garages: 2 },
        floorArea: 212,
        imageUrl: "/api/private-images/designs/OSLO_Render.png",
        floorPlanUrl: "/api/private-images/designs/OSLO_Plan.png",
        startingPrice: 355000
    },
    {
        id: "paris",
        name: "Paris",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 169,
        imageUrl: "/api/private-images/designs/PARIS_Render.png",
        floorPlanUrl: "/api/private-images/designs/PARIS_Plan.png",
        startingPrice: 290000
    },
    {
        id: "prague",
        name: "Prague",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 184,
        imageUrl: "/api/private-images/designs/PRAGUE_Render.png",
        floorPlanUrl: "/api/private-images/designs/PRAGUE_Plan.png",
        startingPrice: 365000
    },
    {
        id: "rome",
        name: "Rome",
        specs: { beds: 4, baths: 2, living: 1, garages: 1 },
        floorArea: 140,
        imageUrl: "/api/private-images/designs/ROME_Render.png",
        floorPlanUrl: "/api/private-images/designs/ROME_Plan.png",
        startingPrice: 260000
    },
    {
        id: "santiago",
        name: "Santiago",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 139,
        imageUrl: "/api/private-images/designs/SANTIAGO_Render.png",
        floorPlanUrl: "/api/private-images/designs/SANTIAGO_Plan.png",
        startingPrice: 245000
    },
    {
        id: "seoul",
        name: "Seoul",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 225,
        imageUrl: "/api/private-images/designs/SEOUL_Render.png",
        floorPlanUrl: "/api/private-images/designs/SEOUL_Plan.png",
        startingPrice: 385000
    },
    {
        id: "stockholm",
        name: "Stockholm",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 164,
        imageUrl: "/api/private-images/designs/STOCKHOLM_Render.png",
        floorPlanUrl: "/api/private-images/designs/STOCKHOLM_Plan.png",
        startingPrice: 295000
    },
    {
        id: "sydney",
        name: "Sydney",
        specs: { beds: 3, baths: 2, living: 2, garages: 2 },
        floorArea: 188,
        imageUrl: "/api/private-images/designs/SYDNEY_Render.png",
        floorPlanUrl: "/api/private-images/designs/SYDNEY_Plan.png",
        startingPrice: 340000
    },
    {
        id: "tokyo",
        name: "Tokyo",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 153,
        imageUrl: "/api/private-images/designs/TOKYO_Render.png",
        floorPlanUrl: "/api/private-images/designs/TOKYO_Plan.png",
        startingPrice: 300000
    },
    {
        id: "toronto",
        name: "Toronto",
        specs: { beds: 3, baths: 2, living: 1, garages: 1 },
        floorArea: 118,
        imageUrl: "/api/private-images/designs/TORONTO_Render.png",
        floorPlanUrl: "/api/private-images/designs/TORONTO_Plan.png",
        startingPrice: 265000
    },
    {
        id: "tuscany",
        name: "Tuscany",
        specs: { beds: 4, baths: 2, living: 1, garages: 1 },
        floorArea: 129,
        imageUrl: "/api/private-images/designs/TUSCANY_Render.png",
        floorPlanUrl: "/api/private-images/designs/TUSCANY_Plan.png",
        startingPrice: 325000
    },
    {
        id: "vienna",
        name: "Vienna",
        specs: { beds: 4, baths: 2.5, living: 2, garages: 2 },
        floorArea: 216,
        imageUrl: "/api/private-images/designs/VIENNA_Render.png",
        floorPlanUrl: "/api/private-images/designs/VIENNA_Plan.png",
        startingPrice: 360000
    },
    {
        id: "washington",
        name: "Washington",
        specs: { beds: 3, baths: 2, living: 1, garages: 2 },
        floorArea: 174,
        imageUrl: "/api/private-images/designs/WASHINGTON_Render.png",
        floorPlanUrl: "/api/private-images/designs/WASHINGTON_Plan.png",
        startingPrice: 315000
    }
];
