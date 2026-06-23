export interface HardcodedRoomType {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
  capacity: string;
}

export interface HardcodedReview {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface HardcodedHotel {
  id: number;
  name: string;
  slug: string;
  location: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  amenities: string[];
  roomTypes: HardcodedRoomType[];
  contactPhone: string;
  contactEmail: string;
  contactWhatsApp: string;
  bookingUrl: string;
  nearbyAttractions: { name: string; distance: string }[];
  faqs: { question: string; answer: string }[];
  propertyRules: string[];
  reviews: HardcodedReview[];
}

export const jewelHimalayanHeights: HardcodedHotel = {
  id: 1,
  name: "Jewel Himalayan Heights — Gangtok, Sikkim",
  slug: "jewel-himalayan-heights",
  location: "Gangtok, Sikkim",
  shortDescription:
    "Steps from MG Marg loop. Paljor Stadium Road overlooks. Private balconies facing Kanchenjunga. Premium heated rooms and warm Himalayan hospitality.",
  description: `<p>Jewel Himalayan Heights is a premium family hotel situated on Paljor Stadium Road in the heart of Gangtok, the capital city of Sikkim. Nestled amidst the majestic Himalayas, our hotel offers breathtaking Kanchenjunga valley viewpoints and panoramic mountain vistas, making it the perfect destination for families and holiday travelers seeking a memorable stay in the Northeast.</p>
<p>All our rooms feature premium room heaters to ensure your comfort during the chilly Himalayan nights. The hotel features an elevator for easy access to all floors, 24-hour power backup, and a multi-cuisine restaurant serving delicious local Sikkimese and international dishes. Our friendly staff is dedicated to making your stay comfortable and memorable.</p>
<p>Located just a short walk from MG Marg, Gangtok's famous shopping and dining street, and close to major attractions like the Flower Exhibition Centre and Chogyal Memorial Park, Jewel Himalayan Heights is the ideal base for exploring the beauty of Sikkim. Enjoy local dining options right at your doorstep and wake up to stunning Kanchenjunga sunrise views from your room.</p>`,
  image: "/assets/jewel-himalayan-heights-new.jpg",
  gallery: [],
  amenities: [
    "All Rooms Heated",
    "Elevator",
    "Power Backup",
    "Multi Cuisine Restaurant",
    "Free WiFi",
    "Parking",
    "Mountain View",
    "24h Front Desk",
    "Room Service",
    "Daily Housekeeping",
    "Hot Water",
    "Satellite TV",
    "Tea/Coffee Maker",
    "Safety Deposit Locker",
    "Key Card Entry",
    "Car Rental",
    "Doctor on Call",
    "Fire Alarm",
    "Security Camera",
    "Kids Friendly",
    "Couple Friendly",
    "Smoking Area",
    "Garden",
    "Indoor Games",
  ],
  roomTypes: [
    {
      id: 101,
      name: "Studio Balcony Room",
      description:
        "Our signature room with a private balcony offering panoramic mountain views. Features a comfortable queen bed, modern furnishings, and all essential amenities for a relaxing stay.",
      price: "₹5,500",
      image:
        "https://static.wixstatic.com/media/fa2477_66a114220473482996dbcc0807cb7508~mv2.jpeg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Studio%20Balcony%20Room.jpeg",
      amenities: ["Balcony", "Mountain View", "Heater", "WiFi", "TV"],
      capacity: "2 Adults",
    },
    {
      id: 102,
      name: "Banquet / Event Hall",
      description:
        "With a capacity of 80 persons, our hall provides ample space for meetings, conferences, social events, etc.",
      price: "Contact Us",
      image:
        "https://static.wixstatic.com/media/fa2477_5ecaafd3956a48c59937c3a75a8f55a7~mv2.jpg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Meeting%20Hall.jpg",
      amenities: ["80 Persons", "Conference", "Social Events", "Meetings"],
      capacity: "80 Persons",
    },
  ],
  contactPhone: "+919831206897",
  contactEmail: "info@jeweloftheeastgroup.com",
  contactWhatsApp: "919831206897",
  bookingUrl: "https://himalayanheightshoteljeweloftheeastgroup.bookmystay.io/",
  nearbyAttractions: [
    { name: "Children's Park", distance: "0.13 km" },
    { name: "Gangtok SNT Bus Station", distance: "0.35 km" },
    { name: "Tourism Sikkim Holidays", distance: "0.37 km" },
    { name: "Chogyal Memorial Park", distance: "0.43 km" },
    { name: "Flower Exhibition Centre", distance: "0.43 km" },
    { name: "0 KM Point Gangtok", distance: "0.44 km" },
    { name: "Shri Thakurbari Temple", distance: "0.48 km" },
    { name: "MG Marg Market", distance: "0.50 km" },
  ],
  faqs: [
    {
      question: "What types of rooms are available at your hotel?",
      answer:
        "We have one type of room, Studio Balcony. All the rooms have balcony with mountain view.",
    },
    {
      question: "Are there any special deals or packages available?",
      answer:
        "We offer a variety of Tour packages suiting every budget. Contact us for more information.",
    },
    {
      question: "Do you have a pool or fitness center on-site?",
      answer: "No we do not have a pool or fitness center.",
    },
    {
      question: "Do you offer shuttle service to and from the airport?",
      answer: "We offer Paid transportation on advance booking.",
    },
    {
      question: "Are pets allowed at your hotel?",
      answer: "Pets are strictly not allowed.",
    },
    {
      question: "Are there any restaurants on-site?",
      answer:
        "Yes, we have a restaurant and bar on-site that serves breakfast, lunch, and dinner.",
    },
    {
      question: "Is there a cancellation policy for reservations?",
      answer:
        "Yes, our cancellation policy can be found on our website and varies depending on the type of reservation.",
    },
    {
      question: "Are there any additional fees or taxes?",
      answer:
        "Yes, there may be additional taxes and fees applied to your reservation, which will be outlined during the booking process.",
    },
    {
      question: "What is your check-in and check-out time?",
      answer: "Our check-in time is 1:00 PM and check-out time is 11:00 AM.",
    },
    {
      question: "Do you allow early check in or late check out?",
      answer:
        "Subject to availability, we will try to accommodate your request. If however, rooms are unavailable, you are welcome to make yourself comfortable in the common areas of our property.",
    },
    {
      question: "Are you couple friendly?",
      answer:
        "Yes, all guests regardless of race, cast, colour and creed are welcome to our property as long as they have valid ID cards.",
    },
    {
      question: "How do I make changes to my reservation?",
      answer:
        "You can call or email us for any change requests for your reservation. A dedicated line will be shared with you post booking.",
    },
    {
      question: "What is the WiFi speed?",
      answer:
        "We have wifi coverage throughout the property at 100Mbps. You should be able to stream videos easily on our WiFi.",
    },
  ],
  propertyRules: [
    "Late Check-out allowed subject to availability",
    "Early Check-In allowed subject to availability",
    "Pets are not allowed",
    "Smoking allowed in designated areas",
    "Unmarried couples are allowed",
    "Government ID(s) required at check-in",
    "Local ID(s) allowed",
    "Foreigners are allowed",
    "Visitors are allowed in lobby area",
    "Outside food & Beverage not allowed in rooms",
  ],
  reviews: [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment:
        "Amazing stay with family! The rooms were warm and cozy, and the staff went above and beyond to make us comfortable. The mountain view from the balcony was breathtaking.",
      date: "2024-12-15",
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment:
        "Perfect hotel for families visiting Gangtok. Clean rooms, great food at the restaurant, and very helpful staff. Will definitely come back!",
      date: "2024-11-20",
    },
    {
      name: "Ankit Mehta",
      rating: 4,
      comment:
        "Great location near MG Marg. The heated rooms were a lifesaver in December. Good value for money.",
      date: "2024-10-08",
    },
    {
      name: "Sunita Devi",
      rating: 5,
      comment:
        "We stayed here for 4 nights and loved every moment. The kids enjoyed the indoor games and the garden. Highly recommended for family vacations.",
      date: "2024-09-25",
    },
    {
      name: "Vikram Singh",
      rating: 4,
      comment:
        "Comfortable stay with excellent hospitality. The multi-cuisine restaurant served delicious food. Only suggestion is to improve WiFi speed in some rooms.",
      date: "2024-08-14",
    },
    {
      name: "Neha Gupta",
      rating: 5,
      comment:
        "Best hotel in Gangtok for families! The staff arranged our local sightseeing and made our trip memorable. Thank you Jewel Himalayan Heights!",
      date: "2024-07-30",
    },
  ],
};

export const jewelKongchenRetreat: HardcodedHotel = {
  id: 2,
  name: "Jewel Kongchen Retreat & Spa",
  slug: "jewel-kongchen-retreat",
  location: "Lachung, Sikkim",
  shortDescription:
    "A 4-star mountain sanctuary in Lachung featuring the Asiatic Grill, spa services, backup power infrastructure, and round-the-clock hot water near Yumthang Valley.",
  description: `<p>Jewel Kongchen Retreat & Spa is a 4-star mountain sanctuary nestled in the picturesque village of Lachung, North Sikkim. Designed with elegant mountain sanctuary styling, our retreat is surrounded by snow-capped peaks, lush rhododendron forests, and the pristine Lachung River, offering an authentic Himalayan experience for families and nature lovers.</p>
<p>All our rooms are centrally heated and feature round-the-clock hot water systems to keep you comfortable in the high-altitude climate. The retreat features a rejuvenating spa, an elevator for convenience, robust backup power infrastructure, and the Asiatic Grill restaurant & bar serving delectable local and continental cuisine. Our attentive staff ensures every guest feels at home in this remote paradise.</p>
<p>Located close to the famous Yumthang Valley (Valley of Flowers), Zero Point, and the ancient Lachung Monastery, Jewel Kongchen Retreat is the perfect gateway to explore the untouched beauty of North Sikkim.</p>`,
  image: "/assets/jewel-kongchen-retreat-new.jpg",
  gallery: [],
  amenities: [
    "All Rooms Heated",
    "Elevator",
    "Power Backup",
    "Multi Cuisine Restaurant",
    "Spa & Wellness",
    "Free WiFi",
    "Parking",
    "Mountain View",
    "24h Front Desk",
    "Room Service",
    "Daily Housekeeping",
    "Hot Water",
    "Satellite TV",
    "Tea/Coffee Maker",
    "Safety Deposit Locker",
    "Key Card Entry",
    "Car Rental",
    "Doctor on Call",
    "Fire Alarm",
    "Security Camera",
    "Kids Friendly",
    "Couple Friendly",
    "Smoking Area",
    "Garden",
    "Bonfire",
    "Bar & Lounge",
  ],
  roomTypes: [
    {
      id: 201,
      name: "Superior Family Room",
      description:
        "Spacious family room designed for comfort in the high-altitude climate. Features a king-size bed, additional single bed, mountain views, and spa access.",
      price: "₹4,500",
      image:
        "https://static.wixstatic.com/media/fa2477_4917de633bd34b118d5335974ec36b67~mv2.jpeg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Family%20Room%20in%20Lachung.jpeg",
      amenities: ["Mountain View", "Heater", "WiFi", "TV", "Spa Access"],
      capacity: "3 Adults",
    },
    {
      id: 202,
      name: "Studio Balcony Room",
      description:
        "Cozy studio room with a private balcony overlooking the Lachung River and snow-capped peaks. Perfect for couples seeking a romantic Himalayan getaway.",
      price: "₹5,500",
      image:
        "https://static.wixstatic.com/media/fa2477_2f6b05042fef448480338b72d2f2d2e7~mv2.jpeg/v1/crop/x_78,y_0,w_1443,h_1066/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Balcony%20Room.jpeg",
      amenities: ["Balcony", "River View", "Heater", "WiFi", "TV"],
      capacity: "2 Adults",
    },
    {
      id: 203,
      name: "Deluxe Room",
      description:
        "Premium deluxe room with elegant furnishings, a large comfortable bed, and panoramic mountain views. Includes complimentary spa session.",
      price: "₹6,500",
      image:
        "https://static.wixstatic.com/media/fa2477_635abf9f070b41738f13050b0ac1287c~mv2.jpeg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Deluxe%20Room.jpeg",
      amenities: ["Premium View", "Heater", "WiFi", "TV", "Spa Session"],
      capacity: "2 Adults",
    },
  ],
  contactPhone: "+919831206897",
  contactEmail: "info@jeweloftheeastgroup.com",
  contactWhatsApp: "919831206897",
  bookingUrl: "https://jewelkongchenretreatspa.bookmystay.io/",
  nearbyAttractions: [
    { name: "Lachung Monastery", distance: "0.5 km" },
    { name: "Yumthang Valley", distance: "25 km" },
    { name: "Zero Point (Yumesamdong)", distance: "50 km" },
    { name: "Shingba Rhododendron Sanctuary", distance: "20 km" },
    { name: "Bhima Falls", distance: "2 km" },
    { name: "Chungthang", distance: "22 km" },
    { name: "Singba Forest", distance: "5 km" },
    { name: "Lachung River", distance: "0.3 km" },
  ],
  faqs: [
    {
      question: "What types of rooms are available at your hotel?",
      answer:
        "We offer 3 room types: Superior Family Room, Studio Balcony Room, and Deluxe Room. All rooms are centrally heated.",
    },
    {
      question: "Are there any special deals or packages available?",
      answer:
        "We offer a variety of Tour packages suiting every budget. Contact us for more information.",
    },
    {
      question: "Do you have a pool or fitness center on-site?",
      answer: "We have a spa on-site but no pool or fitness center.",
    },
    {
      question: "Do you offer shuttle service to and from the airport?",
      answer: "We offer Paid transportation on advance booking.",
    },
    {
      question: "Are pets allowed at your hotel?",
      answer: "Pets are strictly not allowed.",
    },
    {
      question: "Are there any restaurants on-site?",
      answer:
        "Yes, we have Asiatic Grill restaurant & bar on-site that serves breakfast, lunch, and dinner.",
    },
    {
      question: "Is there a cancellation policy for reservations?",
      answer:
        "Yes, our cancellation policy can be found on our website and varies depending on the type of reservation.",
    },
    {
      question: "Are there any additional fees or taxes?",
      answer:
        "Yes, there may be additional taxes and fees applied to your reservation, which will be outlined during the booking process.",
    },
    {
      question: "What is your check-in and check-out time?",
      answer: "Our check-in time is 1:00 PM and check-out time is 11:00 AM.",
    },
    {
      question: "Do you allow early check in or late check out?",
      answer:
        "Subject to availability, we will try to accommodate your request. If however, rooms are unavailable, you are welcome to make yourself comfortable in the common areas of our property.",
    },
    {
      question: "Are you couple friendly?",
      answer:
        "Yes, all guests regardless of race, cast, colour and creed are welcome to our property as long as they have valid ID cards.",
    },
    {
      question: "How do I make changes to my reservation?",
      answer:
        "You can call or email us for any change requests for your reservation. A dedicated line will be shared with you post booking.",
    },
    {
      question: "What is the WiFi speed?",
      answer:
        "We have wifi coverage throughout the property. You should be able to stream videos easily on our WiFi.",
    },
  ],
  propertyRules: [
    "Late Check-out allowed subject to availability",
    "Early Check-In allowed subject to availability",
    "Pets are not allowed",
    "Smoking allowed in designated areas",
    "Unmarried couples are allowed",
    "Government ID(s) required at check-in",
    "Local ID(s) allowed",
    "Foreigners are allowed",
    "Visitors are allowed in lobby area",
    "Outside food & Beverage not allowed in rooms",
  ],
  reviews: [
    {
      name: "Deepak Verma",
      rating: 5,
      comment:
        "Unforgettable experience in Lachung! The spa was heavenly after a day of sightseeing. Heated rooms were perfect for the cold weather. Highly recommend!",
      date: "2024-12-10",
    },
    {
      name: "Meera Iyer",
      rating: 5,
      comment:
        "Paradise in the mountains! The views from our balcony were surreal. The staff arranged our Yumthang Valley trip seamlessly. Best retreat in North Sikkim.",
      date: "2024-11-15",
    },
    {
      name: "Rajesh Khanna",
      rating: 4,
      comment:
        "Beautiful property with excellent service. The Asiatic Grill serves amazing food. The only challenge is the remote location, but that's part of the charm!",
      date: "2024-10-22",
    },
    {
      name: "Fatima Begum",
      rating: 5,
      comment:
        "We visited with our extended family and everyone loved it. The kids enjoyed the garden and bonfire nights. A truly magical Himalayan retreat.",
      date: "2024-09-18",
    },
    {
      name: "Arjun Nair",
      rating: 4,
      comment:
        "Great value for money in Lachung. Clean rooms, warm hospitality, and the spa is a bonus. Perfect base for exploring Zero Point and Yumthang.",
      date: "2024-08-05",
    },
    {
      name: "Kavita Rao",
      rating: 5,
      comment:
        "Dream come true! Waking up to snow-capped peaks from our room was incredible. The staff treated us like family. Will return next summer!",
      date: "2024-07-12",
    },
  ],
};

export const allHotels: HardcodedHotel[] = [
  jewelHimalayanHeights,
  jewelKongchenRetreat,
];
