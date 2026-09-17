/* =====================================================================
   BIKES.JS — this is the only file you need to edit to add or update
   a listing. Everything on the site is generated from this list.

   HOW TO ADD A NEW BIKE:
   1. Copy one of the objects below (the whole { ... } block).
   2. Paste it at the top of the "bikes" array.
   3. Change the values. Leave the field names (the parts before the
      colons) exactly as they are.
   4. Put your photos in the /images folder and reference them like
      "images/my-photo.jpg".

   status: "for-sale" or "sold" — this is what controls which page
   a bike shows up on (Home = for-sale, Archive = sold).
   ===================================================================== */

const bikes = [
  {
    id: "hightower-2019",
    status: "for-sale",              // "for-sale" or "sold"
    year: 2019,
    make: "Santa Cruz",
    model: "Hightower",
    category: "Trail",               // e.g. Trail, Enduro, XC, Downhill, Hardtail
    price: 2650,
    size: "Large",
    frameMaterial: "Carbon (CC)",
    wheelSize: "29\"",
    suspension: "150mm / 135mm",
    drivetrain: "SRAM GX Eagle 12-speed",
    condition: "Excellent — light trail wear, fresh brake pads",
    excerpt: "A full rebuild with fresh Fox suspension and a wheel and drivetrain upgrade — ready for anything from flow trails to weekend bikepacking loops.",
    description: "Picked this Hightower up as a partial-build frame and put it back together the right way: new Fox 36 up front, DPX2 out back, and a full SRAM GX Eagle drivetrain. Runs and shifts like new. No cracks, no dents, bearings were serviced this spring. Comes with a spare set of brake pads and the original headset spacers.",
    photos: [
      "images/placeholder-1.jpg",
      "images/placeholder-2.jpg",
      "images/placeholder-3.jpg"
    ],
    listingLinks: [
      { label: "View on Facebook Marketplace", url: "https://facebook.com/marketplace" },
      { label: "View on Pinkbike", url: "https://pinkbike.com/buysell" }
    ]
  },
  {
    id: "sb130-2021",
    status: "for-sale",
    year: 2021,
    make: "Yeti",
    model: "SB130",
    category: "Trail",
    price: 3400,
    size: "Medium",
    frameMaterial: "Carbon",
    wheelSize: "29\"",
    suspension: "130mm / 120mm",
    drivetrain: "Shimano XT 12-speed",
    condition: "Very good — some cosmetic chips on the down tube, mechanically sound",
    excerpt: "Switch Infinity suspension in a size medium that pedals like an XC bike and descends like something twice its travel.",
    description: "One owner before me, and it was well looked after — I just refreshed the pivot bearings and put on a new chain and cassette. Has a few small paint chips on the down tube from normal trail use (photos show them clearly) but nothing structural. Great do-it-all trail bike.",
    photos: [
      "images/placeholder-2.jpg",
      "images/placeholder-4.jpg"
    ],
    listingLinks: [
      { label: "View on eBay", url: "https://ebay.com" },
      { label: "View on Pinkbike", url: "https://pinkbike.com/buysell" }
    ]
  },
  {
    id: "sentinel-2020",
    status: "for-sale",
    year: 2020,
    make: "Transition",
    model: "Sentinel",
    category: "Enduro",
    price: 2950,
    size: "Large",
    frameMaterial: "Aluminum",
    wheelSize: "29\"",
    suspension: "160mm / 140mm",
    drivetrain: "SRAM GX Eagle 12-speed",
    condition: "Good — ridden, not babied, fully serviced",
    excerpt: "A planted, confident enduro bike built up with a coil shock for anyone who spends more time pointed downhill than up.",
    description: "This one's been my personal bike for the last season of bike-park laps, so it's not a garage queen — but everything is dialed. Coil shock front and rear, fresh tires, and I just tuned the brakes. Frame is straight and true, no crash history.",
    photos: [
      "images/placeholder-4.jpg",
      "images/placeholder-1.jpg"
    ],
    listingLinks: [
      { label: "View on Facebook Marketplace", url: "https://facebook.com/marketplace" }
    ]
  },
  {
    id: "stumpjumper-2017",
    status: "sold",
    year: 2017,
    make: "Specialized",
    model: "Stumpjumper",
    category: "Trail",
    price: 1800,
    soldDate: "March 2026",
    size: "Medium",
    frameMaterial: "Aluminum",
    wheelSize: "29\"",
    suspension: "135mm / 135mm",
    drivetrain: "Shimano SLX 11-speed",
    condition: "Sold in very good condition",
    excerpt: "A ground-up rebuild after finding this frame at a swap meet — new suspension, new drivetrain, new life.",
    description: "Found this frame bare at a local swap meet for almost nothing and built it up over a winter. New Fox suspension front and rear, new SLX drivetrain, new cockpit. Sold to a first-time mountain biker upgrading from a hardtail — hope it's still ripping trails.",
    photos: [
      "images/placeholder-3.jpg",
      "images/placeholder-5.jpg"
    ],
    listingLinks: []
  },
  {
    id: "fuel-ex-2016",
    status: "sold",
    year: 2016,
    make: "Trek",
    model: "Fuel EX 9.8",
    category: "Trail",
    price: 1650,
    soldDate: "January 2026",
    size: "Large",
    frameMaterial: "Carbon",
    wheelSize: "27.5\"",
    suspension: "130mm / 130mm",
    drivetrain: "SRAM X01 11-speed",
    condition: "Sold in excellent condition",
    excerpt: "A well-kept carbon Fuel EX that moved to a good home for weekend rides.",
    description: "Owned by one rider before me who kept immaculate service records. I gave it a full tune, new tires, and fresh bar tape before listing. Sold quickly to a local rider — always nice when they're local, means I get updates on how it's doing.",
    photos: [
      "images/placeholder-5.jpg",
      "images/placeholder-6.jpg"
    ],
    listingLinks: []
  },
  {
    id: "ripmo-2022",
    status: "sold",
    year: 2022,
    make: "Ibis",
    model: "Ripmo",
    category: "Enduro",
    price: 3900,
    soldDate: "November 2025",
    size: "Medium",
    frameMaterial: "Carbon",
    wheelSize: "29\"",
    suspension: "147mm / 145mm",
    drivetrain: "SRAM GX Eagle 12-speed",
    condition: "Sold in excellent condition",
    excerpt: "One of the cleanest builds I've done — this one was hard to let go of.",
    description: "Built this one up exactly how I'd want to ride it myself: GX Eagle drivetrain, a coil shock conversion, and a fresh cockpit. It sold within a day of posting. If you're the buyer reading this — send more trail photos.",
    photos: [
      "images/placeholder-6.jpg",
      "images/placeholder-3.jpg"
    ],
    listingLinks: []
  }
];
