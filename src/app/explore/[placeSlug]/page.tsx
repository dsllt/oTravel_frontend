import React from "react";
import PlacePageClient from './places-page-client';
import { placesMock } from '../../../utils/mocks';

export async function generateStaticParams() {
  const places = placesMock.map(place => ({
    placeSlug: place.slug
  }));
  return places;
}

export default function PlacePage({ params }: { params: { placeSlug: string } }) {
  const { placeSlug } = params;

  return (
    <PlacePageClient slug={placeSlug} />
  );
}