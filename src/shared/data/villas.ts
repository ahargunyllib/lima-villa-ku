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
			"Villa Pondok Kaluska terdiri dari 4 bangunan dengan total 19 kamar (18 kamar di antaranya sudah memiliki kamar dalam) dan mampu menampung hingga 68 orang.",
		facilities: [
			"Kolam Renang",
			"Meja Pingpong",
			"Meja Billiard",
			"Free WiFi",
			"Android TV (Youtube dan Karaoke)",
			"Speaker",
			"Water Heater",
			"Pendopo",
			"Ayunan & Perosotan",
			"Kolam Pancing",
			"Taman/Area Bermain",
			"Parkir sekitar 15 Mobil",
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
						"Lantai 1  (Kamar 1-4) Kapasitas 16 Orang",
						"Lantai 2  (Mezanin) Kapasitas 8 Orang",
					],
				},
			},
			{
				name: "kuning",
				buildingImageUrl: VillaImages.kaluska.buildings[1].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[1].bedroom,
					facilities: [
						"Lantai 1  (Kamar 6-8) Kapasitas 8 Orang",
						"Lantai 2  (Kamar 9-11) Kapasitas 8 Orang",
					],
				},
			},
			{
				name: "biru",
				buildingImageUrl: VillaImages.kaluska.buildings[2].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[2].bedroom,
					facilities: [
						"Lantai 1  (Kamar 12-13) Kapasitas 8 Orang",
						"Lantai 2  (Kamar 14-15) Kapasitas 6 Orang",
					],
				},
			},
			{
				name: "putih",
				buildingImageUrl: VillaImages.kaluska.buildings[3].building,
				bedroomDetail: {
					imageUrl: VillaImages.kaluska.buildings[3].bedroom,
					facilities: [
						"Lantai 1  (Kamar 16-17) Kapasitas 6 Orang",
						"Lantai 2  (Kamar 18-19) Kapasitas 8 Orang",
					],
				},
			},
		],

		facilityImageUrls: VillaImages.kaluska.facilities,

		terms: {
			points: [
				"Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).",
				'Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"',
				"Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.",
				"Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.",
				"Jangan mengganggu binatang peliharaan yang ada.",
				"Dilarang memaku tembok, merusak atau membawa inventaris villa.",
				"Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.",
				"Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.",
				"Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.",
				"Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.",
				"Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.",
				"Tamu wajib menjaga anak kecil di kolam renang.",
			],
			note: "*Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.",
		},
		price: {
			weekday: 3_000_000,
			weekend: 5_500_000,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "DP sebesar 50% dan pelunasan paling lambat seminggu sebelum hari-H.",
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
			"Villa Pondok Sari terdiri dari 1 bangunan 2 lantai dengan total 15 kamar. Seluruhnya memiliki kamar mandi dalam yang dilengkapi dengan air panas. Hanya kamar driver (kamar no.8), yang tidak memiliki kamar mandi dalam.",
		facilities: [
			"Kolam Renang",
			"Meja Pingpong",
			"Meja Billiard",
			"Free WiFi",
			"Android TV (Youtube dan Karaoke)",
			"Speaker Portable",
			"Water Heater",
			"Ruang Dapur Lega",
			"Ayunan & Perosotan",
			"Lapangan Badminton",
			"Taman/Area Bermain",
			"Kulkas dan Dispenser",
			"Alat Panggang/Bakar",
			"Aula/Ruang Meeting",
		],

		buildings: [
			{
				bedroomDetail: {
					imageUrl: VillaImages.sari.buildings[0].bedroom,
					facilities: [
						"Lantai 1  (Kamar 1-7) Kapasitas 24 Orang/bed",
						"Lantai 2  (Kamar 8-15) Kapasitas 27 Orang/bed",
					],
				},
			},
		],

		facilityImageUrls: VillaImages.sari.facilities,

		terms: {
			points: [
				"Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).",
				'Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"',
				"Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.",
				"Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.",
				"Jangan mengganggu binatang peliharaan yang ada.",
				"Dilarang memaku tembok, merusak atau membawa inventaris villa.",
				"Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.",
				"Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.",
				"Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.",
				"Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.",
				"Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.",
				"Tamu wajib menjaga anak kecil di kolam renang.",
			],
			note: "*Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.",
		},
		price: {
			weekday: 3_000_000,
			weekend: 5_000_000,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "DP sebesar 50% dan pelunasan paling lambat seminggu sebelum hari-H.",
			},
		},

		contact: {
			instagrams: ["@villa.pondoksari"],
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
					name: "Nanda",
					phoneNumber: "085778831069",
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
			"Villa Garuda terdiri dari 1 bangunan 2 lantai dengan total 11 kamar, dengan 8 kamar di antaranya sudah memiliki kamar mandi dalam.",
		facilities: [
			"Kolam Renang",
			"Meja Pingpong",
			"Meja Billiard",
			"Free WiFi",
			"Android TV (Youtube dan Karaoke)",
			"Speaker",
			"Water Heater",
			"Pendopo",
			"Ayunan & Perosotan",
			"Kolam Pancing",
			"Taman/Area Bermain",
			"Parkir 12 Mobil",
			"Kulkas",
			"Alat Panggang/Bakar",
		],

		buildings: [
			{
				bedroomDetail: {
					imageUrl: VillaImages.garuda.buildings[0].bedroom,
					facilities: [
						"Lantai 1  (Kamar 1-5) Kapasitas 19 Orang/bed",
						"Lantai 2  (Kamar 6-11) Kapasitas 31 Orang/bed",
					],
				},
			},
		],

		facilityImageUrls: VillaImages.garuda.facilities,

		terms: {
			points: [
				"Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).",
				'Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"',
				"Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.",
				"Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.",
				"Jangan mengganggu binatang peliharaan yang ada.",
				"Dilarang memaku tembok, merusak atau membawa inventaris villa.",
				"Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.",
				"Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.",
				"Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.",
				"Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.",
				"Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.",
				"Tamu wajib menjaga anak kecil di kolam renang.",
			],
			note: "*Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.",
		},
		price: {
			weekday: 3_000_000,
			weekend: 4_500_000,
			note: "*Harga belum termasuk uang kebersihan sebesar Rp 300.000 (diberikan langsung ke penjaga villa)",

			downPayment: {
				note: "DP	sebesar	50%	dan	pelunasan	paling	lambat seminggu	sebelum	hari-H",
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
					name: "Nanda",
					phoneNumber: "085778831069",
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

		terms: {
			points: [
				"Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).",
				'Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"',
				"Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.",
				"Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.",
				"Jangan mengganggu binatang peliharaan yang ada.",
				"Dilarang memaku tembok, merusak atau membawa inventaris villa.",
				"Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.",
				"Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.",
				"Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.",
				"Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.",
				"Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.",
				"Tamu wajib menjaga anak kecil di kolam renang.",
			],
			note: "*Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.",
		},
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

		terms: {
			points: [
				"Check in time : 14.00 WIB dan Check Out : 12.30 WIB (check in lebih awal atau check out terlambat bisa dibicarakan).",
				'Dilarang merokok di kamar atau di tempat yang diberi tanda "no smoking"',
				"Tidak membuang sampah sembarangan, buanglah sampah pada tempatnya.",
				"Dimohon agar tidak merusak rumput/tanaman dan memetik buah-buahan.",
				"Jangan mengganggu binatang peliharaan yang ada.",
				"Dilarang memaku tembok, merusak atau membawa inventaris villa.",
				"Kerusakan atau kehilangan barang atau inventaris villa akan dikenakan denda.",
				"Dilarang mabuk-mabukan, membawa narkoba, bermain judi, melakukan perbuatan asusila, membuat keributan dsb.",
				"Tidak melakukan perbuatan yang melanggar hukum lainnya. Resiko menjadi tanggung jawab tamu.",
				"Mengurus barang masing-masing, kehilangan bukan tanggung jawab pengelola villa.",
				"Dilarang memainkan musik dengan suara terlalu keras agar tidak mengganggu tetangga atau lingkungan.",
				"Tamu wajib menjaga anak kecil di kolam renang.",
			],
			note: "*Dengan membayar DP, berarti penyewa telah menyetujui ketentuan-ketentuan di atas.",
		},
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
