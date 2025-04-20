'use client';
import MenuContainer from '@ui/explore/menu-container';
import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import ReviewBox from '@ui/review-box';
import dynamic from 'next/dynamic';
import usePlacePage from '../../../containers/use-place-page';

import PlaceMainInfo from '@ui/explore/place-main-info';

const Map = dynamic(
  () => import('../../../components/maps/small-map'),

  {
    loading: () => <p>Um mapa está sendo carregado</p>,
    ssr: false,
  },
);

export default function PlacePageClient({ slug }: { slug: string }) {
  return (
    <Suspense>
      <PlacePage slug={slug} />
    </Suspense>
  );
}

function PlacePage({ slug }: { slug: string }) {
  const { data, callback } = usePlacePage();

  useEffect(() => {
    callback.defineCurrentPlace(slug);
  }, [callback, slug]);

  return (
    <div className="w-full px-40 flex flex-col gap-10 mt-10 mb-20 items-center justify-center">
      {callback.isPlaceDataFetched(data.place) ? (
        <>
          <PlaceMainInfo
            displayEditModal={callback.displayEditModal}
            isFavorite={data.isFavorite}
            isLogged={data.isLogged}
            onClickFavorite={callback.onClickFavorite}
            place={data.place}
            placeSchedule={data.placeSchedule}
          />

          <div className="flex w-full justify-between gap-12">
            <MenuContainer
              drinks={data.placeDrinks}
              foods={data.placeFoods}
              placeId={data.place.id}
              activeModal={data.activeModal}
              selectedItem={data.selectedItem}
              onClickCloseEditModal={callback.onClickCloseEditModal}
              onClickOpenEditModal={callback.onClickOpenEditModal}
              onClickConfirmDelete={callback.onClickConfirmDelete}
              onClickSaveEditModal={callback.onClickConfirmEdit}
              newItem={data.newItem}
              setNewItem={data.setNewItem}
              onClickDisplayCreateModal={callback.onClickDisplayCreateModal}
              onClickSaveCreateModal={callback.onClickSaveCreateModal}
              onClickCancelCreateModal={callback.onClickCancelCreateModal}
              setSelectedItem={data.setSelectedItem}
            />
          </div>

          <div className="flex w-full justify-between gap-12">
            <Map place={data.place} />
          </div>

          <div className="w-full">
            <h1 className="font-bold text-xl font-dmSans mb-4">Reviews</h1>
            {data.reviews.map((review) => {
              return <ReviewBox key={review.id} review={review} />;
            })}
            <div className="w-full flex gap-5">
              <textarea
                placeholder="Escreva sua review"
                className="w-full px-6 py-6 rounded-lg bg-gray-900 border border-base-300"
                value={data.newReview}
                onChange={(e) => callback.setNewReview(e.target.value)}
              />
              <div className="space-y-3 w-36">
                <input
                  type="number"
                  placeholder="Dê uma nota"
                  className="w-36 p-4 rounded-lg bg-gray-900 border border-base-300"
                  value={data.rating}
                  onChange={(e) => callback.setRating(e.target.value)}
                  max={5}
                />
                <button
                  className="rounded-lg bg-gray-900 p-4 w-36"
                  onClick={callback.onClickSubmitReview}
                >
                  Review
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <Link href="/explore#search" className="btn btn-primary ">
              Voltar
            </Link>
          </div>
        </>
      ) : (
        <div className="w-[600px] h-[700px] flex items-center justify-center">
          Loading...
        </div>
      )}
    </div>
  );
}
