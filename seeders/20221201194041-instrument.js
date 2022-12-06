"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "instruments",
      [
        {
          brand: "Gibson",
          type: "Electric Guitar",
          model: "Les Paul Custom",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-c7cac9fc507dd19d__hmac-39e8323cf1913e9f1eb3d39e4fcd20169f6afb1a/images/items/750/LPCAWGH1E-large.jpg.auto.webp",
          color: "White",
          price: 5799.0,
          cart_id: null,
          instrument_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Gibson",
          type: "Electric Guitar",
          model: "SG Standard",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-340bda9f117d6b93__hmac-325c0ac72caebc0a389e39f6e2b623340a0d858e/images/items/750/SG61VENH-large.jpg.auto.webp",
          color: "Cherry",
          price: 1999.0,
          cart_id: null,
          instrument_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Gibson",
          type: "Electric Guitar",
          model: "ES-335",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-334cb4dc6d4145f3__hmac-a40c86271f410c8c3eba7531db3225effebfadd2/images/guitars/ES3500SCNH/222220188/222220188-body-large.jpg.auto.webp",
          color: "Sixties Cherry",
          price: 3499.0,
          cart_id: null,
          instrument_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Gibson",
          type: "Electric Guitar",
          model: "Explorer",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-45cc341d14def6f5__hmac-a2c0cc6c3f3fc6545b7b9801d1e42dc424b5ff6d/images/items/750/DSXANCH1-large.jpg.auto.webp",
          color: "Antique Natural",
          price: 1999.0,
          cart_id: null,
          instrument_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Gibson",
          type: "Electric Guitar",
          model: "Flying V",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-369b7f8446c9a0a5__hmac-71f28116c7617eb3df8223c0ca98c2653eea9ead/images/items/750/DSVANCH-large.jpg.auto.webp",
          color: "Antique Natural",
          price: 1999.0,
          cart_id: null,
          instrument_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Electric Guitar",
          model: "Stratocaster SRV",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a8a34f17fdd16afe__hmac-a42b7bd164e2d4dd2524b296547ff99065d2d9a6/images/items/750/StratSRV3SB-large.jpg.auto.webp",
          color: "Sunburst",
          price: 2049.0,
          cart_id: null,
          instrument_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Electric Guitar",
          model: "Stratocaster",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-18cadbab572ad5a6__hmac-6182afc09b3a7ab8e82ac5fbb68f527c32ffd395/images/items/750/StratAP2RSB-large.jpg.auto.webp",
          color: "Sunburst",
          price: 1699.0,
          cart_id: null,
          instrument_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Electric Guitar",
          model: "Telecaster",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-7f081ccb62f5b281__hmac-dd2645805681d2d1b232700b9c99822fed20a5fe/images/items/750/TeleAP2MRP-large.jpg.auto.webp",
          color: "Roasted Pine",
          price: 1799.0,
          cart_id: null,
          instrument_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Ibanez",
          type: "Electric Guitar",
          model: "Steve Vai Signature",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-c2bca9fc2ac929dd__hmac-00a409b05d11171321d3909aea49b308c9e0784a/images/items/750/PIA3761XB-large.jpg.auto.webp",
          color: "Onyx Black",
          price: 3499.0,
          cart_id: null,
          instrument_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Ibanez",
          type: "Electric Guitar",
          model: "Joe Satriani Signature",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-03dff738ccb968e2__hmac-ef58eea93848c3e38dd660fc0b3f65283740f23c/images/items/750/JS2GD-large.jpg.auto.webp",
          color: "Gold Boy",
          price: 5799.0,
          cart_id: null,
          instrument_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Taylor",
          type: "Acoustic Guitar",
          model: "314ce",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1a1cb3662b40004e__hmac-9c89bd4a1b739fefd89ce08e12ca51a8ba9a4818/images/guitars/314ceVCl/1209272152/1209272152-angle-large.jpg.auto.webp",
          color: "Natural",
          price: 2199.0,
          cart_id: null,
          instrument_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Martin",
          type: "Acoustic Guitar",
          model: "D18",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f6b3b23533ff7516__hmac-122548fbb2bb6d4ab2b0639daa83130034a39d5b/images/guitars/MD18/M2634249/M2634249-angle-large.jpg.auto.webp",
          color: "Natural",
          price: 2799.0,
          cart_id: null,
          instrument_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Martin",
          type: "Acoustic Guitar",
          model: "D28",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-30a288d5b46e1311__hmac-a2a8dc56576c567968e3f0a8a87364b7e4488105/images/items/750/MD28-large.jpg.auto.webp",
          color: "Natural",
          price: 3199.0,
          cart_id: null,
          instrument_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Gibson",
          type: "Acoustic Guitar",
          model: "Hummingbird",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-118530e3dc26c3cd__hmac-e6f8c0b6f835c5b8ffe5d2d036cb27f31e6646b7/images/items/750/RSHDRBGE-large.jpg.auto.webp",
          color: "Sunburst",
          price: 5499.0,
          cart_id: null,
          instrument_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Yamaha",
          type: "Acoustic Guitar",
          model: "FG830",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-513b332e70b8b282__hmac-25e52dddf1fe3e4d4d4bda191af2c9ba8e5137ac/images/guitars/FG830/IIL181377/IIL181377-angle-large.jpg.auto.webp",
          color: "Natural",
          price: 339.0,
          cart_id: null,
          instrument_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Ovation",
          type: "Acoustic Guitar",
          model: "Elite",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-70e4b12ab2efa1e9__hmac-2e5b79f099aa80d13262a80c378df6885ea355d6/images/items/750/EliteAXDB-large.jpg.auto.webp",
          color: "Black",
          price: 1149.0,
          cart_id: null,
          instrument_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Bass Guitar",
          model: "Jazz Bass",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-136dd3fc80aa949b__hmac-827fb9e723811fb7a1a587e5b09df116e5be9f0c/images/guitars/JBassAP2RSB/US22104982/US22104982-body-large.jpg.auto.webp",
          color: "Sunburst",
          price: 1799.0,
          cart_id: null,
          instrument_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Bass Guitar",
          model: "Mustang Bass",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-c2408bc120e33fcc__hmac-e76e3443793877de6f78c9ec03181232a7f7bbb3/images/guitars/MustBaSEBCR/MX22214905/MX22214905-body-large.jpg.auto.webp",
          color: "Buttercream",
          price: 749.0,
          cart_id: null,
          instrument_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Bass Guitar",
          model: "Precision Bass",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-49057982eddc974a__hmac-306be701c07406e016cf76d5aeaae30a765895b1/images/guitars/PBassPMPWT/MX22219190/MX22219190-body-large.jpg.auto.webp",
          color: "White",
          price: 849.0,
          cart_id: null,
          instrument_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Epiphone",
          type: "Bass Guitar",
          model: "Viola (Hofner) Bass",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-138859403143def2__hmac-59cb41efa22c9f9cd9b17e2a2e8e013af9a26aa3/images/guitars/EBVIVSCH/22041513285/22041513285-body-large.jpg.auto.webp",
          color: "Sunburst",
          price: 449.0,
          cart_id: null,
          instrument_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Marshall",
          type: "Guitar Amplifiers",
          model: "JVM410C 100watt",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-32bc3900d5f7845b__hmac-abbc7a6d03a75bd5f86a5074d0adbcdcd67b2446/images/items/750/JVM410C-large.jpg.auto.webp",
          color: "Black",
          price: 3699.0,
          cart_id: null,
          instrument_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Marshall",
          type: "Guitar Amplifiers",
          model: "JVM215C 50watt",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-df8779f5335dbf79__hmac-5a5d9ff937c01807e4a73ecd475ca82891ab444b/images/items/750/JVM215C-large.jpg.auto.webp",
          color: "Black",
          price: 2879.0,
          cart_id: null,
          instrument_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Mesa Boogie",
          type: "Guitar Amplifiers",
          model: "Mark Five 90watt",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f9bef257ddfeb1bf__hmac-85e5da695125e763f7c5de4c5e53142483abf402/images/items/750/Mark5-112-large.jpg.auto.webp",
          color: "Black",
          price: 3399.0,
          cart_id: null,
          instrument_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Guitar Amplifiers",
          model: "Princeton Reverb",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-9cde1b47c593b465__hmac-ef1c08d76e749ae4491c55391ec9ba557f9cf84b/images/items/750/PrinceRev65-large.jpg.auto.webp",
          color: "Black",
          price: 1299.0,
          cart_id: null,
          instrument_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Fender",
          type: "Guitar Amplifiers",
          model: "Twin Reverb",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-4d7c2b0146b5280b__hmac-467522291b2915c880fa8843226c4a8e798a86ac/images/items/750/TMTwinRev-large.jpg.auto.webp",
          color: "Black",
          price: 1049.0,
          cart_id: null,
          instrument_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Vox",
          type: "Guitar Amplifiers",
          model: "AC30 C2",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-9283f25a59f8eb86__hmac-c61c8ba28322ebf7e6fef9fad1f5c45d546e8f79/images/items/750/AC30C2-large.jpg.auto.webp",
          color: "Black",
          price: 1299.0,
          cart_id: null,
          instrument_id: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Boss",
          type: "Guitar Pedals/Effects",
          model: "DS-1 Distortion Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a2b5c3eef06a49b7__hmac-4aebc6050de212e6b9880080f12b23219f561b4b/images/items/750/DS1W-large.jpg.auto.webp",
          color: "Orange",
          price: 149.0,
          cart_id: null,
          instrument_id: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Ibanez",
          type: "Guitar Pedals/Effects",
          model: "Tube Screamer",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a5b2f4b2a4a1bdee__hmac-448fe743b1e64b59010d96e3b7928b606def04fb/images/items/750/TS9-large.jpg.auto.webp",
          color: "Green",
          price: 109.0,
          cart_id: null,
          instrument_id: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Boss",
          type: "Guitar Pedals/Effects",
          model: "CE-2W Chorus Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-868bfec5b8e5070e__hmac-7f051ed8ef1ae7de17852133b08a83cac9c4e29e/images/items/750/CE2W-large.jpg.auto.webp",
          color: "Blue",
          price: 229.0,
          cart_id: null,
          instrument_id: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Boss",
          type: "Guitar Pedals/Effects",
          model: "DD8 Digital Delay Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-acabb0a2b38bdbf7__hmac-61830c3b77739e55f62c3867467180d88de47775/images/items/750/DD8-large.jpg.auto.webp",
          color: "White",
          price: 187.0,
          cart_id: null,
          instrument_id: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Keeley",
          type: "Guitar Pedals/Effects",
          model: "30ms Delay Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-dad6e8c85b4a8227__hmac-77f6161c4ab1817ebda63f0ac3bbed2daf725dfb/images/items/750/DoubleTrack-large.jpg.auto.webp",
          color: "Red",
          price: 169.0,
          cart_id: null,
          instrument_id: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Behringer",
          type: "Guitar Pedals/Effects",
          model: "VD400 Vintage Delay Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-bd535a38578c42ed__hmac-82f05158814f113da5dd1499c9d59a276203ed31/images/items/750/VD400-large.jpg.auto.webp",
          color: "Grey",
          price: 29.0,
          cart_id: null,
          instrument_id: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "T-Rex",
          type: "Guitar Pedals/Effects",
          model: "Creamer Reverb Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2dee6586d69dc85a__hmac-064e3858cb1ab408bf9e928c1becba61196fff3c/images/items/750/Creamer-large.jpg.auto.webp",
          color: "Brown",
          price: 159.0,
          cart_id: null,
          instrument_id: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "MXR",
          type: "Guitar Pedals/Effects",
          model: "M101 Phase 90 Phaser Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a90d0d1b1e191a76__hmac-912b03a5632aa62ba5ad245cc7bf838d137e05db/images/items/750/Phase90-large.jpg.auto.webp",
          color: "Orange",
          price: 89.0,
          cart_id: null,
          instrument_id: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Electro-Harmonix",
          type: "Guitar Pedals/Effects",
          model: "Flanger Chorus Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-e1eec93d83939e1b__hmac-383f1e032e9d7790edfd9782c751c711f7f96777/images/items/750/ElMistressSt-large.jpg.auto.webp",
          color: "Black",
          price: 150.0,
          cart_id: null,
          instrument_id: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Dunlop",
          type: "Guitar Pedals/Effects",
          model: "Cry Baby Wah Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f76c1e8b7d2dd69c__hmac-72176a84e26d4d20188b81c7c97c941da10b43bd/images/items/750/Crybaby-large.jpg.auto.webp",
          color: "Black",
          price: 99.0,
          cart_id: null,
          instrument_id: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "MXR",
          type: "Guitar Pedals/Effects",
          model: "M222 Talk Box Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2c56bff04cd4585b__hmac-051143578bff6224969e444a483e64e540169335/images/items/750/M222-large.jpg.auto.webp",
          color: "White",
          price: 189.0,
          cart_id: null,
          instrument_id: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "DOD",
          type: "Guitar Pedals/Effects",
          model: "Envelope Filter 440 Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-035204fd636c831e__hmac-c006371cfe24868f9afb3a711d3e309c68fbd0c1/images/items/750/DOD440-large.jpg.auto.webp",
          color: "Green",
          price: 129.0,
          cart_id: null,
          instrument_id: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Boss",
          type: "Guitar Pedals/Effects",
          model: "SY200 Synthesizer Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-400bb0504d8c64af__hmac-ab422f48e05f6f80317748aa8bc5d68adaa11fa5/images/items/750/SY200-large.jpg.auto.webp",
          color: "Blue",
          price: 316.0,
          cart_id: null,
          instrument_id: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Boss",
          type: "Guitar Pedals/Effects",
          model: "TU-3 Chromatic Tuner Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-cdb9126d6c79de48__hmac-aa928730c3360653d222e77739265369573d6ffe/images/items/750/TU3-large.jpg.auto.webp",
          color: "White",
          price: 99.0,
          cart_id: null,
          instrument_id: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          brand: "Behringer",
          type: "Guitar Pedals/Effects",
          model: "Graphic Equalizer Pedal",
          image:
            "https://media.sweetwater.com/api/i/q-82__f-webp__ha-03bd64fb063d7ff0__hmac-5857c5f541fc70e94724db56e8d44c0b93bde492/images/items/750/EQ700-large.jpg.auto.webp",
          color: "Yellow",
          price: 14.0,
          cart_id: null,
          instrument_id: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("instruments", null, {});
  },
};
