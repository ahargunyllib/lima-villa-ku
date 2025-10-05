import type { Villa } from "../types";
import { VillaImages } from "./villa-images";

export const ListVilla: Villa[] = [
	{
		id: 2,
		slug: "kaluska",
		name: "Pondok Kaluska",
		imageUrl: VillaImages.kaluska.cover,
		shortName: "Pondok Kaluska",
		isAvailable: true,
		buildingCount: 4,
		roomCount: 19,
		personCapacity: 68,
		description:
			"Villa pondok kaluska terdiri dari 4 bangunan dengan total 19 kamar dengan 16 kamar di antaranya sudah tersedia kamar mandi dalam.",
		facilities: [
			"Kolam Renang",
			"Meja Pingpong",
			"Meja Billiard",
			"Free WiFi",
			"Android TV",
			"Sound Karaoke",
			"Water Heater",
			"Pendopo",
			"Ayunan & Perosotan",
			"Kolam Pancing",
			"Taman/Area Bermain",
			"Parkir 15 Mobil",
			"Kulkas",
			"Alat Panggang/Bakar",
		],

		buildings: [
			{
				name: "hijau",
				buildingImageUrl: VillaImages.kaluska.buildings[0].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[0].bedroom,
					facilities: [
						"Lantai 1  (kamar 1-4) 8 Double bed Kapasitas 16 Orang",
						"Lantai 2  (mezanin) 8 Single bed Kapasitas 8 Orang",
					],
				},
			},
			{
				name: "kuning",
				buildingImageUrl: VillaImages.kaluska.buildings[1].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[1].bedroom,
					facilities: [
						"Lantai 1  (kamar 6-8) 4 Double bed Kapasitas 8 Orang",
						"Lantai 2  (kamar 9-11) 4 Double bed Kapasitas 8 Orang",
					],
				},
			},
			{
				name: "biru",
				buildingImageUrl: VillaImages.kaluska.buildings[2].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[2].bedroom,
					facilities: [
						"Lantai 1  (kamar 12&13) 4 Double bed Kapasitas 8 Orang",
						"Lantai 2  (kamar 14&15) 2 Double bed + 2 Single bed Kapasitas 6 Orang",
					],
				},
			},
			{
				name: "putih",
				buildingImageUrl: VillaImages.kaluska.buildings[3].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[3].bedroom,
					facilities: [
						"Lantai 1  (kamar 16&17) 2 Double bed + 2 Kasur bawah Kapasitas 8 Orang",
						"Lantai 2  (kamar 18&19) 4 Double bed Kapasitas 8 Orang",
					],
				},
			},
		],

		facilityImageUrls: VillaImages.kaluska.facilities,

		termsAndCondition: `
    1. Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).
    2. Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"
    3. Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.
    4. Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.
    5. Jangan mengganggu binatang peliharaan yang ada.
    6. Dilarang memaku tembok, merusak atau membawa inventaris villa.
    7. Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.
    8. Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.
    9. Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.
    10. Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.
    11. Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.
    12. Tamu wajib menjaga anak kecil di kolam renang.

    *Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.`,
		price: {
			weekday: 3_000_000,
			weekend: 5_500_000,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "Sebesar 50% dan dibayarkan paling lambat H-2 Minggu",
			},
		},

		contact: {
			instagrams: ["@villapondokkaluska"],
			villaManagers: [
				{
					name: "Teguh",
					phoneNumber: "081310502766",
				},
				{
					name: "Martinus",
					phoneNumber: "08111866989",
				},
			],
			villaGuardians: [
				{
					name: "Ita",
					phoneNumber: "085780601466",
				},
				{
					name: "Amin",
					phoneNumber: "081280803416",
				},
			],
		},
	},
	{
		id: 5,
		slug: "sari",
		name: "Pondok Sari",
		imageUrl: VillaImages.sari.cover,
		shortName: "Pondok Sari",
		isAvailable: true,
		buildingCount: 1,
		roomCount: 15,
		personCapacity: 51,
		description:
			"Villa pondok kaluska terdiri dari 4 bangunan dengan total 19 kamar dengan 16 kamar di antaranya sudah tersedia kamar mandi dalam.",
		facilities: [
			"Kolam Renang",
			"Meja Pingpong",
			"Meja Billiard",
			"Free WiFi",
			"Android TV",
			"Sound Karaoke",
			"Water Heater",
			"Pendopo",
			"Ayunan & Perosotan",
			"Lapangan Badminton",
			"Taman/Area Bermain",
			"Kulkas",
			"Alat Panggang/Bakar",
			"Aula/Ruang Meeting",
		],

		buildings: [
			{
				bedroomDetail: {
					imageUrl: VillaImages.sari.buildings[0].bedroom,
					facilities: [
						"Lantai 1  (kamar 1-7) 11 Double bed + 2 Single bed Kapasitas 24 Orang",
						"Lantai 2  (kamar 8-15) 10 Double bed + 7 Single bed Kapasitas 28 Orang",
					],
				},
			},
		],

		facilityImageUrls: VillaImages.sari.facilities,

		termsAndCondition: `
    1. Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).
    2. Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"
    3. Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.
    4. Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.
    5. Jangan mengganggu binatang peliharaan yang ada.
    6. Dilarang memaku tembok, merusak atau membawa inventaris villa.
    7. Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.
    8. Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.
    9. Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.
    10. Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.
    11. Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.
    12. Tamu wajib menjaga anak kecil di kolam renang.

    *Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.`,
		price: {
			weekday: 3_000_000,
			weekend: 4_500_000,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "Sebesar 50% dan dibayarkan paling lambat H-2 Minggu",
			},
		},

		contact: {
			instagrams: ["@villa.ondoksari"],
			villaManagers: [
				{
					name: "Teguh",
					phoneNumber: "081310502766",
				},
				{
					name: "Martinus",
					phoneNumber: "08111866989",
				},
			],
			villaGuardians: [
				{
					name: "Abas",
					phoneNumber: "085778321689",
				},
				{
					name: "Iwan",
					phoneNumber: "083164761480",
				},
			],
		},
	},
	{
		id: 1,
		slug: "garuda",
		name: "Pondok Garuda",
		imageUrl: VillaImages.garuda.cover,
		shortName: "Pondok Garuda",
		isAvailable: true,
		buildingCount: 1,
		roomCount: 11,
		personCapacity: 40,
		description:
			"Villa pondok garuda terdiri dari 1 bangunan dengan total 19 kamar dengan 16 kamar di antaranya sudah tersedia kamar mandi dalam.",
		facilities: [
			"Kolam Renang",
			"Meja Pingpong",
			"Meja Billiard",
			"Free WiFi",
			"Android TV",
			"Sound Karaoke",
			"Water Heater",
			"Pendopo",
			"Ayunan & Perosotan",
			"Kolam Pancing",
			"Taman/Area Bermain",
			"Parkir 15 Mobil",
			"Kulkas",
			"Alat Panggang/Bakar",
		],

		buildings: [
			{
				bedroomDetail: {
					imageUrl: VillaImages.garuda.buildings[0].bedroom,
					facilities: [
						"Lantai 1  (kamar 1-5) 8 Double bed + 2 Single bed Kapasitas 18 Orang",
						"Lantai 2  (kamar 6-11) 10 Double bed + 2 Single bed Kapasitas 20 Orang",
					],
				},
			},
		],

		facilityImageUrls: VillaImages.garuda.facilities,

		termsAndCondition: `
    1. Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).
    2. Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"
    3. Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.
    4. Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.
    5. Jangan mengganggu binatang peliharaan yang ada.
    6. Dilarang memaku tembok, merusak atau membawa inventaris villa.
    7. Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.
    8. Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.
    9. Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.
    10. Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.
    11. Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.
    12. Tamu wajib menjaga anak kecil di kolam renang.

    *Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.`,
		price: {
			weekday: 3_000_000,
			weekend: 4_500_000,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "Sebesar 50% dan dibayarkan paling lambat H-2 Minggu",
			},
		},

		contact: {
			instagrams: ["@villapondokgaruda"],
			villaManagers: [
				{
					name: "Teguh",
					phoneNumber: "081310502766",
				},
				{
					name: "Martinus",
					phoneNumber: "08111866989",
				},
			],
			villaGuardians: [
				{
					name: "Abas",
					phoneNumber: "085778321689",
				},
				{
					name: "Amin",
					phoneNumber: "081280803416",
				},
			],
		},
	},
	{
		id: 4,
		slug: "lagogo",
		name: "Pondok Lagogo",
		imageUrl: VillaImages.lagogo.cover,
		shortName: "Pondok Lagogo",
		isAvailable: false,
		buildingCount: 0,
		roomCount: 0,
		personCapacity: 0,
		description: "",
		facilities: [],

		buildings: [
			{
				bedroomDetail: {
					imageUrl: VillaImages.lagogo.bedroom,
					facilities: [],
				},
			},
		],

		facilityImageUrls: [],

		termsAndCondition: `
    1. Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).
    2. Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"
    3. Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.
    4. Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.
    5. Jangan mengganggu binatang peliharaan yang ada.
    6. Dilarang memaku tembok, merusak atau membawa inventaris villa.
    7. Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.
    8. Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.
    9. Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.
    10. Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.
    11. Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.
    12. Tamu wajib menjaga anak kecil di kolam renang.

    *Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.`,
		price: {
			weekday: 0,
			weekend: 0,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "Sebesar 50% dan dibayarkan paling lambat H-2 Minggu",
			},
		},

		contact: {
			instagrams: [],
			villaManagers: [],
			villaGuardians: [],
		},
	},
	{
		id: 3,
		slug: "alika",
		name: "Pondok Alika",
		imageUrl: VillaImages.alika.cover,
		shortName: "Villa Alika",
		isAvailable: false,
		buildingCount: 0,
		roomCount: 0,
		personCapacity: 0,
		description: "",
		facilities: [],

		buildings: [
			{
				bedroomDetail: {
					imageUrl: VillaImages.alika.bedroom,
					facilities: [],
				},
			},
		],

		facilityImageUrls: [],

		termsAndCondition: `
    1. Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).
    2. Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"
    3. Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.
    4. Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.
    5. Jangan mengganggu binatang peliharaan yang ada.
    6. Dilarang memaku tembok, merusak atau membawa inventaris villa.
    7. Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.
    8. Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.
    9. Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.
    10. Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.
    11. Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.
    12. Tamu wajib menjaga anak kecil di kolam renang.

    *Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.`,
		price: {
			weekday: 0,
			weekend: 0,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "Sebesar 50% dan dibayarkan paling lambat H-2 Minggu",
			},
		},

		contact: {
			instagrams: [],
			villaManagers: [],
			villaGuardians: [],
		},
	},
];

export const VillaMap: Record<Villa["slug"], Villa> = {
	kaluska: ListVilla[0],
	sari: ListVilla[1],
	garuda: ListVilla[2],
	lagogo: ListVilla[3],
	alika: ListVilla[4],
};
