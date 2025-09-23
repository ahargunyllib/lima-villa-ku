export type Villa = {
	id: number;
	slug: "garuda" | "kaluska" | "aliska" | "lagogo" | "sari";
	name: string;
	imageUrl: string;
	shortName: string;
	isAvailable: boolean;
	buildingCount: number;
	roomCount: number;
	personCapacity: number;
	description: string;
	facilities: string[];

  buildingImageUrls?: string[];

	bedroomDetail: {
		imageUrl: string;
		facilities: string[];
	};

  facilityImageUrls: string[];

	termsAndCondition: string;

	price: {
		weekday: number;
		weekend: number;

		note?: string;

		downPayment?: {
			note: string;
		};
	};

	contact: {
		instagrams: string[];
		villaManagers: {
			name: string;
			phoneNumber: string;
		}[];
		villaGuardians: {
			name: string;
			phoneNumber: string;
		}[];
	};
};
