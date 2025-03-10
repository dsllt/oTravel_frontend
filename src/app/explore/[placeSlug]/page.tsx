import React from 'react';
import PlacePageClient from './places-page-client';
import { Place } from '../../../domain/models/place';
import { getPlaces } from '@lib/usecases/get-places';

export async function generateStaticParams() {
  const places: Place[] = await getPlaces();
  return places.map((place) => ({
    placeSlug: place.slug,
  }));
}

export default async function PlacePage(props: {
  params: Promise<{ placeSlug: string }>;
}) {
  const params = await props.params;
  const { placeSlug } = params;
  return <PlacePageClient slug={placeSlug} />;
}
