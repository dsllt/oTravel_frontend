'use client';
import Image from 'next/image';
import MenuContainer from '@ui/explore/menu-container';
import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { Star, PencilIcon } from 'lucide-react';
import ReviewBox from '@ui/review-box';
import dynamic from 'next/dynamic';
import { StarIcon } from '@heroicons/react/16/solid';
import usePlacePage from '../../../containers/usePlacePage';
import useNavbar from '../../../containers/useNavbar';
import PlaceSchedule from '@ui/place/place-schedule';
import EditPlaceModal from '@ui/place/edit-place-modal';

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
  const { data: dataNavbar } = useNavbar();

  useEffect(() => {
    callback.defineCurrentPlace(slug);
  }, [callback, slug]);

  return (
    <div className="w-full px-40 flex flex-col gap-10 mt-10 mb-20 items-center justify-center">
      {callback.isPlaceDataFetched(data.place) ? (
        <>
          <div className="flex flex-col md:flex-row lg:flex-row w-full h-full justify-center items-start gap-16">
            <div className="max-h-[700px] overflow-hidden w-full md:w-3/5 lg:w-3/5">
              <Image
                src={data.place.imageUrl}
                alt={data.place.name}
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                width={600}
                height={700}
                priority
              />
            </div>
            <div className="flex flex-col gap-0 md:gap-4 lg:gap-4 font-dmSans w-full md:w-full lg:min-w-[600px]">
              <div className="flex w-full justify-between">
                <h1 className="text-5xl uppercase font-semibold max-w-[500px] break-words w-11/12">
                  {data.place.name}
                </h1>
                <div className="flex p-0 justify-start items-start">
                  <button
                    className="hover:bg-slate-700 p-1 rounded-lg text-sm"
                    onClick={() => callback.displayEditModal()}
                  >
                    <PencilIcon className="size-5 " />
                  </button>
                </div>
                <EditPlaceModal
                  placeSchedule={data.placeSchedule}
                  place={data.place}
                />
              </div>

              <div className="flex justify-between">
                {data.place.rating ? (
                  <div className="badge badge-secondary">
                    {data.place.rating}
                  </div>
                ) : (
                  <div className="w-5"></div>
                )}
                {dataNavbar.isLogged && (
                  <div
                    className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-700 rounded-lg p-2"
                    onClick={callback.onClickFavorite}
                  >
                    {data.isFavorite ? (
                      <StarIcon className="size-5 text-blue-600" />
                    ) : (
                      <>
                        <Star className="size-5 text-blue-600" />
                        Favoritar
                      </>
                    )}
                  </div>
                )}
              </div>
              <p className="text-lg text-gray-400 mb-2">
                {data.place.address} - {data.place.city}, {data.place.country}
              </p>
              <PlaceSchedule placeSchedule={data.placeSchedule} />
            </div>
          </div>

          <div className="flex w-full justify-between gap-12">
            <MenuContainer menu={data.placeMenu} placeId={data.place.id} />
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
