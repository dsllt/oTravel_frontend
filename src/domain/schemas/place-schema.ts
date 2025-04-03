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

export const placeSchema = z.object({
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
  mondayOpen: z.string().optional(),
  mondayClose: z.string().optional(),
  tuesdayOpen: z.string().optional(),
  tuesdayClose: z.string().optional(),
  wednesdayOpen: z.string().optional(),
  wednesdayClose: z.string().optional(),
  thursdayOpen: z.string().optional(),
  thursdayClose: z.string().optional(),
  fridayOpen: z.string().optional(),
  fridayClose: z.string().optional(),
  saturdayOpen: z.string().optional(),
  saturdayClose: z.string().optional(),
  sundayOpen: z.string().optional(),
  sundayClose: z.string().optional(),
});

export type PlaceSchema = z.infer<typeof placeSchema>;
