import type { ImageMetadata } from "astro";

export type Villa = {
	id: number;
	slug: "garuda" | "kaluska" | "alika" | "lagogo" | "sari";
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
			facilities: {
				floor: number;
				name: string;
				capacity: number;
        isPerBed: boolean;
			}[];
		};
	}[];

	facilityImageUrls: ImageMetadata[];

	terms: {
		points: string[];
		note?: string;
	};

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
