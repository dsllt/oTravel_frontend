import React from 'react';
import PlacePageClient from './places-page-client';
import { placesMock } from '../../../utils/mocks';

export async function generateStaticParams() {
  const places = placesMock.map((place) => ({
    placeSlug: place.slug,
  }));
  return places;
}

export default async function PlacePage(props: {
  params: Promise<{ placeSlug: string }>;
}) {
  const params = await props.params;
  const { placeSlug } = params;

  return <PlacePageClient slug={placeSlug} />;
}
