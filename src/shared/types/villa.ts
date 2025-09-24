import type { ImageMetadata } from "astro";

export type Villa = {
	id: number;
	slug: "garuda" | "kaluska" | "aliska" | "lagogo" | "sari";
	name: string;
	imageUrl: ImageMetadata;
	shortName: string;
	isAvailable: boolean;
	buildingCount: number;
	roomCount: number;
	personCapacity: number;
	description: string;
	facilities: string[];

	buildings: {
		name?: string;
		buildingImageUrl?: ImageMetadata;
		bedroomDetail: {
			imageUrl: ImageMetadata;
			facilities: string[];
		};
	}[];

	facilityImageUrls: ImageMetadata[];

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
