import type { Villa } from "../types";

export const ListVilla: Villa[] = [
	{
		id: 1,
		slug: "garuda",
		name: "Pondok Garuda",
		imageUrl: "/images/villas/garuda/cover.jpg",
		shortName: "Garuda",
		isAvailable: true,
		buildingCount: 1,
		roomCount: 11,
		personCapacity: 38,
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
			"Gazebo",
			"Ayunan & Perosotan",
			"Kolam Pancing",
			"Taman/Area Bermain",
			"Parkir 15 Mobil",
			"Kulkas",
			"Alat Panggang/Bakar",
		],

		bedroomDetail: {
			imageUrl: "/images/villas/garuda/bedroom.jpg",
			facilities: [
				"Lantai 1  (kamar 1-5) 8 Double bed + 2 Single bed Kapasitas 18 Orang",
				"Lantai 2  (kamar 6-11) 10 Double bed + 2 Single bed Kapasitas 20 Orang",
			],
		},

		buildingImageUrls: ["", ""],

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
];

export const VillaMap: Record<Villa["slug"], Villa> = {
	garuda: ListVilla[0],
	kaluska: ListVilla[1],
	aliska: ListVilla[2],
	lagogo: ListVilla[3],
	sari: ListVilla[4],
};
