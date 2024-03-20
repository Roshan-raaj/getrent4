
const sampleListing = [
    {
      title: "Luxury Villa with Ocean View",
      description: "Enjoy breathtaking ocean views from this luxurious villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53371625/original/b230521e-d33c-4c5e-a2ba-d1d5277ade92.jpeg?im_w=720",
      price: 500,
      location: "Malibu",
      country: "United States"
    },
    {
      title: "Secluded Villa Retreat",
      description: "Escape to this secluded villa surrounded by nature.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-604706020372898045/original/2d2f7a32-70d9-4cf8-8f76-7a48b36fcffe.jpeg?im_w=720",
      price: 300,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Modern Villa in the Heart of the City",
      description: "Experience urban luxury in this modern villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-1038970133355880035/original/ece4a91a-20d5-47d9-9199-49259433ecbe.jpeg?im_w=720",
      price: 700,
      location: "Paris",
      country: "France"
    },
    {
      title: "Rustic Villa in the Countryside",
      description: "Unwind in this charming rustic villa surrounded by rolling hills.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-714301393351882379/original/6e24d348-a84b-4b05-b1a8-194a007298ae.jpeg?im_w=720",
      price: 400,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "Private Beachfront Villa",
      description: "Step directly onto the sand from this private beachfront villa.",
      image: "https://a0.muscache.com/im/pictures/0e2a8d2e-8082-43d8-a8ec-323a53b3c03b.jpg?im_w=720",
      price: 600,
      location: "Phuket",
      country: "Thailand"
    },
    {
      title: "Mountain Retreat Villa",
      description: "Escape the hustle and bustle in this tranquil mountain retreat.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-507741036516104287/original/ccab1639-f3af-4ed5-86e5-4935086cec93.jpeg?im_w=720",
      price: 350,
      location: "Aspen",
      country: "United States"
    },
    {
      title: "Historic Villa with a View",
      description: "Stay in this historic villa overlooking the city skyline.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-855668970469413787/original/d6132e5d-c9b4-495d-b400-060019d50c2a.jpeg?im_w=720",
      price: 450,
      location: "Lisbon",
      country: "Portugal"
    },
    {
      title: "Safari Villa Experience",
      description: "Immerse yourself in nature with a stay in this safari-style villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-857636437403223388/original/a537d519-10f3-4955-9223-34e322177188.jpeg?im_w=720",
      price: 800,
      location: "Masai Mara",
      country: "Kenya"
    },
    {
      title: "Beachfront Paradise Villa",
      description: "Experience paradise at this beachfront villa with stunning views.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 900,
      location: "Fiji",
      country: "Fiji"
    },
    {
      title: "Island Villa Retreat",
      description: "Escape to your own private island villa getaway.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 1200,
      location: "Seychelles",
      country: "Seychelles"
    },
    {
      title: "Eco-Friendly Villa in the Rainforest",
      description: "Stay in harmony with nature in this eco-friendly rainforest villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 550,
      location: "Costa Rica",
      country: "Costa Rica"
    },
    {
      title: "Cliffside Villa Retreat",
      description: "Experience breathtaking views from this cliffside villa retreat.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 1000,
      location: "Amalfi Coast",
      country: "Italy"
    },
    {
      title: "Desert Oasis Villa",
      description: "Discover tranquility in the desert at this oasis villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 650,
      location: "Dubai",
      country: "United Arab Emirates"
    },
    {
      title: "Vineyard Villa Experience",
      description: "Indulge in wine country living at this vineyard villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 850,
      location: "Napa Valley",
      country: "United States"
    },
    {
      title: "Ski Chalet Villa",
      description: "Hit the slopes from this cozy ski chalet villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 400,
      location: "Verbier",
      country: "Switzerland"
    },
    {
      title: "Traditional Japanese Villa",
      description: "Experience Japanese hospitality in this traditional villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 600,
      location: "Kyoto",
      country: "Japan"
    },
    {
      title: "Art Deco Villa in Miami",
      description: "Step back in time with a stay in this glamorous Art Deco villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 750,
      location: "Miami",
      country: "United States"
    },
    {
      title: "Luxury Safari Lodge Villa",
      description: "Experience luxury safari living at this lodge-style villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 1100,
      location: "Kruger National Park",
      country: "South Africa"
    },
    {
      title: "Garden Oasis Villa",
      description: "Escape to a tranquil garden oasis in the heart of the city.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 500,
      location: "Sydney",
      country: "Australia"
    },
    {
      title: "Historic Villa in Rome",
      description: "Immerse yourself in history with a stay in this historic villa.",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720",
      price: 700,
      location: "Rome",
      country: "Italy"
    },
    {
      title: "Tropical Rainforest Villa",
      description: "Experience the wonders of the rainforest from this tropical villa.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 800,
      location: "Amazon Rainforest",
      country: "Brazil"
    },
    {
      title: "Lakefront Villa Retreat",
      description: "Relax by the lake at this serene villa retreat.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 600,
      location: "Lake Tahoe",
      country: "United States"
    },
    {
      title: "Hillside Villa with Panoramic Views",
      description: "Enjoy panoramic views from this hillside villa.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 900,
      location: "Cape Town",
      country: "South Africa"
    },
    {
      title: "Tuscan Villa with Vineyard Views",
      description: "Savor Tuscan life at this villa overlooking vineyards.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 950,
      location: "Chianti",
      country: "Italy"
    },
    {
      title: "Riverside Villa Retreat",
      description: "Unwind by the river at this peaceful villa retreat.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 550,
      location: "Mekong Delta",
      country: "Vietnam"
    },
    {
      title: "Santorini Cliff Villa",
      description: "Experience Santorini's iconic cliffs from this villa.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 1200,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Coastal Villa Getaway",
      description: "Escape to the coast at this charming villa getaway.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 700,
      location: "Algarve",
      country: "Portugal"
    },
    {
      title: "Modern Beachfront Villa",
      description: "Experience modern luxury at this beachfront villa.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 850,
      location: "Los Angeles",
      country: "United States"
    },
    {
      title: "Mountain View Villa Retreat",
      description: "Enjoy stunning mountain views from this villa retreat.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 750,
      location: "Swiss Alps",
      country: "Switzerland"
    },
    {
      title: "Spanish Colonial Villa",
      description: "Experience Spanish charm in this colonial-style villa.",
      image: "https://a0.muscache.com/im/pictures/1e9c33fb-fb80-4292-ae35-0675de292bf4.jpg?im_w=720",
      price: 600,
      location: "Barcelona",
      country: "Spain"
    }
]

module.exports ={data: sampleListing}
  