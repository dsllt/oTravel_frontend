import { z } from 'zod';

const urlPattern = new RegExp(
  '^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
  'i',
);

export const editPlaceSchema = z.object({
  placeName: z.string(),
  placeAddress: z.string(),
  placeCity: z.string(),
  placeCountry: z.string(),
  placeLatitude: z
    .string()
    .transform((value) => parseFloat(value.replace(',', '.')))
    .refine((value) => !isNaN(value), {
      message: 'Latitude must be a valid number',
    }),
  placeLongitude: z
    .string()
    .transform((value) => parseFloat(value.replace(',', '.')))
    .refine((value) => !isNaN(value), {
      message: 'Longitude must be a valid number',
    }),
  placeImage: z.string().refine((value) => urlPattern.test(value), {
    message: 'Must be a valid URL',
  }),
  placeCategory: z.record(z.string()),
  placeDescription: z.string(),
  placeSlug: z
    .string()
    .transform((value) => value.toLowerCase().replace(/\s+/g, '-')),
  placePhone: z.string(),
  placeRating: z.string(),
  mondayOpen: z.string(),
  mondayClose: z.string(),
  tuesdayOpen: z.string(),
  tuesdayClose: z.string(),
  wednesdayOpen: z.string(),
  wednesdayClose: z.string(),
  thursdayOpen: z.string(),
  thursdayClose: z.string(),
  fridayOpen: z.string(),
  fridayClose: z.string(),
  saturdayOpen: z.string(),
  saturdayClose: z.string(),
  sundayOpen: z.string(),
  sundayClose: z.string(),
});

export type EditPlaceSchema = z.infer<typeof editPlaceSchema>;
