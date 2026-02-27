const mongoose = require("mongoose");
const Adventurous = require("../models/adventurous");
const Events = require("../models/events");
const Wellness = require("../models/wellness");
const Foods = require("../models/foods");
const Hashtags = require("../models/hashtags");

mongoose.connect("mongodb://localhost:27017/TravelTrek", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(async () => {
    console.log("Connection successful. Seeding data...");

    // Clear existing data
    await Adventurous.deleteMany({});
    await Events.deleteMany({});
    await Wellness.deleteMany({});
    await Foods.deleteMany({});
    await Hashtags.deleteMany({});

    // Seed Adventures
    await Adventurous.insertMany([
        {
            name: "Great Barrier Reef",
            type: "Water Sports",
            location: "Queensland, Australia",
            desc: "Explore the world's largest coral reef system. A kaleidoscopic underwater world teeming with marine life, perfect for diving and snorkeling.",
            image: "/assets/images/great-barrier-reef.jpg",
            cost: "$250",
            bestTimeToVisit: "June to October"
        },
        {
            name: "Swiss Alps Trekking",
            type: "Hiking",
            location: "Zermatt, Switzerland",
            desc: "Experience breathtaking views of the Matterhorn. Pristine alpine meadows, crystal-clear lakes, and challenging trails for every adventurer.",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
            cost: "$120",
            bestTimeToVisit: "July to September"
        },
        {
            name: "African Safari",
            type: "Wildlife",
            location: "Maasai Mara, Kenya",
            desc: "Witness the Great Migration. An unparalleled wildlife experience featuring the Big Five in their natural, vast savannah habitat.",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
            cost: "$500",
            bestTimeToVisit: "July to October"
        },
        {
            name: "Iceland Northern Lights",
            type: "Nature",
            location: "Reykjavik, Iceland",
            desc: "Chase the mystical Aurora Borealis. A life-changing celestial display set against Iceland's dramatic volcanic and glacial landscapes.",
            image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1200&auto=format&fit=crop",
            cost: "$200",
            bestTimeToVisit: "September to March"
        },
        {
            name: "Cherry Blossom Tour",
            type: "Culture",
            location: "Kyoto, Japan",
            desc: "Behold the ethereal beauty of Sakura. Traditional temples and modern gardens painted in delicate shades of pink during peak bloom.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
            cost: "$150",
            bestTimeToVisit: "Late March to Early April"
        }
    ]);

    // Seed Events
    await Events.insertMany([
        {
            name: "Rio Carnival",
            eventType: "Festival",
            location: "Rio de Janeiro, Brazil",
            desc: "The world's biggest party. Explosive samba parades, vibrant costumes, and non-stop street celebrations in the heart of Brazil.",
            imgSrc: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
            time: "February / March"
        },
        {
            name: "Oktoberfest",
            eventType: "Cultural",
            location: "Munich, Germany",
            desc: "The ultimate celebration of Bavarian culture. World-famous beer tents, traditional music, and local delicacies in a joyous atmosphere.",
            imgSrc: "/assets/images/oktoberfest.jpg",
            time: "September / October"
        },
        {
            name: "Holi Festival",
            eventType: "Spiritual",
            location: "Mathura, India",
            desc: "Experience the Festival of Colors. A vibrant celebration of spring and love, where people throw colored powders in a joyful communal gathering.",
            imgSrc: "/assets/images/holi-festival.jpg",
            time: "March"
        },
        {
            name: "SXSW (South by Southwest)",
            eventType: "Tech & Art",
            location: "Austin, Texas",
            desc: "A melting pot of film, interactive media, and music festivals. Where the world's leading innovators and artists gather for inspiration.",
            imgSrc: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
            time: "March"
        }
    ]);

    // Seed Wellness
    await Wellness.insertMany([
        {
            resort_name: "Fivelements Retreat",
            resort_type: "Eco-Wellness",
            resort_location: "Bali, Indonesia",
            resort_desc: "An eco-conscious wellness destination rooted in Balinese philosophy, offering traditional healing, sacred arts, and plant-based cuisine.",
            resort_img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
        },
        {
            resort_name: "Bürgenstock Resort",
            resort_type: "Luxury Spa",
            resort_location: "Lake Lucerne, Switzerland",
            resort_desc: "Suspended 500 meters above Lake Lucerne, this alpine spa offers world-class hydrotherapy and breathtaking views of the Swiss peaks.",
            resort_img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
        },
        {
            resort_name: "Amanemu Onsen",
            resort_type: "Thermal Spa",
            resort_location: "Ise-Shima, Japan",
            resort_desc: "A sanctuary inspired by ancient onsen traditions. Experience the therapeutic benefits of mineral-rich hot springs in a serene forest setting.",
            resort_img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
        }
    ]);

    // Seed Food
    await Foods.insertMany([
        {
            food_name: "Sukiyabashi Jiro",
            food_type: "Traditional Sushi",
            location: "Tokyo, Japan",
            food_description: "Master the art of Edomae-style sushi. An intimate dining experience focused on the purest expression of seafood and vinegared rice.",
            food_img: "/assets/images/sukiyabashi-jiro.jpg"
        },
        {
            food_name: "L'Antica Pizzeria",
            food_type: "Neapolitan Pizza",
            location: "Naples, Italy",
            food_description: "Taste the history of pizza. Traditional wood-fired ovens producing perfect Margheritas with Buffalo mozzarella and fresh basil.",
            food_img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
        },
        {
            food_name: "Pujol",
            food_type: "Modern Mexican",
            location: "Mexico City, Mexico",
            food_description: "Enrique Olvera's masterpiece. Innovative Mexican cuisine that reimagines traditional mole and street tacos with local, seasonal ingredients.",
            food_img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
        }
    ]);

    // Seed Hashtags (Recent Journeys)
    await Hashtags.insertMany([
        { profile_name: "Explorer", profile_img: "https://i.pravatar.cc/150?u=1", post_img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800" },
        { profile_name: "Trekker", profile_img: "https://i.pravatar.cc/150?u=2", post_img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800" },
        { profile_name: "Wanderer", profile_img: "https://i.pravatar.cc/150?u=3", post_img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800" },
        { profile_name: "Nomad", profile_img: "https://i.pravatar.cc/150?u=4", post_img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800" },
        { profile_name: "Voyager", profile_img: "https://i.pravatar.cc/150?u=5", post_img: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=800" }
    ]);

    console.log("Seeding complete. Disconnecting...");
    mongoose.disconnect();
}).catch((err) => {
    console.error("Connection failed:", err);
});
